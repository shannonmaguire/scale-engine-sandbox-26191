import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { ArrowRight, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Skeleton } from "@/components/ui/skeleton";

interface LatestAssessment {
  id: string;
  overall_score: number;
  checklist_title: string;
  completed_at: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [latestAssessment, setLatestAssessment] = useState<LatestAssessment | null>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate("/auth");
      return;
    }

    setUser(session.user);
    await loadDashboardData(session.user.id);
  };

  const loadDashboardData = async (userId: string) => {
    try {
      // Fetch latest assessment
      const { data: assessments, error } = await supabase
        .from("assessments")
        .select("id, overall_score, checklist_title, completed_at")
        .eq("user_id", userId)
        .order("completed_at", { ascending: false })
        .limit(1);

      if (error) throw error;

      if (assessments && assessments.length > 0) {
        setLatestAssessment(assessments[0]);
      }
    } catch (error) {
      console.error("Error loading dashboard:", error);
      toast.error("Failed to load dashboard data");
    } finally {
      setIsLoading(false);
    }
  };

  const getScoreTier = (score: number) => {
    if (score >= 80) return { label: "Excellent", color: "text-success", icon: CheckCircle2 };
    if (score >= 60) return { label: "Good", color: "text-primary", icon: TrendingUp };
    if (score >= 40) return { label: "Needs Work", color: "text-warning", icon: AlertTriangle };
    return { label: "Critical", color: "text-destructive", icon: AlertTriangle };
  };

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="container-standard py-12">
          <Skeleton className="h-10 w-64 mb-8" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Skeleton className="h-48" />
            <Skeleton className="h-48" />
            <Skeleton className="h-48" />
          </div>
        </div>
      </DashboardLayout>
    );
  }

  const scoreTier = latestAssessment ? getScoreTier(latestAssessment.overall_score) : null;
  const ScoreIcon = scoreTier?.icon;

  return (
    <DashboardLayout>
      <SEOHead
        title="Dashboard | CWT Studio"
        description="View your assessment history and track your revenue systems maturity"
        canonicalUrl="/dashboard"
      />

      <div className="container-standard py-12">
        <div className="mb-8">
          <h1 className="heading-page mb-2">Dashboard</h1>
          <p className="text-description text-muted-foreground">
            Welcome back, {user?.email}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Latest Assessment Score */}
          {latestAssessment ? (
            <Card className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Latest Score
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-4xl font-bold">{latestAssessment.overall_score}</span>
                    <span className="text-xl text-muted-foreground">/100</span>
                  </div>
                </div>
                {ScoreIcon && <ScoreIcon className={`w-8 h-8 ${scoreTier?.color}`} />}
              </div>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-muted ${scoreTier?.color} text-sm font-medium mb-4`}>
                {scoreTier?.label}
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Completed {new Date(latestAssessment.completed_at).toLocaleDateString()}
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/dashboard/assessments">
                  View Details <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </Card>
          ) : (
            <Card className="p-6">
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                No Assessments Yet
              </div>
              <p className="text-muted-foreground mb-4">
                Take your first health check to see your score
              </p>
              <Button asChild className="w-full">
                <Link to="/self-assessment">
                  Take Health Check <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </Card>
          )}

          {/* Recommended Next Step */}
          <Card className="p-6">
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
              Recommended Next Step
            </div>
            <h3 className="text-xl font-semibold mb-3">
              {!latestAssessment ? "Start with Free Health Check" :
               latestAssessment.overall_score < 60 ? "Book Infrastructure Assessment" :
               "Explore 90-Day Sprint"}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {!latestAssessment ? "Get instant insights into your revenue systems maturity" :
               latestAssessment.overall_score < 60 ? "Deep-dive audit with root cause analysis and implementation roadmap" :
               "Transform your systems with documented handoff and zero vendor lock-in"}
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to={!latestAssessment ? "/self-assessment" :
                       latestAssessment.overall_score < 60 ? "/infrastructure-assessment" : "/sprint"}>
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6">
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Quick Actions
            </div>
            <div className="space-y-3">
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/self-assessment">
                  Retake Assessment
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/contact?interest=consultation">
                  Book Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/proof">
                  View Case Studies
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;