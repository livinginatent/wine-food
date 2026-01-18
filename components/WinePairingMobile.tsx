"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { ArrowLeft, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// Import the same data structures from WinePairingChart
interface FoodCategory {
  id: string;
  name: string;
  icon: string;
  position: { x: number; y: number };
  tags: string[];
}

interface WineStyle {
  id: string;
  name: string;
  color: string;
  position: { x: number; y: number };
  grapes: string[];
  intensity: string;
  description: string;
  profile: {
    body: number;
    acidity: number;
    tannin: number;
  };
}

interface Pairing {
  foodId: string;
  wineId: string;
  reason: string;
  bridgeIngredients?: string[];
}

// Same data as WinePairingChart - we'll import this properly later
const foodCategories: FoodCategory[] = [
  { id: "vegetables", name: "Vegetables", icon: "🥬", position: { x: 0, y: 0 }, tags: ["light", "fresh", "herbaceous", "bitter", "green"] },
  { id: "roasted-veg", name: "Roasted Veg", icon: "🔥", position: { x: 0, y: 0 }, tags: ["caramelized", "sweet", "earthy", "rich", "umami"] },
  { id: "soft-cheese", name: "Soft Cheese", icon: "🧀", position: { x: 0, y: 0 }, tags: ["creamy", "mild", "buttery", "rich", "fatty"] },
  { id: "hard-cheese", name: "Hard Cheese", icon: "🧀", position: { x: 0, y: 0 }, tags: ["sharp", "salty", "aged", "protein-rich", "intense"] },
  { id: "starches", name: "Starches", icon: "🍞", position: { x: 0, y: 0 }, tags: ["neutral", "starchy", "comforting", "versatile", "filling"] },
  { id: "fish", name: "Fish", icon: "🐟", position: { x: 0, y: 0 }, tags: ["delicate", "lean", "briny", "light", "flaky"] },
  { id: "rich-fish", name: "Rich Fish", icon: "🐠", position: { x: 0, y: 0 }, tags: ["oily", "fatty", "meaty", "umami", "luxurious"] },
  { id: "white-meat", name: "White Meat", icon: "🍗", position: { x: 0, y: 0 }, tags: ["lean", "mild", "tender", "versatile", "protein"] },
  { id: "red-meat", name: "Red Meat", icon: "🥩", position: { x: 0, y: 0 }, tags: ["rich", "protein-rich", "fatty", "intense", "savory"] },
  { id: "cured-meat", name: "Cured Meat", icon: "🥓", position: { x: 0, y: 0 }, tags: ["salty", "fatty", "smoky", "intense", "preserved"] },
  { id: "sweets", name: "Sweets", icon: "🍰", position: { x: 0, y: 0 }, tags: ["sweet", "rich", "creamy", "fruity", "dessert"] },
];

