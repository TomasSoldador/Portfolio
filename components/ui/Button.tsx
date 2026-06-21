import * as React from "react";
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
          "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-primary-foreground neon-border hover:brightness-110 active:scale-95":
              variant === "primary",
            "border border-border bg-card/40 text-foreground backdrop-blur hover:border-primary/60 hover:text-primary":
              variant === "secondary",
            "border border-border bg-transparent hover:bg-secondary": variant === "outline",
            "text-muted-foreground hover:text-primary": variant === "ghost",

            "h-9 px-4 text-sm rounded-full": size === "sm",
            "h-11 px-6 text-sm rounded-full": size === "md",
            "h-13 px-8 text-base rounded-full": size === "lg",
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
