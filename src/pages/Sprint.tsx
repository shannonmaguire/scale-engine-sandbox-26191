import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA, TIMELINES } from "@/lib/canonical-constants";

const Sprint = () => {
  const phases = [
    { phase: "01", title: "Foundation", duration: "Week 1-2" },
    { phase: "02", title: "Build", duration: "Week 3-6" },
    { phase: "03", title: "Validation", duration: "Week 7-8" },
    { phase: "04", title: "Deployment", duration: "Week 9-10" },
    { phase: "05", title: "Optimization", duration: "Week 11-12" }
  ];

  const deliverables = [
    "Data model stabilization",
    "Integration architecture",
    "Automation workflows",
    "Complete documentation"
  ];

  const outcomes = [
    { label: "Load Tolerance", value: "3-5x current volume" },
    { label: "Reliable Reporting", value: "Real-time dashboards" },
    { label: "Founder Offload", value: "Operations run without you" }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="90-Day Revenue System Sprint | CRM Implementation | CWT Studio"
        description="8-12 week implementation sprint: install CRM infrastructure, automation, dashboards, and documentation."
        keywords={[
          '90-day system installation',
          'revenue infrastructure sprint',
          'Salesforce implementation',
          'RevOps automation'
        ]}
        canonicalUrl="/sprint"
        type="service"
        serviceSchema={{
          name: '90-Day Revenue System Sprint',
          description: '8-12 week implementation sprint to install complete revenue infrastructure.',
          offers: [
            { name: 'Foundation Phase', description: 'System audit, data model design' },
            { name: 'Build Phase', description: 'Workflow configuration, automation logic' },
            { name: 'Deployment', description: 'Production rollout, team onboarding' }
          ]
        }}
        faqSchema={[
          {
            question: 'How long does a sprint take?',
            answer: '8-12 weeks depending on complexity.'
          },
          {
            question: 'Do I need an assessment first?',
            answer: 'Yes. Assessment required before any Sprint.'
          }
        ]}
      />
      
      <Breadcrumbs />
      
      {/* Hero */}
      <Section className="border-b border-border">
        <div className="max-w-4xl">
          <div className="system-status mb-8">SYSTEM SPRINT</div>
          <h1 className="heading-page mb-6">90-Day Revenue Sprint</h1>
          
          <p className="text-lg text-foreground/80 mb-10 max-w-2xl">
            Fixed scope. Documented handoff.
          </p>

          <Button size="lg" asChild>
            <Link to="/contact?interest=sprint&source_page=sprint">{CTA.startSprint}</Link>
          </Button>
        </div>
      </Section>

      {/* Timeline */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-4xl">
          <h2 className="heading-section mb-10">Deployment Sequence</h2>

          <div className="grid grid-cols-5 gap-2">
            {phases.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="font-mono text-2xl font-bold text-primary/40 mb-2">{phase.phase}</div>
                <div className="font-semibold text-sm mb-1">{phase.title}</div>
                <div className="text-xs text-muted-foreground">{phase.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Deliverables */}
      <Section className="border-b border-border">
        <div className="max-w-4xl">
          <h2 className="heading-section mb-10">What You Get</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={2} />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Outcomes */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-4xl">
          <h2 className="heading-section mb-10">Expected Outcomes</h2>

          <div className="grid md:grid-cols-3 gap-4">
            {outcomes.map((outcome, index) => (
              <div key={index} className="border border-border bg-card p-6">
                <div className="font-mono text-xs uppercase tracking-widest text-primary mb-2">
                  {outcome.label}
                </div>
                <p className="text-foreground font-medium">{outcome.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section mb-8">{CTA.startSprint}</h2>

          <Button size="lg" asChild>
            <Link to="/contact?interest=sprint&source_page=sprint">
              {CTA.startSprint}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Sprint;
