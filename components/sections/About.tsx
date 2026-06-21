"use client";

import { motion } from "framer-motion";
import { PROFILE } from "@/lib/data";

const item = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export function AboutContent() {
  return (
    <div className="max-w-lg">
      <motion.span
        {...item}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs uppercase tracking-widest text-primary"
      >
        {"// sobre.md"}
      </motion.span>
      <motion.h2
        {...item}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
      >
        Sobre mim
      </motion.h2>

      <div className="mt-6 space-y-4">
        {PROFILE.about.map((p, i) => (
          <motion.p
            key={i}
            {...item}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            className="text-pretty leading-relaxed text-muted-foreground"
          >
            {p}
          </motion.p>
        ))}
      </div>
    </div>
  );
}
