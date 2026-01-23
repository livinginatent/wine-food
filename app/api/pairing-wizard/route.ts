const DEEPSEEK_API_URL = "https://api.deepseek.com/chat/completions";

type WizardPayload = {
  userLevel: "casual" | "connoisseur";
  direction: "food" | "wine";
  inputs: Record<string, string>;
  tweak?: string;
};

function buildPrompt(payload: WizardPayload) {
  const { userLevel, direction, inputs, tweak } = payload;
  const levelLabel = userLevel === "connoisseur" ? "Connoisseur" : "Casual";
  const directionLabel = direction === "food" ? "Food-first" : "Wine-first";
  const details =
    direction === "food"
      ? `Protein/Main: ${inputs.proteinMain || "Unknown"}; Cooking Method: ${
          inputs.cookingMethod || "Unknown"
        }; Dominant Sauce: ${inputs.sauce || "Unknown"}`
      : `Wine: ${inputs.wine || "Unknown"}; Body/Style: ${
          inputs.bodyStyle || "Unknown"
        }; Vibe: ${inputs.vibe || "Unknown"}`;

  const tweakLine = tweak ? `User tweak request: ${tweak}` : "";

  return `
You are a world-class Sommelier.
The user is a ${levelLabel}.
Pairing direction: ${directionLabel}.
Details: ${details}.
${tweakLine}

Provide 3 recommendations: 1 Classic, 1 Adventurous, 1 Budget-friendly.
Include a "Why it works" and "Pro Tip" for each.

Return JSON only with this exact shape:
{
  "perfectMatch": { "name": "", "why": "", "tip": "" },
  "recommendations": [
    { "name": "", "style": "Classic", "why": "", "tip": "" },
    { "name": "", "style": "Adventurous", "why": "", "tip": "" },
    { "name": "", "style": "Budget-friendly", "why": "", "tip": "" }
  ]
}
`.trim();
}

function extractJsonContent(content: string) {
  if (!content) return null;

  const fencedMatch = content.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  if (fencedMatch?.[1]) {
    return fencedMatch[1].trim();
  }

  const start = content.indexOf("{");
  const end = content.lastIndexOf("}");
  if (start !== -1 && end !== -1 && end > start) {
    return content.slice(start, end + 1).trim();
  }

  return null;
}

export async function POST(request: Request) {
  const apiKey = process.env.DEEPSEEK_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "Missing DEEPSEEK_API_KEY environment variable." },
      { status: 500 }
    );
  }

  let payload: WizardPayload;
  try {
    payload = (await request.json()) as WizardPayload;
  } catch (error) {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const prompt = buildPrompt(payload);

  try {
    const deepseekResponse = await fetch(DEEPSEEK_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        temperature: 0.7,
        messages: [
          {
            role: "system",
            content:
              "You are a precise assistant. Return only valid JSON matching the schema.",
          },
          { role: "user", content: prompt },
        ],
      }),
    });

    if (!deepseekResponse.ok) {
      return Response.json(
        { error: "DeepSeek error" },
        { status: 500 }
      );
    }

    const responseJson = await deepseekResponse.json();
    const content = responseJson?.choices?.[0]?.message?.content ?? "";

    let parsed = null;
    const extractable = extractJsonContent(content);
    try {
      parsed = JSON.parse(extractable ?? content);
    } catch (error) {
      parsed = null;
    }

    if (!parsed) {
      return Response.json(
        { error: "Unable to parse recommendations." },
        { status: 502 }
      );
    }

    return Response.json({ data: parsed });
  } catch (error) {
    return Response.json(
      { error: "Failed to connect to DeepSeek." },
      { status: 500 }
    );
  }
}
