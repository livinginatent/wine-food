"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { LatLngExpression } from "leaflet";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { WINE_REGIONS, WineRegion } from "@/src/data/wineAtlas";

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

// Import Leaflet CSS only on client side
if (typeof window !== "undefined") {
  require("leaflet/dist/leaflet.css");
}

// Create glowing ring marker based on colorCode
// Only create markers on client side to avoid SSR issues
const createGlowingRingMarker = (colorCode: string, isActive: boolean = false) => {
  if (typeof window === "undefined") {
    // Return a placeholder during SSR
    return null as any;
  }
  
  // Dynamically import divIcon only when needed (client-side)
  const { divIcon } = require("leaflet");
  
  const size = isActive ? 24 : 20;
  const glowSize = isActive ? 32 : 28;
  const opacity = isActive ? 0.8 : 0.6;
  
  const svgIcon = `
    <svg width="${glowSize * 2}" height="${glowSize * 2}" viewBox="0 0 ${glowSize * 2} ${glowSize * 2}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow-${colorCode.replace('#', '')}">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <!-- Outer glow ring -->
      <circle 
        cx="${glowSize}" 
        cy="${glowSize}" 
        r="${size + 4}" 
        fill="none" 
        stroke="${colorCode}" 
        stroke-width="2" 
        opacity="${opacity * 0.5}"
        filter="url(#glow-${colorCode.replace('#', '')})"
      />
      <!-- Main ring -->
      <circle 
        cx="${glowSize}" 
        cy="${glowSize}" 
        r="${size}" 
        fill="none" 
        stroke="${colorCode}" 
        stroke-width="2.5"
        opacity="${opacity}"
      />
      <!-- Inner dot -->
      <circle 
        cx="${glowSize}" 
        cy="${glowSize}" 
        r="4" 
        fill="${colorCode}" 
        opacity="0.9"
      />
    </svg>
  `;
  
  return divIcon({
    html: svgIcon,
    className: "glowing-ring-marker",
    iconSize: [glowSize * 2, glowSize * 2],
    iconAnchor: [glowSize, glowSize],
  });
};

// Dynamically import MapFlyTo to avoid SSR issues
const MapFlyTo = dynamic(() => import("./MapFlyTo"), { ssr: false });

interface WineAtlasProps {
  className?: string;
  // Optional hook integration
  activeRegion?: WineRegion | null;
  mapPosition?: { center: LatLngExpression; zoom: number } | null;
  onRegionSelect?: (regionId: string) => void;
  onClose?: () => void;
  // For grape selection syncing
  selectedGrapeName?: string | null;
}

