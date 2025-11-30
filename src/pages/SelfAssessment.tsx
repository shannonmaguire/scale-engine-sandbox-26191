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
      
      <div className="container-standard py-8 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          {/* Intro Section */}
          <div className="mb-8 md:mb-12">
            <div className="text-xs md:text-sm uppercase tracking-wider text-black/60 mb-3 md:mb-4">
              Free 5-Minute Assessment
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Revenue Health Check</h1>
            <p className="text-base md:text-lg max-w-2xl mb-3">
              Answer 18 questions across data quality, automation, integration, governance, reporting, and user adoption.
            </p>
            <p className="text-sm md:text-base text-black/70">
              Takes 5 minutes. Instant score. No sales call required.
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
