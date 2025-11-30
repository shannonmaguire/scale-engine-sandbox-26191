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
          <span className="text-description font-mono text-muted-foreground">
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
        <div className="flex flex-wrap items-center gap-3 pb-6 mb-8 border-b border-border">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-primary" />
            <span className="heading-subsection text-primary">
              {currentStudy.industry}
            </span>
          </div>
          <div className="h-4 w-px bg-border" />
          <span className="text-description text-muted-foreground">
            {currentStudy.vertical}
          </span>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-label text-muted-foreground">
              {currentStudy.timeline}
            </span>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
          {/* Left Column - Context & Details */}
          <div className="space-y-8">
            {/* Challenge */}
            <div>
              <h3 className="heading-subsection mb-4">Challenge</h3>
              <p className="text-description text-foreground leading-relaxed">
                {currentStudy.challenge}
              </p>
            </div>

            {/* System & Outcomes - Side by Side */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* System Installed */}
              <div>
                <h3 className="heading-subsection mb-4">System Installed</h3>
                <ul className="space-y-3">
                  {currentStudy.system.slice(0, 5).map((item, idx) => <li key={idx} className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-description leading-relaxed">{item}</span>
                    </li>)}
                  {currentStudy.system.length > 5 && <li className="text-label text-muted-foreground ml-8">
                      +{currentStudy.system.length - 5} more
                    </li>}
                </ul>
              </div>

              {/* Outcomes */}
              <div>
                <h3 className="heading-subsection mb-4">Outcomes</h3>
                <ul className="space-y-3">
                  {currentStudy.outcomes.slice(0, 5).map((outcome, idx) => <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-description leading-relaxed">
                        {outcome.replace(/\*\*/g, '')}
                      </span>
                    </li>)}
                  {currentStudy.outcomes.length > 5 && <li className="text-label text-muted-foreground ml-8">
                      +{currentStudy.outcomes.length - 5} more
                    </li>}
                </ul>
              </div>
            </div>

            {/* Why It Worked */}
            {currentStudy.whyItWorked && <div className="pt-6 border-t border-border">
                <p className="text-description italic text-muted-foreground leading-relaxed">
                  "{currentStudy.whyItWorked}"
                </p>
              </div>}
          </div>

          {/* Right Column - Metrics (Sticky) */}
          <div className="lg:sticky lg:top-24 self-start">
            <StandardCard variant="muted" className="space-y-6 shadow-lg">
              {/* Before/After - Inline */}
              <div>
                <div className="text-center mb-4">
                  <span className="text-label text-foreground">
                    Before → After
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-description p-4 bg-background border border-border">
                    <span className="font-mono text-foreground font-semibold">
                      {currentStudy.beforeMetric.label}
                    </span>
                    <span className="font-mono text-foreground font-bold">
                      {currentStudy.beforeMetric.value}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-description p-4 bg-primary/10 border border-primary/30">
                    <span className="font-mono text-primary font-semibold">
                      {currentStudy.afterMetric.label}
                    </span>
                    <span className="font-mono font-bold text-primary">
                      {currentStudy.afterMetric.value}
                    </span>
                  </div>
                </div>
              </div>

              {/* Growth Rate - Compact */}
              <div className="text-center py-5 bg-primary/10 border border-primary/30">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <span className="heading-subsection font-mono font-bold text-primary">
                    {currentStudy.growth}
                  </span>
                </div>
                <div className="text-label text-foreground">
                  Growth Stage
                </div>
              </div>

              {/* Client Size - Compact */}
              <div className="text-center pt-5 border-t border-border">
                <div className="text-label text-foreground mb-2">
                  Client Size
                </div>
                <div className="text-description font-mono text-foreground font-bold">{currentStudy.size}</div>
              </div>
            </StandardCard>
          </div>
        </div>
      </StandardCard>

      {/* Keyboard Navigation Hint */}
      <div className="text-center mt-6">
        <p className="text-label text-muted-foreground font-mono">Use arrow keys to navigate</p>
      </div>
    </div>;
};
