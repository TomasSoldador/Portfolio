import * as React from "react";
import { type ClassValue } from "clsx";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className, children, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto", className)}
      {...props}
    >
      {children}
    </section>
  );
}
