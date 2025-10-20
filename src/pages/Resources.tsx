import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StandardCard } from "@/components/ui/standard-card";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Download, FileText, Calculator, CheckSquare, Map, FileQuestion, ArrowRight, CheckCircle } from "lucide-react";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { trackEvent } from "@/hooks/usePageTracking";
import { ResourceDownloadModal } from "@/components/ResourceDownloadModal";

interface Resource {
  id: string;
  title: string;
  description: string;
  icon: typeof FileText;
  category: string;
  downloadUrl: string;
}

const resources: Resource[] = [
  {
    id: "service-selection-guide",
    title: "Service Selection Guide",
    description: "Match your current revenue maturity and technical debt level to the correct engagement tier. Explains when to start with a $1.5K assessment versus jumping directly to a $9-18K sprint or ongoing fractional support.",
    icon: Map,
    category: "Planning",
    downloadUrl: "/pdfs/service-selection-guide.pdf"
  },
  {
    id: "roi-calculator",
    title: "ROI Calculator",
    description: "Input your current Salesforce data quality score, deal cycle length, and average contract value to project 12-month ROI from system cleanup. Shows how a $47K investment can prevent $340K in pipeline leakage through improved forecasting accuracy and reduced sales friction.",
    icon: Calculator,
    category: "Financial",
    downloadUrl: "/pdfs/roi-calculator.pdf"
  },
  {
    id: "technical-assessment-framework",
    title: "Technical Assessment Framework",
    description: "Self-score your Salesforce instance across six operational dimensions: data quality, automation maturity, integration architecture, governance controls, reporting effectiveness, and user adoption. This is the identical scoring rubric we apply in paid assessments and takes approximately 15 minutes to complete.",
    icon: CheckSquare,
    category: "Assessment",
    downloadUrl: "/pdfs/technical-assessment-framework.pdf"
  },
  {
    id: "90-day-roadmap-template",
    title: "90-Day Roadmap Template",
    description: "Convert assessment findings into a sequenced implementation plan with weekly milestones, dependency mapping, and stage-gate decision criteria. Structures system remediation work into manageable sprints with defined deliverables and rollback protocols.",
    icon: FileText,
    category: "Planning",
    downloadUrl: "/pdfs/90-day-roadmap-template.pdf"
  },
  {
    id: "discovery-questions-library",
    title: "Discovery Questions Library",
    description: "Thirty-plus qualification questions organized by sales stage and technical objection category. Designed for account executives working Salesforce implementation deals above $50K to surface hidden technical debt and integration requirements during discovery calls.",
    icon: FileQuestion,
    category: "Sales Enablement",
    downloadUrl: "/pdfs/discovery-questions-library.pdf"
  },
  {
    id: "website-readiness-checklist",
    title: "Website Readiness Checklist",
    description: "Downloads immediately without an email gate. A 47-point pre-engagement audit covering content readiness, asset preparation, third-party integrations, and stakeholder sign-off requirements. Designed to eliminate scope expansion that typically adds $15K+ to web projects.",
    icon: CheckSquare,
    category: "Planning",
    downloadUrl: "/pdfs/website-readiness-checklist.pdf"
  },
  {
    id: "vendor-handoff-sop",
    title: "Vendor Handoff SOP",
    description: "Standard operating procedure for transferring complete web infrastructure ownership from an existing vendor. Covers domain registrar access, hosting credentials, CMS administrator rights, analytics properties, and CRM integration handoff in a sequence that prevents service interruption.",
    icon: FileText,
    category: "Operations",
    downloadUrl: "/pdfs/vendor-handoff-sop.pdf"
  }
];

