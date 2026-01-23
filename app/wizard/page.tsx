"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, UtensilsCrossed, WandSparkles, Wine } from "lucide-react";

type UserLevel = "casual" | "connoisseur";
type PairingDirection = "food" | "wine";

interface WizardPayload {
  userLevel: UserLevel;
  direction: PairingDirection;
  inputs: Record<string, string>;
  tweak?: string;
}

interface PairingResult {
  perfectMatch: {
    name: string;
    why: string;
    tip: string;
  };
  recommendations: Array<{
    name: string;
    style: "Classic" | "Adventurous" | "Budget-friendly";
    why: string;
    tip: string;
  }>;
}

const casualFoodOptions = {
  proteinMain: ["Beef", "Poultry", "Pork", "Fish", "Pasta", "Veggies"],
  cookingMethod: ["Grilled", "Fried", "Roasted", "Raw", "Stewed", "Smoked"],
  sauce: ["Spicy", "Creamy", "Tomato", "Herby", "Citrus", "None"],
};

const casualWineOptions = {
  wine: ["Red", "White", "Champagne", "Rose", "Orange"],
  bodyStyle: ["Light & Fruity", "Balanced", "Bold & Structured"],
  vibe: ["Cheap & Fun", "Midweek Nice", "Fancy"],
};

const tweakOptions = [
  "Too expensive? Give me a budget alternative.",
  "I hate the suggested varietal. Suggest something else.",
  "Make it vegetarian-friendly.",
];

