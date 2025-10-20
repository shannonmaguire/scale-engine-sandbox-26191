import { useState, useEffect } from "react";
import { ChecklistCategory } from "./InteractiveChecklist";
import { ChecklistItem } from "./ChecklistItem";
import { ChecklistScore } from "./ChecklistScore";
import { CategoryCard } from "./CategoryCard";
import { ProgressStepper } from "./ProgressStepper";
import { ResultsHero } from "./ResultsHero";
import { useChecklist } from "./ChecklistContext";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Download, Mail, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { trackEvent } from "@/hooks/usePageTracking";
import { generateAssessmentPDF } from "@/lib/pdf-generator";

interface ChecklistWizardProps {
  checklistId: string;
  title: string;
  categories: ChecklistCategory[];
  onComplete?: (score: number) => void;
}

export const ChecklistWizard = ({
  checklistId,
  title,
  categories,
  onComplete
}: ChecklistWizardProps) => {
  const { checklistState, toggleItem, resetChecklist, getProgress } = useChecklist();
  const [currentStep, setCurrentStep] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const totalItems = categories.reduce((sum, cat) => sum + cat.items.length, 0);
  const overallProgress = getProgress(checklistId, totalItems);
  const completedItems = Object.values(checklistState[checklistId] || {}).filter(Boolean).length;

  const currentCategory = categories[currentStep];
  const categoryItems = currentCategory?.items.length || 0;
  const categoryCompleted = currentCategory?.items.filter(
    item => checklistState[checklistId]?.[item.id]
  ).length || 0;

  // Create steps array for ProgressStepper
  const steps = categories.map((cat, idx) => {
    const catCompleted = cat.items.filter(
      item => checklistState[checklistId]?.[item.id]
    ).length;
    return {
      id: cat.id,
      title: cat.title,
      completed: idx < currentStep || (idx === currentStep && catCompleted === cat.items.length)
    };
  });

  // Track wizard start
  useEffect(() => {
    trackEvent("assessment_wizard_started", { checklistId });
  }, [checklistId]);

  // Save current step to localStorage
  useEffect(() => {
    const wizardState = {
      currentStep,
      lastUpdated: new Date().toISOString(),
      completed: showResults
    };
    localStorage.setItem(`wizard_${checklistId}`, JSON.stringify(wizardState));
  }, [currentStep, showResults, checklistId]);

  // Load saved step on mount
  useEffect(() => {
    const saved = localStorage.getItem(`wizard_${checklistId}`);
    if (saved) {
      try {
        const { currentStep: savedStep, completed } = JSON.parse(saved);
        if (!completed && savedStep !== undefined) {
          setCurrentStep(savedStep);
          toast.info("Resuming your previous session");
        }
      } catch (e) {
        console.error("Failed to load wizard state", e);
      }
    }
  }, [checklistId]);

  const handleNext = () => {
    if (currentStep < categories.length - 1) {
      setCurrentStep(prev => prev + 1);
      trackEvent("assessment_slide_completed", { 
        checklistId, 
        categoryId: currentCategory.id,
        categoryProgress: Math.round((categoryCompleted / categoryItems) * 100)
      });
    } else {
      setShowResults(true);
      trackEvent("assessment_wizard_completed", { 
        checklistId, 
        score: overallProgress 
      });
      onComplete?.(overallProgress);
    }
  };

  const handleBack = () => {
    if (showResults) {
      setShowResults(false);
    } else if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSkipToResults = () => {
    setShowResults(true);
    trackEvent("assessment_wizard_skipped_to_results", { 
      checklistId, 
      fromStep: currentStep 
    });
  };

  const handleReset = () => {
    resetChecklist(checklistId);
    setCurrentStep(0);
    setShowResults(false);
    localStorage.removeItem(`wizard_${checklistId}`);
    toast.success("Assessment reset successfully");
    trackEvent("assessment_wizard_reset", { checklistId });
  };

  const generatePDF = async () => {
    try {
      await generateAssessmentPDF({
        title,
        checklistId,
        categories,
        checklistState,
        overallProgress
      });
      toast.success("PDF downloaded successfully");
      trackEvent("assessment_results_pdf_download", { checklistId, score: overallProgress });
    } catch (error) {
      console.error("PDF generation failed:", error);
      toast.error("Failed to generate PDF. Please try again.");
    }
  };

  const handleEmailCapture = () => {
    toast.info("Email results feature coming soon");
    trackEvent("assessment_results_email_capture", { checklistId, score: overallProgress });
  };

  if (showResults) {
    return (
      <div className="space-y-12 animate-fade-in">
        {/* Results Hero */}
        <ResultsHero 
          score={overallProgress} 
          totalItems={totalItems}
          completedItems={completedItems}
        />

        {/* Category Breakdown */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="heading-subsection">Category Breakdown</h3>
            <p className="text-muted-foreground">Expand each category to see your detailed responses</p>
          </div>
          
          <div className="space-y-4">
            {categories.map(category => {
              const catItems = category.items.length;
              const catAnswers = category.items.map(item => checklistState[checklistId]?.[item.id]);
              const catScore = catAnswers.reduce((sum, answer) => {
                if (answer === "yes") return sum + 100;
                if (answer === "partial") return sum + 50;
                return sum;
              }, 0);
              const catProgress = catItems > 0 ? Math.round(catScore / (catItems * 100) * 100) : 0;
              const catCompleted = catAnswers.filter(a => a === "yes").length;

              return (
                <CategoryCard
                  key={category.id}
                  id={category.id}
                  title={category.title}
                  score={catProgress}
                  totalItems={catItems}
                  completedItems={catCompleted}
                  items={category.items.map(item => ({
                    id: item.id,
                    label: item.label,
                    checked: (checklistState[checklistId]?.[item.id] === "yes") || false
                  }))}
                />
              );
            })}
          </div>
        </div>

        {/* Next Steps Recommendation */}
        <div className="p-8 bg-primary/5 border-2 border-primary/20 rounded-lg space-y-4">
          <h3 className="heading-subsection text-primary">Next Steps</h3>
          <div className="space-y-3 text-foreground">
            {overallProgress >= 86 && (
              <>
                <p className="font-mono">Your systems are operating at a high level. Consider:</p>
                <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                  <li>Fractional ops support to maintain and scale your current excellence</li>
                  <li>Advanced automation to reduce manual work even further</li>
                  <li>Strategic consulting for next-phase growth planning</li>
                </ul>
              </>
            )}
            {overallProgress >= 71 && overallProgress < 86 && (
              <>
                <p className="font-mono">You have a strong foundation. To reach the next level:</p>
                <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                  <li>Address the specific gaps identified in your lower-scoring categories</li>
                  <li>Our 2-week sprint can tackle 3-5 of your highest-impact opportunities</li>
                  <li>Focus on automation and integration improvements</li>
                </ul>
              </>
            )}
            {overallProgress >= 41 && overallProgress < 71 && (
              <>
                <p className="font-mono">You're on the right track. Recommended actions:</p>
                <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                  <li>Download our resource library to address common gaps</li>
                  <li>Schedule a free consultation to prioritize improvements</li>
                  <li>Start with quick wins in data quality and basic automation</li>
                </ul>
              </>
            )}
            {overallProgress < 41 && (
              <>
                <p className="font-mono">Your systems need immediate attention. We recommend:</p>
                <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                  <li>Book a free 30-minute assessment call to identify critical issues</li>
                  <li>Focus first on data quality and security fundamentals</li>
                  <li>Consider a technical audit to build a prioritized roadmap</li>
                </ul>
              </>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button onClick={generatePDF} variant="default" size="lg">
              <Download className="w-5 h-5 mr-2" />
              Download PDF Report
            </Button>
            <Button onClick={handleEmailCapture} variant="outline" size="lg">
              <Mail className="w-5 h-5 mr-2" />
              Email Results (Coming Soon)
            </Button>
          </div>

          <div className="flex gap-3 justify-center">
            <Button onClick={handleBack} variant="ghost" size="sm">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Review Answers
            </Button>
            <Button onClick={handleReset} variant="ghost" size="sm">
              <RotateCcw className="w-4 h-4 mr-2" />
              Start Over
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Enhanced Progress Stepper */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm z-10 py-6 -mx-6 px-6 border-b border-border">
        <ProgressStepper 
          steps={steps} 
          currentStep={currentStep}
          onStepClick={(stepIndex) => {
            if (stepIndex < currentStep) {
              setCurrentStep(stepIndex);
            }
          }}
        />
      </div>

      {/* Current Category Slide with Animation */}
      <div className="space-y-8 animate-slide-in-left" key={currentCategory.id}>
        {/* Category Header */}
        <div className="space-y-4 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent font-mono text-xs font-bold uppercase tracking-wide">
            Category {currentStep + 1} of {categories.length}
          </div>
          <h2 className="heading-section">{currentCategory.title}</h2>
          {currentCategory.description && (
            <p className="text-description">{currentCategory.description}</p>
          )}
          
          {/* Real-time Progress for Current Category */}
          <div className="inline-flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
            <div className="text-2xl font-mono font-bold text-primary tabular-nums">
              {categoryCompleted}/{categoryItems}
            </div>
            <div className="text-sm text-muted-foreground">
              <div>items completed</div>
              <div className="font-mono font-bold text-foreground">
                {Math.round((categoryCompleted / categoryItems) * 100)}% done
              </div>
            </div>
          </div>
        </div>

        {/* Category Items */}
        <div className="space-y-4">
          {currentCategory.items.map((item, index) => (
            <div 
              key={item.id}
              className="animate-slide-in-left"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ChecklistItem
                id={item.id}
                label={item.label}
                description={item.description}
                helpText={item.helpText}
                checked={(checklistState[checklistId]?.[item.id] === "yes") || false}
                onChange={() => {
                  toggleItem(checklistId, item.id);
                  trackEvent("assessment_item_toggle", { 
                    checklistId, 
                    itemId: item.id,
                    categoryId: currentCategory.id
                  });
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation - Fortune 500 Aligned */}
      <div className="border-t border-border bg-background">
        <div className="container-standard py-8">
          <div className="grid grid-cols-12 gap-6 items-center">
            {/* Back Navigation */}
            <div className="col-span-12 md:col-span-3">
              <Button
                onClick={handleBack}
                variant="outline"
                size="lg"
                disabled={currentStep === 0}
                className="w-full justify-start"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                <span className="hidden sm:inline">Back</span>
                <span className="sm:hidden">Previous</span>
              </Button>
            </div>

            {/* Center Helper Text */}
            <div className="hidden md:flex md:col-span-6 flex-col items-center justify-center text-center gap-1">
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Step {currentStep + 1} of {categories.length}
              </div>
              <button
                onClick={handleSkipToResults}
                className="text-xs font-mono text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
              >
                Skip to Results
              </button>
            </div>

            {/* Primary Action */}
            <div className="col-span-12 md:col-span-3">
              <Button 
                onClick={handleNext} 
                variant="default" 
                size="lg"
                className="w-full justify-end"
              >
                {currentStep < categories.length - 1 ? (
                  <>
                    <span className="hidden sm:inline">Next Category</span>
                    <span className="sm:hidden">Next</span>
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </>
                ) : (
                  <>
                    View Results
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Progress Indicator */}
          <div className="md:hidden mt-6 flex items-center justify-between text-xs font-mono">
            <span className="text-muted-foreground">
              Step {currentStep + 1}/{categories.length}
            </span>
            <button
              onClick={handleSkipToResults}
              className="text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
            >
              Skip to Results →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
