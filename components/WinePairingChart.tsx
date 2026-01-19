"use client";

import { useState, useRef } from "react";
import { ArrowLeft, X } from "lucide-react";
import { useRouter } from "next/navigation";

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
    body: number; // 1-5 scale
    acidity: number; // 1-5 scale
    tannin: number; // 1-5 scale
  };
}

interface Pairing {
  foodId: string;
  wineId: string;
  reason: string;
  bridgeIngredients?: string[];
}

const foodCategories: FoodCategory[] = [
  { 
    id: "vegetables", 
    name: "Vegetables", 
    icon: "🥬", 
    position: { x: 80, y: 80 },
    tags: ["light", "fresh", "herbaceous", "bitter", "green"]
  },
  { 
    id: "roasted-veg", 
    name: "Roasted Veg", 
    icon: "🔥", 
    position: { x: 200, y: 80 },
    tags: ["caramelized", "sweet", "earthy", "rich", "umami"]
  },
  { 
    id: "soft-cheese", 
    name: "Soft Cheese", 
    icon: "🧀", 
    position: { x: 320, y: 80 },
    tags: ["creamy", "mild", "buttery", "rich", "fatty"]
  },
  { 
    id: "hard-cheese", 
    name: "Hard Cheese", 
    icon: "🧀", 
    position: { x: 440, y: 80 },
    tags: ["sharp", "salty", "aged", "protein-rich", "intense"]
  },
  { 
    id: "starches", 
    name: "Starches", 
    icon: "🍞", 
    position: { x: 560, y: 80 },
    tags: ["neutral", "starchy", "comforting", "versatile", "filling"]
  },
  { 
    id: "fish", 
    name: "Fish", 
    icon: "🐟", 
    position: { x: 680, y: 80 },
    tags: ["delicate", "lean", "briny", "light", "flaky"]
  },
  { 
    id: "rich-fish", 
    name: "Seafood", 
    icon: "🍤", 
    position: { x: 800, y: 80 },
    tags: ["oily", "fatty", "meaty", "umami", "luxurious"]
  },
  { 
    id: "white-meat", 
    name: "White Meat", 
    icon: "🍗", 
    position: { x: 920, y: 80 },
    tags: ["lean", "mild", "tender", "versatile", "protein"]
  },
  { 
    id: "red-meat", 
    name: "Red Meat", 
    icon: "🥩", 
    position: { x: 1040, y: 80 },
    tags: ["rich", "protein-rich", "fatty", "intense", "savory"]
  },
  { 
    id: "cured-meat", 
    name: "Cured Meat", 
    icon: "🥓", 
    position: { x: 1160, y: 80 },
    tags: ["salty", "fatty", "smoky", "intense", "preserved"]
  },
  { 
    id: "sweets", 
    name: "Sweets", 
    icon: "🍰", 
    position: { x: 1280, y: 80 },
    tags: ["sweet", "rich", "creamy", "fruity", "dessert"]
  },
];

