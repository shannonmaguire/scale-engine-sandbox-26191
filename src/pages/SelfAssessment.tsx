import { useRef } from "react";
import { ChecklistWizard } from "@/components/checklist/ChecklistWizard";
import { checklists } from "@/data/checklists";
import SEOHead from "@/components/SEOHead";

const SelfAssessment = () => {
  const technicalMaturityChecklist = checklists.find(c => c.id === 'technical-maturity');
  const quizRef = useRef<HTMLDivElement>(null);

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
          {/* Quiz Section */}
          <div ref={quizRef}>
            <div className="mb-6">
              <div className="system-status mb-4">HEALTH CHECK</div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Revenue Health Check</h1>
              <p className="text-sm text-muted-foreground">5 minutes. 18 questions. Instant score.</p>
            </div>
            <ChecklistWizard
              checklistId={technicalMaturityChecklist.id}
              title={technicalMaturityChecklist.title}
              categories={technicalMaturityChecklist.categories}
              quizContainerRef={quizRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfAssessment;
