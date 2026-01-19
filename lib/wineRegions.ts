export interface WineRegion {
  id: string;
  name: string;
  country: string;
  coordinates: [number, number]; // [latitude, longitude]
  description: string;
  climate: string;
  soil: string;
  signatureGrapes: string[];
  wineStyles: string[];
  notableWineries?: string[];
  bestVintage?: string;
}

export const wineRegions: WineRegion[] = [
  {
    id: "bordeaux",
    name: "Bordeaux",
    country: "France",
    coordinates: [44.8378, -0.5792],
    description: "One of the world's most prestigious wine regions, Bordeaux is renowned for its elegant red blends, primarily Cabernet Sauvignon and Merlot. The region's maritime climate and gravelly soils produce wines of exceptional structure and aging potential.",
    climate: "Maritime, moderate with Atlantic influence",
    soil: "Gravel, clay, limestone",
    signatureGrapes: ["Cabernet Sauvignon", "Merlot", "Cabernet Franc", "Sauvignon Blanc", "Sémillon"],
    wineStyles: ["Bordeaux Blend", "Merlot-dominant", "Cabernet-dominant", "Dry White", "Sweet White (Sauternes)"],
    notableWineries: ["Château Margaux", "Château Latour", "Château Mouton Rothschild", "Château Haut-Brion"],
    bestVintage: "2015, 2016, 2018"
  },
  {
    id: "mendoza",
    name: "Mendoza",
    country: "Argentina",
    coordinates: [-32.8895, -68.8458],
    description: "Nestled at the foothills of the Andes, Mendoza is Argentina's premier wine region. High altitude vineyards and intense sunlight create Malbec wines with deep color, rich fruit flavors, and velvety tannins.",
    climate: "High altitude, continental, dry with intense sunlight",
    soil: "Alluvial, sandy, stony",
    signatureGrapes: ["Malbec", "Cabernet Sauvignon", "Torrontés", "Bonarda"],
    wineStyles: ["Malbec", "Malbec-Cabernet blends", "Torrontés", "Sparkling"],
    notableWineries: ["Catena Zapata", "Bodega Norton", "Achaval-Ferrer", "Trapiche"],
    bestVintage: "2016, 2017, 2019"
  },
  {
    id: "tuscany",
    name: "Tuscany",
    country: "Italy",
    coordinates: [43.7711, 11.2486],
    description: "The heart of Italian winemaking, Tuscany is famous for Chianti and Brunello di Montalcino. Sangiovese thrives in the region's rolling hills, producing wines with bright acidity, cherry flavors, and earthy complexity.",
    climate: "Mediterranean, warm summers, mild winters",
    soil: "Galestro (schist), clay, limestone",
    signatureGrapes: ["Sangiovese", "Canaiolo", "Trebbiano", "Malvasia"],
    wineStyles: ["Chianti", "Brunello di Montalcino", "Super Tuscan", "Vernaccia di San Gimignano"],
    notableWineries: ["Antinori", "Frescobaldi", "Castello Banfi", "Tenuta dell'Ornellaia"],
    bestVintage: "2015, 2016, 2019"
  },
  {
    id: "napa",
    name: "Napa Valley",
    country: "United States",
    coordinates: [38.2975, -122.2869],
    description: "California's crown jewel, Napa Valley produces world-class Cabernet Sauvignon and Chardonnay. The region's diverse microclimates and volcanic soils create wines of power, elegance, and exceptional quality.",
    climate: "Mediterranean, warm days, cool nights",
    soil: "Volcanic, alluvial, well-drained",
    signatureGrapes: ["Cabernet Sauvignon", "Chardonnay", "Merlot", "Pinot Noir", "Sauvignon Blanc"],
    wineStyles: ["Cabernet Sauvignon", "Chardonnay", "Merlot", "Sparkling", "Sauvignon Blanc"],
    notableWineries: ["Opus One", "Stag's Leap Wine Cellars", "Robert Mondavi", "Caymus"],
    bestVintage: "2012, 2013, 2015, 2016"
  }
];

export function getWineRegionById(id: string): WineRegion | undefined {
  return wineRegions.find(region => region.id === id);
}

export function getRegionsByGrapeName(grapeName: string): WineRegion[] {
  return wineRegions.filter(region =>
    region.signatureGrapes.some(grape =>
      grape.toLowerCase().includes(grapeName.toLowerCase()) ||
      grapeName.toLowerCase().includes(grape.toLowerCase())
    )
  );
}

export function getRegionsByGrapeNames(grapeNames: string[]): WineRegion[] {
  return wineRegions.filter(region =>
    grapeNames.some(grapeName =>
      region.signatureGrapes.some(grape =>
        grape.toLowerCase().includes(grapeName.toLowerCase()) ||
        grapeName.toLowerCase().includes(grape.toLowerCase())
      )
    )
  );
}
