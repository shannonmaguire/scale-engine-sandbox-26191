import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { FormField } from "@/components/FormField";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import analytics from "@/lib/analytics";
import { formRateLimiter } from "@/lib/formRateLimit";
import { Lock } from "lucide-react";

interface DealRegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PARTNER_PASSWORD = "operator2025"; // In production, this would be a secure backend check

const dealSchema = z.object({
  companyName: z.string().trim().min(2, "Company name is required").max(100),
  contactName: z.string().trim().min(2, "Contact name is required").max(100),
  contactEmail: z.string().trim().email("Invalid email address").max(255),
  contactPhone: z.string().trim().min(10, "Phone number is required").max(20),
  estimatedValue: z.string().min(1, "Please select estimated value"),
  expectedCloseDate: z.string().min(1, "Expected close date is required"),
  serviceType: z.string().min(1, "Please select service type"),
  projectDescription: z.string().trim().min(50, "Please provide at least 50 characters").max(1000),
  technicalRequirements: z.string().trim().max(500),
});

export const DealRegistrationModal = ({ open, onOpenChange }: DealRegistrationModalProps) => {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [dealData, setDealData] = useState({
    companyName: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    estimatedValue: "",
    expectedCloseDate: "",
    serviceType: "",
    projectDescription: "",
    technicalRequirements: "",
  });

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PARTNER_PASSWORD) {
      setIsAuthenticated(true);
      analytics.trackEvent("deal_registration_access", {
        event_category: "Partner",
        event_label: "Success",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Invalid Password",
        description: "Please contact your partner manager for access.",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    try {
      dealSchema.parse(dealData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          variant: "destructive",
          title: "Validation Error",
          description: error.errors[0].message,
        });
        return;
      }
    }

    // Rate limiting check
    const rateLimitCheck = formRateLimiter.checkLimit("deal-registration");
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
      const registrationData = {
        ...dealData,
        submittedAt: new Date().toISOString(),
      };

      // Analytics tracking
      analytics.trackEvent("deal_registered", {
        event_category: "Partner",
        event_label: dealData.serviceType,
        value: parseInt(dealData.estimatedValue.replace(/\D/g, "") || "0"),
      });

      // Placeholder: Send to HubSpot/Airtable
      const hubspotUrl = "https://api.hsforms.com/submissions/v3/integration/submit/PORTAL_ID/DEAL_FORM_GUID";
      const airtableUrl = "https://api.airtable.com/v0/BASE_ID/Deal%20Registrations";

      // In production, make actual API calls here
      console.log("Deal Registration Data:", registrationData);
      console.log("Would POST to:", hubspotUrl);
      console.log("Would POST to:", airtableUrl);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Record rate limit attempt
      formRateLimiter.recordAttempt("deal-registration");

      toast({
        title: "Deal Registered!",
        description: "Your deal has been registered. We'll reach out within 24 hours.",
      });

      // Close modal and reset form
      onOpenChange(false);
      setTimeout(() => {
        setIsAuthenticated(false);
        setPassword("");
        setDealData({
          companyName: "",
          contactName: "",
          contactEmail: "",
          contactPhone: "",
          estimatedValue: "",
          expectedCloseDate: "",
          serviceType: "",
          projectDescription: "",
          technicalRequirements: "",
        });
      }, 300);

    } catch (error) {
      console.error("Deal registration error:", error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "There was an error registering your deal. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-mono font-bold text-foreground flex items-center gap-2">
            <Lock className="h-6 w-6 text-primary" />
            Partner Deal Registration
          </DialogTitle>
          <DialogDescription className="font-mono text-muted-foreground">
            {isAuthenticated 
              ? "Register a new deal to protect your commission and get support."
              : "This portal is for approved partners only."}
          </DialogDescription>
        </DialogHeader>

        {!isAuthenticated ? (
          <form onSubmit={handlePasswordSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="password" className="font-mono text-sm font-medium flex items-center gap-2">
                Partner Password
                <span className="text-destructive">*</span>
              </Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your partner password"
                className="font-mono"
              />
            </div>
            <Button type="submit" className="w-full font-mono">
              Access Deal Registration
            </Button>
            <p className="text-xs text-muted-foreground font-mono text-center">
              Don't have a password? Contact your partner manager.
            </p>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            <div className="space-y-4">
              <h3 className="font-mono font-bold text-foreground">Client Information</h3>
              
              <FormField
                label="Company Name"
                id="companyName"
                required
                value={dealData.companyName}
                onChange={(value) => setDealData({ ...dealData, companyName: value })}
              />
              
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  label="Contact Name"
                  id="contactName"
                  required
                  value={dealData.contactName}
                  onChange={(value) => setDealData({ ...dealData, contactName: value })}
                />
                <FormField
                  label="Contact Email"
                  id="contactEmail"
                  type="email"
                  required
                  value={dealData.contactEmail}
                  onChange={(value) => setDealData({ ...dealData, contactEmail: value })}
                />
              </div>

              <FormField
                label="Contact Phone"
                id="contactPhone"
                type="tel"
                required
                value={dealData.contactPhone}
                onChange={(value) => setDealData({ ...dealData, contactPhone: value })}
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-mono font-bold text-foreground">Deal Details</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="estimatedValue" className="font-mono text-sm font-medium flex items-center gap-2">
                    Estimated Value
                    <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={dealData.estimatedValue}
                    onValueChange={(value) => setDealData({ ...dealData, estimatedValue: value })}
                    required
                  >
                    <SelectTrigger className="font-mono">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10k-25k">$10K-$25K</SelectItem>
                      <SelectItem value="25k-50k">$25K-$50K</SelectItem>
                      <SelectItem value="50k-100k">$50K-$100K</SelectItem>
                      <SelectItem value="100k-250k">$100K-$250K</SelectItem>
                      <SelectItem value="250k+">$250K+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="expectedCloseDate" className="font-mono text-sm font-medium flex items-center gap-2">
                    Expected Close Date
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="expectedCloseDate"
                    type="date"
                    required
                    value={dealData.expectedCloseDate}
                    onChange={(e) => setDealData({ ...dealData, expectedCloseDate: e.target.value })}
                    className="font-mono"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="serviceType" className="font-mono text-sm font-medium flex items-center gap-2">
                  Service Type
                  <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={dealData.serviceType}
                  onValueChange={(value) => setDealData({ ...dealData, serviceType: value })}
                  required
                >
                  <SelectTrigger className="font-mono">
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="assessment">Revenue Assessment</SelectItem>
                    <SelectItem value="sprint">Revenue Sprint</SelectItem>
                    <SelectItem value="salesforce">Salesforce Implementation</SelectItem>
                    <SelectItem value="fractional">Fractional Operations</SelectItem>
                    <SelectItem value="custom">Custom Engagement</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <FormField
                label="Project Description"
                id="projectDescription"
                type="textarea"
                required
                placeholder="Describe the scope, timeline, and key deliverables..."
                value={dealData.projectDescription}
                onChange={(value) => setDealData({ ...dealData, projectDescription: value })}
                helpText="Minimum 50 characters"
              />

              <FormField
                label="Technical Requirements"
                id="technicalRequirements"
                type="textarea"
                placeholder="Any specific tech stack, integrations, or technical constraints..."
                value={dealData.technicalRequirements}
                onChange={(value) => setDealData({ ...dealData, technicalRequirements: value })}
              />
            </div>

            <div className="flex gap-4 pt-4 border-t border-border">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => onOpenChange(false)}
                className="flex-1 font-mono"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="flex-1 font-mono hover-lift hover-glow"
              >
                {isSubmitting ? "Registering..." : "Register Deal"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
