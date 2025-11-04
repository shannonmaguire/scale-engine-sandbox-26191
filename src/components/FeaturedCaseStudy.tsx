import { StandardCard, StandardCardContent } from "@/components/ui/standard-card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export const FeaturedCaseStudy = () => {
  return (
    <StandardCard variant="bordered" className="overflow-hidden hover-lift transition-all duration-300">
      <StandardCardContent className="p-8">
        <div className="flex items-start justify-between mb-6">
          <Badge variant="secondary" className="font-mono text-xs">
            Compliance Advisory
          </Badge>
          <TrendingUp className="w-5 h-5 text-primary" />
        </div>

        <blockquote className="text-lg font-medium mb-6 leading-relaxed">
          "Pipeline administration reduced from 20+ hours weekly to automated execution. Infrastructure handoff enabled scaling independent of founder operational involvement."
        </blockquote>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Before */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Before</div>
            <p className="text-sm text-muted-foreground">
              Manual pipeline administration, 20+ hours weekly founder allocation, memory-based forecasting
            </p>
          </div>

          {/* After */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-primary uppercase tracking-wider">After</div>
            <p className="text-sm font-medium">
              Automated tracking, $500K+ pipeline activated, forecast derived from system data
            </p>
          </div>
        </div>

        <div className="pt-6 border-t">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-mono text-muted-foreground mb-1">Outcome</p>
              <p className="text-sm font-medium">107% growth over 12 months, compounding system performance</p>
            </div>
            <Link 
              to="/proof" 
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
            >
              Read Full Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </StandardCardContent>
    </StandardCard>
  );
};
