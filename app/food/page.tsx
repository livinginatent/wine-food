"use client";

import { useRouter } from "next/navigation";
import FoodSelection from "@/components/FoodSelection";

export default function FoodPage() {
  const router = useRouter();

  const handleSelect = (foodId: string) => {
    router.push(`/food/${foodId}`);
  };

  const handleBack = () => {
    router.push("/");
  };

  return <FoodSelection onSelect={handleSelect} onBack={handleBack} />;
}
