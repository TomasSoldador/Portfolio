"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { Scene } from "./Scene";
import { SceneLoader } from "./SceneLoader";

/**
 * Experiência 3D completa: <Canvas> fixo em ecrã inteiro com <ScrollControls>
 * a controlar o scroll. O conteúdo HTML vive dentro (ver Scene -> Scroll html).
 *
 * `quality` permite degradar a cena em dispositivos mais fracos.
 * `dpr` limita o pixel ratio (importante em mobile).
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
      <div className="fixed inset-0 h-[100dvh] w-full">
        <Canvas
          dpr={dpr}
          gl={{ antialias: quality === "high", powerPreference: "high-performance" }}
          camera={{ position: [0, 0.2, 6], fov: 42 }}
        >
          <color attach="background" args={["#05070d"]} />
          <fog attach="fog" args={["#05070d", 9, 22]} />
          <Suspense fallback={null}>
            <ScrollControls pages={7.2} damping={0.28}>
              <Scene quality={quality} />
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
