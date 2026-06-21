"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";

/**
 * Mostra o screenshot/GIF do projeto. Enquanto o ficheiro não existir em
 * /public, tenta carregar e cai graciosamente num placeholder com instruções.
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
        className="relative flex h-full w-full flex-col items-center justify-center gap-2 text-center"
        style={{
          background: `radial-gradient(120% 120% at 50% 0%, ${accent}22, transparent 60%), var(--card)`,
        }}
      >
        <ImageIcon className="opacity-60" style={{ color: accent }} size={28} />
        <p className="px-4 text-xs text-muted-foreground">
          Coloca o screenshot/GIF em
          <br />
          <code className="text-foreground/80">{src}</code>
        </p>
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
