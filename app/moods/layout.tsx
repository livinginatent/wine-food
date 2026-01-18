import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mood-Based Pairings | Perfect Pairings",
  description: "Discover wine and food pairings curated for every mood - from rainy Tuesday comfort to celebratory splurges. Find the perfect pairing for any moment.",
  keywords: ["wine pairing", "wine food pairing", "mood based pairings", "wine for mood", "food and wine mood"],
  openGraph: {
    title: "Mood-Based Pairings | Perfect Pairings",
    description: "Discover wine and food pairings curated for every mood and moment.",
    url: "/moods",
  },
};

export default function MoodsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
