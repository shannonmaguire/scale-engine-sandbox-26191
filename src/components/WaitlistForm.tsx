import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Check } from "lucide-react";

const serviceOptions = [
  { id: "assessment", label: "Infrastructure Assessment" },
  { id: "sprint", label: "90-Day Revenue Sprint" },
  { id: "fractional", label: "Fractional Ops" },
  { id: "web", label: "Web Systems" },
  { id: "salesforce", label: "Salesforce" },
];

interface WaitlistFormProps {
  onSuccess?: (queuePosition: number) => void;
  compact?: boolean;
}

export const WaitlistForm = ({ onSuccess, compact = false }: WaitlistFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [queuePosition, setQueuePosition] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    company: "",
    service_interest: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Insert into waitlist
      const { data, error } = await supabase
        .from("waitlist")
        .insert({
          full_name: formData.full_name,
          email: formData.email,
          company: formData.company || null,
          service_interest: formData.service_interest || null,
          message: formData.message || null,
        })
        .select("queue_position")
        .single();

      if (error) {
        if (error.code === "23505") {
          toast({
            title: "Already on the list",
            description: "This email is already on our waitlist. We'll be in touch soon.",
          });
        } else {
          throw error;
        }
        return;
      }

      // Send confirmation email
      try {
        await supabase.functions.invoke("send-waitlist-confirmation", {
          body: {
            email: formData.email,
            full_name: formData.full_name,
            queue_position: data.queue_position,
          },
        });
      } catch (emailError) {
        console.error("Email error:", emailError);
        // Don't fail the whole submission if email fails
      }

      setQueuePosition(data.queue_position);
      setSubmitted(true);
      onSuccess?.(data.queue_position);

      toast({
        title: "You're on the list",
        description: `Position #${data.queue_position}. We'll reach out when capacity opens.`,
      });
    } catch (error) {
      console.error("Waitlist error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or email hello@cwtstudio.com directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted && queuePosition) {
    return (
      <div className="border border-foreground bg-background p-8 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 border border-foreground mb-4">
          <Check className="w-6 h-6" />
        </div>
        <p className="font-mono text-sm uppercase tracking-wider mb-2">
          Position #{queuePosition}
        </p>
        <h3 className="text-xl font-semibold mb-2">You're on the list</h3>
        <p className="text-muted-foreground text-sm">
          We'll reach out when capacity opens. Check your email for confirmation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="full_name" className="text-sm font-medium">
            Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="full_name"
            type="text"
            required
            value={formData.full_name}
            onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
            className="border-foreground/20 focus:border-foreground"
            placeholder="Your name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border-foreground/20 focus:border-foreground"
            placeholder="you@company.com"
          />
        </div>
      </div>

      {!compact && (
        <>
          <div className="space-y-2">
            <Label htmlFor="company" className="text-sm font-medium">
              Company
            </Label>
            <Input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="border-foreground/20 focus:border-foreground"
              placeholder="Company name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service_interest" className="text-sm font-medium">
              Service Interest
            </Label>
            <select
              id="service_interest"
              value={formData.service_interest}
              onChange={(e) => setFormData({ ...formData, service_interest: e.target.value })}
              className="flex h-12 w-full rounded-md border border-foreground/20 bg-background px-3 py-2 text-base focus:border-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 sm:h-10 md:text-sm"
            >
              <option value="">Select a service (optional)</option>
              {serviceOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">
              Brief message
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="border-foreground/20 focus:border-foreground min-h-[80px]"
              placeholder="What are you looking to accomplish?"
            />
          </div>
        </>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-12 font-mono text-sm uppercase tracking-wider"
      >
        {isSubmitting ? "Submitting..." : "Join Waitlist"}
      </Button>
    </form>
  );
};
