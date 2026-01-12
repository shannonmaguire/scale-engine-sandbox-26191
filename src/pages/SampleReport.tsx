import SEOHead from "@/components/SEOHead";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const SampleReport = () => {
  return (
    <>
      <SEOHead
        title="Sample Assessment Report | Revenue Systems Diagnostic Output"
        description="See what you get from a CWT Studio revenue systems assessment. Sample diagnostic report showing system mapping, failure points, and prioritized recommendations."
        keywords={["revenue assessment sample", "CRM audit report", "RevOps diagnostic example", "systems assessment deliverable", "revenue operations report"]}
      />

      <main className="min-h-screen bg-background">
        <Section>
          <Breadcrumbs />

          <SectionHeader
            title="Sample Assessment Report"
            description="This is what the diagnostic output looks like. Redacted from an actual client engagement."
          />

          {/* Report Preview */}
          <div className="mt-12 border border-border">
            {/* Report Header */}
            <div className="border-b border-border p-8 bg-muted/30">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-muted-foreground" />
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Revenue Systems Diagnostic Report
                </span>
              </div>
              <h2 className="font-display text-2xl font-medium text-foreground mb-2">
                [Client Name Redacted]
              </h2>
              <p className="text-muted-foreground">
                B2B SaaS · $2.4M ARR · 12-person sales team
              </p>
            </div>

            {/* Executive Summary */}
            <div className="border-b border-border p-8">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                Executive Summary
              </h3>
              <p className="text-foreground mb-4">
                Current revenue infrastructure shows three critical failure points that compound into 23% pipeline leakage between qualification and close. Primary issues stem from disconnected systems between marketing automation and CRM, manual handoff processes with no SLA enforcement, and reporting that measures activity rather than revenue impact.
              </p>
              <p className="text-muted-foreground text-sm">
                Estimated revenue recovery: $180K-$240K annually with 90-day implementation window.
              </p>
            </div>

            {/* System Map */}
            <div className="border-b border-border p-8">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
                System Architecture Map
              </h3>
              <div className="bg-muted/50 p-8 border border-border text-center">
                <p className="text-muted-foreground text-sm">
                  [Visual system diagram redacted]
                </p>
                <p className="text-muted-foreground text-xs mt-2">
                  Full system map included in actual report
                </p>
              </div>
            </div>

            {/* Failure Points */}
            <div className="border-b border-border p-8">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
                Identified Failure Points
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 border border-destructive/30 bg-destructive/5">
                  <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground mb-1">Critical: MQL-to-SQL handoff gap</p>
                    <p className="text-muted-foreground text-sm">
                      18-hour average delay between marketing qualification and sales contact. No automated routing. 34% of qualified leads go cold before first touch.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 border border-yellow-500/30 bg-yellow-500/5">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground mb-1">High: Attribution fragmentation</p>
                    <p className="text-muted-foreground text-sm">
                      Three different attribution models across marketing, sales, and finance. No single source of truth for revenue impact by channel.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 border border-yellow-500/30 bg-yellow-500/5">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground mb-1">High: Forecast reliability</p>
                    <p className="text-muted-foreground text-sm">
                      Stage progression based on activity completion rather than buyer signals. Forecast accuracy at 47% over trailing 6 months.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="border-b border-border p-8">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
                Prioritized Recommendations
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 border border-border">
                  <div className="w-8 h-8 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-mono text-sm text-primary">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Implement automated lead routing</p>
                    <p className="text-muted-foreground text-sm mb-2">
                      Build real-time routing from marketing automation to CRM with assignment rules based on territory, capacity, and lead score.
                    </p>
                    <p className="text-xs text-muted-foreground font-mono">
                      Timeline: 2 weeks · Impact: High · Complexity: Medium
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 border border-border">
                  <div className="w-8 h-8 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-mono text-sm text-primary">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Unify attribution model</p>
                    <p className="text-muted-foreground text-sm mb-2">
                      Establish single attribution source in CRM. Retire parallel tracking in marketing platform and spreadsheets.
                    </p>
                    <p className="text-xs text-muted-foreground font-mono">
                      Timeline: 3 weeks · Impact: High · Complexity: High
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 border border-border">
                  <div className="w-8 h-8 bg-muted flex items-center justify-center flex-shrink-0">
                    <span className="font-mono text-sm text-muted-foreground">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Redesign stage progression criteria</p>
                    <p className="text-muted-foreground text-sm mb-2">
                      Replace activity-based stages with buyer-signal stages. Requires sales process alignment and CRM reconfiguration.
                    </p>
                    <p className="text-xs text-muted-foreground font-mono">
                      Timeline: 4 weeks · Impact: Medium · Complexity: High
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 90-Day Path */}
            <div className="p-8">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
                90-Day Execution Path
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 border border-border">
                  <p className="font-mono text-xs text-muted-foreground mb-2">Days 1-30</p>
                  <p className="font-medium text-foreground mb-2">Foundation</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Lead routing automation</li>
                    <li>• SLA implementation</li>
                    <li>• Baseline metrics capture</li>
                  </ul>
                </div>
                <div className="p-4 border border-border">
                  <p className="font-mono text-xs text-muted-foreground mb-2">Days 31-60</p>
                  <p className="font-medium text-foreground mb-2">Integration</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Attribution unification</li>
                    <li>• Reporting consolidation</li>
                    <li>• Team training</li>
                  </ul>
                </div>
                <div className="p-4 border border-border">
                  <p className="font-mono text-xs text-muted-foreground mb-2">Days 61-90</p>
                  <p className="font-medium text-foreground mb-2">Optimization</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Stage progression redesign</li>
                    <li>• Forecast calibration</li>
                    <li>• Performance validation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 border-t border-border pt-16">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-medium text-foreground mb-4">
                Get your own diagnostic report
              </h2>
              <p className="text-muted-foreground mb-6">
                This sample shows the structure and depth of analysis. Your report will be specific to your systems, your team, and your growth constraints.
              </p>
              <Button asChild>
                <Link to="/assessment">
                  Book Assessment
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
};

export default SampleReport;
