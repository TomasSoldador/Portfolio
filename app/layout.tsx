import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "John Doe | Full Stack Developer",
  description: "Portfolio of John Doe, a Senior Full Stack Developer demonstrating technical excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={clsx(inter.variable, "antialiased bg-background text-foreground")}>
        {children}
      </body>
    </html>
  );
}