const wineStyles: WineStyle[] = [
  {
    id: "dry-white",
    name: "Dry White",
    color: "#E8DCC6",
    position: { x: 120, y: 480 },
    grapes: ["Sauvignon Blanc", "Pinot Grigio", "Albariño", "Vermentino", "Grüner Veltliner"],
    intensity: "Light",
    description: "Crisp, refreshing whites with high acidity and minimal sweetness",
    profile: {
      body: 2,
      acidity: 4,
      tannin: 1
    }
  },
  {
    id: "sweet-white",
    name: "Sweet White",
    color: "#F5E6D3",
    position: { x: 280, y: 480 },
    grapes: ["Riesling", "Moscato", "Gewürztraminer", "Chenin Blanc", "Torrontés"],
    intensity: "Light to Medium",
    description: "Aromatic whites with noticeable sweetness and balanced acidity",
    profile: {
      body: 2,
      acidity: 3,
      tannin: 1
    }
  },
  {
    id: "rich-white",
    name: "Rich White",
    color: "#D4C4A8",
    position: { x: 440, y: 480 },
    grapes: ["Chardonnay", "Viognier", "Roussanne", "Marsanne", "Semillon"],
    intensity: "Full",
    description: "Full-bodied whites with creamy texture, often oak-aged",
    profile: {
      body: 4,
      acidity: 2,
      tannin: 1
    }
  },
  {
    id: "sparkling",
    name: "Sparkling",
    color: "#F0E8D6",
    position: { x: 600, y: 480 },
    grapes: ["Champagne", "Prosecco", "Cava", "English Sparkling", "Crémant"],
    intensity: "Light to Medium",
    description: "Effervescent wines with bubbles that cleanse the palate",
    profile: {
      body: 2,
      acidity: 4,
      tannin: 1
    }
  },
  {
    id: "light-red",
    name: "Light Red",
    color: "#C9A961",
    position: { x: 760, y: 480 },
    grapes: ["Pinot Noir", "Gamay", "Grenache", "Cinsault", "St. Laurent"],
    intensity: "Light",
    description: "Elegant, light-bodied reds with soft tannins and bright fruit",
    profile: {
      body: 2,
      acidity: 3,
      tannin: 2
    }
  },
  {
    id: "medium-red",
    name: "Medium Red",
    color: "#8B1A1A",
    position: { x: 920, y: 480 },
    grapes: ["Merlot", "Sangiovese", "Tempranillo", "Barbera", "Côtes du Rhône"],
    intensity: "Medium",
    description: "Balanced reds with moderate body, acidity, and tannins",
    profile: {
      body: 3,
      acidity: 3,
      tannin: 3
    }
  },
  {
    id: "bold-red",
    name: "Bold Red",
    color: "#5A1A3E",
    position: { x: 1080, y: 480 },
    grapes: ["Cabernet Sauvignon", "Syrah", "Malbec", "Nebbiolo", "Petite Sirah"],
    intensity: "Full",
    description: "Powerful, full-bodied reds with firm tannins and intense flavors",
    profile: {
      body: 5,
      acidity: 3,
      tannin: 5
    }
  },
  {
    id: "dessert",
    name: "Dessert",
    color: "#B8A07A",
    position: { x: 1240, y: 480 },
    grapes: ["Port", "Sherry", "Ice Wine", "Sauternes", "Late Harvest"],
    intensity: "Full",
    description: "Sweet, concentrated wines perfect for desserts or as dessert",
    profile: {
      body: 5,
      acidity: 2,
      tannin: 3
    }
  },
];

