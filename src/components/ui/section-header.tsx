import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  muted?: boolean;
}

export function SectionHeader({ 
  title, 
  description, 
  className,
  align = "left",
  muted = false
}: SectionHeaderProps) {
  return (
    <div className={cn(
      align === "center" ? "text-center mb-10" : "mb-10",
      className
    )}>
      {align === "left" && (
        <div className="flex items-center gap-4 mb-0">
          <div className={cn(
            "w-12 h-px",
            muted ? "bg-muted-foreground/30" : "bg-primary"
          )} />
          <h2 className={cn(
            "heading-section",
            muted && "text-muted-foreground"
          )}>
            {title}
          </h2>
        </div>
      )}
      
      {align === "center" && (
        <h2 className={cn(
          "heading-section mb-6",
          muted && "text-muted-foreground"
        )}>
          {title}
        </h2>
      )}
      
      {description && (
        <p className={cn(
          "text-description text-muted-foreground mt-4",
          align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
