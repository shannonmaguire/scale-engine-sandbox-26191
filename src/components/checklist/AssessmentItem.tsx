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
    if (!value) return "bg-card";
    if (value === "yes") return "bg-green-500/5";
    if (value === "partial") return "bg-yellow-500/5";
    return "bg-red-500/5";
  };

  return (
    <div
      className={cn(
        "group relative p-4 rounded-md border-l-4 transition-all bg-card",
        getBorderColor(),
        getBackgroundColor(),
        !value && "border hover:bg-accent/30",
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      <div className="space-y-3">
        {/* Question Label */}
        <div className="flex items-start justify-between gap-3">
          <label htmlFor={id} className="text-sm font-medium text-foreground leading-relaxed flex-1">
            {label}
          </label>
          {helpText && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Help"
                  >
                    <HelpCircle className="w-4 h-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="left" className="max-w-xs">
                  <p className="text-xs">{helpText}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>

        {/* Description */}
        {description && (
          <p className="text-xs text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}

        {/* Radio Group */}
        <RadioGroup
          value={value || ""}
          onValueChange={(v) => onChange(v as AssessmentAnswer)}
          disabled={disabled}
          className="flex gap-4"
        >
          {/* Yes Option */}
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id={`${id}-yes`} />
            <Label 
              htmlFor={`${id}-yes`}
              className="text-sm font-normal cursor-pointer flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
              <span>Yes</span>
            </Label>
          </div>

          {/* Partial Option */}
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="partial" id={`${id}-partial`} />
            <Label 
              htmlFor={`${id}-partial`}
              className="text-sm font-normal cursor-pointer flex items-center gap-1.5"
            >
              <MinusCircle className="w-3.5 h-3.5 text-yellow-600" />
              <span>Partially</span>
            </Label>
          </div>

          {/* No Option */}
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id={`${id}-no`} />
            <Label 
              htmlFor={`${id}-no`}
              className="text-sm font-normal cursor-pointer flex items-center gap-1.5"
            >
              <AlertCircle className="w-3.5 h-3.5 text-red-600" />
              <span>No</span>
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};
