import { ChecklistWizard } from "@/components/checklist/ChecklistWizard";
import { checklists } from "@/data/checklists";
import SEOHead from "@/components/SEOHead";
import { AlertCircle, Clock, FileText } from "lucide-react";

const SelfAssessment = () => {
  const technicalMaturityChecklist = checklists.find(c => c.id === 'technical-maturity');

  if (!technicalMaturityChecklist) {
    return <div>Checklist not found</div>;
  }

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
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="font-mono text-4xl md:text-5xl font-semibold mb-4 text-foreground">
            Technical Maturity Assessment
          </h1>
          <p className="font-sans text-[16px] text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Diagnostic framework for revenue system infrastructure. Answer 42 questions to receive a structured assessment of current state and optimization opportunities.
          </p>
        </div>

        {/* Wizard */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-black/5 p-8 md:p-12">
          <ChecklistWizard
            checklistId={technicalMaturityChecklist.id}
            title={technicalMaturityChecklist.title}
            categories={technicalMaturityChecklist.categories}
          />
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
