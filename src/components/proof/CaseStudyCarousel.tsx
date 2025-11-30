import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Building2, Target, CheckCircle, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StandardCard } from "@/components/ui/standard-card";
import { PullQuote } from "@/components/blog/PullQuote";
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

        {/* Horizontal Metrics Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Before Metric */}
          <div className="flex items-center justify-between p-4 bg-background border border-border rounded">
            <span className="text-label text-muted-foreground">Before</span>
            <span className="font-mono text-foreground font-bold">{currentStudy.beforeMetric.value}</span>
          </div>

          {/* After Metric */}
          <div className="flex items-center justify-between p-4 bg-primary/10 border border-primary/30 rounded">
            <span className="text-label text-primary font-semibold">After</span>
            <span className="font-mono font-bold text-primary">{currentStudy.afterMetric.value}</span>
          </div>

          {/* Growth */}
          <div className="flex items-center justify-center gap-2 p-4 bg-primary/10 border border-primary/30 rounded">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="font-mono font-bold text-primary">{currentStudy.growth}</span>
          </div>
        </div>

        {/* Pull Quote */}
        <div className="mb-6">
          <PullQuote>{currentStudy.pullQuote}</PullQuote>
        </div>

        {/* System & Outcomes - Side by Side */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* System Installed */}
          <div>
            <h3 className="heading-subsection mb-4">System Installed</h3>
            <ul className="space-y-3">
              {currentStudy.system.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-description leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcomes */}
          <div>
            <h3 className="heading-subsection mb-4">Outcomes</h3>
            <ul className="space-y-3">
              {currentStudy.outcomes.slice(0, 3).map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-description leading-relaxed">
                    {outcome.replace(/\*\*/g, '')}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </StandardCard>

      {/* Keyboard Navigation Hint */}
      <div className="text-center mt-6">
        <p className="text-label text-muted-foreground font-mono">Use arrow keys to navigate</p>
      </div>
    </div>;
};
