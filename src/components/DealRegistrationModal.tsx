import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { FormField } from "@/components/FormField";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import analytics from "@/lib/analytics";
import { formRateLimiter } from "@/lib/formRateLimit";
import { supabase } from "@/integrations/supabase/client";
import { Lock } from "lucide-react";

interface DealRegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

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
  const navigate = useNavigate();
  const [isPartner, setIsPartner] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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

  // Check if user is authenticated and has partner role
  useEffect(() => {
    const checkPartnerAccess = async () => {
      if (!open) return;
      
      setIsLoading(true);
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session) {
          setIsPartner(false);
          setIsLoading(false);
          return;
        }

        // Check if user has partner role
        const { data: roles, error } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", session.user.id)
          .eq("role", "partner")
          .maybeSingle();

        if (error) {
          console.error("Error checking partner role:", error);
          setIsPartner(false);
        } else {
          setIsPartner(!!roles);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setIsPartner(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkPartnerAccess();
  }, [open]);

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
      // Get current user
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        toast({
          variant: "destructive",
          title: "Authentication Required",
          description: "Please sign in to register deals.",
        });
        navigate("/auth");
        return;
      }

      // Insert deal into database
      const { error: insertError } = await supabase
        .from("deals")
        .insert({
          partner_id: session.user.id,
          client_name: dealData.contactName,
          client_email: dealData.contactEmail,
          client_phone: dealData.contactPhone,
          company_name: dealData.companyName,
          industry: dealData.serviceType,
          deal_size: dealData.estimatedValue,
          timeline: dealData.expectedCloseDate,
          services_interested: dealData.serviceType,
          current_challenge: dealData.projectDescription + (dealData.technicalRequirements ? `\n\nTechnical: ${dealData.technicalRequirements}` : ''),
        });

      if (insertError) throw insertError;

      // Analytics tracking
      analytics.trackEvent("deal_registered", {
        event_category: "Partner",
        event_label: dealData.serviceType,
        value: parseInt(dealData.estimatedValue.replace(/\D/g, "") || "0"),
      });

      // Record rate limit attempt
      formRateLimiter.recordAttempt("deal-registration");

      toast({
        title: "Deal Registered!",
        description: "Your deal has been registered. We'll reach out within 24 hours.",
      });

      // Close modal and reset form
      onOpenChange(false);
      setTimeout(() => {
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

    } catch (error: unknown) {
      console.error("Deal registration error:", error);
      const message =
        error instanceof Error
          ? error.message
          : "There was an error registering your deal. Please try again.";
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: message,
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
            {isLoading 
              ? "Checking access..."
              : isPartner
                ? "Register a new deal to protect your commission and get support."
                : "This portal is for approved partners only."}
          </DialogDescription>
        </DialogHeader>

        {isLoading ? (
          <div className="py-8 text-center">
            <p className="text-muted-foreground font-mono">Loading...</p>
          </div>
        ) : !isPartner ? (
          <div className="space-y-6 mt-4">
            <div className="space-y-4">
              <p className="text-muted-foreground font-mono">
                You need a partner account to register deals.
              </p>
              <p className="text-sm text-muted-foreground font-mono">
                Please sign in with a partner account or contact us to become a partner.
              </p>
            </div>
            <div className="flex gap-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => onOpenChange(false)}
                className="flex-1 font-mono"
              >
                Cancel
              </Button>
              <Button 
                type="button"
                onClick={() => {
                  onOpenChange(false);
                  navigate("/auth");
                }}
                className="flex-1 font-mono"
              >
                Sign In
              </Button>
            </div>
          </div>
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
