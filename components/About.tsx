/* eslint-disable react/no-unescaped-entities */
"use client";

import { ArrowLeft, Heart, Wine, UtensilsCrossed, BookOpen } from "lucide-react";
import { IoIosWine } from "react-icons/io";

interface AboutProps {
  onBack: () => void;
}

export default function About({ onBack }: AboutProps) {
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
            <div className="rounded-full bg-accent/10 p-3">
              <Heart className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h1 className="font-playfair text-2xl font-medium text-accent">
                About
              </h1>
              <p className="font-inter text-sm font-light text-accent/60">
                Learn more about Perfect Pairings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Introduction */}
          <div className="space-y-6 text-center">
            <h2 className="font-playfair text-4xl font-light text-primary">
              Perfect Pairings
            </h2>
            <div className="mx-auto h-px w-24 bg-secondary"></div>
            <p className="font-inter text-lg font-light leading-relaxed text-accent/80 max-w-2xl mx-auto">
              A curated guide to the art of pairing wine and food, designed to help you 
              discover harmonious combinations that elevate both the culinary and oenological experience.
            </p>
          </div>

          {/* Mission */}
          <div className="space-y-4">
            <h3 className="font-playfair text-3xl font-medium text-primary">
              Our Mission
            </h3>
            <p className="font-inter text-base font-light leading-relaxed text-accent/80">
              We believe that the perfect pairing can transform a meal into a memorable experience. 
              Our mission is to demystify wine and food pairing, making it accessible to everyone—from 
              curious beginners to seasoned enthusiasts. Whether you're planning a special dinner, 
              exploring new flavors, or simply want to enhance your everyday meals, we're here to guide you.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <h3 className="font-playfair text-3xl font-medium text-primary">
              What We Offer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-primary/20 bg-white/50 rounded-sm p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <IoIosWine  className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-playfair text-xl font-medium text-primary">
                    Wine Selection
                  </h4>
                </div>
                <p className="font-inter text-sm font-light leading-relaxed text-accent/70">
                  Browse our curated collection of wines, from bold reds to elegant whites and 
                  refreshing rosés. Each wine includes descriptions focused on style, structure, 
                  and typical regions of origin, plus characteristics and recommended food pairings.
                </p>
              </div>

              <div className="border border-secondary/30 bg-white/50 rounded-sm p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-secondary/20 p-3">
                    <UtensilsCrossed className="h-6 w-6 text-secondary" />
                  </div>
                  <h4 className="font-playfair text-xl font-medium text-accent">
                    Food Pairings
                  </h4>
                </div>
                <p className="font-inter text-sm font-light leading-relaxed text-accent/70">
                  Discover which wines complement your favorite dishes. Our database includes 
                  a wide variety of foods, from simple ingredients to complex dishes, each with 
                  carefully selected wine recommendations.
                </p>
              </div>

              <div className="border border-accent/30 bg-white/50 rounded-sm p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-accent/10 p-3">
                    <BookOpen className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-playfair text-xl font-medium text-accent">
                    Educational Guide
                  </h4>
                </div>
                <p className="font-inter text-sm font-light leading-relaxed text-accent/70">
                  Learn the fundamental principles of pairing through our interactive guide. 
                  Understand concepts like complement, contrast, intensity matching, and more 
                  to build your pairing knowledge.
                </p>
              </div>

              <div className="border border-primary/20 bg-white/50 rounded-sm p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-playfair text-xl font-medium text-primary">
                    Curated Recommendations
                  </h4>
                </div>
                <p className="font-inter text-sm font-light leading-relaxed text-accent/70">
                  Every pairing recommendation is thoughtfully curated based on traditional 
                  principles, flavor profiles, classic regional matches and patterns used in 
                  professional courses (such as WSET-style frameworks and sommelier training), 
                  then simplified into an approachable, hobbyist-friendly tool.
                </p>
              </div>
            </div>
          </div>

          {/* How These Recommendations Were Built */}
          <div className="space-y-4 pt-8 border-t border-primary/10">
            <h3 className="font-playfair text-3xl font-medium text-primary">
              How these recommendations were put together
            </h3>
            <p className="font-inter text-base font-light leading-relaxed text-accent/80">
              The pairings in this app are based on a mix of classic pairing rules, widely accepted
              regional matches (think Chianti with tomato-based Italian dishes, or Sauvignon Blanc
              with goat cheese), tasting notes from producers and critics, and structured learning
              resources. They’re not meant to replace a trained sommelier, but to capture the core
              logic they use—acidity, tannin, sweetness, body and origin—and express it in a clear,
              repeatable way.
            </p>
            <p className="font-inter text-base font-light leading-relaxed text-accent/80">
              As a personal project, it reflects a learning journey through books, courses, and
              a lot of glass-in-hand experimentation. The goal is to be transparent about the
              thought process, give enough detail for enthusiasts, and still feel welcoming for
              people at the start of their wine journey.
            </p>
          </div>

          {/* Philosophy */}
          <div className="space-y-4 pt-8 border-t border-primary/10">
            <h3 className="font-playfair text-3xl font-medium text-primary">
              Our Philosophy
            </h3>
            <p className="font-inter text-base font-light leading-relaxed text-accent/80">
              While we provide guidance based on established pairing principles, we believe that 
              the best pairing is ultimately the one you enjoy. Taste is personal, and experimentation 
              is encouraged. Use our recommendations as a starting point, but don't be afraid to 
              explore and discover your own perfect pairings. The journey of discovering new 
              combinations is part of the joy of wine and food.
            </p>
          </div>

          {/* Closing */}
          <div className="text-center space-y-4 pt-8">
            <p className="font-inter text-base font-light text-accent/70 italic">
              "Wine is bottled poetry, and food is the canvas on which it paints."
            </p>
            <p className="font-inter text-sm font-light text-accent/60">
              Cheers to discovering your perfect pairings
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
