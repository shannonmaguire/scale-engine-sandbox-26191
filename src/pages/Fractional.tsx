import { Button } from "@/components/ui/button";
import { StandardCard, StandardCardContent } from "@/components/ui/standard-card";
import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import { Clock, CheckCircle, TrendingUp, Users, FileText, Calendar } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceJourneyFlow } from "@/components/ServiceJourneyFlow";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Fractional = () => {
  const whatYouGet = [
    {
      icon: FileText,
      title: "Monthly Operating Review",
      description: "Performance scorecard tracking revenue metrics, system health, and adoption rates with executive summary"
    },
    {
      icon: TrendingUp,
      title: "Continuous System Optimization",
      description: "Ongoing refinement of workflows, dashboards, and automation based on actual usage patterns and team feedback"
    },
    {
      icon: Calendar,
      title: "Quarterly Strategic Planning",
      description: "Forward-looking roadmap sessions aligned to business objectives, market expansion, and scaling requirements"
    },
    {
      icon: Users,
      title: "Team Training & Documentation",
      description: "Process documentation, onboarding materials, and ongoing capability building for internal stakeholders"
    },
    {
      icon: CheckCircle,
      title: "Executive Reporting",
      description: "Actionable insights with clear recommendations, risk identification, and performance trending"
    }
  ];


  const faqs = [
    {
      question: "What's the difference between Fractional Ops and a Sprint?",
      answer: "Sprint is an 8-12 week implementation project to build your revenue infrastructure. Fractional Ops is ongoing monthly support after your systems are live. Think of Sprint as installation, Fractional Ops as continuous optimization and performance management."
    },
    {
      question: "Can I start Fractional Ops without doing a Sprint first?",
      answer: "Fractional Ops requires existing infrastructure in production. If you completed a Sprint with CWT Studio or have equivalent revenue systems already deployed, you're eligible. If not, you'll need to complete a Sprint or comparable implementation first."
    },
    {
      question: "What if I only need help a few hours per month?",
      answer: "Fractional Ops includes a minimum monthly commitment to maintain continuity and strategic oversight. For ad-hoc support, consider our on-demand support blocks (available for Web Systems clients) or schedule an Assessment to discuss lighter-touch options."
    },
    {
      question: "How is Fractional Ops different from hiring a full-time RevOps person?",
      answer: "Fractional Ops gives you senior operator-level expertise without the $120K+ salary and benefits. You get strategic oversight, hands-on system work, and vendor management at a fraction of the cost. If your systems are mature enough to require full-time attention, we'll tell you."
    },
    {
      question: "What systems and platforms do you support?",
      answer: "We primarily work with Salesforce-based revenue stacks, including common integrations like HubSpot, Outreach, Gong, Stripe, and custom APIs. If your stack is outside this ecosystem, book an Assessment to confirm fit."
    },
    {
      question: "Can I pause or cancel Fractional Ops?",
      answer: "Six-month minimum commitment is required. After that, you can cancel with 30 days notice. Pausing is available for planned business interruptions (e.g., acquisition, restructuring) on a case-by-case basis."
    }
  ];


  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Fractional Revenue Operations | CWT Studio" 
        description="Ongoing operations support for teams that need their systems maintained, optimized, and performance-driven. Starting at $6K/month with six-month minimum." 
        keywords={['fractional revenue operations', 'continuous system optimization', 'backend systems maintenance', 'Salesforce managed services']} 
        canonicalUrl="/fractional" 
      />
      
      <Breadcrumbs />
      
      <Section>
        {/* Hero */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="system-status mb-6">CONTINUOUS OPTIMIZATION</div>
          <h1 className="heading-page mb-6">Fractional Ops</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Your infrastructure is installed. Fractional ops keeps it optimized, maintained, and compounding performance through a monthly operating rhythm.
          </p>
        </div>

        {/* Service Journey Flow */}
        <div className="max-w-4xl mx-auto mb-16">
          <ServiceJourneyFlow 
            steps={[
              { name: "Assessment", href: "/assessment", completed: true },
              { name: "Sprint", href: "/sprint", completed: true },
              { name: "Fractional Ops", href: "/fractional", current: true }
            ]}
          />
        </div>

        {/* What You Get - Expanded */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="heading-subsection mb-8">What You Get</h2>
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {whatYouGet.map((item, index) => (
              <StandardCard key={index} variant="bordered" className="border-primary/20" equalHeight>
                <StandardCardContent className="p-6 flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                </StandardCardContent>
              </StandardCard>
            ))}
          </div>
        </div>


        {/* How It Works */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="heading-subsection mb-6">How It Works</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-bold text-lg mb-2">Month 1: Baseline & Strategic Planning</h3>
              <p className="text-muted-foreground">
                Current state assessment, priority alignment, stakeholder onboarding
              </p>
            </div>
            <div className="border-l-4 border-primary/60 pl-6">
              <h3 className="font-bold text-lg mb-2">Months 2-3: Infrastructure Optimization</h3>
              <p className="text-muted-foreground">
                System enhancements, process refinement, training deployment
              </p>
            </div>
            <div className="border-l-4 border-primary/30 pl-6">
              <h3 className="font-bold text-lg mb-2">Month 4+: Scale Enablement</h3>
              <p className="text-muted-foreground">
                Growth preparation, advanced automation, strategic executive partnership
              </p>
            </div>
          </div>
        </div>


        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="heading-subsection mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Pricing */}
        <div className="max-w-3xl mx-auto mb-16">
          <StandardCard variant="bordered" className="border-primary/30">
            <StandardCardContent className="p-8 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="heading-subsection mb-2">Monthly Investment</h2>
              <p className="text-3xl font-bold text-primary mb-2 tabular-nums">From $6K/month</p>
              <p className="text-sm text-muted-foreground mb-4">Six-month minimum commitment</p>
              <p className="text-xs text-muted-foreground font-mono">
                * Requires completed Assessment ($4,500+) and Sprint implementation
              </p>
            </StandardCardContent>
          </StandardCard>
        </div>

        {/* Requirements */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="heading-subsection mb-6">Requirements</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-muted-foreground">Completed Sprint or equivalent</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-muted-foreground">Infrastructure in production</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-muted-foreground">Internal stakeholder</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-muted-foreground">Six-month commitment</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary/10 to-background border-2 border-primary rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Scale Your Systems?</h3>
            <p className="text-muted-foreground mb-6">Six-month minimum • From $6K/month</p>
            <Button size="lg" asChild>
              <Link to="/contact?interest=fractional&source_page=fractional">
                Apply for Fractional Ops
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Fractional;
