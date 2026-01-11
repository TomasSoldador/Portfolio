import * as React from "react";
import { type ClassValue } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            // Primary: White/Accent bg, black text, rounded-full, hover scale
            "bg-foreground text-background hover:scale-105 active:scale-95 shadow-xl shadow-foreground/10": variant === "primary",
            
            // Secondary: Transparent, white border, text white, rounded-full
            "border border-foreground/20 bg-transparent text-foreground hover:bg-foreground/10 hover:border-foreground/40": variant === "secondary",
            
            // Outline/Ghost variants maintained but polished
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground": variant === "outline",
            "hover:bg-accent/10 hover:text-accent": variant === "ghost",
            
            "h-9 px-4 text-sm rounded-full": size === "sm",
            "h-12 px-8 text-base rounded-full": size === "md",
            "h-14 px-10 text-lg rounded-full": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
