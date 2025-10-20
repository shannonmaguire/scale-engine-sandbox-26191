import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ProgressiveForm } from "@/components/ProgressiveForm";
import { FormField } from "@/components/FormField";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import analytics from "@/lib/analytics";
import { formRateLimiter } from "@/lib/formRateLimit";

interface PartnerApplicationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Phone number is required").max(20),
  linkedin: z.string().trim().url("Must be a valid URL").max(255).optional().or(z.literal("")),
});

const companySchema = z.object({
  companyName: z.string().trim().min(2, "Company name is required").max(100),
  website: z.string().trim().url("Must be a valid URL").max(255).optional().or(z.literal("")),
  yearsInBusiness: z.string().min(1, "Please select years in business"),
  teamSize: z.string().min(1, "Please select team size"),
});

const experienceSchema = z.object({
  primaryExpertise: z.string().min(1, "Please select your expertise"),
  certifications: z.string().trim().max(500),
  yearsOfExperience: z.string().min(1, "Please select years of experience"),
  revenueRange: z.string().min(1, "Please select revenue range"),
});

const trackSchema = z.object({
  desiredTrack: z.string().min(1, "Please select a track"),
  whyPartner: z.string().trim().min(50, "Please provide at least 50 characters").max(1000),
  clientExample: z.string().trim().min(50, "Please provide at least 50 characters").max(1000),
});

