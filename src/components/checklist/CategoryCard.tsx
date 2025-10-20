import { useState } from "react";
import { CategoryIcon } from "./CategoryIcon";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface CategoryCardProps {
  id: string;
  title: string;
  score: number;
  totalItems: number;
  completedItems: number;
  items: Array<{
    id: string;
    label: string;
    checked: boolean;
  }>;
}

export const CategoryCard = ({
  id,
  title,
  score,
  totalItems,
  completedItems,
  items
}: CategoryCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const getScoreColor = (score: number) => {
    if (score >= 86) return { text: "text-green-600", bg: "bg-green-500/10", border: "border-green-600" };
    if (score >= 71) return { text: "text-blue-600", bg: "bg-blue-500/10", border: "border-blue-600" };
    if (score >= 41) return { text: "text-yellow-600", bg: "bg-yellow-500/10", border: "border-yellow-600" };
    return { text: "text-red-600", bg: "bg-red-500/10", border: "border-red-600" };
  };

  const colors = getScoreColor(score);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <div className={cn(
        "border-2 rounded-lg overflow-hidden transition-all",
        colors.border,
        colors.bg
      )}>
        <CollapsibleTrigger className="w-full p-6 flex items-center justify-between hover:bg-muted/20 transition-colors group">
          <div className="flex items-center gap-4">
            <div className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center",
              colors.bg,
              colors.text
            )}>
              <CategoryIcon categoryId={id} className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h3 className="font-mono font-bold text-lg">{title}</h3>
              <p className="text-sm text-muted-foreground font-mono">
                {completedItems} of {totalItems} items complete
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className={cn("text-3xl font-mono font-bold tabular-nums", colors.text)}>
              {score}%
            </div>
            {isOpen ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            )}
          </div>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <div className="border-t border-border px-6 py-4 bg-background/50">
            <div className="space-y-2">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={cn(
                    "flex items-start gap-3 p-3 rounded text-sm",
                    item.checked && "opacity-60"
                  )}
                >
                  <div className={cn(
                    "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                    item.checked ? "bg-accent text-accent-foreground" : "border-2 border-muted"
                  )}>
                    {item.checked && "✓"}
                  </div>
                  <span className={cn(
                    "font-mono",
                    item.checked && "line-through text-muted-foreground"
                  )}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            
            {completedItems < totalItems && (
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground font-mono">
                  <span className="font-bold text-foreground">{totalItems - completedItems}</span> item
                  {totalItems - completedItems !== 1 ? 's' : ''} remaining in this category
                </p>
              </div>
            )}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};
