"use client";

import { useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { NAVIGATION_LINKS, PROFILE } from "@/lib/data";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

/**
 * Navbar fixa, por cima do conteúdo. Os links navegam por âncora (#id) com
 * scroll suave nativo. Em ecrãs pequenos abre um menu hambúrguer.
 */
export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <a
          href="#home"
          className="font-mono text-sm font-bold tracking-tight text-foreground"
        >
          <span className="text-primary">{">"}</span> tomas
          <span className="blink-cursor">_</span>
        </a>

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-6 rounded-full border border-border bg-card/70 px-6 py-2 backdrop-blur md:flex">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PROFILE.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={PROFILE.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <ThemeToggle />

          {/* Botão do menu mobile */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card/60 backdrop-blur transition-colors hover:border-primary/60 hover:text-primary md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Painel do menu mobile */}
      {open && (
        <nav className="mx-4 mt-2 rounded-2xl border border-border bg-card/95 p-2 backdrop-blur-md md:hidden">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-1 flex items-center gap-4 border-t border-border px-4 pt-3 pb-1">
            <a
              href={PROFILE.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={PROFILE.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
