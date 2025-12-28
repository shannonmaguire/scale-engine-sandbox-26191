import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { ArrowRight, Calendar, CheckCircle2, XCircle, Clock, Target, Zap, BarChart3, Users, Mail, MessageSquare } from "lucide-react";
import { trackCTAClick } from "@/hooks/usePageTracking";
import { useScrollDepth } from "@/hooks/useScrollDepth";
import { useTimeOnPage } from "@/hooks/useTimeOnPage";

const Upwork = () => {
  useScrollDepth();
  useTimeOnPage();

  const handleCTAClick = (ctaName: string, destination: string) => {
    trackCTAClick(ctaName, "upwork-page", destination);
  };

  return (
    <>
      <SEOHead
        title="Revenue Systems for Growth Teams | CWT Studio"
        description="Revenue systems installed fast. Funnel architecture, CRM logic, lifecycle automation, attribution, and operating cadence."
        noindex={true}
      />

      <main className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 border-b border-border">
          <div className="container max-w-4xl mx-auto px-6">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-6">
              Revenue systems installed fast.
              <br />
              <span className="text-muted-foreground">So growth stops leaking.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
              I build the backend that makes marketing and sales predictable: funnel architecture, CRM logic, lifecycle automation, attribution, and operating cadence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button asChild size="lg" onClick={() => handleCTAClick("book-fit-call-hero", "/contact?source=upwork")}>
                <Link to="/contact?source=upwork">
                  Book a 20-min Fit Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" onClick={() => handleCTAClick("see-how-i-work", "#deliverables")}>
                <a href="#deliverables">See How I Work</a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                90-day sprint model
              </span>
              <span className="flex items-center gap-2">
                <Target className="h-4 w-4 text-primary" />
                High-trust industries
              </span>
              <span className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                Operator delivery
              </span>
            </div>
          </div>
        </section>

        {/* Upwork Reality Section */}
        <section className="py-16 md:py-24 border-b border-border bg-muted/30">
          <div className="container max-w-4xl mx-auto px-6">
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-12">
              If you found me on Upwork, here's what you need to know.
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-medium text-lg">I don't sell posts.</h3>
                <p className="text-muted-foreground text-sm">I install systems. Repeatable infrastructure that compounds.</p>
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-medium text-lg">I don't need hand-holding.</h3>
                <p className="text-muted-foreground text-sm">I need access + decisions. Everything else I handle.</p>
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-medium text-lg">If it can't be measured, it doesn't ship.</h3>
                <p className="text-muted-foreground text-sm">Every system includes tracking from day one.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What I Actually Build */}
        <section id="deliverables" className="py-16 md:py-24 border-b border-border">
          <div className="container max-w-5xl mx-auto px-6">
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-4">What I Actually Build</h2>
            <p className="text-muted-foreground mb-12">Modules, not mystery. Each with clear outputs.</p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Funnel + Offer Architecture",
                  output: "Messaging hierarchy, proof sequencing, conversion logic",
                  time: "5–10 days",
                  data: "Current funnel, analytics access, offer docs"
                },
                {
                  title: "CRM + Lifecycle Automation",
                  output: "Stages, triggers, routing, follow-up, segmentation",
                  time: "7–14 days",
                  data: "CRM access, lead sources, sales process"
                },
                {
                  title: "Attribution + KPI Dashboards",
                  output: "Single source of truth, weekly reporting cadence",
                  time: "3–7 days",
                  data: "Ad accounts, analytics, CRM"
                },
                {
                  title: "Show Rate + Activation Layer",
                  output: "Speed-to-lead, reminders, pre-call conditioning",
                  time: "3–5 days",
                  data: "Calendar tool, email/SMS access"
                },
                {
                  title: "Outbound / Partnerships Engine",
                  output: "Lists, sequences, partner pipeline, referrals",
                  time: "7–14 days",
                  data: "ICP definition, existing partner list"
                }
              ].map((module, i) => (
                <div key={i} className="border border-border rounded-lg p-6 bg-card hover:border-primary/50 transition-colors">
                  <h3 className="font-medium text-lg mb-3">{module.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{module.output}</p>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3 text-primary" />
                      <span className="text-muted-foreground">{module.time}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Target className="h-3 w-3 text-primary mt-0.5" />
                      <span className="text-muted-foreground">Needs: {module.data}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How I Run Work */}
        <section className="py-16 md:py-24 border-b border-border bg-muted/30">
          <div className="container max-w-4xl mx-auto px-6">
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-4">
              This only works if we run it like an operating system.
            </h2>
            <p className="text-muted-foreground mb-12">Four non-negotiables for a successful sprint.</p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <h3 className="font-medium text-lg flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Success Scorecard
                </h3>
                <ul className="space-y-3 text-sm">
                  {[
                    "Access granted within 24 hours",
                    "Feedback is red/green, not essays",
                    "Decisions stick until the next checkpoint",
                    "Weekly review call + async updates"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-lg flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-destructive" />
                  Do Not Engage If
                </h3>
                <ul className="space-y-3 text-sm">
                  {[
                    "You want vibes, not numbers",
                    "You change direction daily",
                    "You can't provide access",
                    "You want to outsource thinking but keep control"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* First 14 Days */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="container max-w-4xl mx-auto px-6">
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-12">First 14 Days: What You Get</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-border rounded-lg p-6 bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">
                    W1
                  </div>
                  <h3 className="font-medium text-lg">Week 1</h3>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Audit + baseline measurement
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Funnel narrative fixes (above-the-fold + proof order)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Tracking map (events, UTMs, pixels, CRM fields)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    KPI dashboard v1
                  </li>
                </ul>
              </div>

              <div className="border border-border rounded-lg p-6 bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">
                    W2
                  </div>
                  <h3 className="font-medium text-lg">Week 2</h3>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Lifecycle automation (email/SMS + routing)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Conversion fixes (forms, friction, scheduling flow)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Retargeting logic plan
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Sprint backlog + execution cadence
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-center text-muted-foreground mt-10 text-lg">
              By day 14, you will know exactly where revenue is leaking and what we're shipping next to fix it.
            </p>
          </div>
        </section>

        {/* Proof Section */}
        <section className="py-16 md:py-24 border-b border-border bg-muted/30">
          <div className="container max-w-4xl mx-auto px-6">
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-4">
              Proof, without screenshots of client accounts.
            </h2>
            <p className="text-muted-foreground mb-12">Architecture and outcomes. Not access violations.</p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: "Before → After System Maps",
                  desc: "Visual architecture showing what changed and why"
                },
                {
                  title: "Anonymized KPI Deltas",
                  desc: "Real results with identifying details removed"
                },
                {
                  title: "Process Artifacts",
                  desc: "Tracking plans, SOPs, dashboard templates"
                }
              ].map((proof, i) => (
                <div key={i} className="border border-border rounded-lg p-6 bg-card">
                  <h3 className="font-medium mb-2">{proof.title}</h3>
                  <p className="text-muted-foreground text-sm">{proof.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground italic">
              I don't share client ad accounts. I show architecture and outcomes.
            </p>
          </div>
        </section>

        {/* KPI Philosophy */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="container max-w-4xl mx-auto px-6">
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-12">What I Watch Daily vs Weekly</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="space-y-4">
                <h3 className="font-medium text-lg flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Daily
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Lead volume</li>
                  <li>Cost per lead</li>
                  <li>Booked calls</li>
                  <li>Speed-to-lead</li>
                  <li>Show rate signals</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-medium text-lg flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Weekly
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Conversion rate by step</li>
                  <li>CAC / Payback (if ecom)</li>
                  <li>Close rate</li>
                  <li>LTV signals</li>
                  <li>Cohort behavior</li>
                  <li>Pipeline hygiene</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-border rounded-lg p-6 bg-card">
                <h3 className="font-medium text-lg mb-4">Most Common Causes of Low Show Rate</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Weak pre-call conditioning</li>
                  <li>• Slow follow-up</li>
                  <li>• Calendar friction</li>
                  <li>• Misaligned offer expectations</li>
                  <li>• No confirmation loop (SMS/email)</li>
                </ul>
              </div>
              <div className="border border-border rounded-lg p-6 bg-card">
                <h3 className="font-medium text-lg mb-4">How I Improve Close Rate</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Better lead qualification + intent routing</li>
                  <li>• Pre-call education + objection handling assets</li>
                  <li>• Proof sequencing upgrades</li>
                  <li>• Offer clarity + risk reversal</li>
                  <li>• Follow-up automation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Offer + Pricing */}
        <section className="py-16 md:py-24 border-b border-border bg-muted/30">
          <div className="container max-w-4xl mx-auto px-6">
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-4">
              Start small. Prove it. Then scale.
            </h2>
            <p className="text-muted-foreground mb-12">Two entry points. Both lead to systems that compound.</p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="border border-border rounded-lg p-6 bg-card">
                <h3 className="font-medium text-lg mb-2">Systems Assessment</h3>
                <p className="text-muted-foreground text-sm mb-4">5-day diagnostic of your revenue infrastructure</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    Full funnel audit
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    Tracking + attribution review
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    Prioritized fix list
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    90-day roadmap
                  </li>
                </ul>
              </div>
              <div className="border-2 border-primary rounded-lg p-6 bg-card">
                <h3 className="font-medium text-lg mb-2">90-Day Sprint</h3>
                <p className="text-muted-foreground text-sm mb-4">Full implementation with weekly delivery</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    Everything in Assessment
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    System buildout + automation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    Weekly execution cycles
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    Team handoff + documentation
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              Pricing depends on scope. I'll propose fixed milestones after the Fit Call.
            </p>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="py-20 md:py-32">
          <div className="container max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-medium mb-6">
              Ready to stop the leak?
            </h2>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
              20 minutes. No pitch. Just a fast assessment of whether this is a fit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" onClick={() => handleCTAClick("book-fit-call-footer", "/contact?source=upwork")}>
                <Link to="/contact?source=upwork">
                  Book a 20-min Fit Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Or send the deck / links and I'll reply with a fast diagnostic.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Upwork;