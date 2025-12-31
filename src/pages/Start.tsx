import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Start = () => {
  const bookingUrl = '/contact?service=assessment';

  return (
    <>
      <Helmet>
        <title>Revenue Infrastructure Assessment | CWT Studio</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="2-week revenue diagnostic for teams in regulated and high-risk environments. Fixed price. Fixed output." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <div className="max-w-[600px] mx-auto px-6 py-16 md:py-24">
          
          {/* Above the Fold */}
          <section className="mb-20">
            <h1 className="font-mono text-2xl md:text-3xl font-medium tracking-tight mb-6 leading-tight">
              Your revenue systems are either compounding or leaking.
            </h1>
            <p className="text-muted-foreground text-lg mb-10">
              We find the leaks and install systems that compound.
            </p>
            <Link
              to={bookingUrl}
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 min-h-[48px] font-mono text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
            >
              Book Revenue Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

          {/* Who This Is For */}
          <section className="mb-20">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
              Who This Is For
            </h2>
            <ul className="space-y-4 text-foreground mb-8">
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">—</span>
                <span>Running demand through fragmented systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">—</span>
                <span>Forecasting unreliable beyond 30 days</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">—</span>
                <span>Founder still routing deals manually</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground mt-1">—</span>
                <span>Tools adopted but not integrated</span>
              </li>
            </ul>
            <p className="text-muted-foreground text-sm font-mono">
              If this doesn't describe you, this is not the right engagement.
            </p>
          </section>

          {/* The Assessment */}
          <section className="mb-20">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
              The Assessment
            </h2>
            <p className="text-foreground text-lg mb-6">
              2-week diagnostic.
            </p>
            <ul className="space-y-3 text-foreground/80 mb-8">
              <li>System audit across CRM, pipeline, automation, reporting</li>
              <li>Revenue scorecard and dependency map</li>
              <li>90-day fix plan with scoped recommendations</li>
            </ul>
            <p className="font-mono text-sm text-foreground mb-6">
              Fixed price. Fixed output. No obligation to continue.
            </p>
            <p className="text-muted-foreground text-sm">
              Most revenue systems fail because teams build before they diagnose.
            </p>
          </section>

          {/* Proof */}
          <section className="mb-20">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
              Proof
            </h2>
            <div className="space-y-3 text-foreground">
              <p>Reduced pipeline administration from 20 hours to 2 hours per week.</p>
              <p>Captured $127K in ARR.</p>
              <p>Improved forecast variance from ±40% to ±8%.</p>
            </div>
          </section>

          {/* Rules of Engagement */}
          <section className="mb-20">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
              Rules of Engagement
            </h2>
            <ul className="space-y-3 text-foreground">
              <li>Assessment before build</li>
              <li>Fixed scope, not hourly</li>
              <li>Documentation first</li>
              <li>No vendor lock-in</li>
            </ul>
          </section>

          {/* Final CTA */}
          <section className="pt-8 border-t border-border">
            <Link
              to={bookingUrl}
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 min-h-[48px] font-mono text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
            >
              Book Revenue Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

        </div>
      </div>
    </>
  );
};

export default Start;
