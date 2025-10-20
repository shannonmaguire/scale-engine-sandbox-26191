import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { StandardCard, StandardCardContent, StandardCardHeader, StandardCardTitle, StandardCardDescription } from "@/components/ui/standard-card";
import { Section } from "@/components/ui/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { CheckCircle, Code, FileText, Gauge, Zap, ArrowRight, Shield, Database, BarChart3, Package } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BackButton } from "@/components/BackButton";
import { trackEvent, trackCTAClick } from "@/hooks/usePageTracking";
import { ICON_SIZES, ICON_STROKE } from "@/lib/icon-config";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
const WebSystems = () => {
  useEffect(() => {
    trackEvent('websystems_view', {
      path: '/web-systems'
    });
  }, []);
  const deliverables = [{
    text: "Edit-ready components and page templates",
    icon: Code
  }, {
    text: "Clear owner guide for updates",
    icon: FileText
  }, {
    text: "CRM and analytics wiring",
    icon: Database
  }, {
    text: "30-day post-launch support window",
    icon: Shield
  }];
  const packages = [{
    name: "Essentials",
    items: ["5 to 7 pages using 1 to 3 templates", "Repo, CMS or file-based content, owner guide", "Base CRM and analytics wiring"],
    investment: "$6K–10K"
  }, {
    name: "Core",
    items: ["8 to 12 pages and a small design system", "Gated asset or lead magnet flow", "Deeper CRM events and dashboards"],
    investment: "$12K–20K"
  }, {
    name: "Scale",
    items: ["Component library and custom flows", "Advanced performance and testing", "Multi-brand or multi-region readiness"],
    investment: "$20K–40K"
  }];
  const process = [{
    number: "01",
    title: "Assess",
    description: "We align on pages, data, and CRM events."
  }, {
    number: "02",
    title: "Draft",
    description: "We map templates, components, and routes."
  }, {
    number: "03",
    title: "Build",
    description: "We implement, test, and connect to pipeline."
  }, {
    number: "04",
    title: "Handoff",
    description: "We transfer repo and docs and support your team for 30 days."
  }];
  const supportPackages = [{
    hours: 10,
    price: "$2,000",
    rate: "$200/hour",
    subtitle: "Quick fixes & updates",
    features: ["Ideal for occasional updates", "48-hour response time", "6-month expiration", "No minimum per request"]
  }, {
    hours: 20,
    price: "$3,500",
    rate: "$175/hour",
    subtitle: "Ongoing maintenance",
    features: ["Best value for regular updates", "48-hour response time", "6-month expiration", "Priority scheduling"]
  }, {
    hours: 40,
    price: "$6,000",
    rate: "$150/hour",
    subtitle: "Extended support",
    features: ["Major updates & optimization", "24-hour response time", "6-month expiration", "Dedicated support contact"]
  }];
  const faqs = [{
    question: "Can my team update pages without a developer?",
    answer: "Yes. You receive an owner guide, components, and page templates that your team can edit."
  }, {
    question: "Do I need an Infrastructure Assessment first?",
    answer: "Not required. Web Systems is standalone. However, if you're unsure whether your CRM, data, and integrations are ready to support a high-performance website, consider starting with our $1,200 Infrastructure Assessment. That fee credits fully toward Web Systems if you proceed."
  }, {
    question: "Do you offer ongoing website maintenance?",
    answer: "Yes. We offer on-demand support blocks (10, 20, or 40 hours) for updates, fixes, and optimizations. Hours are valid for 6 months and include content updates, component modifications, performance optimization, and more. New feature development requires separate scoping."
  }, {
    question: "Do you take over my hosting?",
    answer: "No. We set up a clean deployment on your provider and hand you the keys."
  }, {
    question: "Will you work with my current CRM?",
    answer: "Yes. We connect forms, events, and dashboards to your stack."
  }, {
    question: "Do you put your logo in my footer?",
    answer: "No. Ownership is yours."
  }];
  const handleCTAClick = (location: string) => {
    trackCTAClick(`Web Systems ${location} CTA`, `web-systems-${location}`, '/contact?interest=web&source_page=web-systems');
  };
  const handleSupportClick = (packageName: string) => {
    trackCTAClick(`Website Support ${packageName}`, 'web-systems-support', '/contact?interest=website-support&source_page=web-systems');
  };
  return <div className="min-h-screen">
      <SEOHead title="Web Infrastructure for High-Trust Brands | CWT Studio" description="Websites that run like systems — update-friendly, CRM-wired, and built to compound." keywords={['web infrastructure', 'operator-led web development', 'CRM-integrated websites', 'ownership-first web systems', 'compounding web assets']} canonicalUrl="/web-systems" />
      
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Web Systems",
          "provider": {
            "@type": "Organization",
            "name": "CWT Studio"
          },
          "serviceType": "Web Infrastructure Development",
          "description": "Websites that run like systems — wired to your CRM, optimized for ownership, and engineered to compound.",
          "areaServed": "Worldwide",
          "offers": [{
            "@type": "Offer",
            "name": "Essentials Package",
            "description": "5 to 7 pages using 1 to 3 templates",
            "priceRange": "$6,000-$10,000"
          }, {
            "@type": "Offer",
            "name": "Core Package",
            "description": "8 to 12 pages and a small design system",
            "priceRange": "$12,000-$20,000"
          }, {
            "@type": "Offer",
            "name": "Scale Package",
            "description": "Component library and custom flows",
            "priceRange": "$20,000-$40,000"
          }]
        })}
      </script>
      
      <Breadcrumbs />
      
      <Section>
        <BackButton to="/services">Back to All Services</BackButton>
        
        {/* Hero */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="system-status mb-6">
            OPERATOR ENGINES
          </div>
          <h1 className="heading-page mb-6">
            Web Infrastructure for High-Trust Brands
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            We build websites that run like systems — wired to your CRM, optimized for ownership, and engineered to compound.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConversionOptimizedButton
              size="lg"
              to="/contact?interest=web&source_page=web-systems"
              ctaName="Web Systems Hero CTA"
              location="web-systems-hero"
            >
              Request Consultation
            </ConversionOptimizedButton>
            <Button size="lg" variant="outline" asChild>
              <a href="#packages">See Package Details</a>
            </Button>
          </div>
        </div>

        {/* The Quiet Operators Promise */}
        <div className="py-16">
          <div className="max-w-4xl mx-auto text-center border border-border rounded-lg p-8">
            <h2 className="heading-section mb-6">Our Commitment to Your Ownership</h2>
            <p className="text-description leading-relaxed max-w-3xl mx-auto">
              When we hand off your website, you receive complete ownership—not just access. We transfer the full repository, comprehensive documentation, and deployment credentials so your team has everything needed to maintain and evolve the site independently. Every component is documented. Every integration is mapped. Every CRM event is explained. Whether you work with your own developers, bring on a new agency, or return to us for updates, you'll never be locked in or stuck waiting on a dev ticket. We don't put our logo in your footer or require attribution. If you later want to share your experience as a case study, we'd welcome it. If not, that's perfectly fine. Our role is to build infrastructure you own, document it thoroughly, and step back so your team can move forward with confidence.
            </p>
          </div>
        </div>

        {/* What We Ship */}
        <div className="spacing-subsection">
          <h2 className="heading-section mb-12 text-center">What We Ship</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {deliverables.map((item, index) => <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon size={ICON_SIZES.medium} strokeWidth={ICON_STROKE.default} className="text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">{item.text}</p>
                </div>
              </div>)}
          </div>
        </div>

        {/* Why This Exists */}
        <div className="spacing-subsection">
          <div className="max-w-4xl mx-auto">
            <StandardCard variant="muted">
              <StandardCardContent className="p-8">
                <h2 className="heading-subsection mb-4">Why This Exists</h2>
                <p className="text-description leading-relaxed">
                  Many sites look good and stall revenue because they are hard to update, slow to load, and disconnected from pipeline. Web Systems fixes that with a simple sprint, a clean handoff, and ownership on day one.
                </p>
              </StandardCardContent>
            </StandardCard>
          </div>
        </div>

        {/* Packages */}
        <div className="spacing-subsection" id="packages">
          <h2 className="heading-section mb-12 text-center">Packages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            {packages.map((pkg, index) => <StandardCard key={index} variant="bordered" equalHeight>
                <StandardCardHeader>
                  <StandardCardTitle>{pkg.name}</StandardCardTitle>
                </StandardCardHeader>
                <StandardCardContent className="flex flex-col h-full">
                  <ul className="space-y-3 mb-6">
                    {pkg.items.map((item, idx) => <li key={idx} className="flex items-start gap-2">
                        <CheckCircle size={ICON_SIZES.small} className="text-primary mt-1 flex-shrink-0" strokeWidth={ICON_STROKE.default} />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>)}
                  </ul>
                  
                  <div className="flex-grow" />
                  
                  <div className="pt-6 border-t border-border">
                    <p className="text-2xl font-bold text-primary tabular-nums">
                      {pkg.investment}
                    </p>
                  </div>
                </StandardCardContent>
              </StandardCard>)}
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground font-mono max-w-2xl mx-auto mb-3">
              Final scope and investment confirmed after a 45-minute call. Any paid assessment is credited toward build.
            </p>
            <a href="#faq" className="text-sm text-primary hover:underline inline-block font-mono">
              Questions about scope? See FAQ below →
            </a>
          </div>
        </div>

        {/* Process */}
        <div className="spacing-subsection">
          <h2 className="heading-section mb-12 text-center">Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((step, index) => <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-mono font-bold text-primary">{step.number}</span>
                </div>
                <h3 className="heading-subsection mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>)}
          </div>
        </div>

        {/* Support Blocks Section */}
        <div className="spacing-subsection" id="support">
          <div className="text-center mb-12">
            <h2 className="heading-section mb-4">Built for Independence. Here When You Need Us.</h2>
            <p className="text-description max-w-2xl mx-auto">
              Every Web Systems engagement includes an owner guide designed for your team to manage independently. 
              But when priorities shift or you'd rather focus on your business, we're available for ongoing updates on your terms.
            </p>
          </div>

          {/* Support Packages Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {supportPackages.map((pkg, index) => <StandardCard key={index} variant="bordered" equalHeight>
              <StandardCardHeader>
                  <Package size={ICON_SIZES.large} strokeWidth={ICON_STROKE.default} className="text-primary mb-3" />
                  <StandardCardTitle>{pkg.hours}-Hour Block</StandardCardTitle>
                  <StandardCardDescription>{pkg.subtitle}</StandardCardDescription>
                </StandardCardHeader>
                <StandardCardContent className="flex flex-col h-full">
                  <div className="mb-6">
                    <p className="text-3xl font-bold text-primary tabular-nums mb-1">{pkg.price}</p>
                    <p className="text-sm text-muted-foreground font-mono">{pkg.rate}</p>
                  </div>
                  <ul className="space-y-2 text-sm mb-6">
                    {pkg.features.map((feature, idx) => <li key={idx} className="flex items-start gap-2">
                        <CheckCircle size={ICON_SIZES.small} strokeWidth={ICON_STROKE.default} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>)}
                  </ul>
                  <div className="flex-grow" />
                  <ConversionOptimizedButton
                    size="sm"
                    variant="outline"
                    className="w-full mt-auto"
                    to="/contact?interest=website-support&source_page=web-systems"
                    ctaName={`Website Support ${pkg.hours}-hour`}
                    location="web-systems-support"
                    showArrow={false}
                  >
                    Get Started
                  </ConversionOptimizedButton>
                </StandardCardContent>
              </StandardCard>)}
          </div>

          {/* What's Included / Not Included */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-mono font-bold mb-4 flex items-center gap-2">
                <CheckCircle size={ICON_SIZES.medium} strokeWidth={ICON_STROKE.default} className="text-primary" />
                What's Included
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Content updates and page edits</li>
                <li>• Component modifications</li>
                <li>• Form and CRM event adjustments</li>
                <li>• Performance optimization</li>
                <li>• Mobile/browser compatibility fixes</li>
                <li>• Analytics troubleshooting</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-mono font-bold mb-4">Not Included</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• New feature development (requires separate scoping)</li>
                <li>• Complete redesigns (requires new Web Systems engagement)</li>
                <li>• Backend/CRM infrastructure (requires Fractional Ops or Sprint)</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
                Hours expire 6 months from purchase. Response SLA: 48 business hours.
              </p>
            </div>
          </div>
        </div>

        {/* Proof Snippet */}
        <div className="spacing-subsection">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 border-primary rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Gauge size={ICON_SIZES.large} strokeWidth={ICON_STROKE.default} className="text-primary" />
              <h2 className="heading-subsection text-primary">Performance Standard</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div className="border-l-4 border-primary pl-6">
                <div className="text-3xl font-bold text-primary mb-2 font-mono">Sub-1s LCP</div>
                <p className="text-muted-foreground">on key pages</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6">
                <div className="text-3xl font-bold text-primary mb-2 font-mono">Hours → Minutes</div>
                <p className="text-muted-foreground">edit time reduction</p>
              </div>
            </div>
            
            <p className="text-foreground font-medium">
              If you like our site, that is the standard we build to.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="spacing-subsection" id="faq">
          <h2 className="heading-section mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-mono">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>

        {/* Final CTA */}
        <div className="spacing-subsection">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 border-primary rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="heading-section mb-4">Ready when you are</h2>
            <p className="text-description mb-8">
              Schedule a consultation and we'll send a custom project brief within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConversionOptimizedButton to="/contact?interest=web&source_page=web-systems" ctaName="Web Systems Final CTA" location="web-systems-footer" size="lg">
                Request Consultation
              </ConversionOptimizedButton>
              <Button size="lg" variant="outline" asChild>
                <a href="#support">View Support Options</a>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>;
};
export default WebSystems;