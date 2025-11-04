import { useState } from "react";
import { ChecklistCategory } from "./InteractiveChecklist";
import { ChecklistWizard } from "./ChecklistWizard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ClipboardCheck } from "lucide-react";

interface AssessmentModalProps {
  checklistId: string;
  title: string;
  description?: string;
  categories: ChecklistCategory[];
  triggerText?: string;
  triggerVariant?: "default" | "outline" | "secondary" | "ghost" | "link" | "warm";
  onComplete?: (score: number) => void;
}

export const AssessmentModal = ({
  checklistId,
  title,
  description,
  categories,
  triggerText = "Take Assessment",
  triggerVariant = "default",
  onComplete
}: AssessmentModalProps) => {
  const [open, setOpen] = useState(false);

  const handleComplete = (score: number) => {
    onComplete?.(score);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={triggerVariant} size="lg">
          <ClipboardCheck className="w-4 h-4 mr-2" />
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="heading-section">{title}</DialogTitle>
          {description && (
            <DialogDescription className="text-base">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        <div className="mt-6">
          <ChecklistWizard
            checklistId={checklistId}
            title={title}
            categories={categories}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
