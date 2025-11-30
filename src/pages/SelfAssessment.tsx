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
