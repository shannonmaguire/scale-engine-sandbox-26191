import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, AlertCircle, XCircle, Printer, ArrowLeft, Download } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";

interface CategoryData {
  id: string;
  title: string;
  items: Array<{ id: string; label: string }>;
}

interface ResultsData {
  checklistId: string;
  title: string;
  categories: CategoryData[];
  checklistState: Record<string, Record<string, "yes" | "partial" | "no" | null>>;
  overallProgress: number;
  answerCounts: { yes: number; partial: number; no: number; unanswered: number };
}

const AssessmentResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const resultsData = location.state as ResultsData;

  // Redirect if no data
  if (!resultsData) {
    return <Navigate to="/self-assessment" replace />;
  }

  const { checklistId, title, categories, checklistState, overallProgress, answerCounts } = resultsData;

  useEffect(() => {
    // Track page view
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'Assessment Results',
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const getScoreInsight = (score: number) => {
    if (score >= 75) return { text: "Strong Foundation", color: "text-green-600", bg: "bg-green-50" };
    if (score >= 50) return { text: "Developing Maturity", color: "text-orange-600", bg: "bg-orange-50" };
    return { text: "Growth Opportunity", color: "text-red-600", bg: "bg-red-50" };
  };

  const insight = getScoreInsight(overallProgress);
  const totalItems = categories.reduce((sum, cat) => sum + cat.items.length, 0);

  return (
    <>
      <SEOHead
        title={`Assessment Results - ${title}`}
        description="Your technical maturity assessment results and recommendations"
      />

      <div className="min-h-screen bg-background">
        {/* Print Header - Only visible when printing */}
        <div className="print-only hidden print:block p-8 border-b">
          <div className="text-sm text-muted-foreground">CWT STUDIO</div>
          <h1 className="text-2xl font-bold mt-2">{title}</h1>
          <div className="text-sm text-muted-foreground mt-1">Technical Maturity Assessment Report</div>
          <div className="text-xs text-muted-foreground mt-4">
            Generated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>

        {/* Screen Header with Actions */}
        <div className="print:hidden border-b bg-card">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate(-1)}
                  className="mb-2"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Assessment
                </Button>
                <h1 className="text-3xl font-bold">{title}</h1>
                <p className="text-muted-foreground mt-1">Assessment Results</p>
              </div>
              <Button onClick={handlePrint} size="lg">
                <Printer className="h-4 w-4 mr-2" />
                Print / Save as PDF
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8 max-w-5xl">
          {/* Overall Score Section */}
          <Card className="p-8 mb-8">
            <div className="text-center">
              <div className="text-sm font-medium text-muted-foreground mb-2">OVERALL MATURITY SCORE</div>
              <div className="text-6xl font-bold mb-4">{overallProgress}%</div>
              <Badge className={`${insight.bg} ${insight.color} border-0 mb-4`}>
                {insight.text}
              </Badge>
              <div className="text-sm text-muted-foreground">
                {answerCounts.yes} Yes, {answerCounts.partial} Partial, {answerCounts.no} No ({totalItems} total criteria)
              </div>
              <Progress value={overallProgress} className="mt-6 h-2" />
            </div>
          </Card>

          {/* Executive Summary */}
          <section className="mb-8 print:break-after-page">
            <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
            <Card className="p-6">
              <p className="text-foreground/80 leading-relaxed mb-4">
                This assessment evaluates your organization's technical maturity across critical business systems. 
                The analysis identifies opportunities to enhance operational efficiency, system scalability, and 
                revenue generation through systematic infrastructure improvements.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                The framework examines key dimensions including data infrastructure, process automation, system 
                integration, and operational governance. Each criterion represents validated best practices from 
                successful deployments.
              </p>
              
              <div className="mt-6 pt-6 border-t">
                <h3 className="font-semibold mb-3">Key Findings</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {answerCounts.yes} capabilities fully operational, {answerCounts.partial} partially implemented
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {answerCounts.no} high-priority improvement opportunities identified
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {categories.length} capability dimensions assessed
                  </li>
                </ul>
              </div>
            </Card>
          </section>

          {/* Category Performance */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Category Performance</h2>
            <div className="space-y-3">
              {categories.map((category) => {
                const catItems = category.items.length;
                const catAnswers = category.items.map(item => checklistState[checklistId]?.[item.id]);
                const catScore = catAnswers.reduce((sum, answer) => {
                  if (answer === "yes") return sum + 100;
                  if (answer === "partial") return sum + 50;
                  return sum;
                }, 0);
                const catProgress = catItems > 0 ? Math.round(catScore / (catItems * 100) * 100) : 0;
                const catYes = catAnswers.filter(a => a === "yes").length;

                return (
                  <Card key={category.id} className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold">{category.title}</h3>
                        <div className="text-sm text-muted-foreground mt-1">
                          {catYes} of {catItems} criteria fully met
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <div className={`text-2xl font-bold ${
                          catProgress >= 75 ? 'text-green-600' : 
                          catProgress >= 50 ? 'text-orange-600' : 
                          'text-red-600'
                        }`}>
                          {catProgress}%
                        </div>
                      </div>
                    </div>
                    <Progress value={catProgress} className="mt-3 h-1.5" />
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Detailed Criteria */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Assessment Criteria</h2>
            <div className="space-y-6">
              {categories.map((category, catIndex) => (
                <Card key={category.id} className="p-6 print:break-inside-avoid">
                  <h3 className="font-bold text-lg mb-4">{catIndex + 1}. {category.title}</h3>
                  <div className="space-y-3">
                    {category.items.map((item) => {
                      const answer = checklistState[checklistId]?.[item.id];
                      
                      return (
                        <div key={item.id} className="flex items-start gap-3 text-sm">
                          {answer === "yes" && (
                            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          )}
                          {answer === "partial" && (
                            <AlertCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                          )}
                          {answer === "no" && (
                            <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                          )}
                          {!answer && (
                            <div className="h-5 w-5 border-2 border-muted rounded-full flex-shrink-0 mt-0.5" />
                          )}
                          <span className={answer === "no" || answer === "partial" ? "text-foreground" : "text-muted-foreground"}>
                            {item.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Recommendations */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Prioritize High-Impact Items",
                  text: "Focus on unchecked criteria that directly impact revenue and customer experience."
                },
                {
                  title: "Develop Implementation Roadmap",
                  text: "Create a phased approach addressing technical gaps based on business value and complexity."
                },
                {
                  title: "Establish Governance Standards",
                  text: "Implement formal change management and documentation to prevent future technical debt."
                },
                {
                  title: "Invest in Team Enablement",
                  text: "Ensure your team has the training and resources to maintain system improvements long-term."
                }
              ].map((rec, index) => (
                <Card key={index} className="p-6 print:break-inside-avoid">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{rec.title}</h3>
                      <p className="text-sm text-muted-foreground">{rec.text}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Footer Info */}
          <div className="text-center text-sm text-muted-foreground py-8 border-t print:mt-8">
            <p>Report generated on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p className="mt-1">CWT Studio Technical Maturity Assessment</p>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .print\\:break-after-page {
            page-break-after: always;
          }
          .print\\:break-inside-avoid {
            page-break-inside: avoid;
          }
        }
      `}</style>
    </>
  );
};

export default AssessmentResults;