// Pairing data: food category -> wine styles with expert reasoning
const pairings: Pairing[] = [
  // Vegetables
  { 
    foodId: "vegetables", 
    wineId: "dry-white",
    reason: "High acidity cuts through bitterness and complements fresh, green flavors",
    bridgeIngredients: ["lemon", "herbs", "citrus"]
  },
  { 
    foodId: "vegetables", 
    wineId: "sparkling",
    reason: "Bubbles refresh the palate and enhance the crisp texture of vegetables"
  },
  
  // Roasted Veg
  { 
    foodId: "roasted-veg", 
    wineId: "medium-red",
    reason: "Caramelized sweetness pairs with fruit-forward reds; tannins complement umami",
    bridgeIngredients: ["garlic", "rosemary", "balsamic"]
  },
  { 
    foodId: "roasted-veg", 
    wineId: "rich-white",
    reason: "Full body matches the richness; oak notes complement caramelization"
  },
  { 
    foodId: "roasted-veg", 
    wineId: "light-red",
    reason: "Bright acidity cuts through richness while matching the earthy character"
  },
  
  // Soft Cheese
  { 
    foodId: "soft-cheese", 
    wineId: "sweet-white",
    reason: "Sweetness balances saltiness; acidity cuts through creamy fat"
  },
  { 
    foodId: "soft-cheese", 
    wineId: "sparkling",
    reason: "Bubbles cleanse the palate between bites of rich, creamy cheese"
  },
  { 
    foodId: "soft-cheese", 
    wineId: "dry-white",
    reason: "High acidity cuts through the fat and complements mild flavors"
  },
  
  // Hard Cheese
  { 
    foodId: "hard-cheese", 
    wineId: "bold-red",
    reason: "Firm tannins bind with proteins, softening astringency; intensity matches sharpness"
  },
  { 
    foodId: "hard-cheese", 
    wineId: "medium-red",
    reason: "Moderate tannins complement protein while balancing saltiness"
  },
  { 
    foodId: "hard-cheese", 
    wineId: "dessert",
    reason: "Sweetness contrasts with saltiness; rich body matches intensity"
  },
  
  // Starches
  { 
    foodId: "starches", 
    wineId: "dry-white",
    reason: "Light body doesn't overwhelm neutral starches; acidity adds interest"
  },
  { 
    foodId: "starches", 
    wineId: "light-red",
    reason: "Versatile pairing that complements starchy dishes without overpowering"
  },
  { 
    foodId: "starches", 
    wineId: "medium-red",
    reason: "Balanced profile works with various preparations and sauces"
  },
  
  // Fish
  { 
    foodId: "fish", 
    wineId: "dry-white",
    reason: "Delicate flavors require light touch; acidity enhances briny notes"
  },
  { 
    foodId: "fish", 
    wineId: "sparkling",
    reason: "Bubbles refresh the palate and complement delicate texture"
  },
  { 
    foodId: "fish", 
    wineId: "light-red",
    reason: "Soft tannins and bright fruit complement without overwhelming",
    bridgeIngredients: ["tomato", "herbs", "olive oil"]
  },
  
  // Rich Fish
  { 
    foodId: "rich-fish", 
    wineId: "rich-white",
    reason: "Full body matches the richness; creamy texture complements oily fish"
  },
  { 
    foodId: "rich-fish", 
    wineId: "sparkling",
    reason: "Acidity cuts through fat while bubbles cleanse the palate"
  },
  { 
    foodId: "rich-fish", 
    wineId: "light-red",
    reason: "Bright acidity cuts through richness; light body doesn't overpower"
  },
  
  // White Meat
  { 
    foodId: "white-meat", 
    wineId: "rich-white",
    reason: "Full body complements the protein; oak notes enhance preparation methods"
  },
  { 
    foodId: "white-meat", 
    wineId: "light-red",
    reason: "Elegant pairing that enhances without overwhelming mild flavors"
  },
  { 
    foodId: "white-meat", 
    wineId: "sparkling",
    reason: "Versatile pairing that works with various cooking methods and sauces"
  },
  
  // Red Meat
  { 
    foodId: "red-meat", 
    wineId: "bold-red",
    reason: "Firm tannins bind with proteins, softening the wine; intensity matches richness"
  },
  { 
    foodId: "red-meat", 
    wineId: "medium-red",
    reason: "Moderate tannins complement protein while maintaining balance"
  },
  
  // Cured Meat
  { 
    foodId: "cured-meat", 
    wineId: "medium-red",
    reason: "Tannins cut through fat; fruit balances saltiness and smokiness"
  },
  { 
    foodId: "cured-meat", 
    wineId: "sparkling",
    reason: "Acidity and bubbles cut through salt and fat, refreshing the palate"
  },
  { 
    foodId: "cured-meat", 
    wineId: "light-red",
    reason: "Bright acidity complements saltiness; light body doesn't overwhelm"
  },
  
  // Sweets
  { 
    foodId: "sweets", 
    wineId: "dessert",
    reason: "Wine must be as sweet or sweeter than food to avoid tasting flat"
  },
  { 
    foodId: "sweets", 
    wineId: "sweet-white",
    reason: "Sweetness matches dessert; acidity prevents cloying"
  },
  { 
    foodId: "sweets", 
    wineId: "sparkling",
    reason: "Bubbles and sweetness complement desserts; acidity balances richness"
  },
];

