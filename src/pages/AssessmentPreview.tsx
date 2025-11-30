import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ScorePreview } from "@/components/checklist/ScorePreview";
import { EmailCaptureModal } from "@/components/checklist/EmailCaptureModal";
import { Section } from "@/components/ui/section";
import SEOHead from "@/components/SEOHead";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import analytics from "@/lib/analytics";

const AssessmentPreview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    checklistId,
    checklistTitle,
    overallScore,
    answerCounts,
    checklistState,
    categoryCount
  } = location.state || {};

  // Redirect if no state
  if (!checklistId || !checklistState) {
    navigate('/self-assessment');
    return null;
  }

  const handleEmailSubmit = async (email: string) => {
    setIsSubmitting(true);

    try {
      // Save to database
      const { error: dbError } = await supabase
        .from('assessments')
        .insert({
          email,
          checklist_id: checklistId,
          checklist_title: checklistTitle,
          overall_score: overallScore,
          answer_counts: answerCounts,
          checklist_state: checklistState,
          user_agent: navigator.userAgent,
          referrer: document.referrer
        });

      if (dbError) throw dbError;

      // Call edge function to send PDF report
      const { error: functionError } = await supabase.functions.invoke('send-assessment-report', {
        body: {
          email,
          checklistId,
          checklistTitle,
          overallScore,
          answerCounts,
          checklistState
        }
      });

      if (functionError) {
        console.error('Edge function error:', functionError);
        toast.error('Report saved but email delivery failed. Please contact support.');
      } else {
        toast.success('Report sent! Check your inbox.');
      }

      // Track conversion
      analytics.trackEvent('assessment_email_captured', {
        checklist_id: checklistId,
        score: overallScore
      });

      // Navigate to full results
      navigate('/assessment-results', {
        state: {
          checklistId,
          checklistTitle,
          overallScore,
          answerCounts,
          checklistState,
          email
        }
      });

    } catch (error) {
      console.error('Error submitting assessment:', error);
      toast.error('Failed to save assessment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSkip = () => {
    analytics.trackEvent('assessment_email_skipped', {
      checklist_id: checklistId,
      score: overallScore
    });

    navigate('/assessment-results', {
      state: {
        checklistId,
        checklistTitle,
        overallScore,
        answerCounts,
        checklistState,
        skipped: true
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <SEOHead
        title="Your Health Check Results | CWT Studio"
        description="View your free revenue systems health check score and unlock detailed category analysis."
        canonicalUrl="/assessment-preview"
      />

      <Section className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <div className="font-mono text-sm uppercase tracking-widest text-primary mb-4">
              Free Health Check Complete
            </div>
            <h1 className="heading-page mb-4">Your Revenue Systems Score</h1>
            <p className="text-muted-foreground">
              Enter your email to unlock detailed category analysis and receive your full report with personalized recommendations.
            </p>
          </div>

          <ScorePreview
            score={overallScore}
            categoryCount={categoryCount}
            onUnlock={() => setShowEmailModal(true)}
          />
        </div>
      </Section>

      <EmailCaptureModal
        open={showEmailModal}
        onEmailSubmit={handleEmailSubmit}
        onSkip={handleSkip}
      />
    </div>
  );
};

export default AssessmentPreview;
