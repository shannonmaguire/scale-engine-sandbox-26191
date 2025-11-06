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
    items: ["5 to 7 pages using 1 to 3 templates", "Repo, CMS or file-based content, owner guide", "Base CRM and analytics wiring"]
  }, {
    name: "Core",
    items: ["8 to 12 pages and a small design system", "Gated asset or lead magnet flow", "Deeper CRM events and dashboards"]
  }, {
    name: "Scale",
    items: ["Component library and custom flows", "Advanced performance and testing", "Multi-brand or multi-region readiness"]
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
    subtitle: "Quick fixes & updates",
    features: ["Ideal for occasional updates", "48-hour response time", "6-month expiration", "No minimum per request"]
  }, {
    hours: 20,
    subtitle: "Ongoing maintenance",
    features: ["Best value for regular updates", "48-hour response time", "6-month expiration", "Priority scheduling"]
  }, {
    hours: 40,
    subtitle: "Extended support",
    features: ["Major updates & optimization", "24-hour response time", "6-month expiration", "Dedicated support contact"]
  }];
  const faqs = [{
    question: "Can my team update pages without a developer?",
    answer: "Yes. You receive an owner guide, components, and page templates that your team can edit."
  }, {
    question: "Do I need an Infrastructure Assessment first?",
    answer: "Web Systems is standalone and does not require prior assessment. If you're unsure whether your CRM, data, and integrations are ready to support a high-performance website, our Infrastructure Assessment (starting at $4,500) provides clarity before build. That fee credits fully toward Web Systems if you proceed."
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
      <SEOHead title="Web Systems | CWT Studio" description="Websites you can own and update. CRM-wired, documented, and fast." keywords={['web systems', 'CRM website', 'website ownership', 'performance web development']} canonicalUrl="/web-systems" />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Web Systems",
          "provider": {
            "@type": "Organization",
            "name": "CWT Studio"
          },
          "serviceType": "Web Development",
          "description": "Websites you can own and update. CRM-wired, documented, and fast.",
          "areaServed": "Worldwide"
        })}
      </script>
      
      <Breadcrumbs />
      
      <Section>
        <BackButton to="/services">Back to All Services</BackButton>
        
        {/* Hero */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="system-status">
              WEB DEVELOPMENT
            </div>
            <span className="text-xs font-mono text-muted-foreground">
              BUILT FROM SCRATCH • NO WEBFLOW • NO WORDPRESS
            </span>
          </div>
          <h1 className="heading-page mb-4">
            Custom Websites You Own
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            React, TypeScript, and Tailwind sites with CRM integration, full source code, and deployment credentials. Update in-house or hire your own developer—no vendor lock-in.
          </p>
          
          <div className="grid grid-cols-3 gap-6 mb-8 py-6 border-y border-border">
            <div>
              <div className="font-mono text-2xl font-bold text-primary mb-1">Sub-1s</div>
              <div className="text-xs text-muted-foreground">Page load time</div>
            </div>
            <div>
              <div className="font-mono text-2xl font-bold text-primary mb-1">30 Days</div>
              <div className="text-xs text-muted-foreground">Post-launch support</div>
            </div>
            <div>
              <div className="font-mono text-2xl font-bold text-primary mb-1">100%</div>
              <div className="text-xs text-muted-foreground">Code ownership</div>
            </div>
          </div>

          <div className="flex gap-4">
            <ConversionOptimizedButton
              to="/contact?interest=web&source_page=web-systems"
              ctaName="Web Systems Hero CTA"
              location="web-systems-hero"
            >
              Request Consultation
            </ConversionOptimizedButton>
            <Button variant="outline" asChild>
              <a href="#packages">See Packages</a>
            </Button>
          </div>
        </div>

        {/* What You Get */}
        <div className="mb-16">
          <h2 className="heading-section mb-4">What's Included</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl">
            We build custom sites from scratch using React, TypeScript, and Tailwind. No drag-and-drop builders. No WordPress plugins. Just clean code your team can own and update.
          </p>
          <ul className="space-y-3 max-w-2xl">
            {deliverables.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <item.icon size={ICON_SIZES.medium} strokeWidth={ICON_STROKE.default} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-foreground">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Ownership */}
        <div className="mb-16 max-w-3xl">
          <h2 className="heading-section mb-4">Full Code Transfer</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            You receive the GitHub repository, deployment credentials, and documentation. Update yourself, hire a developer, or keep us on retainer. No ongoing licensing. No vendor lock-in.
          </p>
          <p className="text-sm text-muted-foreground font-mono">
            Custom build. Full source code. Your infrastructure.
          </p>
        </div>

        {/* Packages */}
        <div className="mb-16" id="packages">
          <h2 className="heading-section mb-8">Packages</h2>
          
          <div className="space-y-6 max-w-3xl">
            {packages.map((pkg, index) => (
              <div key={index} className="border-l-4 border-primary pl-6">
                <h3 className="font-mono font-bold text-lg mb-2">{pkg.name}</h3>
                <ul className="space-y-2">
                  {pkg.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <p className="text-sm text-muted-foreground font-mono max-w-2xl mt-6">
            Custom pricing determined after 45-minute scoping call. <strong>Assessment fees ($4,500+) credit 100% toward build.</strong>
          </p>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="heading-section mb-4">Build Process</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Timeline varies by package scope. Typical turnaround: 3-6 weeks from deposit to live site.
          </p>
          
          <div className="space-y-6 max-w-2xl">
            {process.map((step, index) => (
              <div key={index} className="border-l-4 border-border pl-6">
                <div className="font-mono text-sm text-muted-foreground mb-1">{step.number}</div>
                <h3 className="font-bold mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support */}
        <div className="mb-16" id="support">
          <h2 className="heading-section mb-4">Support Blocks</h2>
          <p className="text-muted-foreground max-w-2xl mb-8">
            Built for your team to run independently. When you need us, we're here.
          </p>

          <div className="space-y-6 max-w-3xl">
            {supportPackages.map((pkg, index) => (
              <div key={index} className="border-l-4 border-primary pl-6">
                <h3 className="font-mono font-bold text-lg mb-1">{pkg.hours} Hours Support Block</h3>
                <p className="text-sm text-muted-foreground mb-3">{pkg.subtitle}</p>
                <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
                <ConversionOptimizedButton
                  variant="outline"
                  size="sm"
                  to="/contact?interest=website-support&source_page=web-systems"
                  ctaName={`Website Support ${pkg.hours}-hour`}
                  location="web-systems-support"
                  showArrow={false}
                >
                  Request Quote
                </ConversionOptimizedButton>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mt-8">
            <div>
              <h3 className="font-mono font-bold mb-3 text-sm">Included</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Content updates</li>
                <li>• Component mods</li>
                <li>• CRM adjustments</li>
                <li>• Performance fixes</li>
                <li>• Analytics help</li>
              </ul>
            </div>
            <div>
              <h3 className="font-mono font-bold mb-3 text-sm">Not Included</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• New features (requires scoping)</li>
                <li>• Complete redesigns</li>
                <li>• Backend work</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Performance Benchmarks */}
        <div className="mb-16">
          <h2 className="heading-section mb-4">Performance Targets</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl">
            Fast sites rank higher and convert better. These are the benchmarks we build to.
          </p>
          <div className="space-y-4 max-w-2xl">
            <div className="border-l-4 border-primary pl-6">
              <div className="font-mono text-2xl font-bold text-primary mb-1">Sub-1s LCP</div>
              <p className="text-sm text-muted-foreground">Largest Contentful Paint</p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <div className="font-mono text-2xl font-bold text-primary mb-1">90+ Score</div>
              <p className="text-sm text-muted-foreground">Google PageSpeed mobile</p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <div className="font-mono text-2xl font-bold text-primary mb-1">Direct Edit</div>
              <p className="text-sm text-muted-foreground">Content updates without dev handoff</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16" id="faq">
          <h2 className="heading-section mb-8">FAQ</h2>
          
          <div className="max-w-2xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-mono text-sm">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-2xl">
          <h2 className="heading-section mb-4">Start With Scoping Call</h2>
          <p className="text-muted-foreground mb-6">
            45-minute call to review requirements. Fixed-price quote within 24 hours. Assessment fees credit toward build.
          </p>
          <ConversionOptimizedButton to="/contact?interest=web&source_page=web-systems" ctaName="Web Systems Final CTA" location="web-systems-footer">
            Request Consultation
          </ConversionOptimizedButton>
        </div>
      </Section>
    </div>;
};
export default WebSystems;