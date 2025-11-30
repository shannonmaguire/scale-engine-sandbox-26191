import * as React from "react";
import { cn } from "@/lib/utils";
import { HelpCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export type AssessmentAnswer = "yes" | "partial" | "no" | null;

interface AssessmentItemProps {
  id: string;
  label: string;
  description?: string;
  helpText?: string;
  value: AssessmentAnswer;
  onChange: (value: AssessmentAnswer) => void;
  disabled?: boolean;
}

export const AssessmentItem = ({
  id,
  label,
  description,
  helpText,
  value,
  onChange,
  disabled = false
}: AssessmentItemProps) => {
  return (
    <div className="py-6 md:py-8 border-b border-black/10 last:border-0">
      <div className="space-y-4 md:space-y-5">
        {/* Question Label */}
        <div className="flex items-start justify-between gap-3">
          <label htmlFor={id} className="text-base md:text-lg font-medium text-foreground leading-relaxed flex-1">
            {label}
          </label>
          {helpText && (
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center -mr-2"
                    aria-label="Help"
                  >
                    <HelpCircle className="w-5 h-5" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="left" className="max-w-xs">
                  <p className="text-sm">{helpText}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>

        {/* Description */}
        {description && (
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}

        {/* Answer Buttons - Minimal Black/White */}
        <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
          <button
            type="button"
            onClick={() => !disabled && onChange("yes")}
            disabled={disabled}
            className={cn(
              "flex-1 min-h-[48px] px-4 py-3 text-base md:text-lg font-medium transition-all",
              "border-2 border-black",
              value === "yes"
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-black/5",
              disabled && "opacity-30 cursor-not-allowed"
            )}
          >
            Yes
          </button>
          <button
            type="button"
            onClick={() => !disabled && onChange("partial")}
            disabled={disabled}
            className={cn(
              "flex-1 min-h-[48px] px-4 py-3 text-base md:text-lg font-medium transition-all",
              "border-2 border-black",
              value === "partial"
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-black/5",
              disabled && "opacity-30 cursor-not-allowed"
            )}
          >
            Partial
          </button>
          <button
            type="button"
            onClick={() => !disabled && onChange("no")}
            disabled={disabled}
            className={cn(
              "flex-1 min-h-[48px] px-4 py-3 text-base md:text-lg font-medium transition-all",
              "border-2 border-black",
              value === "no"
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-black/5",
              disabled && "opacity-30 cursor-not-allowed"
            )}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};
