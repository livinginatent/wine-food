"use client";

import { useRouter } from "next/navigation";
import PairingResults from "@/components/PairingResults";

export default function WinePairingPageClient({ id }: { id: string }) {
  const router = useRouter();

  const handleBack = () => {
    router.push("/wine");
  };

  const handleStartOver = () => {
    router.push("/");
  };

  return (
    <PairingResults
      mode="wine"
      selectedId={id}
      onBack={handleBack}
      onStartOver={handleStartOver}
    />
  );
}
