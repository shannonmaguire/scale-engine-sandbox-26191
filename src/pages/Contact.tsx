import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "@/components/ui/section";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { trackEvent } from "@/hooks/usePageTracking";
import { Mail, ArrowRight, CheckCircle2, AlertCircle, Loader2, Clock, MessageSquare } from "lucide-react";
import { callJsonFunction } from "@/lib/serverless";

const initialFormState = {
  fullName: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  // Pre-populate message based on URL params (from intake routing)
  useEffect(() => {
    const tier = searchParams.get("tier");
    const score = searchParams.get("score");
    
    if (tier && score) {
      const scoreNum = parseInt(score, 10);
      let prefilledMessage = '';
      
      switch (tier) {
        case 'critical':
          prefilledMessage = `I scored ${scoreNum}/36 on the Health Check. My systems have critical gaps and I need to discuss immediate options.`;
          break;
        case 'emerging':
          prefilledMessage = `I scored ${scoreNum}/36 on the Health Check. I have structural gaps and want to discuss repair options.`;
          break;
        case 'structured':
          prefilledMessage = `I scored ${scoreNum}/36 on the Health Check. I have a solid foundation but identified specific gaps to address.`;
          break;
        default:
          prefilledMessage = `I completed the Health Check and scored ${scoreNum}/36. I'd like to discuss next steps.`;
      }
      
      setFormData(prev => ({
        ...prev,
        message: prefilledMessage
      }));
    }
  }, [searchParams]);

  const validateField = (field: string, value: string): string => {
    switch (field) {
      case "fullName":
        return value.trim().length > 0 ? "" : "Name required";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Valid email required";
      case "message":
        return value.trim().length > 0 ? "" : "Tell us what's on your mind";
      default:
        return "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const value = formData[key as keyof typeof formData];
      const error = validateField(key, value);
      if (error) newErrors[key] = error;
    });
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const allTouched: Record<string, boolean> = {};
      Object.keys(formData).forEach((key) => {
        allTouched[key] = true;
      });
      setTouched((prev) => ({ ...prev, ...allTouched }));
      return;
    }

    setIsSubmitting(true);
    setStatus(null);
    
    try {
      // Transform data for the existing API
      const submitData = {
        fullName: formData.fullName,
        email: formData.email,
        company: "",
        servicesInterested: [],
        timeline: "exploring",
        budgetRange: "",
        currentSetup: "",
        message: formData.message,
        privacyConsent: true,
      };

      const { response, data } = await callJsonFunction<typeof submitData, { error?: string; success?: boolean }>(
        "send-contact",
        submitData,
      );

      if (!response.ok) {
        throw new Error(data?.error || "Failed to send");
      }

      trackEvent('Contact Form Submitted', {
        fullName: formData.fullName,
        email: formData.email,
      });

      setStatus({
        type: 'success',
        message: "Got it. We'll respond within 24 hours.",
      });
      setFormData(initialFormState);
      setErrors({});
      setTouched({});
    } catch (error) {
      console.error('Contact submission failed', error);
      setStatus({
        type: 'error',
        message: 'Something went wrong. Try again or email us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors(prev => {
        if (prev[field] === error) return prev;
        return { ...prev, [field]: error };
      });
    }
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field as keyof typeof formData]);
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Contact CWT Studio | Get in Touch"
        description="Contact CWT Studio for revenue infrastructure consulting. We respond within 24 hours."
        keywords={[
          'contact CWT Studio',
          'revenue operations contact',
          'business automation inquiry'
        ]}
        canonicalUrl="/contact"
      />
      
      <Breadcrumbs />
      
      <Section>
        <div className="max-w-3xl mx-auto">
          {/* Priority Intake Banner - shown for critical tier from assessment */}
          {searchParams.get("priority") === "high" && (
            <div className="mb-8 p-4 border-2 border-destructive bg-destructive/10">
              <p className="font-mono text-sm uppercase tracking-widest text-destructive font-semibold text-center">
                Priority Intake — Response within 24 hours
              </p>
            </div>
          )}

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="system-status mb-8">
              CONTACT
            </div>
            <h1 className="heading-page mb-4">
              Let's Talk
            </h1>
            <p className="text-description text-muted-foreground max-w-xl mx-auto">
              Describe your infrastructure. We'll respond within 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Simplified Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <Label htmlFor="fullName" className="text-label mb-2 block">
                    Name *
                  </Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    onBlur={() => handleBlur("fullName")}
                    placeholder="Your name"
                    required
                    className={`font-mono ${errors.fullName && touched.fullName ? 'border-destructive' : ''}`}
                  />
                  {errors.fullName && touched.fullName && (
                    <p className="text-xs text-destructive mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-label mb-2 block">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    placeholder="you@company.com"
                    required
                    className={`font-mono ${errors.email && touched.email ? 'border-destructive' : ''}`}
                  />
                  {errors.email && touched.email && (
                    <p className="text-xs text-destructive mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Message - The One Open Question */}
                <div>
                  <Label htmlFor="message" className="text-label mb-2 block">
                    Describe your current systems *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    onBlur={() => handleBlur("message")}
                    placeholder="Tell us about your revenue infrastructure and what you're trying to solve..."
                    rows={5}
                    required
                    className={`font-mono resize-none ${errors.message && touched.message ? 'border-destructive' : ''}`}
                  />
                  {errors.message && touched.message && (
                    <p className="text-xs text-destructive mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                {/* Status Messages */}
                {status && (
                  <div className={`flex items-center gap-2 p-4 border ${
                    status.type === 'success' 
                      ? 'border-primary/30 bg-primary/5 text-primary' 
                      : 'border-destructive/30 bg-destructive/5 text-destructive'
                  }`}>
                    {status.type === 'success' ? (
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    )}
                    <p className="text-sm font-mono">{status.message}</p>
                  </div>
                )}
              </form>
            </div>

            {/* Side Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="border border-border p-4 md:p-6 bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-mono text-sm uppercase tracking-widest">Response Time</h3>
                </div>
                <p className="text-2xl font-bold text-foreground mb-2">24 hours</p>
                <p className="text-sm text-muted-foreground">
                  Usually faster. We don't do sales calls—just direct answers.
                </p>
              </div>

              <div className="border border-border p-4 md:p-6 bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-5 h-5 text-primary" />
                  <h3 className="font-mono text-sm uppercase tracking-widest">Direct Email</h3>
                </div>
                <a 
                  href="mailto:shannon@thecwtstudio.com" 
                  className="text-primary hover:text-primary/80 font-mono transition-colors"
                >
                  shannon@thecwtstudio.com
                </a>
              </div>

              <div className="border border-border p-4 md:p-6 bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <h3 className="font-mono text-sm uppercase tracking-widest">What Happens Next</h3>
                </div>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-primary">1.</span>
                    We read your message
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-primary">2.</span>
                    We respond with specific questions or a proposal
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-primary">3.</span>
                    If it's a fit, we schedule a 30-min call
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;