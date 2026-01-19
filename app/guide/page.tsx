"use client";

import { useRouter } from "next/navigation";
import PairingGuide from "@/components/PairingGuide";

export default function GuidePage() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return <PairingGuide onBack={handleBack} />;
}
