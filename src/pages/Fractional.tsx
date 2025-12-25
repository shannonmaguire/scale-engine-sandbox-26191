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
      component: "Monthly Check-In",
      description: "We review how your automations are running, check your data quality, make sure your tools are playing nice, and spot bottlenecks before they hurt."
    },
    {
      component: "Quarterly Planning",
      description: "Every 3 months, we sit down and plan ahead—what system upgrades align with your goals and where you're headed."
    },
    {
      component: "Ongoing Tuning",
      description: "Based on how your team is actually using things, we refine workflows, update dashboards, and tweak automation logic."
    },
    {
      component: "Keeping Docs Fresh",
      description: "We keep your how-to guides, field definitions, and admin processes up to date as things evolve."
    },
    {
      component: "Adoption Tracking",
      description: "We watch who's using what, find training gaps, and measure whether people are actually engaging with the tools."
    }
  ];

  const compoundingOutcomes = [
    { label: "Faster Execution", description: "Changes ship faster. Knowledge stays in-house. Technical mess stays under control." },
    { label: "Reliable Forecasts", description: "Predictions get more accurate. Data quality goes up. Reporting stops being a fire drill." },
    { label: "Founder Gets Time Back", description: "You stop putting out fires. Systems work without you. Your team gets better at this." }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Fractional Revenue Operations | Monthly RevOps Support | CWT Studio" 
        description="Monthly operating cadence. Post-Sprint partnership for teams scaling infrastructure without adding headcount." 
        keywords={['fractional revenue operations', 'continuous system optimization', 'backend systems maintenance', 'monthly operating cadence']} 
        canonicalUrl="/fractional"
        serviceSchema={{
          name: 'Fractional Revenue Operations',
          description: 'Monthly operating cadence. Post-Sprint partnership for teams scaling infrastructure without adding headcount.',
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
        faqSchema={[
          {
            question: 'What is fractional revenue operations?',
            answer: 'Fractional RevOps provides ongoing system management and optimization without hiring a full-time team. We maintain your revenue infrastructure, tune workflows, update documentation, and plan quarterly enhancements.'
          },
          {
            question: 'Do I need to complete a Sprint first?',
            answer: 'Yes, Fractional Ops is a post-Sprint partnership. We require either a completed CWT Studio Sprint or equivalent revenue infrastructure already in production before starting ongoing support.'
          },
          {
            question: 'What is the minimum commitment for Fractional Ops?',
            answer: 'We require a six-month minimum commitment. This ensures continuity and allows strategic value to compound over time. Monthly retainer is scoped during Sprint handoff based on system complexity.'
          },
          {
            question: 'What happens during monthly check-ins?',
            answer: 'We review automation performance, check data quality, verify system integrations, spot bottlenecks, and make proactive improvements. Quarterly sessions cover strategic roadmap planning aligned with your business goals.'
          }
        ]}
      />
      
      <Breadcrumbs />
      
      <Section className="border-b border-border">
        {/* Hero */}
        <div className="max-w-4xl">
          <div className="system-status mb-8">FRACTIONAL OPERATIONS</div>
          
          <h1 className="heading-page mb-6 leading-[1.1]">Fractional Revenue Operations</h1>
          
          <p className="text-description text-foreground leading-relaxed max-w-2xl mb-10">
            Monthly operating cadence. Post-Sprint partnership for teams scaling infrastructure without adding headcount.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link to="/contact?interest=fractional&source_page=fractional">
                {CTA.applyFractional}
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
                <div className="heading-subsection mb-3">
                  {item.component}
                </div>
                <p className="text-description text-muted-foreground leading-relaxed">
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
            Long-term operator partnership. System reliability increases. Team capability grows. Forecast accuracy improves.
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
                <div className="heading-subsection mb-2">Completed Sprint</div>
                <p className="text-description text-muted-foreground">CWT Studio Sprint or equivalent revenue infrastructure in production.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
              <div>
                <div className="heading-subsection mb-2">Internal Stakeholder</div>
                <p className="text-description text-muted-foreground">Designated point person with system access and decision authority.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
              <div>
                <div className="heading-subsection mb-2">Six-Month Minimum</div>
                <p className="text-description text-muted-foreground">Initial commitment ensures continuity and strategic value compounding.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
              <div>
                <div className="heading-subsection mb-2">Scoped Investment</div>
                <p className="text-description text-muted-foreground">Monthly retainer scoped during Sprint handoff based on system complexity and support needs.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-primary/30 mb-8 font-mono text-xs uppercase tracking-widest">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle" />
            <span className="text-primary font-semibold">Long-Term Partnership</span>
          </div>

          <h2 className="heading-section mb-6">Apply for Fractional Ops</h2>
          <p className="text-description text-muted-foreground mb-10 max-w-2xl mx-auto">
            Monthly operating cadence. Six-month minimum. Sprint completion required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact?interest=fractional&source_page=fractional">
                {CTA.applyFractional}
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
