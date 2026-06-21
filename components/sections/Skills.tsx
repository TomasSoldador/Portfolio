"use client";

import { motion } from "framer-motion";
import { SkillsGrid } from "@/components/SkillsGrid";

export function SkillsContent() {
  return (
    <div className="w-full max-w-2xl">
      <motion.span
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs uppercase tracking-widest text-primary"
      >
        {"// stack.json"}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mb-8 mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
      >
        Stack &amp; Tecnologias
      </motion.h2>
      <SkillsGrid />
    </div>
  );
}
