import SEOHead from "@/components/SEOHead";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Start = () => {
  const bookingUrl = '/contact?service=assessment';

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Revenue Infrastructure Assessment | CWT Studio"
        description="2-week revenue diagnostic for teams in regulated and high-risk environments. Fixed price. Fixed output."
        noindex={true}
      />

      <div className="max-w-[600px] mx-auto px-6 py-16 md:py-24">
        
        {/* Above the Fold */}
        <section className="mb-20">
        <h1 className="font-mono text-2xl md:text-3xl font-medium tracking-tight mb-6 leading-tight">
            Revenue systems break. We fix them.
          </h1>
          <p className="text-muted-foreground text-lg mb-10">
            A 2-week diagnostic for teams where broken systems mean lost deals.
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
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
            Who This Is For
          </p>
          <ul className="space-y-3 text-foreground mb-8">
            <li className="flex items-start gap-3 py-2 min-h-[44px]">
              <span className="text-muted-foreground mt-1">—</span>
              <span>Two databases that don't talk to each other</span>
            </li>
            <li className="flex items-start gap-3 py-2 min-h-[44px]">
              <span className="text-muted-foreground mt-1">—</span>
              <span>Pre-sale tools breaking down post-sale</span>
            </li>
            <li className="flex items-start gap-3 py-2 min-h-[44px]">
              <span className="text-muted-foreground mt-1">—</span>
              <span>Team checking 3-4 systems for one customer question</span>
            </li>
            <li className="flex items-start gap-3 py-2 min-h-[44px]">
              <span className="text-muted-foreground mt-1">—</span>
              <span>Growth about to expose cracks in current process</span>
            </li>
          </ul>
          <p className="text-muted-foreground text-sm font-mono">
            If this doesn't describe you, this is not the right engagement.
          </p>
        </section>

        {/* The Assessment */}
        <section className="mb-20">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
            The Assessment
          </p>
          <p className="text-foreground text-lg mb-6">
            2-week diagnostic.
          </p>
          <ul className="space-y-2 text-foreground/80 mb-8">
            <li className="py-2 min-h-[44px] flex items-center">System audit across CRM, pipeline, automation, reporting</li>
            <li className="py-2 min-h-[44px] flex items-center">Revenue scorecard and dependency map</li>
            <li className="py-2 min-h-[44px] flex items-center">90-day fix plan with scoped recommendations</li>
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
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
            Proof
          </p>
          <div className="space-y-3 text-foreground">
            <p>Reduced pipeline administration from 20 hours to 2 hours per week.</p>
            <p>Captured $127K in ARR.</p>
            <p>Improved forecast variance from ±40% to ±8%.</p>
          </div>
        </section>

        {/* Rules of Engagement */}
        <section className="mb-20">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
            Rules of Engagement
          </p>
          <ul className="space-y-2 text-foreground">
            <li className="py-2 min-h-[44px] flex items-center">Assessment before build</li>
            <li className="py-2 min-h-[44px] flex items-center">Fixed scope, not hourly</li>
            <li className="py-2 min-h-[44px] flex items-center">Documentation first</li>
            <li className="py-2 min-h-[44px] flex items-center">No vendor lock-in</li>
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
  );
};

export default Start;
