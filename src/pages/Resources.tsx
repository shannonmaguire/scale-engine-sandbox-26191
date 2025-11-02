import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StandardCard } from "@/components/ui/standard-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
    description: "Match your revenue maturity stage to the right CWT Studio service—Assessment, Sprint, or Fractional Ops. Clear decision framework for choosing your next engagement.",
    icon: Map,
    category: "Planning",
    downloadUrl: "/pdfs/service-selection-guide.pdf"
  },
  {
    id: "roi-calculator",
    title: "ROI Calculator",
    description: "Calculate how Salesforce cleanup saves pipeline risk over 12 months. Input your current metrics, get projected ROI with cost/benefit breakdown.",
    icon: Calculator,
    category: "Financial",
    downloadUrl: "/pdfs/roi-calculator.pdf"
  },
  {
    id: "technical-assessment-framework",
    title: "Technical Assessment Framework",
    description: "Our 6-dimension audit framework (Data Quality, Automation, Integration, Governance, Reporting, Adoption) for revenue system assessments. Self-score in 15 minutes.",
    icon: CheckSquare,
    category: "Assessment",
    downloadUrl: "/pdfs/technical-assessment-framework.pdf"
  },
  {
    id: "90-day-roadmap-template",
    title: "90-Day Roadmap Template",
    description: "Turn assessment findings into executable sprints. Break system installation into weekly milestones with clear deliverables, dependencies, and go/no-go decision points.",
    icon: FileText,
    category: "Planning",
    downloadUrl: "/pdfs/90-day-roadmap-template.pdf"
  },
  {
    id: "discovery-questions-library",
    title: "Discovery Questions Library",
    description: "30+ proven questions that uncover technical debt in prospect deals. Organized by deal stage and objection type—helps AEs qualify Salesforce opportunities.",
    icon: FileQuestion,
    category: "Sales Enablement",
    downloadUrl: "/pdfs/discovery-questions-library.pdf"
  },
  {
    id: "website-readiness-checklist",
    title: "Website Readiness Checklist",
    description: "47-point pre-project checklist covering content, assets, integrations, and stakeholder alignment. Prevents scope creep.",
    icon: CheckSquare,
    category: "Planning",
    downloadUrl: "/pdfs/website-readiness-checklist.pdf"
  },
  {
    id: "vendor-handoff-sop",
    title: "Vendor Handoff SOP",
    description: "Take full ownership of your web infrastructure from any vendor. Step-by-step SOP for domain, hosting, CMS, analytics, and CRM transfer—eliminate ongoing vendor dependency.",
    icon: FileText,
    category: "Operations",
    downloadUrl: "/pdfs/vendor-handoff-sop.pdf"
  }
];

const Resources = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const handleDownloadClick = (resource: Resource) => {
    // All resources now require email
    trackEvent('resource_modal_opened', {
      resourceId: resource.id,
      resourceTitle: resource.title,
      location: 'resources_page',
    });
    setSelectedResource(resource);
    setModalOpen(true);
  };

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(resources.map(r => r.category)))];
  
  // Filter resources by category
  const filteredResources = selectedCategory === "all" 
    ? resources 
    : resources.filter(r => r.category === selectedCategory);

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
            Battle-Tested Frameworks
          </h1>
          <p className="text-description text-muted-foreground max-w-3xl mb-4">
            The same tools we use in our revenue operations assessments and sprint engagements. All resources unlock instantly with your email.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>Used by RevOps teams at 100+ B2B companies</span>
          </div>
        </div>
      </section>

      {/* Resource Grid with Category Tabs */}
      <section className="section-spacing px-6">
        <div className="max-w-7xl mx-auto">
          {/* Category Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
            <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto gap-2 bg-muted/30 p-2">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="font-mono text-sm capitalize data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category === "all" ? "All Resources" : category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gutter-standard">
            {filteredResources.map((resource) => {
              const Icon = resource.icon;
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
                    Get Resource
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
          <div className="text-center mb-8">
            <h2 className="heading-subsection text-foreground mb-4">
              Used By Revenue Leaders Who Demand Results
            </h2>
          </div>
          <div className="bg-card border-2 border-primary/20 rounded-lg p-8">
            <div className="flex items-start gap-4">
              <div className="w-1 h-full bg-primary rounded-full flex-shrink-0" />
              <div>
                <p className="text-lg text-foreground mb-4 italic">
                  "The Technical Assessment Framework caught 3 critical Salesforce gaps our consultant missed. Saved us from a major mistake before we even started the project."
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
            These Resources Answer "What's Broken?"
          </h2>
          <p className="text-description text-muted-foreground mb-8">
            To answer "How do we fix it?"—book an Assessment. We audit your infrastructure, benchmark against peers, and design a 90-day roadmap with implementation sequence.
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
            2-week turnaround • 100% fee credits to Sprint
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
