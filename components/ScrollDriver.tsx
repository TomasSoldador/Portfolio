"use client";

import { useEffect } from "react";
import { scrollState, clamp01 } from "@/lib/r3fScroll";

// Secções pela ordem em que aparecem (ids no DOM).
const SECTION_IDS = ["home", "about", "skills", "projects", "contact"];

/**
 * Atualiza o estado de scroll partilhado (lido pela cena 3D) a partir do scroll
 * e do rato da janela. Não renderiza nada e não usa estado React — escreve
 * diretamente no módulo, em rAF, para máxima performance.
 */
export function ScrollDriver() {
  useEffect(() => {
    let raf = 0;

    const measure = () => {
      raf = 0;
      const vh = window.innerHeight;
      const max = document.documentElement.scrollHeight - vh;
      scrollState.progress = max > 0 ? clamp01(window.scrollY / max) : 0;

      // Determina a secção ativa (a que cobre o centro do ecrã) e o progresso
      // local dentro dela.
      const mid = vh * 0.5;
      let idx = 0;
      let local = 0;
      for (let i = 0; i < SECTION_IDS.length; i++) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= mid) {
          idx = i;
          local = clamp01((mid - r.top) / Math.max(1, r.height));
        }
      }
      scrollState.phaseIndex = idx;
      scrollState.phaseLocal = local;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    const onMove = (e: PointerEvent) => {
      scrollState.px = (e.clientX / window.innerWidth) * 2 - 1;
      scrollState.py = -((e.clientY / window.innerHeight) * 2 - 1);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
