export interface Wine {
  id: string;
  name: string;
  type: string;
  description: string;
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
}

export const wines: Wine[] = [
  {
    id: "cabernet-sauvignon",
    name: "Cabernet Sauvignon",
    type: "Red Wine",
    description: "Full-bodied with rich tannins and dark fruit flavors",
    characteristics: ["Bold", "Tannic", "Dark Fruit", "Oak"],
    foodPairings: ["Grilled Steak", "Roast Lamb", "Aged Cheese", "Dark Chocolate"]
  },
  {
    id: "chardonnay",
    name: "Chardonnay",
    type: "White Wine",
    description: "Creamy and buttery with notes of apple and vanilla",
    characteristics: ["Buttery", "Creamy", "Oak", "Citrus"],
    foodPairings: ["Lobster", "Roast Chicken", "Creamy Pasta", "Brie Cheese"]
  },
  {
    id: "pinot-noir",
    name: "Pinot Noir",
    type: "Red Wine",
    description: "Elegant and light-bodied with red fruit and earthy notes",
    characteristics: ["Light", "Earthy", "Red Fruit", "Elegant"],
    foodPairings: ["Salmon", "Duck", "Mushrooms", "Goat Cheese"]
  },
  {
    id: "sauvignon-blanc",
    name: "Sauvignon Blanc",
    type: "White Wine",
    description: "Crisp and refreshing with herbaceous and citrus notes",
    characteristics: ["Crisp", "Herbaceous", "Citrus", "Mineral"],
    foodPairings: ["Goat Cheese", "Seafood", "Salads", "Asparagus"]
  },
  {
    id: "merlot",
    name: "Merlot",
    type: "Red Wine",
    description: "Smooth and velvety with plum and cherry flavors",
    characteristics: ["Smooth", "Plum", "Cherry", "Soft Tannins"],
    foodPairings: ["Pork", "Pasta", "Tomato-based Dishes", "Soft Cheese"]
  },
  {
    id: "riesling",
    name: "Riesling",
    type: "White Wine",
    description: "Aromatic with notes of peach, apricot, and honey",
    characteristics: ["Aromatic", "Sweet", "Acidic", "Fruity"],
    foodPairings: ["Spicy Asian Cuisine", "Pork", "Duck", "Fruit Desserts"]
  },
  {
    id: "syrah",
    name: "Syrah",
    type: "Red Wine",
    description: "Bold and spicy with dark fruit and pepper notes",
    characteristics: ["Bold", "Spicy", "Pepper", "Dark Fruit"],
    foodPairings: ["BBQ", "Game Meat", "Spicy Dishes", "Hard Cheese"]
  },
  {
    id: "pinot-grigio",
    name: "Pinot Grigio",
    type: "White Wine",
    description: "Light and crisp with citrus and green apple flavors",
    characteristics: ["Light", "Crisp", "Citrus", "Dry"],
    foodPairings: ["Light Seafood", "Salads", "Poultry", "Fresh Cheese"]
  },
  {
    id: "malbec",
    name: "Malbec",
    type: "Red Wine",
    description: "Deep purple, full-bodied wine with plum and black cherry flavors",
    characteristics: ["Jammy", "Plum", "Smooth Tannins", "Velvety"],
    foodPairings: ["Grilled Steak", "BBQ Ribs", "Lamb Chops", "Hard Cheese"]
  },
  {
    id: "zinfandel",
    name: "Zinfandel",
    type: "Red Wine",
    description: "Bold and fruit-forward with high alcohol and jammy notes",
    characteristics: ["Jammy", "High Alcohol", "Spicy", "Blackberry"],
    foodPairings: ["BBQ Ribs", "Spicy Curry", "Pizza", "Dark Chocolate"]
  },
  {
    id: "sangiovese",
    name: "Sangiovese",
    type: "Red Wine",
    description: "The soul of Chianti, featuring high acidity and cherry notes",
    characteristics: ["Acidic", "Cherry", "Herbal", "Savory"],
    foodPairings: ["Tomato-based Dishes", "Pizza", "Roasted Root Veggies", "Salami"]
  },
  {
    id: "tempranillo",
    name: "Tempranillo",
    type: "Red Wine",
    description: "Spanish classic with flavors of leather, tobacco, and red fruit",
    characteristics: ["Savory", "Leather", "Tobacco", "Red Fruit"],
    foodPairings: ["Tacos", "Lamb Chops", "Cured Meats", "Roasted Vegetables"]
  },
  {
    id: "prosecco",
    name: "Prosecco",
    type: "Sparkling Wine",
    description: "Light, bubbly, and fruity Italian sparkling wine",
    characteristics: ["Bubbly", "Fruity", "Light", "Floral"],
    foodPairings: ["Oysters", "Fruit Tart", "Appetizers", "Mild Cheese"]
  },
  {
    id: "gewurztraminer",
    name: "Gewürztraminer",
    type: "White Wine",
    description: "Highly aromatic with intense floral and lychee scents",
    characteristics: ["Floral", "Lychee", "Low Acidity", "Full-bodied"],
    foodPairings: ["Spicy Curry", "Duck Breast", "Asian Cuisine", "Strong Cheese"]
  },
  {
    id: "albarino",
    name: "Albariño",
    type: "White Wine",
    description: "High acidity with refreshing stone fruit and saline notes",
    characteristics: ["High Acidity", "Saline", "Peach", "Zesty"],
    foodPairings: ["Oysters", "Sushi", "White Fish", "Salads"]
  },
  {
    id: "rose",
    name: "Rosé",
    type: "Rosé Wine",
    description: "Fresh and versatile with strawberry and watermelon notes",
    characteristics: ["Fresh", "Berry", "Crisp", "Dry"],
    foodPairings: ["Salmon", "Salads", "Grilled Chicken", "Charcuterie"]
  },
  {
    id: "provence-rose",
    name: "Provence Rosé",
    type: "Rosé Wine",
    description: "Pale, dry, and elegant with notes of citrus and herbs",
    characteristics: ["Dry", "Pale", "Elegant", "Mineral"],
    foodPairings: ["Oysters", "Sushi & Sashimi", "Goat Cheese", "Asparagus", "Lobster"]
  },
  {
    id: "white-zinfandel",
    name: "White Zinfandel",
    type: "Rosé Wine",
    description: "Slightly sweet and fruity with strawberry and melon flavors",
    characteristics: ["Sweet", "Fruity", "Strawberry", "Light"],
    foodPairings: ["Spicy Curry", "BBQ Ribs", "Fruit Tart", "Roast Chicken", "Goat Cheese"]
  },
  {
    id: "sangiovese-rose",
    name: "Rosato",
    type: "Rosé Wine",
    description: "Italian rosé with bright acidity and cherry notes",
    characteristics: ["Acidic", "Cherry", "Bright", "Crisp"],
    foodPairings: ["Creamy Pasta", "Roast Chicken", "Goat Cheese", "Mushrooms", "Salmon"]
  },
  {
    id: "port",
    name: "Port",
    type: "Dessert Wine",
    description: "Sweet, fortified red wine with rich berry and nut flavors",
    characteristics: ["Sweet", "Fortified", "Rich", "Nutty"],
    foodPairings: ["Blue Cheese", "Dark Chocolate", "Walnuts", "Dried Fruits"]
  },
  {
    id: "moscato",
    name: "Moscato",
    type: "White Wine",
    description: "Sweet and low alcohol with orange blossom and peach notes",
    characteristics: ["Sweet", "Light", "Floral", "Peach"],
    foodPairings: ["Fruit Tart", "Spicy Asian Cuisine", "Desserts", "Brie Cheese"]
  },
  {
    id: "grenache",
    name: "Grenache",
    type: "Red Wine",
    description: "Medium-bodied with spicy berry flavors and soft tannins",
    characteristics: ["Spicy", "Strawberry", "Soft", "Low Tannin"],
    foodPairings: ["Roasted Vegetables", "Pork Belly", "Grilled Chicken", "Stews"]
  },
  {
    id: "viognier",
    name: "Viognier",
    type: "White Wine",
    description: "Full-bodied white with floral aromas and oily texture",
    characteristics: ["Floral", "Honeysuckle", "Full-bodied", "Rich"],
    foodPairings: ["Spicy Curry", "Lobster", "Roasted Root Veggies", "Poultry"]
  },
  // Additional wines
  {
    id: "nebbiolo",
    name: "Nebbiolo",
    type: "Red Wine",
    description: "Italian powerhouse with high tannins and notes of tar and roses",
    characteristics: ["High Tannins", "Tar", "Rose", "Earthy"],
    foodPairings: ["Truffle Pasta", "Braised Beef", "Wild Game", "Mushrooms"]
  },
  {
    id: "carmenere",
    name: "Carmenère",
    type: "Red Wine",
    description: "Chilean specialty with green pepper and dark fruit notes",
    characteristics: ["Herbal", "Green Pepper", "Dark Fruit", "Medium-bodied"],
    foodPairings: ["Chilean Empanadas", "Spicy Sausages", "Grilled Vegetables", "Lamb"]
  },
  {
    id: "petite-sirah",
    name: "Petite Sirah",
    type: "Red Wine",
    description: "Inky dark with intense tannins and blueberry flavors",
    characteristics: ["Inky", "High Tannins", "Blueberry", "Peppery"],
    foodPairings: ["Barbecue Brisket", "Blue Cheese", "Venison", "Chocolate Desserts"]
  },
  {
    id: "gruner-veltliner",
    name: "Grüner Veltliner",
    type: "White Wine",
    description: "Austrian white with white pepper and citrus notes",
    characteristics: ["Peppery", "Citrus", "High Acidity", "Mineral"],
    foodPairings: ["Asparagus", "Vegetarian Dishes", "Sushi", "Light Fish"]
  },
  {
    id: "vermentino",
    name: "Vermentino",
    type: "White Wine",
    description: "Mediterranean white with herbal and saline characteristics",
    characteristics: ["Herbal", "Saline", "Citrus", "Light"],
    foodPairings: ["Seafood Stew", "Grilled Fish", "Mediterranean Salads", "Olives"]
  },
  {
    id: "torrontes",
    name: "Torrontés",
    type: "White Wine",
    description: "Argentinian aromatic white with floral and peach notes",
    characteristics: ["Aromatic", "Floral", "Peach", "Dry"],
    foodPairings: ["Ceviche", "Spicy Thai Food", "Chicken Empanadas", "Soft Cheese"]
  },
  {
    id: "barbera",
    name: "Barbera",
    type: "Red Wine",
    description: "Italian red with high acidity and low tannins",
    characteristics: ["High Acidity", "Low Tannins", "Cherry", "Light-bodied"],
    foodPairings: ["Pizza", "Pasta with Tomato Sauce", "Cold Cuts", "Ratatouille"]
  },
  {
    id: "cinsault",
    name: "Cinsault",
    type: "Red Wine",
    description: "Light-bodied red with floral and strawberry notes",
    characteristics: ["Light", "Floral", "Strawberry", "Low Alcohol"],
    foodPairings: ["Charcuterie", "Grilled Fish", "Vegetable Terrine", "Goat Cheese"]
  },
  {
    id: "sparkling-rose",
    name: "Sparkling Rosé",
    type: "Sparkling Wine",
    description: "Bubbly rosé with red fruit and crisp acidity",
    characteristics: ["Bubbly", "Red Fruit", "Crisp", "Festive"],
    foodPairings: ["Smoked Salmon", "Strawberry Desserts", "Fried Chicken", "Sushi"]
  },
  {
    id: "lambrusco",
    name: "Lambrusco",
    type: "Sparkling Red Wine",
    description: "Italian sparkling red with dark fruit and slight bitterness",
    characteristics: ["Sparkling", "Dark Fruit", "Bitter Finish", "Medium-bodied"],
    foodPairings: ["Charcuterie Boards", "Pizza", "Pork Sausages", "Parmesan Cheese"]
  },
  {
    id: "chenin-blanc",
    name: "Chenin Blanc",
    type: "White Wine",
    description: "Versatile with honey, apple, and mineral notes",
    characteristics: ["Honey", "Apple", "Mineral", "Versatile"],
    foodPairings: ["Roast Pork", "Thai Curry", "Quiche", "Goat Cheese"]
  },
  {
    id: "mourvedre",
    name: "Mourvèdre",
    type: "Red Wine",
    description: "Meaty and rustic with dark fruit and leather notes",
    characteristics: ["Meaty", "Rustic", "Dark Fruit", "Leather"],
    foodPairings: ["Game Meat", "Grilled Sausages", "Stews", "Hard Cheese"]
  },
  {
    id: "sherry",
    name: "Sherry",
    type: "Fortified Wine",
    description: "Spanish fortified wine ranging from dry to sweet",
    characteristics: ["Fortified", "Nutty", "Complex", "Oxidative"],
    foodPairings: ["Tapas", "Olives", "Almonds", "Iberian Ham"]
  },
  {
    id: "ice-wine",
    name: "Ice Wine",
    type: "Dessert Wine",
    description: "Intensely sweet wine made from frozen grapes",
    characteristics: ["Very Sweet", "Concentrated", "Honey", "Apricot"],
    foodPairings: ["Foie Gras", "Blue Cheese", "Fruit Desserts", "Crème Brûlée"]
  },
  {
    id: "spatburgunder",
    name: "Spätburgunder",
    type: "Red Wine",
    description: "German Pinot Noir with elegance and red fruit",
    characteristics: ["Elegant", "Red Fruit", "Light", "Acidic"],
    foodPairings: ["Roast Veal", "Trout", "Wild Mushrooms", "Light Pasta"]
  },
  {
    id: "xinomavro",
    name: "Xinomavro",
    type: "Red Wine",
    description: "Greek red with high acidity and tomato-olive notes",
    characteristics: ["High Acidity", "Tomato", "Olive", "Tannic"],
    foodPairings: ["Greek Lamb", "Tomato-based Stews", "Grilled Vegetables", "Feta"]
  },
  {
    id: "fassolis",
    name: "Assyrtiko",
    type: "White Wine",
    description: "Greek white with high acidity and volcanic minerality",
    characteristics: ["High Acidity", "Mineral", "Citrus", "Saline"],
    foodPairings: ["Grilled Octopus", "Fried Calamari", "Greek Salad", "Shellfish"]
  }
];

