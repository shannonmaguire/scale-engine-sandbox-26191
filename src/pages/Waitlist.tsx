import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, CheckCircle } from "lucide-react";

const Waitlist = () => {
  return (
    <>
      <SEOHead
        title="Join the Waitlist | CWT Studio"
        description="Currently at capacity. Join the waitlist to be notified when we open new project slots."
        canonicalUrl="/waitlist"
      />

      <main className="min-h-screen bg-background">
        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Hero */}
        <section className="pt-16 pb-16 sm:pt-20 sm:pb-20 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center">
              <p className="font-mono text-sm uppercase tracking-wider text-muted-foreground mb-4">
                Currently at capacity
              </p>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
                Join the Waitlist
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We take on a limited number of clients to ensure quality delivery. 
                Join the waitlist to secure your spot when capacity opens.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid gap-12 lg:grid-cols-5">
              {/* Form */}
              <div className="lg:col-span-3">
                <div className="border border-border p-6 sm:p-8">
                  <h2 className="text-xl font-semibold mb-6">Reserve Your Spot</h2>
                  <WaitlistForm />
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2 space-y-6">
                {/* What to Expect */}
                <div className="border border-border p-6">
                  <h3 className="font-semibold mb-4">What to Expect</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>Confirmation email with your queue position</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>Priority notification when spots open</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>No commitment required until you're ready</span>
                    </li>
                  </ul>
                </div>

                {/* Timeline */}
                <div className="border border-border p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4" />
                    <h3 className="font-semibold">Typical Timeline</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We operate in 90-day cycles. New capacity typically opens at the 
                    end of each cycle. Current waitlist members get first priority.
                  </p>
                </div>

                {/* Health Check CTA */}
                <div className="border border-foreground bg-muted/30 p-6">
                  <h3 className="font-semibold mb-2">While You Wait</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Take the free Revenue Health Check to assess your current 
                    infrastructure and identify priority areas.
                  </p>
                  <Link
                    to="/self-assessment"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                  >
                    Start Health Check
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-20 border-t border-border bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-semibold mb-8">Frequently Asked</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-medium mb-2">How long is the typical wait?</h3>
                <p className="text-sm text-muted-foreground">
                  Depends on current queue depth. We'll give you an estimate in 
                  your confirmation email based on your position.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Can I skip the waitlist?</h3>
                <p className="text-sm text-muted-foreground">
                  For urgent situations, email hello@cwtstudio.com directly. 
                  We occasionally accommodate critical timelines.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">What happens when my spot opens?</h3>
                <p className="text-sm text-muted-foreground">
                  We'll email you to schedule a discovery call. You'll have 
                  7 days to respond before we move to the next person.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Is there any cost to join?</h3>
                <p className="text-sm text-muted-foreground">
                  No. The waitlist is free with no commitment. You only pay 
                  when you decide to move forward with an engagement.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Waitlist;
