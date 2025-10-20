import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { FileText, Target, TrendingUp, Clock, CheckCircle2, ClipboardCheck, Zap, Search, ArrowRight, Shield, BarChart3, Sparkles } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BackButton } from "@/components/BackButton";
import { toast } from "sonner";
import { AnimatedSection } from "@/components/AnimatedSection";

const Assessment = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    currentSystems: "",
    challenges: "",
    budget: "",
    about: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const deliverables = [
    {
      icon: FileText,
      title: "Technical Debt Audit",
      items: [
        "Your data quality and CRM config",
        "Integration health",
        "Automation workflow efficiency",
        "Security and access analysis",
        "Data sync assessment"
      ]
    },
    {
      icon: Target,
      title: "Prioritized Roadmap",
      items: [
        "90-day or 180-day plan",
        "Phase-by-phase priorities",
        "Strategic initiatives",
        "Quick win opportunities"
      ]
    },
    {
      icon: TrendingUp,
      title: "Executive Presentation",
      items: [
        "60-minute readout with your leadership",
        "Strategic findings",
        "ROI-justified plan",
        "Q&A plan for next-steps"
      ]
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: "Discovery Call",
      description: "90-minute collaborative session to understand your systems, pain points, and objectives. We'll gather initial context."
    },
    {
      number: 2,
      title: "Technical Review",
      description: "1-week deep-dive into your CRM config, integrations, automation, and data quality. Includes stakeholder interviews."
    },
    {
      number: 3,
      title: "Report Delivery",
      description: "Complete technical assessment with findings, recommendations, and sequenced roadmap with ROI projections."
    },
    {
      number: 4,
      title: "Executive Readout",
      description: "60-min presentation to your leadership team covering key findings, budget-justified recommendations, and next steps."
    }
  ];

  const whyAssessment = [
    {
      icon: Shield,
      title: "Avoid Costly Mistakes",
      description: "Most companies waste 30-40% of their RevOps budget on symptoms rather than root causes. Diagnostics determine which priorities move revenue metrics."
    },
    {
      icon: Sparkles,
      title: "Get Quick Wins First",
      description: "Diagnostics typically reveal 3-5 high-impact fixes that can be implemented immediately, frequently recovering more value than the assessment investment."
    },
    {
      icon: BarChart3,
      title: "Build the Right Roadmap",
      description: "The resulting roadmap provides a clear, prioritized plan based on measured data and ROI projections, independent of who implements it."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          interest: "assessment",
          source_page: "assessment",
          message: `Current Systems: ${formData.currentSystems}\n\nKey Challenges/Objectives: ${formData.challenges}\n\nBudget/Urgency/Size: ${formData.budget}\n\nHow did you hear about us: ${formData.about}`
        }),
      });

      if (!response.ok) throw new Error('Failed to submit');

      toast.success("Assessment request submitted! We'll be in touch within 24 hours.");
      setFormData({
        fullName: "",
        email: "",
        company: "",
        phone: "",
        currentSystems: "",
        challenges: "",
        budget: "",
        about: ""
      });
    } catch (error) {
      toast.error("Failed to submit. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Revenue Infrastructure Assessment ($1.5–2.5K) | CWT Studio"
        description="2-week diagnostic to baseline your backend revenue systems, identify gaps, and deliver a prioritized 90-day roadmap. 100% credit toward implementation."
        keywords={[
          'revenue infrastructure assessment',
          'technical debt audit',
          '90-day roadmap',
          'backend systems assessment',
          'Salesforce optimization review'
        ]}
        canonicalUrl="/assessment"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Revenue Infrastructure Assessment",
          "provider": {
            "@type": "ProfessionalService",
            "name": "CWT Studio"
          },
          "serviceType": "Technical Infrastructure Audit",
          "description": "Complete assessment of revenue infrastructure with technical debt audit, prioritized roadmap, and executive presentation",
          "offers": {
            "@type": "Offer",
            "priceRange": "$1500-$2500",
            "priceCurrency": "USD"
          },
          "areaServed": ["United States", "Canada"],
          "timeToComplete": "P2W"
        })}
      </script>

      <Breadcrumbs />

      <Section>
        <BackButton to="/services">Back to All Services</BackButton>

        {/* Hero Section - Completely Redesigned */}
        <AnimatedSection className="grid lg:grid-cols-[1.2fr,400px] gap-16 items-start mt-12 mb-20">
          {/* Left Column - Primary Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="system-status border-accent/30">
              <span>FIXED SCOPE • FIXED PRICE</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                Technical Infrastructure Assessment
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                2-week diagnostic to map backend revenue systems with baseline KPIs and prioritized recommendations for stable growth.
              </p>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="hover-lift hover-glow group">
                <a href="/sample-report" className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  View Sample Report
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="hover-lift group">
                <a href="#request-form" className="flex items-center gap-2">
                  Request Assessment
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>

            {/* PRESERVE: Self-Assessment CTA #1 */}
            <div className="pt-4">
              <Link 
                to="/self-assessment"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <ClipboardCheck className="w-4 h-4 mr-2" />
                <span>Not ready yet? <span className="underline group-hover:no-underline">Try free self-assessment first</span></span>
                <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">2-Week Delivery</p>
                  <p className="text-xs text-muted-foreground">Fast turnaround</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">Full Credit</p>
                  <p className="text-xs text-muted-foreground">Toward Sprint</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">Actionable</p>
                  <p className="text-xs text-muted-foreground">Ready to implement</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Pricing Card */}
          <div className="bg-gradient-to-br from-card to-card/50 border-2 border-border rounded-2xl p-8 sticky top-6 shadow-lg hover:shadow-xl transition-shadow">
            {/* Price Display */}
            <div className="text-center pb-6 border-b border-border/50">
              <div className="inline-block mb-3">
                <Badge variant="outline" className="font-mono text-xs">INVESTMENT</Badge>
              </div>
              <p className="text-5xl font-bold mb-3 tabular-nums bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                $1,500–$2,500
              </p>
              <p className="text-xs text-muted-foreground mb-1">USD</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/20 border border-success/30 mt-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-success-foreground" />
                <p className="text-xs font-medium text-success-foreground">Full Value Credited to Sprint</p>
              </div>
            </div>

            {/* Deliverables Preview */}
            <div className="space-y-5 py-6">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">2-week diagnostic — every dollar applied to your implementation</p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm mb-1">Complete Infrastructure Audit</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">Salesforce, integrations, automation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm mb-1">90-Day Prioritized Roadmap</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">Quick wins to strategic initiatives</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm mb-1">Executive Presentation</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">ROI projections & implementation plan</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border/50">
                <p className="text-xs text-center text-muted-foreground">
                  <strong className="text-foreground">Zero Risk:</strong> Full fee credited toward implementation
                </p>
              </div>
            </div>

            {/* PRESERVE: Self-Assessment CTA #2 */}
            <div className="pt-4 border-t border-border/50">
              <Link 
                to="/self-assessment"
                className="block text-center py-3 text-xs text-muted-foreground hover:text-primary transition-colors group"
              >
                <span className="flex items-center justify-center gap-2">
                  <ClipboardCheck className="w-3.5 h-3.5" />
                  <span>Not ready? <span className="underline group-hover:no-underline">Try free self-assessment</span></span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* What You Get Section - Redesigned */}
        <AnimatedSection className="py-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-4">COMPREHENSIVE DELIVERABLES</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">What You Get</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every Assessment includes three comprehensive deliverables—infrastructure audit, prioritized roadmap, and executive presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliverables.map((item, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-card to-card/50 border-2 border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-5 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Deep-dive analysis of your current infrastructure
                </p>
                <ul className="space-y-3">
                  {item.items.map((subItem, subIndex) => (
                    <li key={subIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{subItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Assessment Process - Redesigned */}
        <div className="py-20 bg-gradient-to-b from-muted/20 to-transparent -mx-6 px-6 md:-mx-12 md:px-12">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Assessment Process</h2>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                {/* Connection line */}
                <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" style={{ zIndex: 0 }} />
                
                {processSteps.map((step, idx) => (
                  <div key={step.number} className="relative" style={{ zIndex: 1 }}>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 border-4 border-background shadow-lg flex items-center justify-center mx-auto mb-6 relative">
                        <span className="text-2xl font-bold font-mono tabular-nums text-primary-foreground">{step.number}</span>
                      </div>
                      <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Why Start With an Assessment - Redesigned */}
        <AnimatedSection className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Start With an Assessment?</h2>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {whyAssessment.map((item, index) => (
              <div key={index} className="group bg-card border-2 border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-3xl mx-auto p-6 bg-muted/30 rounded-xl border border-border/50">
            <p className="text-sm leading-relaxed">
              <strong className="text-foreground">Need a website first?</strong>{" "}
              <span className="text-muted-foreground">
                Companies requiring a fast, CRM-connected website before backend system work should review our Web Systems offering.
              </span>
            </p>
            <Button variant="outline" size="sm" asChild className="mt-4">
              <Link to="/web-systems">
                Explore Web Systems
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>


        {/* Request Your Assessment Form - Redesigned */}
        <div className="py-20" id="request-form">
          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Request Your Assessment</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Complete this intake form to receive a custom diagnostic proposal within 24 hours.
              </p>
            </div>

            <div className="bg-gradient-to-br from-card to-card/50 border-2 border-border rounded-2xl p-10 shadow-xl">
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border/50">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-2xl">Assessment Request</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="fullName" className="text-sm font-semibold">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      required
                      placeholder="John Smith"
                      className="h-11 border-2 focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-sm font-semibold">
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      placeholder="john@company.com"
                      className="h-11 border-2 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">
                      Company <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      required
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentSystems">
                    Current Tech Stack <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="currentSystems"
                    value={formData.currentSystems}
                    onChange={(e) => setFormData({...formData, currentSystems: e.target.value})}
                    required
                    placeholder="e.g., Salesforce, HubSpot, Marketo, Zapier, etc."
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="budget" className="text-sm font-semibold">
                    Budget/Timeline/Team Size
                  </Label>
                  <Input
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    placeholder="e.g., Q1 2024, $50K-100K, 50-person team"
                    className="h-11 border-2 focus:border-primary transition-colors"
                  />
                  <p className="text-xs text-muted-foreground">Optional: helps us tailor our proposal</p>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="challenges" className="text-sm font-semibold">
                    Key Challenges/Objectives <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="challenges"
                    value={formData.challenges}
                    onChange={(e) => setFormData({...formData, challenges: e.target.value})}
                    required
                    rows={5}
                    placeholder="Describe what you're trying to solve or improve..."
                    className="border-2 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="about" className="text-sm font-semibold">
                    How did you hear about us?
                  </Label>
                  <Input
                    id="about"
                    value={formData.about}
                    onChange={(e) => setFormData({...formData, about: e.target.value})}
                    placeholder="Referral, search, LinkedIn, etc."
                    className="h-11 border-2 focus:border-primary transition-colors"
                  />
                </div>

                <div className="pt-6 space-y-4">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    By submitting this form, you agree to our{" "}
                    <Link to="/privacy-policy" className="text-primary hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                      Privacy Policy
                    </Link>
                    {" "}and consent to CWT Studio using your information to process your assessment request.
                  </p>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 hover-lift hover-glow group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4 animate-spin" />
                        Sending Request...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 text-primary-foreground">
                        Request Assessment Proposal
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </AnimatedSection>
        </div>

      </Section>
    </div>
  );
};

export default Assessment;
