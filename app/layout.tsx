import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { clsx } from "clsx";
import "./globals.css";
import { PROFILE } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const SITE_URL = "https://tomassoldador.dev"; // ajusta para o teu domínio final
const TITLE = `${PROFILE.name} — ${PROFILE.role}`;
const DESCRIPTION =
  "Portfólio de Tomás Soldador, programador Full Stack. Aplicações web e móveis completas, do Stripe ao ESP32. Next.js, React, Node.js, React Native e mais.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Tomás Soldador",
    "Programador Full Stack",
    "Full Stack Developer",
    "Next.js",
    "React",
    "React Native",
    "Node.js",
    "Portugal",
  ],
  authors: [{ name: PROFILE.name }],
  creator: PROFILE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: SITE_URL,
    siteName: TITLE,
    title: TITLE,
    description: DESCRIPTION,
    // Coloca uma imagem 1200x630 em /public/og.png para partilha em redes sociais.
    images: [{ url: "/og.png", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#05070d",
  colorScheme: "dark light",
};

// Define o tema o mais cedo possível para evitar "flash" do tema errado.
const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':true;document.documentElement.classList.add(d?'dark':'light');}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={clsx(
          inter.variable,
          mono.variable,
          "font-sans antialiased bg-background text-foreground"
        )}
      >
        {children}
      </body>
    </html>
  );
}
