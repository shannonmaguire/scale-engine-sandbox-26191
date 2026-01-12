import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const DiagnosticHealthcare = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Healthcare Revenue Systems Diagnostic | Multi-Provider CRM Audit"
        description="Revenue systems diagnostic for multi-provider healthcare organizations. Map patient acquisition, CRM, and compliance touchpoints. $2,000 fixed scope. Clear outputs."
        keywords={["healthcare CRM audit", "patient acquisition systems", "healthcare revenue operations", "multi-provider practice management", "healthcare compliance systems", "medical practice CRM", "healthcare marketing attribution"]}
      />

      <main className="max-w-[600px] mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <header className="mb-16 md:mb-20">
          <h1 className="font-mono text-2xl md:text-3xl font-medium text-foreground mb-4">
            Healthcare Revenue & Systems Diagnostic
          </h1>
          <p className="text-lg text-muted-foreground">
            A structured diagnostic for multi-provider and multi-location healthcare organizations that need clarity before committing to tools, vendors, or rebuilds.
          </p>
        </header>

        {/* Who This Is For */}
        <section className="mb-16 md:mb-20">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Who This Is For
          </p>
          <p className="text-foreground mb-6">
            Healthcare organizations where patient acquisition, compliance, and operational systems have outgrown their original design.
          </p>
          <ul className="space-y-3 text-foreground mb-8">
            <li className="flex items-start gap-3 py-2 min-h-[44px]">
              <span className="text-muted-foreground">—</span>
              <span>Multi-provider or multi-location healthcare organizations</span>
            </li>
            <li className="flex items-start gap-3 py-2 min-h-[44px]">
              <span className="text-muted-foreground">—</span>
              <span>Patient acquisition spend increasing without clear attribution</span>
            </li>
            <li className="flex items-start gap-3 py-2 min-h-[44px]">
              <span className="text-muted-foreground">—</span>
              <span>CRMs and tools stitched together without ownership</span>
            </li>
            <li className="flex items-start gap-3 py-2 min-h-[44px]">
              <span className="text-muted-foreground">—</span>
              <span>Teams operating in silos with no shared system map</span>
            </li>
            <li className="flex items-start gap-3 py-2 min-h-[44px]">
              <span className="text-muted-foreground">—</span>
              <span>Compliance concerns discovered after launch</span>
            </li>
          </ul>
          <p className="text-muted-foreground text-sm border-l-2 border-border pl-4">
            If you're looking for one-off landing pages or quick fixes without diagnosis, this is not the right entry point.
          </p>
        </section>

        {/* What Happens */}
        <section className="mb-16 md:mb-20">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
            What Happens
          </p>
          
          <div className="mb-8">
            <p className="font-mono text-sm text-foreground mb-4">Diagnostic Phase</p>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-start gap-3 py-1">
                <span className="text-muted-foreground">—</span>
                <span>System intake (patient acquisition, CRM, marketing automation, data flows)</span>
              </li>
              <li className="flex items-start gap-3 py-1">
                <span className="text-muted-foreground">—</span>
                <span>Asynchronous review of current infrastructure</span>
              </li>
              <li className="flex items-start gap-3 py-1">
                <span className="text-muted-foreground">—</span>
                <span>Live diagnostic call</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-sm text-foreground mb-4">Outputs</p>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-start gap-3 py-1">
                <span className="text-muted-foreground">—</span>
                <span>Full system map (visual and written)</span>
              </li>
              <li className="flex items-start gap-3 py-1">
                <span className="text-muted-foreground">—</span>
                <span>Identified failure points and compliance-sensitive touchpoints</span>
              </li>
              <li className="flex items-start gap-3 py-1">
                <span className="text-muted-foreground">—</span>
                <span>Prioritized action plan with fix, defer, or leave untouched recommendations</span>
              </li>
              <li className="flex items-start gap-3 py-1">
                <span className="text-muted-foreground">—</span>
                <span>90-day execution path (optional)</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Why This Exists */}
        <section className="mb-16 md:mb-20">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Why This Exists
          </p>
          <p className="text-foreground">
            Healthcare systems accumulate invisible debt when teams build patient acquisition infrastructure before understanding what already exists. This diagnostic surfaces that debt before it compounds into compliance risk, rework, or operational misalignment.
          </p>
        </section>

        {/* Pricing */}
        <section className="mb-16 md:mb-20 py-8 border-y border-border">
          <p className="font-mono text-4xl md:text-5xl font-bold text-foreground mb-4">
            $2,000 USD
          </p>
          <p className="text-muted-foreground mb-4">
            Fixed scope and output. No obligation to continue.
          </p>
          <p className="text-muted-foreground text-sm">
            Used by multi-provider healthcare organizations in patient acquisition, operations, and compliance-sensitive environments.
          </p>
        </section>

        {/* CTA */}
        <section className="mb-16 md:mb-20">
          <Link
            to="/contact?interest=healthcare-diagnostic&source_page=diagnostic-healthcare"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 min-h-[48px] font-mono text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            Request Healthcare Diagnostic
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-muted-foreground text-sm mt-4">
            This is the first step. Nothing more.
          </p>
        </section>

        {/* Minimal Footer */}
        <footer className="pt-8 border-t border-border">
          <p className="font-mono text-sm text-foreground mb-1">CWT Studio</p>
          <p className="text-muted-foreground text-sm mb-4">
            Revenue architecture for high-trust teams
          </p>
          <a 
            href="mailto:shannon@thecwtstudio.com" 
            className="text-muted-foreground text-sm hover:text-foreground transition-colors"
          >
            shannon@thecwtstudio.com
          </a>
        </footer>
      </main>
    </div>
  );
};

export default DiagnosticHealthcare;
