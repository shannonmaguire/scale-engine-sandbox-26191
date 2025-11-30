import { Button } from "@/components/ui/button";
import { StandardCard, StandardCardContent, StandardCardHeader, StandardCardTitle } from "@/components/ui/standard-card";
import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, BarChart3, Clock, Zap, Target, Shield } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA, ROUTES } from "@/lib/canonical-constants";

const Salesforce = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Revenue Systems Assessment",
      description: "Salesforce configuration and revenue infrastructure audit",
      duration: "2 weeks",
      deliverables: ["Revenue Infrastructure Scorecard", "System analysis", "90-day roadmap"]
    },
    {
      icon: Zap,
      title: "Automation & Integration",
      description: "Tool integration. Manual process automation.",
      duration: "4-8 weeks",
      deliverables: ["Custom integrations", "Workflow automation", "Data synchronization"]
    },
    {
      icon: Target,
      title: "Performance Optimization",
      description: "Salesforce configuration tuned for adoption and performance",
      duration: "3-6 weeks",
      deliverables: ["Custom fields & objects", "Reporting dashboards", "User training"]
    }
  ];

  const benefits = [
    "40% reduction in manual data entry",
    "Improved forecast accuracy by 25%",
    "30% faster deal cycle times",
    "90%+ user adoption rates"
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy", 
      description: "Current setup analysis. Optimization identification. Implementation roadmap.",
      timeline: "Week 1-3"
    },
    {
      step: "02", 
      title: "Build & Deploy",
      description: "Optimization implementation. Minimal disruption.",
      timeline: "Week 4-8"
    },
    {
      step: "03",
      title: "Training & Handoff",
      description: "Knowledge transfer. Team adoption.",
      timeline: "Week 8-10"
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
      <Section className="bg-card border-b border-border shadow-lg shadow-accent/10">
        <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-mono text-muted-foreground uppercase tracking-wide mb-4">
              For Salesforce Teams and Partners
            </p>
            <div className="system-status border-accent mb-6">
              <span className="text-accent">PLATFORM OPTIMIZATION</span>
            </div>
            <h1 className="heading-page mb-6">
              Salesforce Revenue Infrastructure
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Assessment-driven implementations backed by ISV & OEM partner expertise. Fragmented systems rebuilt as scalable revenue infrastructure.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-lg text-sm mb-6">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-muted-foreground">In partnership with <strong className="text-foreground">CloudRoute</strong> — Salesforce ISV & OEM Partner with 100+ certifications and exclusive Salesforce-only focus</span>
            </div>
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

      {/* Services */}
      <Section>
        <div className="text-center mb-12">
            <h2 className="heading-section mb-4 text-foreground">Salesforce Revenue Systems</h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Assessment-driven implementations. Measured outcomes.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gutter-content spacing-subsection">
            {services.map((service, index) => (
              <StandardCard key={index} variant="bordered" equalHeight className="p-8 hover:border-accent transition-all">
                <StandardCardHeader>
                  <StandardCardTitle className="text-xl mb-2">{service.title}</StandardCardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Clock className="w-4 h-4" />
                    {service.duration}
                  </div>
                </StandardCardHeader>
                <StandardCardContent>
                  <p className="text-base text-muted-foreground mb-4">{service.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-base">Key Deliverables:</p>
                    {service.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-base">
                        <CheckCircle className="w-3 h-3 text-accent flex-shrink-0" />
                        {deliverable}
                      </div>
                    ))}
                  </div>
                </StandardCardContent>
              </StandardCard>
            ))}
          </div>
      </Section>

      {/* Benefits */}
      <Section className="bg-accent/5">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Proven Results</h2>
              <p className="text-xl text-muted-foreground">
                Our clients typically see these improvements within 90 days
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gutter-standard">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-card p-6 rounded-lg border-l-4 border-accent-data">
                  <Shield className="w-6 h-6 accent-data flex-shrink-0" />
                  <span className="text-xl">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
      </Section>

      {/* Process */}
      <Section>
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Work</h2>
            <p className="text-xl text-muted-foreground">
              A proven process that minimizes disruption while maximizing results
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gutter-standard relative">
            {/* Teal pipeline connector */}
            <div className="hidden lg:block absolute top-6 left-0 right-0 h-0.5 bg-accent/40" style={{ zIndex: 0 }} />
            
            {process.map((step, index) => (
              <StandardCard key={index} equalHeight className="relative" style={{ zIndex: 1 }}>
                <StandardCardHeader>
                  <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-lg shadow-accent/30">
                    {step.step}
                  </div>
                  <StandardCardTitle className="text-lg">{step.title}</StandardCardTitle>
                  <p className="text-sm text-accent font-semibold">{step.timeline}</p>
                </StandardCardHeader>
                <StandardCardContent>
                  <p className="text-base text-muted-foreground">{step.description}</p>
                </StandardCardContent>
              </StandardCard>
            ))}
          </div>
      </Section>

      {/* Salesforce Expertise */}
      <Section className="bg-accent/5 border-y-2 border-accent/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-mono mb-6">
              <Shield className="w-4 h-4" />
              SALESFORCE EXPERTISE
            </div>
            <h2 className="heading-section mb-6">Salesforce-Only Expertise That Scales Globally</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              CWT Studio leads strategy and discovery. CloudRoute—a family-owned Salesforce ISV & OEM Partner with 100+ certifications—delivers pure Salesforce technical implementation with global reach and enterprise-grade authority.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gutter-content spacing-subsection">
            <div className="bg-card p-7 rounded-lg border-l-4 border-accent hover:border-l-8 transition-all">
              <h3 className="font-mono font-bold text-xl text-foreground mb-3">
                100+ Salesforce Certifications
              </h3>
              <p className="text-base text-muted-foreground">
                Deep platform expertise across all Salesforce clouds and specializations
              </p>
            </div>

            <div className="bg-card p-7 rounded-lg border-l-4 border-accent hover:border-l-8 transition-all">
              <h3 className="font-mono font-bold text-xl text-foreground mb-3">
                ISV & OEM Partner
              </h3>
              <p className="text-base text-muted-foreground">
                Direct access to platform resources, beta features, and priority support channels
              </p>
            </div>

            <div className="bg-card p-7 rounded-lg border-l-4 border-accent hover:border-l-8 transition-all">
              <h3 className="font-mono font-bold text-xl text-foreground mb-3">
                Measurable Outcomes
              </h3>
              <p className="text-base text-muted-foreground">
                Documented results, adoption metrics, and 12-month growth projections
              </p>
            </div>
          </div>

        </div>
      </Section>

      {/* Getting Started */}
      <Section variant="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section mb-4">Getting Started</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Schedule a discovery consultation to assess your Salesforce configuration and identify high-impact optimizations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="teal" asChild>
              <Link to="/contact?interest=salesforce">Schedule Discovery Call</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact?interest=salesforce">Ask Questions</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Partnership & Delivery Model */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-mono mb-6">
              <Target className="w-4 h-4" />
              PARTNERSHIP MODEL
            </div>
            <h2 className="heading-section mb-4">How We Deliver: CWT + CloudRoute</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic collaboration combining revenue operations expertise with enterprise-grade technical implementation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gutter-content">
            <StandardCard variant="bordered" className="p-8">
              <h3 className="text-2xl font-bold mb-2">CWT Studio</h3>
              <p className="text-muted-foreground font-medium mb-8">Strategy & Optimization</p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-base">Revenue operations expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-base">Business process design</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-base">Performance analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-base">Ongoing optimization</span>
                </li>
              </ul>
            </StandardCard>

            <StandardCard variant="bordered" className="p-8">
              <h3 className="text-2xl font-bold mb-2">CloudRoute</h3>
              <p className="text-muted-foreground font-medium mb-8">Technical Implementation</p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-base">Salesforce development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-base">System integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-base">Technical architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-base">Platform maintenance</span>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-base text-muted-foreground">
                  <span className="font-semibold text-foreground">Salesforce-Only Focus:</span> CloudRoute specializes exclusively in Salesforce, ensuring deep platform expertise without dilution.
                </p>
              </div>
            </StandardCard>
          </div>
        </div>
      </Section>

    </div>
  );
};

export default Salesforce;
