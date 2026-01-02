import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Diagnostic = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Revenue Infrastructure Diagnostic | CWT Studio</title>
        <meta 
          name="description" 
          content="A short, paid engagement to diagnose what's breaking before anything is built. $2,000 USD. Fixed scope. Fixed output." 
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="max-w-[600px] mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <header className="mb-16 md:mb-20">
          <h1 className="font-mono text-2xl md:text-3xl font-medium text-foreground mb-4">
            Revenue Infrastructure Diagnostic
          </h1>
          <p className="text-lg text-muted-foreground">
            A short, paid engagement to diagnose what's breaking before anything is built.
          </p>
        </header>

        {/* Who This Is For */}
        <section className="mb-16 md:mb-20">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Who This Is For
          </p>
          <p className="text-foreground mb-6">
            Founder-led teams with revenue systems that have outgrown their original design.
          </p>
          <ul className="space-y-3 text-foreground mb-8">
            <li className="flex items-start gap-3 py-2 min-h-[44px]">
              <span className="text-muted-foreground">—</span>
              <span>Founder-led teams with existing revenue</span>
            </li>
            <li className="flex items-start gap-3 py-2 min-h-[44px]">
              <span className="text-muted-foreground">—</span>
              <span>Forecasting unreliable beyond 30 days</span>
            </li>
            <li className="flex items-start gap-3 py-2 min-h-[44px]">
              <span className="text-muted-foreground">—</span>
              <span>Systems added over time without clear ownership</span>
            </li>
            <li className="flex items-start gap-3 py-2 min-h-[44px]">
              <span className="text-muted-foreground">—</span>
              <span>Decisions taking longer than they should</span>
            </li>
          </ul>
          <p className="text-muted-foreground text-sm border-l-2 border-border pl-4">
            If you're looking for execution without diagnosis, this is not the right entry point.
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
                <span>System intake (CRM, pipeline, tooling, reporting)</span>
              </li>
              <li className="flex items-start gap-3 py-1">
                <span className="text-muted-foreground">—</span>
                <span>Asynchronous review of current flows</span>
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
                <span>Revenue system map</span>
              </li>
              <li className="flex items-start gap-3 py-1">
                <span className="text-muted-foreground">—</span>
                <span>Identified failure points and risk exposure</span>
              </li>
              <li className="flex items-start gap-3 py-1">
                <span className="text-muted-foreground">—</span>
                <span>What to fix, what to leave alone</span>
              </li>
              <li className="flex items-start gap-3 py-1">
                <span className="text-muted-foreground">—</span>
                <span>90-day execution recommendation</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Why This Exists */}
        <section className="mb-16 md:mb-20">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Why This Exists
          </p>
          <p className="text-foreground mb-4">
            Most revenue systems fail because teams build before they diagnose. This diagnostic prevents expensive rework and misalignment.
          </p>
          <p className="text-foreground">
            Teams don't fail from lack of effort. They fail from invisible system debt.
          </p>
        </section>

        {/* Pricing */}
        <section className="mb-16 md:mb-20 py-8 border-y border-border">
          <p className="font-mono text-4xl md:text-5xl font-bold text-foreground mb-4">
            $2,000 USD
          </p>
          <p className="text-muted-foreground mb-4">
            Fixed scope. Fixed output. No obligation to continue.
          </p>
          <p className="text-muted-foreground text-sm">
            Used by founder-led teams in legal, healthcare, and compliance-sensitive environments.
          </p>
        </section>

        {/* CTA */}
        <section className="mb-16 md:mb-20">
          <Link
            to="/contact?interest=diagnostic&source_page=diagnostic"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 min-h-[48px] font-mono text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            Request Diagnostic
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

export default Diagnostic;
