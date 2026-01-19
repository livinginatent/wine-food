"use client";

import { useRouter } from "next/navigation";
import PairingResults from "@/components/PairingResults";

export default function FoodPairingPageClient({ id }: { id: string }) {
  const router = useRouter();

  const handleBack = () => {
    router.push("/food");
  };

  const handleStartOver = () => {
    router.push("/");
  };

  return (
    <PairingResults
      mode="food"
      selectedId={id}
      onBack={handleBack}
      onStartOver={handleStartOver}
    />
  );
}
