"use client";

import { HeroContent } from "@/components/sections/Hero";
import { AboutContent } from "@/components/sections/About";
import { SkillsContent } from "@/components/sections/Skills";
import { ProjectsContent } from "@/components/sections/Projects";
import { ContactContent } from "@/components/sections/Contact";
import { FooterContent } from "@/components/Footer";

/**
 * Conteúdo HTML que vive dentro do <Scroll html> do drei e faz scroll em
 * sincronia com a cena 3D. As secções estão posicionadas em bandas verticais
 * (em vh) alinhadas com as fases da câmara/ecrã, e encostadas a um dos lados
 * para deixar o monitor 3D visível ao centro.
 *
 * Altura total = 720vh  ->  pages = 7.2 no <ScrollControls>.
 */
export function HtmlSections() {
  return (
    <div className="relative w-full text-foreground" style={{ height: "720vh" }}>
      {/* Hero — banda 0–100vh, conteúdo à esquerda */}
      <section
        className="absolute inset-x-0 flex items-center px-6 md:px-16"
        style={{ top: 0, height: "100vh" }}
      >
        <HeroContent />
      </section>

      {/* Sobre — 100–200vh, à esquerda (câmara desloca-se, PC fica à direita) */}
      <section
        className="absolute inset-x-0 flex items-center px-6 md:px-16"
        style={{ top: "100vh", height: "100vh" }}
      >
        <div className="rounded-2xl bg-background/30 p-2 backdrop-blur-sm">
          <AboutContent />
        </div>
      </section>

      {/* Stack — 200–320vh, à direita (PC fica à esquerda com os chips) */}
      <section
        className="absolute inset-x-0 flex items-center justify-end px-6 md:px-16"
        style={{ top: "200vh", height: "120vh" }}
      >
        <div className="rounded-2xl bg-background/30 p-2 backdrop-blur-sm">
          <SkillsContent />
        </div>
      </section>

      {/* Projetos — 320–580vh, centrado (câmara recua, PC ao fundo) */}
      <section
        className="absolute inset-x-0 flex flex-col justify-center px-6 py-24 md:px-16"
        style={{ top: "320vh", minHeight: "260vh" }}
      >
        <ProjectsContent />
      </section>

      {/* Contacto — 580–680vh, centrado */}
      <section
        className="absolute inset-x-0 flex items-center px-6 md:px-16"
        style={{ top: "580vh", height: "100vh" }}
      >
        <ContactContent />
      </section>

      {/* Footer — 680–720vh */}
      <section
        className="absolute inset-x-0 flex items-end justify-center px-6 pb-12"
        style={{ top: "680vh", height: "40vh" }}
      >
        <FooterContent />
      </section>
    </div>
  );
}