const Resources = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  const handleDownloadClick = (resource: Resource) => {
    // Free download - no email required
    if (resource.id === 'website-readiness-checklist') {
      window.open(resource.downloadUrl, '_blank');
      trackEvent('free_resource_downloaded', {
        resourceId: resource.id,
        resourceTitle: resource.title,
        location: 'resources_page',
      });
      return;
    }
    
    // Email-gated resources
    trackEvent('resource_modal_opened', {
      resourceId: resource.id,
      resourceTitle: resource.title,
      location: 'resources_page',
    });
    setSelectedResource(resource);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="CWT Studio Resources | Free Revenue Operations Tools & Frameworks"
        description="Access our library of free resources including assessment frameworks, ROI calculators, roadmap templates, and discovery question libraries for revenue operations excellence."
        keywords={[
          'revenue operations resources',
          'Salesforce ROI calculator',
          'technical assessment framework',
          'implementation roadmap template',
          'sales discovery questions'
        ]}
      />

      <Breadcrumbs />

      {/* Header */}
      <section className="section-spacing-half px-6 border-b-2 border-border">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="system-status">
              Resource Library
            </div>
            <div className="text-xs font-mono text-muted-foreground">
              2,847 downloads · Updated weekly
            </div>
          </div>
          <h1 className="heading-page text-primary mb-6">
            The Frameworks We Use in Paid Engagements
          </h1>
          <p className="text-description text-muted-foreground max-w-3xl mb-4">
            These are the same diagnostic tools, scoring matrices, and planning templates that structure our $1.5K assessments and $18K sprint engagements. The Website Readiness Checklist downloads immediately without an email gate. Everything else requires your email address and delivers within seconds.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>Used by RevOps teams at 100+ B2B companies</span>
          </div>
        </div>
      </section>

      {/* Resource Grid */}
      <section className="section-spacing px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gutter-standard">
            {resources.map((resource) => {
              const Icon = resource.icon;
              const isFree = resource.id === 'website-readiness-checklist';
              return (
                <StandardCard key={resource.id} className="flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="text-xs font-mono text-muted-foreground uppercase tracking-wide">
                          {resource.category}
                        </div>
                        {isFree && (
                          <div className="text-xs font-mono font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                            FREE
                          </div>
                        )}
                      </div>
                      <h3 className="font-mono font-bold text-lg text-foreground">
                        {resource.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {resource.description}
                  </p>
                  
                  <Button 
                    className="w-full" 
                    variant={isFree ? "default" : "outline"}
                    onClick={() => handleDownloadClick(resource)}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    {isFree ? "Download Free" : "Get Resource"}
                  </Button>
                </StandardCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section-spacing-half px-6 bg-muted/30 border-y-2 border-border">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border-2 border-primary/20 rounded-lg p-8">
            <div className="flex items-start gap-4">
              <div className="w-1 h-full bg-primary rounded-full flex-shrink-0" />
              <div>
                <p className="text-lg text-foreground mb-4 italic">
                  "The Technical Assessment Framework identified three structural Salesforce problems our external consultant had evaluated and cleared during their $400/hour audit. We caught them before starting implementation and avoided what would have been a $60K remediation cycle six months into the project."
                </p>
                <div className="text-sm font-mono text-muted-foreground">
                  <div className="font-bold text-foreground">Director of Revenue Operations</div>
                  <div>B2B SaaS, 200+ employees</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AE Resources Crosslink */}
      <section className="section-spacing px-6 bg-primary/5 border-y-2 border-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-mono mb-6">
            FOR ACCOUNT EXECUTIVES
          </div>
          <h2 className="heading-section text-foreground mb-6">
            Account Executives Working Salesforce Deals
          </h2>
          <p className="text-description text-muted-foreground mb-8">
            The AE Hub contains discovery frameworks, objection handling scripts, and technical qualification tools specifically designed for account executives selling Salesforce implementation and remediation services.
          </p>
          <Button asChild size="lg">
            <Link to="/ae-hub">
              Visit AE Hub
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-section text-foreground mb-6">
            From Diagnosis to Implementation
          </h2>
          <p className="text-description text-muted-foreground mb-8">
            These frameworks help you identify what needs fixing. A formal Assessment takes the next step by auditing your actual infrastructure, benchmarking it against industry standards for your revenue stage, and producing a sequenced 90-day remediation roadmap with defined milestones and resource requirements.
          </p>
          <ConversionOptimizedButton
            to="/assessment"
            ctaName="Start Infrastructure Assessment"
            location="Resources Page CTA"
            size="lg"
          >
            Start Assessment
          </ConversionOptimizedButton>
          <p className="text-xs text-center text-muted-foreground mt-3 font-mono">
            $1,500–$2,500 • 2-week turnaround • 100% fee credits to Sprint
          </p>
        </div>
      </section>

      {/* Resource Download Modal */}
      <ResourceDownloadModal
        isOpen={modalOpen}
        onClose={() => {
          if (!selectedResource) return;
          
          trackEvent('resource_modal_closed', {
            resourceId: selectedResource.id,
            resourceTitle: selectedResource.title,
            location: 'resources_page',
          });
          
          setModalOpen(false);
          setSelectedResource(null);
        }}
        resourceTitle={selectedResource?.title || ""}
        resourceDescription={selectedResource?.description || ""}
        downloadUrl={selectedResource?.downloadUrl}
        resourceId={selectedResource?.id}
      />
    </div>
  );
};

export default Resources;
