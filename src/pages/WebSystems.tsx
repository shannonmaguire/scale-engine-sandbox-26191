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
    question: "How does this differ from hiring an agency?",
    answer: "Infrastructure sites. CRM-wired, conversion-tracked, documented for ownership transfer. Demand capture and routing system."
  }, {
    question: "Can my team update pages without a developer?",
    answer: "Yes. Owner guide, components, page templates. Content updates and layout changes. No developer required."
  }, {
    question: "What CRM platforms do you integrate with?",
    answer: "Existing stack. HubSpot, Salesforce, Pipedrive, ActiveCampaign, custom. CRM recommendations available."
  }, {
    question: "Do you offer ongoing website maintenance?",
    answer: "On-demand support blocks. 10, 20, or 40 hours. Updates and optimizations. 6-month validity."
  }, {
    question: "What happens if I want to switch developers later?",
    answer: "Full ownership. Repository, deployment credentials, documentation. Any React developer can continue. No lock-in."
  }];
  const handleCTAClick = (location: string) => {
    trackCTAClick(`Web Systems ${location} CTA`, `web-systems-${location}`, '/contact?interest=web&source_page=web-systems');
  };
  const handleSupportClick = (packageName: string) => {
    trackCTAClick(`Website Support ${packageName}`, 'web-systems-support', '/contact?interest=website-support&source_page=web-systems');
  };
  return <div className="min-h-screen">
      <SEOHead 
        title="Web Systems | Revenue Infrastructure You Own | CWT Studio" 
        description="Performance-driven websites integrated into your revenue operations. CRM-wired, conversion-tracked, fully documented. React, TypeScript, zero vendor lock-in." 
        keywords={['revenue infrastructure', 'CRM website integration', 'lead capture automation', 'performance web development', 'website ownership', 'conversion tracking']} 
        canonicalUrl="/web-systems"
        serviceSchema={{
          name: 'Web Systems - Revenue Infrastructure',
          description: 'Performance-driven websites integrated into revenue operations. CRM-wired, conversion-tracked, fully documented for ownership transfer.',
          areaServed: ['Worldwide'],
          offers: [
            {
              name: 'Essentials Package',
              description: '5-7 pages with base CRM integration and conversion tracking'
            },
            {
              name: 'Core Package',
              description: '8-12 pages with gated assets and advanced CRM workflows'
            },
            {
              name: 'Scale Package',
              description: 'Full component library with multi-brand architecture'
            }
          ]
        }}
        faqSchema={faqs}
      />
      
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
            Web as Revenue Infrastructure
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Your website should capture demand, qualify prospects, and route leads—not just look good. We build performance-driven sites that integrate directly into your revenue system, with full source code and zero vendor lock-in.
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

        {/* Deliverable Sequence */}
        <div className="mb-16">
          <h2 className="heading-section mb-4">What You Receive</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Documented deployment sequence. Operational transfer, not perpetual dependency.
          </p>
          
          <div className="max-w-3xl space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="font-mono text-sm text-primary font-bold">PHASE 1</div>
                <ArrowRight size={16} className="text-muted-foreground" />
                <h3 className="font-mono font-bold text-lg">Site Architecture</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Page structure, routing, CRM events, analytics. Form submissions, clicks, conversion paths documented and pipeline-connected.
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Lead capture flow with CRM routing</li>
                <li>• Conversion event tracking (form fills, downloads, call bookings)</li>
                <li>• Page performance optimization (sub-1s load times)</li>
                <li>• SEO foundation (meta tags, structured data, sitemap)</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="font-mono text-sm text-primary font-bold">PHASE 2</div>
                <ArrowRight size={16} className="text-muted-foreground" />
                <h3 className="font-mono font-bold text-lg">Component Library</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Reusable components, page templates, design system. Content and layout editing without rebuild cycles.
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Editable page templates (landing pages, resources, case studies)</li>
                <li>• UI component library (buttons, forms, cards, navigation)</li>
                <li>• Design tokens (colors, typography, spacing)</li>
                <li>• React + TypeScript + Tailwind codebase</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="font-mono text-sm text-primary font-bold">PHASE 3</div>
                <ArrowRight size={16} className="text-muted-foreground" />
                <h3 className="font-mono font-bold text-lg">Handoff SOP</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Ownership transfer documentation. GitHub repo, deployment credentials, CMS access, analytics, update procedures.
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• GitHub repository with full source code access</li>
                <li>• Deployment guide (hosting, DNS, SSL configuration)</li>
                <li>• Content update procedures (no developer required)</li>
                <li>• 30-day post-launch support window</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-muted/30 border border-border rounded-lg max-w-3xl">
            <p className="text-sm text-foreground font-mono">
              No licensing. No lock-in. In-house updates, hire developers, or retainer—operator choice.
            </p>
          </div>
        </div>

        {/* Mini-Proof Case Study */}
        <div className="mb-16">
          <div className="bg-card border border-border rounded-lg p-8 max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold">Mini-Proof</span>
            </div>
            
            <h3 className="font-mono font-bold text-xl mb-4">
              Legal Services: Site Rebuild → Faster Intake → Better Routing
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">Before</div>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>• Contact form with no qualification logic</li>
                  <li>• Manual email triage by paralegal staff</li>
                  <li>• 18-24 hour response time for intake</li>
                  <li>• No visibility into lead source or practice area fit</li>
                </ul>
              </div>
              <div>
                <div className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">After</div>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>• Multi-step intake form with practice area routing</li>
                  <li>• Auto-assignment to appropriate attorney via CRM</li>
                  <li>• 2-hour response time (business hours)</li>
                  <li>• Real-time dashboard tracking intake → consult → engagement</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <div className="grid grid-cols-3 gap-6 mb-4">
                <div>
                  <div className="font-mono text-2xl font-bold text-primary mb-1">89%</div>
                  <div className="text-xs text-muted-foreground">Intake completion rate</div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-primary mb-1">2 Hours</div>
                  <div className="text-xs text-muted-foreground">Response time (from 18hrs)</div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-primary mb-1">$127K</div>
                  <div className="text-xs text-muted-foreground">Additional ARR captured</div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground italic">
                "The new site doesn't just look better—it works like part of our operations team. Qualified leads route directly to the right attorney. We stopped losing prospects to slow follow-up."
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                — Managing Partner, Boutique Legal Practice
              </p>
            </div>
          </div>
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
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Scoped to revenue impact, not just page count. Each tier connects to your CRM, tracks conversions, and transfers ownership.
          </p>
          
          <div className="space-y-6 max-w-3xl">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-mono font-bold text-lg mb-2">Essentials</h3>
              <p className="text-sm text-muted-foreground mb-3">
                For businesses that need clean infrastructure and baseline conversion tracking.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="text-sm text-muted-foreground">• 5-7 pages using 1-3 templates</li>
                <li className="text-sm text-muted-foreground">• Base CRM integration (form routing, lead capture)</li>
                <li className="text-sm text-muted-foreground">• Analytics wiring (GA4, conversion events)</li>
                <li className="text-sm text-muted-foreground">• Repository + deployment guide + 30-day support</li>
              </ul>
              <div className="text-xs text-muted-foreground font-mono">
                <strong>Revenue outcome:</strong> Capture inbound demand without manual intake bottlenecks
              </div>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-mono font-bold text-lg mb-2">Core</h3>
              <p className="text-sm text-muted-foreground mb-3">
                For businesses ready to scale lead generation and test nurture sequences.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="text-sm text-muted-foreground">• 8-12 pages with modular design system</li>
                <li className="text-sm text-muted-foreground">• Gated asset flow (resource downloads, email capture)</li>
                <li className="text-sm text-muted-foreground">• Advanced CRM events (multi-stage forms, intent signals)</li>
                <li className="text-sm text-muted-foreground">• Conversion dashboards + lead scoring integration</li>
              </ul>
              <div className="text-xs text-muted-foreground font-mono">
                <strong>Revenue outcome:</strong> Build predictable pipeline through gated content and qualification workflows
              </div>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-mono font-bold text-lg mb-2">Scale</h3>
              <p className="text-sm text-muted-foreground mb-3">
                For businesses with complex funnels, multiple brands, or regional variations.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="text-sm text-muted-foreground">• Full component library for long-term extensibility</li>
                <li className="text-sm text-muted-foreground">• Custom conversion flows (calculators, configurators, quoting)</li>
                <li className="text-sm text-muted-foreground">• Multi-brand or multi-region architecture</li>
                <li className="text-sm text-muted-foreground">• Performance optimization + A/B testing setup</li>
              </ul>
              <div className="text-xs text-muted-foreground font-mono">
                <strong>Revenue outcome:</strong> Support complex GTM motions with infrastructure that scales without rebuilding
              </div>
            </div>
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