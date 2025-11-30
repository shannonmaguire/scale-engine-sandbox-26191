import { Link } from "react-router-dom";
import { StandardCard } from "@/components/ui/standard-card";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AlertCircle, BookOpen, Handshake, ArrowRight } from "lucide-react";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";

const StartHere = () => {
  const paths = [
    {
      id: "breaking",
      title: "I'm Breaking",
      subtitle: "Systems failing, team frustrated, forecast inaccurate",
      description: "You need immediate diagnosis and a fix plan. Revenue infrastructure is actively hurting your business—forecast misses, manual workarounds, integration breaks.",
      icon: AlertCircle,
      ctaText: "Start Assessment",
      ctaLink: "/assessment",
      accentColor: "border-red-500/30 bg-red-500/5",
      iconColor: "text-red-500",
    },
    {
      id: "planning",
      title: "I'm Planning",
      subtitle: "Researching options, building internal case, need proof",
      description: "You're evaluating solutions and need frameworks to make decisions. Download tools, read case studies, understand what good infrastructure looks like.",
      icon: BookOpen,
      ctaText: "Browse Resources",
      ctaLink: "/resources",
      accentColor: "border-blue-500/30 bg-blue-500/5",
      iconColor: "text-blue-500",
    },
    {
      id: "selling",
      title: "I'm Selling Salesforce",
      subtitle: "AE or partner working Salesforce services deals",
      description: "You need technical scoping support, delivery capacity, or deal qualification tools. Access the AE Hub for discovery questions, objection frameworks, and partnership options.",
      icon: Handshake,
      ctaText: "Visit AE Hub",
      ctaLink: "/salesforce-partners",
      accentColor: "border-primary/30 bg-primary/5",
      iconColor: "text-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Start Here | CWT Studio Revenue Operations"
        description="Find your path: Breaking systems need Assessment, Planning teams need Resources, Salesforce sellers need Partner Hub. Choose your journey based on your current state."
        keywords={[
          'revenue operations assessment',
          'Salesforce resources',
          'RevOps planning tools',
          'Salesforce partner program'
        ]}
      />

      <Breadcrumbs />

      {/* Header */}
      <section className="section-spacing-half px-6 border-b-2 border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="system-status">
              Navigation Hub
            </div>
          </div>
          <h1 className="heading-page text-primary mb-6">
            Start Here
          </h1>
          <p className="text-description text-muted-foreground max-w-2xl mx-auto">
            Choose your path based on where you are right now. Not where you think you should be.
          </p>
        </div>
      </section>

      {/* Path Cards */}
      <section className="section-spacing px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {paths.map((path) => {
              const Icon = path.icon;
              return (
                <Link 
                  key={path.id} 
                  to={path.ctaLink}
                  className="group block h-full transition-transform hover:scale-[1.02]"
                >
                  <StandardCard 
                    className={`h-full flex flex-col border-2 ${path.accentColor} hover:shadow-lg transition-all`}
                  >
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`w-16 h-16 rounded-lg bg-background border-2 ${path.accentColor} flex items-center justify-center`}>
                        <Icon className={`w-8 h-8 ${path.iconColor}`} />
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="mb-4">
                      <h2 className="heading-subsection text-foreground mb-2">
                        {path.title}
                      </h2>
                      <p className="text-sm font-mono text-muted-foreground">
                        {path.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-6 flex-1">
                      {path.description}
                    </p>

                    {/* CTA */}
                    <div className={`flex items-center justify-between px-4 py-3 rounded-lg border ${path.accentColor} group-hover:bg-background/50 transition-colors`}>
                      <span className={`font-mono font-bold ${path.iconColor}`}>
                        {path.ctaText}
                      </span>
                      <ArrowRight className={`w-5 h-5 ${path.iconColor} group-hover:translate-x-1 transition-transform`} />
                    </div>
                  </StandardCard>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="section-spacing-half px-6 bg-muted/30 border-y-2 border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-section text-foreground mb-6 text-center">
            Why We Route by State
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-mono font-bold text-foreground mb-3">
                Wrong path = wasted time
              </h3>
              <p className="text-sm text-muted-foreground">
                Companies waste 3-6 months trying the wrong service first. Planning teams jump to implementation before diagnosis. Breaking teams research instead of fixing.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-mono font-bold text-foreground mb-3">
                Right path = faster results
              </h3>
              <p className="text-sm text-muted-foreground">
                Match your current state to the right engagement type. Breaking → Assessment. Planning → Resources. Selling → Partner Hub. Simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Still Not Sure */}
      <section className="section-spacing px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section text-foreground mb-4">
            Still Not Sure Which Path?
          </h2>
          <p className="text-description text-muted-foreground mb-8">
            If multiple paths apply, start with Assessment. We'll diagnose your current state and recommend the right next steps.
          </p>
          <ConversionOptimizedButton
            to="/assessment"
            ctaName="Start Assessment from Start Here"
            location="Start Here Page Default CTA"
            size="lg"
          >
            Start Assessment
          </ConversionOptimizedButton>
          <p className="text-xs text-center text-muted-foreground mt-3 font-mono">
            2-week turnaround • 100% fee credits to Sprint
          </p>
        </div>
      </section>
    </div>
  );
};

export default StartHere;
