"use client";

/* eslint-disable react/no-unescaped-entities */
import dynamic from "next/dynamic";

// Dynamically import WineAtlas to avoid SSR issues with Leaflet
const WineAtlas = dynamic(() => import("@/components/WineAtlas"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full bg-[#F5F0E8]">
      <div className="text-[#8B1A1A]">Loading map...</div>
    </div>
  ),
});

export default function AtlasPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-[#8B1A1A] mb-2">Wine Atlas</h1>
          <p className="text-gray-700">
            Explore the world's most renowned wine regions. Click on a marker to learn more about each region.
          </p>
        </div>
        <div className="h-[600px] w-full rounded-lg overflow-hidden shadow-lg border-2 border-[#8B1A1A]">
          <WineAtlas />
        </div>
      </div>
    </div>
  );
}
