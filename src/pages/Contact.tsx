import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { StandardCard, StandardCardContent } from "@/components/ui/standard-card";
import { Section } from "@/components/ui/section";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { trackEvent } from "@/hooks/usePageTracking";
import { Mail, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { callJsonFunction } from "@/lib/serverless";

const initialFormState = {
  fullName: "",
  email: "",
  message: "",
  privacyConsent: false,
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const validateField = (field: string, value: string | boolean): string => {
    if (typeof value === 'boolean') {
      return value ? "" : "Required";
    }
    
    switch (field) {
      case "fullName":
        return value.trim().length > 0 ? "" : "Name required";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Valid email required";
      case "message":
        return value.trim().length > 0 ? "" : "Message required";
      default:
        return "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const value = formData[key as keyof typeof formData];
      const error = validateField(key, typeof value === 'boolean' ? value : value);
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
      const { response, data } = await callJsonFunction<typeof formData, { error?: string; success?: boolean }>(
        "send-contact",
        formData,
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

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors(prev => ({ ...prev, [field]: error }));
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
        description="Contact CWT Studio for Salesforce consulting, business automation, and web development. We respond within 24 hours."
        keywords={[
          'contact CWT Studio',
          'Salesforce consulting contact',
          'business automation inquiry'
        ]}
      />
      
      <Breadcrumbs />
      
      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-20">
            <div className="flex justify-center mb-6">
              <div className="system-status">
                CONTACT
              </div>
            </div>
            <h1 className="heading-page mb-4">
              Let's Talk
            </h1>
            <p className="text-description text-lg max-w-2xl mx-auto">
              Tell us what you need. We'll respond in 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="border-l-4 border-primary pl-8">
                <h2 className="font-mono text-sm font-bold text-primary mb-8 uppercase tracking-wider">
                  Send a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <Label htmlFor="fullName" className="font-mono text-sm font-medium mb-2 block">
                        Name *
                      </Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        onBlur={() => handleBlur("fullName")}
                        placeholder="Your full name"
                        required
                        className={`font-mono ${errors.fullName && touched.fullName ? 'border-destructive' : ''}`}
                      />
                      {errors.fullName && touched.fullName && (
                        <p className="text-xs text-destructive mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email" className="font-mono text-sm font-medium mb-2 block">
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

                    <div>
                      <Label htmlFor="message" className="font-mono text-sm font-medium mb-2 block">
                        What do you need? *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        onBlur={() => handleBlur("message")}
                        placeholder="Tell us about your project, challenge, or question..."
                        required
                        className={`font-mono resize-none ${errors.message && touched.message ? 'border-destructive' : ''}`}
                        rows={6}
                      />
                      {errors.message && touched.message && (
                        <p className="text-xs text-destructive mt-1">{errors.message}</p>
                      )}
                    </div>

                    <div className="flex items-start gap-3 pt-6 border-t border-border/50">
                      <Checkbox
                        id="privacyConsent"
                        checked={formData.privacyConsent}
                        onCheckedChange={(checked) => handleInputChange("privacyConsent", checked as boolean)}
                        className={`mt-0.5 ${errors.privacyConsent && touched.privacyConsent ? 'border-destructive' : ''}`}
                      />
                      <Label htmlFor="privacyConsent" className="text-sm leading-relaxed cursor-pointer text-muted-foreground">
                        I agree to the{" "}
                        <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          Privacy Policy
                        </a>
                        {" "}*
                      </Label>
                    </div>
                    {errors.privacyConsent && touched.privacyConsent && (
                      <p className="text-xs text-destructive">{errors.privacyConsent}</p>
                    )}

                    <Button
                      type="submit" 
                      size="lg"
                      className="w-full hover-lift hover-glow group" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>

                    {status && (
                      <div
                        className={`p-4 rounded-lg border ${
                          status.type === 'success' 
                            ? 'bg-success/10 border-success/20 text-success' 
                            : 'bg-destructive/10 border-destructive/20 text-destructive'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          {status.type === 'success' ? (
                            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          ) : (
                            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          )}
                          <p className="text-sm font-mono">{status.message}</p>
                        </div>
                      </div>
                    )}
                  </form>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="border-l-2 border-border pl-6 space-y-6">
                <div>
                  <h3 className="font-mono text-sm font-bold text-foreground mb-4 uppercase tracking-wider">
                    Direct Contact
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground text-sm mb-1">Email</p>
                        <a href="mailto:hello@thecwtstudio.com" className="text-sm text-muted-foreground hover:text-primary font-mono">
                          hello@thecwtstudio.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground text-sm mb-1">Response Time</p>
                        <p className="text-sm text-muted-foreground">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 border border-border/50 rounded-lg p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Prefer to skip the form? Email us directly at{" "}
                    <a href="mailto:hello@thecwtstudio.com" className="text-primary hover:underline font-medium">
                      hello@thecwtstudio.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
