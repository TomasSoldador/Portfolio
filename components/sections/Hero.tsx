"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, FolderGit2, Mail } from "lucide-react";
import { PROFILE } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { SmartLink } from "@/components/ui/SmartLink";

const fade = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function HeroContent() {
  return (
    <div className="max-w-xl">
      <motion.p
        {...fade}
        transition={{ duration: 0.6 }}
        className="mb-3 font-mono text-sm tracking-widest text-primary text-glow"
      >
        $ ./portfolio --start
      </motion.p>

      <motion.h1
        {...fade}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="legible text-balance text-4xl font-bold tracking-tight sm:text-6xl"
      >
        {PROFILE.name}
      </motion.h1>

      <motion.p
        {...fade}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="legible mt-2 text-xl font-medium text-primary sm:text-2xl"
      >
        {PROFILE.role}
      </motion.p>

      <motion.p
        {...fade}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="legible mt-4 text-pretty text-base text-muted-foreground sm:text-lg"
      >
        {PROFILE.subtitle}
      </motion.p>

      <motion.div
        {...fade}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="mt-8 flex flex-wrap gap-3"
      >
        <Button asChild>
          <SmartLink href="#projects" offset={0.444}>
            <FolderGit2 size={16} /> Ver Projetos
          </SmartLink>
        </Button>
        <Button asChild variant="secondary">
          <SmartLink href="#contact" offset={0.806}>
            <Mail size={16} /> Contactar
          </SmartLink>
        </Button>
        <Button asChild variant="outline">
          <a href={PROFILE.cvUrl} download>
            <Download size={16} /> Descarregar CV
          </a>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="legible mt-12 inline-flex items-center gap-2 text-xs text-muted-foreground"
      >
        <ArrowDown size={14} className="animate-bounce" /> faz scroll para explorar
      </motion.div>
    </div>
  );
}
