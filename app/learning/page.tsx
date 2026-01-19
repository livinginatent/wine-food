"use client";

import { useState } from "react";
import { useWineLearning } from "@/hooks/useWineLearning";
import WineAtlas from "@/components/WineAtlas";
import GrapeCard from "@/components/GrapeCard";
import { grapes } from "@/lib/grapes";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

export default function LearningPage() {
  const {
    activeRegion,
    activeGrape,
    mapPosition,
    selectRegion,
    selectGrape,
    goBack,
    goForward,
    clearSelection,
    canGoBack,
    canGoForward,
    relatedRegions,
    relatedGrapes,
  } = useWineLearning();

  const [showGrapeSelector, setShowGrapeSelector] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F0E8] flex flex-col">
      {/* Header */}
      <header className="bg-[#8B1A1A] text-[#F5F0E8] px-4 py-4 md:px-6 md:py-6">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <h1 className="font-playfair text-2xl md:text-3xl font-bold mb-1">
              Wine Learning
            </h1>
            <p className="font-inter text-sm md:text-base opacity-90">
              Explore regions and grapes interactively
            </p>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={goBack}
              disabled={!canGoBack}
              className={`p-2 rounded-full transition-colors ${
                canGoBack
                  ? "bg-[#F5F0E8]/20 hover:bg-[#F5F0E8]/30"
                  : "bg-[#F5F0E8]/10 opacity-50 cursor-not-allowed"
              }`}
              aria-label="Go back"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goForward}
              disabled={!canGoForward}
              className={`p-2 rounded-full transition-colors ${
                canGoForward
                  ? "bg-[#F5F0E8]/20 hover:bg-[#F5F0E8]/30"
                  : "bg-[#F5F0E8]/10 opacity-50 cursor-not-allowed"
              }`}
              aria-label="Go forward"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
            {(activeRegion || activeGrape) && (
              <button
                onClick={clearSelection}
                className="p-2 rounded-full bg-[#F5F0E8]/20 hover:bg-[#F5F0E8]/30 transition-colors ml-2"
                aria-label="Clear selection"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 relative flex flex-col md:flex-row">
        {/* Map Section */}
        <div className="flex-1 h-[400px] md:h-auto relative">
          <WineAtlas
            activeRegion={activeRegion}
            mapPosition={mapPosition}
            onRegionSelect={selectRegion}
            onClose={clearSelection}
            selectedGrapeName={activeGrape?.name}
          />
        </div>

        {/* Sidebar - Grape Selector */}
        {showGrapeSelector && (
          <div className="absolute md:relative top-0 right-0 w-full md:w-80 bg-[#F5F0E8] border-l border-[#8B1A1A]/20 shadow-lg z-50 md:z-auto h-full overflow-y-auto">
            <div className="p-4 border-b border-[#8B1A1A]/20 flex items-center justify-between">
              <h2 className="font-playfair text-xl font-bold text-[#8B1A1A]">
                Select a Grape
              </h2>
              <button
                onClick={() => setShowGrapeSelector(false)}
                className="p-2 text-[#8B1A1A] hover:bg-[#8B1A1A]/10 rounded-full transition-colors"
                aria-label="Close grape selector"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 space-y-2">
              {grapes.map((grape) => (
                <button
                  key={grape.id}
                  onClick={() => {
                    selectGrape(grape.id);
                    setShowGrapeSelector(false);
                  }}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    activeGrape?.id === grape.id
                      ? "bg-[#8B1A1A] text-[#F5F0E8]"
                      : "bg-white hover:bg-[#8B1A1A]/10 text-[#8B1A1A]"
                  }`}
                >
                  <div className="font-playfair font-semibold">{grape.name}</div>
                  <div className="text-xs opacity-70 mt-1">{grape.origin}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Bar - Quick Actions */}
      <div className="bg-white border-t border-[#8B1A1A]/20 px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowGrapeSelector(!showGrapeSelector)}
              className="px-4 py-2 bg-[#8B1A1A] text-[#F5F0E8] rounded-lg hover:bg-[#6B1515] transition-colors font-inter text-sm font-medium"
            >
              {showGrapeSelector ? "Hide" : "Browse"} Grapes
            </button>
            
            {activeGrape && relatedRegions.length > 0 && (
              <div className="hidden md:flex items-center gap-2">
                <span className="font-inter text-sm text-gray-600">
                  Related regions:
                </span>
                {relatedRegions.map((region) => (
                  <button
                    key={region.id}
                    onClick={() => selectRegion(region.id)}
                    className={`px-3 py-1 rounded-full text-xs font-inter transition-colors ${
                      activeRegion?.id === region.id
                        ? "bg-[#8B1A1A] text-[#F5F0E8]"
                        : "bg-[#8B1A1A]/10 text-[#8B1A1A] hover:bg-[#8B1A1A]/20"
                    }`}
                  >
                    {region.name}
                  </button>
                ))}
              </div>
            )}

            {activeRegion && relatedGrapes.length > 0 && (
              <div className="hidden md:flex items-center gap-2">
                <span className="font-inter text-sm text-gray-600">
                  Related grapes:
                </span>
                {relatedGrapes.map((grape) => (
                  <button
                    key={grape.id}
                    onClick={() => selectGrape(grape.id)}
                    className={`px-3 py-1 rounded-full text-xs font-inter transition-colors ${
                      activeGrape?.id === grape.id
                        ? "bg-[#8B1A1A] text-[#F5F0E8]"
                        : "bg-[#8B1A1A]/10 text-[#8B1A1A] hover:bg-[#8B1A1A]/20"
                    }`}
                  >
                    {grape.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Active Selection Indicator */}
          {(activeRegion || activeGrape) && (
            <div className="text-right">
              <div className="font-inter text-xs text-gray-500">
                {activeRegion ? `Viewing: ${activeRegion.name}` : activeGrape ? `Viewing: ${activeGrape.name}` : ""}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Grape Card Drawer */}
      {activeGrape && (
        <GrapeCard
          grape={activeGrape}
          onClose={() => {
            clearSelection();
          }}
          initialOpen={true}
        />
      )}
    </div>
  );
}
