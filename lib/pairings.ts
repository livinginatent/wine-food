export interface Wine {
  id: string;
  name: string;
  type: string;
  description: string;
  // Optional context to add more specificity and terroir
  origin?: string; // e.g. "Bordeaux, France" or "Marlborough, New Zealand"
  regionId?: string; // optional link to an entry in wineRegions
  characteristics: string[];
  foodPairings: string[];
}

export interface Food {
  id: string;
  name: string;
  category: string;
  description: string;
  characteristics: string[];
  winePairings: string[];
  isVegetarian: boolean; // Added for filtering as requested
}

export const wines: Wine[] = [
  {
    id: "cabernet-sauvignon",
    name: "Cabernet Sauvignon",
    type: "Red Wine",
    origin: "Bordeaux, France & Napa Valley, USA",
    description: "Full-bodied, structured and cassis-driven, with firm tannins, dark fruit and often cedar or graphite from oak and bottle age.",
    characteristics: ["Bold", "Tannic", "Dark Fruit", "Oak"],
    foodPairings: ["Grilled Steak", "Aged Cheddar", "Venison", "Beef Wellington"]
  },
  {
    id: "champagne",
    name: "Champagne",
    type: "Sparkling Wine",
    description: "The gold standard of sparkling wine; yeasty, toasty, and high acidity. Made via the traditional method in its namesake French region.",
    characteristics: ["Toasty", "Brioche", "High Acidity", "Citrus"],
    foodPairings: ["Oysters", "Goat Cheese", "Smoked Salmon Blini", "Fried Chicken"]
  },
  {
    id: "english-sparkling",
    name: "English Sparkling",
    type: "Sparkling Wine",
    description: "Crisp and lean with high acidity, often showing green apple and elderflower. Rivals Champagne in quality due to similar cool-climate terroir.",
    characteristics: ["Green Apple", "High Acidity", "Lean", "Mineral"],
    foodPairings: ["Asparagus", "Fish and Chips", "Scallops with Pancetta", "Goat's Cheese Tart"]
  },
  {
    id: "cotes-du-rhone",
    name: "Côtes du Rhône",
    type: "Red Wine",
    origin: "Rhône Valley, France",
    description: "Classic French blend (usually Grenache, Syrah, Mourvèdre); earthy, peppery, and medium-bodied.",
    characteristics: ["Earthy", "Peppery", "Red Fruit", "Medium-bodied"],
    foodPairings: ["Cassoulet", "Lamb Chops", "Mushroom Risotto", "Ratatouille"]
  },
  {
    id: "chardonnay",
    name: "Chardonnay",
    type: "White Wine",
    origin: "Burgundy, France & cool-climate New World regions",
    description: "A versatile grape that ranges from lean, mineral-driven wines to rich, buttery styles. Often features apple, citrus, and vanilla from oak aging.",
    characteristics: ["Buttery", "Creamy", "Oak", "Citrus"],
    foodPairings: ["Lobster", "Roast Chicken", "Creamy Pasta", "Brie Cheese"]
  },
  {
    id: "pinot-noir",
    name: "Pinot Noir",
    type: "Red Wine",
    origin: "Burgundy, France; Oregon & New Zealand",
    description: "Silky, medium‑light bodied red with red cherry, cranberry and forest‑floor notes, more about perfume and texture than power.",
    characteristics: ["Light", "Earthy", "Red Fruit", "Elegant"],
    foodPairings: ["Salmon", "Duck", "Mushrooms", "Roast Chicken"]
  },
  {
    id: "sauvignon-blanc",
    name: "Sauvignon Blanc",
    type: "White Wine",
    origin: "Loire Valley, France & Marlborough, New Zealand",
    description: "High‑acid and aromatic, ranging from mineral and citrusy to intensely grassy and tropical; think lime, gooseberry and fresh herbs.",
    characteristics: ["Crisp", "Herbaceous", "Citrus", "Mineral"],
    foodPairings: ["Goat Cheese", "Oysters", "Asparagus", "Seafood Salads"]
  },
  {
    id: "merlot",
    name: "Merlot",
    type: "Red Wine",
    origin: "Right Bank Bordeaux, France & California, USA",
    description: "Plush and plummy with soft tannins, offering black cherry, cocoa and gentle spice—rounder and more approachable than many Cabernets.",
    characteristics: ["Smooth", "Plum", "Cherry", "Soft Tannins"],
    foodPairings: ["Grilled Steak", "Pork", "Pasta", "Soft Cheese"]
  },
  {
    id: "riesling",
    name: "Riesling",
    type: "White Wine",
    origin: "Mosel, Germany & Clare/Eden Valley, Australia",
    description: "Highly aromatic and driven by acidity, from bone‑dry to lusciously sweet; expect lime, peach, jasmine and sometimes a subtle petrol note with age.",
    characteristics: ["Aromatic", "Acidic", "Fruity", "Versatile"],
    foodPairings: ["Spicy Curry", "Pork", "Duck", "Goat Cheese"]
  },
  {
    id: "syrah",
    name: "Syrah",
    type: "Red Wine",
    origin: "Northern Rhône, France & Barossa Valley, Australia (as Shiraz)",
    description: "Dark, savory and peppery, with blackberry, black olive and smoked meat notes. Australian Shiraz tends to be riper and more full-bodied.",
    characteristics: ["Bold", "Spicy", "Pepper", "Dark Fruit"],
    foodPairings: ["Grilled Steak", "BBQ", "Game Meat", "Hard Cheese"]
  },
  {
    id: "pinot-grigio",
    name: "Pinot Grigio",
    type: "White Wine",
    origin: "Veneto, Italy & Alsace (as Pinot Gris)",
    description: "Typically light, dry and zesty with lemon, green apple and a clean, refreshing finish—built for refreshment.",
    characteristics: ["Light", "Crisp", "Citrus", "Dry"],
    foodPairings: ["Light Seafood", "Salads", "Poultry", "Fresh Cheese"]
  },
  {
    id: "malbec",
    name: "Malbec",
    type: "Red Wine",
    origin: "Mendoza, Argentina",
    description: "Deeply colored and fruit‑forward with ripe plum, blackberry and a plush texture, often showing hints of cocoa and violet.",
    characteristics: ["Jammy", "Plum", "Smooth Tannins", "Velvety"],
    foodPairings: ["Grilled Steak", "Lamb Chops", "Hard Cheese", "BBQ"]
  },
  {
    id: "zinfandel",
    name: "Zinfandel",
    type: "Red Wine",
    description: "Bold and fruit-forward with high alcohol, jammy berry notes, and often a spicy character.",
    characteristics: ["Jammy", "High Alcohol", "Spicy", "Blackberry"],
    foodPairings: ["BBQ Ribs", "Pizza", "Spicy Dishes", "Blue Cheese"]
  },
  {
    id: "sangiovese",
    name: "Sangiovese",
    type: "Red Wine",
    origin: "Tuscany, Italy",
    description: "The soul of Chianti, featuring high acidity, firm tannins, and flavors of sour cherry, herbs, and earthy notes.",
    characteristics: ["Acidic", "Cherry", "Herbal", "Savory"],
    foodPairings: ["Tomato-based Dishes", "Pizza", "Roasted Vegetables", "Hard Cheese"]
  },
  {
    id: "tempranillo",
    name: "Tempranillo",
    type: "Red Wine",
    origin: "Rioja & Ribera del Duero, Spain",
    description: "Spanish classic with flavors of leather, tobacco, and red fruit. Often aged in American oak, imparting vanilla and dill notes.",
    characteristics: ["Savory", "Leather", "Tobacco", "Red Fruit"],
    foodPairings: ["Lamb", "Cured Meats", "Roasted Vegetables", "Paella"]
  },
  {
    id: "prosecco",
    name: "Prosecco",
    type: "Sparkling Wine",
    origin: "Veneto, Italy",
    description: "Light, fruity, and frothy Italian sparkling wine made primarily from Glera grapes. Generally less yeasty than Champagne.",
    characteristics: ["Bubbly", "Fruity", "Light", "Floral"],
    foodPairings: ["Appetizers", "Mild Cheese", "Fruit Desserts", "Light Pastries"]
  },
  {
    id: "gewurztraminer",
    name: "Gewürztraminer",
    type: "White Wine",
    origin: "Alsace, France",
    description: "Highly aromatic with intense floral, lychee, and rose petal scents. Often off-dry with a rich, oily texture.",
    characteristics: ["Floral", "Lychee", "Low Acidity", "Full-bodied"],
    foodPairings: ["Spicy Asian Cuisine", "Duck", "Strong Cheese", "Foie Gras"]
  },
  {
    id: "albarino",
    name: "Albariño",
    type: "White Wine",
    origin: "Rías Baixas, Spain",
    description: "High acidity with refreshing stone fruit, citrus, and distinct saline or briny notes. Crisp and perfect for seafood.",
    characteristics: ["High Acidity", "Saline", "Peach", "Zesty"],
    foodPairings: ["Oysters", "Grilled White Fish", "Seafood Stews", "Salads"]
  },
  {
    id: "rose",
    name: "Rosé",
    type: "Rosé Wine",
    description: "Fresh and versatile with strawberry and watermelon notes. Can be made in dry or slightly sweet styles from many red grapes.",
    characteristics: ["Fresh", "Berry", "Crisp", "Dry"],
    foodPairings: ["Salads", "Grilled Chicken", "Charcuterie", "Light Pasta"]
  },
  {
    id: "provence-rose",
    name: "Provence Rosé",
    type: "Rosé Wine",
    origin: "Provence, France",
    description: "The benchmark for dry rosé: pale salmon in color, crisp, and elegant with delicate notes of citrus, red berries, and herbs.",
    characteristics: ["Dry", "Pale", "Elegant", "Mineral"],
    foodPairings: ["Oysters", "Goat Cheese", "Salad Niçoise", "Grilled Fish"]
  },
  {
    id: "white-zinfandel",
    name: "White Zinfandel",
    type: "Rosé Wine",
    origin: "California, USA",
    description: "A sweeter style of rosé made from Zinfandel grapes, known for its pink color and flavors of strawberry and candy.",
    characteristics: ["Sweet", "Fruity", "Strawberry", "Light"],
    foodPairings: ["Spicy Appetizers", "BBQ", "Fruity Desserts", "Picnic Food"]
  },
  {
    id: "sangiovese-rose",
    name: "Rosato",
    type: "Rosé Wine",
    origin: "Italy",
    description: "Italian rosé, often from Sangiovese, with bright acidity, crisp red fruit flavors, and a dry finish.",
    characteristics: ["Acidic", "Cherry", "Bright", "Crisp"],
    foodPairings: ["Antipasti", "Pasta with Light Sauce", "Grilled Seafood", "Fresh Cheese"]
  },
  {
    id: "port",
    name: "Port",
    type: "Dessert Wine",
    origin: "Douro Valley, Portugal",
    description: "Sweet, fortified red wine with rich berry, chocolate, and nut flavors. Styles range from fruity Ruby to complex, aged Tawny.",
    characteristics: ["Sweet", "Fortified", "Rich", "Nutty"],
    foodPairings: ["Blue Cheese", "Dark Chocolate", "Walnuts", "Dried Fruits"]
  },
  {
    id: "moscato",
    name: "Moscato",
    type: "White Wine",
    description: "Sweet, low-alcohol, and lightly sparkling wine with pronounced floral aromas and flavors of peach and orange blossom.",
    characteristics: ["Sweet", "Light", "Floral", "Peach"],
    foodPairings: ["Fruit Desserts", "Spicy Asian Cuisine", "Brie Cheese", "Brunch Pastries"]
  },
  {
    id: "grenache",
    name: "Grenache",
    type: "Red Wine",
    origin: "Southern Rhône, France & Spain (as Garnacha)",
    description: "Medium-bodied with spicy berry flavors, soft tannins, and high alcohol. A key component in blends like Châteauneuf-du-Pape.",
    characteristics: ["Spicy", "Strawberry", "Soft", "Low Tannin"],
    foodPairings: ["Roasted Vegetables", "Grilled Chicken", "Stews", "Pork"]
  },
  {
    id: "viognier",
    name: "Viognier",
    type: "White Wine",
    origin: "Northern Rhône, France",
    description: "Full-bodied white with intense floral aromas (honeysuckle, peach blossom), oily texture, and low acidity.",
    characteristics: ["Floral", "Honeysuckle", "Full-bodied", "Rich"],
    foodPairings: ["Lobster", "Crab Cakes", "Creamy Pasta", "Spicy Curry"]
  },
  {
    id: "nebbiolo",
    name: "Nebbiolo",
    type: "Red Wine",
    origin: "Piedmont, Italy",
    description: "Italian powerhouse with high tannins, high acidity, and complex notes of tar, roses, and red fruit. The grape of Barolo and Barbaresco.",
    characteristics: ["High Tannins", "Tar", "Rose", "Earthy"],
    foodPairings: ["Truffle Pasta", "Braised Beef", "Wild Game", "Mushrooms"]
  },
  {
    id: "carmenere",
    name: "Carmenère",
    type: "Red Wine",
    origin: "Chile",
    description: "Chile's signature grape, known for its savory profile of dark fruit, green pepper, and chocolate, with soft tannins.",
    characteristics: ["Herbal", "Green Pepper", "Dark Fruit", "Medium-bodied"],
    foodPairings: ["Lamb", "Grilled Vegetables", "Spicy Sausages", "Beef Stew"]
  },
  {
    id: "petite-sirah",
    name: "Petite Sirah",
    type: "Red Wine",
    origin: "California, USA",
    description: "Inky dark, full-bodied wine with intense tannins, bold flavors of blueberry and black pepper, and a long finish.",
    characteristics: ["Inky", "High Tannins", "Blueberry", "Peppery"],
    foodPairings: ["Barbecue Brisket", "Venison", "Blue Cheese", "Chocolate Desserts"]
  },
  {
    id: "gruner-veltliner",
    name: "Grüner Veltliner",
    type: "White Wine",
    origin: "Austria",
    description: "Crisp Austrian white with signature white pepper and lentil notes, high acidity, and flavors of citrus and green apple.",
    characteristics: ["Peppery", "Citrus", "High Acidity", "Mineral"],
    foodPairings: ["Asparagus", "Sushi", "Vegetarian Dishes", "Light Fish"]
  },
  {
    id: "vermentino",
    name: "Vermentino",
    type: "White Wine",
    origin: "Sardinia, Italy & Southern France",
    description: "Mediterranean white with herbal notes, citrus, and a distinct saline quality. Refreshing with a slightly bitter almond finish.",
    characteristics: ["Herbal", "Saline", "Citrus", "Light"],
    foodPairings: ["Grilled Fish", "Seafood Stew", "Mediterranean Salads", "Olives"]
  },
  {
    id: "torrontes",
    name: "Torrontés",
    type: "White Wine",
    origin: "Argentina",
    description: "Argentina's aromatic white, offering intense floral and peach aromas that are similar to Muscat, but with a dry finish.",
    characteristics: ["Aromatic", "Floral", "Peach", "Dry"],
    foodPairings: ["Ceviche", "Spicy Thai Food", "Soft Cheese", "Empanadas"]
  },
  {
    id: "barbera",
    name: "Barbera",
    type: "Red Wine",
    origin: "Piedmont, Italy",
    description: "Italian red with very high acidity, low tannins, and juicy flavors of sour cherry. Lively and food-friendly.",
    characteristics: ["High Acidity", "Low Tannins", "Cherry", "Light-bodied"],
    foodPairings: ["Pizza", "Pasta with Tomato Sauce", "Cold Cuts", "Ratatouille"]
  },
  {
    id: "cinsault",
    name: "Cinsault",
    type: "Red Wine",
    origin: "Southern Rhône, France",
    description: "Light-bodied, low-tannin red with floral aromas and flavors of fresh strawberry. Often used in blends and rosé.",
    characteristics: ["Light", "Floral", "Strawberry", "Low Alcohol"],
    foodPairings: ["Charcuterie", "Grilled Fish", "Vegetable Dishes", "Goat Cheese"]
  },
  {
    id: "sparkling-rose",
    name: "Sparkling Rosé",
    type: "Sparkling Wine",
    description: "Bubbly rosé with red fruit flavors and crisp acidity. Can be made via the traditional method or Charmat method.",
    characteristics: ["Bubbly", "Red Fruit", "Crisp", "Festive"],
    foodPairings: ["Smoked Salmon", "Sushi", "Strawberry Desserts", "Fried Appetizers"]
  },
  {
    id: "lambrusco",
    name: "Lambrusco",
    type: "Sparkling Red Wine",
    origin: "Emilia-Romagna, Italy",
    description: "Italian sparkling red, ranging from dry to sweet, with dark fruit flavors and a refreshing, slightly bitter finish.",
    characteristics: ["Sparkling", "Dark Fruit", "Bitter Finish", "Medium-bodied"],
    foodPairings: ["Charcuterie", "Pizza", "Parmesan Cheese", "Pork Sausages"]
  },
  {
    id: "chenin-blanc",
    name: "Chenin Blanc",
    type: "White Wine",
    origin: "Loire Valley, France & South Africa",
    description: "One of the world's most versatile white grapes, capable of making superb wines from bone dry to lusciously sweet, and sparkling. Hallmarks are high acidity and flavors of quince, apple, and honey[citation:7][citation:9]. It is the most planted variety in South Africa[citation:7].",
    characteristics: ["High Acidity", "Versatile", "Apple", "Honey"],
    foodPairings: ["Roast Chicken/Turkey[citation:7]", "Pork with Apples[citation:7]", "Spicy Asian Cuisine[citation:7]", "Goat Cheese[citation:1]"]
  },
  {
    id: "mourvedre",
    name: "Mourvèdre",
    type: "Red Wine",
    origin: "Southern Rhône, France & Spain (as Monastrell)",
    description: "Meaty, rustic, and tannic with dark fruit, leather, and earthy notes. Ages well and is often blended with Grenache and Syrah.",
    characteristics: ["Meaty", "Rustic", "Dark Fruit", "Leather"],
    foodPairings: ["Game Meat", "Grilled Sausages", "Stews", "Hard Cheese"]
  },
  {
    id: "sherry",
    name: "Sherry",
    type: "Fortified Wine",
    origin: "Jerez, Spain",
    description: "Spanish fortified wine with a unique aging process (solera). Ranges from very dry, nutty Fino to rich, sweet Pedro Ximénez.",
    characteristics: ["Fortified", "Nutty", "Complex", "Oxidative"],
    foodPairings: ["Tapas", "Olives", "Almonds", "Iberian Ham"]
  },
  {
    id: "ice-wine",
    name: "Ice Wine",
    type: "Dessert Wine",
    origin: "Germany (Eiswein), Canada",
    description: "Intensely sweet wine made from grapes naturally frozen on the vine, concentrating sugars and acids. Notes of honey, apricot, and tropical fruit.",
    characteristics: ["Very Sweet", "Concentrated", "Honey", "Apricot"],
    foodPairings: ["Blue Cheese", "Foie Gras", "Fruit Desserts", "Crème Brûlée"]
  },
  {
    id: "spatburgunder",
    name: "Spätburgunder",
    type: "Red Wine",
    origin: "Germany",
    description: "German name for Pinot Noir. Typically lighter in body than its French counterpart, with elegant red fruit and higher acidity.",
    characteristics: ["Elegant", "Red Fruit", "Light", "Acidic"],
    foodPairings: ["Roast Veal", "Mushrooms", "Trout", "Light Pasta"]
  },
  {
    id: "xinomavro",
    name: "Xinomavro",
    type: "Red Wine",
    origin: "Naoussa, Greece",
    description: "Greece's most noble red grape, often compared to Nebbiolo[citation:5][citation:8]. It produces pale but age-worthy wines with high acidity and tannins, and unique flavors of sun-dried tomato, olive, and spices[citation:2][citation:5][citation:8].",
    characteristics: ["High Acidity", "High Tannins", "Tomato", "Olive"],
    foodPairings: ["Roast Lamb[citation:5]", "Mushroom Risotto[citation:2]", "Grilled Halloumi[citation:8]", "Tomato-based Stews"]
  },
  {
    id: "assyrtiko",
    name: "Assyrtiko",
    type: "White Wine",
    origin: "Santorini, Greece",
    description: "A crisp, bone-dry white wine native to the volcanic island of Santorini[citation:6][citation:10]. It retains bracing acidity even when ripe, offering intense minerality and flavors of lemon, lime, and saline[citation:4][citation:6][citation:10]. It is increasingly grown in other regions[citation:10].",
    characteristics: ["High Acidity", "Mineral", "Citrus", "Saline"],
    foodPairings: ["Grilled Octopus[citation:3]", "Shellfish[citation:6]", "Greek Salad (tomato, feta)[citation:6]", "Fried Calamari[citation:3]"]
  }
];
export const foods: Food[] = [
  {
    id: "grilled-steak",
    name: "Grilled Steak",
    category: "Meat",
    description: "Rich, savory beef with charred exterior",
    characteristics: ["Rich", "Savory", "Umami", "Hearty"],
    winePairings: ["Cabernet Sauvignon", "Malbec", "Merlot", "Syrah"],
    isVegetarian: false
  },
  {
    id: "salmon",
    name: "Salmon",
    category: "Seafood",
    description: "Oily, flavorful fish with delicate texture",
    characteristics: ["Oily", "Rich", "Delicate", "Umami"],
    winePairings: ["Rosato", "Pinot Noir", "Chardonnay", "Pinot Grigio", "Rosé"],
    isVegetarian: false
  },
  {
    id: "pasta-cream",
    name: "Creamy Pasta",
    category: "Pasta",
    description: "Rich pasta dishes with cream-based sauces",
    characteristics: ["Creamy", "Rich", "Buttery", "Comforting"],
    winePairings: ["Rosato", "Chardonnay", "Pinot Grigio", "Sauvignon Blanc", "Viognier"],
    isVegetarian: true
  },
  {
    id: "roast-chicken",
    name: "Roast Chicken",
    category: "Poultry",
    description: "Tender, flavorful roasted poultry",
    characteristics: ["Tender", "Versatile", "Mild", "Savory"],
    winePairings: ["White Zinfandel", "Rosato", "Chardonnay", "Pinot Noir", "Riesling", "Sauvignon Blanc"],
    isVegetarian: false
  },
  {
    id: "goat-cheese",
    name: "Goat Cheese",
    category: "Cheese",
    description: "Tangy and creamy with earthy notes",
    characteristics: ["Tangy", "Creamy", "Earthy", "Sharp"],
    winePairings: ["Provence Rosé", "White Zinfandel", "Rosato", "Cinsault", "Chenin Blanc", "Sauvignon Blanc", "Pinot Noir", "Riesling", "Champagne"],
    isVegetarian: true
  },
  {
    id: "dark-chocolate",
    name: "Dark Chocolate",
    category: "Dessert",
    description: "Rich, bittersweet chocolate",
    characteristics: ["Rich", "Bittersweet", "Intense", "Cocoa"],
    winePairings: ["Cabernet Sauvignon", "Port", "Merlot", "Zinfandel"],
    isVegetarian: true
  },
  {
    id: "mushrooms",
    name: "Mushrooms",
    category: "Vegetables",
    description: "Earthy and umami-rich fungi",
    characteristics: ["Earthy", "Umami", "Savory", "Rich"],
    winePairings: ["Rosato", "Nebbiolo", "Spätburgunder", "Pinot Noir", "Chardonnay", "Merlot", "Burgundy"],
    isVegetarian: true
  },
  {
    id: "lobster",
    name: "Lobster",
    category: "Seafood",
    description: "Sweet, luxurious shellfish",
    characteristics: ["Sweet", "Rich", "Luxurious", "Buttery"],
    winePairings: ["Provence Rosé", "Chardonnay", "Champagne", "Sauvignon Blanc", "Viognier"],
    isVegetarian: false
  },
  {
    id: "oysters",
    name: "Oysters",
    category: "Seafood",
    description: "Briny, delicate, and fresh shellfish",
    characteristics: ["Briny", "Fresh", "Delicate", "Cold"],
    winePairings: ["Sauvignon Blanc", "Prosecco", "Albariño", "Champagne"],
    isVegetarian: false
  },
  {
    id: "spicy-curry",
    name: "Spicy Curry",
    category: "Global Cuisine",
    description: "Complex, heat-heavy dishes with aromatic spices",
    characteristics: ["Spicy", "Aromatic", "Hot", "Complex"],
    winePairings: ["White Zinfandel", "Viognier", "Riesling", "Gewürztraminer", "Moscato", "Zinfandel"],
    isVegetarian: true
  },
  {
    id: "lamb-chops",
    name: "Lamb Chops",
    category: "Meat",
    description: "Gamey and tender meat with rich fat content",
    characteristics: ["Gamey", "Fatty", "Tender", "Savory"],
    winePairings: ["Côtes du Rhône", "Carmenère", "Cabernet Sauvignon", "Syrah", "Malbec", "Tempranillo"],
    isVegetarian: false
  },
  {
    id: "sushi",
    name: "Sushi & Sashimi",
    category: "Seafood",
    description: "Clean, delicate raw fish with vinegared rice",
    characteristics: ["Clean", "Delicate", "Vinegar", "Umami"],
    winePairings: ["Grüner Veltliner", "Sparkling Rosé", "Pinot Grigio", "Albariño", "Prosecco", "Dry Rosé"],
    isVegetarian: false
  },
  {
    id: "blue-cheese",
    name: "Blue Cheese",
    category: "Cheese",
    description: "Pungent, salty, and creamy fermented cheese",
    characteristics: ["Pungent", "Salty", "Creamy", "Strong"],
    winePairings: ["Petite Sirah", "Ice Wine", "Port", "Riesling", "Sauternes", "Zinfandel"],
    isVegetarian: true
  },
  {
    id: "bbq-ribs",
    name: "BBQ Ribs",
    category: "Meat",
    description: "Smoky, sweet, and fatty pork or beef",
    characteristics: ["Smoky", "Sweet", "Fatty", "Rich"],
    winePairings: ["White Zinfandel", "Zinfandel", "Malbec", "Syrah", "Merlot"],
    isVegetarian: false
  },
  {
    id: "asparagus",
    name: "Asparagus",
    category: "Vegetables",
    description: "Grassy and bitter green vegetable",
    characteristics: ["Grassy", "Bitter", "Green", "Crunchy"],
    winePairings: ["English Sparkling", "Provence Rosé", "Sauvignon Blanc", "Pinot Grigio", "Grüner Veltliner", "Sancerre"],
    isVegetarian: true
  },
  {
    id: "fruit-tart",
    name: "Fruit Tart",
    category: "Dessert",
    description: "Sweet pastry with fresh fruit and custard",
    characteristics: ["Sweet", "Acidic", "Creamy", "Crisp"],
    winePairings: ["Moscato", "Prosecco", "Riesling", "Late Harvest Chardonnay"],
    isVegetarian: true
  },
  {
    id: "pork-belly",
    name: "Pork Belly",
    category: "Meat",
    description: "Extremely fatty and savory cut of pork",
    characteristics: ["Fatty", "Rich", "Savory", "Melting"],
    winePairings: ["Riesling", "Pinot Noir", "Grenache", "Chenin Blanc"],
    isVegetarian: false
  },
  {
    id: "duck-breast",
    name: "Duck Breast",
    category: "Poultry",
    description: "Rich, gamey poultry with a thick layer of fat",
    characteristics: ["Rich", "Gamey", "Fatty", "Savory"],
    winePairings: ["Pinot Noir", "Gewürztraminer", "Merlot", "Syrah"],
    isVegetarian: false
  },
  {
    id: "tacos",
    name: "Tacos (Carnitas/Asada)",
    category: "Global Cuisine",
    description: "Savory meat with citrus and spice notes",
    characteristics: ["Spicy", "Zesty", "Savory", "Textured"],
    winePairings: ["Tempranillo", "Grenache", "Malbec", "Albariño"],
    isVegetarian: false
  },
  {
    id: "aged-cheddar",
    name: "Aged Cheddar",
    category: "Cheese",
    description: "Sharp, crumbly, and nutty long-aged cheese",
    characteristics: ["Sharp", "Crumbly", "Nutty", "Salty"],
    winePairings: ["Cabernet Sauvignon", "Chardonnay", "Syrah", "Malbec"],
    isVegetarian: true
  },
  // Expanded food list
  {
    id: "veggie-stir-fry",
    name: "Vegetable Stir Fry",
    category: "Vegetarian",
    description: "Crisp vegetables in savory Asian-style sauce",
    characteristics: ["Crisp", "Savory", "Vegetal", "Light"],
    winePairings: ["Riesling", "Pinot Grigio", "Sauvignon Blanc", "Gewürztraminer"],
    isVegetarian: true
  },
  {
    id: "beef-bourguignon",
    name: "Beef Bourguignon",
    category: "Meat",
    description: "French beef stew braised in red wine",
    characteristics: ["Rich", "Savory", "Wine-infused", "Comforting"],
    winePairings: ["Pinot Noir", "Burgundy", "Merlot", "Syrah"],
    isVegetarian: false
  },
  {
    id: "ceviche",
    name: "Ceviche",
    category: "Seafood",
    description: "Raw fish cured in citrus juices",
    characteristics: ["Citrusy", "Fresh", "Acidic", "Light"],
    winePairings: ["Torrontés", "Sauvignon Blanc", "Albariño", "Vermentino", "Sparkling Wine"],
    isVegetarian: false
  },
  {
    id: "ratatouille",
    name: "Ratatouille",
    category: "Vegetarian",
    description: "French vegetable stew with tomatoes and herbs",
    characteristics: ["Herbal", "Vegetal", "Tomato-based", "Earthy"],
    winePairings: ["Côtes du Rhône", "Barbera", "Rosé", "Grenache", "Sangiovese", "Cinsault"],
    isVegetarian: true
  },
  {
    id: "pork-tenderloin",
    name: "Pork Tenderloin",
    category: "Meat",
    description: "Lean, tender pork with mild flavor",
    characteristics: ["Lean", "Mild", "Tender", "Versatile"],
    winePairings: ["Pinot Noir", "Chardonnay", "Rosé", "Grenache"],
    isVegetarian: false
  },
  {
    id: "eggplant-parmesan",
    name: "Eggplant Parmesan",
    category: "Vegetarian",
    description: "Breaded eggplant with tomato sauce and cheese",
    characteristics: ["Rich", "Tomato", "Cheesy", "Hearty"],
    winePairings: ["Sangiovese", "Barbera", "Zinfandel", "Chianti"],
    isVegetarian: true
  },
  {
    id: "shrimp-scampi",
    name: "Shrimp Scampi",
    category: "Seafood",
    description: "Garlic butter shrimp with white wine sauce",
    characteristics: ["Garlicky", "Buttery", "Seafood", "Rich"],
    winePairings: ["Chardonnay", "Pinot Grigio", "Sauvignon Blanc", "Vermentino"],
    isVegetarian: false
  },
  {
    id: "venison",
    name: "Venison",
    category: "Game",
    description: "Lean, gamey deer meat",
    characteristics: ["Gamey", "Lean", "Rich", "Earthy"],
    winePairings: ["Petite Sirah", "Pinot Noir", "Syrah", "Merlot", "Cabernet Sauvignon"],
    isVegetarian: false
  },
  {
    id: "paella",
    name: "Paella",
    category: "Global Cuisine",
    description: "Spanish rice dish with seafood, meat, and saffron",
    characteristics: ["Saffron", "Savory", "Complex", "Rich"],
    winePairings: ["Albariño", "Rosé", "Garnacha", "Tempranillo"],
    isVegetarian: false
  },
  {
    id: "quiche-lorraine",
    name: "Quiche Lorraine",
    category: "Egg Dishes",
    description: "Savory custard pie with bacon and cheese",
    characteristics: ["Creamy", "Savory", "Rich", "Egg-based"],
    winePairings: ["Chenin Blanc", "Chardonnay", "Sparkling Wine", "Rosé", "Pinot Blanc"],
    isVegetarian: false
  },
  {
    id: "beet-salad",
    name: "Roasted Beet Salad",
    category: "Salads",
    description: "Earthly beets with goat cheese and nuts",
    characteristics: ["Earthy", "Sweet", "Creamy", "Nutty"],
    winePairings: ["Pinot Noir", "Sauvignon Blanc", "Rosé", "Chenin Blanc"],
    isVegetarian: true
  },
  {
    id: "osso-buco",
    name: "Osso Buco",
    category: "Meat",
    description: "Italian braised veal shanks",
    characteristics: ["Rich", "Tender", "Meaty", "Saffron"],
    winePairings: ["Barolo", "Barbaresco", "Chianti", "Sangiovese"],
    isVegetarian: false
  },
  {
    id: "mussels-marinara",
    name: "Mussels Marinara",
    category: "Seafood",
    description: "Mussels in tomato-wine broth",
    characteristics: ["Briny", "Tomato", "Garlic", "Brothy"],
    winePairings: ["Pinot Grigio", "Vermentino", "Sauvignon Blanc", "Chianti"],
    isVegetarian: false
  },
  {
    id: "halloumi",
    name: "Grilled Halloumi",
    category: "Cheese",
    description: "Grilled Cypriot cheese with high melting point",
    characteristics: ["Salty", "Grilled", "Chewy", "Savory"],
    winePairings: ["Rosé", "Sauvignon Blanc", "Pinot Grigio", "Xinomavro"],
    isVegetarian: true
  },
  {
    id: "crab-cakes",
    name: "Crab Cakes",
    category: "Seafood",
    description: "Pan-fried cakes of crab meat and breading",
    characteristics: ["Sweet Crab", "Crispy", "Rich", "Delicate"],
    winePairings: ["Chardonnay", "Sparkling Wine", "Sauvignon Blanc", "Viognier"],
    isVegetarian: false
  },
  {
    id: "lentil-soup",
    name: "Lentil Soup",
    category: "Soup",
    description: "Hearty soup with lentils and vegetables",
    characteristics: ["Hearty", "Earthy", "Comforting", "Vegetarian"],
    winePairings: ["Côtes du Rhône", "Pinot Noir", "Grenache", "Chardonnay", "Rosé"],
    isVegetarian: true
  },
  {
    id: "pizza-margherita",
    name: "Pizza Margherita",
    category: "Global Cuisine",
    description: "Classic Italian pizza with tomato, mozzarella, basil",
    characteristics: ["Tomato", "Cheesy", "Herbal", "Simple"],
    winePairings: ["Zinfandel", "Chianti", "Sangiovese", "Barbera", "Lambrusco"],
    isVegetarian: true
  },
  {
    id: "cornish-hen",
    name: "Cornish Game Hen",
    category: "Poultry",
    description: "Small, tender game bird",
    characteristics: ["Tender", "Mild", "Small Portion", "Versatile"],
    winePairings: ["Pinot Noir", "Chardonnay", "Rosé", "Grenache"],
    isVegetarian: false
  },
  {
    id: "gnocchi",
    name: "Gnocchi",
    category: "Pasta",
    description: "Italian potato dumplings",
    characteristics: ["Pillowy", "Starchy", "Versatile", "Comforting"],
    winePairings: ["Pinot Grigio", "Chardonnay", "Barbera", "Rosé"],
    isVegetarian: true
  },
  {
    id: "cassoulet",
    name: "Cassoulet",
    category: "Meat",
    description: "French bean stew with various meats",
    characteristics: ["Hearty", "Rich", "Beany", "Comforting"],
    winePairings: ["Côtes du Rhône", "Syrah", "Grenache", "Merlot"],
    isVegetarian: false
  },
  {
    id: "falafel",
    name: "Falafel",
    category: "Vegetarian",
    description: "Deep-fried chickpea balls",
    characteristics: ["Crispy", "Herbal", "Spiced", "Vegetarian"],
    winePairings: ["Rosé", "Crisp White", "Light Red", "Sparkling"],
    isVegetarian: true
  },
  {
    id: "stuffed-peppers",
    name: "Stuffed Bell Peppers",
    category: "Vegetarian",
    description: "Bell peppers filled with rice and meat or vegetables",
    characteristics: ["Vegetal", "Savory", "Comforting", "Versatile"],
    winePairings: ["Zinfandel", "Merlot", "Chardonnay", "Rosé"],
    isVegetarian: true
  },
  {
    id: "bouillabaisse",
    name: "Bouillabaisse",
    category: "Seafood",
    description: "French fish stew with saffron and herbs",
    characteristics: ["Seafood Medley", "Saffron", "Brothy", "Complex"],
    winePairings: ["Rosé", "Viognier", "Grenache", "Sauvignon Blanc"],
    isVegetarian: false
  },
  {
    id: "carnitas",
    name: "Carnitas",
    category: "Meat",
    description: "Mexican slow-cooked pulled pork",
    characteristics: ["Porky", "Crispy", "Savory", "Fatty"],
    winePairings: ["Zinfandel", "Grenache", "Tempranillo", "Malbec"],
    isVegetarian: false
  },
  {
    id: "spanakopita",
    name: "Spanakopita",
    category: "Vegetarian",
    description: "Greek spinach and feta pie in phyllo dough",
    characteristics: ["Savory", "Spinach", "Feta", "Flaky"],
    winePairings: ["Assyrtiko", "Rosé", "Sauvignon Blanc", "Pinot Grigio"],
    isVegetarian: true
  },
  {
    id: "fried-chicken",
    name: "Fried Chicken",
    category: "Poultry",
    description: "Crispy, juicy fried poultry",
    characteristics: ["Crispy", "Juicy", "Savory", "Comforting"],
    winePairings: ["Champagne", "Sparkling Rosé", "Chardonnay", "Zinfandel"],
    isVegetarian: false
  },
  {
    id: "gazpacho",
    name: "Gazpacho",
    category: "Soup",
    description: "Cold Spanish tomato soup",
    characteristics: ["Cold", "Tomato", "Refreshing", "Vegetal"],
    winePairings: ["Fino Sherry", "Albariño", "Rosé", "Sauvignon Blanc"],
    isVegetarian: true
  },
  {
    id: "chili-con-carne",
    name: "Chili Con Carne",
    category: "Meat",
    description: "Spicy meat and bean stew",
    characteristics: ["Spicy", "Hearty", "Beany", "Rich"],
    winePairings: ["Zinfandel", "Malbec", "Syrah", "Petite Sirah"],
    isVegetarian: false
  },
  {
    id: "caprese-salad",
    name: "Caprese Salad",
    category: "Salads",
    description: "Italian salad with tomato, mozzarella, and basil",
    characteristics: ["Fresh", "Simple", "Creamy", "Herbal"],
    winePairings: ["Pinot Grigio", "Rosé", "Vermentino", "Prosecco"],
    isVegetarian: true
  },
  {
    id: "beef-wellington",
    name: "Beef Wellington",
    category: "Meat",
    description: "Beef tenderloin wrapped in pastry",
    characteristics: ["Luxurious", "Rich", "Buttery", "Savory"],
    winePairings: ["Cabernet Sauvignon", "Merlot", "Pinot Noir", "Bordeaux"],
    isVegetarian: false
  },
  {
    id: "hummus",
    name: "Hummus",
    category: "Appetizer",
    description: "Creamy chickpea and tahini dip",
    characteristics: ["Creamy", "Nutty", "Savory", "Versatile"],
    winePairings: ["Rosé", "Sparkling Wine", "Crisp White", "Light Red"],
    isVegetarian: true
  },
  {
    id: "pulled-pork",
    name: "Pulled Pork Sandwich",
    category: "Meat",
    description: "Slow-cooked shredded pork in barbecue sauce",
    characteristics: ["Sweet", "Smoky", "Tender", "Messy"],
    winePairings: ["Zinfandel", "Grenache", "Syrah", "Malbec"],
    isVegetarian: false
  },
  {
    id: "risotto",
    name: "Risotto",
    category: "Rice",
    description: "Creamy Italian rice dish",
    characteristics: ["Creamy", "Rich", "Starchy", "Versatile"],
    winePairings: ["Pinot Grigio", "Chardonnay", "Barbera", "Soave"],
    isVegetarian: true
  },
  {
    id: "caesar-salad",
    name: "Caesar Salad",
    category: "Salads",
    description: "Romaine lettuce with creamy dressing and croutons",
    characteristics: ["Creamy", "Garlicky", "Crunchy", "Anchovy"],
    winePairings: ["Sauvignon Blanc", "Chardonnay", "Pinot Grigio", "Sparkling"],
    isVegetarian: false
  },
  {
    id: "shepherds-pie",
    name: "Shepherd's Pie",
    category: "Comfort Food",
    description: "Ground meat with vegetable gravy and mashed potato topping",
    characteristics: ["Comforting", "Savory", "Hearty", "Mashed Potato"],
    winePairings: ["Syrah", "Merlot", "Pinot Noir", "Zinfandel"],
    isVegetarian: false
  },
  {
    id: "stuffed-mushrooms",
    name: "Stuffed Mushrooms",
    category: "Appetizer",
    description: "Mushroom caps filled with cheese and breadcrumbs",
    characteristics: ["Earthy", "Cheesy", "Savory", "Bite-sized"],
    winePairings: ["Pinot Noir", "Chardonnay", "Sparkling Wine", "Rosé"],
    isVegetarian: true
  },
  {
    id: "fish-tacos",
    name: "Fish Tacos",
    category: "Global Cuisine",
    description: "Grilled or fried fish in soft tortillas with toppings",
    characteristics: ["Fresh", "Zesty", "Light", "Versatile"],
    winePairings: ["Champagne", "Albariño", "Sauvignon Blanc", "Rosé", "Pinot Grigio"],
    isVegetarian: false
  },
  {
    id: "bruschetta",
    name: "Bruschetta",
    category: "Appetizer",
    description: "Toasted bread topped with tomatoes and basil",
    characteristics: ["Tomato", "Garlic", "Fresh", "Crunchy"],
    winePairings: ["Chianti", "Prosecco", "Sauvignon Blanc", "Rosé"],
    isVegetarian: true
  },
  {
    id: "coq-au-vin",
    name: "Coq au Vin",
    category: "Poultry",
    description: "French chicken braised in red wine",
    characteristics: ["Wine-infused", "Savory", "Rich", "Herbal"],
    winePairings: ["Pinot Noir", "Burgundy", "Merlot", "Gamay"],
    isVegetarian: false
  },
  {
    id: "stuffed-dates",
    name: "Stuffed Dates",
    category: "Appetizer",
    description: "Dates filled with cheese or nuts",
    characteristics: ["Sweet", "Rich", "Chewy", "Versatile"],
    winePairings: ["Port", "Sherry", "Moscato", "Rosé"],
    isVegetarian: true
  },
  {
    id: "tempura",
    name: "Tempura",
    category: "Global Cuisine",
    description: "Japanese battered and fried vegetables or seafood",
    characteristics: ["Crispy", "Light", "Greasy", "Delicate"],
    winePairings: ["Sauvignon Blanc", "Sparkling Wine", "Riesling", "Pinot Grigio"],
    isVegetarian: true
  },
  {
    id: "meatloaf",
    name: "Meatloaf",
    category: "Comfort Food",
    description: "Ground meat baked with seasonings",
    characteristics: ["Savory", "Hearty", "Comforting", "Simple"],
    winePairings: ["Zinfandel", "Merlot", "Syrah", "Cabernet Sauvignon"],
    isVegetarian: false
  },
  {
    id: "greek-salad",
    name: "Greek Salad",
    category: "Salads",
    description: "Cucumber, tomato, feta, and olives with olive oil",
    characteristics: ["Fresh", "Salty", "Tangy", "Herbal"],
    winePairings: ["Assyrtiko", "Rosé", "Sauvignon Blanc", "Pinot Gris"],
    isVegetarian: true
  },
  {
    id: "fruit-platter",
    name: "Fruit Platter",
    category: "Dessert",
    description: "Assorted fresh fruits with varying sweetness and acidity",
    characteristics: ["Sweet", "Fresh", "Acidic", "Light"],
    winePairings: ["Moscato", "Prosecco", "Riesling", "Sparkling Rosé"],
    isVegetarian: true
  },
  {
    id: "cheese-platter",
    name: "Cheese Platter",
    category: "Cheese",
    description: "Assorted cheeses with varying textures and flavors",
    characteristics: ["Versatile", "Rich", "Savory", "Creamy"],
    winePairings: ["Chardonnay", "Pinot Noir", "Cabernet Sauvignon", "Rosé", "Sparkling Wine"],
    isVegetarian: true
  },
  {
    id: "cauliflower-steak",
    name: "Roasted Cauliflower Steak",
    category: "Vegetarian",
    isVegetarian: true,
    description: "Caramelized and earthy roasted cauliflower",
    characteristics: ["Earthy", "Nutty", "Caramelized"],
    winePairings: ["Chardonnay", "Chenin Blanc", "Viognier", "Côtes du Rhône"]
  },
  {
    id: "mushroom-risotto",
    name: "Wild Mushroom Risotto",
    category: "Vegetarian",
    isVegetarian: true,
    description: "Creamy rice with deep umami from wild mushrooms",
    characteristics: ["Umami", "Creamy", "Earthy"],
    winePairings: ["Pinot Noir", "Nebbiolo", "Chardonnay", "Côtes du Rhône"]
  },
  {
    id: "shakshuka",
    name: "Shakshuka",
    category: "Vegetarian",
    isVegetarian: true,
    description: "Poached eggs in a spiced tomato and pepper sauce",
    characteristics: ["Spicy", "Tomato", "Acidic", "Savory"],
    winePairings: ["Rosé", "Sangiovese", "Barbera", "Grenache"]
  },
  {
    id: "truffle-fries",
    name: "Truffle Fries",
    category: "Appetizer",
    isVegetarian: true,
    description: "Crispy fries with aromatic truffle oil and parmesan",
    characteristics: ["Salty", "Earthy", "Crispy"],
    winePairings: ["Champagne", "Prosecco", "English Sparkling"]
  },
  {
    id: "lentil-stew",
    name: "Hearty Lentil Stew",
    category: "Vegetarian",
    isVegetarian: true,
    description: "Thick, earthy stew with herbs and root vegetables",
    characteristics: ["Earthy", "Hearty", "Savory"],
    winePairings: ["Côtes du Rhône", "Pinot Noir", "Merlot"]
  },
  {
  id: "smoked-salmon-blini",
  name: "Smoked Salmon Blini",
  category: "Seafood",
  description: "Thin pancakes topped with smoked salmon, crème fraîche, and dill",
  characteristics: ["Smoky", "Creamy", "Rich", "Delicate"],
  winePairings: ["English Sparkling", "Champagne", "Pinot Noir", "Chardonnay"],
  isVegetarian: false
},
{
  id: "fish-and-chips",
  name: "Fish and Chips",
  category: "Global Cuisine",
  description: "British classic of beer-battered fish with crispy chips",
  characteristics: ["Crispy", "Savory", "Greasy", "Comforting"],
  winePairings: ["English Sparkling", "Champagne", "Albariño", "Pinot Gris"],
  isVegetarian: false
},
{
  id: "goats-cheese-tart",
  name: "Goat's Cheese and Caramelized Onion Tart",
  category: "Vegetarian",
  description: "Flaky pastry with tangy goat cheese and sweet caramelized onions",
  characteristics: ["Tangy", "Sweet", "Creamy", "Flaky"],
  winePairings: ["English Sparkling", "Sauvignon Blanc", "Pinot Gris", "Rosé"],
  isVegetarian: true
},
{
  id: "scallops-bacon",
  name: "Scallops with Pancetta",
  category: "Seafood",
  description: "Pan-seared scallops wrapped in crispy pancetta",
  characteristics: ["Sweet", "Salty", "Rich", "Delicate"],
  winePairings: ["English Sparkling", "Chardonnay", "White Burgundy", "Viognier"],
  isVegetarian: false
},
{
  id: "strawberry-pavlova",
  name: "Strawberry Pavlova",
  category: "Dessert",
  description: "Light meringue with whipped cream and fresh strawberries",
  characteristics: ["Sweet", "Crisp", "Creamy", "Fruity"],
  winePairings: ["English Sparkling", "Moscato d'Asti", "Prosecco", "Demi-Sec Champagne"],
  isVegetarian: true
}
];

