import * as React from "react";
import { type ClassValue } from "clsx";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card text-card-foreground shadow-sm bg-secondary/20 backdrop-blur-sm",
        className
      )}
      {...props}
    />
  );
}
