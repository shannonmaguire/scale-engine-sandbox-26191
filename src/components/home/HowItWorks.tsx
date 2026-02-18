export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Diagnose",
      description: "2-week audit. We map every system, integration, and handoff. You get a complete picture of where revenue leaks.",
    },
    {
      number: "02",
      title: "Architect",
      description: "Prioritized fix sequence. What to change, what to keep, what to remove. Scoped for your team and timeline.",
    },
    {
      number: "03",
      title: "Build",
      description: "Implementation with clean handoffs. Every change documented. Your team runs it without us.",
    },
  ];

  return (
    <div className="max-w-5xl">
      <h2 className="heading-section mb-10">How It Works</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.number} className="border border-border bg-card p-6">
            <div className="font-mono text-xs text-primary mb-4">
              {step.number}
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              {step.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
