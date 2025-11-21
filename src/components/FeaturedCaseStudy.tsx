import { StandardCard, StandardCardContent } from "@/components/ui/standard-card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
export const FeaturedCaseStudy = () => {
  return (
    <StandardCard variant="bordered" className="overflow-hidden hover-lift transition-all duration-300 border-primary/20">
      <StandardCardContent className="p-6 sm:p-8">
        <div className="mb-6">
          <Badge variant="secondary" className="font-mono text-xs">
            Compliance Advisory
          </Badge>
        </div>

        <blockquote className="text-base sm:text-lg font-medium mb-8 leading-relaxed text-foreground">
          "Pipeline administration reduced from 20+ hours weekly to automated execution. Infrastructure handoff enabled scaling independent of founder operational involvement."
        </blockquote>

        <div className="grid sm:grid-cols-2 gap-6 mb-8 pb-8 border-b">
          {/* Before */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Before</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Manual pipeline administration, 20+ hours weekly founder allocation, memory-based forecasting
            </p>
          </div>

          {/* After */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-primary uppercase tracking-wider">After</div>
            <p className="text-sm font-medium leading-relaxed">
              Automated tracking, $500K+ pipeline activated, forecast derived from system data
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Outcome</p>
            <p className="text-sm font-medium">107% growth over 12 months, compounding system performance</p>
          </div>
          <Link 
            to="/proof" 
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all whitespace-nowrap"
          >
            Read Full Story
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </StandardCardContent>
    </StandardCard>
  );
};