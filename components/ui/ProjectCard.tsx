"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/data";
import { ProjectImage } from "./ProjectImage";

/**
 * Card de projeto com efeito de "tilt"/profundidade e reveal por scroll.
 * `index` alterna o lado de entrada para dar ritmo de parallax à lista.
 */
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const fromLeft = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 60, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
      className="group relative grid gap-6 overflow-hidden rounded-2xl border border-border bg-card/60 p-5 backdrop-blur md:grid-cols-2 md:p-6"
    >
      {/* brilho de acento no hover */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ boxShadow: `0 0 40px ${project.accent}33, inset 0 0 0 1px ${project.accent}55` }}
      />

      {/* Imagem / placeholder */}
      <div
        className={`relative aspect-video overflow-hidden rounded-xl border border-border ${
          fromLeft ? "md:order-1" : "md:order-2"
        }`}
      >
        <ProjectImage src={project.image} alt={project.title} accent={project.accent} />
      </div>

      {/* Texto */}
      <div className={`flex flex-col justify-center ${fromLeft ? "md:order-2" : "md:order-1"}`}>
        <span
          className="mb-2 font-mono text-xs uppercase tracking-widest"
          style={{ color: project.accent }}
        >
          {project.tagline}
        </span>
        <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-xs text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              Ver live <ArrowUpRight size={16} />
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <Github size={16} /> Código
            </a>
          )}
          {/* Sem links públicos: projeto comercial/privado — mostrado uma vez, discreto */}
          {!project.links.demo && !project.links.github && (
            <span className="text-xs text-muted-foreground/70">
              Projeto comercial — detalhes a pedido
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
