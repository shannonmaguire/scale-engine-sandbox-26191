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
          "We went from 20+ hours a week manually updating pipeline to automated tracking with real-time visibility. The documented systems meant we could finally scale without founder dependency."
        </blockquote>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Before */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Before</div>
            <p className="text-sm text-muted-foreground">
              Manual pipeline, 20+ hrs/week founder time, forecast from memory
            </p>
          </div>

          {/* After */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-primary uppercase tracking-wider">After</div>
            <p className="text-sm font-medium">
              Automated tracking, $500K+ pipeline activated, board-ready forecast
            </p>
          </div>
        </div>

        <div className="pt-6 border-t">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-mono text-muted-foreground mb-1">Outcome</p>
              <p className="text-sm font-medium">107% growth in 12 months, systems that compound</p>
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
