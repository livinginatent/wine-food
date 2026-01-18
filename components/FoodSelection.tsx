/* eslint-disable react/no-unescaped-entities */
"use client";

import { UtensilsCrossed, ArrowLeft, Search } from "lucide-react";
import { foods } from "@/lib/pairings";
import { useState, useMemo } from "react";

interface FoodSelectionProps {
  onSelect: (foodId: string) => void;
  onBack: () => void;
}

export default function FoodSelection({ onSelect, onBack }: FoodSelectionProps) {
  const [hoveredFood, setHoveredFood] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFoods = useMemo(() => {
    if (!searchQuery.trim()) return foods;
    
    const query = searchQuery.toLowerCase();
    return foods.filter(food => 
      food.name.toLowerCase().includes(query) ||
      food.category.toLowerCase().includes(query) ||
      food.description.toLowerCase().includes(query) ||
      food.characteristics.some(char => char.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-secondary/20 bg-white/30 px-6 py-8">
        <div className="mx-auto flex max-w-6xl items-center gap-6">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-accent/70 transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-inter text-sm font-light">Back</span>
          </button>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-secondary/20 p-3">
              <UtensilsCrossed className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <h1 className="font-playfair text-2xl font-medium text-accent">
                Select Your Food
              </h1>
              <p className="font-inter text-sm font-light text-accent/60">
                Choose a dish to discover perfect wine pairings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="border-b border-secondary/20 bg-white/20 px-6 py-6">
        <div className="mx-auto max-w-6xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-accent/40" />
            <input
              type="text"
              placeholder="Search foods by name, category, or characteristics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-sm border border-secondary/30 bg-white/50 px-12 py-4 font-inter text-sm font-light text-accent placeholder:text-accent/40 focus:border-secondary/50 focus:outline-none focus:ring-1 focus:ring-secondary/20"
            />
          </div>
        </div>
      </section>

      {/* Food Grid */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          {filteredFoods.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-inter text-base font-light text-accent/60">
                No foods found matching "{searchQuery}"
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredFoods.map((food) => (
              <button
                key={food.id}
                onMouseEnter={() => setHoveredFood(food.id)}
                onMouseLeave={() => setHoveredFood(null)}
                onClick={() => onSelect(food.id)}
                className="group relative overflow-hidden rounded-sm border border-secondary/30 bg-white/50 p-8 text-left transition-all duration-500 hover:border-secondary/50 hover:shadow-lg"
              >
                <div className="relative z-10 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-playfair text-2xl font-medium text-accent">
                      {food.name}
                    </h3>
                    <p className="font-inter text-sm font-light text-secondary">
                      {food.category}
                    </p>
                  </div>
                  <p className="font-inter text-sm font-light leading-relaxed text-accent/70">
                    {food.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {food.characteristics.slice(0, 3).map((char) => (
                      <span
                        key={char}
                        className="rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 font-inter text-xs font-light text-accent"
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
