import * as React from "react";
import { cn } from "@/lib/utils";
export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "standard" | "muted";
  noPadding?: boolean;
  container?: boolean;
}
const Section = React.forwardRef<HTMLElement, SectionProps>(({
  className,
  variant = "standard",
  noPadding = false,
  container = true,
  children,
  ...props
}, ref) => {
  const variantStyles = {
    standard: "bg-background",
    muted: "bg-muted"
  };
  return <section ref={ref} className={cn(
  // Standard section spacing: 80px (py-20)
  !noPadding && "section-spacing",
  // Background variant
  variantStyles[variant], className)} {...props}>
        {container ? <div className="container-standard">
            {children}
          </div> : children}
      </section>;
});
Section.displayName = "Section";
export { Section };