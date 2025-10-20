import { Button } from "@/components/ui/button";
import { StandardCard } from "@/components/ui/standard-card";
import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { useScrollDepth } from "@/hooks/useScrollDepth";
import { useExitIntent } from "@/hooks/useExitIntent";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { TrustBar } from "@/components/TrustBar";
import { usePerformanceMonitoring } from "@/hooks/usePerformanceMonitoring";
import { EngagementTracker } from "@/components/EngagementTracker";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Target, Zap, Clock, Palette, Linkedin, Award, CheckCircle, ArrowRight } from "lucide-react";
import { ICON_SIZES, ICON_STROKE } from "@/lib/icon-config";
import { useState } from "react";
import shannonPhoto from "@/assets/shannon-founder.png";
import { Breadcrumbs } from "@/components/Breadcrumbs";
const About = () => {
  // Performance monitoring
  usePerformanceMonitoring();
  useScrollDepth();
  const [showExitPopup, setShowExitPopup] = useState(false);
  useExitIntent({
    enabled: true,
    onExitIntent: () => setShowExitPopup(true)
  });
  const values = [{
    icon: Target,
    title: "Precision",
    description: "We diagnose before we build because every recommendation must be backed by evidence, not assumption. Data determines direction."
  }, {
    icon: Zap,
    title: "Ownership",
    description: "We own outcomes because deliverables without results are documentation exercises. Your revenue determines whether our work succeeded."
  }, {
    icon: Clock,
    title: "Speed",
    description: "Revenue systems cannot wait for perfection. We ship working infrastructure quickly, then iterate based on what the system reveals under load."
  }, {
    icon: Palette,
    title: "Craft",
    description: "Elegant systems work better because precision and power reinforce each other. Infrastructure that looks clean performs reliably."
  }];
  return <div className="min-h-screen">
      <EngagementTracker />
      <SEOHead title="About CWT Studio | Backend Revenue Systems Architects" description="We install revenue infrastructure for high-trust industries. Documented systems. Repeatable execution. No 18-month transformations—just 90-day installs." keywords={['about CWT Studio', 'backend revenue systems', 'revenue infrastructure architects', 'Salesforce optimization experts', 'high-trust industries']} />
      
      <Breadcrumbs />
      
      <Section className="relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />
        
        {/* Hero */}
        <div className="relative text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <Award className="h-4 w-4 text-primary" />
            <span className="font-mono text-sm font-semibold text-primary uppercase tracking-wide">
              Revenue Leadership
            </span>
          </div>
          
          <h1 className="heading-page mb-6 animate-fade-in">
            We Install Backend Revenue Systems
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Infrastructure designed to compound—systems that make revenue growth reliable and repeatable through documented execution. We install working systems in 90 days because revenue infrastructure cannot wait for transformation roadmaps.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConversionOptimizedButton to="/assessment" ctaName="About Hero - Start Assessment" location="About Hero" size="lg">
              Start Assessment
            </ConversionOptimizedButton>
            <Button asChild variant="outline" size="lg" className="font-mono">
              <Link to="/proof">
                View Case Studies
              </Link>
            </Button>
          </div>
        </div>

        {/* Shannon's Bio */}
        <div className="relative mt-20 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-card to-muted/20 border-2 border-primary/20 rounded-2xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-full opacity-75 group-hover:opacity-100 blur transition-opacity"></div>
                  <Avatar className="relative w-40 h-40 md:w-48 md:h-48 border-4 border-background shadow-2xl">
                    <AvatarImage src={shannonPhoto} alt="Shannon Maguire, Founder and Systems Architect" />
                    <AvatarFallback className="text-3xl font-bold">SM</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-mono font-bold mb-2 text-foreground">Shannon Maguire</h2>
                  <p className="text-primary font-mono text-base font-semibold mb-4">Founder & Systems Architect</p>
                  <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
                </div>
                
                <div className="space-y-6 mb-8">
                  <p className="text-foreground leading-relaxed text-lg">
                    Shannon architects backend revenue systems for high-trust industries where precision determines outcomes. Her work spans legal, compliance, cybersecurity, and B2B SaaS—sectors where infrastructure failure means revenue loss.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    She builds documented systems that enable founders to scale without breaking what already works, combining deep technical expertise with practical execution to deliver measurable results in 90-day sprints.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-mono rounded-full border border-primary/20 hover:bg-primary/20 transition-colors">Salesforce Expert</span>
                    <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-mono rounded-full border border-primary/20 hover:bg-primary/20 transition-colors">Systems Integration</span>
                    <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-mono rounded-full border border-primary/20 hover:bg-primary/20 transition-colors">Revenue Operations</span>
                  </div>
                </div>
                
                <Button asChild variant="default" size="lg" className="font-mono group hover:shadow-lg transition-all">
                  <a href="https://www.linkedin.com/in/shanmag/" target="_blank" rel="noopener noreferrer" aria-label="Connect with Shannon Maguire on LinkedIn">
                    <Linkedin size={ICON_SIZES.small} strokeWidth={ICON_STROKE.default} className="mr-2 group-hover:scale-110 transition-transform" aria-hidden="true" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="relative mt-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-muted border border-border rounded-full">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span className="font-mono text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Our Principles
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 text-foreground">How We Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four principles that govern every engagement—no exceptions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => <div key={index} className="group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <StandardCard className="h-full hover:shadow-2xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-background to-muted/5">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                      <value.icon className="w-8 h-8 text-primary" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-mono font-bold mb-4 text-primary group-hover:text-primary/90 transition-colors">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-base">{value.description}</p>
                    </div>
                  </div>
                </StandardCard>
              </div>)}
          </div>
        </div>
      </Section>

      {/* Who We're For Section */}
      <Section variant="muted" className="relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-background border border-border rounded-full">
              <Target className="h-4 w-4 text-primary" />
              <span className="font-mono text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Ideal Client Profile
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 text-foreground">Who We're For</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We work with operators who need systems installed within weeks, where execution determines value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-mono font-bold text-primary">You're a Fit If</h3>
              </div>
              <ul className="space-y-4 text-foreground">
                <li className="flex items-start gap-4 group">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <span className="text-base leading-relaxed">Revenue is growing but infrastructure is breaking</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <span className="text-base leading-relaxed">You need fixes in weeks, not quarters</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <span className="text-base leading-relaxed">Salesforce exists but isn't delivering leverage</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <span className="text-base leading-relaxed">You value execution over presentations</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-muted to-muted/50 border-2 border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 opacity-75">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-muted-foreground/20 flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-muted-foreground/50 rounded-full" />
                </div>
                <h3 className="text-2xl font-mono font-bold text-muted-foreground">You're Not a Fit If</h3>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-muted-foreground/50 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-base leading-relaxed">You need 18-month transformation roadmaps</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-muted-foreground/50 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-base leading-relaxed">You want strategy consulting without implementation</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-muted-foreground/50 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-base leading-relaxed">Systems are working — you're just optimizing</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-muted-foreground/50 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-base leading-relaxed">You need a full-time employee, not a sprint partner</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center bg-background/50 backdrop-blur-sm border border-border rounded-xl p-8">
            <p className="text-muted-foreground font-mono text-base mb-4">
              Still not sure? Check our <Link to="/proof" className="text-primary hover:underline font-semibold inline-flex items-center gap-1 group">
                case studies
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link> to see if your situation matches.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        {/* Working with Us */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-card to-muted/10 border-2 border-border rounded-2xl p-10 md:p-12 shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 text-foreground">Working with Us</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto"></div>
            </div>
            
            {/* Meet You Where You Are */}
            <div className="mb-10 p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 border-primary/30 rounded-2xl hover:shadow-lg transition-all">
              <h3 className="text-2xl font-mono font-bold mb-6 text-primary flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                We Meet You Where You Are
              </h3>
              <p className="text-foreground leading-relaxed mb-6 text-base">
                Every company operates under different constraints—stage, timeline, existing infrastructure. We work with what you have because forcing wholesale replacement creates more problems than it solves. Improvements must function within your reality, which means adapting our methods to your operations rather than demanding you rebuild around our preferences.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background/80 backdrop-blur-sm p-5 rounded-xl border border-primary/20">
                  <p className="text-base font-bold mb-2 text-foreground">Flexible Engagement</p>
                  <p className="text-sm text-muted-foreground">Virtual or in-person. Sprint or assessment only. You choose the format that works.</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm p-5 rounded-xl border border-primary/20">
                  <p className="text-base font-bold mb-2 text-foreground">Industry Agnostic</p>
                  <p className="text-sm text-muted-foreground">SaaS, services, manufacturing. Revenue patterns are universal across sectors.</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-background/50 p-8 rounded-xl border-2 border-primary/20">
                <h3 className="text-xl font-mono font-bold mb-6 text-foreground flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  What We Do
                </h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Assess current state with precision diagnostics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Diagnose gaps using data-driven analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Work with existing tools and systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Install fixes fast within sprint timelines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Adapt to your timeline constraints</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Optimize continuously post-deployment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Partner at executive leadership level</span>
                  </li>
                </ul>
              </div>
              <div className="bg-muted/30 p-8 rounded-xl border-2 border-border">
                <h3 className="text-xl font-mono font-bold mb-6 text-muted-foreground flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-muted-foreground/50 rounded-full" />
                  What We Don't Do
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full mt-2 flex-shrink-0" />
                    <span>Force complete system overhauls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full mt-2 flex-shrink-0" />
                    <span>Discovery phases without execution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full mt-2 flex-shrink-0" />
                    <span>Apply generic industry frameworks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full mt-2 flex-shrink-0" />
                    <span>Drop documentation and disappear</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full mt-2 flex-shrink-0" />
                    <span>Over-architect in early stages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full mt-2 flex-shrink-0" />
                    <span>Evaluate without operational context</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Trust Bar */}
      <TrustBar />
      
      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-background border border-border rounded-full">
            <ArrowRight className="h-4 w-4 text-primary" />
            <span className="font-mono text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Ready to Start
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-mono font-bold mb-6 text-foreground leading-tight">Install Infrastructure That Scales</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Revenue systems that compound—built to carry growth without breaking under load.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConversionOptimizedButton to="/assessment" ctaName="About - Start Assessment" location="About CTA Section" size="lg">
              Start Assessment
            </ConversionOptimizedButton>
            <Button asChild variant="outline" size="lg" className="font-mono hover:bg-primary/10 hover:border-primary transition-all">
              <Link to="/proof">
                View Proof
              </Link>
            </Button>
          </div>
        </div>
      </Section>
      
      {/* Exit Intent Popup */}
      <ExitIntentPopup isOpen={showExitPopup} onClose={() => setShowExitPopup(false)} title="Get Our Operating Principles Guide" description="See real-world applications of Precision, Ownership, Speed, and Craft in Revenue Infrastructure implementations." />
    </div>;
};
export default About;