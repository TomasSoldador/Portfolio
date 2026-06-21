"use client";

import { useMemo } from "react";
import { Float, Html } from "@react-three/drei";
import { FLOATING_TECH } from "@/lib/data";

/**
 * Tecnologias a flutuar à volta do monitor. Cada "chip" é um pequeno cartão
 * HTML (billboard, sempre virado para a câmara) distribuído num anel à volta
 * do PC, com leve flutuação independente via <Float>.
 */
export function FloatingTech() {
  const chips = useMemo(() => {
    const n = FLOATING_TECH.length;
    return FLOATING_TECH.map((label, i) => {
      const angle = (i / n) * Math.PI * 2;
      const radius = 3.4;
      return {
        label,
        position: [
          Math.cos(angle) * radius,
          Math.sin(angle) * 1.6, // achatado na vertical
          Math.sin(angle) * radius - 1.5, // empurra alguns para trás
        ] as [number, number, number],
        speed: 1 + (i % 3) * 0.4,
      };
    });
  }, []);

  return (
    <>
      {chips.map((chip) => (
        <Float
          key={chip.label}
          speed={chip.speed}
          rotationIntensity={0.2}
          floatIntensity={0.8}
          position={chip.position}
        >
          <Html center transform distanceFactor={9}>
            <div
              className="select-none whitespace-nowrap rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-1 text-xs font-medium text-cyan-200/80 backdrop-blur"
              style={{ textShadow: "0 0 8px rgba(34,211,238,0.5)", pointerEvents: "none" }}
            >
              {chip.label}
            </div>
          </Html>
        </Float>
      ))}
    </>
  );
}
