import { ChecklistWizard } from "@/components/checklist/ChecklistWizard";
import { checklists } from "@/data/checklists";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { useChecklist } from "@/components/checklist/ChecklistContext";
import { AlertCircle, Clock, FileText } from "lucide-react";

const SelfAssessment = () => {
  const technicalMaturityChecklist = checklists.find(c => c.id === 'technical-maturity');
  const { checklistState, resetChecklist } = useChecklist();
  const hasExistingProgress = technicalMaturityChecklist && 
    Object.keys(checklistState[technicalMaturityChecklist.id] || {}).length > 0;

  if (!technicalMaturityChecklist) {
    return <div>Checklist not found</div>;
  }

  const handleStartFresh = () => {
    if (confirm("This will clear all your current answers. Are you sure?")) {
      resetChecklist(technicalMaturityChecklist.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
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
      
      <div className="container-standard py-8 md:py-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h1 className="heading-page mb-4 md:mb-6">Technical Maturity Assessment</h1>
          <p className="text-description mb-6">
            Evaluate your revenue systems through 42 questions across 7 categories. Get instant scoring, personalized recommendations, and a downloadable report.
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>~5 minutes</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <FileText className="w-4 h-4" />
              <span>42 questions</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <AlertCircle className="w-4 h-4" />
              <span>Instant results</span>
            </div>
          </div>

          {hasExistingProgress && (
            <div className="mt-6 p-4 bg-accent/10 border border-accent rounded-lg">
              <p className="text-sm font-medium text-foreground mb-2">
                Continue where you left off?
              </p>
              <p className="text-xs text-muted-foreground mb-3">
                We found your previous progress. You can continue or start fresh.
              </p>
              <Button variant="outline" size="sm" onClick={handleStartFresh}>
                Start Fresh
              </Button>
            </div>
          )}
        </div>

        {/* Wizard */}
        <div className="max-w-4xl mx-auto">
          <ChecklistWizard
            checklistId={technicalMaturityChecklist.id}
            title={technicalMaturityChecklist.title}
            categories={technicalMaturityChecklist.categories}
          />
        </div>
      </div>
    </div>
  );
};

export default SelfAssessment;
