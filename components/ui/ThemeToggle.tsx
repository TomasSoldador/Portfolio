"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

/** Lê o tema atual a partir da classe no <html>, reagindo a alterações. */
function subscribe(cb: () => void) {
  const obs = new MutationObserver(cb);
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => obs.disconnect();
}
function getSnapshot(): Theme {
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}

function setTheme(next: Theme) {
  const root = document.documentElement;
  root.classList.remove("dark", "light");
  root.classList.add(next);
  try {
    localStorage.setItem("theme", next);
  } catch {
    /* ignora */
  }
}

/**
 * Toggle de tema. O tema inicial é definido por um script inline no <head>
 * (ver app/layout.tsx) para evitar flash; aqui apenas lemos e alternamos.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, () => "dark" as Theme);

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={theme === "dark" ? "Mudar para tema claro" : "Mudar para tema escuro"}
      className={[
        "grid h-10 w-10 place-items-center rounded-full border border-border",
        "bg-card/60 backdrop-blur transition-colors hover:border-primary/60 hover:text-primary",
        className ?? "",
      ].join(" ")}
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
