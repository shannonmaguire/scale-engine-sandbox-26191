import * as React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { CheckCircle2, AlertCircle, MinusCircle, HelpCircle } from "lucide-react";
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
  const getBorderColor = () => {
    if (!value) return "border-l-transparent";
    if (value === "yes") return "border-l-green-500";
    if (value === "partial") return "border-l-yellow-500";
    return "border-l-red-500";
  };

  const getBackgroundColor = () => {
    return "bg-card";
  };

  return (
    <div
      className={cn(
        "group relative p-5 md:p-6 rounded-lg border-2 transition-all duration-200",
        getBorderColor(),
        value ? "bg-card shadow-sm" : "bg-card border-border hover:border-primary/30 hover:shadow-sm",
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      <div className="space-y-4">
        {/* Question Label */}
        <div className="flex items-start justify-between gap-3">
          <label htmlFor={id} className="text-base font-semibold text-foreground leading-relaxed flex-1">
            {label}
          </label>
          {helpText && (
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
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
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}

        {/* Radio Group */}
        <RadioGroup
          value={value || ""}
          onValueChange={(v) => onChange(v as AssessmentAnswer)}
          disabled={disabled}
          className="flex flex-col sm:flex-row gap-3 pt-2"
        >
          {/* Yes Option */}
          <div className="flex items-center space-x-3 flex-1">
            <RadioGroupItem value="yes" id={`${id}-yes`} className="w-5 h-5" />
            <Label 
              htmlFor={`${id}-yes`}
              className="text-base font-medium cursor-pointer flex items-center gap-2 flex-1"
            >
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>Yes</span>
            </Label>
          </div>

          {/* Partial Option */}
          <div className="flex items-center space-x-3 flex-1">
            <RadioGroupItem value="partial" id={`${id}-partial`} className="w-5 h-5" />
            <Label 
              htmlFor={`${id}-partial`}
              className="text-base font-medium cursor-pointer flex items-center gap-2 flex-1"
            >
              <MinusCircle className="w-5 h-5 text-yellow-600" />
              <span>Partially</span>
            </Label>
          </div>

          {/* No Option */}
          <div className="flex items-center space-x-3 flex-1">
            <RadioGroupItem value="no" id={`${id}-no`} className="w-5 h-5" />
            <Label 
              htmlFor={`${id}-no`}
              className="text-base font-medium cursor-pointer flex items-center gap-2 flex-1"
            >
              <AlertCircle className="w-5 h-5 text-red-600" />
              <span>No</span>
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};
