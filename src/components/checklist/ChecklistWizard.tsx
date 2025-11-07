import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChecklistCategory } from "./InteractiveChecklist";
import { useChecklist } from "./ChecklistContext";
import { AssessmentItem, AssessmentAnswer } from "./AssessmentItem";
import { ProgressStepper } from "./ProgressStepper";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, RotateCcw, FileText, CheckCircle } from "lucide-react";
import { trackEvent } from "@/hooks/usePageTracking";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { ScoreGauge } from "./ScoreGauge";

import { Badge } from "@/components/ui/badge";

interface ChecklistWizardProps {
  checklistId: string;
  title: string;
  categories: ChecklistCategory[];
}

export const ChecklistWizard = ({ checklistId, title, categories }: ChecklistWizardProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const { checklistState, setAnswer, resetChecklist, getProgress, getAnswerCounts } = useChecklist();
  const navigate = useNavigate();

  const currentCategory = categories[currentStep];
  const totalItems = categories.reduce((sum, cat) => sum + cat.items.length, 0);
  const overallProgress = getProgress(checklistId, totalItems);
  const answerCounts = getAnswerCounts(checklistId);
  const answeredItems = answerCounts.yes + answerCounts.partial + answerCounts.no;

  // Track wizard start
  useEffect(() => {
    trackEvent('assessment_wizard_started', { checklistId });
  }, [checklistId]);

  const handleNext = () => {
    if (currentStep < categories.length - 1) {
      setCurrentStep(currentStep + 1);
      trackEvent('assessment_step_next', { checklistId, step: currentStep + 1 });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      trackEvent('assessment_step_back', { checklistId, step: currentStep - 1 });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleViewResults = () => {
    trackEvent("assessment_results_view", { checklistId, score: overallProgress });
    
    navigate('/assessment-results', {
      state: {
        checklistId,
        title,
        categories,
        checklistState,
        overallProgress,
        answerCounts
      }
    });
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to start over? This will clear all your answers.")) {
      resetChecklist(checklistId);
      setCurrentStep(0);
      toast.success("Assessment reset");
      trackEvent("assessment_reset", { checklistId });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAnswerChange = (itemId: string, value: AssessmentAnswer) => {
    setAnswer(checklistId, itemId, value);
    trackEvent('assessment_answer_changed', { checklistId, itemId, value });
  };

  const categoryAnsweredCount = currentCategory.items.filter(item => {
    const answer = checklistState[checklistId]?.[item.id];
    return answer !== null && answer !== undefined;
  }).length;

  const categoryProgress = Math.round((categoryAnsweredCount / currentCategory.items.length) * 100);

  const steps = categories.map(cat => {
    const catAnswered = cat.items.filter(item => {
      const answer = checklistState[checklistId]?.[item.id];
      return answer !== null && answer !== undefined;
    }).length;
    return {
      id: cat.id,
      title: cat.title,
      completed: catAnswered === cat.items.length
    };
  });

  const allQuestionsAnswered = answeredItems === totalItems;

  return (
    <div className="space-y-0">
        {/* Completion Badge */}
        {allQuestionsAnswered && (
          <div className="mb-6 p-4 bg-accent/10 border border-accent/20 rounded-lg animate-fade-in">
            <div className="flex items-center justify-center gap-2 text-accent-foreground">
              <CheckCircle className="w-5 h-5" />
              <span className="font-mono text-sm">✓ Saved — All questions answered</span>
            </div>
          </div>
        )}

        {/* Progress Stepper */}
        <ProgressStepper 
          steps={steps} 
          currentStep={currentStep}
          totalItems={totalItems}
          onStepClick={(step) => {
            setCurrentStep(step);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        {/* Category Content */}
        <div className="py-8 space-y-8 animate-fade-in">
          {/* Category Header */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="font-mono text-2xl md:text-3xl font-semibold text-foreground">
                {currentCategory.title}
              </h2>
              <span className="font-mono text-sm text-muted-foreground">
                {categoryAnsweredCount}/{currentCategory.items.length}
              </span>
            </div>
            {currentCategory.description && (
              <p className="font-sans text-[15px] text-muted-foreground leading-relaxed max-w-3xl">
                {currentCategory.description}
              </p>
            )}
          </div>

          {/* Questions - No extra spacing, items have their own borders */}
          <div>
            {currentCategory.items.map((item) => (
              <AssessmentItem
                key={item.id}
                id={item.id}
                label={item.label}
                description={item.description}
                helpText={item.helpText}
                value={checklistState[checklistId]?.[item.id] || null}
                onChange={(value) => handleAnswerChange(item.id, value)}
              />
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-8 pb-4 border-t border-black/5 sticky bottom-0 bg-background">
          <Button
            variant="outline"
            size="lg"
            onClick={handleBack}
            disabled={currentStep === 0}
            className="font-mono"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          {currentStep < categories.length - 1 ? (
            <Button
              variant="default"
              size="lg"
              onClick={handleNext}
              className="font-mono"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              variant="default"
              size="lg"
              onClick={handleViewResults}
              disabled={answeredItems === 0}
              className="font-mono"
            >
              <FileText className="w-4 h-4 mr-2" />
              View Results
            </Button>
          )}
        </div>
      </div>
  );
};
