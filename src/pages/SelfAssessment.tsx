import { useState, useRef, useEffect } from "react";
import { ChecklistWizard } from "@/components/checklist/ChecklistWizard";
import { checklists } from "@/data/checklists";
import SEOHead from "@/components/SEOHead";
import { useChecklist } from "@/components/checklist/ChecklistContext";

const SelfAssessment = () => {
  const technicalMaturityChecklist = checklists.find(c => c.id === 'technical-maturity');
  const { checklistState } = useChecklist();
  const quizRef = useRef<HTMLDivElement>(null);
  
  // Check if user has started answering
  const hasStartedQuiz = technicalMaturityChecklist && 
    checklistState[technicalMaturityChecklist.id] && 
    Object.keys(checklistState[technicalMaturityChecklist.id]).length > 0;
  
  // Track if gate was dismissed this session
  const [gateDismissed, setGateDismissed] = useState(false);
  
  // Hide readiness gate once user starts answering or dismisses it
  const showReadinessGate = !hasStartedQuiz && !gateDismissed;

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
          {/* Intro Section - Only show header when gate is visible */}
          {showReadinessGate && (
            <div className="mb-8 md:mb-12">
              <div className="system-status mb-6">HEALTH CHECK</div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Revenue Health Check</h1>
              <p className="text-base md:text-lg max-w-2xl mb-3 text-foreground">
                Answer 18 questions across data quality, automation, integration, governance, reporting, and user adoption.
              </p>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                Takes 5 minutes. Instant score. No sales call required.
              </p>

              {/* Readiness Gate - Collapsible */}
              <div className="border-2 border-destructive/50 bg-destructive/5 p-5 mb-6">
                <p className="font-mono text-sm uppercase tracking-widest text-destructive mb-3 font-semibold">
                  Stop. Read This First.
                </p>
                <ul className="space-y-2 text-sm text-foreground mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold">×</span>
                    <span>Building from scratch — not applicable.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold">×</span>
                    <span>Seeking validation — wrong tool.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold">×</span>
                    <span>Not ready to rebuild — stop here.</span>
                  </li>
                </ul>
                <button 
                  onClick={() => setGateDismissed(true)}
                  className="text-sm font-mono text-primary hover:text-primary/80 transition-colors underline"
                >
                  I understand, show me the quiz →
                </button>
              </div>
            </div>
          )}

          {/* Quiz Section with scroll anchor */}
          <div ref={quizRef}>
            {!showReadinessGate && (
              <div className="mb-6">
                <div className="system-status mb-4">HEALTH CHECK</div>
                <h1 className="text-2xl md:text-3xl font-bold">Revenue Health Check</h1>
              </div>
            )}
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
