import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { PROFILE } from "@/lib/data";
import { ArrowDown, Download } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <Section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center pt-24 pb-12 relative z-10"
    >
      <div className="space-y-10 max-w-5xl mx-auto px-6 animate-in fade-in zoom-in-95 duration-1000 slide-in-from-bottom-5">
        
        {/* Badge / Pill */}
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-slate-800 bg-slate-950/50 backdrop-blur-sm mb-4">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
          <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">Available for work</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">Digital</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">Experiences</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {PROFILE.short_bio} I bridge the gap between design and engineering to create interfaces that feel alive.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 items-center">
          <Button size="md" asChild className="min-w-[160px]">
            <Link href="#projects">
              View Projects
              <ArrowDown className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button variant="secondary" size="md" className="min-w-[160px]">
             {/* Note: In a real scenario, this would likely link to a PDF file */}
            <span className="flex items-center">
                <Download className="mr-2 w-4 h-4" />
                Download CV
            </span>
          </Button>
        </div>
      </div>
    </Section>
  );
}
