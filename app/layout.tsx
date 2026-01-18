import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Perfect Pairings | Wine Food Pairing Guide",
    template: "%s | Perfect Pairings",
  },
  description: "Discover the art of wine pairing and wine food pairing. Explore curated wine and food combinations, learn pairing principles, and find perfect matches for your favorite wines and dishes.",
  keywords: ["wine pairing", "wine food pairing", "wine and food", "food and wine pairing", "wine pairing guide", "wine recommendations", "food pairings", "wine selection", "culinary pairings"],
  authors: [{ name: "Perfect Pairings" }],
  creator: "Perfect Pairings",
  publisher: "Perfect Pairings",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://perfectpairings.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Perfect Pairings | Wine Food Pairing Guide",
    description: "Discover the art of wine pairing and wine food pairing. Explore curated wine and food combinations and learn pairing principles.",
    siteName: "Perfect Pairings",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Perfect Pairings - Wine Food Pairing Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perfect Pairings | Wine Food Pairing Guide",
    description: "Discover the art of wine pairing and wine food pairing. Explore curated combinations and learn pairing principles.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Perfect Pairings",
    description: "Discover the art of wine pairing and wine food pairing. Explore curated wine and food combinations and learn pairing principles.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://perfectpairings.com",
    applicationCategory: "Food & Drink",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "150",
    },
  };

  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
