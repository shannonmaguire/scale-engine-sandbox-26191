import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { StandardCard, StandardCardContent, StandardCardHeader, StandardCardTitle } from "@/components/ui/standard-card";
import { Section } from "@/components/ui/section";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { trackEvent } from "@/hooks/usePageTracking";
import { Mail, Phone, Clock, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useExitIntent } from "@/hooks/useExitIntent";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { callJsonFunction } from "@/lib/serverless";

const initialFormState = {
  fullName: "",
  email: "",
  company: "",
  phone: "",
  companySize: "",
  revenue: "",
  role: "",
  serviceInterest: "",
  challenge: "",
  techStack: "",
  timeline: "",
  hearAbout: "",
  privacyConsent: false,
  interest: "",
  source_page: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormState);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const explicitContactEndpoint = useMemo(() => {
    const provided = import.meta.env.VITE_CONTACT_ENDPOINT?.trim();
    return provided && provided.length > 0 ? provided : null;
  }, []);

  // Exit intent tracking
  const { isExiting, dismiss } = useExitIntent({ 
    enabled: !status, // Only show if form hasn't been submitted
    sensitivity: 20,
    delay: 200
  });

  // Detect URL parameters for pre-populating hidden fields
  useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const interest = params.get('interest') || '';
    const sourcePage = params.get('source_page') || '';
    
    if (interest || sourcePage) {
      setFormData(prev => ({
        ...prev,
        interest,
        source_page: sourcePage
      }));
    }
  }, []);

  const validateField = (field: string, value: string | boolean): string => {
    if (typeof value === 'boolean') {
      return value ? "" : "Please check the box to accept our Privacy Policy";
    }
    
    switch (field) {
      case "fullName":
        return value.trim().length > 0 ? "" : "Please enter your full name (first and last)";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Please enter a valid email (e.g., you@company.com)";
      case "company":
        return value.trim().length > 0 ? "" : "Please enter your company name";
      case "phone":
        return ""; // Optional field
      case "companySize":
        return value.trim().length > 0 ? "" : "Please select your company size range";
      case "revenue":
        return ""; // Optional field
      case "role":
        return value.trim().length > 0 ? "" : "Please enter your role or job title";
      case "serviceInterest":
        return value.trim().length > 0 ? "" : "Please select the service you're interested in";
      case "challenge":
        return value.trim().length > 0 ? "" : "Please describe the challenge you're facing";
      case "techStack":
        return value.trim().length > 0 ? "" : "Please list your main tools (e.g., Salesforce, HubSpot, Apollo)";
      case "timeline":
        return value.trim().length > 0 ? "" : "Please select your preferred timeline";
      case "hearAbout":
        return ""; // Optional field
      default:
        return "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate all fields
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
      setIsSubmitting(false);
      return;
    }
    setIsSubmitting(true);
    setStatus(null);
    
    try {
      const { response, data } = explicitContactEndpoint
        ? await (async () => {
            const res = await fetch(explicitContactEndpoint, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            });
            const parsed = (await res.json().catch(() => ({}))) as {
              error?: string;
              success?: boolean;
            };
            return { response: res, data: parsed };
          })()
        : await callJsonFunction<typeof formData, { error?: string; success?: boolean }>(
            "send-contact",
            formData,
          );

      if (!response.ok) {
        throw new Error(data?.error || "Failed to send contact request");
      }

      trackEvent('Contact Form Submitted', {
        fullName: formData.fullName,
        email: formData.email,
        company: formData.company,
        companySize: formData.companySize,
        serviceInterest: formData.serviceInterest,
        techStack: formData.techStack,
        timeline: formData.timeline,
        hearAbout: formData.hearAbout,
      });

      setStatus({
        type: 'success',
        message: "Thanks for reaching out! We've received your request and will respond within 24 hours. Please check your spam folder if you don't see our email.",
      });
      setFormData(initialFormState);
      setErrors({});
      setTouched({});
    } catch (error) {
      console.error('Contact submission failed', error);
      setStatus({
        type: 'error',
        message: 'We were unable to send your message. Please try again soon or contact us through an alternate channel.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
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
        title="Contact CWT Studio | Schedule a Business Automation & Salesforce Consultation"
        description="Connect with CWT Studio to plan your Creator Wealth Tools roadmap. We deliver business automation, Salesforce integration, and bespoke web and mobile builds with local response inside 24 hours."
        keywords={[
          'contact CWT Studio',
          'business automation consultation',
          'Salesforce partner meeting',
          'web and mobile app discovery call',
          'Creator Wealth Tools support'
        ]}
      />
      
      <Breadcrumbs />
      
      <Section>
        {/* Hero */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="system-status mb-6">
            CONTACT US
          </div>
          <h1 className="heading-page mb-6">
            Start Here
          </h1>
          {formData.source_page === 'web-systems' ? (
            <p className="text-description max-w-2xl mx-auto">
              Tell us about your web project. We'll send a custom project brief and next steps within 24 hours.
            </p>
          ) : formData.source_page === 'sprint' ? (
            <p className="text-description max-w-2xl mx-auto">
              Tell us about your Sprint timeline and prerequisites. We'll respond within 24 hours with a scoped proposal.
            </p>
          ) : formData.source_page === 'fractional' ? (
            <p className="text-description max-w-2xl mx-auto">
              Let's discuss your ongoing operations needs. We'll respond within 24 hours with a custom engagement proposal.
            </p>
          ) : (
            <p className="text-description max-w-2xl mx-auto">
              Ready to install revenue infrastructure? Start with an assessment. We'll respond within 24 hours with a scoped proposal.
            </p>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <StandardCard>
              <StandardCardHeader>
                <StandardCardTitle className="text-primary">Contact Form</StandardCardTitle>
              </StandardCardHeader>
              <StandardCardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Contact Information */}
                  <div className="space-y-6">
                    <h3 className="text-sm font-mono font-bold text-primary border-b border-border pb-2">CONTACT INFORMATION</h3>
                    
                    <div>
                      <Label htmlFor="fullName" className="font-mono text-sm font-medium mb-4">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        onBlur={() => handleBlur("fullName")}
                        required
                        className={`mt-2 font-mono transition-all ${errors.fullName && touched.fullName ? 'border-destructive focus:ring-destructive' : ''}`}
                        aria-describedby="fullName-error"
                        aria-invalid={!!(errors.fullName && touched.fullName)}
                      />
                      {errors.fullName && touched.fullName && (
                        <p id="fullName-error" className="text-xs text-destructive mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" aria-hidden="true" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email" className="font-mono text-sm font-medium mb-4">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        onBlur={() => handleBlur("email")}
                        required
                        className={`mt-2 font-mono transition-all ${errors.email && touched.email ? 'border-destructive focus:ring-destructive' : ''}`}
                        aria-describedby="email-error"
                        aria-invalid={!!(errors.email && touched.email)}
                      />
                      {errors.email && touched.email && (
                        <p id="email-error" className="text-xs text-destructive mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" aria-hidden="true" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="company" className="font-mono text-sm font-medium mb-4">Company Name *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        onBlur={() => handleBlur("company")}
                        required
                        className={`mt-2 font-mono transition-all ${errors.company && touched.company ? 'border-destructive focus:ring-destructive' : ''}`}
                        aria-describedby="company-error"
                        aria-invalid={!!(errors.company && touched.company)}
                      />
                      {errors.company && touched.company && (
                        <p id="company-error" className="text-xs text-destructive mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" aria-hidden="true" />
                          {errors.company}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone" className="font-mono text-sm font-medium mb-4">Phone Number (optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        onBlur={() => handleBlur("phone")}
                        className="mt-2 font-mono transition-all"
                      />
                    </div>
                  </div>

                  {/* Company Details */}
                  <div className="space-y-6">
                    <h3 className="text-sm font-mono font-bold text-primary border-b border-border pb-2 mt-8 mb-6">COMPANY DETAILS</h3>
                    
                    <div>
                      <Label htmlFor="companySize" className="font-mono text-sm font-medium mb-4">Company Size *</Label>
                      <select
                        id="companySize"
                        value={formData.companySize}
                        onChange={(e) => handleInputChange("companySize", e.target.value)}
                        onBlur={() => handleBlur("companySize")}
                        required
                        className={`mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${errors.companySize && touched.companySize ? 'border-destructive' : ''}`}
                      >
                        <option value="">Select company size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-1000">201-1,000 employees</option>
                        <option value="1000+">1,000+ employees</option>
                      </select>
                      {errors.companySize && touched.companySize && (
                        <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" aria-hidden="true" />
                          {errors.companySize}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="revenue" className="font-mono text-sm font-medium mb-4">Annual Revenue Range (optional)</Label>
                      <select
                        id="revenue"
                        value={formData.revenue}
                        onChange={(e) => handleInputChange("revenue", e.target.value)}
                        className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select revenue range</option>
                        <option value="<1M">Less than $1M</option>
                        <option value="1-5M">$1M - $5M</option>
                        <option value="5-10M">$5M - $10M</option>
                        <option value="10-50M">$10M - $50M</option>
                        <option value="50M+">$50M+</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="role" className="font-mono text-sm font-medium mb-4">Your Role/Title *</Label>
                      <Input
                        id="role"
                        value={formData.role}
                        onChange={(e) => handleInputChange("role", e.target.value)}
                        onBlur={() => handleBlur("role")}
                        placeholder="e.g., CEO, VP Sales, RevOps Manager"
                        required
                        className={`mt-2 font-mono transition-all ${errors.role && touched.role ? 'border-destructive focus:ring-destructive' : ''}`}
                        aria-describedby="role-error"
                        aria-invalid={!!(errors.role && touched.role)}
                      />
                      {errors.role && touched.role && (
                        <p id="role-error" className="text-xs text-destructive mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" aria-hidden="true" />
                          {errors.role}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service Interest */}
                  <div className="space-y-6">
                    <h3 className="text-sm font-mono font-bold text-primary border-b border-border pb-2 mt-8 mb-6">SERVICE INTEREST</h3>
                    
                    <div>
                      <Label htmlFor="serviceInterest" className="font-mono text-sm font-medium mb-4">What service are you interested in? *</Label>
                      <select
                        id="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={(e) => handleInputChange("serviceInterest", e.target.value)}
                        onBlur={() => handleBlur("serviceInterest")}
                        required
                        className={`mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${errors.serviceInterest && touched.serviceInterest ? 'border-destructive' : ''}`}
                      >
                        <option value="">Select a service</option>
                        <option value="infrastructure-assessment">Infrastructure Assessment</option>
                        <option value="revenue-sprint">Revenue Sprint</option>
                        <option value="fractional-ops">Fractional RevOps</option>
                        <option value="web-systems">Web Systems</option>
                        <option value="website-support">Website Support</option>
                        <option value="salesforce-partnership">Salesforce Partnership</option>
                        <option value="assessment-tools">Assessment Tools</option>
                        <option value="not-sure">Not Sure Yet</option>
                      </select>
                      {errors.serviceInterest && touched.serviceInterest && (
                        <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" aria-hidden="true" />
                          {errors.serviceInterest}
                        </p>
                      )}
                      {formData.serviceInterest === 'infrastructure-assessment' && (
                        <div className="mt-3 p-3 bg-primary/10 border border-primary/20 rounded-lg">
                          <p className="text-sm text-foreground flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                            <span>
                              For assessment requests, please use our dedicated{' '}
                              <a href="/assessment" className="text-primary hover:underline font-semibold">
                                Assessment page
                              </a>
                              {' '}for faster processing.
                            </span>
                          </p>
                        </div>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="challenge" className="font-mono text-sm font-medium">Current Challenge/Objective *</Label>
                      <Textarea
                        id="challenge"
                        value={formData.challenge}
                        onChange={(e) => handleInputChange("challenge", e.target.value)}
                        onBlur={() => handleBlur("challenge")}
                        placeholder="What revenue operations challenges are you facing? What outcomes are you looking to achieve?"
                        required
                        className={`mt-2 font-mono transition-all ${errors.challenge && touched.challenge ? 'border-destructive focus:ring-destructive' : ''}`}
                        rows={4}
                        aria-describedby="challenge-error"
                        aria-invalid={!!(errors.challenge && touched.challenge)}
                      />
                      {errors.challenge && touched.challenge && (
                        <p id="challenge-error" className="text-xs text-destructive mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" aria-hidden="true" />
                          {errors.challenge}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Technical Context */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-mono font-bold text-primary border-b border-border pb-2">TECHNICAL CONTEXT</h3>
                    
                    <div>
                      <Label htmlFor="techStack" className="font-mono text-sm font-medium">Current CRM/Tech Stack *</Label>
                      <select
                        id="techStack"
                        value={formData.techStack}
                        onChange={(e) => handleInputChange("techStack", e.target.value)}
                        onBlur={() => handleBlur("techStack")}
                        required
                        className={`mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${errors.techStack && touched.techStack ? 'border-destructive' : ''}`}
                      >
                        <option value="">Select your tech stack</option>
                        <option value="salesforce">Salesforce</option>
                        <option value="hubspot">HubSpot</option>
                        <option value="pipedrive">Pipedrive</option>
                        <option value="other">Other CRM</option>
                        <option value="none">No CRM Yet</option>
                      </select>
                      <p className="text-xs text-muted-foreground mt-1">
                        Main CRM platform you use (or plan to use)
                      </p>
                      {errors.techStack && touched.techStack && (
                        <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" aria-hidden="true" />
                          {errors.techStack}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="timeline" className="font-mono text-sm font-medium">Timeline for Implementation *</Label>
                      <select
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) => handleInputChange("timeline", e.target.value)}
                        onBlur={() => handleBlur("timeline")}
                        required
                        className={`mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${errors.timeline && touched.timeline ? 'border-destructive' : ''}`}
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP - Immediate Need</option>
                        <option value="1-3-months">1-3 Months</option>
                        <option value="3-6-months">3-6 Months</option>
                        <option value="6+-months">6+ Months</option>
                        <option value="exploring">Just Exploring Options</option>
                      </select>
                      {errors.timeline && touched.timeline && (
                        <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" aria-hidden="true" />
                          {errors.timeline}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="hearAbout" className="font-mono text-sm font-medium mb-4">How did you hear about us? (optional)</Label>
                      <select
                        id="hearAbout"
                        value={formData.hearAbout}
                        onChange={(e) => handleInputChange("hearAbout", e.target.value)}
                        className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select one</option>
                        <option value="website">Website/Search</option>
                        <option value="referral">Referral</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="salesforce">Salesforce AppExchange</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 pt-4 border-t border-border">
                    <Checkbox
                      id="privacyConsent"
                      checked={formData.privacyConsent}
                      onCheckedChange={(checked) => handleInputChange("privacyConsent", checked as boolean)}
                      className={errors.privacyConsent && touched.privacyConsent ? 'border-destructive' : ''}
                      aria-describedby="privacy-error"
                      aria-invalid={!!(errors.privacyConsent && touched.privacyConsent)}
                    />
                    <Label htmlFor="privacyConsent" className="text-sm leading-relaxed cursor-pointer">
                      I have read and agree to the{" "}
                      <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                        Privacy Policy
                      </a>{" "}
                      and consent to CWT Studio collecting and using my information for contact purposes *
                    </Label>
                  </div>
                  {errors.privacyConsent && touched.privacyConsent && (
                    <p id="privacy-error" className="text-xs text-destructive flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" aria-hidden="true" />
                      {errors.privacyConsent}
                    </p>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full hover-lift hover-glow group relative" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending Request...
                      </span>
                    ) : (
                      <>
                        Submit Contact Request
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
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
                      role="status"
                      aria-live="polite"
                    >
                      <div className="flex items-start gap-2">
                        {status.type === 'success' ? (
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        ) : (
                          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        )}
                        <p className="text-sm font-mono">{status.message}</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Trust signal */}
                  <p className="text-xs text-muted-foreground text-center font-mono flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-primary" aria-hidden="true" />
                    We'll respond within 24 hours
                  </p>
                </form>
              </StandardCardContent>
            </StandardCard>

            {/* Auto Scheduler Placeholder */}
            <div className="mt-8">
              <StandardCard>
                <StandardCardHeader>
                  <StandardCardTitle className="font-mono flex items-center gap-2 text-primary">
                    <Clock className="w-5 h-5 text-primary" />
                    Schedule a Call
                  </StandardCardTitle>
                </StandardCardHeader>
                <StandardCardContent>
                  <div className="bg-card border border-border p-8 text-center console-card">
                    <p className="text-muted-foreground mb-4 font-mono text-sm">
                      Prefer to schedule directly? Choose a time that works for you.
                    </p>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full font-mono text-sm">
                        Tuesday, Dec 19 - 2:00 PM EST
                      </Button>
                      <Button variant="outline" className="w-full font-mono text-sm">
                        Wednesday, Dec 20 - 10:00 AM EST
                      </Button>
                      <Button variant="outline" className="w-full font-mono text-sm">
                        Thursday, Dec 21 - 3:00 PM EST
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4 font-mono">
                      30-minute discovery call
                    </p>
                  </div>
                </StandardCardContent>
              </StandardCard>
            </div>
          </div>

          {/* Contact Info & Process */}
          <div className="space-y-8">
            {/* Contact Details */}
            <StandardCard>
              <StandardCardHeader>
                <StandardCardTitle className="font-mono text-primary">Get in Touch</StandardCardTitle>
              </StandardCardHeader>
              <StandardCardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">hello@thecwtstudio.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Response Time</p>
                    <p className="text-sm text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>
              </StandardCardContent>
            </StandardCard>

            {/* What Happens Next */}
            <StandardCard>
              <StandardCardHeader>
                <StandardCardTitle className="font-mono text-primary">What Happens Next</StandardCardTitle>
              </StandardCardHeader>
              <StandardCardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Quick Review</p>
                      <p className="text-sm text-muted-foreground">We review your submission and company background</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Discovery Call</p>
                      <p className="text-sm text-muted-foreground">30-minute call to understand your challenges</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Proposal</p>
                      <p className="text-sm text-muted-foreground">Custom assessment plan and timeline</p>
                    </div>
                  </div>
                </div>
              </StandardCardContent>
            </StandardCard>

            {/* Service Context */}
            <StandardCard variant="muted">
              <h3 className="font-mono font-bold mb-3">Our Services</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Infrastructure Assessment</span>
                  <span className="font-medium">$1,500–$2,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Revenue Sprint</span>
                  <span className="font-medium">$9–18K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Retainer</span>
                  <span className="font-medium">$4.5–10K/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Salesforce Partnership</span>
                  <span className="font-medium">Custom</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Assessment Tools</span>
                  <span className="font-medium">Custom</span>
                </div>
                <div className="border-t border-border pt-2 mt-3">
                  <p className="text-xs text-muted-foreground">
                    Custom pricing based on your needs
                  </p>
                </div>
              </div>
            </StandardCard>
          </div>
        </div>
      </Section>

      {/* Exit Intent Popup */}
      <ExitIntentPopup
        isOpen={isExiting}
        onClose={dismiss}
        title="Before You Go — Free ROI Calculator?"
        description="Get our Salesforce ROI Calculator to quantify the cost of technical debt vs. the investment to fix it. Includes pipeline impact and time savings metrics."
        ctaText="Send Me the Calculator"
      />
    </div>
  );
};

export default Contact;
