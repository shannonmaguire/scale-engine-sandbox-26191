import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface PageSkeletonProps {
  className?: string;
}

export function PageSkeleton({ className }: PageSkeletonProps) {
  return (
    <div className={cn("min-h-screen animate-fade-in", className)}>
      {/* Hero skeleton */}
      <div className="section-spacing px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-6 w-32 mb-8" />
          <Skeleton className="h-16 w-3/4 mb-6" />
          <Skeleton className="h-6 w-full max-w-2xl mb-4" />
          <Skeleton className="h-6 w-2/3 max-w-xl mb-10" />
          <Skeleton className="h-12 w-48" />
        </div>
      </div>
      
      {/* Content skeleton */}
      <div className="section-spacing px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <Skeleton className="w-12 h-px" />
            <Skeleton className="h-10 w-64" />
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-border p-6 space-y-4">
                <Skeleton className="h-8 w-8" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="border border-border bg-card p-6 space-y-4">
      <Skeleton className="h-8 w-8" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  );
}

export function ListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex items-start gap-4">
          <Skeleton className="h-5 w-5 flex-shrink-0 mt-0.5" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-5 w-1/3" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
