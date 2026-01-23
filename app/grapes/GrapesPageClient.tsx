"use client";

import { useState } from "react";
import GrapeCard from "@/components/GrapeCard";
import { grapes } from "@/lib/grapes";

export default function GrapesPageClient() {
  const [selectedGrape, setSelectedGrape] = useState<string | null>(null);

  const handleGrapeClick = (grapeId: string) => {
    setSelectedGrape(grapeId);
  };

  const handleClose = () => {
    setSelectedGrape(null);
  };

  return (
    <div>
      <div className="sr-only" id="grape-grid-help">
        Tap a grape card to open its profile. Use escape to close the panel.
      </div>
      <div
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        aria-describedby="grape-grid-help"
      >
        {grapes.map((grape) => (
          <button
            key={grape.id}
            onClick={() => handleGrapeClick(grape.id)}
            className="relative aspect-square rounded-sm border border-[#8B1A1A]/10 bg-white p-4 shadow-sm hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B1A1A]/60"
            aria-label={`Open details for ${grape.name}`}
          >
            <div className="flex h-full flex-col items-center justify-center text-center">
            
              <h3 className="font-playfair text-base font-semibold text-[#8B1A1A] sm:text-lg">
                {grape.name}
              </h3>
              <p className="mt-1 font-inter text-xs text-[#6B4B3A] sm:text-sm">
                {grape.origin}
              </p>
            </div>
          </button>
        ))}
      </div>

      {selectedGrape && (
        <GrapeCard
          grape={grapes.find((g) => g.id === selectedGrape)!}
          onClose={handleClose}
          initialOpen={true}
        />
      )}
    </div>
  );
}
