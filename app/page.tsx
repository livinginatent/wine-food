"use client";

import { UtensilsCrossed, BookOpen, Sparkles } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import WineSelection from "@/components/WineSelection";
import FoodSelection from "@/components/FoodSelection";
import PairingResults from "@/components/PairingResults";
import PairingGuide from "@/components/PairingGuide";
import { IoIosWine } from "react-icons/io";
import { wines, getFoodPairingsForWine } from "@/lib/pairings";
import { AiOutlineRead } from "react-icons/ai";

type View = "home" | "wine-selection" | "food-selection" | "pairing-results" | "guide";

export default function Home() {
  const [currentView, setCurrentView] = useState<View>("home");
  const [selectedWineId, setSelectedWineId] = useState<string>("");
  const [selectedFoodId, setSelectedFoodId] = useState<string>("");
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

  const handleWineSelect = (wineId: string) => {
    setSelectedWineId(wineId);
    setSelectedFoodId(""); // Clear food selection
    setCurrentView("pairing-results");
  };

  const handleFoodSelect = (foodId: string) => {
    setSelectedFoodId(foodId);
    setSelectedWineId(""); // Clear wine selection
    setCurrentView("pairing-results");
  };

  const handleStartOver = () => {
    setCurrentView("home");
    setSelectedWineId("");
    setSelectedFoodId("");
  };

  const handlePickForMe = () => {
    // Pick a random wine
    const randomWine = wines[Math.floor(Math.random() * wines.length)];
    
    // Find foods that pair with this wine
    const pairedFoods = getFoodPairingsForWine(randomWine.id);
    
    if (pairedFoods.length > 0) {
      // Pick a random food from the paired foods
      const randomFood = pairedFoods[Math.floor(Math.random() * pairedFoods.length)];
      
      // Set both selections and show wine-focused results
      setSelectedWineId(randomWine.id);
      setSelectedFoodId(randomFood.id);
      setCurrentView("pairing-results");
    } else {
      // Fallback: just pick a random wine if no pairings found
      setSelectedWineId(randomWine.id);
      setSelectedFoodId("");
      setCurrentView("pairing-results");
    }
  };

  if (currentView === "wine-selection") {
    return (
      <WineSelection
        onSelect={handleWineSelect}
        onBack={() => setCurrentView("home")}
      />
    );
  }

  if (currentView === "food-selection") {
    return (
      <FoodSelection
        onSelect={handleFoodSelect}
        onBack={() => setCurrentView("home")}
      />
    );
  }

  if (currentView === "pairing-results") {
    return (
      <PairingResults
        mode={selectedWineId ? "wine" : "food"}
        selectedId={selectedWineId || selectedFoodId}
        highlightedFoodId={selectedWineId && selectedFoodId ? selectedFoodId : undefined}
        onBack={() => {
          if (selectedWineId) {
            setCurrentView("wine-selection");
          } else {
            setCurrentView("food-selection");
          }
        }}
        onStartOver={handleStartOver}
      />
    );
  }

  if (currentView === "guide") {
    return <PairingGuide onBack={() => setCurrentView("home")} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 pt-12 pb-8 text-center">
        <div className="max-w-4xl space-y-6">
          <h1 className="font-playfair text-5xl font-light tracking-wide text-primary md:text-5xl lg:text-7xl">
            Perfect Wine Food Pairing
          </h1>
          <div className="mx-auto h-px w-24 bg-secondary"></div>
          <p className="font-inter text-xl font-light leading-relaxed text-accent/80 md:text-2xl">
            Discover the art of wine pairing
          </p>
          <p className="font-inter text-base font-light text-accent/60 md:text-lg">
            Explore expert wine food pairing recommendations and learn the principles of perfect wine and food combinations
          </p>
          {/* Pick for Me Button */}
 {/*          <div className="pt-4">
            <button
              onClick={handlePickForMe}
              onMouseEnter={() => setHoveredOption("pick")}
              onMouseLeave={() => setHoveredOption(null)}
              className="group relative overflow-hidden rounded-sm border border-secondary/40 bg-secondary/10 px-8 py-4 transition-all duration-500 hover:border-secondary/60 hover:bg-secondary/20 hover:shadow-lg"
            >
              <div className="relative z-10 flex items-center gap-3">
                <div className="rounded-full bg-secondary/30 p-2 transition-transform duration-300 group-hover:scale-110">
                  <Sparkles 
                    className={`h-5 w-5 transition-colors duration-300 ${
                      hoveredOption === "pick" ? "text-secondary" : "text-secondary/80"
                    }`}
                  />
                </div>
                <span className="font-playfair text-lg font-medium text-accent">
                  Pick for me
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </button>
          </div> */}
        </div>
      </section>

      {/* Selection Section */}
      <section className="flex items-center justify-center px-6 py-8">
        <div className="w-full max-w-4xl space-y-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Wine to Food Option */}
          <button
            onClick={() => setCurrentView("wine-selection")}
            onMouseEnter={() => setHoveredOption("wine")}
            onMouseLeave={() => setHoveredOption(null)}
            className="group relative overflow-hidden rounded-sm border border-primary/20 bg-white/50 p-12 text-left transition-all duration-500 hover:border-primary/40 hover:shadow-lg"
          >
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-4 transition-transform duration-300 group-hover:scale-110">
                  <IoIosWine 
                    className={`h-8 w-8 transition-colors duration-300 ${
                      hoveredOption === "wine" ? "text-primary" : "text-primary/70"
                    }`}
                  />
                </div>
              </div>
              <div>
                <h2 className="font-playfair text-3xl font-medium text-primary">
                  I have wine
                </h2>
                <p className="mt-2 font-inter text-base font-light text-accent/70">
                  Looking for the perfect food pairing
                </p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
          </button>

          {/* Food to Wine Option */}
          <button
            onClick={() => setCurrentView("food-selection")}
            onMouseEnter={() => setHoveredOption("food")}
            onMouseLeave={() => setHoveredOption(null)}
            className="group relative overflow-hidden rounded-sm border border-secondary/30 bg-white/50 p-12 text-left transition-all duration-500 hover:border-secondary/50 hover:shadow-lg"
          >
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-secondary/20 p-4 transition-transform duration-300 group-hover:scale-110">
                  <UtensilsCrossed 
                    className={`h-8 w-8 transition-colors duration-300 ${
                      hoveredOption === "food" ? "text-secondary" : "text-secondary/80"
                    }`}
                  />
                </div>
              </div>
              <div>
                <h2 className="font-playfair text-3xl font-medium text-accent">
                  I have food
                </h2>
                <p className="mt-2 font-inter text-base font-light text-accent/70">
                  Looking for the perfect wine pairing
                </p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
          </button>
          </div>

          {/* Guide Button */}
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setCurrentView("guide")}
              onMouseEnter={() => setHoveredOption("guide")}
              onMouseLeave={() => setHoveredOption(null)}
              className="group relative overflow-hidden rounded-sm border border-accent/30 bg-white/50 px-8 py-4 transition-all duration-500 hover:border-accent/50 hover:shadow-lg"
            >
              <div className="relative z-10 flex items-center gap-3">
                <div className="rounded-full bg-accent/10 p-2 transition-transform duration-300 group-hover:scale-110">
                  <AiOutlineRead 
                    className={`h-5 w-5 transition-colors duration-300 ${
                      hoveredOption === "guide" ? "text-accent" : "text-accent/70"
                    }`}
                  />
                </div>
                <span className="font-playfair text-lg font-medium text-accent">
                  Teach me how to pair wine and food
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/10 px-6 py-8">
        <div className="mx-auto max-w-4xl flex items-center justify-center">
          <Link
            href="/about"
            className="font-inter text-sm font-light text-accent/60 transition-colors hover:text-accent"
          >
            About
          </Link>
        </div>
      </footer>
    </div>
  );
}
