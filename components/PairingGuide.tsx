"use client";

import { ArrowLeft, BookOpen, Lightbulb, Wine, UtensilsCrossed, ChevronRight } from "lucide-react";
import { useState } from "react";

interface PairingGuideProps {
  onBack: () => void;
}

export default function PairingGuide({ onBack }: PairingGuideProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const principles = [
    {
      id: "complement",
      title: "Complement",
      description: "Match similar flavors and intensities",
      details: "Pair wines and foods with similar characteristics. A rich, buttery Chardonnay complements creamy pasta dishes, while a bold Cabernet Sauvignon stands up to hearty grilled steak.",
      examples: [
        { wine: "Chardonnay", food: "Creamy Pasta", reason: "Both rich and buttery" },
        { wine: "Cabernet Sauvignon", food: "Grilled Steak", reason: "Both bold and intense" }
      ]
    },
    {
      id: "contrast",
      title: "Contrast",
      description: "Balance opposites for harmony",
      details: "Sometimes opposites attract. A crisp, acidic wine can cut through rich, fatty foods, while a sweet wine can balance spicy dishes. The contrast creates a more interesting and balanced experience.",
      examples: [
        { wine: "Riesling", food: "Spicy Curry", reason: "Sweetness balances heat" },
        { wine: "Sauvignon Blanc", food: "Goat Cheese", reason: "Acidity cuts through richness" }
      ]
    },
    {
      id: "intensity",
      title: "Match Intensity",
      description: "Pair bold with bold, delicate with delicate",
      details: "The intensity of both wine and food should be balanced. A light Pinot Grigio would be overwhelmed by a rich steak, just as a bold Syrah would overpower delicate seafood.",
      examples: [
        { wine: "Pinot Noir", food: "Salmon", reason: "Both medium-bodied and elegant" },
        { wine: "Syrah", food: "BBQ Ribs", reason: "Both bold and flavorful" }
      ]
    },
    {
      id: "acidity",
      title: "Acidity Matters",
      description: "High-acid wines pair with rich or fatty foods",
      details: "Acidic wines act like a squeeze of lemon, cutting through richness and cleansing the palate. They're perfect with fatty meats, creamy sauces, and rich cheeses.",
      examples: [
        { wine: "Sauvignon Blanc", food: "Oysters", reason: "Acidity enhances briny flavors" },
        { wine: "Pinot Noir", food: "Duck Breast", reason: "Acidity cuts through fat" }
      ]
    },
    {
      id: "sweetness",
      title: "Sweetness Balance",
      description: "Wine should be as sweet or sweeter than food",
      details: "When pairing with sweet foods, choose a wine that's at least as sweet. Otherwise, the wine will taste flat and sour. Sweet wines also pair beautifully with spicy dishes.",
      examples: [
        { wine: "Moscato", food: "Fruit Tart", reason: "Wine sweetness matches dessert" },
        { wine: "Riesling", food: "Spicy Asian Cuisine", reason: "Sweetness cools the heat" }
      ]
    },
    {
      id: "tannins",
      title: "Tannins & Protein",
      description: "Tannic wines pair with protein-rich foods",
      details: "Tannins in red wine bind with proteins, softening the wine's astringency. Rich, protein-heavy foods like red meat and aged cheeses are perfect partners for tannic wines.",
      examples: [
        { wine: "Cabernet Sauvignon", food: "Aged Cheddar", reason: "Tannins soften with protein" },
        { wine: "Malbec", food: "Lamb Chops", reason: "Tannins complement rich meat" }
      ]
    }
  ];

  const tips = [
    {
      title: "Regional Pairings",
      description: "Foods and wines from the same region often pair naturally together. Think Italian Chianti with pasta, or French Burgundy with coq au vin."
    },
    {
      title: "Consider Preparation",
      description: "How food is prepared matters. Grilled salmon pairs differently than poached salmon. Consider cooking methods and sauces."
    },
    {
      title: "Think About Texture",
      description: "Match textures thoughtfully. Creamy foods work with full-bodied wines, while crisp foods pair with lighter wines."
    },
    {
      title: "Don't Overthink It",
      description: "The best pairing is one you enjoy. Trust your palate and experiment. There are no absolute rules, only guidelines."
    }
  ];

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
          
            <div>
              <h1 className="font-playfair text-2xl font-medium text-accent">
                Pairing Guide
              </h1>
              <p className="font-inter text-sm font-light text-accent/60">
                Learn the art of wine and food pairing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <h2 className="font-playfair text-4xl font-light text-primary">
            The Fundamentals
          </h2>
          <div className="mx-auto h-px w-24 bg-secondary"></div>
          <p className="font-inter text-lg font-light leading-relaxed text-accent/80 max-w-2xl mx-auto">
            Pairing wine and food is both an art and a science. While personal preference always matters, 
            understanding these core principles will help you create harmonious combinations that enhance 
            both the wine and the food.
          </p>
        </div>
      </section>

      {/* Principles Section */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-4xl space-y-6">
          <h3 className="font-playfair text-3xl font-medium text-primary text-center">
            Core Principles
          </h3>
          
          <div className="space-y-4">
            {principles.map((principle) => (
              <div
                key={principle.id}
                className="border border-primary/20 bg-white/50 rounded-sm overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-md"
              >
                <button
                  onClick={() => setActiveSection(activeSection === principle.id ? null : principle.id)}
                  className="w-full p-6 text-left flex items-center justify-between group"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Lightbulb className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-playfair text-2xl font-medium text-primary">
                        {principle.title}
                      </h4>
                    </div>
                    <p className="font-inter text-base font-light text-accent/70 ml-12">
                      {principle.description}
                    </p>
                  </div>
                  <ChevronRight 
                    className={`h-5 w-5 text-accent/40 transition-transform duration-300 ${
                      activeSection === principle.id ? "rotate-90" : ""
                    }`}
                  />
                </button>
                
                {activeSection === principle.id && (
                  <div className="px-6 pb-6 space-y-4 border-t border-primary/10 pt-6">
                    <p className="font-inter text-sm font-light leading-relaxed text-accent/80">
                      {principle.details}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                      {principle.examples.map((example, idx) => (
                        <div
                          key={idx}
                          className="border border-secondary/20 bg-secondary/5 rounded-sm p-4 space-y-2"
                        >
                          <div className="flex items-center gap-3">
                            <Wine className="h-4 w-4 text-primary" />
                            <span className="font-inter text-sm font-medium text-primary">
                              {example.wine}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <UtensilsCrossed className="h-4 w-4 text-secondary" />
                            <span className="font-inter text-sm font-medium text-accent">
                              {example.food}
                            </span>
                          </div>
                          <p className="font-inter text-xs font-light text-accent/70 pt-2 border-t border-secondary/10">
                            {example.reason}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <h3 className="font-playfair text-3xl font-medium text-primary text-center">
            Pro Tips
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip, idx) => (
              <div
                key={idx}
                className="border border-secondary/30 bg-white/50 rounded-sm p-6 space-y-3 transition-all duration-300 hover:border-secondary/50 hover:shadow-md"
              >
                <h4 className="font-playfair text-xl font-medium text-accent">
                  {tip.title}
                </h4>
                <p className="font-inter text-sm font-light leading-relaxed text-accent/70">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
