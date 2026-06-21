import { Github, Linkedin, Mail } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Perfil                                                                     */
/* -------------------------------------------------------------------------- */

export const PROFILE = {
  name: "Tomás Soldador",
  role: "Programador Full Stack",
  subtitle: "Construo aplicações web e móveis completas — do Stripe ao ESP32",
  email: "tomassoldador07@gmail.com",
  // Coloca o teu CV em /public com este nome (ou muda o caminho).
  cvUrl: "/Tomas-Soldador-CV.pdf",
  socials: {
    github: "https://github.com/TomasSoldador",
    linkedin: "https://linkedin.com/in/tomassoldador",
  },
  about: [
    "Sou programador Full Stack e construo produtos reais de ponta a ponta — frontend, backend, base de dados e integrações com hardware.",
    "Tenho formação técnica em programação, com um estágio Erasmus em Itália, e já levo cerca de 2 anos a desenhar e a lançar aplicações que pessoas usam todos os dias.",
    "Sinto-me em casa tanto a integrar pagamentos com Stripe como a falar com um ESP32 por MQTT para abrir uma porta. Gosto de problemas que cruzam software e mundo físico.",
  ],
} as const;

/* -------------------------------------------------------------------------- */
/*  Navegação                                                                  */
/*  `offset` = posição aproximada (0..1) usada para fazer scroll suave na      */
/*  experiência 3D (ScrollControls).                                           */
/* -------------------------------------------------------------------------- */

export const NAVIGATION_LINKS = [
  { label: "Início", href: "#home", offset: 0 },
  { label: "Sobre", href: "#about", offset: 0.139 },
  { label: "Stack", href: "#skills", offset: 0.278 },
  { label: "Projetos", href: "#projects", offset: 0.444 },
  { label: "Contacto", href: "#contact", offset: 0.806 },
] as const;

/* -------------------------------------------------------------------------- */
/*  Stack / Tecnologias                                                        */
/* -------------------------------------------------------------------------- */

export const SKILLS_DATA = [
  {
    category: "Core",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "Node.js",
      "Express",
    ],
  },
  {
    category: "Backend & Dados",
    items: ["Django", "Python", "MySQL", "PostgreSQL", "Stripe", "Git"],
  },
] as const;

// Secção secundária: tecnologias com que tenho familiaridade.
export const FAMILIARITY_DATA = ["Docker", "AWS", "MQTT / ESP32"] as const;

// Lista plana usada para os "chips" a flutuar à volta do PC 3D.
export const FLOATING_TECH = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Stripe",
  "PostgreSQL",
  "React Native",
  "Django",
  "MQTT",
] as const;

/* -------------------------------------------------------------------------- */
/*  Projetos                                                                   */
/*  image: coloca o screenshot/GIF em /public/projects/<ficheiro>.            */
/*  Enquanto o ficheiro não existir, é mostrado um placeholder elegante.       */
/* -------------------------------------------------------------------------- */

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  image: string;
  accent: string;
  links: { demo?: string; github?: string };
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "leadshunter",
    title: "LeadsHunter",
    tagline: "SaaS de geração de leads com IA",
    description:
      "Plataforma que pesquisa sites segundo os critérios do cliente, recolhe contactos e envia emails de prospeção automaticamente. Monetização por créditos e subscrição via Stripe.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "IA", "Stripe"],
    image: "/projects/leadshunter.png",
    accent: "#22d3ee",
    links: { demo: "", github: "" },
  },
  {
    id: "sushi-takeaway",
    title: "Sushi Take-Away",
    tagline: "Encomendas online com entregas automatizadas",
    description:
      "Plataforma de encomendas com pagamentos Stripe e entregas automatizadas através da integração com a API da Bolt/Uber. Do carrinho à porta do cliente sem intervenção manual.",
    stack: ["React", "Node.js", "Stripe", "Bolt/Uber API"],
    image: "/projects/sushi-takeaway.png",
    accent: "#34d399",
    links: { demo: "", github: "" },
  },
  {
    id: "app-ginasios",
    title: "App de Ginásios",
    tagline: "Reserva e acesso por telemóvel (IoT)",
    description:
      "Aplicação móvel de reserva e acesso. A app comunica por MQTT com um ESP32 ligado a uma fechadura magnética, abrindo a porta do ginásio diretamente a partir do telemóvel.",
    stack: ["React Native", "Node.js", "MQTT", "ESP32"],
    image: "/projects/app-ginasios.png",
    accent: "#a78bfa",
    links: { demo: "", github: "" },
  },
  {
    id: "app-alojamentos",
    title: "App de Alojamentos",
    tagline: "Acesso self check-in estilo Airbnb",
    description:
      "O mesmo sistema de reserva e acesso por telemóvel aplicado a alojamentos de curta duração. Check-in autónomo com abertura de porta remota e gestão de reservas.",
    stack: ["React Native", "Node.js", "MQTT", "ESP32"],
    image: "/projects/app-alojamentos.png",
    accent: "#f472b6",
    links: { demo: "", github: "" },
  },
  {
    id: "app-seguranca",
    title: "Segurança a Pedido",
    tagline: "Marketplace de seguranças estilo Uber",
    description:
      "Modelo tipo Uber: utilizadores pedem seguranças em situações de risco e as empresas registam e gerem as suas equipas. Pagamentos via Stripe com divisão de receita por comissão.",
    stack: ["React Native", "Node.js", "PostgreSQL", "Stripe Connect"],
    image: "/projects/app-seguranca.png",
    accent: "#fbbf24",
    links: { demo: "", github: "" },
  },
];

/* -------------------------------------------------------------------------- */
/*  Links sociais (com ícones) — usados no Footer e Contacto                   */
/* -------------------------------------------------------------------------- */

export const SOCIAL_LINKS = [
  { label: "Email", href: `mailto:${PROFILE.email}`, icon: Mail },
  { label: "GitHub", href: PROFILE.socials.github, icon: Github },
  { label: "LinkedIn", href: PROFILE.socials.linkedin, icon: Linkedin },
] as const;
