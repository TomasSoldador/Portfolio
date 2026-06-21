"use client";

import { useSyncExternalStore } from "react";

export type DeviceTier = "high" | "low";

export type Capability = {
  /** já correu a deteção no cliente (evita mismatch de hidratação) */
  ready: boolean;
  /** dispositivo considerado fraco -> degradar a cena 3D ou usar fallback 2D */
  isLowEnd: boolean;
  /** é um ecrã pequeno / toque (telemóvel) */
  isMobile: boolean;
  tier: DeviceTier;
  /** pixel ratio recomendado para o <Canvas> ([min, max]) */
  dpr: [number, number];
};

const SERVER_SNAPSHOT: Capability = {
  ready: false,
  isLowEnd: false,
  isMobile: false,
  tier: "high",
  dpr: [1, 2],
};

// Cache para manter referência estável entre chamadas a getSnapshot
// (requisito do useSyncExternalStore).
let cached: Capability = SERVER_SNAPSHOT;
let cachedKey = "";

function compute(): Capability {
  const nav = navigator as Navigator & { deviceMemory?: number };
  const cores = nav.hardwareConcurrency ?? 4;
  const memory = nav.deviceMemory ?? 4;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const smallScreen = window.innerWidth < 768;
  const isMobile = coarse && smallScreen;

  // Considera "fraco" se tem poucos núcleos/memória.
  const weakHardware = cores <= 4 || memory <= 4;
  const isLowEnd = weakHardware || isMobile;

  return {
    ready: true,
    isLowEnd,
    isMobile,
    tier: isLowEnd ? "low" : "high",
    // Limita o pixel ratio em mobile para poupar GPU.
    dpr: isMobile ? [1, 1.5] : [1, 2],
  };
}

function getSnapshot(): Capability {
  const next = compute();
  const key = `${next.isLowEnd}|${next.isMobile}|${next.tier}|${next.dpr.join(",")}`;
  if (key !== cachedKey) {
    cachedKey = key;
    cached = next;
  }
  return cached;
}

function subscribe(cb: () => void) {
  window.addEventListener("resize", cb);
  return () => window.removeEventListener("resize", cb);
}

/**
 * Deteta a capacidade aproximada do dispositivo para decidir se mostramos a
 * cena 3D completa, uma versão simplificada, ou o fallback 2D.
 *
 * Heurística: nº de núcleos lógicos, memória, largura do ecrã e tipo de ponteiro.
 * Usa useSyncExternalStore: no servidor devolve SERVER_SNAPSHOT (ready=false),
 * no cliente recalcula após a hidratação.
 */
export function useDeviceCapability(): Capability {
  return useSyncExternalStore(subscribe, getSnapshot, () => SERVER_SNAPSHOT);
}
