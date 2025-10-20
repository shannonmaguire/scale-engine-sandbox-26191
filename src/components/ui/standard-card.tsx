import * as React from "react";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface StandardCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "muted" | "bordered";
  equalHeight?: boolean;
}

const StandardCard = React.forwardRef<HTMLDivElement, StandardCardProps>(
  ({ className, variant = "default", equalHeight = false, ...props }, ref) => {
    const variantStyles = {
      default: "bg-white border-2 border-border",
      muted: "bg-muted border-2 border-border",
      bordered: "bg-white border-2 border-primary/20",
    };

    return (
      <div
        ref={ref}
        className={cn(
          // Fixed padding: 32px (p-8)
          "p-8",
          // Standard border and radius
          "rounded-lg",
          // Enhanced hover effects with micro-interactions (200ms standard timing)
          "hover:border-primary hover:shadow-lg hover-elevate",
          "transition-[border-color,box-shadow] duration-200 ease-out",
          // Equal height support
          equalHeight && "h-full flex flex-col",
          // Variant styles
          variantStyles[variant],
          className
        )}
        {...props}
      />
    );
  }
);
StandardCard.displayName = "StandardCard";

const StandardCardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-4 mb-6 flex-1", className)} {...props} />
  )
);
StandardCardHeader.displayName = "StandardCardHeader";

const StandardCardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("heading-subsection", className)} {...props} />
  )
);
StandardCardTitle.displayName = "StandardCardTitle";

const StandardCardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-description", className)} {...props} />
  )
);
StandardCardDescription.displayName = "StandardCardDescription";

const StandardCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex flex-col justify-end", className)} {...props} />
);
StandardCardContent.displayName = "StandardCardContent";

const StandardCardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center mt-6 pt-6 border-t border-border", className)} {...props} />
  )
);
StandardCardFooter.displayName = "StandardCardFooter";

export { StandardCard, StandardCardHeader, StandardCardTitle, StandardCardDescription, StandardCardContent, StandardCardFooter };
