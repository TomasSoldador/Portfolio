"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme, setTheme } from "@/lib/hooks/useTheme";

/**
 * Toggle de tema. O tema inicial é definido por um script inline no <head>
 * (ver app/layout.tsx) para evitar flash; aqui apenas lemos e alternamos.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const theme = useTheme();

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
