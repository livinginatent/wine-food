import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import GrapesPageClient from "./GrapesPageClient";
import { grapes } from "@/lib/grapes";

export const metadata: Metadata = {
  title: "Wine Grapes Guide | Origins, Flavor, and Pairing Clues",
  description:
    "Explore classic wine grapes by origin, flavor profile, and character. Tap a grape to learn its story, style, and what foods it loves.",
  keywords: [
    "wine grapes",
    "grape varieties",
    "wine flavor",
    "wine origins",
    "wine pairing",
    "red grapes",
    "white grapes",
  ],
  openGraph: {
    title: "Wine Grapes Guide",
    description:
      "Explore classic wine grapes by origin, flavor profile, and character.",
    type: "website",
    url: "/grapes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wine Grapes Guide",
    description:
      "Explore classic wine grapes by origin, flavor profile, and character.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Wine Grapes Guide",
  description:
    "Explore classic wine grapes by origin, flavor profile, and character.",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: grapes.slice(0, 12).map((grape, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: grape.name,
    })),
  },
};

export default function GrapesPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#2B1A14]">
      <main className="container mx-auto px-4 py-10 md:py-14">
        {/* Back Button */}
        <Link
          href="/"
          className="group mb-8 inline-flex items-center gap-2 text-[#8B1A1A]/70 transition-colors hover:text-[#8B1A1A]"
        >
          <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          <span className="font-inter text-sm font-light">Back</span>
        </Link>
        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-inter text-sm uppercase tracking-[0.2em] text-[#8B1A1A]/70">
              Wine Grapes
            </p>
            <h1 className="mt-3 font-playfair text-4xl font-bold text-[#8B1A1A] sm:text-5xl">
              Discover the grapes that shape your glass
            </h1>
            <p className="mt-4 max-w-2xl font-inter text-base text-[#5C3A2E] sm:text-lg">
              From bright, mineral whites to silky reds, each grape brings its
              own story. Browse by variety to learn its origin, typical aromas,
              and the styles it shines in.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-[#5C3A2E]">
              <div className="rounded-full border border-[#8B1A1A]/20 bg-white/70 px-4 py-2">
                {grapes.length}+ varieties
              </div>
              <div className="rounded-full border border-[#8B1A1A]/20 bg-white/70 px-4 py-2">
                Flavor and origin notes
              </div>
              <div className="rounded-full border border-[#8B1A1A]/20 bg-white/70 px-4 py-2">
                Tap to explore
              </div>
            </div>
          </div>
          <div className="rounded- border border-[#8B1A1A]/10 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8">
            <h2 className="font-playfair text-2xl font-semibold text-[#8B1A1A]">
              How to use this guide
            </h2>
            <ol className="mt-4 space-y-3 font-inter text-sm text-[#5C3A2E] sm:text-base">
              <li>
                1. Tap a grape to open a quick profile with history and
                characteristics.
              </li>
              <li>
                2. Compare origins and styles to understand why wines taste the
                way they do.
              </li>
              <li>
                3. Use the clues to choose bottles that match your meal.
              </li>
            </ol>
     
          </div>
        </section>

        <section className="mt-12" aria-label="Browse wine grapes">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-playfair text-3xl font-semibold text-[#8B1A1A]">
                Browse all grapes
              </h2>
              <p className="mt-2 font-inter text-sm text-[#5C3A2E] sm:text-base">
                Tap a card to open details on origin, style, and character.
              </p>
            </div>
            <p className="font-inter text-xs uppercase tracking-[0.2em] text-[#8B1A1A]/60">
              Updated regularly
            </p>
          </div>
          <div className="mt-6 rounded-sm border border-[#8B1A1A]/10 bg-white/70 p-4 shadow-sm sm:p-6">
            <GrapesPageClient />
          </div>
        </section>

        <section className="mt-12 rounded-sm border border-[#8B1A1A]/10 bg-white/80 p-6 shadow-sm sm:p-8">
          <h2 className="font-playfair text-2xl font-semibold text-[#8B1A1A]">
            Why grapes matter
          </h2>
          <p className="mt-3 max-w-3xl font-inter text-sm text-[#5C3A2E] sm:text-base">
            Grapes are the foundation of wine. Climate, soil, and winemaking
            choices shape each variety into a different experience, from crisp
            citrus-driven whites to structured, age-worthy reds. Learning grape
            profiles makes it easier to predict the wine in your glass and pair
            it confidently with food.
          </p>
        </section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
