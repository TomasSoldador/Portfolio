"use client";

import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/data";
import { ContactForm } from "@/components/ContactForm";

export function ContactContent() {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-primary">
          {"// contacto"}
        </span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Vamos construir algo?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-pretty text-sm text-muted-foreground">
          Tens um projeto em mente ou queres só dizer olá? Escreve-me — respondo sempre.
        </p>
      </motion.div>

      <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur sm:p-8">
        <ContactForm />
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
        {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            <Icon size={16} /> {label}
          </a>
        ))}
      </div>
    </div>
  );
}