export default function WineAtlas({ 
  className = "",
  activeRegion: externalActiveRegion,
  mapPosition: externalMapPosition,
  onRegionSelect,
  onClose,
  selectedGrapeName
}: WineAtlasProps) {
  const [internalSelectedRegion, setInternalSelectedRegion] = useState<WineRegion | null>(null);
  const [flyToCenter, setFlyToCenter] = useState<LatLngExpression | null>(null);
  const [flyToZoom, setFlyToZoom] = useState<number>(6);
  const [isMounted, setIsMounted] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Use external region if provided, otherwise use internal state
  const selectedRegion = externalActiveRegion ?? internalSelectedRegion;

  // Default center point (middle of all regions)
  const defaultCenter: LatLngExpression = [30, -20];
  const defaultZoom = 2;

  // Ensure component only renders on client side (Leaflet requires DOM)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Sync map position when external mapPosition changes
  useEffect(() => {
    if (externalMapPosition) {
      setFlyToCenter(externalMapPosition.center);
      setFlyToZoom(externalMapPosition.zoom);
    }
  }, [externalMapPosition]);

  // Sync map position when external activeRegion changes
  useEffect(() => {
    if (externalActiveRegion) {
      setFlyToCenter(externalActiveRegion.coordinates);
      setFlyToZoom(8);
      setDrawerOpen(true);
    }
  }, [externalActiveRegion]);

  // Sync map when grape is selected - find region with matching primaryGrape
  useEffect(() => {
    if (selectedGrapeName) {
      const matchingRegion = WINE_REGIONS.find(
        region => region.primaryGrape.toLowerCase() === selectedGrapeName.toLowerCase()
      );
      
      if (matchingRegion) {
        setFlyToCenter(matchingRegion.coordinates);
        setFlyToZoom(8);
        if (onRegionSelect) {
          onRegionSelect(matchingRegion.id);
        } else {
          setInternalSelectedRegion(matchingRegion);
          setDrawerOpen(true);
        }
      }
    }
  }, [selectedGrapeName, onRegionSelect]);

  const handleMarkerClick = (region: WineRegion) => {
    if (onRegionSelect) {
      // Use external handler
      onRegionSelect(region.id);
    } else {
      // Use internal state
      setInternalSelectedRegion(region);
      setFlyToCenter(region.coordinates);
      setFlyToZoom(8);
      setDrawerOpen(true);
    }
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    if (onClose) {
      onClose();
    } else {
      setInternalSelectedRegion(null);
    }
  };

  // Custom minimalist tile layer - no city labels, only borders
  const minimalistTileUrl = "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png";
  const tileAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

  // Don't render map until mounted (prevents SSR issues)
  if (!isMounted) {
    return (
      <div className={`relative w-full h-full ${className} flex items-center justify-center bg-[#F5F0E8]`}>
        <div className="text-[#8B1A1A]">Loading map...</div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      <MapContainer
        center={defaultCenter}
        zoom={defaultZoom}
        style={{ height: "100%", width: "100%", zIndex: 0 }}
        scrollWheelZoom={true}
        className="wine-atlas-map"
      >
        <TileLayer
          url={minimalistTileUrl}
          attribution={tileAttribution}
          maxZoom={19}
        />
        
        {flyToCenter && (
          <MapFlyTo center={flyToCenter} zoom={flyToZoom} />
        )}

        {WINE_REGIONS.map((region) => {
          const isActive = selectedRegion?.id === region.id;
          const icon = createGlowingRingMarker(region.colorCode, isActive);
          if (!icon) return null; // Skip during SSR
          return (
            <Marker
              key={region.id}
              position={region.coordinates}
              icon={icon}
              eventHandlers={{
                click: () => handleMarkerClick(region),
              }}
            />
          );
        })}
      </MapContainer>

      {/* Grape Dossier Side Drawer with Framer Motion */}
      <AnimatePresence>
        {selectedRegion && drawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseDrawer}
              className="fixed inset-0 bg-black/30 z-[1000]"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 300,
              }}
              className="fixed top-0 right-0 h-full w-full md:w-[480px] bg-[#F5F0E8] shadow-2xl z-[1001] overflow-y-auto"
            >
              {/* Header */}
              <div 
                className="sticky top-0 bg-[#8B1A1A] text-[#F5F0E8] p-6 flex justify-between items-start z-10"
                style={{ backgroundColor: selectedRegion.colorCode }}
              >
                <div className="flex-1">
                  <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-1">
                    {selectedRegion.name}
                  </h2>
                  <p className="font-inter text-sm opacity-90">{selectedRegion.country}</p>
                  <p className="font-inter text-xs mt-2 opacity-75">{selectedRegion.primaryGrape}</p>
                </div>
                <button
                  onClick={handleCloseDrawer}
                  className="p-2 hover:bg-black/20 rounded-full transition-colors ml-4 flex-shrink-0"
                  aria-label="Close drawer"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-8">
                {/* Grape Macro Image */}
                <div className="flex justify-center">
                  <div className="relative w-full max-w-sm">
                    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden shadow-lg">
                      {selectedRegion.grapeImage ? (
                        <img
                          src={selectedRegion.grapeImage}
                          alt={`${selectedRegion.primaryGrape} from ${selectedRegion.name}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to placeholder
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div class="w-full h-full flex items-center justify-center">
                                  <div class="text-center">
                                    <div class="text-6xl mb-4">🍇</div>
                                    <p class="font-playfair text-[#8B1A1A] text-lg">${selectedRegion.primaryGrape}</p>
                                  </div>
                                </div>
                              `;
                            }
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-6xl mb-4">🍇</div>
                            <p className="font-playfair text-[#8B1A1A] text-lg">
                              {selectedRegion.primaryGrape}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <p className="font-inter text-base text-gray-800 leading-relaxed">
                    {selectedRegion.description}
                  </p>
                </div>

                {/* Terroir Section */}
                <div>
                  <h3 className="font-playfair text-xl font-bold text-[#8B1A1A] mb-4">
                    Terroir
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-inter text-sm font-semibold text-[#8B1A1A] mb-1">Soil</p>
                      <p className="font-inter text-sm text-gray-700">{selectedRegion.terroir.soil}</p>
                    </div>
                    <div>
                      <p className="font-inter text-sm font-semibold text-[#8B1A1A] mb-1">Climate</p>
                      <p className="font-inter text-sm text-gray-700">{selectedRegion.terroir.climate}</p>
                    </div>
                    <div>
                      <p className="font-inter text-sm font-semibold text-[#8B1A1A] mb-1">Elevation</p>
                      <p className="font-inter text-sm text-gray-700">{selectedRegion.terroir.elevation}</p>
                    </div>
                  </div>
                </div>

                {/* History Timeline */}
                <div>
                  <h3 className="font-playfair text-xl font-bold text-[#8B1A1A] mb-4">
                    History
                  </h3>
                  <div className="relative pl-6">
                    {/* Vertical line */}
                    <div className="absolute left-2 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-[#8B1A1A]/30" />

                    {/* History items */}
                    <div className="space-y-5">
                      {selectedRegion.history.map((milestone, index) => (
                        <div key={index} className="relative">
                          {/* Dot */}
                          <div 
                            className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#F5F0E8]"
                            style={{ backgroundColor: selectedRegion.colorCode }}
                          />

                          {/* Content */}
                          <div>
                            <div 
                              className="font-playfair text-base font-semibold mb-1"
                              style={{ color: selectedRegion.colorCode }}
                            >
                              {milestone.year}
                            </div>
                            <p className="font-inter text-sm text-gray-700 leading-relaxed">
                              {milestone.event}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
