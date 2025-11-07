import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Section } from "@/components/ui/section";
import { StandardCard } from "@/components/ui/standard-card";
import { Button } from "@/components/ui/button";
import { DollarSign, FileText, BookOpen, TrendingUp, Clock, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { DealRegistrationModal } from "@/components/DealRegistrationModal";

const PartnerDashboard = () => {
  const navigate = useNavigate();
  const [dealModalOpen, setDealModalOpen] = useState(false);
  const [isPartner, setIsPartner] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState("");

  // Check authentication and partner role
  useEffect(() => {
    const checkAccess = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session) {
          navigate("/auth");
          return;
        }

        // Get user profile
        const { data: profile } = await supabase
          .from("profiles")
          .select("full_name")
          .eq("id", session.user.id)
          .maybeSingle();

        setUserName(profile?.full_name || session.user.email || "Partner");

        // Check partner role
        const { data: roles } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", session.user.id)
          .eq("role", "partner")
          .maybeSingle();

        if (!roles) {
          navigate("/");
          return;
        }

        setIsPartner(true);
      } catch (error) {
        console.error("Error checking access:", error);
        navigate("/auth");
      } finally {
        setIsLoading(false);
      }
    };

    checkAccess();
  }, [navigate]);

  if (isLoading) {
    return (
      <>
        <SEOHead 
          title="CWT Studio Partner Dashboard | Creator Wealth Tools Network"
          description="Secure dashboard for Creator Wealth Tools partners to monitor business automation deals, Salesforce delivery, and revenue share payouts."
          keywords={[
            'CWT Studio partner portal',
            'Creator Wealth Tools operators',
            'business automation referrals',
            'Salesforce delivery network',
            'partner revenue dashboard'
          ]}
          noindex
        />
        <div className="min-h-screen bg-background">
          <Navigation />
          <Section className="pt-32 pb-20">
            <div className="max-w-7xl mx-auto text-center">
              <p className="text-muted-foreground font-mono">Loading...</p>
            </div>
          </Section>
          <Footer />
        </div>
      </>
    );
  }

  if (!isPartner) {
    return null; // Will redirect in useEffect
  }

  // Sample data - in production, this would come from an API
  const sampleDeals = [
    {
      id: "DEAL-001",
      companyName: "Acme Corp",
      status: "In Progress",
      value: "$50,000",
      registeredDate: "2025-09-15",
    },
    {
      id: "DEAL-002",
      companyName: "TechStart Inc",
      status: "Closed Won",
      value: "$35,000",
      registeredDate: "2025-08-20",
    },
    {
      id: "DEAL-003",
      companyName: "Scale Solutions",
      status: "Pending Review",
      value: "$75,000",
      registeredDate: "2025-09-28",
    },
  ];

  const samplePayouts = [
    {
      id: "PAY-001",
      dealId: "DEAL-002",
      amount: "$10,500",
      status: "Processing",
      expectedDate: "2025-10-15",
    },
    {
      id: "PAY-002",
      dealId: "DEAL-001",
      amount: "$5,000",
      status: "Pending Milestone",
      expectedDate: "2025-10-30",
    },
  ];

  const resources = [
    {
      title: "Implementation Playbooks",
      description: "Step-by-step guides for every service offering",
      icon: BookOpen,
    },
    {
      title: "Partner Training",
      description: "Video courses and certification materials",
      icon: FileText,
    },
    {
      title: "Sales Resources",
      description: "Proposals, decks, and case studies",
      icon: TrendingUp,
    },
  ];

  return (
    <>
      <SEOHead 
        title="CWT Studio Partner Dashboard | Creator Wealth Tools Network"
        description="Secure dashboard for Creator Wealth Tools partners to monitor business automation deals, Salesforce delivery, and revenue share payouts."
        keywords={[
          'CWT Studio partner portal',
          'Creator Wealth Tools operators',
          'business automation referrals',
          'Salesforce delivery network',
          'partner revenue dashboard'
        ]}
        noindex
      />

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <Section className="pt-32 pb-20">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-mono font-bold mb-4 text-foreground">
              Welcome back, {userName}!
            </h1>
            <p className="text-lg text-muted-foreground font-mono">
              Here's your partnership overview.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <StandardCard>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-mono text-muted-foreground">Active Deals</span>
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="text-3xl font-mono font-bold text-foreground">3</div>
              </div>
            </StandardCard>

            <StandardCard>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-mono text-muted-foreground">Pending Payouts</span>
                  <DollarSign className="h-5 w-5 text-primary" />
                </div>
                <div className="text-3xl font-mono font-bold text-foreground">$15,500</div>
              </div>
            </StandardCard>

            <StandardCard>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-mono text-muted-foreground">Partner Tier</span>
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div className="text-3xl font-mono font-bold text-foreground">Bronze</div>
              </div>
            </StandardCard>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Registered Deals */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-mono font-bold text-foreground">Registered Deals</h2>
                <Button 
                  size="sm" 
                  onClick={() => setDealModalOpen(true)}
                  className="font-mono"
                >
                  Register New Deal
                </Button>
              </div>
              
              <div className="space-y-4">
                {sampleDeals.map((deal) => (
                  <StandardCard key={deal.id}>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-mono font-bold text-foreground">{deal.companyName}</h3>
                          <p className="text-sm font-mono text-muted-foreground">{deal.id}</p>
                        </div>
                        <span className="text-lg font-mono font-bold text-primary">{deal.value}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground">
                        <span className={`flex items-center gap-1 ${
                          deal.status === "Closed Won" ? "text-success" : 
                          deal.status === "In Progress" ? "text-primary" : 
                          "text-muted-foreground"
                        }`}>
                          {deal.status === "Closed Won" ? <CheckCircle2 className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
                          {deal.status}
                        </span>
                        <span>•</span>
                        <span>Registered {deal.registeredDate}</span>
                      </div>
                    </div>
                  </StandardCard>
                ))}
              </div>
            </div>

            {/* Pending Payouts */}
            <div>
              <h2 className="text-2xl font-mono font-bold text-foreground mb-6">Pending Payouts</h2>
              
              <div className="space-y-4">
                {samplePayouts.map((payout) => (
                  <StandardCard key={payout.id}>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-mono font-bold text-foreground">{payout.amount}</h3>
                          <p className="text-sm font-mono text-muted-foreground">{payout.dealId}</p>
                        </div>
                        <span className={`text-sm font-mono px-3 py-1 rounded ${
                          payout.status === "Processing" 
                            ? "bg-primary/10 text-primary" 
                            : "bg-muted text-muted-foreground"
                        }`}>
                          {payout.status}
                        </span>
                      </div>
                      <div className="text-sm font-mono text-muted-foreground">
                        Expected: {payout.expectedDate}
                      </div>
                    </div>
                  </StandardCard>
                ))}

                <StandardCard variant="muted">
                  <div className="p-6 text-center">
                    <DollarSign className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                    <p className="text-sm font-mono text-muted-foreground">
                      Payments are processed within 5 business days of milestone completion.
                    </p>
                  </div>
                </StandardCard>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-2xl font-mono font-bold text-foreground mb-6">Partner Resources</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {resources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <StandardCard key={index}>
                    <div className="p-6">
                      <Icon className="h-10 w-10 text-primary mb-4" />
                      <h3 className="font-mono font-bold text-foreground mb-2">{resource.title}</h3>
                      <p className="text-sm font-mono text-muted-foreground mb-4">{resource.description}</p>
                      <Button variant="outline" size="sm" className="font-mono">
                        Access Resources
                      </Button>
                    </div>
                  </StandardCard>
                );
              })}
            </div>
          </div>
        </Section>

        <Footer />
      </div>

      <DealRegistrationModal open={dealModalOpen} onOpenChange={setDealModalOpen} />
    </>
  );
};

export default PartnerDashboard;
