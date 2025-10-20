import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Send, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { z } from "zod";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Section } from "@/components/ui/section";
import { StandardCard, StandardCardHeader, StandardCardTitle, StandardCardDescription, StandardCardContent } from "@/components/ui/standard-card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import analytics from "@/lib/analytics";
import { callJsonFunction } from "@/lib/serverless";

// Validation schema
const aeSupportSchema = z.object({
  aeName: z.string().min(2, "Name must be at least 2 characters").max(100),
  aeEmail: z.string().email("Invalid email address").max(255),
  aeCompany: z.string().min(2, "Company name required").max(100),
  prospectCompany: z.string().min(2, "Prospect company required").max(100),
  prospectContact: z.string().min(2, "Contact name required").max(100),
  dealSize: z.enum(["< $25K", "$25K - $50K", "$50K - $100K", "$100K - $250K", "> $250K"]),
  urgency: z.enum(["CRITICAL", "HIGH", "MEDIUM", "GENERAL"]),
  supportNeeded: z.string().min(10, "Please describe support needed (min 10 characters)").max(500),
  technicalChallenges: z.string().min(50, "Please provide details (min 50 characters)").max(1000),
  timeline: z.string().min(10, "Timeline required").max(200)
});
type AESupportFormData = z.infer<typeof aeSupportSchema>;
const urgencyLevels = [{
  value: "CRITICAL",
  label: "CRITICAL - Deal at risk",
  time: "4 hours",
  color: "text-destructive"
}, {
  value: "HIGH",
  label: "HIGH - Urgent support needed",
  time: "24 hours",
  color: "text-warm"
}, {
  value: "MEDIUM",
  label: "MEDIUM - Scheduled support",
  time: "48 hours",
  color: "text-accent-data"
}, {
  value: "GENERAL",
  label: "GENERAL - Info request",
  time: "3-5 days",
  color: "text-muted-foreground"
}];
const AETechnicalSupport = () => {
  const [formData, setFormData] = useState<AESupportFormData>({
    aeName: "",
    aeEmail: "",
    aeCompany: "",
    prospectCompany: "",
    prospectContact: "",
    dealSize: "< $25K",
    urgency: "MEDIUM",
    supportNeeded: "",
    technicalChallenges: "",
    timeline: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof AESupportFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const navigate = useNavigate();
  const selectedUrgency = urgencyLevels.find(u => u.value === formData.urgency);
  const handleChange = (field: keyof AESupportFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Track form submission attempt
    analytics.trackEvent('ae_support_form_submit_attempt', {
      urgency: formData.urgency,
      dealSize: formData.dealSize
    });

    // Validate
    const result = aeSupportSchema.safeParse(formData);
    if (!result.success) {
      const validationErrors: Partial<Record<keyof AESupportFormData, string>> = {};
      result.error.errors.forEach(err => {
        const field = err.path[0] as keyof AESupportFormData;
        validationErrors[field] = err.message;
      });
      setErrors(validationErrors);
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please check all required fields."
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const { response, data } = await callJsonFunction<
        AESupportFormData,
        { error?: string; success?: boolean }
      >("send-ae-support", formData);

      if (!response.ok) {
        throw new Error(data?.error || "Failed to submit support request");
      }

      // Track successful submission
      analytics.trackEvent('ae_support_form_success', {
        urgency: formData.urgency,
        dealSize: formData.dealSize
      });
      toast({
        title: "Support Request Submitted",
        description: `Expected response time: ${selectedUrgency?.time}`
      });

      // Reset form
      setFormData({
        aeName: "",
        aeEmail: "",
        aeCompany: "",
        prospectCompany: "",
        prospectContact: "",
        dealSize: "< $25K",
        urgency: "MEDIUM",
        supportNeeded: "",
        technicalChallenges: "",
        timeline: ""
      });

      // Navigate back to AE Hub after 2 seconds
      setTimeout(() => navigate("/ae-hub"), 2000);
    } catch (error) {
      console.error("Form submission error:", error);
      analytics.trackEvent('ae_support_form_error', {
        error: error instanceof Error ? error.message : 'Unknown error'
      });
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "Please try again or contact us directly."
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <>
      <SEOHead title="Request Technical Support | AE Hub | CWT Studio" description="Get expert technical support on Salesforce deals. Our team provides rapid response based on urgency level." canonicalUrl="https://coalescentwebtech.com/ae-support" />

      {/* Header */}
      <Section noPadding className="pt-20 pb-12 border-b border-border">
        

        <div className="system-status mb-8">TECHNICAL SUPPORT REQUEST</div>
        
        <h1 className="heading-page mb-6">
          Request Technical Support
        </h1>
        
        <p className="text-description max-w-3xl">
          Fill out the form below and we'll respond based on urgency level. Critical deals get answers in 4 hours.
        </p>
      </Section>

      {/* Main Form */}
      <Section className="pt-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form Column */}
          <div className="lg:col-span-2">
            <StandardCard>
              <StandardCardHeader>
                <StandardCardTitle>Support Request Details</StandardCardTitle>
                <StandardCardDescription>
                  Provide as much context as possible to help us respond effectively.
                </StandardCardDescription>
              </StandardCardHeader>
              <StandardCardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* AE Information */}
                  <div className="space-y-4">
                    <div className="text-sm font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                      Your Information
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="aeName">Your Name *</Label>
                        <Input id="aeName" value={formData.aeName} onChange={e => handleChange("aeName", e.target.value)} placeholder="John Doe" className={errors.aeName ? "border-destructive" : ""} />
                        {errors.aeName && <p className="text-xs text-destructive mt-1">{errors.aeName}</p>}
                      </div>

                      <div>
                        <Label htmlFor="aeEmail">Your Email *</Label>
                        <Input id="aeEmail" type="email" value={formData.aeEmail} onChange={e => handleChange("aeEmail", e.target.value)} placeholder="john@company.com" className={errors.aeEmail ? "border-destructive" : ""} />
                        {errors.aeEmail && <p className="text-xs text-destructive mt-1">{errors.aeEmail}</p>}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="aeCompany">Your Company *</Label>
                      <Input id="aeCompany" value={formData.aeCompany} onChange={e => handleChange("aeCompany", e.target.value)} placeholder="Acme Corp" className={errors.aeCompany ? "border-destructive" : ""} />
                      {errors.aeCompany && <p className="text-xs text-destructive mt-1">{errors.aeCompany}</p>}
                    </div>
                  </div>

                  {/* Prospect Information */}
                  <div className="space-y-4 pt-4 border-t border-border">
                    <div className="text-sm font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                      Prospect Details
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="prospectCompany">Prospect Company *</Label>
                        <Input id="prospectCompany" value={formData.prospectCompany} onChange={e => handleChange("prospectCompany", e.target.value)} placeholder="Target Corp" className={errors.prospectCompany ? "border-destructive" : ""} />
                        {errors.prospectCompany && <p className="text-xs text-destructive mt-1">{errors.prospectCompany}</p>}
                      </div>

                      <div>
                        <Label htmlFor="prospectContact">Prospect Contact *</Label>
                        <Input id="prospectContact" value={formData.prospectContact} onChange={e => handleChange("prospectContact", e.target.value)} placeholder="Jane Smith" className={errors.prospectContact ? "border-destructive" : ""} />
                        {errors.prospectContact && <p className="text-xs text-destructive mt-1">{errors.prospectContact}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Deal Details */}
                  <div className="space-y-4 pt-4 border-t border-border">
                    <div className="text-sm font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                      Deal Information
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="dealSize">Deal Size *</Label>
                        <Select value={formData.dealSize} onValueChange={val => handleChange("dealSize", val)}>
                          <SelectTrigger id="dealSize">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="< $25K">&lt; $25K</SelectItem>
                            <SelectItem value="$25K - $50K">$25K - $50K</SelectItem>
                            <SelectItem value="$50K - $100K">$50K - $100K</SelectItem>
                            <SelectItem value="$100K - $250K">$100K - $250K</SelectItem>
                            <SelectItem value="> $250K">&gt; $250K</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="urgency">Urgency Level *</Label>
                        <Select value={formData.urgency} onValueChange={val => handleChange("urgency", val)}>
                          <SelectTrigger id="urgency">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {urgencyLevels.map(level => <SelectItem key={level.value} value={level.value}>
                                {level.label}
                              </SelectItem>)}
                          </SelectContent>
                        </Select>
                        {selectedUrgency && <p className={`text-xs mt-1 flex items-center gap-1 ${selectedUrgency.color}`}>
                            <Clock className="w-3 h-3" />
                            Response time: {selectedUrgency.time}
                          </p>}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="timeline">Deal Timeline *</Label>
                      <Input id="timeline" value={formData.timeline} onChange={e => handleChange("timeline", e.target.value)} placeholder="e.g., Close expected in 2 weeks, demo scheduled for Friday" className={errors.timeline ? "border-destructive" : ""} />
                      {errors.timeline && <p className="text-xs text-destructive mt-1">{errors.timeline}</p>}
                    </div>
                  </div>

                  {/* Technical Details */}
                  <div className="space-y-4 pt-4 border-t border-border">
                    <div className="text-sm font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                      Technical Details
                    </div>
                    
                    <div>
                      <Label htmlFor="supportNeeded">What support do you need? *</Label>
                      <Textarea id="supportNeeded" value={formData.supportNeeded} onChange={e => handleChange("supportNeeded", e.target.value)} placeholder="e.g., Join discovery call, validate technical approach, scope assessment" rows={3} className={errors.supportNeeded ? "border-destructive" : ""} />
                      {errors.supportNeeded && <p className="text-xs text-destructive mt-1">{errors.supportNeeded}</p>}
                    </div>

                    <div>
                      <Label htmlFor="technicalChallenges">Technical Challenges / Context *</Label>
                      <Textarea id="technicalChallenges" value={formData.technicalChallenges} onChange={e => handleChange("technicalChallenges", e.target.value)} placeholder="What technical issues or concerns has the prospect mentioned? Include system details, pain points, and any specific requirements." rows={5} className={errors.technicalChallenges ? "border-destructive" : ""} />
                      {errors.technicalChallenges && <p className="text-xs text-destructive mt-1">{errors.technicalChallenges}</p>}
                      <p className="text-xs text-muted-foreground mt-1">
                        {formData.technicalChallenges.length} / 1000 characters (min 50)
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full bg-accent-data hover:bg-accent-data/90 text-white" disabled={isSubmitting}>
                      {isSubmitting ? <>Processing...</> : <>
                          Submit Support Request
                          <Send className="w-4 h-4 ml-2" />
                        </>}
                    </Button>
                  </div>
                </form>
              </StandardCardContent>
            </StandardCard>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Response Times */}
            <StandardCard variant="bordered" className="border-accent-data/30">
              <StandardCardHeader>
                <StandardCardTitle className="text-lg flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent-data" />
                  Response Times
                </StandardCardTitle>
              </StandardCardHeader>
              <StandardCardContent>
                <div className="space-y-3">
                  {urgencyLevels.map(level => <div key={level.value} className="flex items-start justify-between gap-3 text-sm">
                      <span className={`font-mono font-semibold ${level.color}`}>
                        {level.value}
                      </span>
                      <span className="text-muted-foreground text-right">{level.time}</span>
                    </div>)}
                </div>
              </StandardCardContent>
            </StandardCard>

            {/* What We Provide */}
            <StandardCard variant="bordered" className="border-accent-data/30">
              <StandardCardHeader>
                <StandardCardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-data" aria-hidden="true" />
                  What We Provide
                </StandardCardTitle>
              </StandardCardHeader>
              <StandardCardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-data mt-0.5">•</span>
                    <span>Technical validation & scoping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-data mt-0.5">•</span>
                    <span>Prospect call support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-data mt-0.5">•</span>
                    <span>Deal-specific proposals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-data mt-0.5">•</span>
                    <span>ROI quantification</span>
                  </li>
                </ul>
              </StandardCardContent>
            </StandardCard>

            {/* Before You Submit */}
            <StandardCard variant="bordered" className="border-accent-data/30">
              <StandardCardHeader>
                <StandardCardTitle className="text-lg flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-data" aria-hidden="true" />
                  Before You Submit
                </StandardCardTitle>
              </StandardCardHeader>
              <StandardCardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Prospect's technical pain points</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Current Salesforce setup (if known)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Deal stage & timeline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Budget or deal size estimate</span>
                  </li>
                </ul>
              </StandardCardContent>
            </StandardCard>
          </div>
        </div>
      </Section>
    </>;
};
export default AETechnicalSupport;
