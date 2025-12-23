import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BackButton } from "@/components/BackButton";
import { trackEvent, trackCTAClick } from "@/hooks/usePageTracking";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { CTA, ROUTES } from "@/lib/canonical-constants";

const WebSystems = () => {
  useEffect(() => {
    trackEvent('websystems_view', { path: '/web-systems' });
  }, []);

  const phases = [
    { phase: "01", title: "Site Architecture", output: "CRM events, routing, conversion tracking" },
    { phase: "02", title: "Component Library", output: "Reusable templates, design tokens, React/TypeScript" },
    { phase: "03", title: "Handoff SOP", output: "GitHub repo, deployment credentials, update guide" }
  ];

  const packages = [
    { name: "Essentials", description: "5-7 pages, base CRM, analytics wiring, 30-day support" },
    { name: "Core", description: "8-12 pages, gated assets, advanced CRM events, conversion dashboards" },
    { name: "Scale", description: "Component library, custom flows, multi-brand architecture" }
  ];

  const faqs = [
    { question: "How does this differ from hiring an agency?", answer: "CRM-wired, conversion-tracked, documented for ownership transfer. Demand capture and routing system." },
    { question: "Can my team update pages without a developer?", answer: "Yes. Owner guide, components, page templates. No developer required." },
    { question: "What CRM platforms do you integrate with?", answer: "HubSpot, Salesforce, Pipedrive, ActiveCampaign, custom." },
    { question: "What happens if I want to switch developers later?", answer: "Full ownership. Repository, credentials, documentation. Any React developer can continue." }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Web Systems | Revenue Infrastructure | CWT Studio" 
        description="Performance-driven websites integrated into revenue operations. CRM-wired, conversion-tracked, fully documented." 
        keywords={['revenue infrastructure', 'CRM website integration', 'lead capture automation', 'performance web development']} 
        canonicalUrl="/web-systems"
        serviceSchema={{
          name: 'Web Systems - Revenue Infrastructure',
          description: 'Performance-driven websites integrated into revenue operations.',
          areaServed: ['Worldwide'],
          offers: [
            { name: 'Essentials Package', description: '5-7 pages with base CRM integration' },
            { name: 'Core Package', description: '8-12 pages with gated assets' },
            { name: 'Scale Package', description: 'Full component library with multi-brand architecture' }
          ]
        }}
        faqSchema={faqs}
      />
      
      <Breadcrumbs />
      
      <Section>
        <BackButton to="/">Back to Home</BackButton>
        
        {/* Hero - Compressed */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="system-status">WEB DEVELOPMENT</div>
          </div>
          <h1 className="heading-page mb-6">Web as Revenue Infrastructure</h1>
          <p className="text-description text-muted-foreground mb-8">
            Capture demand. Qualify prospects. Route leads to CRM. Conversion-tracked. Zero vendor lock-in.
          </p>
          
          <div className="grid grid-cols-3 gap-6 mb-10 py-6 border-y border-border">
            <div>
              <div className="heading-subsection text-primary mb-1">Sub-1s</div>
              <div className="text-label text-muted-foreground">Page load</div>
            </div>
            <div>
              <div className="heading-subsection text-primary mb-1">30 Days</div>
              <div className="text-label text-muted-foreground">Support</div>
            </div>
            <div>
              <div className="heading-subsection text-primary mb-1">100%</div>
              <div className="text-label text-muted-foreground">Ownership</div>
            </div>
          </div>

          <div className="flex gap-4">
            <ConversionOptimizedButton
              to="/contact?interest=web&source_page=web-systems"
              ctaName="Web Systems Hero CTA"
              location="web-systems-hero"
            >
              {CTA.scheduleConsultation}
            </ConversionOptimizedButton>
            <Button variant="outline" asChild>
              <a href="#packages">See Packages</a>
            </Button>
          </div>
        </div>

        {/* Phases - One-liner format */}
        <div className="mb-16">
          <h2 className="heading-section mb-8">What You Receive</h2>
          
          <div className="space-y-4 max-w-3xl">
            {phases.map((phase, index) => (
              <div key={index} className="flex items-center gap-4 border-l-4 border-primary pl-6 py-3">
                <span className="font-mono text-sm text-primary">{phase.phase}</span>
                <span className="heading-subsection">{phase.title}</span>
                <span className="text-muted-foreground">→</span>
                <span className="text-sm text-muted-foreground">{phase.output}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 font-mono text-sm text-muted-foreground max-w-3xl">
            Full GitHub access. Deployment credentials. Documentation. No lock-in.
          </p>
        </div>

        {/* Mini-Proof - Compressed */}
        <div className="mb-16">
          <div className="bg-card border border-border p-8 max-w-3xl">
            <div className="text-label text-primary mb-4">CASE STUDY</div>
            <h3 className="heading-subsection mb-4">Legal Services Site Rebuild</h3>
            <p className="text-base text-foreground mb-6">
              Legal intake: 18hr → 2hr response. +$127K ARR captured. 89% intake completion rate.
            </p>
            <div className="text-sm text-muted-foreground">
              Multi-step qualification form → auto-assignment to attorney → real-time dashboard tracking.
            </div>
          </div>
        </div>

        {/* Packages - Compressed */}
        <div className="mb-16" id="packages">
          <h2 className="heading-section mb-8">Packages</h2>
          
          <div className="space-y-4 max-w-3xl">
            {packages.map((pkg, index) => (
              <div key={index} className="border-l-4 border-primary pl-6 py-3">
                <span className="heading-subsection">{pkg.name}:</span>
                <span className="text-muted-foreground ml-2">{pkg.description}</span>
              </div>
            ))}
          </div>
          
          <p className="mt-8 font-mono text-sm text-muted-foreground max-w-3xl">
            Pricing after 45-minute scoping call. Assessment fees credit 100% toward build.
          </p>
        </div>

        {/* FAQ */}
        <div className="mb-16" id="faq">
          <h2 className="heading-section mb-8">FAQ</h2>
          
          <div className="max-w-2xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-description font-mono">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-description text-muted-foreground">
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
          <p className="text-description text-muted-foreground mb-6">
            45-minute call. Fixed-price quote within 24 hours.
          </p>
          <ConversionOptimizedButton 
            to="/contact?interest=web&source_page=web-systems" 
            ctaName="Web Systems Final CTA" 
            location="web-systems-footer"
          >
            Request Consultation
          </ConversionOptimizedButton>
        </div>
      </Section>
    </div>
  );
};

export default WebSystems;
