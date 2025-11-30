import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChecklistCategory } from "./InteractiveChecklist";
import { useChecklist } from "./ChecklistContext";
import { AssessmentItem, AssessmentAnswer } from "./AssessmentItem";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, RotateCcw, FileText } from "lucide-react";
import { trackEvent } from "@/hooks/usePageTracking";
import { toast } from "sonner";

interface ChecklistWizardProps {
  checklistId: string;
  title: string;
  categories: ChecklistCategory[];
}

export const ChecklistWizard = ({ checklistId, title, categories }: ChecklistWizardProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const { checklistState, setAnswer, resetChecklist, getRawScore, getProgress, getAnswerCounts } = useChecklist();
  const navigate = useNavigate();

  const currentCategory = categories[currentStep];
  const totalItems = categories.reduce((sum, cat) => sum + cat.items.length, 0);
  const rawScore = getRawScore(checklistId);
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
    const progress = getProgress(checklistId, totalItems);
    const rawScoreValue = getRawScore(checklistId);
    
    trackEvent('assessment_completed', {
      checklist_id: checklistId,
      score: rawScoreValue,
      answers: answerCounts
    });
    
    // Navigate to preview page instead of directly to results
    navigate('/assessment-preview', {
      state: {
        checklistId,
        checklistTitle: title,
        overallScore: rawScoreValue,
        answerCounts,
        checklistState,
        categoryCount: categories.length
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

  const allQuestionsAnswered = answeredItems === totalItems;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-black/5 p-6 md:p-10">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="font-mono text-3xl md:text-4xl font-semibold mb-3 text-foreground">
          {title}
        </h1>
        <p className="font-sans text-sm text-muted-foreground">
          Step {currentStep + 1} of {categories.length} · {answeredItems}/{totalItems} questions answered
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="h-2 bg-black/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${(answeredItems / totalItems) * 100}%` }}
          />
        </div>
      </div>

      {/* Category */}
      <div className="mb-8">
        <h2 className="font-mono text-xl font-semibold mb-6 text-foreground">
          {currentCategory.title}
        </h2>
        
        <div className="space-y-1">
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

      {/* Navigation */}
      <div className="flex items-center justify-between gap-4 pt-6 border-t border-black/5">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 0}
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back
          </Button>
          
          <Button
            variant="outline"
            onClick={handleReset}
            title="Start Over"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
        </div>

        {currentStep < categories.length - 1 ? (
          <Button onClick={handleNext}>
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        ) : (
          <Button onClick={handleViewResults} disabled={answeredItems === 0}>
            <FileText className="w-4 h-4 mr-2" />
            View Results
          </Button>
        )}
      </div>
    </div>
  );
};
