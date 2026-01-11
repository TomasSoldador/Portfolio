import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: readonly string[];
  image: string;
  links: {
    demo: string;
    github: string;
  };
}

export function ProjectCard({ title, description, tags, image, links }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group hover:border-accent/50 transition-colors duration-300">
      <div className="relative aspect-video bg-muted overflow-hidden">
         {/* Using a gray div as placeholder until real images are added, or Next/Image if valid src */}
         <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-zinc-600 group-hover:scale-105 transition-transform duration-500">
            {/* If we had real images, <Image src={image} ... /> would go here. For now, text. */}
            <span className="text-xl font-bold opacity-20">{title}</span>
         </div>
         {/* Overlay gradient */}
         <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground border border-border"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-4 flex items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <Link href={links.demo} target="_blank" className="gap-2">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href={links.github} target="_blank" className="gap-2">
              <Github className="w-4 h-4" />
              Code
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
