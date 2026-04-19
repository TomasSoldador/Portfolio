"use client";

import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: readonly string[];
  image: string; // URL string
  links: {
    demo: string;
    github: string;
  };
  index: number;
}

export function ProjectCard({ title, description, tags, image, links, index }: ProjectCardProps) {
  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
    >
        <Card className="overflow-hidden group hover:border-accent/50 transition-colors duration-500 bg-black/40 backdrop-blur-md border-white/10 h-full flex flex-col">
          <div className="relative aspect-video overflow-hidden bg-zinc-900">
             {/* Image Placeholder with Hover Scale */}
             <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ 
                    // Fallback to strict color if image is just placeholder path
                    backgroundColor: "#18181b", 
                    backgroundImage: image.startsWith("/") ? "none" : `url(${image})`
                }}
             >
                {/* Text Placeholder if no real image */}
                <div className="w-full h-full flex items-center justify-center text-zinc-700 font-bold text-4xl opacity-20 group-hover:opacity-10 transition-opacity">
                    {title}
                </div>
             </div>
             
             {/* Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
          </div>
          
          <div className="p-6 space-y-4 flex-1 flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                {title}
              </h3>
              <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed">
                {description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded-full bg-white/5 text-slate-300 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-3 mt-auto">
              <Button variant="outline" size="sm" asChild className="rounded-full bg-transparent hover:bg-white hover:text-black border-white/20">
                <Link href={links.demo} target="_blank" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild className="rounded-full hover:bg-white/10">
                <Link href={links.github} target="_blank" className="gap-2">
                  <Github className="w-4 h-4" />
                  Code
                </Link>
              </Button>
            </div>
          </div>
        </Card>
    </motion.div>
  );
}
