"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { getFrame, typed } from "@/lib/screen";
import { scrollState } from "@/lib/r3fScroll";

/**
 * Conteúdo do ecrã do monitor 3D: um "terminal" que se escreve a si mesmo
 * conforme o scroll. Usa <Html transform> para acompanhar a rotação/inclinação
 * do PC e aproveitar CSS (glow, scanlines, cursor a piscar).
 *
 * Atualiza o DOM diretamente em useFrame (via refs) para não re-renderizar o
 * React a cada frame.
 */
export function ScreenContent() {
  const titleRef = useRef<HTMLSpanElement>(null);
  const bodyRef = useRef<HTMLPreElement>(null);

  useFrame((state) => {
    const frame = getFrame(scrollState.phaseIndex);

    if (titleRef.current && titleRef.current.textContent !== frame.title) {
      titleRef.current.textContent = frame.title;
    }
    if (bodyRef.current) {
      const cursorOn = Math.floor(state.clock.elapsedTime * 1.8) % 2 === 0;
      bodyRef.current.textContent =
        typed(frame.body, scrollState.phaseLocal) + (cursorOn ? "█" : "");
    }
  });

  return (
    <Html
      transform
      position={[0, 0.05, 0.07]}
      distanceFactor={1.6}
      // não captura eventos -> o scroll/cliques passam para a página
      style={{ userSelect: "none", pointerEvents: "none" }}
    >
      <div
        className="crt-screen flex flex-col overflow-hidden rounded-sm"
        style={{
          width: 360,
          height: 252,
          fontFamily: "var(--font-mono), monospace",
        }}
      >
        {/* barra de janela */}
        <div className="flex items-center gap-1.5 border-b border-cyan-400/20 bg-black/40 px-3 py-1.5">
          <span className="h-2 w-2 rounded-full bg-red-500/70" />
          <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
          <span className="h-2 w-2 rounded-full bg-green-500/70" />
          <span
            ref={titleRef}
            className="ml-2 truncate text-[10px] tracking-wide text-cyan-300/70"
          >
            ~/tomas — bash
          </span>
        </div>

        {/* corpo do terminal */}
        <div className="relative flex-1 p-3">
          <pre
            ref={bodyRef}
            className="m-0 whitespace-pre-wrap text-[13px] leading-[1.45] text-cyan-300 text-glow"
            style={{ fontFamily: "inherit" }}
          />
        </div>
      </div>
    </Html>
  );
}
