import type { Metadata } from "next";
import ChartClient from "./ChartClient";

export const metadata: Metadata = {
  metadataBase: new URL("https://wineand.food"),
  title: "Wine & Food Pairing Chart | Perfect Pairings",
  description:
    "Explore our wine and food pairing chart to discover perfect matches for wines and dishes. Find pairings by flavor, style, and cuisine.",
  alternates: {
    canonical: "https://wineand.food/chart",
  },
  openGraph: {
    type: "website",
    url: "https://wineand.food/chart",
    title: "Wine & Food Pairing Chart | Perfect Pairings",
    description:
      "Explore our wine and food pairing chart to discover perfect matches for wines and dishes. Find pairings by flavor, style, and cuisine.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wine & Food Pairing Chart | Perfect Pairings",
    description:
      "Explore our wine and food pairing chart to discover perfect matches for wines and dishes. Find pairings by flavor, style, and cuisine.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ChartPage() {
  return <ChartClient />;
}
