import { ChecklistCategory } from "./InteractiveChecklist";
import { ChecklistItem } from "./ChecklistItem";
import { useChecklist } from "./ChecklistContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CategoryIcon } from "./CategoryIcon";
import { trackEvent } from "@/hooks/usePageTracking";

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
  const { checklistState, toggleItem } = useChecklist();

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
        const categoryCompleted = category.items.filter(
          item => checklistState[checklistId]?.[item.id]
        ).length;
        const categoryProgress = categoryItems > 0 ? Math.round((categoryCompleted / categoryItems) * 100) : 0;

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
                  <div className="font-mono font-bold text-base text-foreground">
                    {category.title}
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
                  <ChecklistItem
                    key={item.id}
                    id={item.id}
                    label={item.label}
                    description={item.description}
                    helpText={item.helpText}
                    checked={checklistState[checklistId]?.[item.id] || false}
                    onChange={() => {
                      toggleItem(checklistId, item.id);
                      trackEvent("assessment_item_toggle", {
                        checklistId,
                        itemId: item.id,
                        categoryId: category.id
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
