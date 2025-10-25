import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Settings, Users, Shield, Clock, CheckCircle, Target, Zap } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const SalesforceDelivery = () => {
  const deliveryPhases = [
    {
      phase: "Week 1-2",
      title: "Revenue Systems Audit",
      description: "Deep dive into current Salesforce configuration, data flows, and process gaps",
      deliverables: [
        "Complete system architecture review",
        "Data quality assessment",
        "Process bottleneck identification",
        "ROI opportunity analysis"
      ]
    },
    {
      phase: "Week 3-4", 
      title: "Solution Architecture",
      description: "Design optimized revenue operations framework with CloudRoute integration",
      deliverables: [
        "Technical implementation plan",
        "Custom workflow designs", 
        "Integration specifications",
        "User training curriculum"
      ]
    },
    {
      phase: "Week 5-8",
      title: "Platform Configuration",
      description: "CloudRoute handles all technical implementation while CWT manages strategy",
      deliverables: [
        "Salesforce customizations",
        "Third-party integrations",
        "Automated workflow deployment",
        "Data migration and validation"
      ]
    },
    {
      phase: "Week 9-12",
      title: "Testing & Optimization",
      description: "Comprehensive validation with iterative improvements based on real usage",
      deliverables: [
        "User acceptance testing",
        "Performance optimization",
        "Process refinement",
        "Go-live preparation"
      ]
    }
  ];

  const partnershipModel = [
    {
      icon: Target,
      title: "CWT Studio",
      role: "Strategy & Optimization",
      responsibilities: [
        "Revenue operations expertise",
        "Business process design",
        "Performance analysis",
        "Ongoing optimization"
      ]
    },
    {
      icon: Settings,
      title: "CloudRoute",
      role: "Technical Implementation", 
      responsibilities: [
        "Salesforce development",
        "System integrations",
        "Technical architecture",
        "Platform maintenance"
      ]
    }
  ];

  const advantages = [
    {
      icon: Users,
      title: "Specialized Expertise",
      description: "Revenue operations focus vs. general Salesforce consulting"
    },
    {
      icon: Shield,
      title: "Enterprise Reliability",
      description: "CloudRoute partnership ensures 99.9% uptime and support"
    },
    {
      icon: Clock,
      title: "Faster Implementation", 
      description: "Pre-built frameworks reduce deployment time by 60%"
    },
    {
      icon: Zap,
      title: "Proven Results",
      description: "Average 40% improvement in lead-to-revenue conversion"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Salesforce Delivery Model | CWT Studio & Creator Wealth Tools"
        description="See how CWT Studio partners with CloudRoute to deliver end-to-end Salesforce automation, web, and mobile modernization for fast-moving operators."
        keywords={[
          'Salesforce delivery model',
          'business automation implementation',
          'Creator Wealth Tools methodology',
          'CloudRoute partnership',
          'Salesforce automation project plan'
        ]}
        canonicalUrl="/salesforce/delivery"
      />
      <Breadcrumbs />
      <main className="container mx-auto px-4 section-spacing">
        {/* Hero Section */}
        <section className="section-spacing-half text-center">
          <div className="system-status border-accent mb-6">
            <span className="text-accent">DELIVERY MODEL</span>
          </div>
          <h1 className="font-mono text-4xl md:text-5xl font-bold mb-6">
            How We Deliver Results
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Enterprise-grade Salesforce transformations through our strategic partnership 
            with CloudRoute. Combining revenue expertise with technical excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="teal" asChild>
              <Link to="/assessment">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Discuss Your Project</Link>
            </Button>
          </div>
        </section>

        {/* Partnership Model */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-mono text-3xl font-bold mb-4">Partnership Model</h2>
            <p className="text-xl text-muted-foreground">
              Strategic collaboration that delivers both business value and technical excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {partnershipModel.map((partner, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="text-center">
                  <partner.icon className="h-12 w-12 mx-auto mb-4 text-accent" />
                  <CardTitle className="text-2xl">{partner.title}</CardTitle>
                  <p className="text-lg text-muted-foreground font-medium">{partner.role}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {partner.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Delivery Timeline */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-mono text-3xl font-bold mb-4">12-Week Implementation Timeline</h2>
            <p className="text-xl text-muted-foreground">
              Structured approach from audit to optimization
            </p>
          </div>
          
          <div className="space-y-8">
            {deliveryPhases.map((phase, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-16 h-16 bg-accent text-white rounded-lg flex items-center justify-center font-bold text-sm shadow-lg shadow-accent/20">
                      {phase.phase}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{phase.title}</CardTitle>
                      <p className="text-muted-foreground">{phase.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {phase.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Competitive Advantages */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-mono text-3xl font-bold mb-4">Why This Model Works</h2>
            <p className="text-xl text-muted-foreground">
              Advantages over traditional Salesforce consulting approaches
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <advantage.icon className="h-8 w-8 mx-auto mb-4 text-accent" />
                  <CardTitle className="text-lg">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="font-mono text-3xl font-bold mb-4">Quality Assurance</h2>
              <p className="text-xl text-muted-foreground">
                Enterprise standards for every implementation
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
                <div className="font-medium mb-2">System Uptime</div>
                <p className="text-sm text-muted-foreground">CloudRoute SLA guarantee</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="font-medium mb-2">Support Coverage</div>
                <p className="text-sm text-muted-foreground">Enterprise support included</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">30-Day</div>
                <div className="font-medium mb-2">Optimization Period</div>
                <p className="text-sm text-muted-foreground">Fine-tuning after go-live</p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default SalesforceDelivery;