export const PartnerApplicationModal = ({ open, onOpenChange }: PartnerApplicationModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form data state
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
  });

  const [companyData, setCompanyData] = useState({
    companyName: "",
    website: "",
    yearsInBusiness: "",
    teamSize: "",
  });

  const [experienceData, setExperienceData] = useState({
    primaryExpertise: "",
    certifications: "",
    yearsOfExperience: "",
    revenueRange: "",
  });

  const [trackData, setTrackData] = useState({
    desiredTrack: "",
    whyPartner: "",
    clientExample: "",
  });

  const validateContactInfo = () => {
    try {
      contactSchema.parse(contactData);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          variant: "destructive",
          title: "Validation Error",
          description: error.errors[0].message,
        });
      }
      return false;
    }
  };

  const validateCompanyInfo = () => {
    try {
      companySchema.parse(companyData);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          variant: "destructive",
          title: "Validation Error",
          description: error.errors[0].message,
        });
      }
      return false;
    }
  };

  const validateExperience = () => {
    try {
      experienceSchema.parse(experienceData);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          variant: "destructive",
          title: "Validation Error",
          description: error.errors[0].message,
        });
      }
      return false;
    }
  };

  const validateTrack = () => {
    try {
      trackSchema.parse(trackData);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          variant: "destructive",
          title: "Validation Error",
          description: error.errors[0].message,
        });
      }
      return false;
    }
  };

  const handleSubmit = async () => {
    // Rate limiting check
    const rateLimitCheck = formRateLimiter.checkLimit("partner-application");
    if (!rateLimitCheck.allowed) {
      toast({
        variant: "destructive",
        title: "Too Many Submissions",
        description: `Please wait ${Math.ceil((rateLimitCheck.blockedFor || 0) / 60)} minutes before submitting again.`,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const applicationData = {
        ...contactData,
        ...companyData,
        ...experienceData,
        ...trackData,
        submittedAt: new Date().toISOString(),
      };

      // Analytics tracking
      analytics.trackEvent("partner_application_submitted", {
        event_category: "Partner",
        event_label: trackData.desiredTrack,
      });

      // Placeholder: Send to HubSpot/Airtable
      const hubspotUrl = "https://api.hsforms.com/submissions/v3/integration/submit/PORTAL_ID/FORM_GUID";
      const airtableUrl = "https://api.airtable.com/v0/BASE_ID/Partner%20Applications";

      // In production, make actual API calls here
      console.log("Partner Application Data:", applicationData);
      console.log("Would POST to:", hubspotUrl);
      console.log("Would POST to:", airtableUrl);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Record rate limit attempt
      formRateLimiter.recordAttempt("partner-application");

      toast({
        title: "Application Submitted!",
        description: "Thank you for applying. We'll review your application within 2-3 business days.",
      });

      // Close modal and reset form
      onOpenChange(false);
      setTimeout(() => {
        setContactData({ fullName: "", email: "", phone: "", linkedin: "" });
        setCompanyData({ companyName: "", website: "", yearsInBusiness: "", teamSize: "" });
        setExperienceData({ primaryExpertise: "", certifications: "", yearsOfExperience: "", revenueRange: "" });
        setTrackData({ desiredTrack: "", whyPartner: "", clientExample: "" });
      }, 300);

    } catch (error) {
      console.error("Application submission error:", error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formSteps = [
    {
      id: "contact",
      title: "Contact Information",
      description: "Let's start with your contact details.",
      validate: validateContactInfo,
      content: (
        <div className="space-y-4">
          <FormField
            label="Full Name"
            id="fullName"
            required
            value={contactData.fullName}
            onChange={(value) => setContactData({ ...contactData, fullName: value })}
          />
          <FormField
            label="Email"
            id="email"
            type="email"
            required
            value={contactData.email}
            onChange={(value) => setContactData({ ...contactData, email: value })}
          />
          <FormField
            label="Phone"
            id="phone"
            type="tel"
            required
            value={contactData.phone}
            onChange={(value) => setContactData({ ...contactData, phone: value })}
          />
          <FormField
            label="LinkedIn Profile"
            id="linkedin"
            placeholder="https://linkedin.com/in/yourprofile"
            value={contactData.linkedin}
            onChange={(value) => setContactData({ ...contactData, linkedin: value })}
          />
        </div>
      ),
    },
    {
      id: "company",
      title: "Company Information",
      description: "Tell us about your company or practice.",
      validate: validateCompanyInfo,
      content: (
        <div className="space-y-4">
          <FormField
            label="Company Name"
            id="companyName"
            required
            value={companyData.companyName}
            onChange={(value) => setCompanyData({ ...companyData, companyName: value })}
          />
          <FormField
            label="Website"
            id="website"
            placeholder="https://yourcompany.com"
            value={companyData.website}
            onChange={(value) => setCompanyData({ ...companyData, website: value })}
          />
          <div className="space-y-2">
            <Label htmlFor="yearsInBusiness" className="font-mono text-sm font-medium flex items-center gap-2">
              Years in Business
              <span className="text-destructive">*</span>
            </Label>
            <Select
              value={companyData.yearsInBusiness}
              onValueChange={(value) => setCompanyData({ ...companyData, yearsInBusiness: value })}
              required
            >
              <SelectTrigger className="font-mono">
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-1">Less than 1 year</SelectItem>
                <SelectItem value="1-3">1-3 years</SelectItem>
                <SelectItem value="3-5">3-5 years</SelectItem>
                <SelectItem value="5-10">5-10 years</SelectItem>
                <SelectItem value="10+">10+ years</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="teamSize" className="font-mono text-sm font-medium flex items-center gap-2">
              Team Size
              <span className="text-destructive">*</span>
            </Label>
            <Select
              value={companyData.teamSize}
              onValueChange={(value) => setCompanyData({ ...companyData, teamSize: value })}
              required
            >
              <SelectTrigger className="font-mono">
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="solo">Solo practitioner</SelectItem>
                <SelectItem value="2-5">2-5 people</SelectItem>
                <SelectItem value="6-10">6-10 people</SelectItem>
                <SelectItem value="11-25">11-25 people</SelectItem>
                <SelectItem value="25+">25+ people</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      ),
    },
    {
      id: "experience",
      title: "Experience & Expertise",
      description: "Share your background and capabilities.",
      validate: validateExperience,
      content: (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="primaryExpertise" className="font-mono text-sm font-medium flex items-center gap-2">
              Primary Expertise
              <span className="text-destructive">*</span>
            </Label>
            <Select
              value={experienceData.primaryExpertise}
              onValueChange={(value) => setExperienceData({ ...experienceData, primaryExpertise: value })}
              required
            >
              <SelectTrigger className="font-mono">
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="revops">Revenue Operations</SelectItem>
                <SelectItem value="salesforce">Salesforce Implementation</SelectItem>
                <SelectItem value="salesops">Sales Operations</SelectItem>
                <SelectItem value="marketingops">Marketing Operations</SelectItem>
                <SelectItem value="fractional">Fractional Leadership</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="yearsOfExperience" className="font-mono text-sm font-medium flex items-center gap-2">
              Years of Experience
              <span className="text-destructive">*</span>
            </Label>
            <Select
              value={experienceData.yearsOfExperience}
              onValueChange={(value) => setExperienceData({ ...experienceData, yearsOfExperience: value })}
              required
            >
              <SelectTrigger className="font-mono">
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3-5">3-5 years</SelectItem>
                <SelectItem value="5-10">5-10 years</SelectItem>
                <SelectItem value="10-15">10-15 years</SelectItem>
                <SelectItem value="15+">15+ years</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <FormField
            label="Certifications"
            id="certifications"
            type="textarea"
            placeholder="e.g., Salesforce Admin, Architect, HubSpot, etc."
            value={experienceData.certifications}
            onChange={(value) => setExperienceData({ ...experienceData, certifications: value })}
          />
          <div className="space-y-2">
            <Label htmlFor="revenueRange" className="font-mono text-sm font-medium flex items-center gap-2">
              Annual Revenue Range
              <span className="text-destructive">*</span>
            </Label>
            <Select
              value={experienceData.revenueRange}
              onValueChange={(value) => setExperienceData({ ...experienceData, revenueRange: value })}
              required
            >
              <SelectTrigger className="font-mono">
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-100k">$0-$100K</SelectItem>
                <SelectItem value="100k-250k">$100K-$250K</SelectItem>
                <SelectItem value="250k-500k">$250K-$500K</SelectItem>
                <SelectItem value="500k-1m">$500K-$1M</SelectItem>
                <SelectItem value="1m+">$1M+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      ),
    },
    {
      id: "track",
      title: "Partnership Track",
      description: "Choose your engagement model and tell us why.",
      validate: validateTrack,
      content: (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="desiredTrack" className="font-mono text-sm font-medium flex items-center gap-2">
              Desired Track
              <span className="text-destructive">*</span>
            </Label>
            <Select
              value={trackData.desiredTrack}
              onValueChange={(value) => setTrackData({ ...trackData, desiredTrack: value })}
              required
            >
              <SelectTrigger className="font-mono">
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="referral">Referral Partner (15% commission)</SelectItem>
                <SelectItem value="delivery">Delivery Partner (30-40% revenue share)</SelectItem>
                <SelectItem value="strategic">Strategic Partner (50% revenue share)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <FormField
            label="Why Partner With CWT Studio?"
            id="whyPartner"
            type="textarea"
            required
            placeholder="What attracts you to this partnership? What are you hoping to achieve?"
            value={trackData.whyPartner}
            onChange={(value) => setTrackData({ ...trackData, whyPartner: value })}
            helpText="Minimum 50 characters"
          />
          <FormField
            label="Example Client Success"
            id="clientExample"
            type="textarea"
            required
            placeholder="Describe a recent project where you delivered exceptional results."
            value={trackData.clientExample}
            onChange={(value) => setTrackData({ ...trackData, clientExample: value })}
            helpText="Minimum 50 characters"
          />
        </div>
      ),
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-mono font-bold text-foreground">
            Apply to the Operator Network
          </DialogTitle>
          <DialogDescription className="font-mono text-muted-foreground">
            Join CWT Studio's partner network and deliver Fortune 500-level revenue systems.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6">
          <ProgressiveForm
            steps={formSteps}
            onComplete={handleSubmit}
            isSubmitting={isSubmitting}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
