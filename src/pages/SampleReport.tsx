import { Button } from "@/components/ui/button";
import { StandardCard, StandardCardContent, StandardCardHeader, StandardCardTitle } from "@/components/ui/standard-card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { AlertTriangle, CheckCircle, TrendingUp, TrendingDown, DollarSign, Clock, Database, Zap, Shield, ArrowLeft, ArrowRight, FileDown } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import cwtLogo from "@/assets/cwt-logo-mark.svg";
const SampleReport = () => {
  const scorecard = [{
    category: "Technology Stack",
    score: 6.2,
    status: "warning",
    issues: 3,
    benchmark: 7.5,
    details: "Salesforce implementation solid but underutilized. 23% of available features active.",
    subScores: [
      { name: "CRM Configuration", score: 7.2 },
      { name: "Integration Health", score: 5.8 },
      { name: "Automation Coverage", score: 5.6 }
    ]
  }, {
    category: "Data Quality",
    score: 4.1,
    status: "critical",
    issues: 5,
    benchmark: 8.2,
    details: "47% of records missing critical fields. $2.3M pipeline affected by data gaps.",
    subScores: [
      { name: "Data Completeness", score: 3.8 },
      { name: "Deduplication", score: 4.2 },
      { name: "Standardization", score: 4.4 }
    ]
  }, {
    category: "Process Governance",
    score: 7.8,
    status: "good",
    issues: 1,
    benchmark: 7.9,
    details: "Strong process documentation. Minor gaps in approval workflows.",
    subScores: [
      { name: "Documentation", score: 8.5 },
      { name: "Compliance", score: 7.8 },
      { name: "Change Management", score: 7.1 }
    ]
  }, {
    category: "Pipeline Management",
    score: 5.5,
    status: "warning",
    issues: 4,
    benchmark: 8.1,
    details: "Stage definitions unclear. 62% of deals lack proper qualification criteria.",
    subScores: [
      { name: "Stage Definition", score: 4.9 },
      { name: "Forecasting Accuracy", score: 5.7 },
      { name: "Velocity Tracking", score: 6.0 }
    ]
  }, {
    category: "Reporting & Analytics",
    score: 3.9,
    status: "critical",
    issues: 6,
    benchmark: 8.3,
    details: "Manual reporting consuming 15 hrs/week. No real-time dashboards.",
    subScores: [
      { name: "Dashboard Coverage", score: 3.2 },
      { name: "Data Accessibility", score: 4.1 },
      { name: "Insight Velocity", score: 4.4 }
    ]
  }, {
    category: "Team Enablement",
    score: 6.8,
    status: "warning",
    issues: 2,
    benchmark: 7.7,
    details: "Good training materials but inconsistent adoption across reps.",
    subScores: [
      { name: "Training Programs", score: 7.5 },
      { name: "Tool Adoption", score: 6.2 },
      { name: "Performance Support", score: 6.7 }
    ]
  }];
  const priorities = [{
    priority: 1,
    title: "Data Hygiene & Deduplication",
    impact: "High",
    effort: "Medium",
    timeline: "2-3 weeks",
    description: "Clean and standardize lead data, implement deduplication rules",
    roi: "$180K annual impact",
    metrics: ["Reduce duplicate records by 85%", "Improve data completeness to 95%", "Save 8 hrs/week in manual cleanup"]
  }, {
    priority: 2,
    title: "Lead Scoring Implementation",
    impact: "High",
    effort: "Low",
    timeline: "1 week",
    description: "Deploy automated lead scoring to prioritize sales efforts",
    roi: "$240K annual impact",
    metrics: ["Increase conversion rate by 18%", "Reduce time-to-qualification by 40%", "Focus top reps on best opportunities"]
  }, {
    priority: 3,
    title: "Pipeline Stage Definitions",
    impact: "Medium",
    effort: "Low",
    timeline: "1 week",
    description: "Standardize stage criteria and exit requirements",
    roi: "$95K annual impact",
    metrics: ["Improve forecast accuracy to 92%", "Reduce stage slippage by 35%", "Standardize qualification criteria"]
  }, {
    priority: 4,
    title: "Revenue Dashboard",
    impact: "Medium",
    effort: "Medium",
    timeline: "2 weeks",
    description: "Real-time visibility into pipeline health and forecasting",
    roi: "$125K annual impact",
    metrics: ["Eliminate 15 hrs/week of manual reporting", "Real-time alerts on at-risk deals", "Executive visibility in seconds"]
  }, {
    priority: 5,
    title: "Automated Workflow Engine",
    impact: "High",
    effort: "Medium",
    timeline: "3 weeks",
    description: "Deploy intelligent automation for repetitive tasks and handoffs",
    roi: "$210K annual impact",
    metrics: ["Automate 12 manual processes", "Reduce human error by 78%", "Free 22 hrs/week of rep time"]
  }, {
    priority: 6,
    title: "Integration Hub",
    impact: "Medium",
    effort: "High",
    timeline: "4 weeks",
    description: "Connect critical systems for seamless data flow and single source of truth",
    roi: "$165K annual impact",
    metrics: ["Connect 6 critical systems", "Eliminate double-entry", "Enable 360° customer view"]
  }];
  // Removed color-based helper functions for grayscale document aesthetic
  return <div className="min-h-screen bg-muted/30">
      <SEOHead
        title="Sample Automation & Salesforce Assessment Report | CWT Studio"
        description="Preview a Creator Wealth Tools assessment showcasing how we evaluate business automation, Salesforce health, and product readiness across web and mobile stacks."
        keywords={[
          'business automation sample report',
          'Salesforce assessment example',
          'Creator Wealth Tools scorecard',
          'revenue operations audit template',
          'web and mobile readiness report'
        ]}
        canonicalUrl="/sample-report"
      />
      
      {/* Document Header */}
      <div className="bg-background border-b-2 border-border sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={cwtLogo} alt="CWT Studio" className="h-8 w-8" />
              <div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">CONFIDENTIAL ASSESSMENT REPORT</div>
                <div className="text-sm font-mono font-bold text-foreground">CWT-2025-0142 • March 2025 • Version 1.0</div>
              </div>
            </div>
            <Badge variant="outline" className="border-foreground/20 text-foreground bg-muted/10 font-mono uppercase tracking-wider">
              SAMPLE
            </Badge>
          </div>
        </div>
      </div>

      {/* Document Container - Paper-like */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-background rounded-lg shadow-lg border border-border p-12 relative">
          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
            <div className="text-9xl font-black rotate-[-45deg] text-foreground">SAMPLE REPORT</div>
          </div>

          {/* Document Title Block */}
          <div className="mb-12 border-b-4 border-border pb-8 relative z-10">
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">PREPARED FOR</div>
            <h1 className="font-mono text-4xl font-bold mb-2 text-foreground">TechCorp SaaS</h1>
            <div className="text-muted-foreground font-mono text-sm mb-4">Series B • $15M ARR • 85 Employees</div>
            <h2 className="font-mono text-2xl font-semibold text-foreground mb-6">Revenue Infrastructure Assessment Report</h2>
            <div className="text-sm text-muted-foreground mb-6">Assessment Period: January 15 - February 12, 2025</div>
          </div>

          {/* Executive Summary Snapshot */}
          <div className="mb-16">
            <h3 className="font-mono text-sm font-bold mb-4 text-muted-foreground uppercase tracking-wider">Executive Summary</h3>
            <div className="grid grid-cols-5 gap-4">
              <div className="text-center bg-background p-4 rounded border border-border">
                <div className="text-3xl font-black text-foreground mb-1 tabular-nums">5.9</div>
                <p className="text-xs text-muted-foreground uppercase font-mono tracking-wide">Overall Score</p>
                <p className="text-xs text-muted-foreground mt-1">vs 7.9 benchmark</p>
              </div>
              <div className="text-center bg-background p-4 rounded border border-border">
                <div className="text-3xl font-black text-foreground mb-1 tabular-nums">21</div>
                <p className="text-xs text-muted-foreground uppercase font-mono tracking-wide">Issues Identified</p>
                <p className="text-xs text-muted-foreground mt-1">across 6 categories</p>
              </div>
              <div className="text-center bg-background p-4 rounded border border-border">
                <div className="text-3xl font-black text-foreground mb-1 tabular-nums">$1.02M</div>
                <p className="text-xs text-muted-foreground uppercase font-mono tracking-wide">Annual ROI</p>
                <p className="text-xs text-muted-foreground mt-1">projected impact</p>
              </div>
              <div className="text-center bg-background p-4 rounded border border-border">
                <div className="text-3xl font-black text-foreground mb-1 tabular-nums">90</div>
                <p className="text-xs text-muted-foreground uppercase font-mono tracking-wide">Day Roadmap</p>
                <p className="text-xs text-muted-foreground mt-1">6 priority phases</p>
              </div>
              <div className="text-center bg-background p-4 rounded border border-border">
                <div className="text-3xl font-black text-foreground mb-1 tabular-nums">47%</div>
                <p className="text-xs text-muted-foreground uppercase font-mono tracking-wide">Efficiency Gap</p>
                <p className="text-xs text-muted-foreground mt-1">vs industry leaders</p>
              </div>
            </div>
          </div>

          {/* Scorecard */}
          <div className="mb-16">
            <h2 className="font-mono text-xl font-bold mb-6 text-foreground uppercase tracking-wider border-b-2 border-border pb-3">1.0 Infrastructure Scorecard</h2>
            <div className="space-y-4">
              {scorecard.map((item, index) => <div key={index} className="border border-border rounded bg-background p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <h3 className="font-mono font-bold text-lg text-foreground">{item.category}</h3>
                        <Badge variant="outline" className="text-xs border-border text-foreground bg-muted/10 font-mono uppercase">
                          {item.status.toUpperCase()}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{item.details}</p>
                      <div className="grid grid-cols-3 gap-3">
                        {item.subScores.map((sub, idx) => <div key={idx} className="text-center p-2 bg-muted/10 rounded border border-border/50">
                            <div className="text-lg font-black text-foreground tabular-nums">{sub.score}</div>
                            <div className="text-xs text-muted-foreground mt-1 uppercase font-mono tracking-wide">{sub.name}</div>
                          </div>)}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 min-w-[140px]">
                      <div className="text-4xl font-black text-foreground tabular-nums">
                        {item.score}<span className="text-lg text-muted-foreground font-normal">/10</span>
                      </div>
                      <div className="text-right mb-2">
                        <p className="text-xs text-muted-foreground uppercase font-mono">Benchmark: {item.benchmark}</p>
                        <div className="flex items-center gap-1 mt-1">
                          {item.score < item.benchmark ? <TrendingDown className="w-3 h-3 text-muted-foreground" /> : <TrendingUp className="w-3 h-3 text-foreground" />}
                          <span className="text-xs font-bold text-foreground tabular-nums">
                            {Math.abs(item.benchmark - item.score).toFixed(1)} gap
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-2 bg-muted/20 rounded-full overflow-hidden border border-border/30">
                        <div className="h-full bg-foreground" style={{
                      width: `${item.score / 10 * 100}%`
                    }} />
                      </div>
                      <p className="text-xs text-muted-foreground uppercase font-mono">
                        {item.issues} issue{item.issues !== 1 ? 's' : ''} identified
                      </p>
                    </div>
                  </div>
              </div>)}
            </div>
          </div>

          {/* Priority Roadmap */}
          <div className="mb-16">
            <h2 className="font-mono text-xl font-bold mb-6 text-foreground uppercase tracking-wider border-b-2 border-border pb-3">2.0 90-Day Priority Roadmap</h2>
            <div className="space-y-4">
              {priorities.map((item, index) => <div key={index} className="border border-border rounded bg-background p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border-2 border-foreground bg-transparent flex items-center justify-center font-black flex-shrink-0 text-foreground tabular-nums">
                      {item.priority}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mb-3">
                        <div>
                          <h3 className="font-mono font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className={`text-xs border-border bg-muted/10 font-mono uppercase ${
                              item.impact === 'High' ? 'border-l-4 border-l-foreground font-bold' : 
                              item.impact === 'Low' ? 'font-normal' : 'font-semibold'
                            }`}>
                              {item.impact} Impact
                            </Badge>
                            <Badge variant="outline" className="text-xs bg-muted/10 text-foreground border-border font-mono uppercase">
                              {item.effort} Effort
                            </Badge>
                            <Badge variant="outline" className="text-xs bg-muted/10 text-foreground border-border flex items-center gap-1 font-mono uppercase">
                              <Clock className="w-3 h-3" />
                              {item.timeline}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 lg:min-w-[140px] lg:justify-end bg-muted/10 px-3 py-2 rounded border border-border">
                          <DollarSign className="w-4 h-4 text-foreground" />
                          <span className="font-black text-foreground text-lg tabular-nums">{item.roi}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <div className="space-y-2 pl-4 border-l-2 border-foreground/30">
                        {item.metrics.map((metric, idx) => <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-foreground mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-foreground">{metric}</span>
                          </div>)}
                      </div>
                    </div>
                  </div>
              </div>)}
            </div>
          </div>

          {/* Financial Impact Analysis */}
          <div className="mb-16">
            <h2 className="font-mono text-xl font-bold mb-6 text-foreground uppercase tracking-wider border-b-2 border-border pb-3">3.0 Financial Impact Analysis</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="border border-border rounded bg-background p-6 text-center">
                  <DollarSign className="w-8 h-8 text-foreground mx-auto mb-3" />
                  <div className="text-3xl font-black text-foreground mb-2 tabular-nums">$2.3M</div>
                  <p className="text-xs text-muted-foreground mb-1 uppercase font-mono tracking-wide">At-Risk Pipeline</p>
                  <p className="text-xs text-muted-foreground">Due to data quality issues</p>
              </div>
              <div className="border border-border rounded bg-background p-6 text-center">
                  <TrendingUp className="w-8 h-8 text-foreground mx-auto mb-3" />
                  <div className="text-3xl font-black text-foreground mb-2 tabular-nums">$1.02M</div>
                  <p className="text-xs text-muted-foreground mb-1 uppercase font-mono tracking-wide">Annual ROI</p>
                  <p className="text-xs text-muted-foreground">From implementing roadmap</p>
              </div>
              <div className="border border-border rounded bg-background p-6 text-center">
                  <Clock className="w-8 h-8 text-foreground mx-auto mb-3" />
                  <div className="text-3xl font-black text-foreground mb-2 tabular-nums">45 hrs</div>
                  <p className="text-xs text-muted-foreground mb-1 uppercase font-mono tracking-wide">Weekly Time Saved</p>
                  <p className="text-xs text-muted-foreground">Across revenue team</p>
              </div>
            </div>
          </div>

          {/* Technology Stack Analysis */}
          <div className="mb-16">
            <h2 className="font-mono text-xl font-bold mb-6 text-foreground uppercase tracking-wider border-b-2 border-border pb-3">4.0 Technology Stack Analysis</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="border border-border rounded bg-background p-6">
                <h3 className="font-mono font-bold mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-foreground" />
                  Current Stack
                </h3>
                <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Salesforce Sales Cloud</span>
                    <Badge variant="outline" className="text-xs border-border text-foreground bg-background font-mono">Active</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">Utilization: 23% • Health: Good • Version: Enterprise</div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">HubSpot Marketing</span>
                    <Badge variant="outline" className="text-xs border-border text-muted-foreground bg-muted/20 font-mono">Partial</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">Utilization: 45% • Health: Warning • Integration: Limited</div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Gong.io</span>
                    <Badge variant="outline" className="text-xs border-border text-foreground bg-background font-mono">Active</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">Utilization: 78% • Health: Excellent • Data: Not synced</div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Outreach.io</span>
                    <Badge variant="outline" className="text-xs border-border text-foreground bg-muted/20 font-mono">Issues</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">Utilization: 34% • Health: Critical • Integration: Broken</div>
                </div>
                </div>
              </div>

              <div className="border border-border rounded bg-background p-6">
                <h3 className="font-mono font-bold mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-foreground" />
                  Integration Gaps
                </h3>
                <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-foreground mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Salesforce ↔ Marketing Automation</p>
                    <p className="text-xs text-muted-foreground mt-1">Manual data entry creating 18-hour weekly burden</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-foreground mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Gong ↔ Salesforce</p>
                    <p className="text-xs text-muted-foreground mt-1">Call insights not flowing to CRM records</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">BI Tool Connection</p>
                    <p className="text-xs text-muted-foreground mt-1">No direct reporting pipeline, manual exports</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">CPQ System</p>
                  <p className="text-xs text-muted-foreground mt-1">Quote generation disconnected from pipeline</p>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Findings */}
          <div className="mb-16">
            <h2 className="font-mono text-xl font-bold mb-6 text-foreground uppercase tracking-wider border-b-2 border-border pb-3">5.0 Detailed Findings</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="border border-border rounded bg-background p-6">
                <h3 className="font-mono font-bold mb-4 flex items-center gap-2 text-foreground">
                  <AlertTriangle className="w-5 h-5" />
                  Critical Issues (High Priority)
                </h3>
                <div className="space-y-4">
                <div className="border-l-2 border-foreground pl-3">
                  <p className="text-sm font-medium mb-1">Data Quality Crisis</p>
                  <p className="text-xs text-muted-foreground">47% of leads lack proper attribution data. 12,300+ duplicate records. $2.3M pipeline affected.</p>
                </div>
                <div className="border-l-2 border-foreground pl-3">
                  <p className="text-sm font-medium mb-1">No Lead Scoring</p>
                  <p className="text-xs text-muted-foreground">Reps manually evaluating every lead. 40% of time wasted on unqualified prospects.</p>
                </div>
                <div className="border-l-2 border-foreground pl-3">
                  <p className="text-sm font-medium mb-1">Pipeline Stage Confusion</p>
                  <p className="text-xs text-muted-foreground">No clear exit criteria. 62% of deals lack proper qualification. Forecast accuracy at 73%.</p>
                </div>
                <div className="border-l-2 border-foreground pl-3">
                  <p className="text-sm font-medium mb-1">Manual Reporting Burden</p>
                  <p className="text-xs text-muted-foreground">15 hours weekly spent on manual reports. No real-time dashboards. Insights lag by 3-5 days.</p>
                </div>
                <div className="border-l-2 border-muted-foreground pl-3">
                  <p className="text-sm font-medium mb-1">Integration Failures</p>
                  <p className="text-xs text-muted-foreground">4 broken integrations. Double-entry in 6 workflows. Data sync errors weekly.</p>
                </div>
                </div>
              </div>

              <div className="border border-border rounded bg-background p-6">
                <h3 className="font-mono font-bold mb-4 flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5" />
                  Strengths & Opportunities
                </h3>
                <div className="space-y-4">
                <div className="border-l-2 border-foreground pl-3">
                  <p className="text-sm font-medium mb-1">Strong Technology Foundation</p>
                  <p className="text-xs text-muted-foreground">Salesforce Enterprise properly configured. Good bones for automation expansion.</p>
                </div>
                <div className="border-l-2 border-foreground pl-3">
                  <p className="text-sm font-medium mb-1">Excellent Process Documentation</p>
                  <p className="text-xs text-muted-foreground">Well-documented workflows and SOPs. Easy to scale once tech is optimized.</p>
                </div>
                <div className="border-l-2 border-foreground pl-3">
                  <p className="text-sm font-medium mb-1">Team Alignment</p>
                  <p className="text-xs text-muted-foreground">Leadership and reps aligned on revenue goals. High adoption readiness.</p>
                </div>
                <div className="border-l-2 border-foreground pl-3">
                  <p className="text-sm font-medium mb-1">Data-Driven Culture</p>
                  <p className="text-xs text-muted-foreground">Team values metrics and wants better insights. Low resistance to change.</p>
                </div>
                <div className="border-l-2 border-foreground pl-3">
                  <p className="text-sm font-medium mb-1">Quick Win Potential</p>
                  <p className="text-xs text-muted-foreground">Several high-impact, low-effort improvements identified. Can show ROI in 30 days.</p>
                </div>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Matrix */}
          <div className="mb-16">
            <h2 className="font-mono text-xl font-bold mb-6 text-foreground uppercase tracking-wider border-b-2 border-border pb-3">6.0 Risk Assessment</h2>
            <div className="border border-border rounded bg-background p-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 h-10">
                    <Shield className="w-5 h-5 text-foreground" />
                    <h3 className="font-mono font-bold">High Risk</h3>
                  </div>
                  <div className="flex flex-col gap-3 mt-3">
                    <div className="p-4 bg-muted/20 border border-border rounded h-24 flex flex-col justify-between">
                      <p className="text-sm font-medium mb-1">Data Integrity</p>
                      <p className="text-xs text-muted-foreground">Poor data quality will compound with scale</p>
                    </div>
                    <div className="p-4 bg-muted/20 border border-border rounded h-24 flex flex-col justify-between">
                      <p className="text-sm font-medium mb-1">Rep Productivity</p>
                      <p className="text-xs text-muted-foreground">40% efficiency loss vs benchmark</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 h-10">
                    <Shield className="w-5 h-5 text-foreground" />
                    <h3 className="font-mono font-bold">Medium Risk</h3>
                  </div>
                  <div className="flex flex-col gap-3 mt-3">
                    <div className="p-4 bg-muted/20 border border-border rounded h-24 flex flex-col justify-between">
                      <p className="text-sm font-medium mb-1">Forecast Accuracy</p>
                      <p className="text-xs text-muted-foreground">73% accuracy creates planning issues</p>
                    </div>
                    <div className="p-4 bg-muted/20 border border-border rounded h-24 flex flex-col justify-between">
                      <p className="text-sm font-medium mb-1">Tool Adoption</p>
                      <p className="text-xs text-muted-foreground">Low utilization of available features</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 h-10">
                    <Shield className="w-5 h-5 text-foreground" />
                    <h3 className="font-mono font-bold">Low Risk</h3>
                  </div>
                  <div className="flex flex-col gap-3 mt-3">
                    <div className="p-4 bg-muted/20 border border-border rounded h-24 flex flex-col justify-between">
                      <p className="text-sm font-medium mb-1">Team Readiness</p>
                      <p className="text-xs text-muted-foreground">High willingness to adopt changes</p>
                    </div>
                    <div className="p-4 bg-muted/20 border border-border rounded h-24 flex flex-col justify-between">
                      <p className="text-sm font-medium mb-1">Infrastructure</p>
                      <p className="text-xs text-muted-foreground">Solid foundation to build upon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* Benchmarking */}
          <div className="mb-16 mt-20">
            <h2 className="font-mono text-xl font-bold mb-6 text-foreground uppercase tracking-wider border-b-2 border-border pb-3">7.0 Industry Benchmarking</h2>
            <div className="border border-border rounded bg-background p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-mono text-sm">Metric</th>
                      <th className="text-center py-3 px-4 font-mono text-sm">TechCorp</th>
                      <th className="text-center py-3 px-4 font-mono text-sm">Industry Avg</th>
                      <th className="text-center py-3 px-4 font-mono text-sm">Top Quartile</th>
                      <th className="text-center py-3 px-4 font-mono text-sm">Gap</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 text-sm">Lead Response Time</td>
                      <td className="text-center py-3 px-4 text-sm">4.2 hrs</td>
                      <td className="text-center py-3 px-4 text-sm">2.1 hrs</td>
                      <td className="text-center py-3 px-4 text-sm text-foreground font-medium">0.5 hrs</td>
                      <td className="text-center py-3 px-4 text-sm text-muted-foreground">-87%</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 text-sm">Data Completeness</td>
                      <td className="text-center py-3 px-4 text-sm">53%</td>
                      <td className="text-center py-3 px-4 text-sm">82%</td>
                      <td className="text-center py-3 px-4 text-sm text-foreground font-medium">95%</td>
                      <td className="text-center py-3 px-4 text-sm text-muted-foreground">-44%</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 text-sm">Sales Cycle Length</td>
                      <td className="text-center py-3 px-4 text-sm">89 days</td>
                      <td className="text-center py-3 px-4 text-sm">67 days</td>
                      <td className="text-center py-3 px-4 text-sm text-foreground font-medium">45 days</td>
                      <td className="text-center py-3 px-4 text-sm text-muted-foreground">-49%</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 text-sm">Win Rate</td>
                      <td className="text-center py-3 px-4 text-sm">18%</td>
                      <td className="text-center py-3 px-4 text-sm">24%</td>
                      <td className="text-center py-3 px-4 text-sm text-foreground font-medium">35%</td>
                      <td className="text-center py-3 px-4 text-sm text-muted-foreground">-49%</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 text-sm">Forecast Accuracy</td>
                      <td className="text-center py-3 px-4 text-sm">73%</td>
                      <td className="text-center py-3 px-4 text-sm">85%</td>
                      <td className="text-center py-3 px-4 text-sm text-foreground font-medium">92%</td>
                      <td className="text-center py-3 px-4 text-sm text-muted-foreground">-21%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm">Rep Quota Attainment</td>
                      <td className="text-center py-3 px-4 text-sm">64%</td>
                      <td className="text-center py-3 px-4 text-sm">78%</td>
                      <td className="text-center py-3 px-4 text-sm text-foreground font-medium">89%</td>
                      <td className="text-center py-3 px-4 text-sm text-muted-foreground">-28%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="mb-16">
            <div className="border border-border rounded bg-background p-8">
              <h2 className="font-mono text-xl font-bold mb-6 text-foreground uppercase tracking-wider border-b-2 border-border pb-3">8.0 Executive Summary</h2>
            <div className="prose prose-gray max-w-none space-y-6">
              <div>
                <p className="text-sm font-mono text-foreground font-bold mb-2">CURRENT STATE</p>
                <p className="text-muted-foreground leading-relaxed">
                  TechCorp has built solid technology foundations with Salesforce Enterprise and complementary tools, 
                  but is significantly underutilizing these investments (23% feature adoption). Critical data quality 
                  issues affect $2.3M in pipeline, while manual processes consume 45+ hours weekly across the revenue 
                  team. The organization shows strong process documentation and team alignment, creating an excellent 
                  foundation for rapid improvement.
                </p>
              </div>
              
              <div>
                <p className="text-sm font-mono text-foreground font-bold mb-2">PRIMARY RISKS</p>
                <p className="text-muted-foreground leading-relaxed">
                  Without immediate data hygiene improvements, continued growth will compound existing inefficiencies 
                  at scale. Current state represents a 47% efficiency gap versus industry leaders: sales team productivity 
                  is 40% below benchmark, forecast accuracy stands at 73% (vs 92% top quartile), and lead response times 
                  are 8x slower than best-in-class. These gaps translate to approximately $2.3M at-risk pipeline and 
                  significant competitive disadvantage in fast-moving deals.
                </p>
              </div>

              <div>
                <p className="text-sm font-mono text-foreground font-bold mb-2">OPPORTUNITY</p>
                <p className="text-muted-foreground leading-relaxed">
                  The combination of strong foundations and clear gaps creates exceptional ROI potential. Six prioritized 
                  initiatives over 90 days can deliver $1.02M in annual value through efficiency gains, productivity 
                  improvements, and pipeline acceleration. The team\'s high readiness for change and data-driven culture 
                  significantly de-risk implementation.
                </p>
              </div>
              
              <div>
                <p className="text-sm font-mono text-foreground font-bold mb-2">RECOMMENDATION</p>
                <p className="text-muted-foreground leading-relaxed">
                  Implement the 6-phase roadmap over 90 days, sequenced to deliver quick wins while building toward 
                  sustainable infrastructure improvements. Expected outcomes: 30-35% improvement in sales efficiency, 
                  60% reduction in manual processes, forecast accuracy improvement to 90%+, and 25% reduction in 
                  sales cycle length. First-phase ROI positive within 30 days. Full roadmap payback in 4.2 months.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-muted/30 rounded">
                    <div className="text-2xl font-bold text-foreground">$1.02M</div>
                    <div className="text-xs text-muted-foreground mt-1">Annual ROI</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded">
                    <div className="text-2xl font-bold text-foreground">90 Days</div>
                    <div className="text-xs text-muted-foreground mt-1">Implementation</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded">
                    <div className="text-2xl font-bold text-foreground">4.2 Mo</div>
                    <div className="text-xs text-muted-foreground mt-1">Payback Period</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded">
                    <div className="text-2xl font-bold text-foreground">35%</div>
                    <div className="text-xs text-muted-foreground mt-1">Efficiency Gain</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Appendix */}
          <div className="mb-12 border-t-2 border-border pt-8">
            <h2 className="font-mono text-xl font-bold mb-6 text-foreground uppercase tracking-wider">Appendix: Methodology & Contact</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-mono font-semibold text-sm mb-3 text-muted-foreground uppercase tracking-wide">Assessment Methodology</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  This assessment was conducted using CWT Studio's proprietary Revenue Infrastructure Framework, 
                  evaluating 6 core categories across 50+ evaluation criteria. Data was gathered through:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>System configuration analysis</li>
                  <li>Data quality audits</li>
                  <li>Stakeholder interviews</li>
                  <li>Usage analytics review</li>
                  <li>Industry benchmark comparison</li>
                </ul>
              </div>
              <div>
                <h3 className="font-mono font-semibold text-sm mb-3 text-muted-foreground uppercase tracking-wide">Questions or Next Steps?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  To receive a customized assessment report for your organization or to discuss implementation:
                </p>
                <div className="text-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-muted-foreground">Email:</span>
                    <span className="text-foreground font-medium">hello@thecwtstudio.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-muted-foreground">Website:</span>
                    <span className="text-foreground font-medium">thecwtstudio.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer CTA - Optimized for conversion */}
      <div className="sticky bottom-0 bg-background border-t-2 border-primary/20 shadow-2xl z-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Secondary action - subtle */}
            <Button 
              variant="ghost" 
              asChild 
              className="font-mono text-muted-foreground hover:text-foreground order-2 md:order-1"
            >
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            
            {/* Primary CTA - prominent */}
            <div className="flex flex-col sm:flex-row items-center gap-4 order-1 md:order-2 w-full md:w-auto">
              <div className="text-center sm:text-right">
                <p className="font-mono text-sm text-muted-foreground mb-1">
                  Want this for your organization?
                </p>
                <p className="font-mono text-xs text-muted-foreground/70">
                  Get a custom assessment in 5 days
                </p>
              </div>
              <Button 
                asChild 
                size="lg" 
                className="font-mono font-bold uppercase tracking-wide w-full sm:w-auto whitespace-nowrap shadow-lg hover:shadow-xl"
              >
                <Link to="/assessment" className="flex items-center gap-2">
                  Get Your Assessment
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default SampleReport;
