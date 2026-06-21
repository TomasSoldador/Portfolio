"use client";

import { Navbar } from "@/components/Navbar";
import { HeroContent } from "@/components/sections/Hero";
import { AboutContent } from "@/components/sections/About";
import { SkillsContent } from "@/components/sections/Skills";
import { ProjectsContent } from "@/components/sections/Projects";
import { ContactContent } from "@/components/sections/Contact";
import { FooterContent } from "@/components/Footer";
import { StaticMonitor } from "@/components/StaticMonitor";

/**
 * Versão estática (2D) do portfólio — sem WebGL. Usada em dispositivos fracos,
 * telemóveis e quando o utilizador pediu prefers-reduced-motion. Mantém todo o
 * conteúdo, acessível e rápido, com a mesma estética CRT.
 */
export function StaticPortfolio() {
  return (
    <main className="relative min-h-screen">
      {/* Fundo atmosférico */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute left-1/2 top-0 h-[60vh] w-[80vw] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <Navbar />

      <section
        id="home"
        className="mx-auto flex min-h-screen max-w-6xl scroll-mt-20 flex-col items-center gap-12 px-6 pb-16 pt-28 md:grid md:grid-cols-2 md:items-center md:px-8"
      >
        <HeroContent />
        <StaticMonitor />
      </section>

      <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 md:px-8">
        <AboutContent />
      </section>

      <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 md:px-8">
        <SkillsContent />
      </section>

      <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 md:px-8">
        <ProjectsContent />
      </section>

      <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 md:px-8">
        <ContactContent />
      </section>

      <footer className="border-t border-border py-12">
        <FooterContent />
      </footer>
    </main>
  );
}
