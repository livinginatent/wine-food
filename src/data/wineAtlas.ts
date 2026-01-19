export interface Terroir {
  soil: string;
  climate: string;
  elevation: string;
}

export interface HistoryMilestone {
  year: string;
  event: string;
}

export interface WineRegion {
  id: string;
  name: string;
  country: string;
  coordinates: [number, number]; // [latitude, longitude]
  primaryGrape: string;
  description: string;
  terroir: Terroir;
  history: HistoryMilestone[];
  grapeImage: string;
  colorCode: string;
}

export const WINE_REGIONS: WineRegion[] = [
  {
    id: "bordeaux",
    name: "Bordeaux",
    country: "France",
    coordinates: [44.8378, -0.5792],
    primaryGrape: "Cabernet Sauvignon",
    description: "The world's most prestigious wine region, where centuries of refinement have perfected the art of blending Cabernet Sauvignon and Merlot into wines of extraordinary elegance and longevity. The Left Bank's gravelly soils produce structured, age-worthy wines that command respect in cellars worldwide, while the Right Bank's clay-limestone terroir yields supple, approachable expressions of Merlot.",
    terroir: {
      soil: "Gravel, clay, limestone with excellent drainage",
      climate: "Maritime, moderated by the Gironde estuary and Atlantic Ocean",
      elevation: "Sea level to 100 meters, with optimal drainage on gentle slopes"
    },
    history: [
      { year: "1152", event: "Marriage of Eleanor of Aquitaine to Henry II establishes English wine trade, beginning Bordeaux's international reputation" },
      { year: "1855", event: "Official Classification of Médoc establishes the five growth system, codifying Bordeaux's hierarchy for posterity" },
      { year: "1961", event: "Legendary vintage year, producing wines that remain benchmarks of excellence and demonstrate Bordeaux's aging potential" },
      { year: "2000", event: "Millennium vintage achieves near-perfect conditions, solidifying modern Bordeaux's place among the world's finest wines" }
    ],
    grapeImage: "/grapes/cabernet-sauvignon-bordeaux.jpg",
    colorCode: "#5A1A3E"
  },
  {
    id: "piedmont",
    name: "Piedmont",
    country: "Italy",
    coordinates: [44.6988, 7.6770],
    primaryGrape: "Nebbiolo",
    description: "Nestled in the foothills of the Alps, Piedmont produces Italy's most noble wines through Nebbiolo, a grape that transforms the region's fog-shrouded hills into ethereal expressions of tar, roses, and earth. Barolo and Barbaresco stand as monuments to Italian winemaking tradition, requiring patience and reverence to unlock their profound complexity.",
    terroir: {
      soil: "Calcareous marl, clay, and sand with high mineral content",
      climate: "Continental with significant diurnal temperature variation and autumn fog",
      elevation: "250-550 meters, with south-facing slopes capturing optimal sunlight"
    },
    history: [
      { year: "1268", event: "First documented mention of Nebbiolo in La Morra, establishing the grape's ancient lineage in the region" },
      { year: "1861", event: "Unification of Italy brings recognition to Barolo as the 'wine of kings, king of wines' at the royal court" },
      { year: "1980", event: "Modernist movement introduces shorter maceration and French oak, sparking debate between traditional and contemporary styles" },
      { year: "2010", event: "Exceptional vintage across all appellations, demonstrating Nebbiolo's ability to express terroir with remarkable precision" }
    ],
    grapeImage: "/grapes/nebbiolo-piedmont.jpg",
    colorCode: "#5A1A3E"
  },
  {
    id: "napa",
    name: "Napa Valley",
    country: "United States",
    coordinates: [38.2975, -122.2869],
    primaryGrape: "Cabernet Sauvignon",
    description: "California's crown jewel, where volcanic soils and Mediterranean climate converge to create Cabernet Sauvignon of unprecedented power and polish. The valley's diverse microclimates, from the cool Carneros to the warm Stags Leap District, showcase how one grape can express itself with remarkable diversity across mere miles.",
    terroir: {
      soil: "Volcanic, alluvial, and well-drained sedimentary deposits",
      climate: "Mediterranean with warm days, cool nights, and morning fog from San Pablo Bay",
      elevation: "Sea level to 400 meters, with mountain vineyards offering distinct character"
    },
    history: [
      { year: "1861", event: "Charles Krug establishes the first commercial winery, beginning Napa's transformation from agricultural valley to wine destination" },
      { year: "1976", event: "Judgment of Paris: Stag's Leap Wine Cellars Cabernet defeats Bordeaux first growths, revolutionizing global wine perception" },
      { year: "1990s", event: "Era of 'cult wines' emerges, with limited-production Cabernets achieving unprecedented prices and critical acclaim" },
      { year: "2012", event: "Perfect growing season produces wines of exceptional balance, cementing Napa's reputation for world-class Cabernet Sauvignon" }
    ],
    grapeImage: "/grapes/cabernet-sauvignon-napa.jpg",
    colorCode: "#5A1A3E"
  },
  {
    id: "mendoza",
    name: "Mendoza",
    country: "Argentina",
    coordinates: [-32.8895, -68.8458],
    primaryGrape: "Malbec",
    description: "At the foot of the Andes, Mendoza's high-altitude vineyards produce Malbec of extraordinary intensity and purity, where intense sunlight and cool mountain air create wines with deep color, velvety tannins, and explosive fruit. The region's transformation from bulk wine producer to premium destination showcases how altitude and passion can elevate a grape to greatness.",
    terroir: {
      soil: "Alluvial, sandy, and stony with excellent drainage from mountain runoff",
      climate: "High-altitude continental with intense sunlight, low humidity, and significant temperature swings",
      elevation: "800-1,500 meters above sea level, with higher elevations producing more elegant expressions"
    },
    history: [
      { year: "1551", event: "Spanish settlers plant first vines, establishing Mendoza as Argentina's viticultural heartland" },
      { year: "1885", event: "Phylloxera devastates European vineyards, leading French immigrants to bring Malbec cuttings to Mendoza's safe haven" },
      { year: "1990s", event: "Catena Zapata pioneers high-altitude viticulture, proving Mendoza can produce world-class wines at elevation" },
      { year: "2010", event: "Malbec becomes Argentina's signature export, with Mendoza wines achieving international recognition and premium positioning" }
    ],
    grapeImage: "/grapes/malbec-mendoza.jpg",
    colorCode: "#5A1A3E"
  },
  {
    id: "rioja",
    name: "Rioja",
    country: "Spain",
    coordinates: [42.4650, -2.4456],
    primaryGrape: "Tempranillo",
    description: "Spain's most celebrated wine region, where Tempranillo achieves its finest expression through extended oak aging and the region's unique blend of Atlantic and Mediterranean influences. Rioja's traditional classification system, from Crianza to Gran Reserva, represents a philosophy of patience and respect for the grape's ability to evolve gracefully over decades.",
    terroir: {
      soil: "Clay-limestone, ferrous clay, and alluvial deposits with calcareous subsoil",
      climate: "Continental-Mediterranean transition with Atlantic influence moderating extremes",
      elevation: "400-800 meters, with higher elevations providing freshness and acidity"
    },
    history: [
      { year: "1102", event: "King Sancho grants Rioja its first wine regulations, establishing the region's long tradition of quality control" },
      { year: "1860s", event: "Phylloxera devastates Bordeaux, leading French winemakers to Rioja and introducing modern techniques" },
      { year: "1926", event: "Creation of the Consejo Regulador establishes the Denominación de Origen system and aging classifications" },
      { year: "1991", event: "Upgrade to Denominación de Origen Calificada (DOCa) recognizes Rioja as Spain's first and only highest-quality appellation" }
    ],
    grapeImage: "/grapes/tempranillo-rioja.jpg",
    colorCode: "#8B1A1A"
  },
  {
    id: "mosel",
    name: "Mosel",
    country: "Germany",
    coordinates: [49.9600, 7.0700],
    primaryGrape: "Riesling",
    description: "Where the Mosel River carves through slate cliffs, creating some of the world's steepest vineyards and most ethereal Rieslings. The region's blue and red slate soils, combined with the river's moderating influence, produce wines of crystalline purity, electric acidity, and the ability to age for generations while maintaining their vibrant character.",
    terroir: {
      soil: "Blue and red slate (Devonian schist) with minimal topsoil",
      climate: "Cool continental with river moderation, long growing season, and late harvests",
      elevation: "100-300 meters on extreme slopes up to 70 degrees, maximizing sun exposure"
    },
    history: [
      { year: "Roman Era", event: "Romans recognize the Mosel's potential, planting vines on steep slopes and establishing the region's viticultural foundation" },
      { year: "1775", event: "Spätlese discovered by accident at Schloss Johannisberg, revolutionizing German wine classification and late-harvest techniques" },
      { year: "1971", event: "German Wine Law establishes Prädikatswein system, codifying quality levels from Kabinett to Trockenbeerenauslese" },
      { year: "2001", event: "Exceptional vintage produces legendary wines, demonstrating Mosel Riesling's unparalleled aging potential and terroir expression" }
    ],
    grapeImage: "/grapes/riesling-mosel.jpg",
    colorCode: "#F5E6D3"
  },
  {
    id: "marlborough",
    name: "Marlborough",
    country: "New Zealand",
    coordinates: [-41.5134, 173.9610],
    primaryGrape: "Sauvignon Blanc",
    description: "New Zealand's largest wine region, where intense sunlight, cool nights, and free-draining soils create Sauvignon Blanc of explosive aromatic intensity and razor-sharp acidity. Marlborough's distinctive style—bursting with passionfruit, gooseberry, and cut grass—has become the global benchmark for New World Sauvignon Blanc, transforming the region from obscurity to international recognition in mere decades.",
    terroir: {
      soil: "Free-draining alluvial gravels, silt loam, and stony riverbed deposits",
      climate: "Cool maritime with high sunshine hours, low rainfall, and significant diurnal variation",
      elevation: "Sea level to 200 meters, with river valleys providing optimal drainage and air flow"
    },
    history: [
      { year: "1973", event: "Montana Wines plants first commercial Sauvignon Blanc vines, beginning Marlborough's transformation into a wine region" },
      { year: "1985", event: "Cloudy Bay releases its first vintage, creating the 'Marlborough style' that would define New Zealand wine globally" },
      { year: "2000s", event: "Marlborough Sauvignon Blanc becomes New Zealand's signature export, driving the country's wine industry expansion" },
      { year: "2010", event: "Region achieves international recognition, with Marlborough Sauvignon Blanc becoming the world's most recognized New Zealand wine" }
    ],
    grapeImage: "/grapes/sauvignon-blanc-marlborough.jpg",
    colorCode: "#E8DCC6"
  },
  {
    id: "stellenbosch",
    name: "Stellenbosch",
    country: "South Africa",
    coordinates: [-33.9347, 18.8606],
    primaryGrape: "Cabernet Sauvignon",
    description: "South Africa's most prestigious wine region, where Cabernet Sauvignon finds exceptional expression in the shadow of Table Mountain. The region's diverse soils, from granite to shale, combined with cooling maritime influences, produce wines that balance Old World structure with New World fruit intensity, creating a style uniquely South African.",
    terroir: {
      soil: "Granite, shale, sandstone, and alluvial deposits with excellent drainage",
      climate: "Mediterranean with cooling influences from False Bay and Atlantic Ocean",
      elevation: "100-500 meters on mountain slopes and valley floors, with aspect crucial for quality"
    },
    history: [
      { year: "1679", event: "Simon van der Stel establishes Stellenbosch, planting the first vines and beginning South Africa's wine industry" },
      { year: "1685", event: "French Huguenots arrive with winemaking expertise, establishing the region's tradition of quality and blending" },
      { year: "1970s", event: "End of isolation era brings international investment and modern techniques, revitalizing the region's potential" },
      { year: "1994", event: "Post-apartheid era opens global markets, allowing Stellenbosch wines to achieve international recognition and acclaim" }
    ],
    grapeImage: "/grapes/cabernet-sauvignon-stellenbosch.jpg",
    colorCode: "#5A1A3E"
  },
  {
    id: "champagne",
    name: "Champagne",
    country: "France",
    coordinates: [49.2583, 4.0317],
    primaryGrape: "Chardonnay",
    description: "The only region that matters for true Champagne, where méthode champenoise transforms still wines into the world's most celebrated sparkling wine. The chalky soils and cool climate create wines of extraordinary finesse and complexity, where Chardonnay provides elegance, Pinot Noir adds structure, and Pinot Meunier contributes fruitiness to the final blend.",
    terroir: {
      soil: "Chalky limestone (belemnite and micraster) with excellent water retention and drainage",
      climate: "Cool continental with marginal ripening conditions, requiring careful site selection",
      elevation: "90-300 meters on gentle slopes, with south-facing aspects crucial for ripening"
    },
    history: [
      { year: "1668", event: "Dom Pérignon arrives at Hautvillers Abbey, perfecting blending techniques and establishing Champagne's quality foundation" },
      { year: "1729", event: "Ruinart becomes the first established Champagne house, beginning the region's commercial sparkling wine production" },
      { year: "1927", event: "Champagne AOC boundaries legally defined, protecting the region's name and establishing strict production regulations" },
      { year: "2015", event: "UNESCO designates Champagne's hillsides, houses, and cellars as World Heritage, recognizing its cultural significance" }
    ],
    grapeImage: "/grapes/chardonnay-champagne.jpg",
    colorCode: "#F0E8D6"
  },
  {
    id: "douro",
    name: "Douro",
    country: "Portugal",
    coordinates: [41.1579, -7.7860],
    primaryGrape: "Touriga Nacional",
    description: "The world's first demarcated wine region, where schistous terraces carved into impossibly steep slopes produce Port wines of legendary concentration and complexity. Touriga Nacional, the region's noblest grape, contributes structure, floral aromatics, and aging potential to Port's unique style, while the Douro's extreme terroir creates table wines of increasing international renown.",
    terroir: {
      soil: "Schist (metamorphic rock) with minimal topsoil, forcing roots deep for water and nutrients",
      climate: "Hot continental with extreme temperature variation and low rainfall",
      elevation: "100-600 meters on terraced slopes, with manual labor required for most vineyards"
    },
    history: [
      { year: "1756", event: "Marquês de Pombal establishes the world's first wine appellation, creating the Douro's boundaries and quality regulations" },
      { year: "1820", event: "British merchants establish Port houses in Vila Nova de Gaia, beginning the region's golden age of export" },
      { year: "1986", event: "Portugal joins the EU, modernizing production and allowing Douro table wines to gain international recognition" },
      { year: "2001", event: "UNESCO designates the Alto Douro Wine Region as World Heritage, recognizing its cultural landscape and viticultural tradition" }
    ],
    grapeImage: "/grapes/touriga-nacional-douro.jpg",
    colorCode: "#B8A07A"
  }
];
