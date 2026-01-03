import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const DiagnosticLaw = () => {
  return (
    <>
      <Helmet>
        <title>Legal Revenue & Systems Diagnostic | CWT Studio</title>
        <meta 
          name="description" 
          content="A structured diagnostic for law firms and legal practices where client acquisition, case management, and intake systems determine growth capacity. $2,000 USD. Fixed scope and output." 
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <div className="max-w-[600px] mx-auto px-6 py-16 md:py-24">
          
          {/* Header */}
          <header className="mb-16 md:mb-20">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Legal Revenue & Systems Diagnostic
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A structured diagnostic for multi-practice and multi-attorney law firms that need clarity before committing to tools, vendors, or rebuilds.
            </p>
          </header>

          {/* Who This Is For */}
          <section className="mb-16 md:mb-20">
            <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-wider mb-6">
              Who This Is For
            </h2>
            <p className="text-base text-muted-foreground mb-6">
              Law firms where client acquisition, case management, and intake systems have outgrown their original design.
            </p>
            <ul className="space-y-3 text-base">
              <li className="flex items-start min-h-[44px]">
                <span className="text-muted-foreground mr-3">—</span>
                <span>Multi-practice or multi-attorney law firms</span>
              </li>
              <li className="flex items-start min-h-[44px]">
                <span className="text-muted-foreground mr-3">—</span>
                <span>Marketing spend increasing without clear case attribution</span>
              </li>
              <li className="flex items-start min-h-[44px]">
                <span className="text-muted-foreground mr-3">—</span>
                <span>CRMs, case management, and intake systems stitched together without ownership</span>
              </li>
              <li className="flex items-start min-h-[44px]">
                <span className="text-muted-foreground mr-3">—</span>
                <span>Client intake leaking leads between first contact and signed retainer</span>
              </li>
              <li className="flex items-start min-h-[44px]">
                <span className="text-muted-foreground mr-3">—</span>
                <span>Compliance and conflict-check gaps discovered after engagement</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground mt-6 border-l-2 border-border pl-4">
              If you're looking for one-off landing pages or quick fixes without diagnosis, this is not the right entry point.
            </p>
          </section>

          {/* What Happens */}
          <section className="mb-16 md:mb-20">
            <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-wider mb-6">
              What Happens
            </h2>
            
            <div className="mb-8">
              <h3 className="text-base font-medium mb-4">Diagnostic Phase</h3>
              <ul className="space-y-2 text-base text-muted-foreground">
                <li className="flex items-start min-h-[44px]">
                  <span className="mr-3">—</span>
                  <span>System intake (client acquisition, CRM, case management, intake flows)</span>
                </li>
                <li className="flex items-start min-h-[44px]">
                  <span className="mr-3">—</span>
                  <span>Asynchronous review of current infrastructure</span>
                </li>
                <li className="flex items-start min-h-[44px]">
                  <span className="mr-3">—</span>
                  <span>Live diagnostic call</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium mb-4">Outputs</h3>
              <ul className="space-y-2 text-base text-muted-foreground">
                <li className="flex items-start min-h-[44px]">
                  <span className="mr-3">—</span>
                  <span>Full system map (visual and written)</span>
                </li>
                <li className="flex items-start min-h-[44px]">
                  <span className="mr-3">—</span>
                  <span>Identified failure points and conflict-sensitive touchpoints</span>
                </li>
                <li className="flex items-start min-h-[44px]">
                  <span className="mr-3">—</span>
                  <span>Prioritized action plan with fix, defer, or leave untouched recommendations</span>
                </li>
                <li className="flex items-start min-h-[44px]">
                  <span className="mr-3">—</span>
                  <span>90-day execution path (optional)</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Why This Exists */}
          <section className="mb-16 md:mb-20">
            <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-wider mb-6">
              Why This Exists
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Legal practices accumulate invisible debt when teams build client acquisition infrastructure before understanding what already exists. This diagnostic surfaces that debt before it compounds into intake leakage, compliance gaps, or operational misalignment.
            </p>
          </section>

          {/* Pricing */}
          <section className="mb-16 md:mb-20">
            <h2 className="font-mono text-sm text-muted-foreground uppercase tracking-wider mb-6">
              Pricing
            </h2>
            <p className="text-3xl font-bold mb-4">$2,000 USD</p>
            <p className="text-base text-muted-foreground mb-4">
              Fixed scope and output. No obligation to continue.
            </p>
            <p className="text-sm text-muted-foreground">
              Used by multi-practice law firms in client acquisition, case management, and intake-sensitive environments.
            </p>
          </section>

          {/* CTA */}
          <section className="mb-16 md:mb-20">
            <Link 
              to="/contact?interest=legal-diagnostic&source_page=diagnostic-law"
              className="inline-flex items-center justify-center min-h-[48px] px-8 bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
            >
              Request Legal Diagnostic
            </Link>
            <p className="text-sm text-muted-foreground mt-4">
              This is the first step. Nothing more.
            </p>
          </section>

          {/* Minimal Footer */}
          <footer className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">CWT Studio</p>
            <p className="text-sm text-muted-foreground">Revenue architecture for high-trust teams</p>
            <a 
              href="mailto:shannon@thecwtstudio.com" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              shannon@thecwtstudio.com
            </a>
          </footer>

        </div>
      </div>
    </>
  );
};

export default DiagnosticLaw;
