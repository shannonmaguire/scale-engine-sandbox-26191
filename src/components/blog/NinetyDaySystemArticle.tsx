import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const NinetyDaySystemArticle = () => {
  return (
    <div className="prose-blog">
      <p>
        Salesforce implementations extending beyond six months typically indicate scope expansion rather than technical complexity. The 90-day revenue system installation operates as a deployment framework with fixed deliverables: documented processes, configured infrastructure, and operator training. Engagement completion occurs when systems achieve operational independence from external support.
      </p>

      <h2 id="what-gets-installed">What Gets Installed</h2>
      
      <p>
        Revenue systems comprise the complete operational infrastructure converting prospects through qualification stages to closed transactions. Software configuration represents one component within broader process architecture that includes data flow design, operator protocols, and measurement frameworks.
      </p>

      <h3>The Three-Layer Stack</h3>
      
      <p><strong>Layer 1: Data Infrastructure</strong></p>
      <p>
        Salesforce configuration, integration architecture, and data flow design establish the foundation where leads enter systems, opportunities progress through qualification stages, and revenue tracking maintains operational visibility.
      </p>

      <p><strong>Layer 2: Process Documentation</strong></p>
      <p>
        SOPs, playbooks, and handoff protocols document every operational action and decision framework, eliminating tribal knowledge dependencies through formalized procedure capture.
      </p>

      <p><strong>Layer 3: Operator Training</strong></p>
      <p>
        Team members receive hands-on training that progresses from system familiarization through independent operation capability, achieving autonomous system management by day 90 without external support requirements.
      </p>

      <h3>90-Day Constraint Rationale</h3>
      
      <p>
        Extended implementation timelines create opportunity for scope expansion, organizational resistance, and stakeholder fatigue. The 90-day constraint enforces prioritization discipline by limiting deployment to revenue-critical infrastructure. Secondary features deploy in subsequent phases after primary system validation confirms operational stability.
      </p>

      <h2 id="deployment-phases">The Four-Phase Deployment Model</h2>
      
      <p>
        Each deployment phase operates on 22-day cycles with defined deliverables and acceptance criteria that determine progression to subsequent phases.
      </p>

      <h3>Phase 1: Days 1-22 — Discovery & System Architecture</h3>
      
      <p>
        Discovery precedes configuration. Process mapping documents current-state revenue workflows including deal progression patterns, bottleneck locations, and data dependencies that inform subsequent system architecture.
      </p>
      
      <p><strong>Key Activities:</strong></p>
      <ul>
        <li>Current-state process mapping (what actually happens, not what should happen)</li>
        <li>Data audit: where revenue data lives, how it flows, what's missing</li>
        <li>Stakeholder interviews: sales, ops, finance—everyone who touches the system</li>
        <li>Technical assessment: existing Salesforce config, integrations, technical debt</li>
      </ul>

      <p><strong>Deliverables:</strong></p>
      <ul>
        <li>System Blueprint: Visual architecture of the full revenue system</li>
        <li>Data Model: Objects, fields, relationships—the complete schema</li>
        <li>90-Day Roadmap: Prioritized deployment plan with clear milestones</li>
        <li>Risk Register: Technical constraints, integration dependencies, edge cases</li>
      </ul>

      <h3>Phase 2: Days 23-44 — Core System Build & Configuration</h3>
      
      <p>
        Configuration phase implements the designed architecture through custom object creation, automation logic, integration connections, and reporting infrastructure required for operational function.
      </p>
      
      <p><strong>Build Components:</strong></p>
      <ul>
        <li>Salesforce object configuration (Leads, Opportunities, custom objects)</li>
        <li>Process automation (flows, validation rules, assignment logic)</li>
        <li>Integration setup (marketing automation, email, data enrichment)</li>
        <li>Dashboard and reporting infrastructure</li>
        <li>Data migration and cleanup (if transitioning from another system)</li>
      </ul>

      <p><strong>Deliverables:</strong></p>
      <ul>
        <li>Configured Salesforce Org: Fully built, tested, ready for UAT</li>
        <li>Integration Documentation: How data moves between systems</li>
        <li>Admin Handbook: Configuration reference for future maintenance</li>
      </ul>

      <h3>Phase 3: Days 45-66 — Process Documentation & Operator Playbooks</h3>
      
      <p>
        Process documentation defines operator interaction protocols with configured systems. Role-specific playbooks and standard operating procedures convert technical infrastructure into executable workflows.
      </p>
      
      <p><strong>Documentation Deliverables:</strong></p>
      <ul>
        <li>SDR/BDR playbook: prospecting workflows, lead qualification, handoff protocols</li>
        <li>AE playbook: opportunity management, deal progression, forecast accuracy</li>
        <li>Operations runbook: data hygiene, reporting, system maintenance</li>
        <li>Manager dashboard guide: what to monitor, when to intervene</li>
        <li>Troubleshooting protocols: common issues and resolution paths</li>
      </ul>

      <p><strong>Format:</strong></p>
      <p>
        Documentation deploys in searchable, version-controlled wiki systems rather than static files. Platform selection depends on existing infrastructure while maintaining requirements for search functionality, edit capability, and version tracking.
      </p>

      <h3>Phase 4: Days 67-90 — Training, Testing & Handoff</h3>
      
      <p>
        Final phase focuses on operator readiness through system training, edge case testing, and scenario execution that progresses toward autonomous operation without external dependency.
      </p>
      
      <p><strong>Training Program:</strong></p>
      <ul>
        <li>Role-based training sessions (customized for SDR, AE, Ops, Admin)</li>
        <li>Live system walkthroughs with real data scenarios</li>
        <li>Sandbox practice environment for hands-on learning</li>
        <li>Q&A sessions and troubleshooting drills</li>
      </ul>

      <p><strong>Final Deliverables:</strong></p>
      <ul>
        <li>Go-Live Checklist: Pre-launch validation criteria</li>
        <li>Support Transition Plan: How to get help after handoff</li>
        <li>30-60-90 Day Optimization Roadmap: What to improve next</li>
        <li>System Health Metrics: KPIs to monitor ongoing performance</li>
      </ul>

      <h2 id="after-day-90">What Happens After Day 90?</h2>
      
      <p>
        Post-deployment operations proceed without external dependency. Systems achieve designed operational independence that eliminates ongoing support requirements. Subsequent engagement phases address advanced capabilities including automation expansion, AI integration, or forecasting infrastructure when business requirements justify additional investment.
      </p>

      <p><strong>Optional: Fractional Support</strong></p>
      <p>
        Fractional support arrangements provide ongoing optimization and operational capacity when internal resources remain limited. Standard engagement allocates 10-20 monthly hours while maintaining system independence from support continuation.
      </p>

      <h2 id="ideal-fit">Who This Framework Works For</h2>
      
      <p>The 90-day deployment model requires specific organizational conditions before engagement initiation.</p>

      <h3>Good Fit</h3>
      
      <ul>
        <li>You have an existing Salesforce org (or are ready to launch one)</li>
        <li>You're doing $1M-$50M ARR and need operational leverage</li>
        <li>You have (or are hiring) SDRs, AEs, or ops people who will use the system</li>
        <li>Revenue infrastructure ownership provides long-term operational independence beyond consultant dependency</li>
      </ul>

      <h3>Not a Fit</h3>
      
      <ul>
        <li>Ongoing managed services fall outside scope parameters since systems require operational independence rather than continuous external management</li>
        <li>Pre-revenue organizations or companies validating product-market fit lack sufficient operational complexity to justify revenue system infrastructure</li>
        <li>Enterprise CPQ, complex billing logic, or multi-currency global operations require expanded engagement scope beyond standard 90-day deployment parameters</li>
      </ul>

      <p>
        Deployed systems achieve performance stability under increased transaction volume without requiring continuous optimization cycles after initial installation completion.
      </p>

      <div className="mt-16 pt-8 border-t border-border">
        <Button asChild size="lg">
          <a href="/assessment">
            Begin Technical Assessment
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};
