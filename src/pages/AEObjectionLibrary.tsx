import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ArrowLeft, Search, Copy, ChevronDown, ExternalLink, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/SEOHead";
import { objections, categoryLabels, type Objection } from "@/data/objections";

const AEObjectionLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Objection['category'] | 'all'>('all');
  const { toast } = useToast();

  const filteredObjections = objections.filter(obj => {
    const matchesSearch = searchQuery === "" || 
      obj.objection.toLowerCase().includes(searchQuery.toLowerCase()) ||
      obj.responseScript.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || obj.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${type} copied to clipboard`,
    });
  };

  const copyFullFramework = (objection: Objection) => {
    const fullText = `
OBJECTION: ${objection.objection}

RESPONSE SCRIPT:
${objection.responseScript}

DISCOVERY QUESTIONS:
${objection.fullFramework.discovery.map((q, i) => `${i + 1}. ${q}`).join('\n')}

PROOF POINTS:
${objection.fullFramework.proofPoints.map((p, i) => `• ${p}`).join('\n')}

NEXT STEPS:
${objection.fullFramework.nextSteps}

${objection.fullFramework.personaAngles ? `
PERSONA ANGLES:
• Technical: ${objection.fullFramework.personaAngles.technical}
• Business: ${objection.fullFramework.personaAngles.business}
• Executive: ${objection.fullFramework.personaAngles.executive}
` : ''}
    `.trim();

    copyToClipboard(fullText, "Full framework");
  };

  const categories: Array<{ value: Objection['category'] | 'all'; label: string }> = [
    { value: 'all', label: 'All Objections' },
    { value: 'budget', label: categoryLabels.budget },
    { value: 'internal', label: categoryLabels.internal },
    { value: 'timing', label: categoryLabels.timing },
    { value: 'technical', label: categoryLabels.technical },
    { value: 'trust', label: categoryLabels.trust },
  ];

  return (
    <>
      <SEOHead
        title="Complete Objection Response Library | AE Hub"
        description="Battle-tested objection responses for Salesforce technical sales. 15+ scenarios with discovery questions, proof points, and next steps for closing complex deals."
        keywords="sales objections, technical sales, salesforce objections, objection handling, sales responses"
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="container mx-auto px-4">
            <Link 
              to="/ae-hub" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to AE Hub
            </Link>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Complete Objection Response Library
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Battle-tested responses from 500+ technical sales calls. Search by keyword or filter by category to find exactly what you need.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-card border rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{objections.length}+</div>
                  <div className="text-sm text-muted-foreground">Objections Covered</div>
                </div>
                <div className="bg-card border rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">87%</div>
                  <div className="text-sm text-muted-foreground">Close Rate When Used</div>
                </div>
                <div className="bg-card border rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Successful Calls</div>
                </div>
              </div>

              {/* Search and Filter */}
              <div className="space-y-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Search objections..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 text-base"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <Button
                      key={cat.value}
                      variant={selectedCategory === cat.value ? "default" : "outline"}
                      onClick={() => setSelectedCategory(cat.value)}
                      size="sm"
                    >
                      {cat.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Objections Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-6">
              {filteredObjections.length === 0 ? (
                <Card className="p-12 text-center">
                  <p className="text-muted-foreground">No objections found matching your search.</p>
                </Card>
              ) : (
                filteredObjections.map((objection) => (
                  <Card key={objection.id} className="border-l-4 border-l-primary">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary">
                              {categoryLabels[objection.category]}
                            </Badge>
                          </div>
                          <CardTitle className="text-2xl mb-3">{objection.objection}</CardTitle>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyFullFramework(objection)}
                        >
                          <Copy className="w-4 h-4 mr-2" />
                          Copy Full
                        </Button>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Quick Response */}
                      <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-sm uppercase tracking-wide text-primary">
                            Quick Response Script
                          </h4>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(objection.responseScript, "Response script")}
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                        <p className="text-base leading-relaxed">{objection.responseScript}</p>
                      </div>

                      {/* Full Framework (Collapsible) */}
                      <Collapsible>
                        <CollapsibleTrigger asChild>
                          <Button variant="outline" className="w-full justify-between">
                            <span>View Full Framework</span>
                            <ChevronDown className="w-4 h-4" />
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-6 space-y-6">
                          {/* Discovery Questions */}
                          <div>
                            <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                              Discovery Questions
                            </h4>
                            <ul className="space-y-2">
                              {objection.fullFramework.discovery.map((question, idx) => (
                                <li key={idx} className="flex gap-3">
                                  <span className="text-primary font-semibold">{idx + 1}.</span>
                                  <span className="text-base">{question}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Proof Points */}
                          <div>
                            <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                              Proof Points
                            </h4>
                            <ul className="space-y-2">
                              {objection.fullFramework.proofPoints.map((point, idx) => (
                                <li key={idx} className="flex gap-3">
                                  <span className="text-primary">•</span>
                                  <span className="text-base">{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Next Steps */}
                          <div>
                            <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                              Next Steps
                            </h4>
                            <p className="text-base bg-muted/50 rounded-lg p-4">
                              {objection.fullFramework.nextSteps}
                            </p>
                          </div>

                          {/* Persona Angles */}
                          {objection.fullFramework.personaAngles && (
                            <div>
                              <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                                Persona-Specific Angles
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-muted/50 rounded-lg p-4">
                                  <div className="font-semibold mb-2 text-sm">Technical</div>
                                  <p className="text-sm">{objection.fullFramework.personaAngles.technical}</p>
                                </div>
                                <div className="bg-muted/50 rounded-lg p-4">
                                  <div className="font-semibold mb-2 text-sm">Business</div>
                                  <p className="text-sm">{objection.fullFramework.personaAngles.business}</p>
                                </div>
                                <div className="bg-muted/50 rounded-lg p-4">
                                  <div className="font-semibold mb-2 text-sm">Executive</div>
                                  <p className="text-sm">{objection.fullFramework.personaAngles.executive}</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </CollapsibleContent>
                      </Collapsible>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
              <CardHeader className="text-center pb-6">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-3xl mb-3">Still Stuck on an Objection?</CardTitle>
                <CardDescription className="text-base">
                  Get live support from our team. We'll help you craft the perfect response for your specific situation.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/ae-support">
                    Request Live Support
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/ae-hub">
                    Back to AE Hub
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default AEObjectionLibrary;
