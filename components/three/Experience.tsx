"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";
import { SceneLoader } from "./SceneLoader";
import type { Theme } from "@/lib/hooks/useTheme";

// Cor de fundo/névoa da cena por tema, para a página ser coerente no modo claro.
const BG: Record<Theme, string> = {
  dark: "#05070d",
  light: "#dce5f1",
};

/**
 * Experiência 3D: <Canvas> fixo em ecrã inteiro, usado como FUNDO (atrás do
 * conteúdo HTML). Não captura eventos (pointer-events: none) para não bloquear
 * cliques/scroll na página; a paralaxe do rato é lida via window (ScrollDriver).
 *
 * `quality` degrada a cena em dispositivos fracos; `dpr` limita o pixel ratio;
 * `theme` mantém o fundo coerente com o tema claro/escuro.
 */
export default function Experience({
  quality,
  dpr,
  theme,
}: {
  quality: "high" | "low";
  dpr: [number, number];
  theme: Theme;
}) {
  const bg = BG[theme];
  return (
    <>
      <SceneLoader />
      <div className="pointer-events-none fixed inset-0 z-0 h-[100dvh] w-full">
        <Canvas
          dpr={dpr}
          gl={{ antialias: quality === "high", powerPreference: "high-performance" }}
          camera={{ position: [1.4, 0.3, 6.2], fov: 42 }}
        >
          <color attach="background" args={[bg]} />
          <fog attach="fog" args={[bg, 10, 24]} />
          <Suspense fallback={null}>
            <Scene quality={quality} theme={theme} />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
