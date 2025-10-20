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
import { Target, Zap, Clock, Palette, Linkedin } from "lucide-react";
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
      
      <Section>
        {/* Hero */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="system-status mb-6">
            REVENUE LEADERSHIP
          </div>
          
          <h1 className="heading-page mb-6">
            We Install Backend Revenue Systems
          </h1>
          <p className="text-description max-w-2xl mx-auto mb-8">
            Infrastructure designed to compound—systems that make revenue growth reliable and repeatable through documented execution. We install working systems in 90 days because revenue infrastructure cannot wait for transformation roadmaps.
          </p>
          
          <div className="mt-8">
            <ConversionOptimizedButton to="/assessment" ctaName="About Hero - Start Assessment" location="About Hero" size="lg">
              Start Assessment
            </ConversionOptimizedButton>
          </div>
        </div>

        {/* Shannon's Bio */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-10 shadow-sm">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-shrink-0">
                <Avatar className="w-36 h-36 md:w-44 md:h-44 border-2 border-primary/20 shadow-md">
                  <AvatarImage src={shannonPhoto} alt="Shannon Maguire, Founder and Systems Architect" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-1">
                <div className="mb-6">
                  <h2 className="heading-subsection mb-2 text-foreground">Shannon Maguire</h2>
                  <p className="text-primary font-mono text-sm font-semibold mb-1">Founder & Systems Architect</p>
                  
                </div>
                
                <div className="space-y-4 mb-6">
                  <p className="text-foreground leading-relaxed text-base">
                Shannon architects backend revenue systems for high-trust industries where precision determines outcomes. Her work spans legal, compliance, cybersecurity, and B2B SaaS—sectors where infrastructure failure means revenue loss. She builds documented systems that enable founders to scale without breaking what already works.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full">Salesforce Expert</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full">Systems Integration</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full">Revenue Operations</span>
                  </div>
                </div>
                
                <Button asChild variant="outline" size="default" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                  <a href="https://www.linkedin.com/in/shanmag/" target="_blank" rel="noopener noreferrer" aria-label="Connect with Shannon Maguire on LinkedIn">
                    <Linkedin size={ICON_SIZES.small} strokeWidth={ICON_STROKE.default} className="mr-2" aria-hidden="true" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="heading-section mb-4">How We Work</h2>
            	<p className="text-description text-center max-w-prose mx-auto">
              Four principles that govern every engagement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gutter-content">
            {values.map((value, index) => <StandardCard key={index}>
                <div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="heading-subsection mb-3 text-primary">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              </StandardCard>)}
          </div>
        </div>
      </Section>

      {/* Who We're For Section */}
      <Section variant="muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-section mb-6 text-foreground">Who We're For</h2>
              <p className="text-description mx-auto">
                We work with operators who need systems installed within weeks, where execution determines value.
              </p>
          </div>
          
          <div className="grid md:grid-cols-2 gutter-content">
            <StandardCard>
              <div className="space-y-4">
                <h3 className="heading-subsection text-primary">You're a Fit If</h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Revenue is growing but infrastructure is breaking
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    You need fixes in weeks, not quarters
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Salesforce exists but isn't delivering leverage
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    You value execution over presentations
                  </li>
                </ul>
              </div>
            </StandardCard>
            
            <StandardCard>
              <div className="space-y-4">
                <h3 className="heading-subsection text-muted-foreground">You're Not a Fit If</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                    You need 18-month transformation roadmaps
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                    You want strategy consulting without implementation
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                    Systems are working — you're just optimizing
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                    You need a full-time employee, not a sprint partner
                  </li>
                </ul>
              </div>
            </StandardCard>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground font-mono text-sm mb-6">
              Still not sure? Check our <Link to="/proof" className="text-primary hover:underline font-semibold">case studies</Link> to see if your situation matches.
            </p>
          </div>
        </div>

        {/* Working with Us */}
        <div>
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="heading-section mb-6 text-foreground">Working with Us</h2>
            
            {/* Meet You Where You Are */}
            <div className="mb-8 p-6 bg-accent/10 border-2 border-accent/20 rounded-lg">
              <h3 className="font-mono font-bold mb-4 text-primary">We Meet You Where You Are</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Every company operates under different constraints—stage, timeline, existing infrastructure. We work with what you have because forcing wholesale replacement creates more problems than it solves. Improvements must function within your reality, which means adapting our methods to your operations rather than demanding you rebuild around our preferences.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium mb-2 text-foreground">Flexible</p>
                  <p className="text-xs text-muted-foreground">Virtual or in-person. Sprint or assessment only. You choose.</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2 text-foreground">Industry Agnostic</p>
                  <p className="text-xs text-muted-foreground">SaaS, services, manufacturing. Revenue patterns are universal.</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
              <h3 className="font-mono font-bold mb-3 text-foreground">What We Do</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• Assess current state</li>
                  <li>• Diagnose gaps</li>
                  <li>• Work with existing tools</li>
                  <li>• Install fixes fast</li>
                  <li>• Adapt to timeline</li>
                  <li>• Optimize continuously</li>
                  <li>• Partner at exec level</li>
                </ul>
              </div>
              <div>
              <h3 className="font-mono font-bold mb-3 text-foreground">What We Don't Do</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• Force overhauls</li>
                  <li>• Discovery without execution</li>
                  <li>• Generic frameworks</li>
                  <li>• Drop docs and disappear</li>
                  <li>• Over-architect early</li>
                  <li>• Evaluate without context</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Trust Bar */}
      <TrustBar />
      
      {/* CTA Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section mb-6">Install Infrastructure That Scales</h2>
          <p className="text-description mb-8">
            Revenue systems that compound—built to carry growth without breaking under load.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConversionOptimizedButton to="/assessment" ctaName="About - Start Assessment" location="About CTA Section">
              Start Assessment
            </ConversionOptimizedButton>
            <ConversionOptimizedButton to="/proof" ctaName="About - View Proof" location="About CTA Section" variant="outline">
              View Proof
            </ConversionOptimizedButton>
          </div>
        </div>
      </Section>
      
      {/* Exit Intent Popup */}
      <ExitIntentPopup isOpen={showExitPopup} onClose={() => setShowExitPopup(false)} title="Get Our Operating Principles Guide" description="See real-world applications of Precision, Ownership, Speed, and Craft in Revenue Infrastructure implementations." />
    </div>;
};
export default About;