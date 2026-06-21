"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";
import { SceneLoader } from "./SceneLoader";

/**
 * Experiência 3D: <Canvas> fixo em ecrã inteiro, usado como FUNDO (atrás do
 * conteúdo HTML). Não captura eventos (pointer-events: none) para não bloquear
 * cliques/scroll na página; a paralaxe do rato é lida via window (ScrollDriver).
 *
 * `quality` degrada a cena em dispositivos fracos; `dpr` limita o pixel ratio.
 */
export default function Experience({
  quality,
  dpr,
}: {
  quality: "high" | "low";
  dpr: [number, number];
}) {
  return (
    <>
      <SceneLoader />
      <div className="pointer-events-none fixed inset-0 z-0 h-[100dvh] w-full">
        <Canvas
          dpr={dpr}
          gl={{ antialias: quality === "high", powerPreference: "high-performance" }}
          camera={{ position: [1.4, 0.3, 6.2], fov: 42 }}
        >
          <color attach="background" args={["#05070d"]} />
          <fog attach="fog" args={["#05070d", 10, 24]} />
          <Suspense fallback={null}>
            <Scene quality={quality} />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
