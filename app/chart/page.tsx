"use client";

import { useEffect, useState } from "react";
import WinePairingChart from "@/components/WinePairingChart";
import WinePairingMobile from "@/components/WinePairingMobile";

export default function ChartPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return isMobile ? <WinePairingMobile /> : <WinePairingChart />;
}
