import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Download, Calculator, Target, Clock, CheckCircle2, MessageSquare, Mail, User, TrendingUp, Users, AlertCircle, Zap, FileText, ClipboardCheck, ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import ObjectionFramework from "@/components/ObjectionFramework";
import { ResourceDownloadModal } from "@/components/ResourceDownloadModal";
import { InteractiveChecklist } from "@/components/checklist/InteractiveChecklist";
import { aeQualificationChecklist } from "@/data/checklists";
import { trackEvent } from "@/hooks/usePageTracking";
import { Breadcrumbs } from "@/components/Breadcrumbs";
export default function AEHub() {
  const [isResourceModalOpen, setIsResourceModalOpen] = useState(false);
  const navigate = useNavigate();
  const supportTiers = [{
    tier: "CRITICAL",
    responseTime: "4 hours",
    description: "Deal-blocking technical issue",
    example: "Prospect backing out due to integration concern"
  }, {
    tier: "HIGH",
    responseTime: "24 hours",
    description: "Active deal with technical concerns",
    example: "Demo next week, need validation on data migration"
  }, {
    tier: "MEDIUM",
    responseTime: "48 hours",
    description: "Pipeline development",
    example: "Qualifying opportunity, need assessment scope"
  }, {
    tier: "GENERAL",
    responseTime: "3-5 days",
    description: "Questions and planning",
    example: "Exploring partnership, want to learn more"
  }];
  const quickWins = [{
    scenario: "Prospect mentions data quality issues",
    action: "Request technical analysis to surface quick wins",
    result: "3-5 immediate improvements identified, builds credibility"
  }, {
    scenario: "Deal stalled on technical objections",
    action: "Request support to join prospect call as technical advisor",
    result: "Real-time validation unsticks deal momentum"
  }, {
    scenario: "Prospect uncertain about return on investment",
    action: "Share ROI qualification calculator with concrete savings model",
    result: "Quantified value creates executive buy-in"
  }];
  return <div className="min-h-screen">
      <SEOHead title="AE Resource Hub - Technical Support for Salesforce Deals | CWT Studio" description="Technical backstop for Account Executives selling Salesforce services. Request support, download tools, and access deal playbooks." canonicalUrl="https://coalescentwebtech.com/ae-hub" />

      <Breadcrumbs />
      
      {/* Back to Resources Link */}
      

      {/* Hero */}
      <Section variant="standard" className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="system-status">ACCOUNT EXECUTIVE RESOURCES</div>
          <h1 className="heading-page">AE Resource Hub</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical resources to qualify complex deals, handle objections, and accelerate sales cycles.
          </p>
        </div>
      </Section>

      {/* Support Response Times - Compact Table */}
      <Section variant="muted">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-center">Support Response Times</h2>
          
          <Card className="border-accent-data/30">
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {supportTiers.map((tier, index) => <div key={tier.tier} className="flex items-center justify-between p-6 hover:bg-accent-data/5 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">
                        {index === 0 ? '🔴' : index === 1 ? '🟠' : index === 2 ? '🟡' : '⚪'}
                      </div>
                      <div>
                        <p className="font-bold text-lg">{tier.tier}</p>
                        <p className="text-sm text-muted-foreground">{tier.example}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-accent-data">{tier.responseTime}</p>
                    </div>
                  </div>)}
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button size="lg" className="bg-accent-data hover:bg-accent-data/90" onClick={() => navigate('/ae-technical-support')}>
              Submit Support Request
            </Button>
          </div>
        </div>
      </Section>

      {/* Top 3 Tools */}
      <Section id="resources" variant="standard">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-center">Essential Tools</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-8 border-accent-data/30 hover:border-accent-data/50 transition-all hover-scale">
              <div className="w-16 h-16 rounded-lg bg-accent-data flex items-center justify-center mx-auto mb-4">
                <ClipboardCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Qualification Framework</h3>
              <p className="text-sm text-muted-foreground">
                15-minute technical discovery guide
              </p>
            </Card>

            <Card className="text-center p-8 border-accent-data/30 hover:border-accent-data/50 transition-all hover-scale">
              <div className="w-16 h-16 rounded-lg bg-accent-data flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">ROI Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Quantify savings for prospects
              </p>
            </Card>

            <Card className="text-center p-8 border-accent-data/30 hover:border-accent-data/50 transition-all hover-scale">
              <div className="w-16 h-16 rounded-lg bg-accent-data flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Battle Cards</h3>
              <p className="text-sm text-muted-foreground">
                Objection response templates
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" onClick={() => setIsResourceModalOpen(true)} className="border-accent-data text-accent-data hover:bg-accent-data/10">
              <Download className="mr-2 h-5 w-5" />
              Download Resource Pack
            </Button>
          </div>
        </div>
      </Section>

      {/* What We Do - Single Clear Section */}
      <Section variant="muted">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-center">What We Provide</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 border-accent-data/30">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-accent-data" />
                When to Engage
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="text-accent-data">→</span>
                  <span>Technical qualification and scoping</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-data">→</span>
                  <span>Deal stalled on objections</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-data">→</span>
                  <span>Discovery call preparation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-data">→</span>
                  <span>Competitive displacement</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-data">→</span>
                  <span>ROI validation needed</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-accent/30">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                Support Delivered
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="text-accent">→</span>
                  <span><strong>Technical validation:</strong> Same-day feedback</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">→</span>
                  <span><strong>Prospect calls:</strong> Join as technical advisor</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">→</span>
                  <span><strong>Custom positioning:</strong> Deal-specific battle cards</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">→</span>
                  <span><strong>Proposal drafts:</strong> Scope and estimates</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">→</span>
                  <span><strong>Red flags:</strong> Early bad-fit identification</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Resource Links */}
      <Section variant="standard">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">Additional Resources</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="p-8 border-accent-data/30 hover:border-accent-data transition-all hover-scale group">
              <FileText className="w-12 h-12 text-accent-data mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Technical Playbook</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Discovery frameworks and technical qualification guides
              </p>
              <Button asChild variant="outline" className="w-full border-accent-data text-accent-data hover:bg-accent-data/10">
                <Link to="/salesforce/partners">View Playbook</Link>
              </Button>
            </Card>

            <Card className="p-8 border-accent-data/30 hover:border-accent-data transition-all hover-scale group">
              <MessageSquare className="w-12 h-12 text-accent-data mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">Objection Library</h3>
              <p className="text-sm text-muted-foreground mb-4">
                500+ tested responses with discovery frameworks
              </p>
              <Button asChild variant="outline" className="w-full border-accent-data text-accent-data hover:bg-accent-data/10">
                <Link to="/ae-objection-library">Browse Objections</Link>
              </Button>
            </Card>
          </div>
        </div>
      </Section>

      <ResourceDownloadModal isOpen={isResourceModalOpen} onClose={() => setIsResourceModalOpen(false)} resourceTitle="AE Resource Bundle" resourceDescription="Qualification Framework, ROI Calculator, Discovery Questions, and Battle Cards." downloadUrl="/pdfs/technical-assessment-framework.pdf" />
    </div>;
}
;