export default function WinePairingChart() {
  const router = useRouter();
  const [hoveredFood, setHoveredFood] = useState<string | null>(null);
  const [selectedWine, setSelectedWine] = useState<WineStyle | null>(null);
  const [hoveredPairing, setHoveredPairing] = useState<Pairing | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const getActivePairings = (foodId: string | null): Pairing[] => {
    if (!foodId) return [];
    return pairings.filter(p => p.foodId === foodId);
  };

  const activePairings = getActivePairings(hoveredFood);
  const activeWineIds = activePairings.map(p => p.wineId);

  const generatePath = (foodPos: { x: number; y: number }, winePos: { x: number; y: number }): string => {
    const midY = (foodPos.y + winePos.y) / 2;
    return `M ${foodPos.x} ${foodPos.y} Q ${foodPos.x} ${midY} ${winePos.x} ${midY} L ${winePos.x} ${winePos.y}`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-secondary/20 bg-white/30 px-6 py-8">
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
              Wine Pairing Chart
            </h1>
            <p className="font-inter text-sm font-light text-accent/60">
              Interactive guide to food and wine pairings
            </p>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <section className="px-6 py-8 overflow-x-auto">
        <div className="mx-auto max-w-7xl">
          <div className="bg-white/50 rounded-sm border border-secondary/20 p-8">
            <div className="text-center mb-8">
              <p className="font-inter text-sm font-light text-accent/70 mb-2">
                Hover over a food category to see wine pairings
              </p>
              <p className="font-inter text-xs font-light text-accent/50">
                Click on a wine bottle to see grape varieties
              </p>
            </div>
            
            <svg
              ref={svgRef}
              viewBox="0 0 1400 600"
              className="w-full h-auto"
              style={{ minHeight: "600px" }}
            >
              {/* Connection paths */}
              {pairings.map((pairing, idx) => {
                const food = foodCategories.find(f => f.id === pairing.foodId);
                const wine = wineStyles.find(w => w.id === pairing.wineId);
                if (!food || !wine) return null;

                const isActive = hoveredFood === pairing.foodId;
                const isHovered = hoveredPairing === pairing;
                const opacity = hoveredFood ? (isActive ? 0.8 : 0.05) : 0.15;
                const strokeWidth = isActive ? (isHovered ? 4 : 3) : 1.5;

                return (
                  <g key={`${pairing.foodId}-${pairing.wineId}-${idx}`}>
                    <path
                      d={generatePath(food.position, wine.position)}
                      fill="none"
                      stroke={wine.color}
                      strokeWidth={strokeWidth}
                      opacity={opacity}
                      className="transition-all duration-700 ease-in-out cursor-pointer"
                      style={{
                        strokeDasharray: isActive ? "8,4" : "none",
                        animation: isActive ? "dash 1.5s linear infinite" : "none",
                      }}
                      onMouseEnter={() => setHoveredPairing(pairing)}
                      onMouseLeave={() => setHoveredPairing(null)}
                    />
                    {/* Tooltip for pairing reason */}
                    {isHovered && isActive && (
                      <foreignObject
                        x={(food.position.x + wine.position.x) / 2 - 100}
                        y={(food.position.y + wine.position.y) / 2 - 40}
                        width="200"
                        height="80"
                        className="pointer-events-none"
                      >
                        <div className="bg-accent/95 text-white p-3 rounded-sm shadow-lg border border-secondary/30">
                          <p className="font-inter text-xs font-light leading-relaxed">
                            {pairing.reason}
                            {pairing.bridgeIngredients && (
                              <span className="block mt-1 text-accent/80">
                                Bridge: {pairing.bridgeIngredients.join(", ")}
                              </span>
                            )}
                          </p>
                        </div>
                      </foreignObject>
                    )}
                  </g>
                );
              })}

              {/* Food category icons */}
              {foodCategories.map((food) => {
                const isHovered = hoveredFood === food.id;
                const opacity = hoveredFood ? (isHovered ? 1 : 0.3) : 1;
                const scale = isHovered ? 1.2 : 1;

                return (
                  <g key={food.id}>
                    <circle
                      cx={food.position.x}
                      cy={food.position.y}
                      r={isHovered ? 38 : 32}
                      fill={isHovered ? "#C9A961" : "#F5F0E8"}
                      stroke={isHovered ? "#8B1A1A" : "#C9A961"}
                      strokeWidth={isHovered ? 3.5 : 2}
                      opacity={opacity}
                      className="transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => setHoveredFood(food.id)}
                      onMouseLeave={() => setHoveredFood(null)}
                    />
                    <text
                      x={food.position.x}
                      y={food.position.y + 5}
                      textAnchor="middle"
                      fontSize="24"
                      opacity={opacity}
                      className="transition-all duration-300 pointer-events-none"
                      style={{ transform: `scale(${scale})`, transformOrigin: `${food.position.x}px ${food.position.y}px` }}
                    >
                      {food.icon}
                    </text>
                    <text
                      x={food.position.x}
                      y={food.position.y + 55}
                      textAnchor="middle"
                      fontSize="12"
                      fill="#5A1A3E"
                      fontWeight={isHovered ? "600" : "400"}
                      opacity={opacity}
                      className="font-inter transition-all duration-300 pointer-events-none"
                    >
                      {food.name}
                    </text>
                  </g>
                );
              })}

              {/* Wine style bottles */}
              {wineStyles.map((wine) => {
                const isActive = activeWineIds.includes(wine.id);
                const opacity = hoveredFood ? (isActive ? 1 : 0.3) : 1;
                const scale = isActive ? 1.15 : 1;

                return (
                  <g key={wine.id}>
                    {/* Wine bottle shape */}
                    <g
                      onClick={() => setSelectedWine(wine)}
                      className="cursor-pointer"
                      opacity={opacity}
                      style={{ transform: `scale(${scale})`, transformOrigin: `${wine.position.x}px ${wine.position.y}px`, transition: "all 0.3s ease" }}
                    >
                      <rect
                        x={wine.position.x - 22}
                        y={wine.position.y - 65}
                        width={44}
                        height={90}
                        rx={5}
                        fill={wine.color}
                        stroke={isActive ? "#8B1A1A" : "#C9A961"}
                        strokeWidth={isActive ? 3.5 : 2}
                      />
                      {/* Bottle neck */}
                      <rect
                        x={wine.position.x - 9}
                        y={wine.position.y - 85}
                        width={18}
                        height={20}
                        rx={2}
                        fill={wine.color}
                        stroke={isActive ? "#8B1A1A" : "#C9A961"}
                        strokeWidth={isActive ? 3.5 : 2}
                      />
                      {/* Label */}
                      <rect
                        x={wine.position.x - 16}
                        y={wine.position.y - 25}
                        width={32}
                        height={22}
                        rx={2}
                        fill="white"
                        opacity={0.9}
                      />
                      {/* Cork */}
                      <rect
                        x={wine.position.x - 6}
                        y={wine.position.y - 90}
                        width={12}
                        height={8}
                        rx={1}
                        fill="#8B7355"
                      />
                    </g>
                    <text
                      x={wine.position.x}
                      y={wine.position.y + 50}
                      textAnchor="middle"
                      fontSize="11"
                      fill="#5A1A3E"
                      fontWeight={isActive ? "600" : "400"}
                      opacity={opacity}
                      className="font-inter transition-all duration-300 pointer-events-none"
                    >
                      {wine.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </section>

      {/* Wine Details Modal */}
      {selectedWine && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
          <div className="bg-background border border-secondary/30 rounded-sm max-w-lg w-full p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedWine(null)}
              className="absolute top-4 right-4 text-accent/60 hover:text-accent transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="space-y-6">
              <div>
                <h2 className="font-playfair text-3xl font-medium text-accent mb-2">
                  {selectedWine.name}
                </h2>
                <div className="h-1 w-16 bg-secondary mb-3"></div>
                <p className="font-inter text-sm font-medium text-accent/80 mb-1">
                  Intensity: {selectedWine.intensity}
                </p>
                <p className="font-inter text-sm font-light text-accent/70 leading-relaxed">
                  {selectedWine.description}
                </p>
              </div>

              {/* Profile Section */}
              <div className="border-t border-secondary/20 pt-4">
                <h3 className="font-playfair text-xl font-medium text-accent mb-4">
                  Profile (1-5 scale)
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-inter text-sm font-light text-accent">Body</span>
                      <span className="font-inter text-sm font-medium text-accent">{selectedWine.profile.body}/5</span>
                    </div>
                    <div className="w-full bg-secondary/20 rounded-full h-2">
                      <div
                        className="bg-secondary rounded-full h-2 transition-all duration-500"
                        style={{ width: `${(selectedWine.profile.body / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-inter text-sm font-light text-accent">Acidity</span>
                      <span className="font-inter text-sm font-medium text-accent">{selectedWine.profile.acidity}/5</span>
                    </div>
                    <div className="w-full bg-secondary/20 rounded-full h-2">
                      <div
                        className="bg-secondary rounded-full h-2 transition-all duration-500"
                        style={{ width: `${(selectedWine.profile.acidity / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-inter text-sm font-light text-accent">Tannin</span>
                      <span className="font-inter text-sm font-medium text-accent">{selectedWine.profile.tannin}/5</span>
                    </div>
                    <div className="w-full bg-secondary/20 rounded-full h-2">
                      <div
                        className="bg-secondary rounded-full h-2 transition-all duration-500"
                        style={{ width: `${(selectedWine.profile.tannin / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Grape Varieties */}
              <div className="border-t border-secondary/20 pt-4">
                <h3 className="font-playfair text-xl font-medium text-accent mb-4">
                  Grape Varieties
                </h3>
                <div className="space-y-3">
                  {selectedWine.grapes.map((grape, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 border border-secondary/20 bg-white/50 rounded-sm"
                    >
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: selectedWine.color }}
                      ></div>
                      <span className="font-inter text-sm font-light text-accent">
                        {grape}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -10;
          }
        }
      `}</style>
    </div>
  );
}
