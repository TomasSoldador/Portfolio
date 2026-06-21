"use client";

import { motion } from "framer-motion";
import { PROJECTS_DATA } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function ProjectsContent() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-primary">
          {"// ls projetos/"}
        </span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Projetos</h2>
        <p className="mx-auto mt-3 max-w-xl text-pretty text-sm text-muted-foreground">
          Produtos reais que construí de ponta a ponta — do frontend ao hardware.
        </p>
      </motion.div>

      <div className="flex flex-col gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
