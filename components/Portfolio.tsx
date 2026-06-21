"use client";

import dynamic from "next/dynamic";
import { SiteContent } from "@/components/SiteContent";
import { StaticBackground } from "@/components/StaticBackground";
import { ScrollDriver } from "@/components/ScrollDriver";
import { useDeviceCapability } from "@/lib/hooks/useDeviceCapability";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

// A cena 3D só carrega no cliente (WebGL) e é lazy-loaded para o site abrir rápido.
const Experience = dynamic(() => import("@/components/three/Experience"), {
  ssr: false,
});

/**
 * Compõe a página: uma única estrutura HTML (SiteContent) por cima de um fundo
 * que pode ser a cena 3D imersiva ou um fundo estático.
 *
 *  - Servidor / antes de detetar / dispositivo fraco / reduced-motion
 *    -> fundo estático + conteúdo (rápido, acessível, ótimo para SEO).
 *  - Cliente capaz -> cena 3D imersiva como fundo, sincronizada com o scroll.
 */
export function Portfolio() {
  const cap = useDeviceCapability();
  const reducedMotion = usePrefersReducedMotion();

  const use3D = cap.ready && !cap.isLowEnd && !reducedMotion;

  return (
    <>
      {use3D ? (
        <>
          <ScrollDriver />
          <Experience quality={cap.tier} dpr={cap.dpr} />
        </>
      ) : (
        <StaticBackground />
      )}
      <SiteContent mode={use3D ? "3d" : "static"} />
    </>
  );
}
