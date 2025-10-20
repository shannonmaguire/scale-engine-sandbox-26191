import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-in-up" | "fade-in-left" | "fade-in-right";
  delay?: number;
}

/**
 * Section component with scroll-triggered animations
 * Improves user engagement and perceived performance
 */
export const AnimatedSection = ({ 
  children, 
  className,
  animation = "fade-in-up",
  delay = 0
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref as any}
      className={cn(
        "opacity-0 transition-all duration-600",
        isVisible && `${animation} opacity-100`,
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
};
