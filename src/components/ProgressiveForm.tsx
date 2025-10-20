import { useState, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormStep {
  id: string;
  title: string;
  description?: string;
  content: ReactNode;
  validate?: () => boolean;
}

interface ProgressiveFormProps {
  steps: FormStep[];
  onComplete: () => void;
  isSubmitting?: boolean;
}

/**
 * Multi-step progressive form with validation and progress tracking
 * Reduces form abandonment by breaking complex forms into digestible steps
 */
export const ProgressiveForm = ({
  steps,
  onComplete,
  isSubmitting = false,
}: ProgressiveFormProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;
  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleNext = () => {
    const step = steps[currentStep];
    
    // Validate current step if validation function exists
    if (step.validate && !step.validate()) {
      return;
    }

    setCompletedSteps(prev => new Set(prev).add(currentStep));

    if (isLastStep) {
      onComplete();
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (!isFirstStep) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleStepClick = (stepIndex: number) => {
    // Only allow going back to completed steps or current step
    if (stepIndex <= currentStep) {
      setCurrentStep(stepIndex);
    }
  };

  return (
    <div className="space-y-8">
      {/* Progress bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-mono text-muted-foreground">
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="text-sm font-mono font-semibold text-primary">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Step indicators */}
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = completedSteps.has(index);
          const isCurrent = index === currentStep;
          const isAccessible = index <= currentStep;

          return (
            <button
              key={step.id}
              type="button"
              onClick={() => handleStepClick(index)}
              disabled={!isAccessible}
              className={cn(
                "flex flex-col items-center gap-2 transition-all",
                isAccessible && "cursor-pointer hover-scale-sm",
                !isAccessible && "cursor-not-allowed opacity-40"
              )}
            >
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-sm transition-all",
                  isCompleted && "bg-primary text-primary-foreground",
                  isCurrent && !isCompleted && "bg-primary/20 text-primary border-2 border-primary",
                  !isCurrent && !isCompleted && "bg-muted text-muted-foreground"
                )}
              >
                {isCompleted ? "✓" : index + 1}
              </div>
              <span
                className={cn(
                  "text-xs font-mono hidden sm:block max-w-[80px] text-center",
                  isCurrent ? "text-foreground font-semibold" : "text-muted-foreground"
                )}
              >
                {step.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Current step content */}
      <div className="fade-in-up">
        <div className="mb-6">
          <h3 className="text-2xl font-mono font-bold text-foreground mb-2">
            {steps[currentStep].title}
          </h3>
          {steps[currentStep].description && (
            <p className="text-muted-foreground">
              {steps[currentStep].description}
            </p>
          )}
        </div>

        <div className="space-y-6">
          {steps[currentStep].content}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-border">
        <Button
          type="button"
          variant="outline"
          onClick={handleBack}
          disabled={isFirstStep}
          className="font-mono"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <Button
          type="button"
          onClick={handleNext}
          disabled={isSubmitting}
          className="font-mono hover-lift hover-glow"
        >
          {isLastStep ? (
            isSubmitting ? "Submitting..." : "Submit"
          ) : (
            <>
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};
