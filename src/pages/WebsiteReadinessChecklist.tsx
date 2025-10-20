import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArrowLeft, Download, CheckCircle } from "lucide-react";
import { InteractiveChecklist } from "@/components/checklist/InteractiveChecklist";
import { websiteReadinessChecklist } from "@/data/checklists";
import { trackEvent } from "@/hooks/usePageTracking";

const WebsiteReadinessChecklist = () => {
  useEffect(() => {
    trackEvent('page_view', {
      page: 'website_readiness_checklist',
      location: 'checklist_page',
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Website Readiness Checklist | Free Pre-Launch Assessment Tool"
        description="Free 47-point website readiness checklist. Validate content, design assets, technical setup, integrations, and stakeholder alignment before launch. Prevent $15K+ in scope creep."
        keywords={[
          'website readiness checklist',
          'website pre-launch checklist',
          'web development checklist',
          'website launch preparation',
          'site readiness assessment'
        ]}
      />

      <Breadcrumbs />

      {/* Header */}
      <section className="section-spacing-half px-6 border-b-2 border-border">
        <div className="max-w-7xl mx-auto">
          <Link to="/resources" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Link>
          
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="system-status">
              FREE RESOURCE
            </div>
            <div className="text-xs font-mono text-muted-foreground">
              No email required • Export as PDF
            </div>
          </div>
          
          <h1 className="heading-page text-primary mb-6">
            Website Readiness Checklist
          </h1>
          
          <p className="text-description text-muted-foreground max-w-3xl mb-4">
            47-point pre-project checklist covering content, assets, integrations, and stakeholder alignment. Use this before kicking off any website project to prevent $15K+ in scope creep and launch delays.
          </p>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>Used by 100+ teams to validate project readiness</span>
          </div>
        </div>
      </section>

      {/* Interactive Checklist */}
      <section className="section-spacing px-6">
        <div className="max-w-7xl mx-auto">
          <InteractiveChecklist
            checklistId="website-readiness"
            title="Website Readiness Assessment"
            description="Check off items as you complete them. Your progress is saved automatically. Export results to PDF when done."
            categories={websiteReadinessChecklist}
            showEmailCapture={false}
          />
        </div>
      </section>

      {/* Value Prop Section */}
      <section className="section-spacing-half px-6 bg-muted/30 border-y-2 border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="heading-subsection text-foreground mb-4">
              Why This Checklist Prevents Project Failures
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border-2 border-border rounded-lg p-6">
              <div className="text-2xl font-bold text-primary mb-2">$15K+</div>
              <div className="text-sm font-mono text-muted-foreground mb-2">Average Scope Creep</div>
              <p className="text-sm text-muted-foreground">
                Missing assets and last-minute changes balloon budgets. This checklist catches gaps before contracts are signed.
              </p>
            </div>
            <div className="bg-card border-2 border-border rounded-lg p-6">
              <div className="text-2xl font-bold text-primary mb-2">3-6 weeks</div>
              <div className="text-sm font-mono text-muted-foreground mb-2">Launch Delays</div>
              <p className="text-sm text-muted-foreground">
                Waiting on content, approvals, or credentials stalls projects. Validate readiness upfront to hit deadlines.
              </p>
            </div>
            <div className="bg-card border-2 border-border rounded-lg p-6">
              <div className="text-2xl font-bold text-primary mb-2">47 points</div>
              <div className="text-sm font-mono text-muted-foreground mb-2">Battle-Tested</div>
              <p className="text-sm text-muted-foreground">
                Distilled from 50+ website projects. Every item represents a real gap that has derailed launches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-section text-foreground mb-6">
            Ready to Build Your Website?
          </h2>
          <p className="text-description text-muted-foreground mb-8">
            Checked all the boxes? CWT Studio builds conversion-focused websites for B2B companies. From design to deployment, we handle the technical complexity while you focus on your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/web-systems">
                Explore Web Systems
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">
                Schedule Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteReadinessChecklist;
