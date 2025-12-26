import { useState, useEffect, useRef, RefObject } from "react";
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
  quizContainerRef?: RefObject<HTMLDivElement>;
}

export const ChecklistWizard = ({ checklistId, title, categories, quizContainerRef }: ChecklistWizardProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const { checklistState, setAnswer, resetChecklist, getRawScore, getProgress, getAnswerCounts } = useChecklist();
  const navigate = useNavigate();
  const prevStepRef = useRef(currentStep);

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

  // Scroll to quiz container only when step changes
  const scrollToQuiz = () => {
    if (quizContainerRef?.current) {
      quizContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentStep < categories.length - 1) {
      setCurrentStep(currentStep + 1);
      trackEvent('assessment_step_next', { checklistId, step: currentStep + 1 });
      scrollToQuiz();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      trackEvent('assessment_step_back', { checklistId, step: currentStep - 1 });
      scrollToQuiz();
    }
  };

  const handleViewResults = () => {
    const progress = getProgress(checklistId, totalItems);
    const rawScoreValue = getRawScore(checklistId);
    
    // Detect "validation seeker" pattern: >80% yes answers indicates systems are likely fine
    // These users are seeking reassurance, not intervention
    const yesPercentage = totalItems > 0 ? (answerCounts.yes / totalItems) * 100 : 0;
    const isValidationSeeker = yesPercentage >= 80;
    const isHighPerformer = yesPercentage >= 66 && yesPercentage < 80;
    
    trackEvent('assessment_completed', {
      checklist_id: checklistId,
      score: rawScoreValue,
      answers: answerCounts,
      yes_percentage: yesPercentage,
      buyer_pattern: isValidationSeeker ? 'validation_seeker' : isHighPerformer ? 'high_performer' : 'intervention_candidate'
    });
    
    // Navigate to preview page instead of directly to results
    navigate('/assessment-preview', {
      state: {
        checklistId,
        checklistTitle: title,
        overallScore: rawScoreValue,
        answerCounts,
        checklistState,
        categoryCount: categories.length,
        buyerPattern: isValidationSeeker ? 'validation_seeker' : isHighPerformer ? 'high_performer' : 'intervention_candidate',
        yesPercentage
      }
    });
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to start over? This will clear all your answers.")) {
      resetChecklist(checklistId);
      setCurrentStep(0);
      toast.success("Assessment reset");
      trackEvent("assessment_reset", { checklistId });
      scrollToQuiz();
    }
  };

  const handleAnswerChange = (itemId: string, value: AssessmentAnswer) => {
    setAnswer(checklistId, itemId, value);
    trackEvent('assessment_answer_changed', { checklistId, itemId, value });
  };

  const allQuestionsAnswered = answeredItems === totalItems;

  return (
    <div className="border-2 border-black bg-white p-6 md:p-10">
      {/* Header */}
      <div className="mb-6 md:mb-8 pb-6 md:pb-8 border-b-2 border-black">
        <div className="text-xs md:text-sm uppercase tracking-wider text-black/60 mb-3">
          Step {currentStep + 1} of {categories.length}
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-black mb-2">
          {currentCategory.title}
        </h2>
        <div className="text-sm md:text-base text-black/70">
          {answeredItems} of {totalItems} answered
        </div>
      </div>

      {/* Questions */}
      <div className="mb-6 md:mb-8">
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
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-6 border-t-2 border-black">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 0}
            className="flex-1 sm:flex-initial min-h-[48px]"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back
          </Button>
          
          <Button
            variant="outline"
            onClick={handleReset}
            title="Start Over"
            className="min-h-[48px] min-w-[48px]"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
        </div>

        {currentStep < categories.length - 1 ? (
          <Button onClick={handleNext} className="min-h-[48px]">
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        ) : (
          <Button onClick={handleViewResults} disabled={answeredItems === 0} className="min-h-[48px]">
            <FileText className="w-4 h-4 mr-2" />
            View Results
          </Button>
        )}
      </div>
    </div>
  );
};
