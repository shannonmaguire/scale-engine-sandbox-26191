import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChecklistAccordion } from "@/components/checklist/ChecklistAccordion";
import { useChecklist } from "@/components/checklist/ChecklistContext";
import { checklists } from "@/data/checklists";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FileText } from "lucide-react";
import { trackEvent } from "@/hooks/usePageTracking";

const SelfAssessment = () => {
  const technicalMaturityChecklist = checklists.find(c => c.id === 'technical-maturity');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const { checklistState, getProgress, getAnswerCounts } = useChecklist();
  const navigate = useNavigate();

  if (!technicalMaturityChecklist) {
    return <div>Checklist not found</div>;
  }

  const checklistId = technicalMaturityChecklist.id;
  const totalItems = technicalMaturityChecklist.categories.reduce((sum, cat) => sum + cat.items.length, 0);
  const overallProgress = getProgress(checklistId, totalItems);
  const answerCounts = getAnswerCounts(checklistId);
  const answeredItems = answerCounts.yes + answerCounts.partial + answerCounts.no;

  useEffect(() => {
    trackEvent('assessment_started', { checklistId });
  }, [checklistId]);

  const handleViewResults = () => {
    trackEvent("assessment_results_view", { checklistId, score: overallProgress });
    
    navigate('/assessment-results', {
      state: {
        checklistId,
        title: technicalMaturityChecklist.title,
        categories: technicalMaturityChecklist.categories,
        checklistState,
        overallProgress,
        answerCounts
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <SEOHead
        title="Free Technical Maturity Self-Assessment | CWT Studio"
        description="Assess your Salesforce and revenue systems maturity in 5 minutes. Get instant scoring, personalized recommendations, and a downloadable PDF report."
        keywords={[
          'Salesforce maturity assessment',
          'technical maturity checklist',
          'revenue systems assessment',
          'free Salesforce audit',
          'system readiness assessment'
        ]}
        canonicalUrl="/self-assessment"
      />
      
      <div className="container-standard py-12 md:py-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="font-mono text-4xl md:text-5xl font-semibold mb-4 text-foreground">
            Technical Maturity Assessment
          </h1>
          <p className="font-sans text-[16px] text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Answer {totalItems} questions across {technicalMaturityChecklist.categories.length} categories. Expand any category to begin.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-black/5 p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-sm text-muted-foreground">Overall Progress</span>
              <span className="font-mono text-sm font-semibold text-foreground">{answeredItems}/{totalItems} answered</span>
            </div>
            <Progress value={(answeredItems / totalItems) * 100} className="h-2" />
          </div>
        </div>

        {/* Assessment */}
        <div className="max-w-4xl mx-auto">
          <ChecklistAccordion
            checklistId={checklistId}
            categories={technicalMaturityChecklist.categories}
            expandedCategory={expandedCategory}
            onExpandedChange={setExpandedCategory}
          />
        </div>

        {/* View Results Button */}
        <div className="max-w-4xl mx-auto mt-8">
          <Button
            onClick={handleViewResults}
            disabled={answeredItems === 0}
            size="lg"
            className="w-full font-mono"
          >
            <FileText className="w-4 h-4 mr-2" />
            View Results {answeredItems > 0 && `(${answeredItems}/${totalItems} answered)`}
          </Button>
        </div>
        
        {/* Simple Footer */}
        <footer className="mt-12 text-center">
          <p className="font-sans text-xs text-muted-foreground">
            © 2025 CWT Studio · Infrastructure that compounds.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default SelfAssessment;
