import { CategoryIcon } from "./CategoryIcon";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  id: string;
  title: string;
  completed: boolean;
}

interface ProgressStepperProps {
  steps: Step[];
  currentStep: number;
  onStepClick?: (stepIndex: number) => void;
}

export const ProgressStepper = ({ steps, currentStep, onStepClick }: ProgressStepperProps) => {
  return (
    <div className="w-full">
      {/* Desktop: Horizontal Stepper */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const isActive = index === currentStep;
            const isCompleted = step.completed;
            const isPast = index < currentStep;
            const isClickable = isPast && onStepClick;

            return (
              <div key={step.id} className="flex items-center flex-1">
                <button
                  onClick={() => isClickable && onStepClick(index)}
                  disabled={!isClickable}
                  className={cn(
                    "flex flex-col items-center gap-2 transition-all group",
                    isClickable && "cursor-pointer hover:scale-105"
                  )}
                  aria-label={`${step.title} - ${isCompleted ? 'Completed' : isActive ? 'Current' : 'Upcoming'}`}
                >
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all",
                      isActive && "border-primary bg-primary/10 scale-110",
                      isCompleted && "border-accent bg-accent text-accent-foreground",
                      !isActive && !isCompleted && "border-border bg-muted"
                    )}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      <CategoryIcon categoryId={step.id} className="w-6 h-6" />
                    )}
                  </div>
                  <span
                    className={cn(
                      "text-xs font-mono font-medium text-center max-w-[100px]",
                      isActive && "text-primary font-bold",
                      isCompleted && "text-accent",
                      !isActive && !isCompleted && "text-muted-foreground"
                    )}
                  >
                    {step.title}
                  </span>
                </button>
                
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="flex-1 h-0.5 mx-2 bg-border relative">
                    <div
                      className={cn(
                        "absolute top-0 left-0 h-full bg-accent transition-all duration-300",
                        isCompleted && "w-full",
                        !isCompleted && "w-0"
                      )}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile: Compact Progress Bar */}
      <div className="md:hidden space-y-3">
        <div className="flex items-center justify-between text-sm font-mono">
          <span className="text-muted-foreground">
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="text-primary font-bold">
            {Math.round(((currentStep + 1) / steps.length) * 100)}%
          </span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
        <div className="flex items-center gap-2 text-sm">
          <CategoryIcon categoryId={steps[currentStep].id} className="w-5 h-5 text-primary" />
          <span className="font-mono font-bold text-foreground">
            {steps[currentStep].title}
          </span>
        </div>
      </div>
    </div>
  );
};
