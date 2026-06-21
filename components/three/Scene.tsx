"use client";

import { Stars } from "@react-three/drei";
import { RetroComputer } from "./RetroComputer";
import { FloatingTech } from "./FloatingTech";
import { CameraRig } from "./CameraRig";
import type { Theme } from "@/lib/hooks/useTheme";

/**
 * Cena 3D pura. É renderizada num <Canvas> fixo em fundo de ecrã inteiro; a
 * câmara, o PC e o ecrã animam-se a partir do scrollState (scroll da janela).
 */
export function Scene({ quality, theme }: { quality: "high" | "low"; theme: Theme }) {
  const isLight = theme === "light";
  return (
    <>
      <CameraRig />

      {/* Iluminação (sem HDR externo, para carregar rápido e offline) */}
      <ambientLight intensity={isLight ? 0.8 : 0.4} />
      <directionalLight position={[5, 6, 5]} intensity={isLight ? 1.4 : 1.1} color="#cfe9ff" />
      <pointLight position={[-4, 1, 3]} intensity={40} color="#22d3ee" distance={18} />
      <pointLight position={[0, 0, 2]} intensity={6} color="#22d3ee" distance={8} />

      {/* Campo de estrelas (apenas no tema escuro; em claro seriam invisíveis) */}
      {!isLight && (
        <Stars
          radius={60}
          depth={40}
          count={quality === "high" ? 2200 : 700}
          factor={4}
          saturation={0}
          fade
          speed={0.5}
        />
      )}

      {/* Peça central + tecnologias a flutuar */}
      <RetroComputer quality={quality} />
      {quality === "high" && <FloatingTech />}
    </>
  );
}
