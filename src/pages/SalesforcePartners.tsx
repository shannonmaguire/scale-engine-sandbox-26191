import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, Download, AlertTriangle, ArrowRight, TrendingUp, Clock, DollarSign, Users, Zap, Target } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { ResourceDownloadModal } from "@/components/ResourceDownloadModal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
const SalesforcePartners = () => {
  const [selectedResource, setSelectedResource] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const objectionScenarios = [{
    icon: AlertTriangle,
    scenario: "Technical Debt Objections",
    description: "When prospects say their org is a 'Frankenstein build' with too many customizations to fix"
  }, {
    icon: Clock,
    scenario: "Timeline Concerns",
    description: "IT says any changes will take 6+ months and they can't afford the downtime"
  }, {
    icon: DollarSign,
    scenario: "ROI Skepticism",
    description: "They've been burned before by consultants who promised automation but delivered complexity"
  }, {
    icon: Users,
    scenario: "Adoption Resistance",
    description: "Sales team pushes back on any workflow changes, even if they'll save time"
  }];
  const dealAccelerators = [{
    scenario: "15+ years of technical debt",
    opportunity: "Quick wins in data cleanup show immediate ROI and build momentum for larger scope"
  }, {
    scenario: "Multiple disconnected instances",
    opportunity: "Integration consolidation becomes the hero project that unblocks their entire roadmap"
  }, {
    scenario: "Custom objects nobody understands",
    opportunity: "Documentation and governance framework prevents future chaos — becomes ongoing engagement"
  }, {
    scenario: "Broken automations causing issues",
    opportunity: "Fix the pain first, then expand to workflow optimization across the org"
  }, {
    scenario: "Reports taking 2+ hours to run",
    opportunity: "Performance optimization delivers instant credibility, opens door to dashboard overhaul"
  }, {
    scenario: "Marketing/Sales Cloud disconnects",
    opportunity: "Integration fix becomes proof of concept for broader platform unification"
  }];
  const aeResources = [{
    title: "Technical Assessment Framework",
    description: "Systematic approach to evaluating Salesforce technical debt",
    type: "Methodology"
  }, {
    title: "ROI Calculator for Salesforce Cleanup",
    description: "Show prospects time/cost savings from fixing their org",
    type: "Tool"
  }, {
    title: "Discovery Questions for Technical Debt",
    description: "Identify technical requirements and complexity factors",
    type: "Checklist"
  }, {
    title: "Implementation Readiness Guide",
    description: "Technical prerequisites and preparation checklist",
    type: "Reference"
  }];
  return <div className="min-h-screen bg-background">
      <SEOHead title="Salesforce Partner Resources | CWT Studio Automations for AEs" description="Equip your team with Creator Wealth Tools playbooks to solve Salesforce technical debt, accelerate automation, and win web and mobile modernisation deals." keywords={['Salesforce partner resources', 'business automation enablement', 'Creator Wealth Tools for AEs', 'technical debt objection handling', 'Salesforce deal support']} canonicalUrl="/salesforce/partners" />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="bg-card border-b-2 border-primary/20 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-mono mb-6">
              FOR ACCOUNT EXECUTIVES
            </div>
            <h1 className="heading-page text-foreground mb-6">
              Your Technical Support Team for Salesforce Deals
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We unblock technical debt, shorten sales cycles, and provide 48-hour turnaround on complex 
              Salesforce deals through quick wins that build momentum toward sustainable infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="teal" asChild>
                <Link to="/ae-support">
                  Request Technical Support
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/resources">
                  Get AE Resources
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Letter Header */}
      <section className="section-spacing-half bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-6 font-mono">Hey AEs,</h2>
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-4">
                  Every discovery call surfaces the same pattern: Salesforce orgs accumulating 15+ years of technical 
                  debt that kills deal velocity while most consultants propose 18-month transformation roadmaps that 
                  compound the problem. The technical debt blocking your deals requires focused remediation that delivers 
                  measurable outcomes within the first sprint cycle.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  Our methodology addresses the specific technical barriers preventing deal closure through rapid assessment 
                  and targeted fixes. Legacy customizations become tractable problems when approached through systematic 
                  decomposition rather than comprehensive overhaul.
                </p>
                <p className="text-lg leading-relaxed">
                  Below: Our technical capabilities, the expertise we provide at each deal stage, and the specific scenarios 
                  where our involvement accelerates outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Objections */}
      <section className="section-spacing-half">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Objections You're Probably Hearing</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {objectionScenarios.map((objection, index) => <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <objection.icon className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-2">{objection.scenario}</h3>
                        <p className="text-sm text-muted-foreground">{objection.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="text-sm text-primary">
                <strong>These objections map to specific technical remediation patterns.</strong> Initial quick wins 
                establish credibility and create internal champions who advocate for expanded scope. The messiest orgs 
                we've encountered follow predictable decomposition paths once the assessment framework identifies the 
                highest-impact intervention points.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deal Accelerators (Reframed from Deal Killers) */}
      <section className="section-spacing-half bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Deal Accelerators: Turn Technical Debt Into Opportunities</h2>
            <p className="text-muted-foreground mb-6">
              Discovery calls that surface these patterns indicate <strong>expansion opportunities</strong> where 
              technical complexity becomes the foundation for broader engagement. Each scenario follows a conversion 
              path from initial objection to momentum-building intervention:
            </p>
            <div className="space-y-4 mb-8">
              {dealAccelerators.map((item, index) => <div key={index} className="bg-card border-2 border-primary/20 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-mono font-semibold text-foreground mb-2">
                        "{item.scenario}"
                      </div>
                      <div className="flex items-start gap-2">
                        <Target className="w-4 h-4 text-accent mt-1 flex-shrink-0" aria-hidden="true" />
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-accent">Opportunity:</strong> {item.opportunity}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
            
          </div>
        </div>
      </section>

      {/* Quick Wins Framework */}
      <section className="section-spacing-half bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Quick Wins Framework</h2>
            <p className="text-muted-foreground mb-8">
              Momentum builds through rapid, measurable wins that establish credibility and create internal champions 
              who advocate for expanded scope.
            </p>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-card border-2 border-border p-6 rounded-lg">
                <div className="w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-2">Week 1-2</h3>
                <div className="text-xs font-mono text-accent uppercase tracking-wide mb-3">Assessment</div>
                <p className="text-sm text-muted-foreground">
                  No-cost technical audit identifies 3-4 highest-impact fixes through systematic evaluation of 
                  existing infrastructure, delivering practical recommendations without binding commitments.
                </p>
              </div>

              <div className="bg-card border-2 border-border p-6 rounded-lg">
                <div className="w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-2">Week 3-4</h3>
                <div className="text-xs font-mono text-accent uppercase tracking-wide mb-3">Quick Win ID</div>
                <p className="text-sm text-muted-foreground">
                  Initial remediation targets the most painful issue whether data quality, broken automation, or report 
                  performance, establishing trust through visible results that create internal champions.
                </p>
              </div>

              <div className="bg-card border-2 border-border p-6 rounded-lg">
                <div className="w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-2">Week 5-8</h3>
                <div className="text-xs font-mono text-accent uppercase tracking-wide mb-3">Sprint Deploy</div>
                <p className="text-sm text-muted-foreground">
                  First sprint deployment delivers workflow optimization, integration fixes, and dashboard cleanup 
                  with complete documentation that enables knowledge transfer and ongoing maintenance.
                </p>
              </div>

              <div className="bg-card border-2 border-border p-6 rounded-lg">
                <div className="w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center font-bold text-xl mb-4">
                  4
                </div>
                <h3 className="font-semibold mb-2">Month 3+</h3>
                <div className="text-xs font-mono text-accent uppercase tracking-wide mb-3">Expand Scope</div>
                <p className="text-sm text-muted-foreground">
                  Visible results create the foundation for expanding into platform unification, governance framework 
                  implementation, and ongoing operational support as the engagement evolves from tactical fixes to 
                  strategic infrastructure development.
                </p>
              </div>
            </div>

            <div className="bg-accent/10 border-2 border-accent/20 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Why This Works</h3>
                  <p className="text-sm text-muted-foreground">
                    Quick wins establish capability and build internal champions who advocate for expanded engagement. 
                    By month 3, proven results drive scope expansion as stakeholders recognize the compounding value of 
                    systematic infrastructure improvement. Average deals expand 2-3x from initial scope through this 
                    momentum-building approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AE Resources - Gated Downloads */}
      <section className="section-spacing-half bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Resources for Your Deals</h2>
            <p className="text-muted-foreground mb-6">
              Frameworks, calculators, and assessment tools accelerate technical conversations by providing structured 
              evaluation methods and quantifiable ROI projections. Email-gated access ensures qualified distribution.
            </p>
            <div className="space-y-4 mb-8">
              {aeResources.map((resource, index) => <Card key={index} className="bg-card border-border hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded font-mono">
                          {resource.type}
                        </span>
                        <Button size="sm" variant="outline" onClick={() => {
                      setSelectedResource(resource.title);
                      setIsModalOpen(true);
                    }}>
                          <Download className="w-3 h-3 mr-1" />
                          Get
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
            
            <div className="text-center">
              <Button size="lg" variant="teal" asChild>
                <Link to="/resources">
                  See All AE Resources
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Download Modal */}
      {selectedResource && <ResourceDownloadModal isOpen={isModalOpen} onClose={() => {
      setIsModalOpen(false);
      setSelectedResource(null);
    }} resourceTitle={selectedResource} resourceDescription={`Get instant access to our ${selectedResource}. Enter your email to download.`} />}

      {/* Technical Collaboration Process */}
      <section className="section-spacing-half">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Technical Collaboration Process</h2>
            <div className="prose prose-lg max-w-none text-foreground mb-8">
              <p className="text-base leading-relaxed mb-4">
                <strong>Initial Consultation:</strong> Complex technical requirements encountered during deal progression 
                trigger our 48-hour assessment cycle, delivering structured evaluation of infrastructure complexity and 
                recommended intervention approach.
              </p>
              <p className="text-base leading-relaxed mb-4">
                <strong>Technical Support:</strong> Call participation provides architectural guidance and implementation 
                scoping that addresses technical questions while maintaining deal momentum through clear communication of 
                complexity factors and timeline requirements.
              </p>
              <p className="text-base leading-relaxed mb-4">
                <strong>Implementation Partnership:</strong> Deal progression activates direct client engagement for 
                technical solution delivery with continuous progress reporting that maintains your visibility into 
                implementation status and emerging scope opportunities.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-console">
                <Link to="/ae-support">
                  Request Technical Support
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/assessment-tools">
                  Get Assessment Tools
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default SalesforcePartners;