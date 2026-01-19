import { useState, useCallback, useMemo } from "react";
import { WineRegion as OldWineRegion, wineRegions, getWineRegionById } from "@/lib/wineRegions";
import { WineRegion, WINE_REGIONS } from "@/src/data/wineAtlas";
import { Grape, grapes, getGrapeById } from "@/lib/grapes";
import { LatLngExpression } from "leaflet";

export interface NavigationState {
  type: "region" | "grape";
  id: string;
  timestamp: number;
}

export interface MapPosition {
  center: LatLngExpression;
  zoom: number;
}

interface UseWineLearningReturn {
  // State
  activeRegion: WineRegion | null;
  activeGrape: Grape | null;
  history: NavigationState[];
  mapPosition: MapPosition | null;
  
  // Actions
  selectRegion: (regionId: string) => void;
  selectGrape: (grapeId: string) => void;
  goBack: () => void;
  goForward: () => void;
  clearSelection: () => void;
  
  // Computed
  canGoBack: boolean;
  canGoForward: boolean;
  relatedRegions: WineRegion[];
  relatedGrapes: Grape[];
}

const DEFAULT_MAP_POSITION: MapPosition = {
  center: [30, -20],
  zoom: 2,
};

export function useWineLearning(): UseWineLearningReturn {
  const [activeRegion, setActiveRegion] = useState<WineRegion | null>(null);
  const [activeGrape, setActiveGrape] = useState<Grape | null>(null);
  const [history, setHistory] = useState<NavigationState[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [mapPosition, setMapPosition] = useState<MapPosition | null>(null);

  // Find regions that grow a specific grape (checks both data sources)
  const findRegionsByGrape = useCallback((grapeName: string): WineRegion[] => {
    const results: WineRegion[] = [];
    
    // Check new WINE_REGIONS
    WINE_REGIONS.forEach(region => {
      if (region.primaryGrape.toLowerCase().includes(grapeName.toLowerCase()) ||
          grapeName.toLowerCase().includes(region.primaryGrape.toLowerCase())) {
        results.push(region);
      }
    });
    
    // Check old wineRegions
    wineRegions.forEach(region => {
      if (region.signatureGrapes.some(grape =>
        grape.toLowerCase().includes(grapeName.toLowerCase()) ||
        grapeName.toLowerCase().includes(grape.toLowerCase())
      )) {
        // Convert to new format if not already found
        if (!results.find(r => r.id === region.id)) {
          results.push({
            id: region.id,
            name: region.name,
            country: region.country,
            coordinates: region.coordinates,
            primaryGrape: region.signatureGrapes[0] || "Unknown",
            description: region.description,
            terroir: {
              soil: region.soil,
              climate: region.climate,
              elevation: "Not specified"
            },
            history: [],
            grapeImage: "",
            colorCode: "#8B1A1A"
          });
        }
      }
    });
    
    return results;
  }, []);

  // Find grapes grown in a specific region
  const findGrapesByRegion = useCallback((regionName: string): Grape[] => {
    return grapes.filter(grape =>
      grape.regions.some(region =>
        region.toLowerCase().includes(regionName.toLowerCase()) ||
        regionName.toLowerCase().includes(region.toLowerCase())
      )
    );
  }, []);

  // Add to navigation history
  const addToHistory = useCallback((state: NavigationState) => {
    setHistory(prev => {
      // Remove any history after current index (if we're not at the end)
      const newHistory = historyIndex < prev.length - 1
        ? prev.slice(0, historyIndex + 1)
        : prev;
      
      return [...newHistory, state];
    });
    setHistoryIndex(prev => prev + 1);
  }, [historyIndex]);

  // Helper to get region from either data source
  const getRegionById = useCallback((regionId: string): WineRegion | null => {
    // Try new WINE_REGIONS first
    const newRegion = WINE_REGIONS.find(r => r.id === regionId);
    if (newRegion) return newRegion;
    
    // Fallback to old wineRegions
    const oldRegion = getWineRegionById(regionId);
    if (oldRegion) {
      // Convert old format to new format
      return {
        id: oldRegion.id,
        name: oldRegion.name,
        country: oldRegion.country,
        coordinates: oldRegion.coordinates,
        primaryGrape: oldRegion.signatureGrapes[0] || "Unknown",
        description: oldRegion.description,
        terroir: {
          soil: oldRegion.soil,
          climate: oldRegion.climate,
          elevation: "Not specified"
        },
        history: [],
        grapeImage: "",
        colorCode: "#8B1A1A"
      };
    }
    
    return null;
  }, []);

  // Select a region
  const selectRegion = useCallback((regionId: string) => {
    const region = getRegionById(regionId);
    if (!region) return;

    setActiveRegion(region);
    setActiveGrape(null);
    
    // Update map position to region
    setMapPosition({
      center: region.coordinates,
      zoom: 8,
    });

    // Add to history
    addToHistory({
      type: "region",
      id: regionId,
      timestamp: Date.now(),
    });
  }, [addToHistory, getRegionById]);

  // Select a grape and find related regions
  const selectGrape = useCallback((grapeId: string) => {
    const grape = getGrapeById(grapeId);
    if (!grape) return;

    setActiveGrape(grape);
    setActiveRegion(null);

    // Find regions that grow this grape
    const relatedRegions = findRegionsByGrape(grape.name);
    
    // If we have related regions, navigate to the first one or calculate center
    if (relatedRegions.length > 0) {
      if (relatedRegions.length === 1) {
        // Single region - zoom to it
        setMapPosition({
          center: relatedRegions[0].coordinates,
          zoom: 8,
        });
      } else {
        // Multiple regions - calculate center and zoom out
        const avgLat = relatedRegions.reduce((sum, r) => sum + r.coordinates[0], 0) / relatedRegions.length;
        const avgLng = relatedRegions.reduce((sum, r) => sum + r.coordinates[1], 0) / relatedRegions.length;
        
        setMapPosition({
          center: [avgLat, avgLng],
          zoom: 4, // Zoom out to show multiple regions
        });
      }
    } else {
      // No matching regions found, reset to default
      setMapPosition(DEFAULT_MAP_POSITION);
    }

    // Add to history
    addToHistory({
      type: "grape",
      id: grapeId,
      timestamp: Date.now(),
    });
  }, [findRegionsByGrape, addToHistory]);

  // Navigate back in history
  const goBack = useCallback(() => {
    if (historyIndex <= 0) return;

    const newIndex = historyIndex - 1;
    const state = history[newIndex];
    
    setHistoryIndex(newIndex);

    if (state.type === "region") {
      const region = getRegionById(state.id);
      if (region) {
        setActiveRegion(region);
        setActiveGrape(null);
        setMapPosition({
          center: region.coordinates,
          zoom: 8,
        });
      }
    } else if (state.type === "grape") {
      const grape = getGrapeById(state.id);
      if (grape) {
        setActiveGrape(grape);
        setActiveRegion(null);
        const relatedRegions = findRegionsByGrape(grape.name);
        if (relatedRegions.length > 0) {
          if (relatedRegions.length === 1) {
            setMapPosition({
              center: relatedRegions[0].coordinates,
              zoom: 8,
            });
          } else {
            const avgLat = relatedRegions.reduce((sum, r) => sum + r.coordinates[0], 0) / relatedRegions.length;
            const avgLng = relatedRegions.reduce((sum, r) => sum + r.coordinates[1], 0) / relatedRegions.length;
            setMapPosition({
              center: [avgLat, avgLng],
              zoom: 4,
            });
          }
        } else {
          setMapPosition(DEFAULT_MAP_POSITION);
        }
      }
    }
  }, [historyIndex, history, findRegionsByGrape]);

  // Navigate forward in history
  const goForward = useCallback(() => {
    if (historyIndex >= history.length - 1) return;

    const newIndex = historyIndex + 1;
    const state = history[newIndex];
    
    setHistoryIndex(newIndex);

    if (state.type === "region") {
      const region = getRegionById(state.id);
      if (region) {
        setActiveRegion(region);
        setActiveGrape(null);
        setMapPosition({
          center: region.coordinates,
          zoom: 8,
        });
      }
    } else if (state.type === "grape") {
      const grape = getGrapeById(state.id);
      if (grape) {
        setActiveGrape(grape);
        setActiveRegion(null);
        const relatedRegions = findRegionsByGrape(grape.name);
        if (relatedRegions.length > 0) {
          if (relatedRegions.length === 1) {
            setMapPosition({
              center: relatedRegions[0].coordinates,
              zoom: 8,
            });
          } else {
            const avgLat = relatedRegions.reduce((sum, r) => sum + r.coordinates[0], 0) / relatedRegions.length;
            const avgLng = relatedRegions.reduce((sum, r) => sum + r.coordinates[1], 0) / relatedRegions.length;
            setMapPosition({
              center: [avgLat, avgLng],
              zoom: 4,
            });
          }
        } else {
          setMapPosition(DEFAULT_MAP_POSITION);
        }
      }
    }
  }, [historyIndex, history, findRegionsByGrape]);

  // Clear selection
  const clearSelection = useCallback(() => {
    setActiveRegion(null);
    setActiveGrape(null);
    setMapPosition(DEFAULT_MAP_POSITION);
  }, []);

  // Computed values
  const canGoBack = useMemo(() => historyIndex > 0, [historyIndex]);
  const canGoForward = useMemo(() => historyIndex < history.length - 1, [historyIndex, history.length]);

  const relatedRegions = useMemo(() => {
    if (activeGrape) {
      return findRegionsByGrape(activeGrape.name);
    }
    return [];
  }, [activeGrape, findRegionsByGrape]);

  const relatedGrapes = useMemo(() => {
    if (activeRegion) {
      return findGrapesByRegion(activeRegion.name);
    }
    return [];
  }, [activeRegion, findGrapesByRegion]);

  return {
    // State
    activeRegion,
    activeGrape,
    history,
    mapPosition,
    
    // Actions
    selectRegion,
    selectGrape,
    goBack,
    goForward,
    clearSelection,
    
    // Computed
    canGoBack,
    canGoForward,
    relatedRegions,
    relatedGrapes,
  };
}
