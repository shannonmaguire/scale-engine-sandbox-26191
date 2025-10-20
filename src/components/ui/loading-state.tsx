import { cn } from "@/lib/utils";

interface LoadingStateProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "spinner" | "dots" | "pulse";
}

/**
 * Elite loading state component with multiple variants
 * Optimized for performance and accessibility
 */
export const LoadingState = ({ 
  className, 
  size = "md",
  variant = "spinner" 
}: LoadingStateProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };

  if (variant === "dots") {
    return (
      <div className={cn("flex items-center justify-center gap-1", className)} role="status" aria-label="Loading">
        <div className={cn("bg-primary rounded-full animate-bounce", sizeClasses[size])} style={{ animationDelay: "0ms" }} />
        <div className={cn("bg-primary rounded-full animate-bounce", sizeClasses[size])} style={{ animationDelay: "150ms" }} />
        <div className={cn("bg-primary rounded-full animate-bounce", sizeClasses[size])} style={{ animationDelay: "300ms" }} />
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  if (variant === "pulse") {
    return (
      <div className={cn("flex items-center justify-center", className)} role="status" aria-label="Loading">
        <div className={cn("bg-primary rounded-full animate-pulse", sizeClasses[size])} />
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center justify-center", className)} role="status" aria-label="Loading">
      <div 
        className={cn(
          "border-2 border-primary border-t-transparent rounded-full animate-spin",
          sizeClasses[size]
        )}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular";
}

/**
 * Skeleton loader for content placeholders
 */
export const Skeleton = ({ 
  className, 
  variant = "rectangular",
  ...props 
}: SkeletonProps) => {
  const variantClasses = {
    text: "h-4 w-full rounded",
    circular: "rounded-full",
    rectangular: "rounded-md"
  };

  return (
    <div
      className={cn(
        "animate-pulse bg-muted",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
};
