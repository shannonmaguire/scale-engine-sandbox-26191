import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA, ROUTES } from "@/lib/canonical-constants";

const Fractional = () => {
  const operatingCadence = [
    {
      component: "Monthly Review",
      description: "System health audit tracking automation execution, data quality, integration performance, and workflow bottlenecks."
    },
    {
      component: "Quarter Planning",
      description: "Forward-looking roadmap session aligning system enhancements to business objectives and scaling requirements."
    },
    {
      component: "System Tuning",
      description: "Performance optimization based on usage patterns—workflow refinement, dashboard updates, automation logic adjustments."
    },
    {
      component: "Documentation Updates",
      description: "Process SOPs, field definitions, and admin protocols kept current as systems evolve and team capacity grows."
    },
    {
      component: "Adoption Metrics",
      description: "User behavior tracking, training gap identification, and stakeholder engagement measurement to drive system utilization."
    }
  ];

  const compoundingOutcomes = [
    { label: "Operational Velocity", description: "System changes deploy faster as institutional knowledge builds and technical debt remains controlled." },
    { label: "Forecast Reliability", description: "Prediction accuracy improves as data quality compounds and reporting infrastructure stabilizes." },
    { label: "Founder Independence", description: "Executive intervention in daily operations decreases as systems prove load-tolerant and team competence increases." }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Fractional Revenue Operations | CWT Studio" 
        description="Monthly operating cadence that compounds system performance. Post-Sprint partnership for teams scaling infrastructure without adding headcount." 
        keywords={['fractional revenue operations', 'continuous system optimization', 'backend systems maintenance', 'monthly operating cadence']} 
        canonicalUrl="/fractional"
        serviceSchema={{
          name: 'Fractional Revenue Operations',
          description: 'Monthly operating cadence that compounds system performance. Post-Sprint partnership for teams scaling infrastructure without adding headcount.',
          offers: [
            {
              name: 'Monthly Review',
              description: 'System health audit tracking automation execution, data quality, and workflow performance'
            },
            {
              name: 'Quarter Planning',
              description: 'Forward-looking roadmap session aligning system enhancements to business objectives'
            },
            {
              name: 'System Tuning',
              description: 'Performance optimization based on usage patterns and workflow refinement'
            }
          ]
        }}
      />
      
      <Breadcrumbs />
      
      <Section className="border-b border-border">
        {/* Hero */}
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h1 className="heading-section">Fractional Revenue Operations</h1>
          </div>
          
          <p className="text-description text-foreground leading-relaxed max-w-2xl mb-10">
            Monthly operating cadence that compounds system performance. Post-Sprint partnership for teams scaling infrastructure without adding headcount.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link to="/contact?interest=fractional&source_page=fractional">
                Apply for Fractional Ops
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/sprint">View Sprint</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Operating Cadence */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">Monthly Operating Cadence</h2>
          </div>

          <p className="text-description text-muted-foreground mb-10 max-w-2xl">
            Recurring rhythm that maintains system health, captures institutional knowledge, and prevents technical debt accumulation.
          </p>

          <div className="space-y-6">
            {operatingCadence.map((item, index) => (
              <div key={index} className="border-l-2 border-primary/50 pl-6">
                <div className="font-mono text-base font-semibold text-foreground mb-2">
                  {item.component}
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Compounding Outcomes */}
      <Section className="border-b border-border">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">Compounding Performance</h2>
          </div>

          <p className="text-description text-muted-foreground mb-10 max-w-2xl">
            Long-term operator partnership yields exponential returns—systems compound reliability, teams compound capability, forecasts compound accuracy.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {compoundingOutcomes.map((outcome, index) => (
              <div key={index} className="border border-border bg-card p-6">
                <div className="font-mono text-sm uppercase tracking-widest text-primary mb-3 font-semibold">
                  {outcome.label}
                </div>
                <p className="text-base text-foreground/80 leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Requirements */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">Partnership Requirements</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
              <div>
                <div className="font-mono text-base font-semibold text-foreground mb-1">Completed Sprint</div>
                <p className="text-base text-muted-foreground">CWT Studio Sprint or equivalent revenue infrastructure in production.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
              <div>
                <div className="font-mono text-base font-semibold text-foreground mb-1">Internal Stakeholder</div>
                <p className="text-base text-muted-foreground">Designated point person with system access and decision authority.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
              <div>
                <div className="font-mono text-base font-semibold text-foreground mb-1">Six-Month Minimum</div>
                <p className="text-base text-muted-foreground">Initial commitment ensures continuity and strategic value compounding.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
              <div>
                <div className="font-mono text-base font-semibold text-foreground mb-1">Monthly Investment</div>
                <p className="text-base text-muted-foreground">Starting at $6K/month based on system complexity and support scope.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-primary/30 mb-8 font-mono text-sm uppercase tracking-widest">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle" />
            <span className="text-primary font-semibold">Long-Term Partnership</span>
          </div>

          <h2 className="heading-section mb-6">Apply for Fractional Ops</h2>
          <p className="text-description text-muted-foreground mb-10 max-w-2xl mx-auto">
            Monthly operating cadence. Six-month minimum. Sprint completion required. Systems compound performance through continuous operator engagement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact?interest=fractional&source_page=fractional">
                Apply for Fractional Ops
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/sprint">View Sprint</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Fractional;
