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
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="system-status mb-8">
            REVENUE LEADERSHIP
          </div>
          
          <h1 className="heading-page mb-8">
            We Install Backend Revenue Systems
          </h1>
          <p className="text-description text-lg max-w-2xl mx-auto mb-10">
            Infrastructure designed to compound—systems that make revenue growth reliable and repeatable through documented execution. We install working systems in 90 days because revenue infrastructure cannot wait for transformation roadmaps.
          </p>
          
          <div className="flex gap-4 justify-center">
            <ConversionOptimizedButton 
              to="/assessment" 
              ctaName="About Hero - Start Assessment" 
              location="About Hero" 
              size="lg"
            >
              Start Assessment
            </ConversionOptimizedButton>
            <ConversionOptimizedButton 
              to="/proof" 
              ctaName="About Hero - View Case Studies" 
              location="About Hero" 
              size="lg"
              variant="outline"
            >
              View Case Studies
            </ConversionOptimizedButton>
          </div>
        </div>

        {/* Shannon's Bio */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-card to-card/50 border border-border rounded-xl p-12 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <Avatar className="w-44 h-44 border-4 border-primary/20 shadow-lg ring-4 ring-primary/5">
                  <AvatarImage src={shannonPhoto} alt="Shannon Maguire, Founder and Systems Architect" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-1">
                <div className="mb-6">
                  <h2 className="heading-subsection mb-2 text-foreground">Shannon Maguire</h2>
                  <p className="text-primary font-mono text-base font-semibold mb-4">Founder & Systems Architect</p>
                </div>
                
                <div className="space-y-5 mb-8">
                  <p className="text-foreground leading-relaxed text-base">
                Shannon architects backend revenue systems for high-trust industries where precision determines outcomes. Her work spans legal, compliance, cybersecurity, and B2B SaaS—sectors where infrastructure failure means revenue loss. She builds documented systems that enable founders to scale without breaking what already works.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-mono rounded-full border border-primary/20">Salesforce Expert</span>
                    <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-mono rounded-full border border-primary/20">Systems Integration</span>
                    <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-mono rounded-full border border-primary/20">Revenue Operations</span>
                  </div>
                </div>
                
                <Button 
                  asChild 
                  variant="outline" 
                  size="default" 
                  className="hover:bg-primary hover:text-primary-foreground transition-all hover:shadow-md"
                >
                  <a 
                    href="https://www.linkedin.com/in/shanmag/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Connect with Shannon Maguire on LinkedIn"
                  >
                    <Linkedin size={ICON_SIZES.small} strokeWidth={ICON_STROKE.default} className="mr-2" aria-hidden="true" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

      </Section>

      {/* Values */}
      <Section variant="muted">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-6">How We Work</h2>
          	<p className="text-description text-lg max-w-2xl mx-auto">
            Four principles that govern every engagement.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <StandardCard key={index} className="hover:shadow-xl hover:border-primary/30 transition-all">
              <div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <value.icon className="w-7 h-7 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="heading-subsection mb-4 text-primary">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            </StandardCard>
          ))}
        </div>
      </Section>

      {/* Who We're For + Working with Us */}
      <Section>
        <div className="max-w-5xl mx-auto space-y-20">
          {/* Who We're For */}
          <div>
            <div className="text-center mb-12">
              <h2 className="heading-section mb-6 text-foreground">Who We're For</h2>
                <p className="text-description text-lg max-w-2xl mx-auto">
                  We work with operators who need systems installed within weeks, where execution determines value.
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <StandardCard className="bg-gradient-to-br from-card to-card/50 border-2 hover:border-primary/30 transition-all">
                <div className="space-y-6">
                  <h3 className="heading-subsection text-primary">You're a Fit If</h3>
                  <ul className="space-y-4 text-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Revenue is growing but infrastructure is breaking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>You need fixes in weeks, not quarters</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Salesforce exists but isn't delivering leverage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>You value execution over presentations</span>
                    </li>
                  </ul>
                </div>
              </StandardCard>
              
              <StandardCard className="border-2 hover:border-muted transition-all">
                <div className="space-y-6">
                  <h3 className="heading-subsection text-muted-foreground">You're Not a Fit If</h3>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                      <span>You need 18-month transformation roadmaps</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                      <span>You want strategy consulting without implementation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                      <span>Systems are working — you're just optimizing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                      <span>You need a full-time employee, not a sprint partner</span>
                    </li>
                  </ul>
                </div>
              </StandardCard>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-muted-foreground font-mono text-sm">
                Still not sure? Check our <Link to="/proof" className="text-primary hover:underline font-semibold">case studies</Link> to see if your situation matches.
              </p>
            </div>
          </div>

          {/* Working with Us */}
          <div>
            <div className="bg-gradient-to-br from-card to-card/50 border-2 border-border rounded-xl p-10 shadow-lg">
              <h2 className="heading-section mb-10 text-foreground">Working with Us</h2>
              
              {/* Meet You Where You Are */}
              <div className="mb-10 p-8 bg-accent/10 border-2 border-accent/30 rounded-xl">
                <h3 className="font-mono font-bold text-lg mb-5 text-primary">We Meet You Where You Are</h3>
                <p className="text-foreground leading-relaxed mb-6">
                  Every company operates under different constraints—stage, timeline, existing infrastructure. We work with what you have because forcing wholesale replacement creates more problems than it solves. Improvements must function within your reality, which means adapting our methods to your operations rather than demanding you rebuild around our preferences.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-card/50 rounded-lg border border-border">
                    <p className="text-base font-semibold mb-2 text-foreground">Flexible</p>
                    <p className="text-sm text-muted-foreground">Virtual or in-person. Sprint or assessment only. You choose.</p>
                  </div>
                  <div className="p-4 bg-card/50 rounded-lg border border-border">
                    <p className="text-base font-semibold mb-2 text-foreground">Industry Agnostic</p>
                    <p className="text-sm text-muted-foreground">SaaS, services, manufacturing. Revenue patterns are universal.</p>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                <h3 className="font-mono font-bold text-base mb-5 text-foreground">What We Do</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Assess current state</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Diagnose gaps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Work with existing tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Install fixes fast</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Adapt to timeline</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Optimize continuously</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Partner at exec level</span>
                    </li>
                  </ul>
                </div>
                <div>
                <h3 className="font-mono font-bold text-base mb-5 text-foreground">What We Don't Do</h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground">•</span>
                      <span>Force overhauls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground">•</span>
                      <span>Discovery without execution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground">•</span>
                      <span>Generic frameworks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground">•</span>
                      <span>Drop docs and disappear</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground">•</span>
                      <span>Over-architect early</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-muted-foreground">•</span>
                      <span>Evaluate without context</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Trust Bar */}
      <Section variant="muted">
        <TrustBar />
      </Section>
      
      {/* CTA Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <div className="system-status mb-6">
            READY TO START
          </div>
          <h2 className="heading-section mb-8">Install Infrastructure That Scales</h2>
          <p className="text-description text-lg mb-10">
            Revenue systems that compound—built to carry growth without breaking under load.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConversionOptimizedButton 
              to="/assessment" 
              ctaName="About - Start Assessment" 
              location="About CTA Section"
              size="lg"
            >
              Start Assessment
            </ConversionOptimizedButton>
            <ConversionOptimizedButton 
              to="/proof" 
              ctaName="About - View Proof" 
              location="About CTA Section" 
              variant="outline"
              size="lg"
            >
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