import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Download, Calculator, Target, Clock, CheckCircle2, MessageSquare, Mail, User, TrendingUp, Users, AlertCircle, Zap, FileText, ClipboardCheck } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import ObjectionFramework from "@/components/ObjectionFramework";
import { ResourceDownloadModal } from "@/components/ResourceDownloadModal";
import { InteractiveChecklist } from "@/components/checklist/InteractiveChecklist";
import { aeQualificationChecklist } from "@/data/checklists";
import { trackEvent } from "@/hooks/usePageTracking";
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
    action: "Offer complimentary 1-hour assessment to surface quick wins",
    result: "3-5 immediate improvements identified, converts to paid assessment"
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

      {/* Hero */}
      <Section variant="standard" className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="system-status">ACCOUNT EXECUTIVE RESOURCES</div>
          <h1 className="heading-page">AE Resource Hub</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Resources to qualify technical deals, handle objections, and accelerate Salesforce sales cycles.
          </p>
        </div>
      </Section>

      {/* Support Response Times */}
      <Section variant="standard">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-center">Support Response Times</h2>
          
          <div className="grid md:grid-cols-4 gap-4">
            {supportTiers.map((tier, index) => (
              <Card key={tier.tier} className="p-6 border-accent-data/30">
                <div className="space-y-3">
                  <div className="text-2xl">
                    {index === 0 ? '🔴' : index === 1 ? '🟠' : index === 2 ? '🟡' : '⚪'}
                  </div>
                  <div>
                    <p className="font-bold text-lg">{tier.tier}</p>
                    <p className="text-sm text-accent-data font-medium">{tier.responseTime}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{tier.example}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center pt-4">
            <Button size="lg" className="bg-accent-data hover:bg-accent-data/90" onClick={() => navigate('/ae-technical-support')}>
              Submit Support Request
            </Button>
          </div>
        </div>
      </Section>

      {/* Top 3 Tools */}
      <Section id="resources" variant="muted">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-center">Top 3 Tools</h2>

          <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-lg bg-accent-data flex items-center justify-center mx-auto">
              <ClipboardCheck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold">Assessment Framework</h3>
            <p className="text-sm text-muted-foreground">
              Discovery guide to qualify technical fit and identify deal risks in 15 minutes
            </p>
          </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-lg bg-accent-data flex items-center justify-center mx-auto">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold">ROI Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Spreadsheet template to quantify cost savings and efficiency gains for prospects
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-lg bg-accent-data flex items-center justify-center mx-auto">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Battle Cards</h3>
              <p className="text-sm text-muted-foreground">
                Response templates for common objections and competitive scenarios
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <Button size="lg" variant="outline" onClick={() => setIsResourceModalOpen(true)}>
              <Download className="mr-2 h-5 w-5" />
              Download Resources
            </Button>
          </div>
        </div>
      </Section>

      {/* Quick Wins */}
      <Section variant="standard">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-center">Quick Win Scenarios</h2>
          
          <div className="space-y-4">
            {quickWins.map((win, index) => (
              <Card key={index} className="p-6 border-accent-data/30">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-data/20 flex items-center justify-center">
                    <span className="text-lg font-bold text-accent-data">{index + 1}</span>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">{win.scenario}</p>
                    <p className="text-sm text-muted-foreground">{win.action}</p>
                    <p className="text-sm text-accent-data font-medium">{win.result}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Objections */}
      <Section variant="muted">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-center">Top 3 Objections</h2>
          <ObjectionFramework />
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/ae-objection-library">
                View Full Objection Library
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* What We Do */}
      <Section variant="standard">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">What We Do</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 border-accent-data/30">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-accent-data" />
                When to Bring Us In
              </h3>
              <ul className="space-y-2 text-sm">
                <li>→ Deal qualification (tech fit, scope)</li>
                <li>→ Technical objections or stalls</li>
                <li>→ Discovery call prep</li>
                <li>→ Competitive scenarios</li>
                <li>→ ROI validation</li>
              </ul>
            </Card>

            <Card className="p-6 border-accent/30">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                What We Provide
              </h3>
              <ul className="space-y-2 text-sm">
                <li><strong>15-minute assessments:</strong> Same-day technical validation</li>
                <li><strong>Prospect call support:</strong> Join as technical advisor</li>
                <li><strong>Deal-specific positioning:</strong> Custom battle cards and messaging</li>
                <li><strong>Proposal drafts:</strong> Scope and estimate documents</li>
                <li><strong>Red flag analysis:</strong> Early identification of bad-fit deals</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Links */}
      <Section variant="muted">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-bold">More Resources</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="outline" size="lg" className="border-accent-data text-accent-data hover:bg-accent-data/10">
              <Link to="/salesforce/partners">Deal Playbook</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-accent-data text-accent-data hover:bg-accent-data/10">
              <Link to="/ae-objection-library">Objection Library</Link>
            </Button>
          </div>
        </div>
      </Section>

      <ResourceDownloadModal 
        isOpen={isResourceModalOpen} 
        onClose={() => setIsResourceModalOpen(false)} 
        resourceTitle="AE Resource Bundle" 
        resourceDescription="Assessment Framework, ROI Calculator, Discovery Questions, and Battle Cards." 
        downloadUrl="/pdfs/technical-assessment-framework.pdf" 
      />
    </div>;
}
;