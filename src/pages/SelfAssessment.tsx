import { ChecklistWizard } from "@/components/checklist/ChecklistWizard";
import { checklists } from "@/data/checklists";
import SEOHead from "@/components/SEOHead";

const SelfAssessment = () => {
  const technicalMaturityChecklist = checklists.find(c => c.id === 'technical-maturity');

  if (!technicalMaturityChecklist) {
    return <div>Checklist not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Free Revenue Health Check | 5-Minute Self-Assessment | CWT Studio"
        description="Free 5-minute self-assessment: check your revenue systems maturity. Get instant scoring, category breakdown, and personalized recommendations."
        keywords={[
          'free revenue health check',
          'technical maturity self-assessment',
          'revenue systems quiz',
          'free systems audit',
          'system readiness check'
        ]}
        canonicalUrl="/self-assessment"
      />
      
      <div className="container-standard py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Intro Section */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-primary/30 mb-6 font-mono text-xs uppercase tracking-widest">
              <span className="text-primary font-semibold">Free 5-Minute Quiz</span>
            </div>
            <h1 className="heading-page mb-6">Revenue Health Check</h1>
            <p className="text-description max-w-2xl mx-auto mb-4">
              Quick self-assessment of your revenue systems maturity. Answer 18 questions across data quality, automation, integration, governance, reporting, and user adoption.
            </p>
            <p className="text-description max-w-2xl mx-auto text-muted-foreground">
              Takes 5 minutes. Instant score and category breakdown. No sales call required.
            </p>
          </div>

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