export function getWineById(id: string): Wine | undefined {
  return wines.find(wine => wine.id === id);
}

export function getFoodById(id: string): Food | undefined {
  return foods.find(food => food.id === id);
}

export function getFoodPairingsForWine(wineId: string): Food[] {
  const wine = getWineById(wineId);
  if (!wine) return [];
  
  // Find foods that match the wine's food pairings list
  const matchedFoods = foods.filter(food => 
    wine.foodPairings.some(pairing => {
      const pairingLower = pairing.toLowerCase();
      const foodNameLower = food.name.toLowerCase();
      return foodNameLower.includes(pairingLower) || 
             pairingLower.includes(foodNameLower) ||
             foodNameLower === pairingLower;
    })
  );
  
  // If no direct matches, return all foods (fallback)
  return matchedFoods.length > 0 ? matchedFoods : foods;
}

export function getWinePairingsForFood(foodId: string): Wine[] {
  const food = getFoodById(foodId);
  if (!food) return [];
  
  // Find wines that match the food's wine pairings list
  const matchedWines = wines.filter(wine => 
    food.winePairings.some(pairing => {
      const pairingLower = pairing.toLowerCase().trim();
      const wineNameLower = wine.name.toLowerCase().trim();
      
      // Exact match
      if (wineNameLower === pairingLower) return true;
      
      // Wine name contains the pairing (e.g., "Chardonnay" matches "Late Harvest Chardonnay")
      if (wineNameLower.includes(pairingLower)) return true;
      
      // Pairing contains wine name (e.g., "Dry Rosé" matches "Rosé")
      if (pairingLower.includes(wineNameLower)) return true;
      
      // Handle special cases
      // "Dry Rosé" or "Rosé" should match "Rosé", "Provence Rosé", "Rosato", "White Zinfandel"
      if (pairingLower.includes("rosé") || pairingLower.includes("rose")) {
        return wineNameLower.includes("rosé") || wineNameLower.includes("rose") || wineNameLower.includes("zinfandel");
      }
      
      // "Champagne" can match sparkling wines like "Prosecco"
      if (pairingLower.includes("champagne")) {
        return wine.type.toLowerCase().includes("sparkling");
      }
      
      return false;
    })
  );
  
  // Return matched wines (don't fallback to all wines)
  return matchedWines;
}
