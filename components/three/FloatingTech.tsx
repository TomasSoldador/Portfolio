"use client";

import { useMemo } from "react";
import { Float, Html } from "@react-three/drei";
import { FLOATING_TECH } from "@/lib/data";

/**
 * Tecnologias a flutuar à volta do monitor, como rótulos ambientais distantes.
 * Cada "chip" é um pequeno cartão HTML (billboard) distribuído num anel largo,
 * mantido pequeno e subtil para não competir com a peça central nem com o texto.
 */
export function FloatingTech() {
  const chips = useMemo(() => {
    const n = FLOATING_TECH.length;
    return FLOATING_TECH.map((label, i) => {
      const angle = (i / n) * Math.PI * 2 + 0.4;
      const radius = 5.2; // anel largo -> ficam na periferia
      return {
        label,
        position: [
          Math.cos(angle) * radius,
          Math.sin(angle * 1.3) * 2.4,
          Math.sin(angle) * radius - 2.5, // empurrados para trás
        ] as [number, number, number],
        speed: 1 + (i % 3) * 0.3,
      };
    });
  }, []);

  return (
    <>
      {chips.map((chip) => (
        <Float
          key={chip.label}
          speed={chip.speed}
          rotationIntensity={0.15}
          floatIntensity={0.6}
          position={chip.position}
        >
          <Html center transform distanceFactor={6} occlude={false}>
            <div
              className="select-none whitespace-nowrap rounded-full border border-cyan-400/20 bg-cyan-400/5 px-2 py-0.5 text-[11px] font-medium text-cyan-200/45 backdrop-blur-sm"
              style={{ textShadow: "0 0 6px rgba(34,211,238,0.35)", pointerEvents: "none" }}
            >
              {chip.label}
            </div>
          </Html>
        </Float>
      ))}
    </>
  );
}
