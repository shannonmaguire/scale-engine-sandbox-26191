import { useState } from "react";
import { ChecklistAccordion } from "@/components/checklist/ChecklistAccordion";
import { LiveScorePanel } from "@/components/checklist/LiveScorePanel";
import { checklists } from "@/data/checklists";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const SelfAssessment = () => {
  const technicalMaturityChecklist = checklists.find(c => c.id === 'technical-maturity');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

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
      
      <div className="container-standard py-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="heading-page mb-6">How Mature Are Your Revenue Systems?</h1>
          <p className="text-description">
            42 questions. 5 minutes. See where you stand.
          </p>
        </div>

        {/* Main Layout: 2 columns on desktop */}
        <div className="grid grid-cols-12 gap-6">
          {/* Live Score - Sidebar (first on mobile, last on desktop) */}
          <div className="col-span-12 lg:col-span-4 order-first lg:order-last">
            <LiveScorePanel
              checklistId={technicalMaturityChecklist.id}
              title={technicalMaturityChecklist.title}
              categories={technicalMaturityChecklist.categories}
            />
          </div>

          {/* Checklist - Main Content */}
          <div className="col-span-12 lg:col-span-8 order-last lg:order-first">
            <ChecklistAccordion
              checklistId={technicalMaturityChecklist.id}
              categories={technicalMaturityChecklist.categories}
              expandedCategory={expandedCategory}
              onExpandedChange={setExpandedCategory}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default SelfAssessment;
