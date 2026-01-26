import { Shield, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrustBadge {
  icon: typeof Shield;
  label: string;
}

const defaultBadges: TrustBadge[] = [
  { icon: Shield, label: "42 systems rebuilt" },
  { icon: TrendingUp, label: "23% avg forecast improvement" },
  { icon: Users, label: "Zero failed migrations" }
];

interface TrustIndicatorsProps {
  badges?: TrustBadge[];
  className?: string;
  variant?: "default" | "compact" | "inline";
}

export function TrustIndicators({ 
  badges = defaultBadges, 
  className,
  variant = "default"
}: TrustIndicatorsProps) {
  if (variant === "inline") {
    return (
      <div className={cn("flex flex-wrap gap-6", className)}>
        {badges.map((badge, index) => (
          <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
            <badge.icon className="w-4 h-4 text-primary" strokeWidth={2} />
            <span className="font-mono">{badge.label}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={cn("flex flex-wrap gap-4", className)}>
        {badges.map((badge, index) => (
          <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
            <badge.icon className="w-3 h-3 text-primary" strokeWidth={2} />
            <span className="font-mono">{badge.label}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("grid sm:grid-cols-3 gap-6", className)}>
      {badges.map((badge, index) => (
        <div key={index} className="flex items-center gap-3 p-4 border border-border bg-card">
          <badge.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
          <span className="font-mono text-sm text-foreground">{badge.label}</span>
        </div>
      ))}
    </div>
  );
}

// Partner/client logo placeholders
interface PartnerLogosProps {
  className?: string;
}

export function PartnerLogos({ className }: PartnerLogosProps) {
  const partners = [
    "Legal Tech SaaS",
    "Healthcare Platform", 
    "Cybersecurity Startup",
    "Compliance Software",
    "B2B Marketplace"
  ];

  return (
    <div className={cn("border-y border-border py-8", className)}>
      <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest text-center mb-6">
        Trusted by revenue leaders at
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {partners.map((partner, index) => (
          <div 
            key={index} 
            className="px-4 py-2 bg-muted/30 border border-border text-sm font-mono text-muted-foreground"
          >
            {partner}
          </div>
        ))}
      </div>
    </div>
  );
}

// Certification badges
interface CertificationBadgesProps {
  className?: string;
}

export function CertificationBadges({ className }: CertificationBadgesProps) {
  const certifications = [
    { icon: CheckCircle, label: "SOC 2 Compliant" },
    { icon: Shield, label: "GDPR Ready" },
    { icon: Award, label: "Salesforce ISV Partner" }
  ];

  return (
    <div className={cn("flex flex-wrap justify-center gap-6", className)}>
      {certifications.map((cert, index) => (
        <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
          <cert.icon className="w-4 h-4 text-accent" strokeWidth={2} />
          <span className="font-mono">{cert.label}</span>
        </div>
      ))}
    </div>
  );
}
