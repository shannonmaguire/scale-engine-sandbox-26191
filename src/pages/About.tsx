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
import { Target, Zap, Linkedin, Shield } from "lucide-react";
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
  return <div className="min-h-screen">
      <EngagementTracker />
      <SEOHead 
        title="About CWT Studio | Backend Revenue Systems Architects" 
        description="We install revenue infrastructure for high-trust industries. 90-day implementations with documented systems and measurable outcomes." 
        keywords={[
          'about CWT Studio', 
          'backend revenue systems', 
          'revenue infrastructure architects', 
          'Salesforce optimization experts', 
          'high-trust industries',
          'Shannon Maguire'
        ]} 
      />
      
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
            Revenue infrastructure that compounds through documented systems and repeatable execution. Working systems installed in 90 days because infrastructure determines whether growth compounds or collapses under its own weight.
          </p>
          
          <div className="flex gap-4 justify-center">
            <ConversionOptimizedButton 
              to="/assessment" 
              ctaName="About Hero - Start Assessment" 
              location="About Hero" 
              size="lg"
            >
              Start Your Assessment
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
                Shannon architects backend revenue systems for high-trust industries where precision determines outcomes. Her work spans legal, compliance, cybersecurity, and B2B SaaS—sectors where infrastructure failure directly translates to revenue loss. Documented systems enable founders to scale without breaking what already functions.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-mono rounded-full border border-primary/20">Salesforce Certified</span>
                    <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-mono rounded-full border border-primary/20">Systems Integration</span>
                    <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-mono rounded-full border border-primary/20">Revenue Operations</span>
                  </div>
                </div>
                
                <Button 
                  asChild 
                  variant="outline" 
                  size="default" 
                  className="group transition-all hover:shadow-md"
                >
                  <a 
                    href="https://www.linkedin.com/in/shanmag/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Connect with Shannon Maguire on LinkedIn"
                    className="flex items-center"
                  >
                    <Linkedin size={ICON_SIZES.small} strokeWidth={ICON_STROKE.default} className="mr-2" aria-hidden="true" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

      </Section>

      {/* Why CWT Studio */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-section mb-6">Why CWT Studio</h2>
            <p className="text-description text-lg max-w-2xl mx-auto">
              Fortune 500 precision delivered at freelancer speed, stripped of the overhead that inflates cost and delays execution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Fortune 500 Depth */}
            <div className="bg-card border-2 border-border rounded-lg p-8 hover:border-primary/30 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="heading-subsection mb-4 text-primary">Enterprise Depth</h3>
              <ul className="space-y-3 text-muted-foreground text-sm leading-6">
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                  <span>Proven frameworks tested at scale</span>
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                  <span>Salesforce-certified expertise</span>
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                  <span>Enterprise-grade documentation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                  <span>Strategic executive partnership</span>
                </li>
              </ul>
            </div>

            {/* Micro-Consultancy Model */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary rounded-lg p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="heading-subsection mb-4 text-primary">Micro-Consultancy</h3>
              <ul className="space-y-3 text-foreground text-sm leading-6">
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                  <span>Direct line between you and execution—zero intermediary layers</span>
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                  <span>Senior architect builds your systems, eliminating junior team learning curves</span>
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                  <span>Fixed pricing removes the overhead that consultancies pass to clients</span>
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                  <span>Strategic decisions made by the person implementing them</span>
                </li>
              </ul>
            </div>

            {/* Freelancer Agility */}
            <div className="bg-card border-2 border-border rounded-lg p-8 hover:border-primary/30 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="heading-subsection mb-4 text-primary">Freelancer Agility</h3>
              <ul className="space-y-3 text-muted-foreground text-sm leading-6">
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                  <span>24-hour response times</span>
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                  <span>90-day delivery cycles</span>
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                  <span>Fixed pricing, no change orders</span>
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                  <span>Flexible engagement models</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-warm/20 border-2 border-warm rounded-lg p-8 text-center">
            <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
              Strategic rigor and proven methodologies of enterprise consultancies delivered in 90-day cycles instead of eighteen-month transformations. Senior expertise executes directly rather than delegating to junior associates. Systems go live in weeks because the architect building them makes the strategic decisions.
            </p>
          </div>
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
              
              <p className="text-foreground leading-relaxed mb-8 text-lg">
                Every company operates under different constraints regarding stage, timeline, and existing infrastructure. Forcing wholesale replacement creates more problems than it solves, which means improvements must function within your current reality. Our methods adapt to your operations rather than demanding you rebuild around a standardized framework.
              </p>
              
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                <h3 className="font-mono font-bold text-base mb-5 text-foreground">What We Do</h3>
                  <ul className="space-y-3 text-foreground text-sm leading-6">
                    <li className="flex items-center gap-3">
                      <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                      <span>Assess current infrastructure and diagnose where systems break under load</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                      <span>Work within existing tools rather than forcing platform migrations</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                      <span>Install fixes in 90-day cycles that deliver measurable results</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                      <span>Partner at executive level to align technical decisions with revenue goals</span>
                    </li>
                  </ul>
                </div>
                <div>
                <h3 className="font-mono font-bold text-base mb-5 text-foreground">What We Don't Do</h3>
                  <ul className="space-y-3 text-foreground text-sm leading-6">
                    <li className="flex items-center gap-3">
                      <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-muted-foreground flex-shrink-0"></span>
                      <span>Force overhauls when targeted fixes would deliver faster ROI</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-muted-foreground flex-shrink-0"></span>
                      <span>Deliver discovery reports without implementation plans</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-muted-foreground flex-shrink-0"></span>
                      <span>Apply generic frameworks that ignore company-specific constraints</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-muted-foreground flex-shrink-0"></span>
                      <span>Over-architect solutions before validating assumptions under real load</span>
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
            Revenue systems built to carry growth without breaking under load, designed to compound rather than require constant intervention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConversionOptimizedButton 
              to="/assessment" 
              ctaName="About - Start Assessment" 
              location="About CTA Section"
              size="lg"
            >
              Start Your Assessment
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