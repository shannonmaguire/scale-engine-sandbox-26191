import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, FileText, Calculator, CheckSquare, BookOpen, Target, Users, Clock, Zap } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const AssessmentTools = () => {
  const tools = [
    {
      icon: FileText,
      title: "Technical Debt Assessment Framework",
      description: "Comprehensive methodology for evaluating Salesforce technical debt and prioritizing fixes",
      type: "Methodology",
      format: "PDF Guide",
      pages: "12 pages",
      items: ["Assessment checklist", "Scoring methodology", "Prioritization matrix", "Risk assessment framework"]
    },
    {
      icon: Calculator,
      title: "ROI Calculator for Salesforce Cleanup",
      description: "Interactive spreadsheet to quantify time and cost savings from technical debt remediation",
      type: "Tool",
      format: "Excel Spreadsheet",
      pages: "Interactive",
      items: ["Time savings calculator", "Cost benefit analysis", "Implementation timeline", "Resource requirements"]
    },
    {
      icon: CheckSquare,
      title: "Discovery Questions for Technical Debt",
      description: "Structured question sets to identify technical requirements and complexity factors",
      type: "Checklist",
      format: "PDF Checklist",
      pages: "6 pages",
      items: ["Current state questions", "Pain point identification", "Integration assessment", "User experience review"]
    },
    {
      icon: Target,
      title: "Implementation Readiness Guide",
      description: "Technical prerequisites and preparation checklist for successful Salesforce projects",
      type: "Reference",
      format: "PDF Guide",
      pages: "8 pages",
      items: ["Pre-project checklist", "Stakeholder alignment", "Resource preparation", "Risk mitigation"]
    },
    {
      icon: BookOpen,
      title: "Common Objection Response Guide",
      description: "Proven responses to technical objections from IT teams and stakeholders",
      type: "Playbook",
      format: "PDF Playbook",
      pages: "15 pages",
      items: ["IT objection responses", "Budget justification", "Timeline concerns", "Resource allocation"]
    },
    {
      icon: Users,
      title: "Stakeholder Mapping Template",
      description: "Framework for identifying and engaging key technical and business stakeholders",
      type: "Template",
      format: "PowerPoint Template",
      pages: "5 slides",
      items: ["Stakeholder identification", "Influence mapping", "Communication strategy", "Engagement planning"]
    }
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case "Methodology": return "text-accent";
      case "Tool": return "text-secondary";
      case "Checklist": return "text-primary";
      case "Reference": return "text-accent";
      case "Playbook": return "text-primary";
      case "Template": return "text-secondary";
      default: return "text-muted-foreground";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Methodology": return "bg-accent/20 text-accent border-accent/30";
      case "Tool": return "bg-secondary/20 text-secondary border-secondary/30";
      case "Checklist": return "bg-primary/20 text-primary border-primary/30";
      case "Reference": return "bg-accent/20 text-accent border-accent/30";
      case "Playbook": return "bg-primary/20 text-primary border-primary/30";
      case "Template": return "bg-secondary/20 text-secondary border-secondary/30";
      default: return "bg-muted/20 text-muted-foreground border-border";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Salesforce Assessment Tools | CWT Studio Business Automation Resources"
        description="Download Creator Wealth Tools assessments, ROI calculators, and objection guides to qualify business automation and Salesforce opportunities faster."
        keywords={[
          'Salesforce assessment tools',
          'business automation toolkit',
          'Creator Wealth Tools downloads',
          'ROI calculator for Salesforce cleanup',
          'technical debt discovery checklist'
        ]}
        canonicalUrl="/assessment-tools"
      />
      {/* Header */}
      <section className="section-spacing-half bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link to="/salesforce/partners" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Deal Playbook
              </Link>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">Assessment Tools & Resources</h1>
              <p className="text-lg text-muted-foreground">
                Professional tools to assess Salesforce technical debt, qualify prospects, and support your sales process.
              </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-background rounded-lg p-4 border">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{tools.length} Tools</span>
                </div>
              </div>
              <div className="bg-background rounded-lg p-4 border">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">5-15 min each</span>
                </div>
              </div>
              <div className="bg-background rounded-lg p-4 border">
                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Ready to use</span>
                </div>
              </div>
              <div className="bg-background rounded-lg p-4 border">
                <div className="flex items-center space-x-2">
                  <Download className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Instant download</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="section-spacing-half">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {tools.map((tool, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <tool.icon className={`w-6 h-6 ${getIconColor(tool.type)}`} />
                        <div>
                          <CardTitle className="text-lg">{tool.title}</CardTitle>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline" className={getTypeColor(tool.type)}>
                              {tool.type}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{tool.format}</span>
                            <span className="text-xs text-muted-foreground">•</span>
                            <span className="text-xs text-muted-foreground">{tool.pages}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Includes:</h4>
                      <ul className="space-y-1">
                        {tool.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center text-xs text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2 flex-shrink-0"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button size="sm" className="w-full">
                      <Download className="w-3 h-3 mr-2" />
                      Download {tool.type}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* How to Use Section */}
            <div className="mt-16">
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle>How to Use These Tools</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center">
                        <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center mr-2">1</span>
                        During Discovery
                      </h4>
                      <p className="text-sm text-foreground">
                        Use the assessment framework and discovery questions to identify technical debt and qualify prospects.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center">
                        <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center mr-2">2</span>
                        Building Business Case
                      </h4>
                      <p className="text-sm text-foreground">
                        Leverage the ROI calculator and objection responses to justify investment and address concerns.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center">
                        <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center mr-2">3</span>
                        Implementation Planning
                      </h4>
                      <p className="text-sm text-foreground">
                        Use readiness guides and stakeholder mapping to ensure smooth project kickoff.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-4">Need additional support?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link to="/ae-support">
                    Request Technical Support
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AssessmentTools;
