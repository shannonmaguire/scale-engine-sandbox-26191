import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Building2, Target, CheckCircle, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StandardCard } from "@/components/ui/standard-card";
interface CaseStudy {
  id: number;
  industry: string;
  vertical: string;
  size: string;
  timeline: string;
  challenge: string;
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
  outcomes: string[];
  whyItWorked?: string;
}
interface CaseStudyCarouselProps {
  caseStudies: CaseStudy[];
}
export const CaseStudyCarousel = ({
  caseStudies
}: CaseStudyCarouselProps) => {
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
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious]);
  const currentStudy = caseStudies[currentIndex];
  return <div className="relative">
      {/* Navigation Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <span className="text-sm font-mono text-muted-foreground">
            Case Study {currentIndex + 1} of {caseStudies.length}
          </span>
          <div className="flex gap-1">
            {caseStudies.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`h-1.5 transition-all ${index === currentIndex ? "w-8 bg-primary" : "w-1.5 bg-border hover:bg-primary/50"}`} aria-label={`Go to case study ${index + 1}`} />)}
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={goToPrevious} className="h-10 w-10" aria-label="Previous case study">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" onClick={goToNext} className="h-10 w-10" aria-label="Next case study">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Case Study Card */}
      <StandardCard variant="bordered" className="overflow-hidden">
        {/* Case Study Header */}
        <div className="flex flex-wrap items-center gap-3 pb-5 mb-6 border-b">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-primary font-semibold">
              {currentStudy.industry}
            </span>
          </div>
          <div className="h-4 w-px bg-border" />
          <span className="font-mono text-sm text-muted-foreground">
            {currentStudy.vertical}
          </span>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="font-mono text-xs text-muted-foreground uppercase">
              {currentStudy.timeline}
            </span>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
          {/* Left Column - Context & Details */}
          <div className="space-y-6">
            {/* Challenge */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">Challenge</h3>
              <p className="text-sm leading-relaxed">
                {currentStudy.challenge}
              </p>
            </div>

            {/* System & Outcomes - Side by Side */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* System Installed */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">System Installed</h3>
                <ul className="space-y-2">
                  {currentStudy.system.slice(0, 5).map((item, idx) => <li key={idx} className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-snug">{item}</span>
                    </li>)}
                  {currentStudy.system.length > 5 && <li className="text-xs text-muted-foreground ml-6">
                      +{currentStudy.system.length - 5} more
                    </li>}
                </ul>
              </div>

              {/* Outcomes */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">Outcomes</h3>
                <ul className="space-y-2">
                  {currentStudy.outcomes.slice(0, 5).map((outcome, idx) => <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-snug">
                        {outcome.replace(/\*\*/g, '')}
                      </span>
                    </li>)}
                  {currentStudy.outcomes.length > 5 && <li className="text-xs text-muted-foreground ml-6">
                      +{currentStudy.outcomes.length - 5} more
                    </li>}
                </ul>
              </div>
            </div>

            {/* Why It Worked */}
            {currentStudy.whyItWorked && <div className="pt-5 border-t">
                <p className="text-sm italic text-muted-foreground">
                  "{currentStudy.whyItWorked}"
                </p>
              </div>}
          </div>

          {/* Right Column - Metrics (Sticky) */}
          <div className="lg:sticky lg:top-24 self-start">
            <StandardCard variant="muted" className="space-y-5 shadow-lg">
              {/* Before/After - Inline */}
              <div>
                <div className="text-center mb-3">
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    Before → After
                  </span>
                </div>
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs p-2 bg-background rounded">
                    <span className="font-mono text-muted-foreground uppercase">
                      {currentStudy.beforeMetric.label}
                    </span>
                    <span className="font-mono text-muted-foreground">
                      {currentStudy.beforeMetric.value}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs p-2 bg-primary/5 rounded border border-primary/20">
                    <span className="font-mono text-primary uppercase">
                      {currentStudy.afterMetric.label}
                    </span>
                    <span className="font-mono font-bold text-primary">
                      {currentStudy.afterMetric.value}
                    </span>
                  </div>
                </div>
              </div>

              {/* Growth Rate - Compact */}
              <div className="text-center py-3 bg-primary/5 rounded border border-primary/20">
                <div className="flex items-center justify-center gap-1.5 mb-0.5">
                  <TrendingUp className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xl font-mono font-bold text-primary">
                    {currentStudy.growth}
                  </span>
                </div>
                <div className="text-xs font-mono text-muted-foreground uppercase">
                  Growth Stage
                </div>
              </div>

              {/* Client Size - Compact */}
              <div className="text-center pt-3 border-t">
                <div className="text-xs font-mono text-muted-foreground uppercase mb-1">
                  Client Size
                </div>
                <div className="text-xs font-mono text-foreground">{currentStudy.size}</div>
              </div>
            </StandardCard>
          </div>
        </div>
      </StandardCard>

      {/* Keyboard Navigation Hint */}
      <div className="text-center mt-4">
        <p className="text-xs text-muted-foreground font-mono">Use arrow keys to navigate</p>
      </div>
    </div>;
};
