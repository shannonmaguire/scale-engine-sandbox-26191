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
import { EmailCaptureModal } from "./EmailCaptureModal";
import { Badge } from "@/components/ui/badge";

interface ChecklistWizardProps {
  checklistId: string;
  title: string;
  categories: ChecklistCategory[];
}

export const ChecklistWizard = ({ checklistId, title, categories }: ChecklistWizardProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const { checklistState, setAnswer, resetChecklist, getProgress, getAnswerCounts, getEmail, setEmail } = useChecklist();
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
    // Check if email already exists
    const existingEmail = getEmail(checklistId);
    if (existingEmail) {
      // Already have email, go straight to results
      navigateToResults(existingEmail);
    } else {
      // Show email capture modal
      setShowEmailModal(true);
    }
  };

  const navigateToResults = (email?: string) => {
    trackEvent("assessment_results_view", { checklistId, score: overallProgress, hasEmail: !!email });
    
    navigate('/assessment-results', {
      state: {
        checklistId,
        title,
        categories,
        checklistState,
        overallProgress,
        answerCounts,
        email
      }
    });
  };

  const handleEmailSubmit = (email: string) => {
    setEmail(checklistId, email);
    setShowEmailModal(false);
    toast.success("We'll email you a copy of your report!");
    trackEvent('assessment_email_captured', { checklistId });
    navigateToResults(email);
  };

  const handleEmailSkip = () => {
    setShowEmailModal(false);
    toast.info("Viewing results without email copy");
    trackEvent('assessment_email_skipped', { checklistId });
    navigateToResults();
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
    <>
      <EmailCaptureModal
        open={showEmailModal}
        onEmailSubmit={handleEmailSubmit}
        onSkip={handleEmailSkip}
      />
      <div className="space-y-8">
        {/* Completion Badge */}
        {allQuestionsAnswered && (
          <Card className="p-4 bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-900">
            <div className="flex items-center justify-center gap-2 text-green-700 dark:text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">All questions answered! Click "View Results" to see your full report.</span>
            </div>
          </Card>
        )}

        {/* Compact Score Header */}
        <Card className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <ScoreGauge score={overallProgress} size="sm" showLabel={false} animated={false} />
              <div className="text-center md:text-left">
                <div className="text-sm font-mono text-muted-foreground">
                  {answeredItems} / {totalItems} answered
                </div>
                <div className="flex gap-3 text-xs mt-1">
                  <span className="text-green-600 font-mono">{answerCounts.yes} Yes</span>
                  <span className="text-yellow-600 font-mono">{answerCounts.partial} Partial</span>
                  <span className="text-red-600 font-mono">{answerCounts.no} No</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleReset}>
                <RotateCcw className="w-4 h-4 mr-2" />
                Start Over
              </Button>
              <Button 
                variant={allQuestionsAnswered ? "default" : "secondary"}
                size="sm" 
                onClick={handleViewResults}
                disabled={answeredItems === 0}
                className={allQuestionsAnswered ? "shadow-lg" : ""}
              >
                <FileText className="w-4 h-4 mr-2" />
                View Results
              </Button>
            </div>
          </div>
        </Card>

        {/* Progress Stepper */}
        <ProgressStepper 
          steps={steps} 
          currentStep={currentStep}
          onStepClick={(step) => {
            setCurrentStep(step);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        {/* Category Content */}
        <div className="space-y-6">
          {/* Category Header */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {currentCategory.title}
              </h2>
              <span className="text-sm font-mono text-muted-foreground">
                {categoryAnsweredCount} / {currentCategory.items.length}
              </span>
            </div>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              {currentCategory.description}
            </p>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${categoryProgress}%` }}
              />
            </div>
          </div>

          {/* Questions */}
          <div className="space-y-4">
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
        <div className="flex justify-between items-center pt-6 border-t border-border sticky bottom-0 bg-background py-4 z-10">
          <Button
            variant="outline"
            size="lg"
            onClick={handleBack}
            disabled={currentStep === 0}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          {currentStep < categories.length - 1 ? (
            <Button
              variant="default"
              size="lg"
              onClick={handleNext}
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              variant={allQuestionsAnswered ? "default" : "secondary"}
              size="lg"
              onClick={handleViewResults}
              disabled={answeredItems === 0}
              className={allQuestionsAnswered ? "shadow-lg" : ""}
            >
              <FileText className="w-4 h-4 mr-2" />
              View Results
            </Button>
          )}
        </div>
      </div>
    </>
  );
};
