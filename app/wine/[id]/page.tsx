import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWineById, wines } from "@/lib/pairings";
import WinePairingPageClient from "./WinePairingPageClient";
import Script from "next/script";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return wines.map((wine) => ({
    id: wine.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const wine = getWineById(id);

  if (!wine) {
    return {
      title: "Wine Not Found",
    };
  }

  const foodPairings = wines.find((w) => w.id === id)?.foodPairings || [];
  const pairingCount = foodPairings.length;
  const pairingText = pairingCount > 0 
    ? `Discover ${pairingCount} perfect food pairings for ${wine.name}`
    : `Find the perfect food pairings for ${wine.name}`;

  const title = `${wine.name} Food Pairings | Best Foods to Pair with ${wine.name}`;
  const description = `${pairingText}. ${wine.description} ${wine.type}. Expert wine pairing recommendations and pairing guide for ${wine.name}.`;

  const baseUrl =  "https://wineand.food";

  return {
    title,
    description,
    keywords: [
      `${wine.name} food pairing`,
      `${wine.name} pairings`,
      `what to pair with ${wine.name}`,
      `best food for ${wine.name}`,
      `${wine.name} wine pairing`,
      `${wine.type} food pairing`,
      wine.name.toLowerCase(),
      wine.type.toLowerCase(),
      ...wine.characteristics.map((c) => `${c.toLowerCase()} wine pairing`),
    ],
    openGraph: {
      title,
      description,
      type: "website",
      url: `${baseUrl}/wine/${id}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `/wine/${id}`,
    },
  };
}

export default async function WinePairingPage({ params }: Props) {
  const { id } = await params;
  const wine = getWineById(id);

  if (!wine) {
    notFound();
  }

  // Generate structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: wine.name,
    description: wine.description,
    category: wine.type,
    brand: {
      "@type": "Brand",
      name: "Wine",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      ratingCount: "100",
    },
  };

  return (
    <>
      <Script
        id={`wine-${id}-structured-data`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WinePairingPageClient id={id} />
    </>
  );
}
