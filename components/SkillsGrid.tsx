"use client";

import { motion } from "framer-motion";
import { SKILLS_DATA, FAMILIARITY_DATA } from "@/lib/data";

export function SkillsGrid() {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid gap-6 sm:grid-cols-2">
        {SKILLS_DATA.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur"
          >
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-sm"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Familiaridade
        </h3>
        <ul className="flex flex-wrap gap-2">
          {FAMILIARITY_DATA.map((item) => (
            <li
              key={item}
              className="rounded-full border border-dashed border-border px-3 py-1.5 text-sm text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
