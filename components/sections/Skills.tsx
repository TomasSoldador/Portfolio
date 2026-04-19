"use client";

import { Section } from "@/components/ui/Section";
import { SKILLS_DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { Cpu, Globe, Database, Server } from "lucide-react";
import { cn } from "@/lib/utils";

// Helper to map icons roughly (simplified for demo)
function getIcon(name: string) {
  if (name.includes("Front")) return Globe;
  if (name.includes("Back")) return Server;
  return Database;
}

export function Skills() {
  return (
    <Section id="skills" className="py-20">
      <div className="space-y-12">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            The <span className="text-accent">Toolbox</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Box 1: Stack - Span 2 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} 
            className="md:col-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             <h3 className="text-2xl font-bold mb-6 z-10 relative">Core Stack</h3>
             <div className="flex flex-wrap gap-3 z-10 relative">
                {SKILLS_DATA.flatMap(s => s.items).slice(0, 8).map((skill, i) => (
                    <span key={skill} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/5">
                        {skill}
                    </span>
                ))}
             </div>
             
             {/* Decorative Background Icons */}
             <Globe className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5 group-hover:text-white/10 transition-colors duration-500" />
          </motion.div>

          {/* Box 2: IoT Niche */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="row-span-1 relative group overflow-hidden rounded-3xl border border-white/10 bg-slate-900 p-8 flex flex-col justify-between"
          >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-slate-900 to-slate-900" />
              
              <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                      <Cpu className="w-8 h-8 text-emerald-400" />
                      <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-xs text-emerald-500 font-mono uppercase">Online</span>
                      </div>
                  </div>
                  <h3 className="text-xl font-bold">IoT Specialist</h3>
                  <p className="text-sm text-slate-400 mt-2">Connecting the physical world to the cloud. MQTT & ESP32 Expert.</p>
              </div>
          </motion.div>

          {/* Box 3: Location / About - Span 3 cols (Full width on bottom) */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="md:col-span-3 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 flex items-center justify-center min-h-[200px]"
          >
             <div className="text-center z-10 relative space-y-4">
                 <h3 className="text-2xl font-bold">Based in Portugal 🇵🇹</h3>
                 <p className="text-slate-400 max-w-xl mx-auto">
                     Available for remote work worldwide. I bring a European design sensibility with Silicon Valley engineering standards.
                 </p>
             </div>
             {/* Grid Pattern Background */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          </motion.div>

        </div>
      </div>
    </Section>
  );
}
