"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { StaticPortfolio } from "@/components/StaticPortfolio";
import { useDeviceCapability } from "@/lib/hooks/useDeviceCapability";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

// A cena 3D só carrega no cliente (WebGL) e é lazy-loaded para o site abrir rápido.
const Experience = dynamic(() => import("@/components/three/Experience"), {
  ssr: false,
});

/**
 * Decide qual experiência mostrar:
 *  - Servidor / antes de detetar / dispositivo fraco / reduced-motion -> versão
 *    estática 2D (rápida, acessível, ótima para SEO).
 *  - Cliente capaz -> experiência 3D imersiva com scroll-driven storytelling.
 */
export function Portfolio() {
  const cap = useDeviceCapability();
  const reducedMotion = usePrefersReducedMotion();

  const useStatic = !cap.ready || cap.isLowEnd || reducedMotion;

  if (useStatic) {
    return <StaticPortfolio />;
  }

  return (
    <>
      <Navbar />
      <Experience quality={cap.tier} dpr={cap.dpr} />
    </>
  );
}
