import { Button } from "@/components/ui/button";
import { StandardCard, StandardCardContent, StandardCardHeader, StandardCardTitle } from "@/components/ui/standard-card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, FileText, Slack, Calendar, BarChart3, Database, Zap, Settings, Users, MessageSquare, Clock } from "lucide-react";
import { ICON_SIZES, ICON_STROKE } from "@/lib/icon-config";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const Systems = () => {
  const toolsWired = [
    { name: "Google Sheets", icon: Database, description: "Single source of truth database" },
    { name: "Apollo/Sales Nav", icon: BarChart3, description: "Lead sources" },
    { name: "Instantly", icon: Zap, description: "Outreach engine" },
    { name: "Calendly", icon: Calendar, description: "Meeting capture" },
    { name: "Slack", icon: Slack, description: "Alerts and digest" },
    { name: "n8n", icon: FileText, description: "Workflow orchestration" }
  ];

  const whyItMatters = [
    "Less manual copy-paste",
    "No lost leads", 
    "Consistent follow up",
    "Daily performance visibility",
    "Built-in unsubscribe and bounce handling"
  ];

  const whatWeShip = [
    { item: "n8n workflow JSON", description: "Complete automation workflow ready to import" },
    { item: "Google Sheet template", description: "6 tabs: Raw_Leads_Import, Master_Leads, Replies, Bookings, Suppression_List, Errors" },
    { item: "Slack integration", description: "Real-time alerts and daily digest at 09:00 ET" },
    { item: "Operation runbook", description: "How to operate, pause, modify, and troubleshoot" }
  ];

  const comingSoon = [
    { name: "Inbound Automation v1", description: "Form to CRM to Slack with lead scoring", status: "Q1 2025" },
    { name: "Pipeline Hygiene Engine", description: "Auto-cleanup, duplicate detection, stage progression alerts", status: "Q1 2025" },
    { name: "Revenue Dashboard v1", description: "Real-time revenue metrics across all systems", status: "Q2 2025" }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Automation Systems Library | CWT Studio Creator Wealth Tools"
        description="Browse production-ready automation workflows, Salesforce integrations, and web/mobile playbooks from the CWT Studio Creator Wealth Tools library."
        keywords={[
          'automation systems library',
          'Creator Wealth Tools workflows',
          'business automation blueprints',
          'Salesforce integration kits',
          'web and mobile automation'
        ]}
        canonicalUrl="/systems"
      />
      <Breadcrumbs />
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <div className="console-line mx-auto mb-4 w-fit">
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-mono">Operator Engines</span>
            </div>
            <h1 className="heading-page mb-6 leading-tight">
              Production-ready automation systems
            </h1>
            <p className="text-description mb-8 max-w-3xl mx-auto">
              Production automation engines deployed during implementation sprints. Standard configuration, documented for operational handoff.
            </p>
          </div>
        </div>
      </section>

      {/* Outbound Automation v1 */}
      <section className="section-spacing bg-muted/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <Badge className="mb-4 system-badge bg-primary text-primary-foreground">
                  v1.0 • PRODUCTION READY
                </Badge>
                <h2 className="heading-section mb-6">
                  Outbound Automation v1
                </h2>
                <p className="text-lg text-muted-foreground mb-8 font-mono">
                  Lead ingestion → validation → outbound execution → response capture.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Outbound automation consolidates lead management in single-source Google Sheet infrastructure. 
                  Incoming leads undergo deduplication, validation, unique ID assignment. Validated records transmit 
                  to Instantly via API integration. Response webhooks trigger auto-classification and Slack notification 
                  routing. Calendly booking events write back to source sheet with parallel Slack broadcast. 
                  Daily digest at 09:00 ET reports: new lead volume, queued sends, reply distribution, bookings, error log. 
                  Complete documentation enables operational transfer without founder dependency.
                </p>

                <div className="mb-8">
                  <h3 className="font-mono text-lg font-bold mb-4">Why it matters</h3>
                  <div className="space-y-3">
                      {whyItMatters.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle size={ICON_SIZES.small} strokeWidth={ICON_STROKE.default} className="text-primary mr-3 flex-shrink-0" />
                        <span className="text-foreground font-mono text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="btn-console">
                  <Link to="/contact" className="flex items-center">
                    See the workflow
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="space-y-6">
                <StandardCard variant="bordered" className="p-6">
                  <StandardCardHeader>
                    <StandardCardTitle className="font-mono text-lg">Tools Wired</StandardCardTitle>
                  </StandardCardHeader>
                  <StandardCardContent>
                    <div className="grid grid-cols-2 gap-6">
                      {toolsWired.map((tool, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <tool.icon size={ICON_SIZES.medium} strokeWidth={ICON_STROKE.default} className="text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-mono text-sm font-medium">{tool.name}</div>
                            <div className="text-xs text-muted-foreground">{tool.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </StandardCardContent>
                </StandardCard>

                <StandardCard variant="bordered" className="p-6 md:p-8">
                  <StandardCardHeader>
                    <StandardCardTitle className="font-mono text-lg">The Flow</StandardCardTitle>
                  </StandardCardHeader>
                  <StandardCardContent>
                    <div className="space-y-4 text-sm font-mono">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        <span>Lead capture → Raw_Leads_Import</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        <span>Enrich & dedupe → Master_Leads</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        <span>Push to Instantly via API</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        <span>Webhook replies → auto-tag → Slack</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        <span>Calendly bookings → write-back</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        <span>Daily digest at 09:00 ET</span>
                      </div>
                    </div>
                  </StandardCardContent>
                </StandardCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Demo */}
      <section className="section-spacing">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="heading-section mb-4">See It In Action</h2>
            <p className="text-description">Live views from the Outbound Automation v1 system</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="dashboard" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 gap-2">
                <TabsTrigger value="dashboard" className="font-mono text-xs md:text-sm">Dashboard</TabsTrigger>
                <TabsTrigger value="leads" className="font-mono text-xs md:text-sm">Leads</TabsTrigger>
                <TabsTrigger value="replies" className="font-mono text-xs md:text-sm">Replies</TabsTrigger>
                <TabsTrigger value="bookings" className="font-mono text-xs md:text-sm">Bookings</TabsTrigger>
                <TabsTrigger value="settings" className="font-mono text-xs md:text-sm">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="dashboard" className="mt-0">
                <StandardCard variant="bordered" className="overflow-hidden">
                  <StandardCardContent className="p-0">
                    <div className="p-6 border-b border-border">
                      <h3 className="font-mono text-lg font-bold mb-2">System Overview</h3>
                      <p className="text-sm text-muted-foreground">Real-time metrics and pipeline health monitoring</p>
                    </div>
                    
                    <div className="p-6">
                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
                        <StandardCard className="p-5 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                          <div className="text-sm font-mono text-muted-foreground mb-1">New Leads</div>
                          <div className="text-3xl font-bold text-primary mb-2">142</div>
                          <div className="text-xs text-emerald-600 flex items-center gap-1">
                            <span>+12%</span>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </StandardCard>

                        <StandardCard className="p-5 bg-gradient-to-br from-amber-500/5 to-amber-500/10 border-amber-500/20">
                          <div className="text-sm font-mono text-muted-foreground mb-1">Queued</div>
                          <div className="text-3xl font-bold text-amber-600 mb-2">89</div>
                          <div className="text-xs text-red-500 flex items-center gap-1">
                            <span>-3%</span>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </StandardCard>

                        <StandardCard className="p-5 bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 border-emerald-500/20">
                          <div className="text-sm font-mono text-muted-foreground mb-1">Replies</div>
                          <div className="text-3xl font-bold text-emerald-600 mb-2">23</div>
                          <div className="text-xs text-emerald-600 flex items-center gap-1">
                            <span>+8%</span>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </StandardCard>

                        <StandardCard className="p-5 bg-gradient-to-br from-violet-500/5 to-violet-500/10 border-violet-500/20">
                          <div className="text-sm font-mono text-muted-foreground mb-1">Bookings</div>
                          <div className="text-3xl font-bold text-violet-600 mb-2">7</div>
                          <div className="text-xs text-muted-foreground">Steady</div>
                        </StandardCard>

                        <StandardCard className="p-5 bg-gradient-to-br from-red-500/5 to-red-500/10 border-red-500/20">
                          <div className="text-sm font-mono text-muted-foreground mb-1">Errors</div>
                          <div className="text-3xl font-bold text-red-600 mb-2">2</div>
                          <div className="text-xs text-emerald-600 flex items-center gap-1">
                            <span>-50%</span>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </StandardCard>
                      </div>

                      {/* Activity Feed */}
                      <div className="grid grid-cols-2 gap-6">
                        <StandardCard className="p-4">
                          <h4 className="font-mono font-bold text-sm mb-4">Recent Activity</h4>
                          <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-3 p-2 rounded bg-emerald-500/10">
                              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                              <div className="flex-1">
                                <div className="font-medium">Marco Ruiz replied</div>
                                <div className="text-xs text-muted-foreground">Interested in learning more</div>
                              </div>
                              <div className="text-xs text-muted-foreground">2m ago</div>
                            </div>
                            <div className="flex items-center gap-3 p-2 rounded">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <div className="flex-1">
                                <div className="font-medium">8 new leads imported</div>
                                <div className="text-xs text-muted-foreground">From Apollo batch #47</div>
                              </div>
                              <div className="text-xs text-muted-foreground">5m ago</div>
                            </div>
                            <div className="flex items-center gap-3 p-2 rounded bg-violet-500/10">
                              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                              <div className="flex-1">
                                <div className="font-medium">Meeting booked</div>
                                <div className="text-xs text-muted-foreground">Jane Doe - TelecomOne</div>
                              </div>
                              <div className="text-xs text-muted-foreground">8m ago</div>
                            </div>
                          </div>
                        </StandardCard>

                        <StandardCard className="p-4">
                          <h4 className="font-mono font-bold text-sm mb-4">Pipeline Health</h4>
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Reply Rate</span>
                                <span className="font-mono">16.2%</span>
                              </div>
                              <div className="h-2 bg-muted rounded-full">
                                <div className="h-2 bg-emerald-500 rounded-full" style={{ width: '16.2%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Booking Rate</span>
                                <span className="font-mono">30.4%</span>
                              </div>
                              <div className="h-2 bg-muted rounded-full">
                                <div className="h-2 bg-violet-500 rounded-full" style={{ width: '30.4%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>System Uptime</span>
                                <span className="font-mono text-emerald-600">99.97%</span>
                              </div>
                              <div className="h-2 bg-muted rounded-full">
                                <div className="h-2 bg-emerald-500 rounded-full" style={{ width: '99.97%' }}></div>
                              </div>
                            </div>
                          </div>
                        </StandardCard>
                      </div>
                    </div>
                  </StandardCardContent>
                </StandardCard>
              </TabsContent>

              <TabsContent value="leads" className="mt-0">
                <StandardCard variant="bordered" className="overflow-hidden">
                  <StandardCardContent className="p-0">
                    <div className="p-6 border-b border-border">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-mono text-lg font-bold mb-2">Lead Management</h3>
                          <p className="text-sm text-muted-foreground">Master database with 1,247 total leads</p>
                        </div>
                        <div className="flex gap-2">
                          <div className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-mono">142 New</div>
                          <div className="px-3 py-1 bg-emerald-500/10 text-emerald-600 text-xs rounded-full font-mono">89 Queued</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-card border-b-2 border-border">
                          <tr className="text-left border-b border-border">
                            <th className="px-6 py-3 text-xs font-mono font-bold text-muted-foreground">Name</th>
                            <th className="px-6 py-3 text-xs font-mono font-bold text-muted-foreground">Title</th>
                            <th className="px-6 py-3 text-xs font-mono font-bold text-muted-foreground">Company</th>
                            <th className="px-6 py-3 text-xs font-mono font-bold text-muted-foreground">Email</th>
                            <th className="px-6 py-3 text-xs font-mono font-bold text-muted-foreground">Source</th>
                            <th className="px-6 py-3 text-xs font-mono font-bold text-muted-foreground">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border hover:bg-accent/5 transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                                  <span className="text-xs font-bold text-primary">JD</span>
                                </div>
                                <span className="font-medium text-sm">Jane Doe</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-muted-foreground">Head of Operations</td>
                            <td className="px-6 py-4 text-sm font-medium">TelecomOne Ltd</td>
                            <td className="px-6 py-4 text-sm text-muted-foreground font-mono">jane.doe@telecomone.com</td>
                            <td className="px-6 py-4">
                              <div className="px-2 py-1 bg-accent/10 text-accent border border-accent/20 text-xs rounded font-mono">Apollo</div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="px-2 py-1 bg-secondary/10 text-secondary border border-secondary/20 text-xs rounded font-mono">New</div>
                            </td>
                          </tr>
                          
                          <tr className="border-b border-border hover:bg-accent/5 transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-violet-500/20 to-violet-500/10 rounded-full flex items-center justify-center">
                                  <span className="text-xs font-bold text-violet-600">JS</span>
                                </div>
                                <span className="font-medium text-sm">John Smith</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-muted-foreground">Chief Information Officer</td>
                            <td className="px-6 py-4 text-sm font-medium">UtilityCorp Inc</td>
                            <td className="px-6 py-4 text-sm text-muted-foreground font-mono">john.smith@utilitycorp.com</td>
                            <td className="px-6 py-4">
                              <div className="px-2 py-1 bg-accent/10 text-accent border border-accent/20 text-xs rounded font-mono">Sales Navigator</div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="px-2 py-1 bg-accent/10 text-accent border border-accent/20 text-xs rounded font-mono">Queued</div>
                            </td>
                          </tr>

                          <tr className="border-b border-border hover:bg-accent/5 transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 rounded-full flex items-center justify-center">
                                  <span className="text-xs font-bold text-emerald-600">MR</span>
                                </div>
                                <span className="font-medium text-sm">Marco Ruiz</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-muted-foreground">Chief Operating Officer</td>
                            <td className="px-6 py-4 text-sm font-medium">FiberNorth Networks</td>
                            <td className="px-6 py-4 text-sm text-muted-foreground font-mono">marco@fibernorth.ca</td>
                            <td className="px-6 py-4">
                              <div className="px-2 py-1 bg-accent/10 text-accent border border-accent/20 text-xs rounded font-mono">Sales Navigator</div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="px-2 py-1 bg-secondary/10 text-secondary border border-secondary/20 text-xs rounded font-mono">Positive Reply</div>
                            </td>
                          </tr>

                          <tr className="border-b border-border hover:bg-accent/5 transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-red-500/20 to-red-500/10 rounded-full flex items-center justify-center">
                                  <span className="text-xs font-bold text-red-600">SC</span>
                                </div>
                                <span className="font-medium text-sm">Sarah Chen</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-muted-foreground">VP of Technology</td>
                            <td className="px-6 py-4 text-sm font-medium">PowerGrid Solutions</td>
                            <td className="px-6 py-4 text-sm text-muted-foreground font-mono">s.chen@powergrid.com</td>
                            <td className="px-6 py-4">
                              <div className="px-2 py-1 bg-accent/10 text-accent border border-accent/20 text-xs rounded font-mono">Apollo</div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="px-2 py-1 bg-primary/10 text-primary border border-primary/20 text-xs rounded font-mono">Not Interested</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </StandardCardContent>
                </StandardCard>
              </TabsContent>

              <TabsContent value="replies" className="mt-0">
                <StandardCard variant="bordered" className="overflow-hidden">
                  <StandardCardContent className="p-0">
                    <div className="p-6 border-b border-border">
                      <h3 className="font-mono text-lg font-bold mb-2">Reply Tracking</h3>
                      <p className="text-sm text-muted-foreground">Auto-tagged responses with sentiment analysis</p>
                    </div>
                    
                    <div className="p-6">
                      {/* Filter Tabs */}
                      <div className="flex gap-2 mb-6">
                        <div className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-mono">All (23)</div>
                        <div className="px-4 py-2 bg-secondary/10 text-secondary border border-secondary/20 rounded-lg text-sm font-mono hover:bg-secondary/20 cursor-pointer transition-colors">Positive (8)</div>
                        <div className="px-4 py-2 bg-card border border-border hover:bg-accent/10 rounded-lg text-sm font-mono cursor-pointer transition-colors">Neutral (7)</div>
                        <div className="px-4 py-2 bg-card border border-border hover:bg-accent/10 rounded-lg text-sm font-mono cursor-pointer transition-colors">Not Interested (5)</div>
                        <div className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg text-sm font-mono hover:bg-primary/20 cursor-pointer transition-colors">Unsubscribed (2)</div>
                      </div>

                      {/* Reply Cards */}
                      <div className="space-y-4">
                        <StandardCard className="p-4 border-l-4 border-l-emerald-500 bg-emerald-500/5">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 rounded-full flex items-center justify-center">
                                <span className="text-sm font-bold text-emerald-600">MR</span>
                              </div>
                              <div>
                                <div className="font-medium text-sm">Marco Ruiz</div>
                                <div className="text-xs text-muted-foreground">COO @ FiberNorth Networks</div>
                              </div>
                            </div>
                            <div className="text-xs text-muted-foreground font-mono">2 minutes ago</div>
                          </div>
                          <div className="bg-background p-3 rounded border ml-13">
                            <p className="text-sm mb-2">"Hi there! Thanks for reaching out. I'd definitely be interested in learning more about your Salesforce optimization services. We've been struggling with our current setup and could use some expert guidance."</p>
                            <div className="flex gap-2">
                              <div className="px-2 py-1 bg-emerald-500/10 text-emerald-600 text-xs rounded">Positive</div>
                              <div className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Meeting Interest</div>
                            </div>
                          </div>
                        </StandardCard>

                        <StandardCard className="p-4 border-l-4 border-l-amber-500 bg-amber-500/5">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-amber-500/20 to-amber-500/10 rounded-full flex items-center justify-center">
                                <span className="text-sm font-bold text-amber-600">AL</span>
                              </div>
                              <div>
                                <div className="font-medium text-sm">Alex Liu</div>
                                <div className="text-xs text-muted-foreground">Director IT @ GridTech</div>
                              </div>
                            </div>
                            <div className="text-xs text-muted-foreground font-mono">15 minutes ago</div>
                          </div>
                          <div className="bg-background p-3 rounded border ml-13">
                            <p className="text-sm mb-2">"Thanks for the email. We're not currently looking to make changes to our Salesforce setup, but I'll keep your info on file for future reference."</p>
                            <div className="flex gap-2">
                              <div className="px-2 py-1 bg-amber-500/10 text-amber-600 text-xs rounded">Neutral</div>
                              <div className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">Future Interest</div>
                            </div>
                          </div>
                        </StandardCard>

                        <StandardCard className="p-4 border-l-4 border-l-red-500 bg-red-500/5">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-red-500/20 to-red-500/10 rounded-full flex items-center justify-center">
                                <span className="text-sm font-bold text-red-600">SC</span>
                              </div>
                              <div>
                                <div className="font-medium text-sm">Sarah Chen</div>
                                <div className="text-xs text-muted-foreground">VP Tech @ PowerGrid Solutions</div>
                              </div>
                            </div>
                            <div className="text-xs text-muted-foreground font-mono">1 hour ago</div>
                          </div>
                          <div className="bg-background p-3 rounded border ml-13">
                            <p className="text-sm mb-2">"Not interested. Please remove me from your mailing list."</p>
                            <div className="flex gap-2">
                              <div className="px-2 py-1 bg-red-500/10 text-red-600 text-xs rounded">Not Interested</div>
                              <div className="px-2 py-1 bg-red-500/20 text-red-700 text-xs rounded">Unsubscribe</div>
                            </div>
                          </div>
                        </StandardCard>
                      </div>
                    </div>
                  </StandardCardContent>
                </StandardCard>
              </TabsContent>

              <TabsContent value="bookings" className="mt-0">
                <StandardCard variant="bordered" className="overflow-hidden">
                  <StandardCardContent className="p-0">
                    <div className="p-6 border-b border-border">
                      <h3 className="font-mono text-lg font-bold mb-2">Meeting Capture</h3>
                      <p className="text-sm text-muted-foreground">Calendly integration with automatic system writeback</p>
                    </div>
                    
                    <div className="p-6">
                      {/* Meeting Stats */}
                      <div className="grid grid-cols-3 gap-6 mb-6">
                        <StandardCard className="p-4 text-center bg-gradient-to-br from-violet-500/5 to-violet-500/10 border-violet-500/20">
                          <Calendar className="w-8 h-8 text-violet-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-violet-600 mb-1">7</div>
                          <div className="text-sm text-muted-foreground font-mono">This Month</div>
                        </StandardCard>
                        <StandardCard className="p-4 text-center bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 border-emerald-500/20">
                          <Users className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-emerald-600 mb-1">85%</div>
                          <div className="text-sm text-muted-foreground font-mono">Show Rate</div>
                        </StandardCard>
                        <StandardCard className="p-4 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                          <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                          <div className="text-2xl font-bold text-primary mb-1">2</div>
                          <div className="text-sm text-muted-foreground font-mono">This Week</div>
                        </StandardCard>
                      </div>

                      {/* Upcoming Meetings */}
                      <div className="space-y-4">
                        <h4 className="font-mono font-bold text-sm">Upcoming Meetings</h4>
                        
                        <StandardCard className="p-4 border-l-4 border-l-emerald-500 bg-emerald-500/5">
                          <div className="flex justify-between items-start">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 rounded-full flex items-center justify-center">
                                <span className="text-sm font-bold text-emerald-600">MR</span>
                              </div>
                              <div>
                                <div className="font-medium text-sm">Marco Ruiz</div>
                                <div className="text-xs text-muted-foreground mb-1">COO @ FiberNorth Networks</div>
                                <div className="text-sm text-muted-foreground font-mono">Sept 22 • 10:00-10:30 AM EST</div>
                                <div className="text-xs text-primary">Intro Call - Salesforce Optimization</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="px-2 py-1 bg-emerald-500/10 text-emerald-600 text-xs rounded font-mono mb-1">Confirmed</div>
                              <div className="text-xs text-muted-foreground">Google Meet</div>
                            </div>
                          </div>
                        </StandardCard>

                        <StandardCard className="p-4 border-l-4 border-l-blue-500 bg-blue-500/5">
                          <div className="flex justify-between items-start">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-full flex items-center justify-center">
                                <span className="text-sm font-bold text-blue-600">JS</span>
                              </div>
                              <div>
                                <div className="font-medium text-sm">John Smith</div>
                                <div className="text-xs text-muted-foreground mb-1">CIO @ UtilityCorp Inc</div>
                                <div className="text-sm text-muted-foreground font-mono">Sept 24 • 2:00-2:45 PM EST</div>
                                <div className="text-xs text-primary">Discovery Call - System Assessment</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="px-2 py-1 bg-blue-500/10 text-blue-600 text-xs rounded font-mono mb-1">Confirmed</div>
                              <div className="text-xs text-muted-foreground">Zoom</div>
                            </div>
                          </div>
                        </StandardCard>

                        <StandardCard className="p-4 border-l-4 border-l-amber-500 bg-amber-500/5">
                          <div className="flex justify-between items-start">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-amber-500/20 to-amber-500/10 rounded-full flex items-center justify-center">
                                <span className="text-sm font-bold text-amber-600">JD</span>
                              </div>
                              <div>
                                <div className="font-medium text-sm">Jane Doe</div>
                                <div className="text-xs text-muted-foreground mb-1">Head of Ops @ TelecomOne</div>
                                <div className="text-sm text-muted-foreground font-mono">Sept 26 • 11:00-11:30 AM EST</div>
                                <div className="text-xs text-primary">Follow-up - Process Review</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="px-2 py-1 bg-amber-500/10 text-amber-600 text-xs rounded font-mono mb-1">Pending</div>
                              <div className="text-xs text-muted-foreground">Teams</div>
                            </div>
                          </div>
                        </StandardCard>
                      </div>
                    </div>
                  </StandardCardContent>
                </StandardCard>
              </TabsContent>

              <TabsContent value="settings" className="mt-0">
                <StandardCard variant="bordered" className="overflow-hidden">
                  <StandardCardContent className="p-0">
                    <div className="p-6 border-b border-border">
                      <h3 className="font-mono text-lg font-bold mb-2">System Configuration</h3>
                      <p className="text-sm text-muted-foreground">API connections, workflow settings, and monitoring controls</p>
                    </div>
                    
                    <div className="p-6">
                      {/* Connection Status */}
                      <div className="mb-8">
                        <h4 className="font-mono font-bold text-sm mb-4">Connected Services</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <StandardCard className="p-4 bg-emerald-500/5 border-emerald-500/20">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-3">
                                <Database className="w-5 h-5 text-emerald-600" />
                                <div>
                                  <div className="font-medium text-sm">Google Sheets</div>
                                  <div className="text-xs text-muted-foreground">Lead database & tracking</div>
                                </div>
                              </div>
                              <div className="px-2 py-1 bg-emerald-500/10 text-emerald-600 text-xs rounded font-mono">Connected</div>
                            </div>
                            <div className="text-xs text-muted-foreground font-mono">Last sync: 2 minutes ago</div>
                          </StandardCard>

                          <StandardCard className="p-4 bg-emerald-500/5 border-emerald-500/20">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-3">
                                <Zap className="w-5 h-5 text-emerald-600" />
                                <div>
                                  <div className="font-medium text-sm">Instantly</div>
                                  <div className="text-xs text-muted-foreground">Email delivery platform</div>
                                </div>
                              </div>
                              <div className="px-2 py-1 bg-emerald-500/10 text-emerald-600 text-xs rounded font-mono">Connected</div>
                            </div>
                            <div className="text-xs text-muted-foreground font-mono">89 emails queued</div>
                          </StandardCard>

                          <StandardCard className="p-4 bg-emerald-500/5 border-emerald-500/20">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-3">
                                <Calendar className="w-5 h-5 text-emerald-600" />
                                <div>
                                  <div className="font-medium text-sm">Calendly</div>
                                  <div className="text-xs text-muted-foreground">Meeting scheduling</div>
                                </div>
                              </div>
                              <div className="px-2 py-1 bg-emerald-500/10 text-emerald-600 text-xs rounded font-mono">Connected</div>
                            </div>
                            <div className="text-xs text-muted-foreground font-mono">3 meetings this week</div>
                          </StandardCard>

                          <StandardCard className="p-4 bg-amber-500/5 border-amber-500/20">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-3">
                                <Slack className="w-5 h-5 text-amber-600" />
                                <div>
                                  <div className="font-medium text-sm">Slack</div>
                                  <div className="text-xs text-muted-foreground">Team notifications</div>
                                </div>
                              </div>
                              <div className="px-2 py-1 bg-amber-500/10 text-amber-600 text-xs rounded font-mono">Pending Setup</div>
                            </div>
                            <div className="text-xs text-muted-foreground font-mono">Webhook configured</div>
                          </StandardCard>

                          <StandardCard className="p-4 bg-blue-500/5 border-blue-500/20">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-3">
                                <BarChart3 className="w-5 h-5 text-blue-600" />
                                <div>
                                  <div className="font-medium text-sm">Apollo</div>
                                  <div className="text-xs text-muted-foreground">Lead enrichment API</div>
                                </div>
                              </div>
                              <div className="px-2 py-1 bg-blue-500/10 text-blue-600 text-xs rounded font-mono">Integration Ready</div>
                            </div>
                            <div className="text-xs text-muted-foreground font-mono">Auto-enrichment enabled</div>
                          </StandardCard>

                          <StandardCard className="p-4 bg-violet-500/5 border-violet-500/20">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-3">
                                <FileText className="w-5 h-5 text-violet-600" />
                                <div>
                                  <div className="font-medium text-sm">n8n Workflows</div>
                                  <div className="text-xs text-muted-foreground">Automation engine</div>
                                </div>
                              </div>
                              <div className="px-2 py-1 bg-violet-500/10 text-violet-600 text-xs rounded font-mono">Active</div>
                            </div>
                            <div className="text-xs text-muted-foreground font-mono">5 workflows running</div>
                          </StandardCard>
                        </div>
                      </div>

                      {/* System Settings */}
                      <div>
                        <h4 className="font-mono font-bold text-sm mb-4">System Settings</h4>
                        <div className="space-y-4">
                          <StandardCard className="p-4">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-medium text-sm">Daily Digest</div>
                                <div className="text-xs text-muted-foreground">Automated reports at 9:00 AM EST</div>
                              </div>
                              <div className="px-2 py-1 bg-emerald-500/10 text-emerald-600 text-xs rounded font-mono">Enabled</div>
                            </div>
                          </StandardCard>
                          
                          <StandardCard className="p-4">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-medium text-sm">Error Monitoring</div>
                                <div className="text-xs text-muted-foreground">Instant alerts for workflow failures</div>
                              </div>
                              <div className="px-2 py-1 bg-emerald-500/10 text-emerald-600 text-xs rounded font-mono">Active</div>
                            </div>
                          </StandardCard>
                          
                          <StandardCard className="p-4">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-medium text-sm">Reply Classification</div>
                                <div className="text-xs text-muted-foreground">AI-powered sentiment analysis</div>
                              </div>
                              <div className="px-2 py-1 bg-emerald-500/10 text-emerald-600 text-xs rounded font-mono">Running</div>
                            </div>
                          </StandardCard>
                        </div>
                      </div>
                    </div>
                  </StandardCardContent>
                </StandardCard>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* What We Ship */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="heading-section mb-4">What We Ship</h2>
            <p className="text-description">Everything needed to operate and maintain the system</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {whatWeShip.map((item, index) => (
                <StandardCard key={index} variant="bordered">
                  <StandardCardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <CheckCircle size={ICON_SIZES.medium} strokeWidth={ICON_STROKE.default} className="text-primary mr-3 flex-shrink-0" />
                      <h3 className="font-mono text-lg font-bold">{item.item}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </StandardCardContent>
                </StandardCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-mono text-3xl lg:text-4xl font-bold mb-4">Coming Soon</h2>
            <p className="text-xl text-muted-foreground">Next automation systems in development</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {comingSoon.map((item, index) => (
                <StandardCard key={index} variant="bordered">
                  <StandardCardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-mono text-lg font-bold mb-2">{item.name}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                      <Badge className="system-badge bg-muted text-foreground">
                        {item.status}
                      </Badge>
                    </div>
                  </StandardCardContent>
                </StandardCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Systems Fit */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-mono text-3xl lg:text-4xl font-bold mb-4">How Systems Fit</h2>
            <p className="text-xl text-muted-foreground">Three-step process from assessment to operation</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <StandardCard variant="bordered" className="text-center">
                <StandardCardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary">01</span>
                  </div>
                  <h3 className="font-mono text-xl font-bold mb-4">Assessment</h3>
                  <p className="text-muted-foreground mb-6">
                    We audit your current systems and identify the optimal automation opportunities.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </StandardCardContent>
              </StandardCard>

              <StandardCard variant="bordered" className="text-center">
                <StandardCardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary">02</span>
                  </div>
                  <h3 className="font-mono text-xl font-bold mb-4">Sprint</h3>
                  <p className="text-muted-foreground mb-6">
                    2-week focused implementation sprint to install and configure your automation system.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Link to="/sprint">Revenue Sprint</Link>
                  </Button>
                </StandardCardContent>
              </StandardCard>

              <StandardCard variant="bordered" className="text-center">
                <StandardCardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary">03</span>
                  </div>
                  <h3 className="font-mono text-xl font-bold mb-4">Fractional</h3>
                  <p className="text-muted-foreground mb-6">
                    Ongoing support and optimization to ensure your systems keep performing.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Link to="/fractional">Fractional Support</Link>
                  </Button>
                </StandardCardContent>
              </StandardCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Systems;
