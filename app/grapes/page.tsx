"use client";

import { useState } from "react";
import GrapeCard from "@/components/GrapeCard";
import { grapes } from "@/lib/grapes";

export default function GrapesPage() {
  const [selectedGrape, setSelectedGrape] = useState<string | null>(null);

  const handleGrapeClick = (grapeId: string) => {
    setSelectedGrape(grapeId);
  };

  const handleClose = () => {
    setSelectedGrape(null);
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[#8B1A1A] mb-2">
            Wine Grapes
          </h1>
          <p className="font-inter text-gray-700">
            Tap on a grape to learn about its history and characteristics
          </p>
        </div>

        {/* Grape Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {grapes.map((grape) => (
            <button
              key={grape.id}
              onClick={() => handleGrapeClick(grape.id)}
              className="group relative aspect-square bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-[#8B1A1A]/10 hover:border-[#8B1A1A]/30"
            >
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                  🍇
                </div>
                <h3 className="font-playfair text-lg font-semibold text-[#8B1A1A]">
                  {grape.name}
                </h3>
                <p className="font-inter text-xs text-gray-600 mt-1">
                  {grape.origin}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Grape Card Drawer */}
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
