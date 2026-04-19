"use client";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { PROFILE } from "@/lib/data";
import { ArrowDown, Download } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typewriter } from "@/components/ui/Typewriter"; // We will create this next

export function Hero() {
  return (
    <Section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center pt-24 pb-12 relative z-10"
    >
      <div className="space-y-10 max-w-5xl mx-auto px-6">
        
        {/* Badge / Pill */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-3 py-1 rounded-full border border-slate-800 bg-slate-950/50 backdrop-blur-sm mb-4"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
          <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">Available for work</span>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">Digital</span>
              <br />
              <div className="h-[1.1em] overflow-hidden">
                 <Typewriter words={["Experiences", "Interfaces", "Solutions"]} />
              </div>
            </h1>
        </motion.div>
        
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          {PROFILE.short_bio} I bridge the gap between design and engineering to create interfaces that feel alive.
        </motion.p>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-8 items-center"
        >
          <Button size="md" asChild className="min-w-[160px] rounded-full hover:scale-105 transition-transform duration-300">
            <Link href="#projects">
              View Projects
              <ArrowDown className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button variant="secondary" size="md" className="min-w-[160px] rounded-full hover:scale-105 transition-transform duration-300">
             {/* Note: In a real scenario, this would likely link to a PDF file */}
            <span className="flex items-center">
                <Download className="mr-2 w-4 h-4" />
                Download CV
            </span>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
