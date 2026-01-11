import { Github, Linkedin, Mail } from "lucide-react";

export const NAVIGATION_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const PROFILE = {
  name: "John Doe",
  role: "Full Stack Developer",
  short_bio: "I build scalable web applications focused on performance and user experience.",
  about: `I am a Senior Full Stack Developer with a passion for building beautiful, functional, and scalable web applications. 
  
  My journey started with frontend development, but my curiosity led me to master the backend ecosystem. I bridge the gap between design and engineering, ensuring every product I build is not only performant but also offers a delightful user experience.`,
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
};

export const SKILLS_DATA = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Redux",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Serverless",
      "Redis",
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      "Docker",
      "AWS",
      "CI/CD",
      "Git",
      "Terraform",
      "Jest",
    ],
  },
] as const;

export const PROJECTS_DATA = [
  {
    id: "proj_1",
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive admin dashboard for managing products, orders, and analytics. Features real-time data visualization and role-based access control.",
    tech_stack: ["Next.js", "TypeScript", "Prisma", "TanStack Query"],
    image: "/project-1.jpg", // Placeholder
    links: {
      demo: "https://example.com",
      github: "https://github.com/example/repo",
    },
  },
  {
    id: "proj_2",
    title: "SaaS Task Manager",
    description:
      "A collaborative task management tool for remote teams. Includes drag-and-drop boards, live chat, and file sharing capabilities.",
    tech_stack: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "/project-2.jpg", // Placeholder
    links: {
      demo: "https://example.com",
      github: "https://github.com/example/repo",
    },
  },
  {
    id: "proj_3",
    title: "AI Image Generator",
    description:
      "An application that uses OpenAI's DALL-E API to generate custom images based on text prompts. Optimized for speed and low latency.",
    tech_stack: ["Next.js", "OpenAI API", "Stripe", "Zustand"],
    image: "/project-3.jpg", // Placeholder
    links: {
      demo: "https://example.com",
      github: "https://github.com/example/repo",
    },
  },
] as const;
