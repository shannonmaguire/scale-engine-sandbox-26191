import { useState, useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  objectFit?: "cover" | "contain" | "fill";
  aspectRatio?: string;
}

/**
 * Optimized image component with lazy loading, blur-up effect, and CLS prevention
 * Automatically loads images when they enter the viewport
 */
export const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  objectFit = "cover",
  aspectRatio,
}: OptimizedImageProps) => {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: "100px", // Increased for earlier loading
    triggerOnce: true,
  });
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Load immediately if priority
  const shouldLoad = priority || isVisible;

  useEffect(() => {
    if (!shouldLoad) return;

    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setHasError(true);
  }, [shouldLoad, src]);

  // Calculate aspect ratio for CLS prevention
  const computedAspectRatio = aspectRatio || (width && height ? `${width}/${height}` : undefined);

  if (hasError) {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-muted flex items-center justify-center",
          className
        )}
        style={{ 
          width, 
          height,
          aspectRatio: computedAspectRatio,
          contain: 'layout'
        }}
        role="img"
        aria-label={alt}
      >
        <span className="text-muted-foreground text-xs font-mono">
          Image unavailable
        </span>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      style={{ 
        width, 
        height,
        aspectRatio: computedAspectRatio,
        contain: 'layout'
      }}
    >
      {/* Blur placeholder - prevents CLS */}
      <div 
        className={cn(
          "absolute inset-0 bg-muted transition-opacity duration-300",
          isLoaded ? "opacity-0" : "opacity-100"
        )}
        style={{ contain: 'strict' }}
      />
      
      {/* Actual image */}
      {shouldLoad && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          className={cn(
            "w-full h-full transition-opacity duration-500",
            objectFit === "cover" && "object-cover",
            objectFit === "contain" && "object-contain",
            objectFit === "fill" && "object-fill",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          style={{ 
            willChange: isLoaded ? 'auto' : 'opacity',
            contentVisibility: 'auto'
          }}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
};
