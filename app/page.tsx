"use client";

import { UtensilsCrossed, Grape,  WandSparkles } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { IoIosWine } from "react-icons/io";

export default function Home() {
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

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
          <Link
            href="/wine"
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
                  Start from a wine
                </h2>
                <p className="mt-2 font-inter text-base font-light text-accent/70">
                  Tell us what’s in your glass and we’ll suggest dishes that make it shine
                </p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
          </Link>

          {/* Food to Wine Option */}
          <Link
            href="/food"
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
                  Start from a dish
                </h2>
                <p className="mt-2 font-inter text-base font-light text-accent/70">
                  Share what’s on the table and we’ll help you pour a matching wine
                </p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
          </Link>
          
          </div>
          {/* Sommelier Wizard Button */}
          <div className="flex justify-center pt-4">
            <Link
              href="/wizard"
              onMouseEnter={() => setHoveredOption("wizard")}
              onMouseLeave={() => setHoveredOption(null)}
              className="group relative overflow-hidden rounded-sm border border-primary/30 bg-white/50 px-8 py-4 transition-all duration-500 hover:border-primary/50 hover:shadow-lg"
            >
              <div className="relative z-10 flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-2 transition-transform duration-300 group-hover:scale-110">
                  <WandSparkles
                    className={`h-5 w-5 transition-colors duration-300 ${
                      hoveredOption === "wizard"
                        ? "text-primary"
                        : "text-primary/70"
                    }`}
                  />
                </div>
                <span className="font-playfair text-lg font-medium text-accent">
                  or use our smart sommelier
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </Link>
          </div>
      <div className="flex justify-center pt-4">
            <Link
              href="/moods"
              onMouseEnter={() => setHoveredOption("moods")}
              onMouseLeave={() => setHoveredOption(null)}
              className="group relative overflow-hidden rounded-sm border border-secondary/40 bg-secondary/10 px-8 py-4 transition-all duration-500 hover:border-secondary/60 hover:bg-secondary/20 hover:shadow-lg"
            >
              <div className="relative z-10 flex items-center gap-3">
             
                <span className="font-playfair text-lg font-medium text-accent">
                  Mood-Based Pairings
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </Link>
          </div>
          {/* Guide Button */}
          <div className="flex justify-center pt-4">
            <Link
              href="/guide"
              onMouseEnter={() => setHoveredOption("guide")}
              onMouseLeave={() => setHoveredOption(null)}
              className="group relative overflow-hidden rounded-sm border border-accent/30 bg-white/50 px-8 py-4 transition-all duration-500 hover:border-accent/50 hover:shadow-lg"
            >
              <div className="relative z-10 flex items-center gap-3">
            
                <span className="font-playfair text-lg font-medium text-accent">
                  Teach me how to pair wine and food
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </Link>
          </div>

          {/* Pairing Chart Button */}
          <div className="flex justify-center pt-4">
            <Link
              href="/chart"
              onMouseEnter={() => setHoveredOption("chart")}
              onMouseLeave={() => setHoveredOption(null)}
              className="group relative overflow-hidden rounded-sm border border-secondary/30 bg-white/50 px-8 py-4 transition-all duration-500 hover:border-secondary/50 hover:shadow-lg"
            >
              <div className="relative z-10 flex items-center gap-3">
             
                <span className="font-playfair text-lg font-medium text-accent">
                  Interactive Pairing Chart
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </Link>
          </div>

          {/* Wine Grapes Button */}
          <div className="flex justify-center pt-4">
            <Link
              href="/grapes"
              onMouseEnter={() => setHoveredOption("grapes")}
              onMouseLeave={() => setHoveredOption(null)}
              className="group relative overflow-hidden rounded-sm border border-primary/30 bg-white/50 px-8 py-4 transition-all duration-500 hover:border-primary/50 hover:shadow-lg"
            >
              <div className="relative z-10 flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-2 transition-transform duration-300 group-hover:scale-110">
                  <Grape 
                    className={`h-5 w-5 transition-colors duration-300 ${
                      hoveredOption === "grapes" ? "text-primary" : "text-primary/70"
                    }`}
                  />
                </div>
                <span className="font-playfair text-lg font-medium text-accent">
                  Explore Wine Grapes
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </Link>
          </div>

          {/* Mood-Based Pairings Button */}
    
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/10 px-6 py-8">
        <div className="mx-auto max-w-4xl flex items-center justify-center gap-6">
          <Link
            href="/about"
            className="font-inter text-sm font-light text-accent/60 transition-colors hover:text-accent"
          >
            About
          </Link>
          <span className="text-accent/30">•</span>
          <Link
            href="/moods"
            className="font-inter text-sm font-light text-accent/60 transition-colors hover:text-accent"
          >
            Mood-Based Pairings
          </Link>
          <span className="text-accent/30">•</span>
          <Link
            href="/chart"
            className="font-inter text-sm font-light text-accent/60 transition-colors hover:text-accent"
          >
            Interactive Pairing Chart
          </Link>
        </div>
      </footer>
    </div>
  );
}
