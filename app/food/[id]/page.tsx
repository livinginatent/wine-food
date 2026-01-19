import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFoodById, foods } from "@/lib/pairings";
import FoodPairingPageClient from "./FoodPairingPageClient";
import Script from "next/script";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return foods.map((food) => ({
    id: food.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const food = getFoodById(id);

  if (!food) {
    return {
      title: "Food Not Found",
    };
  }

  const winePairings = foods.find((f) => f.id === id)?.winePairings || [];
  const pairingCount = winePairings.length;
  const pairingText = pairingCount > 0 
    ? `Discover ${pairingCount} perfect wine pairings for ${food.name}`
    : `Find the perfect wine pairings for ${food.name}`;

  const title = `${food.name} Wine Pairings | Best Wines to Pair with ${food.name}`;
  const description = `${pairingText}. ${food.description} ${food.category}. Expert wine pairing recommendations and pairing guide for ${food.name}.`;

  const baseUrl =  "https://wineand.food";

  return {
    title,
    description,
    keywords: [
      `${food.name} wine pairing`,
      `${food.name} pairings`,
      `what wine with ${food.name}`,
      `best wine for ${food.name}`,
      `${food.name} food pairing`,
      `${food.category} wine pairing`,
      food.name.toLowerCase(),
      food.category.toLowerCase(),
      ...food.characteristics.map((c) => `${c.toLowerCase()} wine pairing`),
    ],
    openGraph: {
      title,
      description,
      type: "website",
      url: `${baseUrl}/food/${id}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `/food/${id}`,
    },
  };
}

export default async function FoodPairingPage({ params }: Props) {
  const { id } = await params;
  const food = getFoodById(id);

  if (!food) {
    notFound();
  }

  // Generate structured data
  const winePairings = foods.find((f) => f.id === id)?.winePairings || [];
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: food.name,
    description: food.description,
    servesCuisine: food.category,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      ratingCount: "100",
    },
  };

  return (
    <>
      <Script
        id={`food-${id}-structured-data`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FoodPairingPageClient id={id} />
    </>
  );
}
