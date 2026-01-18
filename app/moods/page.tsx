"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { moods, getMoodById } from "@/lib/moods";
import MoodCard from "@/components/MoodCard";
import MoodPairingsModal from "@/components/MoodPairingsModal";

export default function MoodsPage() {
  const router = useRouter();
  const [selectedMoodId, setSelectedMoodId] = useState<string | null>(null);
  const selectedMood = selectedMoodId ? getMoodById(selectedMoodId) : null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-primary/10 bg-white/30 px-6 py-8">
        <div className="mx-auto flex max-w-7xl items-center gap-6">
          <button
            onClick={() => router.push("/")}
            className="group flex items-center gap-2 text-accent/70 transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-inter text-sm font-light">Back</span>
          </button>
          <div>
            <h1 className="font-playfair text-2xl font-medium text-accent">
              Mood-Based Pairings
            </h1>
            <p className="font-inter text-sm font-light text-accent/60">
              Discover pairings curated for every moment
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-12 text-center">
        <div className="mx-auto max-w-3xl space-y-4">
          <h2 className="font-playfair text-4xl font-light text-primary tracking-wide">
            Pairings for Every Mood
          </h2>
          <div className="mx-auto h-px w-24 bg-secondary" />
          <p className="font-inter text-lg font-light leading-relaxed text-accent/80">
            Let the moment guide your selection. Each mood offers carefully curated 
            wine and food combinations designed to enhance your experience.
          </p>
        </div>
      </section>

      {/* Moods Grid */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {moods.map((mood) => (
              <MoodCard
                key={mood.id}
                mood={mood}
                onSelect={setSelectedMoodId}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedMood && (
        <MoodPairingsModal
          mood={selectedMood}
          onClose={() => setSelectedMoodId(null)}
        />
      )}
    </div>
  );
}
