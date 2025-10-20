import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium font-mono uppercase tracking-wide ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // CRITICAL: bg-primary MUST always pair with text-primary-foreground (white)
        // Never use black text on burgundy backgrounds
        default: "bg-primary text-primary-foreground hover:bg-[hsl(var(--primary-hover))] hover:shadow-lg hover:shadow-primary/20",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-muted-foreground bg-transparent text-foreground hover:bg-primary/10 hover:border-primary hover:text-primary",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-primary/10 text-foreground hover:text-primary transition-all hover:scale-105",
        link: "text-foreground underline-offset-4 hover:underline normal-case hover:text-primary",
        warm: "border-2 border-warm bg-transparent text-foreground hover:bg-warm/20 hover:border-warm",
        teal: "bg-accent text-white hover:bg-[hsl(var(--accent-hover))] hover:shadow-lg hover:shadow-accent/20",
      },
      size: {
        // Standard: 32px padding horizontal, 16px vertical
        default: "px-8 py-4",
        sm: "px-6 py-3 text-xs",
        lg: "px-10 py-5 text-base",
        icon: "w-11 h-11 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
