export interface Mood {
  id: string;
  title: string;
  description: string;
  imageURL: string;
  pairings: {
    wine: string;
    food: string;
  }[];
}

export const moods: Mood[] = [
  {
    id: "rainy-tuesday",
    title: "Rainy Tuesday Comfort",
    description: "Cozy pairings for quiet moments and gentle contemplation",
    imageURL: "https://images.unsplash.com/photo-1509635022432-0220ac12960b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pairings: [
      { wine: "Pinot Noir", food: "Mushrooms" },
      { wine: "Merlot", food: "Roast Chicken" },
      { wine: "Chardonnay", food: "Creamy Pasta" },
      { wine: "Riesling", food: "Pork Belly" },
    ],
  },
  {
    id: "celebratory-splurge",
    title: "Celebratory Splurge",
    description: "Luxurious combinations for life's special moments",
    imageURL: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=600&fit=crop",
    pairings: [
      { wine: "Champagne", food: "Lobster" },
      { wine: "Cabernet Sauvignon", food: "Grilled Steak" },
      { wine: "Port", food: "Dark Chocolate" },
      { wine: "Chardonnay", food: "Beef Wellington" },
    ],
  },
  {
    id: "summer-picnic",
    title: "Summer Picnic",
    description: "Light and refreshing pairings for sunny outdoor gatherings",
    imageURL: "https://images.unsplash.com/photo-1558290514-f12fbe7ddeb6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pairings: [
      { wine: "Rosé", food: "Salmon" },
      { wine: "Sauvignon Blanc", food: "Goat Cheese" },
      { wine: "Pinot Grigio", food: "Caprese Salad" },
      { wine: "Prosecco", food: "Fruit Tart" },
    ],
  },
  {
    id: "date-night",
    title: "Date Night In",
    description: "Romantic pairings to set the perfect intimate atmosphere",
    imageURL: "https://images.unsplash.com/photo-1519756719377-e084f8333a83?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pairings: [
      { wine: "Pinot Noir", food: "Duck Breast" },
      { wine: "Chardonnay", food: "Lobster" },
      { wine: "Sparkling Rosé", food: "Oysters" },
      { wine: "Merlot", food: "Roast Chicken" },
    ],
  },
  {
    id: "weekend-brunch",
    title: "Weekend Brunch",
    description: "Effortless pairings for lazy mornings and leisurely afternoons",
    imageURL: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pairings: [
      { wine: "Moscato", food: "Fruit Tart" },
      { wine: "Prosecco", food: "Quiche Lorraine" },
      { wine: "Rosé", food: "Salads" },
      { wine: "Sauvignon Blanc", food: "Goat Cheese" },
    ],
  },
  {
    id: "winter-warming",
    title: "Winter Warming",
    description: "Rich and hearty pairings to warm the soul on cold evenings",
    imageURL: "https://images.unsplash.com/photo-1548704806-0c20f7ea6474?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pairings: [
      { wine: "Syrah", food: "BBQ Ribs" },
      { wine: "Cabernet Sauvignon", food: "Grilled Steak" },
      { wine: "Malbec", food: "Lamb Chops" },
      { wine: "Zinfandel", food: "Cassoulet" },
    ],
  },
];

export function getMoodById(id: string): Mood | undefined {
  return moods.find(mood => mood.id === id);
}
