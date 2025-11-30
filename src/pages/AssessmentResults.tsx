import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, AlertCircle, XCircle, Printer, ArrowLeft, Calendar, Phone } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { InlineEmailCapture } from "@/components/InlineEmailCapture";
import { trackEvent } from "@/hooks/usePageTracking";
import { toast } from "sonner";

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
  const resultsData = location.state as ResultsData | undefined;
  const [saved, setSaved] = useState(false);
  const [email, setEmail] = useState<string | undefined>();

  // Check if backend is available
  const hasBackend = Boolean(
    import.meta.env.VITE_SUPABASE_URL && 
    import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
  );

  useEffect(() => {
    if (!resultsData) return;

    // Track page view
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'Assessment Results',
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }

    trackEvent("results_page_viewed", { checklistId: resultsData.checklistId, score: resultsData.overallProgress });
  }, [resultsData]);

  // Redirect if no data
  if (!resultsData) {
    return <Navigate to="/self-assessment" replace />;
  }

  const { checklistId, title, categories, checklistState, overallProgress, answerCounts } = resultsData;

  const handleEmailSubmit = async (submittedEmail: string) => {
    if (!hasBackend) {
      console.info("Backend not configured; skipping email save");
      toast.error("Unable to save results at this time. You can still view and print them.");
      return;
    }

    try {
      const { supabase } = await import("@/integrations/supabase/client");
      const { error } = await supabase.from('assessments').insert({
        email: submittedEmail,
        checklist_id: checklistId,
        checklist_title: title,
        overall_score: overallProgress,
        answer_counts: answerCounts,
        checklist_state: checklistState,
        user_agent: navigator.userAgent,
        referrer: document.referrer
      });

      if (error) throw error;
      
      setEmail(submittedEmail);
      setSaved(true);
      toast.success("Report will be emailed to you.");
      trackEvent("email_captured_inline", { checklistId, score: overallProgress });
    } catch (error) {
      console.warn("Email save failed:", error);
      toast.error("We couldn't email your report right now. You can still view and print your results.");
    }
  };

  const handleBookingClick = () => {
    trackEvent("booking_cta_clicked", { checklistId, score: overallProgress, location: "results_page" });
    navigate('/contact', { 
      state: { 
        service: "Assessment",
        message: `I just completed the technical maturity assessment and scored ${overallProgress}/36. I'd like to discuss next steps.`
      }
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const getScoreInsight = (score: number) => {
    if (score >= 31) return { text: "Optimized", color: "text-green-600", bg: "bg-green-50" };
    if (score >= 21) return { text: "Structured", color: "text-blue-600", bg: "bg-blue-50" };
    if (score >= 11) return { text: "Emerging", color: "text-orange-600", bg: "bg-orange-50" };
    return { text: "Foundational", color: "text-red-600", bg: "bg-red-50" };
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
          {/* Email Capture CTA #1 */}
          {hasBackend && !email && (
            <div className="mb-8 print:hidden">
              <InlineEmailCapture
                onEmailSubmit={handleEmailSubmit}
                title="Want this report in your inbox?"
                subtitle="Get a copy of your results plus actionable improvement tips"
                ctaText="Email Report"
                variant="primary"
              />
            </div>
          )}

          {email && (
            <Card className="mb-8 p-4 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900 print:hidden">
              <div className="flex items-center gap-2 text-green-800 dark:text-green-400">
                <CheckCircle2 className="h-5 w-5" />
                <span className="font-medium">Report will be emailed to {email}</span>
              </div>
            </Card>
          )}

          {/* Overall Score Section */}
          <Card className="p-8 mb-8">
            <div className="text-center">
              <div className="text-sm font-medium text-muted-foreground mb-2">OVERALL MATURITY SCORE</div>
              <div className="text-6xl font-bold mb-4">{overallProgress}/36</div>
              <Badge className={`${insight.bg} ${insight.color} border-0 mb-4`}>
                {insight.text}
              </Badge>
              <div className="text-sm text-muted-foreground">
                {answerCounts.yes} Yes (2 pts each), {answerCounts.partial} Partial (1 pt each), {answerCounts.no} No (0 pts)
              </div>
              <Progress value={(overallProgress / 36) * 100} className="mt-6 h-2" />
            </div>
          </Card>

          {/* Executive Summary */}
          <section className="mb-8 print:break-after-page">
            <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
            <Card className="p-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                This assessment evaluates your organization's technical maturity across critical business systems. 
                The analysis identifies opportunities to enhance operational efficiency, system scalability, and 
                revenue generation through systematic infrastructure improvements.
              </p>
              <p className="text-muted-foreground leading-relaxed">
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
                          catProgress >= 83 ? 'text-green-600' : 
                          catProgress >= 58 ? 'text-blue-600' :
                          catProgress >= 31 ? 'text-orange-600' : 
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

          {/* Booking CTA #2 - Primary Conversion */}
          <section className="my-12 print:hidden">
            <Card className="p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-background border-primary/20">
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Ready to Improve Your Score?</h3>
                <p className="text-muted-foreground mb-6">
                  Book a free 30-minute technical assessment call with our team. We'll review your results 
                  and create a customized roadmap to address your highest-impact improvement opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button size="lg" onClick={handleBookingClick} className="shadow-lg">
                    <Phone className="h-5 w-5 mr-2" />
                    Book Free Assessment Call
                  </Button>
                  <Button size="lg" variant="outline" onClick={handlePrint}>
                    <Printer className="h-5 w-5 mr-2" />
                    Save Report as PDF
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  No commitment required • Typically results in 2-3 quick wins within 30 days
                </p>
              </div>
            </Card>
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

          {/* Secondary Email Capture #3 - Bottom of Page */}
          {hasBackend && !email && (
            <section className="my-12 print:hidden">
              <InlineEmailCapture
                onEmailSubmit={handleEmailSubmit}
                title="Save These Results for Later"
                subtitle="We'll email you this report so you can reference it anytime"
                ctaText="Save Results"
                variant="secondary"
              />
            </section>
          )}

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
