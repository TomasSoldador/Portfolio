"use client";

import { Scroll, Stars } from "@react-three/drei";
import { RetroComputer } from "./RetroComputer";
import { FloatingTech } from "./FloatingTech";
import { CameraRig } from "./CameraRig";
import { ScrollSync } from "./ScrollSync";
import { HtmlSections } from "./HtmlSections";

/**
 * Conteúdo dentro do <ScrollControls>: a cena 3D + o conteúdo HTML que faz
 * scroll em sincronia (via <Scroll html>).
 */
export function Scene({ quality }: { quality: "high" | "low" }) {
  return (
    <>
      <ScrollSync />
      <CameraRig />

      {/* Iluminação (sem HDR externo, para carregar rápido e offline) */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 6, 5]} intensity={1.1} color="#cfe9ff" />
      <pointLight position={[-4, 1, 3]} intensity={40} color="#22d3ee" distance={18} />
      <pointLight position={[0, 0, 2]} intensity={6} color="#22d3ee" distance={8} />

      {/* Campo de estrelas para profundidade (procedural, barato) */}
      <Stars
        radius={60}
        depth={40}
        count={quality === "high" ? 2500 : 700}
        factor={4}
        saturation={0}
        fade
        speed={0.6}
      />

      {/* Peça central + tecnologias a flutuar */}
      <RetroComputer quality={quality} />
      {quality === "high" && <FloatingTech />}

      {/* Conteúdo HTML sincronizado com o scroll */}
      <Scroll html>
        <HtmlSections />
      </Scroll>
    </>
  );
}