const wineStyles: WineStyle[] = [
  {
    id: "dry-white",
    name: "Dry White",
    color: "#E8DCC6",
    position: { x: 0, y: 0 },
    grapes: ["Sauvignon Blanc", "Pinot Grigio", "Albariño", "Vermentino", "Grüner Veltliner"],
    intensity: "Light",
    description: "Crisp, refreshing whites with high acidity and minimal sweetness",
    profile: { body: 2, acidity: 4, tannin: 1 }
  },
  {
    id: "sweet-white",
    name: "Sweet White",
    color: "#F5E6D3",
    position: { x: 0, y: 0 },
    grapes: ["Riesling", "Moscato", "Gewürztraminer", "Chenin Blanc", "Torrontés"],
    intensity: "Light to Medium",
    description: "Aromatic whites with noticeable sweetness and balanced acidity",
    profile: { body: 2, acidity: 3, tannin: 1 }
  },
  {
    id: "rich-white",
    name: "Rich White",
    color: "#D4C4A8",
    position: { x: 0, y: 0 },
    grapes: ["Chardonnay", "Viognier", "Roussanne", "Marsanne", "Semillon"],
    intensity: "Full",
    description: "Full-bodied whites with creamy texture, often oak-aged",
    profile: { body: 4, acidity: 2, tannin: 1 }
  },
  {
    id: "sparkling",
    name: "Sparkling",
    color: "#F0E8D6",
    position: { x: 0, y: 0 },
    grapes: ["Champagne", "Prosecco", "Cava", "English Sparkling", "Crémant"],
    intensity: "Light to Medium",
    description: "Effervescent wines with bubbles that cleanse the palate",
    profile: { body: 2, acidity: 4, tannin: 1 }
  },
  {
    id: "light-red",
    name: "Light Red",
    color: "#C9A961",
    position: { x: 0, y: 0 },
    grapes: ["Pinot Noir", "Gamay", "Grenache", "Cinsault", "St. Laurent"],
    intensity: "Light",
    description: "Elegant, light-bodied reds with soft tannins and bright fruit",
    profile: { body: 2, acidity: 3, tannin: 2 }
  },
  {
    id: "medium-red",
    name: "Medium Red",
    color: "#8B1A1A",
    position: { x: 0, y: 0 },
    grapes: ["Merlot", "Sangiovese", "Tempranillo", "Barbera", "Côtes du Rhône"],
    intensity: "Medium",
    description: "Balanced reds with moderate body, acidity, and tannins",
    profile: { body: 3, acidity: 3, tannin: 3 }
  },
  {
    id: "bold-red",
    name: "Bold Red",
    color: "#5A1A3E",
    position: { x: 0, y: 0 },
    grapes: ["Cabernet Sauvignon", "Syrah", "Malbec", "Nebbiolo", "Petite Sirah"],
    intensity: "Full",
    description: "Powerful, full-bodied reds with firm tannins and intense flavors",
    profile: { body: 5, acidity: 3, tannin: 5 }
  },
  {
    id: "dessert",
    name: "Dessert",
    color: "#B8A07A",
    position: { x: 0, y: 0 },
    grapes: ["Port", "Sherry", "Ice Wine", "Sauternes", "Late Harvest"],
    intensity: "Full",
    description: "Sweet, concentrated wines perfect for desserts or as dessert",
    profile: { body: 5, acidity: 2, tannin: 3 }
  },
];

const pairings: Pairing[] = [
  { foodId: "vegetables", wineId: "dry-white", reason: "High acidity cuts through bitterness and complements fresh, green flavors", bridgeIngredients: ["lemon", "herbs", "citrus"] },
  { foodId: "vegetables", wineId: "sparkling", reason: "Bubbles refresh the palate and enhance the crisp texture of vegetables" },
  { foodId: "roasted-veg", wineId: "medium-red", reason: "Caramelized sweetness pairs with fruit-forward reds; tannins complement umami", bridgeIngredients: ["garlic", "rosemary", "balsamic"] },
  { foodId: "roasted-veg", wineId: "rich-white", reason: "Full body matches the richness; oak notes complement caramelization" },
  { foodId: "roasted-veg", wineId: "light-red", reason: "Bright acidity cuts through richness while matching the earthy character" },
  { foodId: "soft-cheese", wineId: "sweet-white", reason: "Sweetness balances saltiness; acidity cuts through creamy fat" },
  { foodId: "soft-cheese", wineId: "sparkling", reason: "Bubbles cleanse the palate between bites of rich, creamy cheese" },
  { foodId: "soft-cheese", wineId: "dry-white", reason: "High acidity cuts through the fat and complements mild flavors" },
  { foodId: "hard-cheese", wineId: "bold-red", reason: "Firm tannins bind with proteins, softening astringency; intensity matches sharpness" },
  { foodId: "hard-cheese", wineId: "medium-red", reason: "Moderate tannins complement protein while balancing saltiness" },
  { foodId: "hard-cheese", wineId: "dessert", reason: "Sweetness contrasts with saltiness; rich body matches intensity" },
  { foodId: "starches", wineId: "dry-white", reason: "Light body doesn't overwhelm neutral starches; acidity adds interest" },
  { foodId: "starches", wineId: "light-red", reason: "Versatile pairing that complements starchy dishes without overpowering" },
  { foodId: "starches", wineId: "medium-red", reason: "Balanced profile works with various preparations and sauces" },
  { foodId: "fish", wineId: "dry-white", reason: "Delicate flavors require light touch; acidity enhances briny notes" },
  { foodId: "fish", wineId: "sparkling", reason: "Bubbles refresh the palate and complement delicate texture" },
  { foodId: "fish", wineId: "light-red", reason: "Soft tannins and bright fruit complement without overwhelming", bridgeIngredients: ["tomato", "herbs", "olive oil"] },
  { foodId: "rich-fish", wineId: "rich-white", reason: "Full body matches the richness; creamy texture complements oily fish" },
  { foodId: "rich-fish", wineId: "sparkling", reason: "Acidity cuts through fat while bubbles cleanse the palate" },
  { foodId: "rich-fish", wineId: "light-red", reason: "Bright acidity cuts through richness; light body doesn't overpower" },
  { foodId: "white-meat", wineId: "rich-white", reason: "Full body complements the protein; oak notes enhance preparation methods" },
  { foodId: "white-meat", wineId: "light-red", reason: "Elegant pairing that enhances without overwhelming mild flavors" },
  { foodId: "white-meat", wineId: "sparkling", reason: "Versatile pairing that works with various cooking methods and sauces" },
  { foodId: "red-meat", wineId: "bold-red", reason: "Firm tannins bind with proteins, softening the wine; intensity matches richness" },
  { foodId: "red-meat", wineId: "medium-red", reason: "Moderate tannins complement protein while maintaining balance" },
  { foodId: "cured-meat", wineId: "medium-red", reason: "Tannins cut through fat; fruit balances saltiness and smokiness" },
  { foodId: "cured-meat", wineId: "sparkling", reason: "Acidity and bubbles cut through salt and fat, refreshing the palate" },
  { foodId: "cured-meat", wineId: "light-red", reason: "Bright acidity complements saltiness; light body doesn't overwhelm" },
  { foodId: "sweets", wineId: "dessert", reason: "Wine must be as sweet or sweeter than food to avoid tasting flat" },
  { foodId: "sweets", wineId: "sweet-white", reason: "Sweetness matches dessert; acidity prevents cloying" },
  { foodId: "sweets", wineId: "sparkling", reason: "Bubbles and sweetness complement desserts; acidity balances richness" },
];

