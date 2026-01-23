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
    imageUrl: "https://images.unsplash.com/photo-1607720336444-7990bedc2bf9?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    imageUrl: "https://images.unsplash.com/photo-1573574635896-36753f4e38bf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Grape_near_Sancerre.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/50/Sauvignon_blanc_grapes.jpg",
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
    imageUrl: "https://www.costersio.com/images/2022/09/09/merlot-3.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/76/Riesling_grapes_leaves.jpg",
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
  },
  {
    id: "syrah-shiraz",
    name: "Syrah / Shiraz",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Shiraz_Grapes.jpg/1280px-Shiraz_Grapes.jpg",
    description: "A powerful red grape that produces spicy, bold wines called Syrah in France and Shiraz in Australia.",
    origin: "Rhône Valley, France",
    history: [
      { year: "Ancient Times", event: "Possibly brought to France by Romans from Syracuse (hence 'Syrah')" },
      { year: "18th Century", event: "Established as the premier grape of Northern Rhône" },
      { year: "1832", event: "James Busby brings Syrah cuttings to Australia, where it becomes Shiraz" },
      { year: "Today", event: "Produces iconic wines from Côte-Rôtie to Barossa Valley" }
    ],
    characteristics: ["Spicy", "Full-bodied", "Black Pepper", "Dark Berry", "Smoky"],
    regions: ["Rhône Valley", "Australia", "California", "South Africa", "Washington State"]
  },
  {
    id: "tempranillo",
    name: "Tempranillo",
    imageUrl: "https://images.squarespace-cdn.com/content/v1/62c3548a2f43987a32098ece/1658331633467-OTNWG06CUAWE0LGA0BCR/Tempranillo.jpg",
    description: "Spain's noble red grape, known for producing age-worthy wines with leather and tobacco notes.",
    origin: "Spain",
    history: [
      { year: "1100s", event: "First mentioned in Spanish literature as 'temprano' (early ripening)" },
      { year: "19th Century", event: "Becomes the backbone of Rioja wines" },
      { year: "1990s", event: "Modern Rioja revolution elevates Tempranillo's international reputation" },
      { year: "Today", event: "Spain's most planted red grape and gaining popularity worldwide" }
    ],
    characteristics: ["Medium-bodied", "Leather", "Cherry", "Tobacco", "Good Aging"],
    regions: ["Rioja", "Ribera del Duero", "Portugal", "Argentina", "California"]
  },
  {
    id: "zinfandel",
    name: "Zinfandel",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Grapes%2C_Dry_Creek_Valley-7705.jpg/250px-Grapes%2C_Dry_Creek_Valley-7705.jpg",
    description: "California's signature red grape, known for its jammy fruit and high alcohol content.",
    origin: "Croatia (as Crljenak Kaštelanski)",
    history: [
      { year: "1820s", event: "Brought to United States from Austria" },
      { year: "1850s", event: "Becomes popular during California Gold Rush" },
      { year: "1970s", event: "White Zinfandel craze makes it America's best-selling wine" },
      { year: "Today", event: "DNA testing confirms Croatian origins, respected for powerful reds" }
    ],
    characteristics: ["Jammy", "High Alcohol", "Blackberry", "Spice", "Bold"],
    regions: ["California", "Italy (as Primitivo)", "Croatia", "Australia", "South Africa"]
  },
  {
    id: "sangiovese",
    name: "Sangiovese",
    imageUrl: "https://brunolo.nl/cdn/shop/articles/Sangiovese-grosso-II_f35755dc-0929-4252-a144-ceab77611be5.jpg?v=1739371819",
    description: "Italy's most important red grape, the heart of Chianti and Brunello di Montalcino.",
    origin: "Tuscany, Italy",
    history: [
      { year: "16th Century", event: "First mentioned by Italian agronomist Soderini" },
      { year: "19th Century", event: "Baron Bettino Ricasoli creates classic Chianti formula" },
      { year: "1980s", event: "Super Tuscan movement elevates Sangiovese's quality" },
      { year: "Today", event: "Italy's most planted grape, with clones like Brunello and Prugnolo" }
    ],
    characteristics: ["High Acidity", "Cherry", "Herbal", "Earthy", "Food-friendly"],
    regions: ["Tuscany", "Umbria", "California", "Australia", "Argentina"]
  },
  {
    id: "malbec",
    name: "Malbec",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Malbec_grapes.jpg",
    description: "A dark, inky red grape that found its true home in Argentina after struggling in France.",
    origin: "Southwest France",
    history: [
      { year: "16th Century", event: "Important grape in Cahors, France ('Black Wine')" },
      { year: "1857", event: "Michel Pouget brings Malbec cuttings to Argentina" },
      { year: "1956", event: "Frost devastates Malbec in Bordeaux, Argentina becomes its sanctuary" },
      { year: "Today", event: "Argentina's flagship grape, producing rich, velvety wines" }
    ],
    characteristics: ["Inky", "Plum", "Velvety", "Dark Fruit", "Soft Tannins"],
    regions: ["Argentina", "Cahors (France)", "Chile", "California", "Australia"]
  },
  {
    id: "pinot-grigio-pinot-gris",
    name: "Pinot Grigio / Pinot Gris",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB37e0cHjgt0ZdI3jpmV_02Cb68oHmcZuCZQ&s",
    description: "A white grape mutation of Pinot Noir, producing crisp Italian styles and richer Alsace versions.",
    origin: "Burgundy, France",
    history: [
      { year: "Middle Ages", event: "Mutation of Pinot Noir identified in Burgundy" },
      { year: "18th Century", event: "Brought to Northern Italy, becomes Pinot Grigio" },
      { year: "1960s", event: "Italian Pinot Grigio gains international popularity" },
      { year: "Today", event: "One of America's most popular white wines" }
    ],
    characteristics: ["Crisp", "Citrus", "Pear", "Light-bodied", "Refreshing"],
    regions: ["Italy", "Alsace", "Oregon", "Germany", "New Zealand"]
  },
  {
    id: "viognier",
    name: "Viognier",
    imageUrl: "https://www.foodandwine.com/thmb/6q9gNJbm8jyY_zQ94Hs6uVCfjGU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Wine-Guide-101-Viognier-FT-BLOG0922-2000-b46787924486401eabb694f1e47e34c2.jpg",
    description: "Aromatic white grape almost extinct in the 1960s, now famous for its floral, peachy wines.",
    origin: "Northern Rhône, France",
    history: [
      { year: "Ancient Times", event: "Possibly brought to France by Romans" },
      { year: "1965", event: "Only 14 acres left in Condrieu, near extinction" },
      { year: "1980s", event: "California winemakers revive interest in Viognier" },
      { year: "Today", event: "Grown worldwide, often blended with Syrah" }
    ],
    characteristics: ["Floral", "Peach", "Apricot", "Perfumed", "Medium-bodied"],
    regions: ["Condrieu", "California", "Australia", "South Africa", "Washington State"]
  },
  {
    id: "grenache-garnacha",
    name: "Grenache / Garnacha",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Grenache_Noir.jpg/250px-Grenache_Noir.jpg",
    description: "A versatile red grape that thrives in hot climates, known for high alcohol and red fruit flavors.",
    origin: "Spain",
    history: [
      { year: "16th Century", event: "Spanish monks bring Garnacha to Sardinia (as Cannonau)" },
      { year: "18th Century", event: "Becomes dominant in Southern Rhône (as Grenache)" },
      { year: "20th Century", event: "Key component in Châteauneuf-du-Pape" },
      { year: "Today", event: "One of the most planted red grapes worldwide" }
    ],
    characteristics: ["High Alcohol", "Red Fruit", "Spice", "Medium Tannins", "Versatile"],
    regions: ["Southern Rhône", "Spain", "Australia", "California", "Sardinia"]
  },
  {
    id: "gewurztraminer",
    name: "Gewürztraminer",
    imageUrl: "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2016/05/Gewurtraminer-920x609.jpg",
    description: "Highly aromatic white grape with distinctive lychee and rose petal notes.",
    origin: "Tramin, Italy",
    history: [
      { year: "16th Century", event: "First documented in Tramin, South Tyrol (Italy)" },
      { year: "19th Century", event: "Becomes popular in Alsace, France" },
      { year: "1970s", event: "Gains popularity in California and Pacific Northwest" },
      { year: "Today", event: "Celebrated for its bold aromatics and spicy character" }
    ],
    characteristics: ["Lychee", "Rose Petal", "Spicy", "Exotic", "Low Acidity"],
    regions: ["Alsace", "Germany", "Italy", "California", "New Zealand"]
  },
  {
    id: "nebbiolo",
    name: "Nebbiolo",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgpcqg3FzneZkjCrfpZYKqpRSWTQXfTOEXg&s",
    description: "The noble grape of Piedmont, producing Italy's most age-worthy wines like Barolo and Barbaresco.",
    origin: "Piedmont, Italy",
    history: [
      { year: "13th Century", event: "First mentioned in Piedmontese documents" },
      { year: "19th Century", event: "Barolo becomes 'the wine of kings, the king of wines'" },
      { year: "1980s", event: "Modernist vs. traditionalist debate revolutionizes winemaking" },
      { year: "Today", event: "Italy's most prestigious red grape, slowly expanding beyond Piedmont" }
    ],
    characteristics: ["High Tannins", "Tar", "Rose", "Cherry", "Exceptional Aging"],
    regions: ["Piedmont", "Lombardy", "California", "Australia", "Mexico"]
  },
  {
    id: "carmenere",
    name: "Carménère",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/75/CarmenereW.jpg",
    description: "The 'lost Bordeaux grape' that was rediscovered in Chile in the 1990s.",
    origin: "Bordeaux, France",
    history: [
      { year: "18th Century", event: "Important Bordeaux grape before phylloxera" },
      { year: "1867", event: "Carménère cuttings mistakenly sent to Chile as Merlot" },
      { year: "1994", event: "DNA testing confirms Carménère's survival in Chile" },
      { year: "Today", event: "Chile's signature grape, producing herbal, spicy reds" }
    ],
    characteristics: ["Herbal", "Spicy", "Black Cherry", "Medium-bodied", "Soft Tannins"],
    regions: ["Chile", "Italy", "France", "California", "New Zealand"]
  },
  {
    id: "vermentino",
    name: "Vermentino",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Rolle_%28Vermentino%29.jpg",
    description: "Crisp, Mediterranean white grape known for its salinity and citrus notes.",
    origin: "Mediterranean Basin",
    history: [
      { year: "14th Century", event: "First mentioned in Italian documents" },
      { year: "19th Century", event: "Becomes important in Sardinia and Corsica" },
      { year: "1990s", event: "Gains popularity in California and Australia" },
      { year: "Today", event: "Celebrated as a premium Mediterranean white" }
    ],
    characteristics: ["Salty", "Citrus", "Herbal", "High Acidity", "Refreshing"],
    regions: ["Sardinia", "Tuscany", "Corsica", "California", "Australia"]
  },
  {
    id: "mourvedre-monastrell",
    name: "Mourvèdre / Monastrell",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Balzac_noir-mourvedre.jpg",
    description: "A robust red grape that loves heat and produces tannic, gamey wines.",
    origin: "Spain",
    history: [
      { year: "Ancient Times", event: "Originated in Spain, possibly brought by Phoenicians" },
      { year: "16th Century", event: "Brought to France via Provence" },
      { year: "1970s", event: "Key component in GSM (Grenache-Syrah-Mourvèdre) blends" },
      { year: "Today", event: "Revival in Spain and popularity in Southern Rhône blends" }
    ],
    characteristics: ["Gamey", "Tannic", "Dark Fruit", "Meaty", "Structured"],
    regions: ["Bandol", "Southern Rhône", "Spain", "Australia", "California"]
  }
];

export function getGrapeById(id: string): Grape | undefined {
  return grapes.find(grape => grape.id === id);
}
