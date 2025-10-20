import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StandardCard } from "@/components/ui/standard-card";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Download, FileText, Calculator, CheckSquare, Map, FileQuestion, ArrowRight } from "lucide-react";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { trackEvent } from "@/hooks/usePageTracking";
import { ResourceDownloadModal } from "@/components/ResourceDownloadModal";
import { InteractiveChecklist } from "@/components/checklist/InteractiveChecklist";
import { websiteReadinessChecklist } from "@/data/checklists";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    description: "Which engagement model fits your stage? Assessment, Sprint, or Fractional Ops — this framework helps you choose the right path based on your revenue maturity and growth goals.",
    icon: Map,
    category: "Planning",
    downloadUrl: "/pdfs/service-selection-guide.pdf"
  },
  {
    id: "roi-calculator",
    title: "ROI Calculator",
    description: "Salesforce cleanup cost/benefit analysis. Calculate the true cost of technical debt vs. the investment required to fix it. Includes pipeline impact, time savings, and risk reduction metrics.",
    icon: Calculator,
    category: "Financial",
    downloadUrl: "/pdfs/roi-calculator.pdf"
  },
  {
    id: "technical-assessment-framework",
    title: "Technical Assessment Framework",
    description: "Self-service assessment tool. Audit your current revenue systems across 6 critical dimensions: Data Quality, Automation, Integration, Governance, Reporting, and Adoption.",
    icon: CheckSquare,
    category: "Assessment",
    downloadUrl: "/pdfs/technical-assessment-framework.pdf"
  },
  {
    id: "90-day-roadmap-template",
    title: "90-Day Roadmap Template",
    description: "Implementation planning worksheet. Break down your system installation into weekly milestones with clear deliverables, dependencies, and success criteria.",
    icon: FileText,
    category: "Planning",
    downloadUrl: "/pdfs/90-day-roadmap-template.pdf"
  },
  {
    id: "discovery-questions-library",
    title: "Discovery Questions Library",
    description: "For AE deal qualification. 30+ proven discovery questions organized by deal stage, objection type, and technical complexity. Includes response frameworks and next-step triggers.",
    icon: FileQuestion,
    category: "Sales Enablement",
    downloadUrl: "/pdfs/discovery-questions-library.pdf"
  },
  {
    id: "website-readiness-checklist",
    title: "Website Readiness Checklist",
    description: "What to prepare before rebuild. Comprehensive pre-project checklist covering content, assets, integrations, and stakeholder alignment.",
    icon: CheckSquare,
    category: "Planning",
    downloadUrl: "/pdfs/website-readiness-checklist.pdf"
  },
  {
    id: "vendor-handoff-sop",
    title: "Vendor Handoff SOP",
    description: "How to own your site after launch. Standard operating procedures for taking full ownership of your web infrastructure from any vendor.",
    icon: FileText,
    category: "Operations",
    downloadUrl: "/pdfs/vendor-handoff-sop.pdf"
  }
];

const Resources = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  const handleDownloadClick = (resource: Resource) => {
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
          </div>
          <p className="text-sm font-mono text-muted-foreground mb-4">
            Free frameworks, calculators, and templates built from real deployments.
          </p>
          <h1 className="heading-page text-primary mb-6">
            Revenue Operations Resources
          </h1>
          <p className="text-description text-muted-foreground max-w-3xl">
            Download resources in exchange for your email. We'll send them instantly and occasionally share insights on revenue systems.
          </p>
        </div>
      </section>

      {/* Main Content - Tabs */}
      <section className="section-spacing px-6">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="downloads" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="downloads">PDF Downloads</TabsTrigger>
              <TabsTrigger value="checklist">Interactive Checklist</TabsTrigger>
            </TabsList>

            {/* PDF Downloads Tab */}
            <TabsContent value="downloads">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gutter-standard">
                {resources.map((resource) => {
                  const Icon = resource.icon;
                  const downloadName =
                    resource.downloadUrl.split("/").pop() ?? `${resource.id}.pdf`;
                  return (
                    <StandardCard key={resource.id} className="flex flex-col h-full">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-mono text-muted-foreground uppercase tracking-wide mb-1">
                            {resource.category}
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
                        variant="outline"
                        onClick={() => handleDownloadClick(resource)}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download Resource
                      </Button>
                    </StandardCard>
                  );
                })}
              </div>
            </TabsContent>

            {/* Interactive Checklist Tab */}
            <TabsContent value="checklist">
              <div className="max-w-4xl mx-auto">
                <InteractiveChecklist
                  checklistId="website-readiness"
                  title="Website Readiness Checklist"
                  description="Evaluate your readiness for a website rebuild. Track your progress across content, design, technical infrastructure, integrations, and stakeholder alignment."
                  categories={websiteReadinessChecklist}
                  onComplete={(score) => {
                    trackEvent('checklist_completed', { 
                      checklistId: 'website-readiness', 
                      score,
                      location: 'resources_page'
                    });
                  }}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* AE Resources Crosslink */}
      <section className="section-spacing px-6 bg-primary/5 border-y-2 border-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-mono mb-6">
            FOR ACCOUNT EXECUTIVES
          </div>
          <h2 className="heading-section text-foreground mb-6">
            Selling Salesforce Services?
          </h2>
          <p className="text-description text-muted-foreground mb-8">
            If you're an AE working Salesforce deals, we have dedicated tools, playbooks, and technical support in the AE Hub.
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
            Need Hands-On Support?
          </h2>
          <p className="text-description text-muted-foreground mb-8">
            These resources are self-service starting points. If you need expert guidance 
            on implementation, book an Assessment to map your specific path.
          </p>
          <ConversionOptimizedButton
            to="/assessment"
            ctaName="Start Infrastructure Assessment"
            location="Resources Page CTA"
            size="lg"
          >
            Start Infrastructure Assessment
          </ConversionOptimizedButton>
          <p className="text-xs text-center text-muted-foreground mt-3">
            $1,500–$2,500 • 2-week turnaround • Fully credited to Sprint
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
