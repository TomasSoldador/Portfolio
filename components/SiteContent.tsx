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
 * Estrutura HTML única do portfólio, em fluxo normal de documento (boa para
 * SEO, acessibilidade e responsividade). Fica POR CIMA do fundo — seja a cena
 * 3D (mode="3d") ou o fundo estático (mode="static").
 *
 * As secções estão alinhadas a um dos lados (alternadamente) e usam cartões
 * "frosted" (backdrop-blur), deixando o monitor 3D visível no espaço livre.
 */
export function SiteContent({ mode }: { mode: "3d" | "static" }) {
  const is3d = mode === "3d";

  // Cartão translúcido para o texto ser legível sobre a cena 3D.
  const panel =
    "rounded-2xl border border-border/60 bg-background/55 p-6 backdrop-blur-md sm:p-8";

  return (
    <div className="relative z-10">
      <Navbar />

      {/* HOME */}
      <section
        id="home"
        className="mx-auto grid min-h-[100svh] max-w-6xl scroll-mt-24 items-center gap-10 px-6 pb-16 pt-28 md:grid-cols-2 md:px-8"
      >
        <HeroContent />
        {/* No modo 3D, o monitor real (canvas) aparece atrás -> deixamos o espaço.
            No modo estático, mostramos o monitor em CSS. */}
        {is3d ? <div aria-hidden className="hidden md:block" /> : <StaticMonitor />}
      </section>

      {/* SOBRE — texto à esquerda */}
      <section
        id="about"
        className="mx-auto flex min-h-[100svh] max-w-6xl scroll-mt-24 items-center px-6 py-20 md:px-8"
      >
        <div className={panel}>
          <AboutContent />
        </div>
      </section>

      {/* STACK — conteúdo à direita */}
      <section
        id="skills"
        className="mx-auto flex min-h-[100svh] max-w-6xl scroll-mt-24 items-center justify-end px-6 py-20 md:px-8"
      >
        <div className={panel}>
          <SkillsContent />
        </div>
      </section>

      {/* PROJETOS — centrado */}
      <section
        id="projects"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:px-8"
      >
        <ProjectsContent />
      </section>

      {/* CONTACTO — centrado */}
      <section
        id="contact"
        className="mx-auto flex min-h-[100svh] max-w-6xl scroll-mt-24 items-center justify-center px-6 py-20 md:px-8"
      >
        <ContactContent />
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-border/60 bg-background/70 py-12 backdrop-blur-md">
        <FooterContent />
      </footer>
    </div>
  );
}
