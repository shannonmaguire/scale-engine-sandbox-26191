import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/lib/canonical-constants";

const Fractional = () => {
  const cadence = [
    "Monthly system review",
    "Quarterly planning",
    "Ongoing workflow tuning",
    "Documentation updates",
    "Adoption tracking"
  ];

  const outcomes = [
    { label: "Faster Execution", value: "Changes ship faster" },
    { label: "Reliable Forecasts", value: "Predictions improve" },
    { label: "Founder Time Back", value: "Systems run without you" }
  ];

  const requirements = [
    "Completed Sprint",
    "Internal stakeholder",
    "Six-month minimum"
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Fractional Revenue Operations | Monthly RevOps Support | CWT Studio" 
        description="Monthly operating cadence. Post-Sprint partnership for teams scaling infrastructure without adding headcount." 
        keywords={['fractional revenue operations', 'continuous system optimization', 'monthly operating cadence']} 
        canonicalUrl="/fractional"
        serviceSchema={{
          name: 'Fractional Revenue Operations',
          description: 'Monthly operating cadence. Post-Sprint partnership.',
          offers: [
            { name: 'Monthly Review', description: 'System health audit' },
            { name: 'Quarterly Planning', description: 'Roadmap alignment' },
            { name: 'System Tuning', description: 'Performance optimization' }
          ]
        }}
        faqSchema={[
          {
            question: 'What is fractional revenue operations?',
            answer: 'Ongoing system management without hiring a full-time team.'
          },
          {
            question: 'Do I need a Sprint first?',
            answer: 'Yes. Fractional Ops requires completed infrastructure.'
          }
        ]}
      />
      
      <Breadcrumbs />
      
      {/* Hero */}
      <Section className="border-b border-border">
        <div className="max-w-4xl">
          <div className="system-status mb-8">FRACTIONAL OPERATIONS</div>
          <h1 className="heading-page mb-6">Fractional Revenue Operations</h1>
          
          <p className="text-lg text-foreground mb-10 max-w-2xl">
            Monthly operating cadence. Post-Sprint partnership.
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

      {/* Cadence */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-4xl">
          <h2 className="heading-section mb-10">Operating Cadence</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cadence.map((item, index) => (
              <div key={index} className="flex items-center gap-3 border-l-2 border-primary/50 pl-4">
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Outcomes */}
      <Section className="border-b border-border">
        <div className="max-w-4xl">
          <h2 className="heading-section mb-10">Compounding Performance</h2>

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

      {/* Requirements */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-4xl">
          <h2 className="heading-section mb-10">Requirements</h2>

          <div className="flex flex-wrap gap-4">
            {requirements.map((req, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={2} />
                <span className="text-foreground">{req}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section mb-8">Apply for Fractional Ops</h2>

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
