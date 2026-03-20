/* eslint-disable react/no-unescaped-entities */
"use client";

import { ArrowLeft, Search } from "lucide-react";
import { wines } from "@/lib/pairings";
import { useState, useMemo } from "react";
import { IoIosWine } from "react-icons/io";
import { getWineTypeColor } from "@/lib/wineTypeColor";
import Link from "next/link";

interface WineSelectionProps {
  onSelect: (wineId: string) => void;
  onBack: () => void;
}

export default function WineSelection({ onSelect, onBack }: WineSelectionProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredWines = useMemo(() => {
    if (!searchQuery.trim()) return wines;
    
    const query = searchQuery.toLowerCase();
    return wines.filter(wine => 
      wine.name.toLowerCase().includes(query) ||
      wine.type.toLowerCase().includes(query) ||
      wine.description.toLowerCase().includes(query) ||
      wine.characteristics.some(char => char.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-primary/10 bg-white/30 px-6 py-8">
        <div className="mx-auto flex max-w-6xl items-center gap-6">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-accent/70 transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-inter text-sm font-light">Back</span>
          </button>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-primary/10 p-3">
              <IoIosWine  className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="font-playfair text-2xl font-medium text-primary">
                Select Your Wine to Pair with Food
              </h1>
              <p className="font-inter text-sm font-light text-accent/60">
                Choose a wine to discover perfect food pairings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wine food pairing context */}
      <section className="border-b border-primary/10 bg-white/10 px-6 py-6">
        <div className="mx-auto max-w-6xl space-y-3">
          <h2 className="font-playfair text-xl font-medium text-primary">
            Wine food pairing starts with your wine
          </h2>
          <p className="font-inter text-sm font-light text-accent/80 leading-relaxed">
            This wine selection page is the first step in wine food pairing. Pick a wine from the grid (or search by name, type, or characteristics) and use the chart experience to match it to dishes. The point isn’t to find one “perfect” answer; it’s to understand how your wine’s balance behaves with real food.
          </p>
          <p className="font-inter text-sm font-light text-accent/80 leading-relaxed">
            When you compare wine food pairing results, read the reason as a mechanism. Acidity usually works as a reset button for rich sauces, fat, and bitter greens. Tannin is the structure lever: it helps when the dish has protein, firm texture, or cured/aged notes, and it can soften astringency when the balance is right. Body affects weight: fuller wines tend to follow through with roasted, caramelized, and umami-heavy flavors, while lighter wines keep delicate meals from getting pushed aside.
          </p>
          <p className="font-inter text-sm font-light text-accent/80 leading-relaxed">
            For sweet courses, use the same rule every time: match sweetness. If the dessert is sweet and the wine isn’t, wine food pairing often tastes washed out. If you see bubbles in your matches, treat them as a palate cleanser that makes heavier bites feel cleaner between sips.
          </p>
          <p className="font-inter text-sm font-light text-accent/80 leading-relaxed">
            In your first session of wine food pairing, pick one wine and test the logic across the dishes you select. If several matches mention acidity, you probably have a wine that handles fat and sauces. If the results lean toward tannin, look for plates with protein or firmer texture. Keep an eye on sweetness: desserts and sweet sauces need a wine food pairing that has enough sweetness to keep the wine from tasting sharper and thinner.
          </p>
          <p className="font-inter text-sm font-light text-accent/70 leading-relaxed">
            If you want to switch starting points, continue with the homepage tools:{" "}
            <Link className="text-accent hover:underline" href="/wine">
              start from a wine
            </Link>
            ,{" "}
            <Link className="text-accent hover:underline" href="/food">
              start from a dish
            </Link>
            ,{" "}
            <Link className="text-accent hover:underline" href="/wizard">
              smart sommelier
            </Link>
            ,{" "}
            <Link className="text-accent hover:underline" href="/moods">
              mood-based pairings
            </Link>
            , and{" "}
            <Link className="text-accent hover:underline" href="/guide">
              the pairing guide
            </Link>
            . When you’re ready to connect categories to styles, open{" "}
            <Link className="text-accent hover:underline" href="/chart">
              the interactive chart
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="border-b border-primary/10 bg-white/20 px-6 py-6">
        <div className="mx-auto max-w-6xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-accent/40" />
            <input
              type="text"
              placeholder="Search wines by name, type, or characteristics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-sm border border-primary/20 bg-white/50 px-12 py-4 font-inter text-sm font-light text-accent placeholder:text-accent/40 focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20"
            />
          </div>
        </div>
      </section>

      {/* Wine Grid */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          {filteredWines.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-inter text-base font-light text-accent/60">
                No wines found matching "{searchQuery}"
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredWines.map((wine) => (
              <button
                key={wine.id}
                onClick={() => onSelect(wine.id)}
                className="group relative overflow-hidden rounded-sm border border-primary/20 bg-white/50 p-8 text-left transition-all duration-500 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="relative z-10 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-playfair text-2xl font-medium text-primary">
                      {wine.name}
                    </h3>
                    <p className={`font-inter text-sm font-light ${getWineTypeColor(wine.type)}`}>
                      {wine.type}
                      {wine.origin && (
                        <span className="text-accent/60"> • {wine.origin}</span>
                      )}
                    </p>
                  </div>
                  <p className="font-inter text-sm font-light leading-relaxed text-accent/70">
                    {wine.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {wine.characteristics.slice(0, 3).map((char) => (
                      <span
                        key={char}
                        className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-inter text-xs font-light text-primary"
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
