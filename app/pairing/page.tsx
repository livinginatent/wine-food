"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

function PairingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const mode = searchParams.get("mode") as "wine" | "food" | null;
    const id = searchParams.get("id") || "";

    if (mode && id) {
      // Redirect to new SEO-friendly routes
      if (mode === "wine") {
        router.replace(`/wine/${id}`);
      } else if (mode === "food") {
        router.replace(`/food/${id}`);
      }
    } else {
      // Invalid parameters, redirect to home
      router.replace("/");
    }
  }, [router, searchParams]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <p className="font-inter text-base font-light text-accent/60">
        Redirecting...
      </p>
    </div>
  );
}

export default function PairingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <p className="font-inter text-base font-light text-accent/60">
            Loading...
          </p>
        </div>
      }
    >
      <PairingContent />
    </Suspense>
  );
}
