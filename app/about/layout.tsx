import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Perfect Pairings",
  description: "Learn about Perfect Pairings - your guide to wine pairing and wine food pairing. Discover our mission to help you create harmonious culinary experiences through expert wine and food combinations.",
  keywords: ["wine pairing", "wine food pairing", "about wine pairing", "wine pairing guide"],
  openGraph: {
    title: "About | Perfect Pairings",
    description: "Learn about Perfect Pairings - your guide to wine pairing and wine food pairing.",
    url: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
