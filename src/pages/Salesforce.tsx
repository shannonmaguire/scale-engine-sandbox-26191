import { Button } from "@/components/ui/button";
import { StandardCard, StandardCardContent, StandardCardHeader, StandardCardTitle } from "@/components/ui/standard-card";
import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, BarChart3, Clock, Zap, Target, Shield } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA, ROUTES } from "@/lib/canonical-constants";

const Salesforce = () => {
  const capabilities = [
    {
      icon: BarChart3,
      title: "Assessment",
      description: "Audit existing configuration. Identify technical debt. Map to revenue outcomes.",
      deliverables: ["Infrastructure scorecard", "Risk analysis", "Implementation roadmap"]
    },
    {
      icon: Zap,
      title: "Implementation",
      description: "Build integrations. Automate workflows. Deploy reporting infrastructure.",
      deliverables: ["Custom objects & fields", "API integrations", "Dashboard architecture"]
    },
    {
      icon: Target,
      title: "Optimization",
      description: "Tune performance. Fix adoption blockers. Document handoff.",
      deliverables: ["Process documentation", "User training", "Maintenance runbook"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Salesforce Optimization Services | CWT Studio Revenue Systems"
        description="Transform Salesforce investment into predictable revenue. Assessment, sprint, optimization for revenue infrastructure. Built for high-trust industries."
        keywords={[
          'Salesforce optimization services',
          'Salesforce revenue systems',
          'backend Salesforce architecture',
          'Salesforce assessment sprint',
          'revenue infrastructure Salesforce'
        ]}
        canonicalUrl="/salesforce"
        serviceSchema={{
          name: 'Salesforce Revenue Infrastructure',
          description: 'Assessment-driven Salesforce implementations backed by ISV & OEM partner expertise. Transform fragmented systems into scalable revenue infrastructure.',
          offers: [
            {
              name: 'Revenue Systems Assessment',
              description: 'Salesforce configuration and revenue infrastructure audit with 90-day roadmap'
            },
            {
              name: 'Automation & Integration',
              description: 'Tool integration and manual process automation for Salesforce'
            },
            {
              name: 'Performance Optimization',
              description: 'Salesforce configuration tuned for adoption and performance'
            }
          ]
        }}
      />
      <Breadcrumbs />
      {/* Hero Section */}
      <Section className="bg-card border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
            <div className="system-status border-accent mb-8">
              <span className="text-accent">SALESFORCE SOLUTIONS</span>
            </div>
            <h1 className="heading-page mb-6">
              Salesforce Built for Revenue Predictability
            </h1>
            <p className="text-description text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform fragmented systems into scalable revenue infrastructure. Assessment-driven implementations backed by ISV & OEM partner expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="teal" asChild>
                <Link to="/contact?interest=salesforce">
                  {CTA.scheduleConsultation}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to={ROUTES.proof}>
                  {CTA.seeProof}
                </Link>
              </Button>
            </div>
        </div>
      </Section>

      {/* Capabilities */}
      <Section>
        <div className="text-center mb-12">
            <h2 className="heading-section mb-6">What We Build</h2>
            <p className="text-description text-muted-foreground max-w-2xl mx-auto">
              Salesforce configured for revenue predictability, not feature sprawl.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gutter-content">
            {capabilities.map((item, index) => (
              <StandardCard key={index} variant="bordered" equalHeight className="p-8">
                <StandardCardHeader>
                  <item.icon className="w-8 h-8 text-accent mb-4" />
                  <StandardCardTitle className="heading-subsection mb-4">{item.title}</StandardCardTitle>
                </StandardCardHeader>
                <StandardCardContent>
                  <p className="text-description text-muted-foreground mb-6">{item.description}</p>
                  <div className="space-y-2 border-t border-border pt-4">
                    {item.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-description">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        {deliverable}
                      </div>
                    ))}
                  </div>
                </StandardCardContent>
              </StandardCard>
            ))}
          </div>
      </Section>

      {/* Partner Model */}
      <Section className="bg-accent/5 border-y border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 text-label mb-6">
              <Shield className="w-4 h-4 text-accent" />
              PARTNER NETWORK
            </div>
            <h2 className="heading-section mb-6">CWT + CloudRoute</h2>
            <p className="text-description text-muted-foreground max-w-2xl mx-auto">
              Strategy led by CWT Studio. Implementation delivered by CloudRoute—Salesforce ISV & OEM Partner with 100+ certifications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gutter-content">
            <div className="bg-card p-8 border-l-4 border-accent">
              <h3 className="heading-subsection mb-4">CWT Studio</h3>
              <p className="text-description text-muted-foreground mb-6">Revenue operations strategy and system design</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-description">Business process architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-description">Performance analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-description">Ongoing optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 border-l-4 border-accent">
              <h3 className="heading-subsection mb-4">CloudRoute</h3>
              <p className="text-description text-muted-foreground mb-6">Salesforce-exclusive technical implementation</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-description">Platform development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-description">API integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-description">System maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section mb-6">Start With Assessment</h2>
          <p className="text-description text-muted-foreground mb-10">
            Audit your current Salesforce configuration. Identify technical debt. Map implementation priorities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="teal" asChild>
              <Link to="/contact?interest=salesforce">{CTA.scheduleConsultation}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to={ROUTES.assessment}>Take Self-Assessment</Link>
            </Button>
          </div>
        </div>
      </Section>

    </div>
  );
};

export default Salesforce;
