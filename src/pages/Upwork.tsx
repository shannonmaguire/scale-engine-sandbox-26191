import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { trackCTAClick } from "@/hooks/usePageTracking";

const Upwork = () => {
  const handleCTAClick = () => {
    trackCTAClick("request-assessment", "upwork-page", "/assessment?source=upwork");
  };

  return (
    <>
      <SEOHead
        title="Revenue Systems Diagnostic | CWT Studio"
        description="System architecture diagnostic for growth teams. Fixed scope. Clear outputs."
        noindex={true}
      />

      <main className="min-h-screen bg-background text-foreground py-16 md:py-24">
        <div className="container max-w-[600px] mx-auto px-6">
          
          {/* Recognition */}
          <section className="mb-16">
            <h1 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-6">
              This isn't a funnel problem.
            </h1>
            <p className="text-foreground leading-relaxed">
              It's a system sequencing problem. Leads enter. They don't route correctly. 
              Reporting shows activity but not revenue impact. Fixes become rework within 60 days.
            </p>
          </section>

          {/* Risk */}
          <section className="mb-16">
            <h2 className="font-display text-lg font-medium text-foreground mb-6">
              What happens if this gets built wrong
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 py-2 min-h-[44px] text-foreground">
                <span className="text-muted-foreground">—</span>
                Leads enter but don't route correctly
              </li>
              <li className="flex items-start gap-3 py-2 min-h-[44px] text-foreground">
                <span className="text-muted-foreground">—</span>
                Reporting shows activity but not revenue impact
              </li>
              <li className="flex items-start gap-3 py-2 min-h-[44px] text-foreground">
                <span className="text-muted-foreground">—</span>
                Fixes become rework within 60 days
              </li>
              <li className="flex items-start gap-3 py-2 min-h-[44px] text-foreground">
                <span className="text-muted-foreground">—</span>
                You hire again in 90 days for the same problem
              </li>
            </ul>
          </section>

          {/* Offer */}
          <section className="mb-16">
            <h2 className="font-display text-lg font-medium text-foreground mb-6">
              How I work
            </h2>
            <p className="text-foreground leading-relaxed mb-8">
              I don't start with builds. I run a short diagnostic to map the current system, 
              surface failure points, and scope the build cleanly.
            </p>
            
            <div className="border border-border p-6 mb-8">
              <p className="text-foreground font-medium mb-2">System Architecture Diagnostic</p>
              <p className="text-muted-foreground text-sm mb-4">
                Full system audit. Failure points mapped. Build scope defined.
              </p>
              <p className="text-foreground font-medium">$2,000 USD · Fixed scope</p>
            </div>

            <Button 
              asChild 
              size="lg" 
              className="w-full"
              onClick={handleCTAClick}
            >
              <Link to="/assessment?source=upwork">
                Request Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </section>

          {/* Exit */}
          <section className="mb-16">
            <p className="text-muted-foreground text-sm">
              If that's useful, I'll outline scope and timeline. If not, no worries.
            </p>
          </section>

          {/* Minimal Footer */}
          <footer className="pt-8 border-t border-border">
            <p className="text-foreground font-medium mb-1">CWT Studio</p>
            <p className="text-muted-foreground text-sm mb-2">Revenue architecture for high-trust teams</p>
            <a 
              href="mailto:shannon@thecwtstudio.com" 
              className="text-muted-foreground text-sm hover:text-foreground transition-colors"
            >
              shannon@thecwtstudio.com
            </a>
          </footer>

        </div>
      </main>
    </>
  );
};

export default Upwork;
