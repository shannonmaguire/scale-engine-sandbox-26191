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
    { title: "Infrastructure Audit", description: "System architecture review covering CRM, automation logic, data flow, and integration points." },
    { title: "Gap Analysis", description: "Baseline measurement against operational benchmarks—manual effort, data quality, pipeline velocity." },
    { title: "Prioritized Roadmap", description: "Sequenced 90-day implementation plan with effort estimates and expected performance improvements." },
    { title: "Executive-Ready Presentation", description: "Technical findings translated to business impact—ROI projections, risk mitigation, capacity gains." }
  ];

  const triggers = [
    { label: "Manual ops exceed 20 hours/week", description: "Revenue operations team spends majority of time on manual data entry, list building, or report generation." },
    { label: "Memory-based forecasting", description: "Pipeline visibility depends on rep recall rather than system-generated data." },
    { label: "CRM fragmentation", description: "Salesforce exists alongside spreadsheets, Slack threads, and email chains as equal sources of truth." }
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
      
      <Section className="border-b border-border">
        {/* Hero */}
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h1 className="heading-section">Infrastructure Assessment</h1>
          </div>
          
          <p className="text-description text-foreground leading-relaxed max-w-2xl mb-10">
            Map baselines. Identify structural failures. Produce a sequenced 90-day implementation plan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="outline" asChild>
              <a href="#request-form">Request Assessment Proposal</a>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href="/sample-report">View Sample Report</a>
            </Button>
          </div>
        </div>
      </Section>

      {/* What You Get */}
      <Section variant="muted" className="border-b border-border">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">What You Get</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {deliverables.map((item, index) => (
              <div key={index} className="border border-border bg-card p-6">
                <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3 font-semibold">
                  {item.title}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why It Works */}
      <Section className="border-b border-border">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">Why It Works</h2>
          </div>

          <p className="text-description text-muted-foreground mb-10 max-w-2xl">
            Assessment performs triage on revenue infrastructure—identifying load-bearing failures before they manifest as missed targets or operational breakage.
          </p>

          <div className="space-y-6">
            {triggers.map((trigger, index) => (
              <div key={index} className="border-l-2 border-primary/50 pl-6">
                <div className="font-mono text-sm font-semibold text-foreground mb-2">
                  {trigger.label}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {trigger.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Form */}
      <Section variant="muted">
        <div className="max-w-2xl mx-auto" id="request-form">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <h2 className="heading-section">Request Assessment Proposal</h2>
          </div>
          
          <div className="bg-card border border-border p-8">
            
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
                {isSubmitting ? "Submitting..." : "Request Assessment Proposal"}
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Assessment;
