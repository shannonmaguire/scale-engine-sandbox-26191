import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { FileText, Target, TrendingUp, Clock, CheckCircle2, ClipboardCheck, Zap, Search, ArrowRight, Shield, BarChart3, Sparkles, DollarSign } from "lucide-react";
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
    "Complete infrastructure audit (Salesforce, integrations, automation)",
    "90-day prioritized roadmap with quick wins",
    "Executive presentation with ROI projections"
  ];

  const timeline = [
    { title: "Discovery Call", description: "90-minute session to understand your systems and objectives" },
    { title: "Technical Review", description: "1-week deep-dive into CRM, integrations, and data quality" },
    { title: "Report Delivery", description: "Complete assessment with findings and sequenced roadmap" },
    { title: "Executive Readout", description: "60-minute presentation to leadership with recommendations" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          interest: "assessment",
          source_page: "assessment",
          message: `Current Systems: ${formData.currentSystems}\n\nKey Challenges: ${formData.challenges}\n\nBudget/Timeline: ${formData.budget}\n\nHow did you hear about us: ${formData.about}`
        }),
      });

      if (!response.ok) throw new Error('Failed to submit');

      toast.success("Assessment request submitted! We'll be in touch within 24 hours.");
      setFormData({
        fullName: "", email: "", company: "", phone: "",
        currentSystems: "", challenges: "", budget: "", about: ""
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
        title="Revenue Infrastructure Assessment | CWT Studio"
        description="2-week diagnostic of your revenue infrastructure. Get a complete audit, 90-day roadmap, and executive presentation."
        keywords={['revenue infrastructure assessment', 'Salesforce audit', 'backend systems diagnostic', 'RevOps assessment', '90-day roadmap']}
        canonicalUrl="/assessment"
        type="service"
        serviceSchema={{
          name: 'Revenue Infrastructure Assessment',
          description: '2-week diagnostic to map revenue infrastructure, baseline KPIs, and deliver prioritized recommendations with a 90-day roadmap.',
          provider: 'CWT Studio'
        }}
        faqSchema={[
          {
            question: 'What does the assessment include?',
            answer: 'Complete infrastructure audit covering Salesforce, integrations, and automation, a prioritized 90-day roadmap with quick wins, and an executive presentation with ROI projections.'
          },
          {
            question: 'How long does the assessment take?',
            answer: 'The assessment takes 2 weeks from kickoff to final delivery, including discovery call, technical review, report preparation, and executive readout.'
          },
          {
            question: 'Does the assessment credit toward the Sprint?',
            answer: 'Yes, the assessment fee credits toward Sprint implementation if you choose to proceed.'
          }
        ]}
      />
      
      <Breadcrumbs />
      
      <Section>
        {/* Hero */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="system-status mb-6">FIXED SCOPE • FIXED PRICE</div>
          <h1 className="heading-page mb-6">Infrastructure Assessment</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            2-week diagnostic to map revenue infrastructure, establish performance baselines, deliver sequenced recommendations. Fixed scope, fixed price.
          </p>
          
          {/* Key Info Pills */}
          <div className="flex flex-wrap justify-center gap-3 text-sm mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg">
              <Clock size={16} className="text-primary" />
              <span className="font-mono">2 weeks</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg">
              <CheckCircle2 size={16} className="text-primary" />
              <span className="font-mono">Starting at $4,500</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg">
              <CheckCircle2 size={16} className="text-primary" />
              <span className="font-mono text-xs">100% credits to Sprint</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" asChild>
              <a href="/sample-report">View Sample Report</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#request-form">Request Assessment</a>
            </Button>
          </div>

          <Link 
            to="/self-assessment"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <ClipboardCheck className="w-4 h-4 mr-2" />
            <span>Want to self-assess first? <span className="underline group-hover:no-underline">Try our free 5-minute technical maturity checklist</span></span>
            <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* What You Get */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="heading-subsection mb-6">What You Get</h2>
          <div className="space-y-3">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="heading-subsection mb-6">Assessment Process</h2>
          <div className="space-y-6">
            {timeline.map((step, index) => (
              <div key={index} className="border-l-4 border-primary pl-6">
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Assessment */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="heading-subsection mb-6">Assessment Function</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              30-40% of operations budgets address symptoms rather than structural failures. Assessment identifies root causes affecting revenue system performance.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Diagnostic phase typically surfaces 3-5 high-leverage corrections executable within immediate deployment window.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Roadmap output: sequenced implementation plan derived from system data, implementation-agnostic.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto" id="request-form">
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="heading-subsection mb-6">Request Assessment</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    required
                    placeholder="John Smith"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Company *</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    required
                    placeholder="Your Company"
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
                <Label htmlFor="currentSystems">Current Tech Stack *</Label>
                <Input
                  id="currentSystems"
                  value={formData.currentSystems}
                  onChange={(e) => setFormData({...formData, currentSystems: e.target.value})}
                  required
                  placeholder="e.g., Salesforce, HubSpot, Marketo"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="challenges">Key Challenges/Objectives *</Label>
                <Textarea
                  id="challenges"
                  value={formData.challenges}
                  onChange={(e) => setFormData({...formData, challenges: e.target.value})}
                  required
                  rows={4}
                  placeholder="What you're trying to solve or improve..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Budget/Timeline/Team Size</Label>
                <Input
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  placeholder="e.g., Q1 2024, $50K-100K, 50-person team"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="about">How did you hear about us?</Label>
                <Input
                  id="about"
                  value={formData.about}
                  onChange={(e) => setFormData({...formData, about: e.target.value})}
                  placeholder="Referral, search, LinkedIn, etc."
                />
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Request Assessment Proposal"}
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Assessment;
