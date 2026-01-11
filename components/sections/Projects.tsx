import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS_DATA } from "@/lib/data";

export function Projects() {
  return (
    <Section id="projects" className="py-24">
      <div className="space-y-12">
        <div className="text-center space-y-4">
           <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that demonstrate my ability to solve complex problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tech_stack}
              image={project.image}
              links={project.links}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