export default function WinePairingMobile() {
  const router = useRouter();
  const [selectedFood, setSelectedFood] = useState<string | null>(null);
  const [selectedWine, setSelectedWine] = useState<WineStyle | null>(null);
  
  const foodRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const wineRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const containerRef = useRef<HTMLDivElement | null>(null);
  const columnsRef = useRef<HTMLDivElement | null>(null);
  const [pathData, setPathData] = useState<Array<{ foodId: string; wineId: string; path: string }>>([]);

  const activePairings = useMemo(() => {
    if (!selectedFood) return [];
    return pairings.filter(p => p.foodId === selectedFood);
  }, [selectedFood]);

  const activeWineIds = useMemo(() => {
    return activePairings.map(p => p.wineId);
  }, [activePairings]);

  // Calculate paths when food is selected
  useEffect(() => {
    if (!selectedFood || !columnsRef.current || activePairings.length === 0) {
      setPathData([]);
      return;
    }

    // Use setTimeout to ensure DOM has updated after render
    const timeoutId = setTimeout(() => {
      const newPaths: Array<{ foodId: string; wineId: string; path: string }> = [];
      const containerRect = columnsRef.current!.getBoundingClientRect();
      
      activePairings.forEach((pairing) => {
        const foodEl = foodRefs.current[selectedFood];
        const wineEl = wineRefs.current[pairing.wineId];
        
        if (foodEl && wineEl) {
          const foodRect = foodEl.getBoundingClientRect();
          const wineRect = wineEl.getBoundingClientRect();
          
          // Calculate positions relative to the columns container
          const foodX = foodRect.right - containerRect.left;
          const foodY = foodRect.top + foodRect.height / 2 - containerRect.top;
          const wineX = wineRect.left - containerRect.left;
          const wineY = wineRect.top + wineRect.height / 2 - containerRect.top;
          
          // Create curved path with cubic bezier
          const midX = (foodX + wineX) / 2;
          const cp1X = foodX + (midX - foodX) * 0.3;
          const cp2X = wineX - (wineX - midX) * 0.3;
          
          const path = `M ${foodX} ${foodY} C ${cp1X} ${foodY}, ${cp2X} ${wineY}, ${wineX} ${wineY}`;
          newPaths.push({ foodId: selectedFood, wineId: pairing.wineId, path });
        }
      });
      
      setPathData(newPaths);
    }, 150);

    return () => clearTimeout(timeoutId);
  }, [selectedFood, activePairings]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background pairing-container relative">
      {/* Sticky Header */}
      <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-md border-b border-secondary/20 px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-accent/70 transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-inter text-sm font-light">Back</span>
          </button>
          <h1 className="font-playfair text-xl font-medium text-accent">
            Pairing Chart
          </h1>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>
      </div>

      {/* Dual Column Layout */}
      <div ref={columnsRef} className="flex h-[calc(100vh-100px)] relative">
        {/* SVG Overlay for connection lines */}
        {pathData.length > 0 && containerRef.current && (
          <svg 
            className="absolute inset-0 pointer-events-none z-10" 
            style={{ 
              width: '100%', 
              height: '100%',
              overflow: 'visible'
            }}
          >
            <AnimatePresence>
              {pathData.map((pathInfo, idx) => {
                const wine = wineStyles.find(w => w.id === pathInfo.wineId);
                if (!wine) return null;
                
                return (
                  <motion.path
                    key={`${pathInfo.foodId}-${pathInfo.wineId}-${idx}`}
                    d={pathInfo.path}
                    fill="none"
                    stroke={wine.color}
                    strokeWidth={3}
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.8 }}
                    exit={{ pathLength: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{
                      strokeDasharray: "8,4",
                      filter: `drop-shadow(0 0 4px ${wine.color}80)`,
                    }}
                  />
                );
              })}
            </AnimatePresence>
          </svg>
        )}

        {/* Left Column - Food Categories */}
        <div className="flex-1 overflow-y-auto border-r border-secondary/10 bg-white/30 backdrop-blur-sm">
          <div className="p-4 space-y-2">
            {foodCategories.map((food) => {
              const isSelected = selectedFood === food.id;
              const hasPairings = pairings.some(p => p.foodId === food.id);
              
              return (
                <motion.div
                  key={food.id}
                  ref={(el) => (foodRefs.current[food.id] = el)}
                  onClick={() => {
                    setSelectedFood(isSelected ? null : food.id);
                    setSelectedWine(null);
                  }}
                  className={`flex items-center gap-3 p-4 rounded-lg cursor-pointer transition-all ${
                    isSelected
                      ? "bg-secondary/20 border-2 border-secondary/40 shadow-md"
                      : "bg-white/50 border border-secondary/20 hover:bg-white/70"
                  }`}
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    opacity: selectedFood && !isSelected ? 0.4 : 1,
                  }}
                >
                  <div className="text-2xl">{food.icon}</div>
                  <div className="flex-1">
                    <p className={`font-inter text-sm font-medium text-accent ${
                      isSelected ? "uppercase tracking-wide" : ""
                    }`}>
                      {food.name}
                    </p>
                  </div>
                  {hasPairings && (
                    <div className="w-2 h-2 rounded-full bg-secondary/40"></div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Column - Wine Styles */}
        <div className="flex-1 overflow-y-auto bg-white/30 backdrop-blur-sm">
          <div className="p-4 space-y-3">
            {wineStyles.map((wine) => {
              const isActive = activeWineIds.includes(wine.id);
              const isSelected = selectedWine?.id === wine.id;
              
              return (
                <motion.div
                  key={wine.id}
                  ref={(el) => (wineRefs.current[wine.id] = el)}
                  onClick={() => setSelectedWine(wine)}
                  className={`relative flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                    isActive || isSelected
                      ? "bg-white/80 border-2 border-secondary/40 shadow-lg"
                      : "bg-white/50 border border-secondary/20 hover:bg-white/70"
                  }`}
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    opacity: selectedFood && !isActive ? 0.3 : 1,
                    scale: isActive || isSelected ? 1.02 : 1,
                  }}
                >
                  {/* Minimalist bottle silhouette - smaller */}
                  <div className="flex-shrink-0">
                    <div
                      className="w-5 h-10 rounded-sm relative"
                      style={{ backgroundColor: wine.color }}
                    >
                      {/* Bottle neck */}
                      <div
                        className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-sm"
                        style={{ backgroundColor: wine.color }}
                      ></div>
                      {/* Label */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-3 bg-white/80 rounded-sm"></div>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className={`font-inter text-xs font-medium text-accent ${
                      isActive || isSelected ? "uppercase tracking-wide" : ""
                    }`}>
                      {wine.name}
                    </p>
                    {isActive && selectedFood && (
                      <p className="font-inter text-xs font-light text-accent/60 mt-1 line-clamp-2">
                        {activePairings.find(p => p.wineId === wine.id)?.reason}
                      </p>
                    )}
                  </div>
                  
                  {isActive && (
                    <div className="flex-shrink-0">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: wine.color }}
                      ></div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Wine Details Modal */}
      {selectedWine && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-end"
          onClick={() => setSelectedWine(null)}
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full bg-background border-t border-secondary/20 rounded-t-2xl shadow-2xl max-h-[85vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-background border-b border-secondary/10 px-6 py-4 flex justify-between items-center backdrop-blur-md">
              <h2 className="font-playfair text-2xl font-medium text-accent">
                {selectedWine.name}
              </h2>
              <button
                onClick={() => setSelectedWine(null)}
                className="text-accent/60 hover:text-accent transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Taste Profile */}
              <div className="space-y-3">
                <h3 className="font-playfair text-xl font-medium text-accent">
                  Taste Profile
                </h3>
                <div className="space-y-2">
                  <div>
                    <p className="font-inter text-xs font-medium text-accent/60 mb-1">Intensity</p>
                    <p className="font-inter text-sm font-light text-accent/70">{selectedWine.intensity}</p>
                  </div>
                  <div>
                    <p className="font-inter text-xs font-medium text-accent/60 mb-1">Description</p>
                    <p className="font-inter text-sm font-light text-accent/70 leading-relaxed">{selectedWine.description}</p>
                  </div>
                </div>
              </div>

              {/* Profile Bars */}
              <div className="space-y-4 border-t border-secondary/10 pt-4">
                <h3 className="font-playfair text-xl font-medium text-accent">Profile</h3>
                {["body", "acidity", "tannin"].map((key) => {
                  const value = selectedWine.profile[key as keyof typeof selectedWine.profile];
                  return (
                    <div key={key}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-playfair text-sm font-medium text-accent capitalize">{key}</span>
                        <span className="font-inter text-xs font-light text-accent/60">{value}/5</span>
                      </div>
                      <div className="relative w-full bg-secondary/10 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(value / 5) * 100}%` }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="absolute top-0 left-0 h-full bg-secondary rounded-full"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Grape Varieties */}
              <div className="space-y-3 border-t border-secondary/10 pt-4">
                <h3 className="font-playfair text-xl font-medium text-accent">Grape Varieties</h3>
                <div className="grid grid-cols-2 gap-2">
                  {selectedWine.grapes.map((grape, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-3 border border-secondary/20 bg-white/50 rounded-lg"
                    >
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: selectedWine.color }}
                      ></div>
                      <span className="font-inter text-xs font-light text-accent">{grape}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Perfect Match if food is selected */}
              {selectedFood && activePairings.some(p => p.wineId === selectedWine.id) && (
                <div className="space-y-3 border-t border-secondary/10 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <h3 className="font-playfair text-xl font-medium text-accent">Perfect Match</h3>
                  </div>
                  {(() => {
                    const matchingPairing = activePairings.find(p => p.wineId === selectedWine.id);
                    const food = foodCategories.find(f => f.id === selectedFood);
                    
                    if (!matchingPairing || !food) return null;
                    
                    return (
                      <div className="bg-white/50 border border-secondary/20 rounded-lg p-4 space-y-3">
                        <div>
                          <p className="font-inter text-xs font-medium text-accent/60 uppercase tracking-wide mb-1">Pairing</p>
                          <p className="font-playfair text-base font-medium text-accent">{food.name} × {selectedWine.name}</p>
                        </div>
                        <div className="border-t border-secondary/10 pt-3">
                          <p className="font-inter text-xs font-medium text-accent/60 uppercase tracking-wide mb-2">Why It Works</p>
                          <p className="font-inter text-sm font-light text-accent/80 leading-relaxed">{matchingPairing.reason}</p>
                        </div>
                        {matchingPairing.bridgeIngredients && matchingPairing.bridgeIngredients.length > 0 && (
                          <div className="border-t border-secondary/10 pt-3">
                            <p className="font-inter text-xs font-medium text-accent/60 uppercase tracking-wide mb-2">Bridge Ingredients</p>
                            <div className="flex flex-wrap gap-2">
                              {matchingPairing.bridgeIngredients.map((ingredient, idx) => (
                                <span
                                  key={idx}
                                  className="font-inter text-xs font-light text-accent/70 bg-secondary/10 border border-secondary/20 rounded-full px-3 py-1"
                                >
                                  {ingredient}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
