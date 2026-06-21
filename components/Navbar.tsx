"use client";

import { Github, Linkedin } from "lucide-react";
import { NAVIGATION_LINKS, PROFILE } from "@/lib/data";
import { SmartLink } from "@/components/ui/SmartLink";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

/**
 * Navbar fixa, por cima do conteúdo. Os links navegam por âncora (#id) com
 * scroll suave nativo, igual nas versões 3D e estática.
 */
export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <SmartLink
          href="#home"
          offset={0}
          className="font-mono text-sm font-bold tracking-tight text-foreground"
        >
          <span className="text-primary">{">"}</span> tomas<span className="blink-cursor">_</span>
        </SmartLink>

        <nav className="hidden items-center gap-6 rounded-full border border-border bg-card/50 px-6 py-2 backdrop-blur md:flex">
          {NAVIGATION_LINKS.map((link) => (
            <SmartLink
              key={link.href}
              href={link.href}
              offset={link.offset}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </SmartLink>
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
        </div>
      </div>
    </header>
  );
}
