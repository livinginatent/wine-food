import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interactive Wine Pairing Chart | Perfect Pairings",
  description: "Explore an interactive visual guide to wine and food pairings. Hover over food categories to see recommended wine styles, complete with expert pairing explanations.",
  keywords: ["wine pairing chart", "wine food pairing guide", "interactive wine pairing", "wine pairing visualization", "food wine chart"],
  openGraph: {
    title: "Interactive Wine Pairing Chart | Perfect Pairings",
    description: "Explore an interactive visual guide to wine and food pairings.",
    url: "/chart",
  },
};

export default function ChartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
