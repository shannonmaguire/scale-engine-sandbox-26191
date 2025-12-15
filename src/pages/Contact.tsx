import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { StandardCard, StandardCardContent } from "@/components/ui/standard-card";
import { Section } from "@/components/ui/section";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { trackEvent } from "@/hooks/usePageTracking";
import { Mail, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { callJsonFunction } from "@/lib/serverless";

const services = [
  { id: "assessment", label: "Assessment", param: "assessment" },
  { id: "sprint", label: "Sprint", param: "sprint" },
  { id: "fractional", label: "Fractional Ops", param: "fractional" },
  { id: "web", label: "Web Systems", param: "web-systems" },
  { id: "salesforce", label: "Salesforce", param: "salesforce" },
];

const initialFormState = {
  fullName: "",
  email: "",
  company: "",
  servicesInterested: [] as string[],
  timeline: "",
  budgetRange: "",
  currentSetup: "",
  message: "",
  privacyConsent: false,
};

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  // Pre-populate service and message based on URL params (from intake routing)
  useEffect(() => {
    const interest = searchParams.get("interest");
    const tier = searchParams.get("tier");
    const score = searchParams.get("score");
    const priority = searchParams.get("priority");
    
    // Set service interest
    if (interest) {
      const matchingService = services.find(s => s.param === interest);
      if (matchingService) {
        setFormData(prev => ({
          ...prev,
          servicesInterested: [matchingService.id]
        }));
      }
    }
    
    // Generate prefilled message based on intake routing tier
    if (tier && score) {
      let prefilledMessage = '';
      const scoreNum = parseInt(score, 10);
      
      switch (tier) {
        case 'critical':
          prefilledMessage = `PRIORITY: I completed the Revenue Health Check and scored ${scoreNum}/36. My revenue systems have critical gaps across multiple categories. I need to discuss immediate intervention options.`;
          break;
        case 'emerging':
          prefilledMessage = `I completed the Revenue Health Check and scored ${scoreNum}/36. I have structural gaps in my revenue systems and want to discuss the Infrastructure Assessment to map a repair plan.`;
          break;
        case 'structured':
          prefilledMessage = `I completed the Revenue Health Check and scored ${scoreNum}/36. I have a solid foundation but identified specific gaps I would like to address through an Infrastructure Assessment.`;
          break;
        case 'optimized':
        case 'high_performer':
          prefilledMessage = `I completed the Revenue Health Check and scored ${scoreNum}/36. Despite the high score, I am experiencing friction and would like to explore whether an Assessment could identify hidden issues.`;
          break;
        default:
          prefilledMessage = `I completed the Revenue Health Check and scored ${scoreNum}/36. I would like to discuss next steps.`;
      }
      
      setFormData(prev => ({
        ...prev,
        message: prefilledMessage
      }));
    }
  }, [searchParams]);

  const validateField = (field: string, value: string | boolean | string[]): string => {
    if (typeof value === 'boolean') {
      return value ? "" : "Required";
    }
    
    if (Array.isArray(value)) {
      return value.length > 0 ? "" : "Select at least one service";
    }
    
    switch (field) {
      case "fullName":
        return value.trim().length > 0 ? "" : "Name required";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Valid email required";
      case "timeline":
        return value ? "" : "Timeline required";
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

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors(prev => {
        if (prev[field] === error) return prev;
        return { ...prev, [field]: error };
      });
    }
  };

  const handleServiceToggle = (serviceId: string) => {
    const currentServices = formData.servicesInterested;
    const newServices = currentServices.includes(serviceId)
      ? currentServices.filter(s => s !== serviceId)
      : [...currentServices, serviceId];
    
    handleInputChange("servicesInterested", newServices);
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
        canonicalUrl="/contact"
      />
      
      <Breadcrumbs />
      
      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="system-status mb-8">
              CONTACT
            </div>
            <h1 className="heading-page mb-4">
              Get Started
            </h1>
            <p className="text-description text-muted-foreground max-w-2xl mx-auto">
              Fill out the form. We'll respond within 24 hours with next steps.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="border-l-2 border-primary pl-8">
                <h2 className="heading-subsection mb-8">
                  Project Details
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="fullName" className="text-label mb-2 block">
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
                    </div>

                    {/* Company */}
                    <div>
                      <Label htmlFor="company" className="text-label mb-2 block">
                        Company
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your company name"
                        className="font-mono"
                      />
                    </div>

                    {/* Services Interested */}
                    <div>
                      <Label className="text-label mb-3 block">
                        Services You're Interested In *
                      </Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {services.map((service) => (
                          <div
                            key={service.id}
                            className={`relative flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                              formData.servicesInterested.includes(service.id)
                                ? 'border-primary bg-primary/5'
                                : 'border-border hover:border-primary/40'
                            }`}
                            onClick={() => handleServiceToggle(service.id)}
                          >
                          <input
                            type="checkbox"
                            id={service.id}
                            checked={formData.servicesInterested.includes(service.id)}
                            onChange={() => {}}
                            className="h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground pointer-events-none accent-primary"
                          />
                            <Label
                              htmlFor={service.id}
                              className="text-sm font-medium cursor-pointer flex-1"
                            >
                              {service.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                      {errors.servicesInterested && touched.servicesInterested && (
                        <p className="text-xs text-destructive mt-2">{errors.servicesInterested}</p>
                      )}
                    </div>

                    {/* Timeline & Budget Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="timeline" className="text-label mb-2 block">
                          Timeline *
                        </Label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={(e) => {
                            handleInputChange("timeline", e.target.value);
                            handleBlur("timeline");
                          }}
                          className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm font-mono ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                            errors.timeline && touched.timeline ? "border-destructive" : ""
                          }`}
                        >
                          <option value="" disabled>
                            When do you need this?
                          </option>
                          <option value="urgent">ASAP (within 2 weeks)</option>
                          <option value="soon">Soon (within 30 days)</option>
                          <option value="planning">Planning (30-90 days)</option>
                          <option value="exploring">Exploring options</option>
                        </select>
                        {errors.timeline && touched.timeline && (
                          <p className="text-xs text-destructive mt-1">{errors.timeline}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="budgetRange" className="text-label mb-2 block">
                          Project Readiness
                        </Label>
                        <select
                          id="budgetRange"
                          name="budgetRange"
                          value={formData.budgetRange}
                          onChange={(e) => {
                            handleInputChange("budgetRange", e.target.value);
                          }}
                          className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm font-mono ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="" disabled>
                            Select readiness (optional)
                          </option>
                          <option value="exploratory">Exploratory - learning options</option>
                          <option value="budgeted">Budgeted - ready to move</option>
                          <option value="urgent">Urgent - immediate need</option>
                          <option value="not-sure">Not sure yet</option>
                        </select>
                      </div>
                    </div>

                    {/* Current Setup (conditional) */}
                    {formData.servicesInterested.includes("salesforce") && (
                      <div>
                        <Label htmlFor="currentSetup" className="text-label mb-2 block">
                          Current Salesforce Setup
                        </Label>
                        <Input
                          id="currentSetup"
                          value={formData.currentSetup}
                          onChange={(e) => handleInputChange("currentSetup", e.target.value)}
                          placeholder="e.g., Sales Cloud, Service Cloud, custom objects..."
                          className="font-mono"
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Help us understand your current Salesforce implementation
                        </p>
                      </div>
                    )}

                    {/* Message */}
                    <div>
                      <Label htmlFor="message" className="text-label mb-2 block">
                        Project Details *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        onBlur={() => handleBlur("message")}
                        placeholder="What challenges are you facing? What outcomes do you need?"
                        required
                        className={`font-mono resize-none ${errors.message && touched.message ? 'border-destructive' : ''}`}
                        rows={5}
                      />
                      {errors.message && touched.message && (
                        <p className="text-xs text-destructive mt-1">{errors.message}</p>
                      )}
                    </div>

                    <div className="flex items-start gap-3 pt-4 border-t border-border/50">
                      <input
                        type="checkbox"
                        id="privacyConsent"
                        checked={formData.privacyConsent}
                        onChange={(e) => handleInputChange("privacyConsent", e.target.checked)}
                        className={`h-4 w-4 shrink-0 rounded-sm border ring-offset-background mt-0.5 accent-primary cursor-pointer ${errors.privacyConsent && touched.privacyConsent ? 'border-destructive' : 'border-primary'}`}
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
            <div className="lg:col-span-1">
              <div className="border-l-2 border-border pl-6 space-y-8">
                <div>
                  <h3 className="heading-subsection mb-4">
                    Direct Contact
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-description font-medium mb-1">Email</p>
                        <a href="mailto:hello@thecwtstudio.com" className="text-sm text-muted-foreground hover:text-primary font-mono">
                          hello@thecwtstudio.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-description font-medium mb-1">Response Time</p>
                        <p className="text-sm text-muted-foreground">24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border p-6">
                  <h3 className="text-label text-primary mb-4">
                    What Happens Next
                  </h3>
                  <ul className="space-y-3 text-description text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                      <span>We review your project</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                      <span>You get next steps + pricing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2"></span>
                      <span>Schedule a call if it fits</span>
                    </li>
                  </ul>
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
