import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Building2, Target, CheckCircle, TrendingUp, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StandardCard } from "@/components/ui/standard-card";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
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
  const goToPrevious = () => {
    setCurrentIndex(prev => prev === 0 ? caseStudies.length - 1 : prev - 1);
  };
  const goToNext = () => {
    setCurrentIndex(prev => prev === caseStudies.length - 1 ? 0 : prev + 1);
  };

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
  }, [currentIndex, caseStudies.length]);
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
        <div className="flex flex-wrap items-center gap-3 spacing-element border-b">
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

        {/* Pull Quote - Featured */}
        <div className="bg-primary/5 border-l-4 border-primary px-6 py-4 spacing-element">
          <p className="text-lg font-medium italic text-foreground">
            "{currentStudy.pullQuote}"
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-[2fr_1fr] gutter-standard">
          {/* Left Column - Context & Details */}
          <div className="space-y-6">
            {/* Challenge */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground spacing-tight">Challenge</h3>
              <p className="text-sm leading-relaxed">
                {currentStudy.challenge}
              </p>
            </div>

            {/* System & Outcomes - Side by Side */}
            <div className="grid md:grid-cols-2 gutter-standard">
              {/* System Installed */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground spacing-tight">System Installed</h3>
                <ul className="space-y-2">
                  {currentStudy.system.map((item, idx) => <li key={idx} className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-snug">{item}</span>
                    </li>)}
                </ul>
              </div>

              {/* Outcomes */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground spacing-tight">Outcomes</h3>
                <ul className="space-y-2">
                  {currentStudy.outcomes.map((outcome, idx) => <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-snug">
                        {outcome.replace(/\*\*/g, '')}
                      </span>
                    </li>)}
                </ul>
              </div>
            </div>

            {/* Why It Worked */}
            {currentStudy.whyItWorked && <div className="pt-6 border-t">
                <p className="text-sm italic text-muted-foreground">
                  "{currentStudy.whyItWorked}"
                </p>
              </div>}

            {/* CTA Button */}
            <div className="pt-6 border-t">
              <ConversionOptimizedButton 
                to="/assessment" 
                ctaName={`Proof Page - Case Study ${currentIndex + 1}`}
                location="Case Study Card"
                className="w-full sm:w-auto"
              >
                Get Similar Results
                <ArrowRight className="ml-2 h-4 w-4" />
              </ConversionOptimizedButton>
            </div>
          </div>

          {/* Right Column - Metrics (Sticky) */}
          <div className="lg:sticky lg:top-24 self-start">
            <StandardCard variant="muted" className="shadow-lg">
              {/* Before/After - Enhanced */}
              <div className="spacing-element border-b">
                <div className="text-center spacing-tight">
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    Transformation
                  </span>
                </div>
                <div className="space-y-3">
                  {/* Before State */}
                  <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                    <div className="text-xs font-mono text-muted-foreground uppercase tracking-wide mb-1">
                      Before
                    </div>
                    <div className="text-sm font-mono text-muted-foreground">
                      {currentStudy.beforeMetric.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {currentStudy.beforeMetric.label}
                    </div>
                  </div>
                  
                  {/* After State - Emphasized */}
                  <div className="bg-primary/10 rounded-lg p-4 border-2 border-primary/30">
                    <div className="text-xs font-mono text-primary uppercase tracking-wide mb-1">
                      After
                    </div>
                    <div className="text-2xl font-mono font-bold text-primary">
                      {currentStudy.afterMetric.value}
                    </div>
                    <div className="text-xs text-primary/80 mt-1">
                      {currentStudy.afterMetric.label}
                    </div>
                  </div>
                </div>
              </div>

              {/* Growth Rate - Enhanced */}
              <div className="text-center spacing-element bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg border border-primary/20 py-6">
                <div className="flex items-center justify-center gap-2 spacing-tight">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="text-3xl font-mono font-bold text-primary">
                    {currentStudy.growth}
                  </span>
                </div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Impact Level
                </div>
              </div>

              {/* Client Size */}
              <div className="text-center pt-4 border-t">
                <div className="text-xs font-mono text-muted-foreground uppercase spacing-tight">
                  Client Size
                </div>
                <div className="text-sm font-mono text-foreground">{currentStudy.size}</div>
              </div>
            </StandardCard>
          </div>
        </div>
      </StandardCard>

      {/* Keyboard Navigation Hint */}
      <div className="text-center mt-4">
        <p className="text-xs text-muted-foreground font-mono">Use arrow keys to navigate </p>
      </div>
    </div>;
};