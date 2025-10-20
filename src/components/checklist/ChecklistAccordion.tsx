import { ChecklistCategory } from "./InteractiveChecklist";
import { AssessmentItem, AssessmentAnswer } from "./AssessmentItem";
import { useChecklist } from "./ChecklistContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CategoryIcon } from "./CategoryIcon";
import { trackEvent } from "@/hooks/usePageTracking";
import { Badge } from "@/components/ui/badge";

interface ChecklistAccordionProps {
  checklistId: string;
  categories: ChecklistCategory[];
  expandedCategory: string | null;
  onExpandedChange: (categoryId: string | null) => void;
}

export const ChecklistAccordion = ({
  checklistId,
  categories,
  expandedCategory,
  onExpandedChange
}: ChecklistAccordionProps) => {
  const { checklistState, setAnswer, getProgress: calculateProgress } = useChecklist();

  return (
    <Accordion
      type="single"
      collapsible
      value={expandedCategory || undefined}
      onValueChange={onExpandedChange}
      className="space-y-2"
    >
      {categories.map((category, index) => {
        const categoryItems = category.items.length;
        const categoryAnswers = category.items.map(item => checklistState[checklistId]?.[item.id]);
        const unansweredInCategory = categoryAnswers.filter(a => !a).length;
        
        // Calculate weighted progress for this category
        const categoryScore = categoryAnswers.reduce((sum, answer) => {
          if (answer === "yes") return sum + 100;
          if (answer === "partial") return sum + 50;
          return sum;
        }, 0);
        const categoryProgress = categoryItems > 0 ? Math.round(categoryScore / (categoryItems * 100) * 100) : 0;

        return (
          <AccordionItem
            key={category.id}
            value={category.id}
            className="border-2 border-border rounded-lg overflow-hidden bg-card"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-4 w-full">
                {/* Icon */}
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CategoryIcon categoryId={category.id} className="w-5 h-5 text-primary" />
                </div>

                {/* Title */}
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2">
                    <div className="font-mono font-bold text-base text-foreground">
                      {category.title}
                    </div>
                    {unansweredInCategory > 0 && (
                      <Badge variant="outline" className="text-xs">
                        {unansweredInCategory} unanswered
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Progress Percentage */}
                <div className="text-right">
                  <div className="text-2xl font-mono font-bold text-foreground tabular-nums">
                    {categoryProgress}%
                  </div>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="px-6 py-6 bg-background">
              <div className="space-y-3">
                {category.items.map((item) => (
                  <AssessmentItem
                    key={item.id}
                    id={item.id}
                    label={item.label}
                    description={item.description}
                    helpText={item.helpText}
                    value={checklistState[checklistId]?.[item.id] || null}
                    onChange={(value: AssessmentAnswer) => {
                      setAnswer(checklistId, item.id, value);
                      trackEvent("assessment_answer_changed", {
                        checklistId,
                        itemId: item.id,
                        categoryId: category.id,
                        answer: value
                      });
                    }}
                  />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
