import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { TrendingUp, Calendar, Award } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Skeleton } from "@/components/ui/skeleton";

interface Assessment {
  id: string;
  overall_score: number;
  checklist_title: string;
  completed_at: string;
  checklist_id: string;
  checklist_state: any;
  answer_counts: any;
}

const DashboardAssessments = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [assessments, setAssessments] = useState<Assessment[]>([]);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate("/auth");
      return;
    }

    await loadAssessments(session.user.id);
  };

  const loadAssessments = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("assessments")
        .select("*")
        .eq("user_id", userId)
        .order("completed_at", { ascending: false });

      if (error) throw error;

      setAssessments(data || []);
    } catch (error) {
      console.error("Error loading assessments:", error);
      toast.error("Failed to load assessments");
    } finally {
      setIsLoading(false);
    }
  };

  const viewAssessmentDetails = (assessment: Assessment) => {
    navigate("/assessment-results", {
      state: {
        checklistId: assessment.checklist_id,
        checklistTitle: assessment.checklist_title,
        overallScore: assessment.overall_score,
        answerCounts: assessment.answer_counts,
        checklistState: assessment.checklist_state,
        fromDashboard: true
      }
    });
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-primary";
    if (score >= 40) return "text-warning";
    return "text-destructive";
  };

  const getScoreTier = (score: number) => {
    if (score >= 80) return "Excellent";
    if (score >= 60) return "Good";
    if (score >= 40) return "Needs Work";
    return "Critical";
  };

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="container-standard py-12">
          <Skeleton className="h-10 w-64 mb-8" />
          <div className="space-y-4">
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <SEOHead
        title="Assessment History | CWT Studio"
        description="View your complete assessment history and track improvements"
        canonicalUrl="/dashboard/assessments"
      />

      <div className="container-standard py-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="heading-page mb-2">Assessment History</h1>
            <p className="text-description text-muted-foreground">
              Track your progress and view past assessments
            </p>
          </div>
          <Button asChild>
            <Link to="/self-assessment">Take New Assessment</Link>
          </Button>
        </div>

        {assessments.length === 0 ? (
          <Card className="p-12 text-center">
            <div className="max-w-md mx-auto">
              <Award className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">No Assessments Yet</h3>
              <p className="text-muted-foreground mb-6">
                Take your first assessment to get insights into your revenue systems maturity
              </p>
              <Button asChild>
                <Link to="/self-assessment">Start Free Health Check</Link>
              </Button>
            </div>
          </Card>
        ) : (
          <div className="space-y-4">
            {assessments.map((assessment, index) => (
              <Card key={assessment.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`text-4xl font-bold ${getScoreColor(assessment.overall_score)}`}>
                        {assessment.overall_score}
                      </div>
                      <div>
                        <div className="font-semibold text-lg">
                          {assessment.checklist_title}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(assessment.completed_at).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            {getScoreTier(assessment.overall_score)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {index > 0 && assessments[index - 1].overall_score !== assessment.overall_score && (
                      <div className="flex items-center gap-2 text-sm">
                        <TrendingUp className={`w-4 h-4 ${
                          assessments[index - 1].overall_score > assessment.overall_score 
                            ? "text-success" 
                            : "text-destructive rotate-180"
                        }`} />
                        <span className="text-muted-foreground">
                          {Math.abs(assessments[index - 1].overall_score - assessment.overall_score)} points from previous
                        </span>
                      </div>
                    )}
                  </div>

                  <Button
                    onClick={() => viewAssessmentDetails(assessment)}
                    variant="outline"
                  >
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default DashboardAssessments;