import { Section } from "@/components/ui/Section";
import { PROFILE } from "@/lib/data";

export function About() {
  return (
    <Section id="about" className="bg-muted/50 rounded-3xl my-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
            {PROFILE.about}
          </div>
        </div>
        
        <div className="relative group">
          <div className="absolute inset-0 bg-accent/20 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6 duration-300" />
          <div className="relative bg-zinc-800 rounded-2xl aspect-square flex items-center justify-center overflow-hidden border border-border">
             {/* Placeholder for Profile Image */}
             <span className="text-zinc-600 font-medium">Profile Image Placeholder</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
