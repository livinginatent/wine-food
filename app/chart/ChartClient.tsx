"use client";

import { useEffect, useState } from "react";
import WinePairingChart from "@/components/WinePairingChart";
import WinePairingMobile from "@/components/WinePairingMobile";

export default function ChartClient() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    // Defer initial measurement to avoid synchronously setting state in effect.
    // (Also prevents hydration mismatch by rendering the same initial UI server/client.)
    const timeoutId = window.setTimeout(checkMobile, 0);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return isMobile ? <WinePairingMobile /> : <WinePairingChart />;
}

