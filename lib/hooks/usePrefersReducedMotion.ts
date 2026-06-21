"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(cb: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

/**
 * Devolve `true` quando o utilizador pediu menos movimento no sistema
 * (prefers-reduced-motion: reduce). Implementado com useSyncExternalStore
 * para subscrever a media query sem setState dentro de um efeito.
 */
export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    getSnapshot,
    () => false // valor no servidor
  );
}
