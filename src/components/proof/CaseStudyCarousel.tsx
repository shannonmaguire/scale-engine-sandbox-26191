import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CaseStudy {
  id: number;
  industry: string;
  vertical: string;
  size: string;
  timeline: string;
  humanProblem?: string;
  whatBroke: string;
  pullQuote: string;
  system: string[];
  beforeMetric: {
    label: string;
    value: string;
  };
  afterMetric: {
    label: string;
    value: string;
  };
  growth: string;
  patternRestored: string;
}

interface CaseStudyCarouselProps {
  caseStudies: CaseStudy[];
}

export const CaseStudyCarousel = ({ caseStudies }: CaseStudyCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalStudies = caseStudies.length;

  const goToPrevious = useCallback(() => {
    setCurrentIndex(prev => prev === 0 ? totalStudies - 1 : prev - 1);
  }, [totalStudies]);

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => prev === totalStudies - 1 ? 0 : prev + 1);
  }, [totalStudies]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious();
      else if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious]);

  const currentStudy = caseStudies[currentIndex];

  return (
    <div className="relative">
      {/* Mobile-friendly Navigation */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="text-sm font-mono text-muted-foreground">
            {currentIndex + 1} / {totalStudies}
          </span>
        <div className="flex gap-2 min-h-[44px] items-center">
            {caseStudies.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentIndex(index)} 
                className={`h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? "w-8 bg-primary" 
                    : "w-3 bg-border hover:bg-primary/50"
                }`} 
                aria-label={`Go to case study ${index + 1}`} 
              />
            ))}
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={goToPrevious} 
            className="h-12 w-12 md:h-10 md:w-10" 
            aria-label="Previous case study"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={goToNext} 
            className="h-12 w-12 md:h-10 md:w-10" 
            aria-label="Next case study"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Case Study Card - Mobile optimized */}
      <div className="bg-card border border-border p-6 md:p-8">
        {/* Header - stacks on mobile */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-border">
          <div>
            <div className="text-lg font-semibold text-primary mb-1">
              {currentStudy.industry}
            </div>
            <div className="text-sm text-muted-foreground">
              {currentStudy.vertical}
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            {currentStudy.timeline}
          </div>
        </div>

        {/* Human Problem - Lead with this */}
        {currentStudy.humanProblem && (
          <div className="text-base md:text-lg text-foreground mb-6 leading-relaxed">
            {currentStudy.humanProblem}
          </div>
        )}

        {/* Metrics - Mobile stacks, desktop horizontal */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-background border border-border rounded">
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Before</div>
            <div className="text-sm font-mono font-semibold">{currentStudy.beforeMetric.value}</div>
          </div>
          <div className="p-4 bg-primary/10 border border-primary/30 rounded">
            <div className="text-xs text-primary uppercase tracking-wider mb-1">After</div>
            <div className="text-sm font-mono font-bold text-primary">{currentStudy.afterMetric.value}</div>
          </div>
          <div className="p-4 bg-primary/10 border border-primary/30 rounded">
            <div className="text-xs text-primary uppercase tracking-wider mb-1">Result</div>
            <div className="text-sm font-mono font-bold text-primary">{currentStudy.growth}</div>
          </div>
        </div>

        {/* Pull Quote */}
        <div className="text-lg md:text-xl font-medium text-foreground mb-6 py-4 border-l-2 border-primary pl-4 italic">
          "{currentStudy.pullQuote}"
        </div>

        {/* Content - Mobile stacks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">What We Did</h3>
            <ul className="space-y-2">
              {currentStudy.system.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-0.5">•</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">The Result</h3>
            <p className="text-sm text-foreground leading-relaxed">
              {currentStudy.patternRestored}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation hint - hidden on mobile */}
      <div className="hidden md:block text-center mt-4">
        <p className="text-xs text-muted-foreground font-mono flex items-center justify-center gap-1">
          <ChevronLeft className="w-3 h-3" />
          <ChevronRight className="w-3 h-3" />
          <span>to navigate</span>
        </p>
      </div>
    </div>
  );
};