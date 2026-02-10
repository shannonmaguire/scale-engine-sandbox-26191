import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { POSITIONING, CTA, TIMELINES } from "@/lib/canonical-constants";

const Outbound = () => {
  return (
    <>
      <SEOHead
        title="CWT Studio — Systems Architecture"
        description={POSITIONING.supportingLine}
        noindex={true}
      />
      <div className="min-h-screen bg-background flex items-center justify-center px-6 py-16">
        <div className="max-w-[600px] w-full space-y-12">

          {/* Identity */}
          <div className="space-y-1">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              CWT Studio
            </p>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {POSITIONING.tagline}
            </p>
          </div>

          {/* Thesis */}
          <div className="space-y-6">
            <h1 className="font-mono text-2xl sm:text-3xl font-semibold tracking-tight text-foreground leading-tight">
              {POSITIONING.primary}
            </h1>
            <p className="text-foreground/80 text-base leading-relaxed max-w-md">
              {POSITIONING.supportingLine}
            </p>
          </div>

          {/* Failure patterns — recognition triggers */}
          <div className="space-y-4 border-t border-border pt-8">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Recognize any of these
            </p>
            <ul className="space-y-3 text-sm text-foreground/80">
              <li className="border-l-2 border-border pl-4">
                Data enters your systems without validation. Pricing is different in every tool.
              </li>
              <li className="border-l-2 border-border pl-4">
                Client gets onboarded. Invoice never gets sent.
              </li>
              <li className="border-l-2 border-border pl-4">
                Everyone uses the same login. Nobody knows who changed what.
              </li>
              <li className="border-l-2 border-border pl-4">
                Your last consultant gave you recommendations. Not infrastructure.
              </li>
            </ul>
          </div>

          {/* What happens */}
          <div className="space-y-4 border-t border-border pt-8">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {TIMELINES.assessment} diagnostic
            </p>
            <div className="space-y-2 text-sm text-foreground/80">
              <p>Fixed scope. $2,500. Full system audit with documented findings and implementation pathway.</p>
              <p>You'll know exactly what's broken, what it's costing, and what to fix first.</p>
            </div>
          </div>

          {/* Single CTA */}
          <div className="border-t border-border pt-8">
            <Link
              to="/assessment"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-mono text-sm uppercase tracking-widest px-8 py-4 hover:bg-primary/90 transition-colors min-h-[48px]"
            >
              {CTA.bookAssessment}
            </Link>
          </div>

          {/* Minimal footer */}
          <p className="text-xs text-muted-foreground pt-4">
            shannon@thecwtstudio.com
          </p>
        </div>
      </div>
    </>
  );
};

export default Outbound;
