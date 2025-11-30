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
        <div className="max-w-4xl mx-auto">
          {/* Intro Section */}
          <div className="mb-12 text-center">
            <h1 className="heading-page mb-6">Revenue Systems Assessment</h1>
            <p className="text-description max-w-2xl mx-auto mb-4">
              Answer 18 questions to evaluate your technical maturity across data quality, automation, integration, governance, reporting, and user adoption.
            </p>
            <p className="text-description max-w-2xl mx-auto text-muted-foreground">
              Takes 5 minutes. You'll receive an instant score and detailed breakdown.
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
