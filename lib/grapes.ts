export interface GrapeHistory {
  year: string;
  event: string;
}

export interface Grape {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  origin: string;
  history: GrapeHistory[];
  characteristics: string[];
  regions: string[];
}

export const grapes: Grape[] = [
  {
    id: "cabernet-sauvignon",
    name: "Cabernet Sauvignon",
    imageUrl: "/grapes/cabernet-sauvignon.jpg",
    description: "The world's most recognized red wine grape, known for its bold structure and aging potential.",
    origin: "Bordeaux, France",
    history: [
      { year: "17th Century", event: "First documented in Bordeaux as a natural cross between Cabernet Franc and Sauvignon Blanc" },
      { year: "1855", event: "Classified as a premier cru grape in Bordeaux's official classification" },
      { year: "1976", event: "Stag's Leap Wine Cellars Cabernet wins the Judgment of Paris, establishing California's reputation" },
      { year: "Today", event: "Most widely planted premium red grape worldwide, from Napa to Australia" }
    ],
    characteristics: ["Full-bodied", "High Tannins", "Dark Fruit", "Oak", "Long Aging"],
    regions: ["Bordeaux", "Napa Valley", "Tuscany", "Chile", "Australia"]
  },
  {
    id: "chardonnay",
    name: "Chardonnay",
    imageUrl: "/grapes/chardonnay.jpg",
    description: "The world's most popular white wine grape, versatile and expressive of terroir.",
    origin: "Burgundy, France",
    history: [
      { year: "Ancient Times", event: "Originated in Burgundy, possibly from wild vines" },
      { year: "12th Century", event: "Cistercian monks begin systematic cultivation in Burgundy" },
      { year: "1970s", event: "California Chardonnay boom begins, popularizing oaky, buttery styles" },
      { year: "Today", event: "Grown in virtually every wine-producing country, from Champagne to New Zealand" }
    ],
    characteristics: ["Versatile", "Buttery", "Citrus", "Oak", "Creamy"],
    regions: ["Burgundy", "Champagne", "California", "Australia", "New Zealand"]
  },
  {
    id: "pinot-noir",
    name: "Pinot Noir",
    imageUrl: "/grapes/pinot-noir.jpg",
    description: "The 'heartbreak grape' - difficult to grow but produces the most elegant wines.",
    origin: "Burgundy, France",
    history: [
      { year: "1st Century AD", event: "Romans document Pinot Noir in Burgundy, calling it 'Allobrogica'" },
      { year: "14th Century", event: "Dukes of Burgundy establish strict vineyard regulations" },
      { year: "2004", event: "Sideways film boosts Pinot Noir popularity, especially in California" },
      { year: "Today", event: "Thrives in cool climates from Oregon to Tasmania" }
    ],
    characteristics: ["Elegant", "Light-bodied", "Red Fruit", "Earthy", "Silky"],
    regions: ["Burgundy", "Oregon", "California", "New Zealand", "Germany"]
  },
  {
    id: "sauvignon-blanc",
    name: "Sauvignon Blanc",
    imageUrl: "/grapes/sauvignon-blanc.jpg",
    description: "Crisp, aromatic white grape known for its herbaceous and citrus notes.",
    origin: "Loire Valley, France",
    history: [
      { year: "16th Century", event: "First mentioned in Loire Valley, possibly related to wild vines" },
      { year: "1880s", event: "Phylloxera devastates French vineyards, Sauvignon Blanc nearly disappears" },
      { year: "1970s", event: "New Zealand begins producing distinctive Sauvignon Blanc, creating a new style" },
      { year: "Today", event: "One of the world's most popular white wines, from Sancerre to Marlborough" }
    ],
    characteristics: ["Crisp", "Herbaceous", "Citrus", "High Acidity", "Mineral"],
    regions: ["Loire Valley", "Bordeaux", "New Zealand", "California", "South Africa"]
  },
  {
    id: "merlot",
    name: "Merlot",
    imageUrl: "/grapes/merlot.jpg",
    description: "Smooth and approachable red grape, the perfect partner to Cabernet Sauvignon.",
    origin: "Bordeaux, France",
    history: [
      { year: "1784", event: "First documented mention in Bordeaux, named for the blackbird (merle)" },
      { year: "1855", event: "Key component in Right Bank Bordeaux blends, especially Pomerol" },
      { year: "1990s", event: "Merlot boom in America, becomes most popular red wine" },
      { year: "Today", event: "Second most planted red grape globally, from Bordeaux to Washington State" }
    ],
    characteristics: ["Smooth", "Plum", "Cherry", "Soft Tannins", "Velvety"],
    regions: ["Bordeaux", "Tuscany", "Washington State", "Chile", "Italy"]
  },
  {
    id: "riesling",
    name: "Riesling",
    imageUrl: "/grapes/riesling.jpg",
    description: "Aromatic white grape capable of producing wines from bone-dry to lusciously sweet.",
    origin: "Rhine Valley, Germany",
    history: [
      { year: "1435", event: "First documented in Germany's Rheingau region" },
      { year: "1775", event: "Spätlese (late harvest) discovered by accident in Schloss Johannisberg" },
      { year: "19th Century", event: "Riesling becomes Germany's most prestigious wine, exported worldwide" },
      { year: "Today", event: "Revival in popularity, especially dry styles from Germany and Alsace" }
    ],
    characteristics: ["Aromatic", "High Acidity", "Peach", "Honey", "Mineral"],
    regions: ["Germany", "Alsace", "Austria", "Australia", "Washington State"]
  }
];

export function getGrapeById(id: string): Grape | undefined {
  return grapes.find(grape => grape.id === id);
}
