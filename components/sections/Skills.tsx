import { Section } from "@/components/ui/Section";
import { SKILLS_DATA } from "@/lib/data";

export function Skills() {
  return (
    <Section id="skills">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated list of technologies and tools I use to build scalable applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS_DATA.map((category) => (
            <div 
              key={category.category} 
              className="bg-secondary/20 rounded-xl p-6 border border-border hover:border-accent/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-accent rounded-full" />
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-background border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
