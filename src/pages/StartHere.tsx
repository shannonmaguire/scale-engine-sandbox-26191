import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArrowRight, AlertTriangle, Map, Handshake } from "lucide-react";

const StartHere = () => {
  const pathways = [
    {
      icon: AlertTriangle,
      title: "Something's Broken",
      description: "Your CRM is a mess. Leads are falling through. You need a diagnosis before anything else.",
      cta: "Take the Health Check",
      link: "/self-assessment",
      color: "text-destructive"
    },
    {
      icon: Map,
      title: "Planning a Project",
      description: "You know you need help, but you're not sure what kind. Browse our frameworks and figure out your path.",
      cta: "Browse Resources",
      link: "/resources",
      color: "text-accent"
    },
    {
      icon: Handshake,
      title: "Ready to Talk",
      description: "You've done your homework. You know what's wrong. Let's discuss how we can help.",
      cta: "Start a Conversation",
      link: "/contact",
      color: "text-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Start Here | CWT Studio"
        description="Not sure where to begin? Find your path: diagnose what's broken, plan your project, or start a conversation."
        keywords={['get started', 'revenue operations help', 'CRM diagnosis', 'sales system fix']}
        canonicalUrl="/start-here"
      />

      <Breadcrumbs />

      {/* Hero */}
      <Section className="border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-primary/30 mb-8 font-mono text-xs uppercase tracking-widest">
            <span className="text-primary font-semibold">Pathway Selector</span>
          </div>

          <h1 className="heading-page mb-6">
            Where Should You Start?
          </h1>

          <p className="text-description text-muted-foreground max-w-2xl mx-auto">
            Everyone arrives here for a different reason. Pick the path that fits where you are right now.
          </p>
        </div>
      </Section>

      {/* Pathways */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {pathways.map((pathway, index) => (
              <Link
                key={index}
                to={pathway.link}
                className="group block border border-border bg-card p-8 hover:border-primary/50 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  <div className={`w-14 h-14 flex items-center justify-center border border-current/20 flex-shrink-0 ${pathway.color}`}>
                    <pathway.icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="heading-subsection mb-2 group-hover:text-primary transition-colors">
                      {pathway.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {pathway.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-primary font-mono text-sm font-semibold">
                    {pathway.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Quick Links */}
      <Section variant="muted" className="border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-subsection mb-6">Or jump directly to...</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/how-we-work">How We Work</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link to="/proof">Case Studies</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link to="/about">About Us</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link to="/blog">Blog</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default StartHere;
