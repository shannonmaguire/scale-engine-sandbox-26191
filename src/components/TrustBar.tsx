import { Shield, Award, Clock, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrustBarProps {
  variant?: "default" | "compact";
  className?: string;
}

/**
 * Trust indicator bar displaying key value propositions
 * Builds credibility and reduces friction in conversion funnel
 */
export const TrustBar = ({ variant = "default", className }: TrustBarProps) => {
  const indicators = [
    {
      icon: Shield,
      label: "Secure & Confidential",
      value: "GDPR Compliant",
    },
    {
      icon: Award,
      label: "Proven Results",
      value: "Federal + Legal Sectors",
    },
    {
      icon: Clock,
      label: "Fast Response",
      value: "24hr Guaranteed",
    },
    {
      icon: Users,
      label: "Expert Team",
      value: "15+ Years Experience",
    },
  ];

  if (variant === "compact") {
    return (
      <div className={cn("flex items-center justify-center gap-8 py-4", className)}>
        {indicators.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <item.icon className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="text-sm font-mono text-muted-foreground">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("border-t border-b border-border py-6", className)}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {indicators.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 hover-scale-sm transition-transform"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
