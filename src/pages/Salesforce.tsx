import { Button } from "@/components/ui/button";
import { StandardCard, StandardCardContent, StandardCardHeader, StandardCardTitle } from "@/components/ui/standard-card";
import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, BarChart3, Clock, Zap, Target, Shield } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Testimonials } from "@/components/Testimonials";

const Salesforce = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Revenue Systems Assessment",
      description: "Complete assessment of your Salesforce configuration and revenue infrastructure",
      duration: "2 weeks",
      deliverables: ["Revenue Infrastructure Scorecard", "System analysis", "90-day roadmap"]
    },
    {
      icon: Zap,
      title: "Automation & Integration",
      description: "Connect your existing tools and automate manual processes to increase efficiency",
      duration: "4-8 weeks",
      deliverables: ["Custom integrations", "Workflow automation", "Data synchronization"]
    },
    {
      icon: Target,
      title: "Performance Optimization",
      description: "Fine-tune your Salesforce configuration for maximum team adoption and results",
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
      title: "Discovery & Assessment", 
      description: "We analyze your current setup, identify pain points, and map out optimization opportunities.",
      timeline: "Week 1-2"
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Create a detailed implementation roadmap with clear priorities and expected outcomes.",
      timeline: "Week 3"
    },
    {
      step: "03", 
      title: "Implementation",
      description: "Build and deploy optimizations with minimal disruption to your daily operations.",
      timeline: "Week 4-8"
    },
    {
      step: "04",
      title: "Training & Support",
      description: "Ensure your team knows how to use the new systems and processes effectively.",
      timeline: "Week 8-10"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Salesforce Optimization Services | CWT Studio Revenue Systems"
        description="Transform Salesforce investment into predictable revenue. Assessment, sprint, optimization for backend revenue systems. Built for high-trust industries."
        keywords={[
          'Salesforce optimization services',
          'Salesforce revenue systems',
          'backend Salesforce architecture',
          'Salesforce assessment sprint',
          'revenue infrastructure Salesforce'
        ]}
        canonicalUrl="/salesforce"
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
              Salesforce Systems That Scale
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Salesforce investment into predictable revenue. Assessment, sprint, optimization.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-lg text-sm mb-6">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-muted-foreground">In partnership with <strong className="text-foreground">CloudRoute</strong> for enterprise-grade technical delivery</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="teal" asChild>
                <Link to="/contact">
                  Start Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/proof">
                  See Proof
                </Link>
              </Button>
            </div>
        </div>
      </Section>

      {/* Services */}
      <Section>
        <div className="text-center mb-12">
            <h2 className="heading-section mb-4 text-foreground">Revenue Systems for Salesforce</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Assessment-driven implementations that make Salesforce work harder for your revenue team
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gutter-content spacing-subsection">
            {services.map((service, index) => (
              <StandardCard key={index} variant="bordered" equalHeight className="p-8 hover:border-accent transition-all">
                <StandardCardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <StandardCardTitle className="text-xl">{service.title}</StandardCardTitle>
                  <div className="flex items-center gap-2 text-sm text-accent">
                    <Clock className="w-4 h-4" />
                    {service.duration}
                  </div>
                </StandardCardHeader>
                <StandardCardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">Key Deliverables:</p>
                    {service.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
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
                  <span className="text-lg">{benefit}</span>
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gutter-standard relative">
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
                  <p className="text-muted-foreground">{step.description}</p>
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
            <h2 className="heading-section mb-6">Strategic Partnership Model</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              CWT Studio leads strategy and discovery. CloudRoute delivers certified Salesforce technical implementation. Together, we bring operator expertise with enterprise-grade technical authority.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gutter-content spacing-subsection">
            <div className="bg-card p-7 rounded-lg border-2 border-accent/50 hover:border-accent transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-lg text-foreground mb-2">
                    Certified Platform Knowledge
                  </h3>
                  <p className="text-muted-foreground">
                    CloudRoute's certified Salesforce partnership brings enterprise-grade technical delivery with partner-level resources and support channels
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-7 rounded-lg border-2 border-accent/50 hover:border-accent transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-lg text-foreground mb-2">
                    Rapid Implementation
                  </h3>
                  <p className="text-muted-foreground">
                    Faster deployment timelines without sacrificing quality or enterprise-grade standards
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-7 rounded-lg border-2 border-accent/50 hover:border-accent transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-lg text-foreground mb-2">
                    Technical Debt Resolution
                  </h3>
                  <p className="text-muted-foreground">
                    Proven frameworks to clean up legacy implementations and accelerate your deal cycles by 30%
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-7 rounded-lg border-2 border-accent/50 hover:border-accent transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-lg text-foreground mb-2">
                    Measurable ROI
                  </h3>
                  <p className="text-muted-foreground">
                    Every engagement includes documented outcomes, adoption metrics, and 12-month growth projections
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-warm/20 border-2 border-warm rounded-lg p-8 text-center mt-16">
            <p className="text-lg text-foreground mb-6">
              <strong>The Result:</strong> Operator-led revenue systems with certified Salesforce expertise. 
              We deliver the speed and pragmatism of a consultancy with enterprise-grade technical authority.
            </p>
            <Button size="lg" variant="teal" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
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
          
          <div className="grid md:grid-cols-2 gutter-content spacing-subsection">
            <StandardCard variant="bordered" equalHeight className="p-8 border-2 border-accent/50">
              <StandardCardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <StandardCardTitle className="text-xl">CWT Studio</StandardCardTitle>
                <p className="text-sm text-accent font-semibold">Strategy & Optimization</p>
              </StandardCardHeader>
              <StandardCardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm">Revenue operations expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm">Business process design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm">Performance analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm">Ongoing optimization</span>
                  </li>
                </ul>
              </StandardCardContent>
            </StandardCard>

            <StandardCard variant="bordered" equalHeight className="p-8 border-2 border-accent/50">
              <StandardCardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <StandardCardTitle className="text-xl">CloudRoute</StandardCardTitle>
                <p className="text-sm text-accent font-semibold">Technical Implementation</p>
              </StandardCardHeader>
              <StandardCardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm">Salesforce development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm">System integrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm">Technical architecture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm">Platform maintenance</span>
                  </li>
                </ul>
              </StandardCardContent>
            </StandardCard>
          </div>
        </div>
      </Section>

      {/* Client Testimonials */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-subsection mb-8 text-center">Client Results</h2>
          <Testimonials 
            variant="compact"
            testimonials={[
              {
                quote: "Shannon cleaned up five years of Salesforce technical debt in 8 weeks. Our forecast accuracy improved 25% and deal cycles are 30% faster.",
                author: "VP Revenue Operations",
                role: "VP Revenue Operations",
                company: "B2B SaaS"
              },
              {
                quote: "The assessment identified exactly where our revenue systems were breaking. Implementation was fast and our team adoption went from 60% to 92%.",
                author: "Head of Sales",
                role: "Head of Sales",
                company: "Professional Services"
              }
            ]}
          />
        </div>
      </Section>

    </div>
  );
};

export default Salesforce;