export default function PairingWizardPage() {
  const [step, setStep] = useState(0);
  const [userLevel, setUserLevel] = useState<UserLevel | null>(null);
  const [direction, setDirection] = useState<PairingDirection | null>(null);
  const [foodInputs, setFoodInputs] = useState({
    proteinMain: "",
    cookingMethod: "",
    sauce: "",
  });
  const [wineInputs, setWineInputs] = useState({
    wine: "",
    bodyStyle: "",
    vibe: "",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PairingResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [lastPayload, setLastPayload] = useState<WizardPayload | null>(null);

  const totalSteps = 4;

  const canContinue = useMemo(() => {
    if (step === 0) return !!userLevel;
    if (step === 1) return !!direction;
    if (step === 2) {
      if (direction === "food") {
        return (
          !!foodInputs.proteinMain &&
          !!foodInputs.cookingMethod &&
          !!foodInputs.sauce
        );
      }
      if (direction === "wine") {
        return (
          !!wineInputs.wine && !!wineInputs.bodyStyle && !!wineInputs.vibe
        );
      }
    }
    return true;
  }, [step, userLevel, direction, foodInputs, wineInputs]);

  const resetWizard = () => {
    setStep(0);
    setUserLevel(null);
    setDirection(null);
    setFoodInputs({ proteinMain: "", cookingMethod: "", sauce: "" });
    setWineInputs({ wine: "", bodyStyle: "", vibe: "" });
    setResult(null);
    setError(null);
    setLastPayload(null);
  };

  const submitWizard = async (payload: WizardPayload) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("/api/pairing-wizard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("We couldn't reach the sommelier right now.");
      }

      const data = await response.json();
      if (data?.error) {
        throw new Error("We couldn't generate a pairing right now.");
      }
      if (data?.data) {
        setResult(data.data as PairingResult);
      } else {
        throw new Error("No recommendations returned.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    if (!userLevel || !direction) return;
    const inputs = direction === "food" ? foodInputs : wineInputs;
    const payload: WizardPayload = { userLevel, direction, inputs };
    setLastPayload(payload);
    submitWizard(payload);
  };

  const handleTweak = (tweak: string) => {
    if (!lastPayload) return;
    submitWizard({ ...lastPayload, tweak });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-6 py-10 md:py-14">
        <Link
          href="/"
          className="group mb-8 inline-flex items-center gap-2 text-accent/70 transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-inter text-sm font-light">Back</span>
        </Link>

        <section className="rounded-sm border border-primary/15 bg-white/60 p-8 shadow-sm md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-3 text-primary">
                <div className="rounded-full bg-primary/10 p-2">
                  <WandSparkles className="h-5 w-5" />
                </div>
                <p className="font-inter text-sm uppercase tracking-[0.3em] text-primary/70">
                  Pairing Wizard
                </p>
              </div>
              <h1 className="mt-3 font-playfair text-3xl font-semibold text-primary md:text-4xl">
                Your sommelier, step by step
              </h1>
              <p className="mt-3 max-w-2xl font-inter text-sm text-accent/70 md:text-base">
                Answer a few questions and get a curated set of wine matches,
                tailored to your taste and the meal on the table.
              </p>
            </div>
            <div className="text-right text-sm text-accent/60">
              Step {step + 1} of {totalSteps}
            </div>
          </div>

          <div className="mt-8 space-y-8">
            {step === 0 && (
              <div className="rounded-sm border border-primary/10 bg-white/70 p-6">
                <h2 className="font-playfair text-2xl text-primary">
                  How deep into the cellar are we going today?
                </h2>
                <p className="mt-2 font-inter text-sm text-accent/70">
                  Choose the level of detail you prefer.
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => setUserLevel("casual")}
                    className={`rounded-sm border px-5 py-4 text-left transition ${
                      userLevel === "casual"
                        ? "border-primary/40 bg-primary/10"
                        : "border-primary/10 bg-white/70 hover:border-primary/30"
                    }`}
                  >
                    <p className="font-playfair text-lg text-primary">
                      Keep it simple
                    </p>
                    <p className="mt-2 font-inter text-sm text-accent/70">
                      Quick, friendly guidance with easy choices.
                    </p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setUserLevel("connoisseur")}
                    className={`rounded-sm border px-5 py-4 text-left transition ${
                      userLevel === "connoisseur"
                        ? "border-primary/40 bg-primary/10"
                        : "border-primary/10 bg-white/70 hover:border-primary/30"
                    }`}
                  >
                    <p className="font-playfair text-lg text-primary">
                      I know my grapes
                    </p>
                    <p className="mt-2 font-inter text-sm text-accent/70">
                      Technical prompts for specific cuts, vintages, and style.
                    </p>
                  </button>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="rounded-sm border border-primary/10 bg-white/70 p-6">
                <h2 className="font-playfair text-2xl text-primary">
                  Do you have the food or the wine already?
                </h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => setDirection("food")}
                    className={`flex items-start gap-4 rounded-sm border px-5 py-4 text-left transition ${
                      direction === "food"
                        ? "border-secondary/50 bg-secondary/10"
                        : "border-primary/10 bg-white/70 hover:border-primary/30"
                    }`}
                  >
                    <div className="rounded-full bg-secondary/20 p-2 text-secondary">
                      <UtensilsCrossed className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-playfair text-lg text-primary">
                        Food-first
                      </p>
                      <p className="mt-2 font-inter text-sm text-accent/70">
                        Tell us what you're cooking and we’ll match the wine.
                      </p>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDirection("wine")}
                    className={`flex items-start gap-4 rounded-sm border px-5 py-4 text-left transition ${
                      direction === "wine"
                        ? "border-secondary/50 bg-secondary/10"
                        : "border-primary/10 bg-white/70 hover:border-primary/30"
                    }`}
                  >
                    <div className="rounded-full bg-secondary/20 p-2 text-secondary">
                      <Wine className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-playfair text-lg text-primary">
                        Wine-first
                      </p>
                      <p className="mt-2 font-inter text-sm text-accent/70">
                        Already picked a bottle? We’ll find the perfect dish.
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            )}

            {step === 2 && direction === "food" && userLevel === "casual" && (
              <div className="rounded-sm border border-primary/10 bg-white/70 p-6">
                <h2 className="font-playfair text-2xl text-primary">
                  Tell us about the dish
                </h2>
                <div className="mt-6 space-y-6">
                  <div>
                    <p className="font-inter text-sm uppercase tracking-[0.2em] text-accent/60">
                      Protein / Main
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {casualFoodOptions.proteinMain.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() =>
                            setFoodInputs((prev) => ({
                              ...prev,
                              proteinMain: option,
                            }))
                          }
                          className={`rounded-full border px-4 py-2 text-sm ${
                            foodInputs.proteinMain === option
                              ? "border-primary/40 bg-primary/10 text-primary"
                              : "border-primary/10 bg-white/70 text-accent/70 hover:border-primary/30"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-inter text-sm uppercase tracking-[0.2em] text-accent/60">
                      Cooking Method
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {casualFoodOptions.cookingMethod.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() =>
                            setFoodInputs((prev) => ({
                              ...prev,
                              cookingMethod: option,
                            }))
                          }
                          className={`rounded-full border px-4 py-2 text-sm ${
                            foodInputs.cookingMethod === option
                              ? "border-primary/40 bg-primary/10 text-primary"
                              : "border-primary/10 bg-white/70 text-accent/70 hover:border-primary/30"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-inter text-sm uppercase tracking-[0.2em] text-accent/60">
                      Dominant Sauce
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {casualFoodOptions.sauce.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() =>
                            setFoodInputs((prev) => ({
                              ...prev,
                              sauce: option,
                            }))
                          }
                          className={`rounded-full border px-4 py-2 text-sm ${
                            foodInputs.sauce === option
                              ? "border-primary/40 bg-primary/10 text-primary"
                              : "border-primary/10 bg-white/70 text-accent/70 hover:border-primary/30"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && direction === "food" && userLevel === "connoisseur" && (
              <div className="rounded-sm border border-primary/10 bg-white/70 p-6">
                <h2 className="font-playfair text-2xl text-primary">
                  Tell us about the dish
                </h2>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <label className="flex flex-col gap-2">
                    <span className="font-inter text-xs uppercase tracking-[0.2em] text-accent/60">
                      Protein / Main
                    </span>
                    <input
                      value={foodInputs.proteinMain}
                      onChange={(event) =>
                        setFoodInputs((prev) => ({
                          ...prev,
                          proteinMain: event.target.value,
                        }))
                      }
                      placeholder="Ribeye, halibut, maitake"
                      className="rounded-sm border border-primary/10 bg-white/80 px-3 py-2 font-inter text-sm text-accent/80"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="font-inter text-xs uppercase tracking-[0.2em] text-accent/60">
                      Cooking Method
                    </span>
                    <input
                      value={foodInputs.cookingMethod}
                      onChange={(event) =>
                        setFoodInputs((prev) => ({
                          ...prev,
                          cookingMethod: event.target.value,
                        }))
                      }
                      placeholder="Braised, sous-vide, blackened"
                      className="rounded-sm border border-primary/10 bg-white/80 px-3 py-2 font-inter text-sm text-accent/80"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="font-inter text-xs uppercase tracking-[0.2em] text-accent/60">
                      Dominant Sauce
                    </span>
                    <input
                      value={foodInputs.sauce}
                      onChange={(event) =>
                        setFoodInputs((prev) => ({
                          ...prev,
                          sauce: event.target.value,
                        }))
                      }
                      placeholder="Reduction, citrus, emulsion"
                      className="rounded-sm border border-primary/10 bg-white/80 px-3 py-2 font-inter text-sm text-accent/80"
                    />
                  </label>
                </div>
              </div>
            )}

            {step === 2 && direction === "wine" && userLevel === "casual" && (
              <div className="rounded-sm border border-primary/10 bg-white/70 p-6">
                <h2 className="font-playfair text-2xl text-primary">
                  Tell us about the wine
                </h2>
                <div className="mt-6 space-y-6">
                  <div>
                    <p className="font-inter text-sm uppercase tracking-[0.2em] text-accent/60">
                      The Wine
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {casualWineOptions.wine.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() =>
                            setWineInputs((prev) => ({ ...prev, wine: option }))
                          }
                          className={`rounded-full border px-4 py-2 text-sm ${
                            wineInputs.wine === option
                              ? "border-primary/40 bg-primary/10 text-primary"
                              : "border-primary/10 bg-white/70 text-accent/70 hover:border-primary/30"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-inter text-sm uppercase tracking-[0.2em] text-accent/60">
                      Body / Style
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {casualWineOptions.bodyStyle.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() =>
                            setWineInputs((prev) => ({
                              ...prev,
                              bodyStyle: option,
                            }))
                          }
                          className={`rounded-full border px-4 py-2 text-sm ${
                            wineInputs.bodyStyle === option
                              ? "border-primary/40 bg-primary/10 text-primary"
                              : "border-primary/10 bg-white/70 text-accent/70 hover:border-primary/30"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-inter text-sm uppercase tracking-[0.2em] text-accent/60">
                      The Vibe
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {casualWineOptions.vibe.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() =>
                            setWineInputs((prev) => ({ ...prev, vibe: option }))
                          }
                          className={`rounded-full border px-4 py-2 text-sm ${
                            wineInputs.vibe === option
                              ? "border-primary/40 bg-primary/10 text-primary"
                              : "border-primary/10 bg-white/70 text-accent/70 hover:border-primary/30"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && direction === "wine" && userLevel === "connoisseur" && (
              <div className="rounded-sm border border-primary/10 bg-white/70 p-6">
                <h2 className="font-playfair text-2xl text-primary">
                  Tell us about the wine
                </h2>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <label className="flex flex-col gap-2">
                    <span className="font-inter text-xs uppercase tracking-[0.2em] text-accent/60">
                      The Wine
                    </span>
                    <input
                      value={wineInputs.wine}
                      onChange={(event) =>
                        setWineInputs((prev) => ({
                          ...prev,
                          wine: event.target.value,
                        }))
                      }
                      placeholder="Nebbiolo, Sancerre, Barolo"
                      className="rounded-sm border border-primary/10 bg-white/80 px-3 py-2 font-inter text-sm text-accent/80"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="font-inter text-xs uppercase tracking-[0.2em] text-accent/60">
                      Body / Style
                    </span>
                    <input
                      value={wineInputs.bodyStyle}
                      onChange={(event) =>
                        setWineInputs((prev) => ({
                          ...prev,
                          bodyStyle: event.target.value,
                        }))
                      }
                      placeholder="High acidity, firm tannins"
                      className="rounded-sm border border-primary/10 bg-white/80 px-3 py-2 font-inter text-sm text-accent/80"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="font-inter text-xs uppercase tracking-[0.2em] text-accent/60">
                      The Vibe
                    </span>
                    <input
                      value={wineInputs.vibe}
                      onChange={(event) =>
                        setWineInputs((prev) => ({
                          ...prev,
                          vibe: event.target.value,
                        }))
                      }
                      placeholder="Vintage, producer, or occasion"
                      className="rounded-sm border border-primary/10 bg-white/80 px-3 py-2 font-inter text-sm text-accent/80"
                    />
                  </label>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="rounded-sm border border-primary/10 bg-white/70 p-6">
                <h2 className="font-playfair text-2xl text-primary">
                  Confirm your details
                </h2>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-sm border border-primary/10 bg-white/80 p-4">
                    <p className="font-inter text-xs uppercase tracking-[0.2em] text-accent/60">
                      Level
                    </p>
                    <p className="mt-2 font-playfair text-lg text-primary capitalize">
                      {userLevel}
                    </p>
                  </div>
                  <div className="rounded-sm border border-primary/10 bg-white/80 p-4">
                    <p className="font-inter text-xs uppercase tracking-[0.2em] text-accent/60">
                      Direction
                    </p>
                    <p className="mt-2 font-playfair text-lg text-primary capitalize">
                      {direction === "food" ? "Food-first" : "Wine-first"}
                    </p>
                  </div>
                  <div className="rounded-sm border border-primary/10 bg-white/80 p-4">
                    <p className="font-inter text-xs uppercase tracking-[0.2em] text-accent/60">
                      Details
                    </p>
                    <p className="mt-2 font-inter text-sm text-accent/70">
                      {direction === "food"
                        ? `${foodInputs.proteinMain}, ${foodInputs.cookingMethod}, ${foodInputs.sauce}`
                        : `${wineInputs.wine}, ${wineInputs.bodyStyle}, ${wineInputs.vibe}`}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="mt-6 inline-flex items-center gap-3 rounded-sm border border-primary/30 bg-primary/10 px-6 py-3 font-inter text-sm text-primary transition hover:border-primary/50 hover:bg-primary/20 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Consulting the cellar..." : "Get my pairings"}
                </button>
              </div>
            )}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
              disabled={step === 0}
              className="rounded-sm border border-primary/20 px-4 py-2 font-inter text-sm text-accent/70 transition hover:border-primary/40 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Back
            </button>
            {step < totalSteps - 1 && (
              <button
                type="button"
                onClick={() => setStep((prev) => prev + 1)}
                disabled={!canContinue}
                className="rounded-sm border border-primary/30 bg-primary/10 px-4 py-2 font-inter text-sm text-primary transition hover:border-primary/50 hover:bg-primary/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Continue
              </button>
            )}
            <button
              type="button"
              onClick={resetWizard}
              className="rounded-sm border border-accent/20 px-4 py-2 font-inter text-sm text-accent/70 transition hover:border-accent/40"
            >
              Start over
            </button>
          </div>
        </section>

        {(result || error) && (
          <section className="mt-10 rounded-sm border border-primary/15 bg-white/60 p-8 shadow-sm md:p-10">
            <h2 className="font-playfair text-2xl text-primary">
              Your pairing reveal
            </h2>
            {error && (
              <p className="mt-4 font-inter text-sm text-accent/70">{error}</p>
            )}
            {result && (
              <div className="mt-6 space-y-6">
                <div className="rounded-sm border border-primary/20 bg-white/80 p-6">
                  <p className="font-inter text-xs uppercase tracking-[0.2em] text-accent/60">
                    The perfect match
                  </p>
                  <h3 className="mt-3 font-playfair text-2xl text-primary">
                    {result.perfectMatch.name}
                  </h3>
                  <p className="mt-3 font-inter text-sm text-accent/80">
                    <span className="font-semibold text-accent">Why:</span>{" "}
                    {result.perfectMatch.why}
                  </p>
                  <p className="mt-2 font-inter text-sm text-accent/80">
                    <span className="font-semibold text-accent">Pro Tip:</span>{" "}
                    {result.perfectMatch.tip}
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {result.recommendations.map((rec) => (
                    <div
                      key={`${rec.style}-${rec.name}`}
                      className="rounded-sm border border-primary/10 bg-white/80 p-5"
                    >
                      <p className="font-inter text-xs uppercase tracking-[0.2em] text-accent/60">
                        {rec.style}
                      </p>
                      <h4 className="mt-2 font-playfair text-lg text-primary">
                        {rec.name}
                      </h4>
                      <p className="mt-3 font-inter text-xs text-accent/70">
                        {rec.why}
                      </p>
                      <p className="mt-2 font-inter text-xs text-accent/70">
                        <span className="font-semibold text-accent">Tip:</span>{" "}
                        {rec.tip}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-sm border border-primary/10 bg-white/80 p-5">
                  <p className="font-inter text-xs uppercase tracking-[0.2em] text-accent/60">
                    One-click tweaks
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {tweakOptions.map((tweak) => (
                      <button
                        key={tweak}
                        type="button"
                        onClick={() => handleTweak(tweak)}
                        className="rounded-full border border-primary/20 px-4 py-2 font-inter text-xs text-accent/70 transition hover:border-primary/40"
                      >
                        {tweak}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}
