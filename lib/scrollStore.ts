"use client";

import { useSyncExternalStore } from "react";

/**
 * Store mínimo, ao nível do módulo, para ligar a UI (Navbar, fora do <Canvas>)
 * ao elemento de scroll criado pelo <ScrollControls> do drei (dentro do
 * <Canvas>). Como é o mesmo módulo JS, a referência é partilhada através da
 * fronteira do Canvas.
 */

let scrollEl: HTMLElement | null = null;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

export function setScrollElement(el: HTMLElement | null) {
  scrollEl = el;
  emit();
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function getSnapshot() {
  return scrollEl;
}

/** Hook para obter o elemento de scroll atual (ou null). */
export function useScrollElement() {
  return useSyncExternalStore(
    subscribe,
    getSnapshot,
    () => null // valor no servidor
  );
}

/** Faz scroll suave para uma fração (0..1) do percurso total. */
export function scrollToOffset(offset: number) {
  const el = scrollEl;
  if (!el) return;
  const max = el.scrollHeight - el.clientHeight;
  el.scrollTo({ top: offset * max, behavior: "smooth" });
}
