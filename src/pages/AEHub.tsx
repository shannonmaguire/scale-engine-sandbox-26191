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
    scenario: "Data quality issues mentioned",
    action: "Offer free 1-hour assessment",
    result: "Surface 3-5 quick wins → Assessment"
  }, {
    scenario: "Deal stalled on technical objections",
    action: "Request support (we join call)",
    result: "Real-time resolution → Deal unstuck"
  }, {
    scenario: "Prospect unsure about ROI",
    action: "Share qualification calculator",
    result: "Quantified value → Executive buy-in"
  }];
  return <div className="min-h-screen">
      <SEOHead title="AE Resource Hub - Technical Support for Salesforce Deals | CWT Studio" description="Technical backstop for Account Executives selling Salesforce services. Request support, download tools, and access deal playbooks." canonicalUrl="https://coalescentwebtech.com/ae-hub" />

      {/* Hero Section */}
      <Section variant="standard" className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="system-status">
            AE RESOURCES
          </div>
          <h1 className="heading-page text-foreground">
            AE Resource Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to sell <span className="text-accent font-semibold">Salesforce services</span> with confidence. Tools, support, and proven frameworks to close more deals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <Button asChild variant="outline" size="lg" className="border-accent-data/30 text-accent-data hover:bg-accent-data/10">
              <Link to="/salesforce/partners">
                View Deal Playbook
              </Link>
            </Button>
          </div>
        </div>
      </Section>


      {/* Response Tiers - Decision Table */}
      <Section variant="standard">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Response Times by Urgency
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get the right level of support when you need it
            </p>
          </div>

          <Card className="overflow-hidden border-2 border-accent-data/30 hover:border-accent-data/50 transition-colors">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left: Tiers List */}
              <div className="p-8 space-y-6 border-r border-accent-data/20">
                <h3 className="text-xl font-semibold mb-6">Support Tiers</h3>
                <div className="space-y-5">
                  {supportTiers.map((tier, index) => <div key={tier.tier} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-data/20 flex items-center justify-center text-lg">
                        {index === 0 ? '🔴' : index === 1 ? '🟠' : index === 2 ? '🟡' : '⚪'}
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold">{tier.tier}</p>
                          <span className="text-sm text-muted-foreground">•</span>
                          <p className="text-sm font-medium text-accent-data">{tier.responseTime}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">{tier.example}</p>
                      </div>
                    </div>)}
                </div>
              </div>

              {/* Right: Decision Guide */}
              <div className="p-8 bg-accent-data/5 space-y-6">
                <h3 className="text-xl font-semibold mb-6">How to Choose</h3>
                <div className="space-y-5">
                  <div className="space-y-2">
                    <p className="font-medium flex items-center gap-2">
                      <Target className="w-4 h-4 text-accent-data" aria-hidden="true" />
                      Is the deal at risk?
                    </p>
                    <p className="text-sm text-muted-foreground pl-6">
                      Choose CRITICAL if a prospect is backing out or you need immediate technical validation
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium flex items-center gap-2">
                      <Target className="w-4 h-4 text-accent-data" aria-hidden="true" />
                      Do you have a demo scheduled?
                    </p>
                    <p className="text-sm text-muted-foreground pl-6">
                      Choose HIGH if you need assessment or validation within the next week
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium flex items-center gap-2">
                      <Target className="w-4 h-4 text-accent-data" aria-hidden="true" />
                      Are you qualifying a lead?
                    </p>
                    <p className="text-sm text-muted-foreground pl-6">
                      Choose MEDIUM for pipeline development and scoping questions
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium flex items-center gap-2">
                      <Target className="w-4 h-4 text-accent-data" aria-hidden="true" />
                      General questions?
                    </p>
                    <p className="text-sm text-muted-foreground pl-6">
                      Choose GENERAL for planning, learning, or non-urgent inquiries
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <Button size="lg" className="bg-accent-data hover:bg-accent-data/90 text-white" onClick={() => navigate('/ae-technical-support')}>
              <MessageSquare className="mr-2 h-5 w-5" />
              Submit Support Request
            </Button>
          </div>
        </div>
      </Section>

      {/* Toolkit - Simplified Top 3 */}
      <Section id="resources" variant="muted">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Top 3 Tools for AEs
            </h2>
            <p className="text-xl text-muted-foreground">
              The essential resources you need to qualify and close deals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gutter-content">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-lg bg-accent-data flex items-center justify-center mx-auto">
                <ClipboardCheck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Assessment Framework</h3>
              <p className="text-base text-muted-foreground">
                15-minute discovery guide to qualify technical fit and surface red flags early
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-lg bg-accent-data flex items-center justify-center mx-auto">
                <Calculator className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold">ROI Calculator</h3>
              <p className="text-base text-muted-foreground">
                Pre-built spreadsheet to quantify efficiency gains and cost savings for prospects
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-lg bg-accent-data flex items-center justify-center mx-auto">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Battle Cards</h3>
              <p className="text-base text-muted-foreground">
                One-page competitive positioning guides for common objections and scenarios
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <Button size="lg" variant="outline" onClick={() => setIsResourceModalOpen(true)}>
              <Download className="mr-2 h-5 w-5" />
              Get AE Resources
            </Button>
          </div>
        </div>
      </Section>

      {/* Deal Playbook */}
      <Section variant="standard">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Deal Acceleration Playbook
            </h2>
            <p className="text-xl text-muted-foreground">
              Proven frameworks to overcome objections and move deals forward
            </p>
          </div>

          {/* Quick Win Scenarios - Numbered List */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Quick Win Scenarios</h3>
            <div className="space-y-6">
              {quickWins.map((win, index) => <Card key={index} className="p-8 border-accent-data/30 hover:border-accent-data/50 transition-colors">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-data/20 flex items-center justify-center">
                      <span className="text-xl font-bold text-accent-data">{index + 1}</span>
                    </div>
                    <div className="space-y-3 flex-1">
                      <div>
                        <p className="text-lg font-semibold mb-1">{win.scenario}</p>
                        <p className="text-base text-muted-foreground">
                          → {win.action}
                        </p>
                      </div>
                      <div className="pl-4 border-l-2 border-accent-data/30">
                        <p className="text-sm font-medium text-muted-foreground mb-1">Result:</p>
                        <p className="text-base text-accent-data font-medium">{win.result}</p>
                      </div>
                    </div>
                  </div>
                </Card>)}
            </div>
          </div>

          {/* Objection Handling Framework */}
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-semibold">Top 3 Objections</h3>
              <p className="text-base text-muted-foreground">
                Quick-reference responses for the most common objections
              </p>
            </div>
            <ObjectionFramework />
          </div>
        </div>
      </Section>

      {/* Support Coverage - Merged Single Card */}
      <Section variant="muted">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              When & How We Support Your Deals
            </h2>
            <p className="text-xl text-muted-foreground">
              Clear guidelines on our engagement model
            </p>
          </div>

          <Card className="overflow-hidden border-2 border-accent-data/30 hover:border-accent-data/50 transition-colors">
            <div className="grid md:grid-cols-2 gap-0">
              {/* When to Bring Us In */}
              <div className="p-8 space-y-6 border-r border-accent-data/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-data/20 flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-accent-data" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold">When to Bring Us In</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded bg-accent-data/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-accent-data">→</span>
                    </div>
                    <p className="text-base">Deal qualification (tech fit, scope validation)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded bg-accent-data/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-accent-data">→</span>
                    </div>
                    <p className="text-base">Technical objections or stalled momentum</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded bg-accent-data/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-accent-data">→</span>
                    </div>
                    <p className="text-base">Discovery call prep (red flags, questions to ask)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded bg-accent-data/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-accent-data">→</span>
                    </div>
                    <p className="text-base">Competitive displacement scenarios</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded bg-accent-data/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-accent-data">→</span>
                    </div>
                    <p className="text-base">ROI validation and business case building</p>
                  </div>
                </div>
              </div>

              {/* What We Do */}
              <div className="p-8 space-y-6 bg-accent/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">What We Do</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-base font-semibold">Rapid technical validation</p>
                    <p className="text-sm text-muted-foreground">15-min assessments, same-day feedback</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-base font-semibold">Join prospect calls</p>
                    <p className="text-sm text-muted-foreground">We can join as technical advisor</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-base font-semibold">Custom battle cards</p>
                    <p className="text-sm text-muted-foreground">Deal-specific positioning</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-base font-semibold">Scope + estimate drafts</p>
                    <p className="text-sm text-muted-foreground">Ready-to-send proposals</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-base font-semibold">Red flag identification</p>
                    <p className="text-sm text-muted-foreground">Save time on bad-fit deals</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl" />
            <Card className="relative border-2 border-primary/20 overflow-hidden">
              <div className="p-8 md:p-10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center ring-4 ring-primary/5">
                      <MessageSquare className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">Not Sure If You Need Support?</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      When in doubt, reach out. Even if it's just <span className="text-foreground font-medium">"I think this deal might be too complex"</span> or <span className="text-foreground font-medium">"Prospect is asking about integrations"</span>—we'd rather help you early than watch a deal stall.
                    </p>
                    <div className="flex items-center gap-2 pt-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      <p className="text-sm font-medium text-primary">Use the GENERAL tier for exploratory questions</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Deal Qualification Checklist */}
      

      {/* Final CTA */}
      <Section variant="standard">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Accelerate Your Deals?
            </h2>
            <p className="text-xl text-muted-foreground">
              Submit a request and we'll get back to you ASAP
            </p>
          </div>
          <div className="flex justify-center">
            <Button size="lg" onClick={() => navigate('/ae-technical-support')}>
              <MessageSquare className="mr-2 h-5 w-5" />
              Request Support
            </Button>
          </div>
        </div>
      </Section>

      <ResourceDownloadModal isOpen={isResourceModalOpen} onClose={() => setIsResourceModalOpen(false)} resourceTitle="AE Resource Bundle" resourceDescription="Get instant access to our full AE toolkit: Technical Assessment Framework, ROI Calculator, Discovery Questions, and Battle Cards." downloadUrl="/pdfs/technical-assessment-framework.pdf" />
    </div>;
}
;