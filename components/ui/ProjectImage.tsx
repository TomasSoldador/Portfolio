"use client";

import { useState } from "react";
import { Code2 } from "lucide-react";

/**
 * Mostra o screenshot/GIF do projeto. Enquanto o ficheiro não existir em
 * /public/projects, cai graciosamente num placeholder com marca (gradiente do
 * acento + título) — apresentável para visitantes, sem instruções de dev.
 *
 * Para adicionar a imagem real: coloca o ficheiro indicado em `src` dentro de
 * /public/projects/ (ver public/projects/README.txt).
 */
export function ProjectImage({
  src,
  alt,
  accent,
}: {
  src: string;
  alt: string;
  accent: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="relative flex h-full w-full items-center justify-center overflow-hidden"
        style={{
          background: `radial-gradient(130% 130% at 30% 0%, ${accent}33, transparent 55%), linear-gradient(135deg, ${accent}14, transparent), var(--card)`,
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            color: accent,
          }}
        />
        <div className="relative flex flex-col items-center gap-2 px-4 text-center">
          <Code2 size={26} style={{ color: accent }} />
          <span className="font-mono text-sm font-medium" style={{ color: accent }}>
            {alt}
          </span>
        </div>
      </div>
    );
  }

  return (
    // Imagem com fallback dinâmico (onError) — next/image não encaixa neste caso.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover"
    />
  );
}
