"use client";

import { useSyncExternalStore } from "react";

export type Theme = "dark" | "light";

/** Subscreve a alterações da classe de tema no <html>. */
function subscribe(cb: () => void) {
  const obs = new MutationObserver(cb);
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => obs.disconnect();
}
function getSnapshot(): Theme {
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}

/** Lê o tema atual ("dark" por defeito) reagindo a mudanças do toggle. */
export function useTheme(): Theme {
  return useSyncExternalStore(subscribe, getSnapshot, () => "dark" as Theme);
}

/** Define o tema, atualizando a classe no <html> e persistindo em localStorage. */
export function setTheme(next: Theme) {
  const root = document.documentElement;
  root.classList.remove("dark", "light");
  root.classList.add(next);
  try {
    localStorage.setItem("theme", next);
  } catch {
    /* ignora */
  }
}
