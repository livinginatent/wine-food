"use client";

import { useRouter } from "next/navigation";
import WineSelection from "@/components/WineSelection";

export default function WinePage() {
  const router = useRouter();

  const handleSelect = (wineId: string) => {
    router.push(`/wine/${wineId}`);
  };

  const handleBack = () => {
    router.push("/");
  };

  return <WineSelection onSelect={handleSelect} onBack={handleBack} />;
}
