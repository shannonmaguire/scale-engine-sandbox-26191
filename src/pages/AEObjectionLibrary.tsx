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
  const {
    toast
  } = useToast();
  const filteredObjections = objections.filter(obj => {
    const matchesSearch = searchQuery === "" || obj.objection.toLowerCase().includes(searchQuery.toLowerCase()) || obj.responseScript.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || obj.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${type} copied to clipboard`
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
  const categories: Array<{
    value: Objection['category'] | 'all';
    label: string;
  }> = [{
    value: 'all',
    label: 'All Objections'
  }, {
    value: 'budget',
    label: categoryLabels.budget
  }, {
    value: 'internal',
    label: categoryLabels.internal
  }, {
    value: 'timing',
    label: categoryLabels.timing
  }, {
    value: 'technical',
    label: categoryLabels.technical
  }, {
    value: 'trust',
    label: categoryLabels.trust
  }];
  return <>
      <SEOHead title="Complete Objection Response Library | AE Hub" description="Battle-tested objection responses for Salesforce technical sales. 15+ scenarios with discovery questions, proof points, and next steps for closing complex deals." keywords="sales objections, technical sales, salesforce objections, objection handling, sales responses" />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            

            <div className="space-y-6">
              <div className="system-status">OBJECTION LIBRARY</div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Objection Response Library
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Tested responses from 500+ technical sales calls with discovery questions, proof points, and closing frameworks.
              </p>

              {/* Search and Filter */}
              <div className="pt-6 space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input placeholder="Search objections..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10 h-12" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => <Button key={cat.value} variant={selectedCategory === cat.value ? "default" : "outline"} onClick={() => setSelectedCategory(cat.value)} size="sm" className={selectedCategory === cat.value ? "bg-accent-data hover:bg-accent-data/90" : "border-accent-data/30 text-accent-data hover:bg-accent-data/10"}>
                      {cat.label}
                    </Button>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Objections Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-4">
              {filteredObjections.length === 0 ? <Card className="p-12 text-center border-accent-data/30">
                  <p className="text-muted-foreground">No objections found matching your search.</p>
                </Card> : filteredObjections.map(objection => <Card key={objection.id} className="border-l-4 border-l-accent-data hover:border-accent-data/50 transition-colors">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="secondary" className="bg-accent-data/10 text-accent-data border-accent-data/20">
                              {categoryLabels[objection.category]}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl">{objection.objection}</CardTitle>
                        </div>
                        <Button variant="outline" size="sm" onClick={() => copyFullFramework(objection)} className="border-accent-data/30 text-accent-data hover:bg-accent-data/10">
                          <Copy className="w-4 h-4 mr-2" />
                          Copy
                        </Button>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Quick Response */}
                      <div className="bg-accent-data/5 rounded-lg p-6 border border-accent-data/20">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-sm uppercase tracking-wide text-accent-data">
                            Response Script
                          </h4>
                          <Button variant="ghost" size="sm" onClick={() => copyToClipboard(objection.responseScript, "Response script")} className="hover:bg-accent-data/10">
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                        <p className="text-base leading-relaxed">{objection.responseScript}</p>
                      </div>

                      {/* Full Framework (Collapsible) */}
                      <Collapsible>
                        <CollapsibleTrigger asChild>
                          <Button variant="outline" className="w-full justify-between border-accent-data/30 text-accent-data hover:bg-accent-data/10">
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
                            <ul className="space-y-2 pl-0">
                              {objection.fullFramework.discovery.map((question, idx) => <li key={idx} className="flex items-start gap-3 text-sm">
                                  <span className="text-accent-data font-semibold flex-shrink-0">{idx + 1}.</span>
                                  <span className="flex-1">{question}</span>
                                </li>)}
                            </ul>
                          </div>

                          {/* Proof Points */}
                          <div>
                            <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                              Proof Points
                            </h4>
                            <ul className="space-y-2 pl-0">
                              {objection.fullFramework.proofPoints.map((point, idx) => <li key={idx} className="flex items-start gap-3 text-sm">
                                  <span className="text-accent-data flex-shrink-0">•</span>
                                  <span className="flex-1">{point}</span>
                                </li>)}
                            </ul>
                          </div>

                          {/* Competitive Positioning (if exists) */}
                          {objection.fullFramework.competitivePositioning && (
                            <div>
                              <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                                Competitive Positioning
                              </h4>
                              <p className="text-sm bg-accent-process/5 p-4 rounded-lg border border-accent-process/20">
                                {objection.fullFramework.competitivePositioning}
                              </p>
                            </div>
                          )}

                          {/* Next Steps */}
                          <div>
                            <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                              Next Steps
                            </h4>
                            <p className="text-sm bg-muted/50 rounded-lg p-4">
                              {objection.fullFramework.nextSteps}
                            </p>
                          </div>

                          {/* Persona Angles */}
                          {objection.fullFramework.personaAngles && <div>
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
                            </div>}
                        </CollapsibleContent>
                      </Collapsible>
                    </CardContent>
                  </Card>)}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto border-accent-data/30">
              <CardHeader className="text-center pb-4">
                <MessageSquare className="w-10 h-10 mx-auto mb-4 text-accent-data" />
                <CardTitle className="text-2xl mb-2">Need Deal-Specific Support?</CardTitle>
                <CardDescription className="text-base">
                  Submit a support request for live assistance with complex objections or technical validation.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" className="bg-accent-data hover:bg-accent-data/90">
                  <Link to="/ae-support">
                    Request Support
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-accent-data text-accent-data hover:bg-accent-data/10">
                  <Link to="/ae-hub">
                    Back to AE Hub
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>;
};
export default AEObjectionLibrary;