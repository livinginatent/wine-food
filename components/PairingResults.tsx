"use client";

import { ArrowLeft, UtensilsCrossed } from "lucide-react";
import { getWineById, getFoodById, getFoodPairingsForWine, getWinePairingsForFood } from "@/lib/pairings";
import { IoIosWine } from "react-icons/io";
import { getWineTypeColor } from "@/lib/wineTypeColor";

interface PairingResultsProps {
  mode: "wine" | "food";
  selectedId: string;
  highlightedFoodId?: string;
  onBack: () => void;
  onStartOver: () => void;
}

export default function PairingResults({ mode, selectedId, highlightedFoodId, onBack, onStartOver }: PairingResultsProps) {
  const selectedWine = mode === "wine" ? getWineById(selectedId) : null;
  const selectedFood = mode === "food" ? getFoodById(selectedId) : null;
  
  const foodPairings = mode === "wine" && selectedWine ? getFoodPairingsForWine(selectedId) : [];
  const winePairings = mode === "food" && selectedFood ? getWinePairingsForFood(selectedId) : [];
  
  // If a food is highlighted, move it to the front of the list
  const sortedFoodPairings = highlightedFoodId 
    ? [
        ...foodPairings.filter(f => f.id === highlightedFoodId),
        ...foodPairings.filter(f => f.id !== highlightedFoodId)
      ]
    : foodPairings;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-primary/10 bg-white/30 px-6 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-accent/70 transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-inter text-sm font-light">Back</span>
          </button>
          <button
            onClick={onStartOver}
            className="font-inter text-sm font-light text-accent/70 transition-colors hover:text-accent"
          >
            Start Over
          </button>
        </div>
      </section>

      {/* Selected Item */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-sm border border-primary/20 bg-white/50 p-10">
            <div className="flex items-start gap-6">
              <div className={`rounded-full p-4 ${mode === "wine" ? "bg-primary/10" : "bg-secondary/20"}`}>
                {mode === "wine" ? (
                  <IoIosWine className="h-8 w-8 text-primary" />
                ) : (
                  <UtensilsCrossed className="h-8 w-8 text-secondary" />
                )}
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h1 className="font-playfair text-4xl font-medium text-primary">
                    {mode === "wine" 
                      ? `${selectedWine?.name} Food Pairings`
                      : `${selectedFood?.name} Wine Pairings`}
                  </h1>
                  {mode === "wine" ? (
                    <p
                      className={`mt-2 font-inter text-base font-light ${
                        selectedWine ? getWineTypeColor(selectedWine.type) : "text-secondary"
                      }`}
                    >
                      {selectedWine?.type}
                      {selectedWine?.origin && ` • ${selectedWine.origin}`}
                    </p>
                  ) : (
                    <p className="mt-2 font-inter text-base font-light text-secondary">
                      {selectedFood?.category}
                    </p>
                  )}
                </div>
                <p className="font-inter text-base font-light leading-relaxed text-accent/80">
                  {selectedWine?.description || selectedFood?.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {(selectedWine?.characteristics || selectedFood?.characteristics || []).map((char) => (
                    <span
                      key={char}
                      className={`rounded-full border px-3 py-1 font-inter text-xs font-light ${
                        mode === "wine"
                          ? "border-primary/20 bg-primary/5 text-primary"
                          : "border-secondary/30 bg-secondary/10 text-accent"
                      }`}
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pairing Suggestions */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="text-center">
            <h2 className="font-playfair text-3xl font-medium text-primary">
              Perfect Pairings
            </h2>
            <div className="mx-auto mt-3 h-px w-24 bg-secondary"></div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {mode === "wine" ? (
              sortedFoodPairings.length > 0 ? (
                sortedFoodPairings.map((food) => (
                  <div
                    key={food.id}
                    className={`group rounded-sm border p-6 transition-all duration-300 hover:shadow-md ${
                      food.id === highlightedFoodId
                        ? "border-secondary/60 bg-secondary/10 shadow-md"
                        : "border-secondary/30 bg-white/50 hover:border-secondary/50"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-secondary/20 p-3">
                        <UtensilsCrossed className="h-5 w-5 text-secondary" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h4 className="font-playfair text-xl font-medium text-accent">
                          {food.name}
                        </h4>
                        <p className="font-inter text-sm font-light text-accent/70">
                          {food.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {food.characteristics.slice(0, 2).map((char) => (
                            <span
                              key={char}
                              className="rounded-full border border-secondary/30 bg-secondary/10 px-2 py-1 font-inter text-xs font-light text-accent"
                            >
                              {char}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center py-12">
                  <p className="font-inter text-base font-light text-accent/60">
                    No specific pairings found. Try exploring different options!
                  </p>
                </div>
              )
            ) : (
              winePairings.length > 0 ? (
                winePairings.map((wine) => (
                  <div
                    key={wine.id}
                    className="group rounded-sm border border-primary/20 bg-white/50 p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <IoIosWine className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h4 className="font-playfair text-xl font-medium text-primary">
                          {wine.name}
                        </h4>
                        <p
                          className={`font-inter text-sm font-light ${getWineTypeColor(
                            wine.type
                          )}`}
                        >
                          {wine.type}
                          {wine.origin && (
                            <span className="text-accent/60"> • {wine.origin}</span>
                          )}
                        </p>
                        <p className="font-inter text-sm font-light text-accent/70">
                          {wine.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {wine.characteristics.slice(0, 2).map((char) => (
                            <span
                              key={char}
                              className="rounded-full border border-primary/20 bg-primary/5 px-2 py-1 font-inter text-xs font-light text-primary"
                            >
                              {char}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center py-12">
                  <p className="font-inter text-base font-light text-accent/60">
                    No specific pairings found. Try exploring different options!
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
