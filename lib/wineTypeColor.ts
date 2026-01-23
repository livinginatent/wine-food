export const getWineTypeColor = (type: string) => {
  const t = type.toLowerCase();

  if (t.includes("sparkling") && t.includes("red")) return "text-rose-600";
  if (t.includes("sparkling")) return "text-[#CE7E5A]";
  if (t.includes("rosé") || t.includes("rose")) return "text-[#FD7979]";
  if (t.includes("red")) return "text-[#C40C0C]";
  if (t.includes("white")) return "text-amber-600";
  if (t.includes("dessert")) return "text-amber-700";
  if (t.includes("fortified")) return "text-purple-700";

  return "text-secondary";
};