export const foods: Food[] = [
  {
    id: "grilled-steak",
    name: "Grilled Steak",
    category: "Meat",
    description: "Rich, savory beef with charred exterior",
    characteristics: ["Rich", "Savory", "Umami", "Hearty"],
    winePairings: ["Cabernet Sauvignon", "Merlot", "Syrah", "Malbec"]
  },
  {
    id: "salmon",
    name: "Salmon",
    category: "Seafood",
    description: "Oily, flavorful fish with delicate texture",
    characteristics: ["Oily", "Rich", "Delicate", "Umami"],
    winePairings: ["Pinot Noir", "Chardonnay", "Pinot Grigio", "Rosé"]
  },
  {
    id: "pasta-cream",
    name: "Creamy Pasta",
    category: "Pasta",
    description: "Rich pasta dishes with cream-based sauces",
    characteristics: ["Creamy", "Rich", "Buttery", "Comforting"],
    winePairings: ["Chardonnay", "Pinot Grigio", "Sauvignon Blanc", "Viognier"]
  },
  {
    id: "roast-chicken",
    name: "Roast Chicken",
    category: "Poultry",
    description: "Tender, flavorful roasted poultry",
    characteristics: ["Tender", "Versatile", "Mild", "Savory"],
    winePairings: ["Chardonnay", "Pinot Noir", "Riesling", "Sauvignon Blanc"]
  },
  {
    id: "goat-cheese",
    name: "Goat Cheese",
    category: "Cheese",
    description: "Tangy and creamy with earthy notes",
    characteristics: ["Tangy", "Creamy", "Earthy", "Sharp"],
    winePairings: ["Sauvignon Blanc", "Pinot Noir", "Riesling", "Champagne"]
  },
  {
    id: "dark-chocolate",
    name: "Dark Chocolate",
    category: "Dessert",
    description: "Rich, bittersweet chocolate",
    characteristics: ["Rich", "Bittersweet", "Intense", "Cocoa"],
    winePairings: ["Cabernet Sauvignon", "Port", "Merlot", "Zinfandel"]
  },
  {
    id: "mushrooms",
    name: "Mushrooms",
    category: "Vegetables",
    description: "Earthy and umami-rich fungi",
    characteristics: ["Earthy", "Umami", "Savory", "Rich"],
    winePairings: ["Pinot Noir", "Chardonnay", "Merlot", "Burgundy"]
  },
  {
    id: "lobster",
    name: "Lobster",
    category: "Seafood",
    description: "Sweet, luxurious shellfish",
    characteristics: ["Sweet", "Rich", "Luxurious", "Buttery"],
    winePairings: ["Chardonnay", "Champagne", "Sauvignon Blanc", "Viognier"]
  },
  {
    id: "oysters",
    name: "Oysters",
    category: "Seafood",
    description: "Briny, delicate, and fresh shellfish",
    characteristics: ["Briny", "Fresh", "Delicate", "Cold"],
    winePairings: ["Sauvignon Blanc", "Prosecco", "Albariño", "Champagne"]
  },
  {
    id: "spicy-curry",
    name: "Spicy Curry",
    category: "Global Cuisine",
    description: "Complex, heat-heavy dishes with aromatic spices",
    characteristics: ["Spicy", "Aromatic", "Hot", "Complex"],
    winePairings: ["Riesling", "Gewürztraminer", "Moscato", "Zinfandel"]
  },
  {
    id: "lamb-chops",
    name: "Lamb Chops",
    category: "Meat",
    description: "Gamey and tender meat with rich fat content",
    characteristics: ["Gamey", "Fatty", "Tender", "Savory"],
    winePairings: ["Cabernet Sauvignon", "Syrah", "Malbec", "Tempranillo"]
  },
  {
    id: "sushi",
    name: "Sushi & Sashimi",
    category: "Seafood",
    description: "Clean, delicate raw fish with vinegared rice",
    characteristics: ["Clean", "Delicate", "Vinegar", "Umami"],
    winePairings: ["Pinot Grigio", "Albariño", "Prosecco", "Dry Rosé"]
  },
  {
    id: "blue-cheese",
    name: "Blue Cheese",
    category: "Cheese",
    description: "Pungent, salty, and creamy fermented cheese",
    characteristics: ["Pungent", "Salty", "Creamy", "Strong"],
    winePairings: ["Port", "Riesling", "Sauternes", "Zinfandel"]
  },
  {
    id: "bbq-ribs",
    name: "BBQ Ribs",
    category: "Meat",
    description: "Smoky, sweet, and fatty pork or beef",
    characteristics: ["Smoky", "Sweet", "Fatty", "Rich"],
    winePairings: ["Zinfandel", "Malbec", "Syrah", "Merlot"]
  },
  {
    id: "asparagus",
    name: "Asparagus",
    category: "Vegetables",
    description: "Grassy and bitter green vegetable",
    characteristics: ["Grassy", "Bitter", "Green", "Crunchy"],
    winePairings: ["Sauvignon Blanc", "Pinot Grigio", "Grüner Veltliner", "Sancerre"]
  },
  {
    id: "fruit-tart",
    name: "Fruit Tart",
    category: "Dessert",
    description: "Sweet pastry with fresh fruit and custard",
    characteristics: ["Sweet", "Acidic", "Creamy", "Crisp"],
    winePairings: ["Moscato", "Prosecco", "Riesling", "Late Harvest Chardonnay"]
  },
  {
    id: "pork-belly",
    name: "Pork Belly",
    category: "Meat",
    description: "Extremely fatty and savory cut of pork",
    characteristics: ["Fatty", "Rich", "Savory", "Melting"],
    winePairings: ["Riesling", "Pinot Noir", "Grenache", "Chenin Blanc"]
  },
  {
    id: "duck-breast",
    name: "Duck Breast",
    category: "Poultry",
    description: "Rich, gamey poultry with a thick layer of fat",
    characteristics: ["Rich", "Gamey", "Fatty", "Savory"],
    winePairings: ["Pinot Noir", "Gewürztraminer", "Merlot", "Syrah"]
  },
  {
    id: "tacos",
    name: "Tacos (Carnitas/Asada)",
    category: "Global Cuisine",
    description: "Savory meat with citrus and spice notes",
    characteristics: ["Spicy", "Zesty", "Savory", "Textured"],
    winePairings: ["Tempranillo", "Grenache", "Malbec", "Albariño"]
  },
  {
    id: "aged-cheddar",
    name: "Aged Cheddar",
    category: "Cheese",
    description: "Sharp, crumbly, and nutty long-aged cheese",
    characteristics: ["Sharp", "Crumbly", "Nutty", "Salty"],
    winePairings: ["Cabernet Sauvignon", "Chardonnay", "Syrah", "Malbec"]
  },
  // Expanded food list
  {
    id: "veggie-stir-fry",
    name: "Vegetable Stir Fry",
    category: "Vegetarian",
    description: "Crisp vegetables in savory Asian-style sauce",
    characteristics: ["Crisp", "Savory", "Vegetal", "Light"],
    winePairings: ["Riesling", "Pinot Grigio", "Sauvignon Blanc", "Gewürztraminer"]
  },
  {
    id: "beef-bourguignon",
    name: "Beef Bourguignon",
    category: "Meat",
    description: "French beef stew braised in red wine",
    characteristics: ["Rich", "Savory", "Wine-infused", "Comforting"],
    winePairings: ["Pinot Noir", "Burgundy", "Merlot", "Syrah"]
  },
  {
    id: "ceviche",
    name: "Ceviche",
    category: "Seafood",
    description: "Raw fish cured in citrus juices",
    characteristics: ["Citrusy", "Fresh", "Acidic", "Light"],
    winePairings: ["Sauvignon Blanc", "Albariño", "Vermentino", "Sparkling Wine"]
  },
  {
    id: "ratatouille",
    name: "Ratatouille",
    category: "Vegetarian",
    description: "French vegetable stew with tomatoes and herbs",
    characteristics: ["Herbal", "Vegetal", "Tomato-based", "Earthy"],
    winePairings: ["Rosé", "Grenache", "Sangiovese", "Cinsault"]
  },
  {
    id: "pork-tenderloin",
    name: "Pork Tenderloin",
    category: "Meat",
    description: "Lean, tender pork with mild flavor",
    characteristics: ["Lean", "Mild", "Tender", "Versatile"],
    winePairings: ["Pinot Noir", "Chardonnay", "Rosé", "Grenache"]
  },
  {
    id: "eggplant-parmesan",
    name: "Eggplant Parmesan",
    category: "Vegetarian",
    description: "Breaded eggplant with tomato sauce and cheese",
    characteristics: ["Rich", "Tomato", "Cheesy", "Hearty"],
    winePairings: ["Sangiovese", "Barbera", "Zinfandel", "Chianti"]
  },
  {
    id: "shrimp-scampi",
    name: "Shrimp Scampi",
    category: "Seafood",
    description: "Garlic butter shrimp with white wine sauce",
    characteristics: ["Garlicky", "Buttery", "Seafood", "Rich"],
    winePairings: ["Chardonnay", "Pinot Grigio", "Sauvignon Blanc", "Vermentino"]
  },
  {
    id: "venison",
    name: "Venison",
    category: "Game",
    description: "Lean, gamey deer meat",
    characteristics: ["Gamey", "Lean", "Rich", "Earthy"],
    winePairings: ["Pinot Noir", "Syrah", "Merlot", "Cabernet Sauvignon"]
  },
  {
    id: "paella",
    name: "Paella",
    category: "Global Cuisine",
    description: "Spanish rice dish with seafood, meat, and saffron",
    characteristics: ["Saffron", "Savory", "Complex", "Rich"],
    winePairings: ["Albariño", "Rosé", "Garnacha", "Tempranillo"]
  },
  {
    id: "quiche-lorraine",
    name: "Quiche Lorraine",
    category: "Egg Dishes",
    description: "Savory custard pie with bacon and cheese",
    characteristics: ["Creamy", "Savory", "Rich", "Egg-based"],
    winePairings: ["Chardonnay", "Sparkling Wine", "Rosé", "Pinot Blanc"]
  },
  {
    id: "beet-salad",
    name: "Roasted Beet Salad",
    category: "Salads",
    description: "Earthly beets with goat cheese and nuts",
    characteristics: ["Earthy", "Sweet", "Creamy", "Nutty"],
    winePairings: ["Pinot Noir", "Sauvignon Blanc", "Rosé", "Chenin Blanc"]
  },
  {
    id: "osso-buco",
    name: "Osso Buco",
    category: "Meat",
    description: "Italian braised veal shanks",
    characteristics: ["Rich", "Tender", "Meaty", "Saffron"],
    winePairings: ["Barolo", "Barbaresco", "Chianti", "Sangiovese"]
  },
  {
    id: "mussels-marinara",
    name: "Mussels Marinara",
    category: "Seafood",
    description: "Mussels in tomato-wine broth",
    characteristics: ["Briny", "Tomato", "Garlic", "Brothy"],
    winePairings: ["Pinot Grigio", "Vermentino", "Sauvignon Blanc", "Chianti"]
  },
  {
    id: "halloumi",
    name: "Grilled Halloumi",
    category: "Cheese",
    description: "Grilled Cypriot cheese with high melting point",
    characteristics: ["Salty", "Grilled", "Chewy", "Savory"],
    winePairings: ["Rosé", "Sauvignon Blanc", "Pinot Grigio", "Xinomavro"]
  },
  {
    id: "crab-cakes",
    name: "Crab Cakes",
    category: "Seafood",
    description: "Pan-fried cakes of crab meat and breading",
    characteristics: ["Sweet Crab", "Crispy", "Rich", "Delicate"],
    winePairings: ["Chardonnay", "Sparkling Wine", "Sauvignon Blanc", "Viognier"]
  },
  {
    id: "lentil-soup",
    name: "Lentil Soup",
    category: "Soup",
    description: "Hearty soup with lentils and vegetables",
    characteristics: ["Hearty", "Earthy", "Comforting", "Vegetarian"],
    winePairings: ["Pinot Noir", "Grenache", "Chardonnay", "Rosé"]
  },
  {
    id: "pizza-margherita",
    name: "Pizza Margherita",
    category: "Global Cuisine",
    description: "Classic Italian pizza with tomato, mozzarella, basil",
    characteristics: ["Tomato", "Cheesy", "Herbal", "Simple"],
    winePairings: ["Chianti", "Sangiovese", "Barbera", "Lambrusco"]
  },
  {
    id: "cornish-hen",
    name: "Cornish Game Hen",
    category: "Poultry",
    description: "Small, tender game bird",
    characteristics: ["Tender", "Mild", "Small Portion", "Versatile"],
    winePairings: ["Pinot Noir", "Chardonnay", "Rosé", "Grenache"]
  },
  {
    id: "gnocchi",
    name: "Gnocchi",
    category: "Pasta",
    description: "Italian potato dumplings",
    characteristics: ["Pillowy", "Starchy", "Versatile", "Comforting"],
    winePairings: ["Pinot Grigio", "Chardonnay", "Barbera", "Rosé"]
  },
  {
    id: "cassoulet",
    name: "Cassoulet",
    category: "Meat",
    description: "French bean stew with various meats",
    characteristics: ["Hearty", "Rich", "Beany", "Comforting"],
    winePairings: ["Syrah", "Grenache", "Merlot", "Côtes du Rhône"]
  },
  {
    id: "falafel",
    name: "Falafel",
    category: "Vegetarian",
    description: "Deep-fried chickpea balls",
    characteristics: ["Crispy", "Herbal", "Spiced", "Vegetarian"],
    winePairings: ["Rosé", "Crisp White", "Light Red", "Sparkling"]
  },
  {
    id: "stuffed-peppers",
    name: "Stuffed Bell Peppers",
    category: "Vegetarian",
    description: "Bell peppers filled with rice and meat or vegetables",
    characteristics: ["Vegetal", "Savory", "Comforting", "Versatile"],
    winePairings: ["Zinfandel", "Merlot", "Chardonnay", "Rosé"]
  },
  {
    id: "bouillabaisse",
    name: "Bouillabaisse",
    category: "Seafood",
    description: "French fish stew with saffron and herbs",
    characteristics: ["Seafood Medley", "Saffron", "Brothy", "Complex"],
    winePairings: ["Rosé", "Viognier", "Grenache", "Sauvignon Blanc"]
  },
  {
    id: "carnitas",
    name: "Carnitas",
    category: "Meat",
    description: "Mexican slow-cooked pulled pork",
    characteristics: ["Porky", "Crispy", "Savory", "Fatty"],
    winePairings: ["Zinfandel", "Grenache", "Tempranillo", "Malbec"]
  },
  {
    id: "spanakopita",
    name: "Spanakopita",
    category: "Vegetarian",
    description: "Greek spinach and feta pie in phyllo dough",
    characteristics: ["Savory", "Spinach", "Feta", "Flaky"],
    winePairings: ["Assyrtiko", "Rosé", "Sauvignon Blanc", "Pinot Grigio"]
  },
  {
    id: "fried-chicken",
    name: "Fried Chicken",
    category: "Poultry",
    description: "Crispy, juicy fried poultry",
    characteristics: ["Crispy", "Juicy", "Savory", "Comforting"],
    winePairings: ["Champagne", "Sparkling Rosé", "Chardonnay", "Zinfandel"]
  },
  {
    id: "gazpacho",
    name: "Gazpacho",
    category: "Soup",
    description: "Cold Spanish tomato soup",
    characteristics: ["Cold", "Tomato", "Refreshing", "Vegetal"],
    winePairings: ["Fino Sherry", "Albariño", "Rosé", "Sauvignon Blanc"]
  },
  {
    id: "chili-con-carne",
    name: "Chili Con Carne",
    category: "Meat",
    description: "Spicy meat and bean stew",
    characteristics: ["Spicy", "Hearty", "Beany", "Rich"],
    winePairings: ["Zinfandel", "Malbec", "Syrah", "Petite Sirah"]
  },
  {
    id: "caprese-salad",
    name: "Caprese Salad",
    category: "Salads",
    description: "Italian salad with tomato, mozzarella, and basil",
    characteristics: ["Fresh", "Simple", "Creamy", "Herbal"],
    winePairings: ["Pinot Grigio", "Rosé", "Vermentino", "Prosecco"]
  },
  {
    id: "beef-wellington",
    name: "Beef Wellington",
    category: "Meat",
    description: "Beef tenderloin wrapped in pastry",
    characteristics: ["Luxurious", "Rich", "Buttery", "Savory"],
    winePairings: ["Cabernet Sauvignon", "Merlot", "Pinot Noir", "Bordeaux"]
  },
  {
    id: "hummus",
    name: "Hummus",
    category: "Appetizer",
    description: "Creamy chickpea and tahini dip",
    characteristics: ["Creamy", "Nutty", "Savory", "Versatile"],
    winePairings: ["Rosé", "Sparkling Wine", "Crisp White", "Light Red"]
  },
  {
    id: "pulled-pork",
    name: "Pulled Pork Sandwich",
    category: "Meat",
    description: "Slow-cooked shredded pork in barbecue sauce",
    characteristics: ["Sweet", "Smoky", "Tender", "Messy"],
    winePairings: ["Zinfandel", "Grenache", "Syrah", "Malbec"]
  },
  {
    id: "risotto",
    name: "Risotto",
    category: "Rice",
    description: "Creamy Italian rice dish",
    characteristics: ["Creamy", "Rich", "Starchy", "Versatile"],
    winePairings: ["Pinot Grigio", "Chardonnay", "Barbera", "Soave"]
  },
  {
    id: "caesar-salad",
    name: "Caesar Salad",
    category: "Salads",
    description: "Romaine lettuce with creamy dressing and croutons",
    characteristics: ["Creamy", "Garlicky", "Crunchy", "Anchovy"],
    winePairings: ["Sauvignon Blanc", "Chardonnay", "Pinot Grigio", "Sparkling"]
  },
  {
    id: "shepherds-pie",
    name: "Shepherd's Pie",
    category: "Comfort Food",
    description: "Ground meat with vegetable gravy and mashed potato topping",
    characteristics: ["Comforting", "Savory", "Hearty", "Mashed Potato"],
    winePairings: ["Syrah", "Merlot", "Pinot Noir", "Zinfandel"]
  },
  {
    id: "stuffed-mushrooms",
    name: "Stuffed Mushrooms",
    category: "Appetizer",
    description: "Mushroom caps filled with cheese and breadcrumbs",
    characteristics: ["Earthy", "Cheesy", "Savory", "Bite-sized"],
    winePairings: ["Pinot Noir", "Chardonnay", "Sparkling Wine", "Rosé"]
  },
  {
    id: "fish-tacos",
    name: "Fish Tacos",
    category: "Global Cuisine",
    description: "Grilled or fried fish in soft tortillas with toppings",
    characteristics: ["Fresh", "Zesty", "Light", "Versatile"],
    winePairings: ["Albariño", "Sauvignon Blanc", "Rosé", "Pinot Grigio"]
  },
  {
    id: "bruschetta",
    name: "Bruschetta",
    category: "Appetizer",
    description: "Toasted bread topped with tomatoes and basil",
    characteristics: ["Tomato", "Garlic", "Fresh", "Crunchy"],
    winePairings: ["Chianti", "Prosecco", "Sauvignon Blanc", "Rosé"]
  },
  {
    id: "coq-au-vin",
    name: "Coq au Vin",
    category: "Poultry",
    description: "French chicken braised in red wine",
    characteristics: ["Wine-infused", "Savory", "Rich", "Herbal"],
    winePairings: ["Pinot Noir", "Burgundy", "Merlot", "Gamay"]
  },
  {
    id: "stuffed-dates",
    name: "Stuffed Dates",
    category: "Appetizer",
    description: "Dates filled with cheese or nuts",
    characteristics: ["Sweet", "Rich", "Chewy", "Versatile"],
    winePairings: ["Port", "Sherry", "Moscato", "Rosé"]
  },
  {
    id: "tempura",
    name: "Tempura",
    category: "Global Cuisine",
    description: "Japanese battered and fried vegetables or seafood",
    characteristics: ["Crispy", "Light", "Greasy", "Delicate"],
    winePairings: ["Sauvignon Blanc", "Sparkling Wine", "Riesling", "Pinot Grigio"]
  },
  {
    id: "meatloaf",
    name: "Meatloaf",
    category: "Comfort Food",
    description: "Ground meat baked with seasonings",
    characteristics: ["Savory", "Hearty", "Comforting", "Simple"],
    winePairings: ["Zinfandel", "Merlot", "Syrah", "Cabernet Sauvignon"]
  },
  {
    id: "greek-salad",
    name: "Greek Salad",
    category: "Salads",
    description: "Cucumber, tomato, feta, and olives with olive oil",
    characteristics: ["Fresh", "Salty", "Tangy", "Herbal"],
    winePairings: ["Assyrtiko", "Rosé", "Sauvignon Blanc", "Pinot Gris"]
  },
  {
    id: "fruit-platter",
    name: "Fruit Platter",
    category: "Dessert",
    description: "Assorted fresh fruits with varying sweetness and acidity",
    characteristics: ["Sweet", "Fresh", "Acidic", "Light"],
    winePairings: ["Moscato", "Prosecco", "Riesling", "Sparkling Rosé"]
  },
  {
    id: "cheese-platter",
    name: "Cheese Platter",
    category: "Cheese",
    description: "Assorted cheeses with varying textures and flavors",
    characteristics: ["Versatile", "Rich", "Savory", "Creamy"],
    winePairings: ["Chardonnay", "Pinot Noir", "Cabernet Sauvignon", "Rosé", "Sparkling Wine"]
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
