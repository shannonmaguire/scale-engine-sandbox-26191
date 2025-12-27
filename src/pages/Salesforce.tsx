import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, BarChart3, Zap, Target, Shield } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA, ROUTES } from "@/lib/canonical-constants";

const Salesforce = () => {
  const capabilities = [
    {
      icon: BarChart3,
      title: "Assessment",
      deliverables: ["System health report", "Risk analysis", "90-day fix plan"]
    },
    {
      icon: Zap,
      title: "Implementation",
      deliverables: ["Custom data structure", "Tool integrations", "Real-time dashboards"]
    },
    {
      icon: Target,
      title: "Optimization",
      deliverables: ["Process guides", "Team training", "Maintenance playbook"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Salesforce Optimization Services | CWT Studio Revenue Systems"
        description="Salesforce assessment, sprint, and optimization for revenue infrastructure. Built for high-trust industries."
        keywords={[
          'Salesforce optimization services',
          'Salesforce revenue systems',
          'Salesforce assessment sprint'
        ]}
        canonicalUrl="/salesforce"
        serviceSchema={{
          name: 'Salesforce Revenue Infrastructure',
          description: 'Assessment-driven Salesforce implementations backed by ISV & OEM partner expertise.',
          offers: [
            { name: 'Assessment', description: 'Configuration and revenue infrastructure audit' },
            { name: 'Implementation', description: 'Tool integration and automation' },
            { name: 'Optimization', description: 'Configuration tuned for adoption' }
          ]
        }}
      />
      <Breadcrumbs />

      {/* Hero */}
      <Section className="bg-card border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="system-status mb-8">SALESFORCE IMPLEMENTATION</div>
          <h1 className="heading-page mb-6">Salesforce Built for Revenue Predictability</h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="teal" asChild>
              <Link to="/contact?interest=salesforce">
                {CTA.scheduleConsultation}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to={ROUTES.proof}>{CTA.seeProof}</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Capabilities */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-section mb-10 text-center">What We Build</h2>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {capabilities.map((item, index) => (
              <div key={index} className="border border-border bg-card p-6">
                <item.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="heading-subsection mb-4">{item.title}</h3>
                <div className="space-y-2">
                  {item.deliverables.map((deliverable, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      {deliverable}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Partner Model */}
      <Section className="bg-accent/5 border-y border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 text-label mb-6">
              <Shield className="w-4 h-4 text-accent" />
              PARTNER NETWORK
            </div>
            <h2 className="heading-section">CWT + CloudRoute</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 border-l-2 border-primary">
              <h3 className="heading-subsection mb-2">CWT Studio</h3>
              <p className="text-sm text-muted-foreground">Strategy & design</p>
            </div>

            <div className="bg-card p-6 border-l-2 border-accent">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="heading-subsection">CloudRoute</h3>
                <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded font-mono">ISV Partner</span>
              </div>
              <p className="text-sm text-muted-foreground">Platform implementation</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section mb-8">Start With Assessment</h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="teal" asChild>
              <Link to="/contact?interest=salesforce">{CTA.scheduleConsultation}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to={ROUTES.assessment}>Book Assessment</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Salesforce;
