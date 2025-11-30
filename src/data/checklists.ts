import { ChecklistCategory } from "@/components/checklist/InteractiveChecklist";

export const websiteReadinessChecklist: ChecklistCategory[] = [
  {
    id: "content",
    title: "Content Preparation",
    description: "Essential content and messaging for your website",
    items: [
      {
        id: "brand-messaging",
        label: "Brand messaging and value proposition defined",
        description: "Clear articulation of what you do and why it matters",
        helpText: "This is the foundation of your website. Without clear messaging, visitors won't understand your value."
      },
      {
        id: "page-copy",
        label: "Page copy written for all key pages",
        description: "Home, About, Services, Contact pages have final copy",
        helpText: "Copy should be approved and ready to go. Last-minute changes delay launch."
      },
      {
        id: "seo-keywords",
        label: "SEO keyword research completed",
        description: "Target keywords identified for each page",
        helpText: "SEO is built in from the start, not added later. Keywords guide content structure."
      },
      {
        id: "blog-content",
        label: "Initial blog content prepared (3-5 articles)",
        description: "Launch with content to establish authority",
        helpText: "Fresh content signals to search engines that your site is active and relevant."
      },
      {
        id: "metadata",
        label: "Meta titles and descriptions written",
        description: "All pages have SEO-optimized metadata",
        helpText: "These appear in search results and social shares. Critical for first impressions."
      }
    ]
  },
  {
    id: "design-assets",
    title: "Design Assets",
    description: "Visual elements needed for your website",
    items: [
      {
        id: "logo-files",
        label: "Logo files in multiple formats (SVG, PNG)",
        description: "Vector and raster versions for all use cases",
        helpText: "SVG for web, PNG for fallbacks. Make sure you have high-res versions."
      },
      {
        id: "brand-guidelines",
        label: "Brand guidelines document",
        description: "Colors, fonts, spacing, tone of voice documented",
        helpText: "Ensures consistency across your site and future materials."
      },
      {
        id: "photography",
        label: "Professional photography or stock images",
        description: "High-quality images that represent your brand",
        helpText: "Images make or break modern websites. Invest in quality visuals."
      },
      {
        id: "icons-graphics",
        label: "Custom icons or graphics",
        description: "Visual elements to enhance user experience",
        helpText: "Icons improve scannability and add visual interest to text-heavy pages."
      },
      {
        id: "video-assets",
        label: "Video content (if applicable)",
        description: "Explainer videos, testimonials, or demos",
        helpText: "Video increases engagement and time on page. Not required but highly valuable."
      }
    ]
  },
  {
    id: "technical",
    title: "Technical Requirements",
    description: "Infrastructure and access needed for launch",
    items: [
      {
        id: "domain-access",
        label: "Domain registrar access",
        description: "Ability to update DNS records",
        helpText: "We need to point your domain to the hosting. No access = no launch."
      },
      {
        id: "hosting-plan",
        label: "Hosting plan selected and paid",
        description: "Server environment ready to deploy",
        helpText: "Don't wait until the last minute. Hosting setup can take 24-48 hours."
      },
      {
        id: "ssl-certificate",
        label: "SSL certificate obtained",
        description: "HTTPS security for your domain",
        helpText: "Required for security and SEO. Most hosts include this free."
      },
      {
        id: "analytics-setup",
        label: "Google Analytics/Clarity accounts created",
        description: "Tracking set up to measure performance from day one",
        helpText: "You can't improve what you don't measure. Set up tracking before launch."
      },
      {
        id: "email-accounts",
        label: "Professional email accounts configured",
        description: "name@yourdomain.com addresses ready",
        helpText: "Generic Gmail addresses hurt credibility. Use your domain for email."
      }
    ]
  },
  {
    id: "integrations",
    title: "Integration Requirements",
    description: "Third-party services and connections",
    items: [
      {
        id: "crm-connection",
        label: "CRM system ready for integration",
        description: "Salesforce, HubSpot, or other CRM configured",
        helpText: "Form submissions should flow directly to your CRM. Avoid manual data entry."
      },
      {
        id: "marketing-automation",
        label: "Marketing automation platform connected",
        description: "Email marketing tool ready (Mailchimp, ActiveCampaign, etc.)",
        helpText: "Capture leads and nurture them automatically. Essential for conversion."
      },
      {
        id: "payment-gateway",
        label: "Payment gateway if e-commerce",
        description: "Stripe, PayPal, or other payment processor",
        helpText: "Test in sandbox mode before going live. Payment issues lose customers fast."
      },
      {
        id: "chat-widget",
        label: "Live chat or chatbot configured",
        description: "Real-time support for visitors",
        helpText: "Increases conversion by answering questions immediately."
      },
      {
        id: "social-accounts",
        label: "Social media accounts linked",
        description: "Facebook, LinkedIn, Twitter handles ready",
        helpText: "Make it easy for visitors to connect with you on other platforms."
      }
    ]
  },
  {
    id: "stakeholder",
    title: "Stakeholder Alignment",
    description: "Internal approvals and readiness",
    items: [
      {
        id: "decision-makers",
        label: "All decision makers identified and engaged",
        description: "No surprise stakeholders at the 11th hour",
        helpText: "Map out who needs to approve what. Avoid launch delays from unexpected feedback."
      },
      {
        id: "budget-approved",
        label: "Budget approved and allocated",
        description: "Funding secured for project completion",
        helpText: "Partial budgets lead to partial websites. Secure full funding upfront."
      },
      {
        id: "timeline-confirmed",
        label: "Launch timeline confirmed",
        description: "Realistic deadlines set with team agreement",
        helpText: "Rushed launches create technical debt. Build in buffer time for testing."
      },
      {
        id: "content-owners",
        label: "Content owners assigned for ongoing updates",
        description: "Post-launch content strategy in place",
        helpText: "Websites aren't 'set and forget'. Plan for regular updates and maintenance."
      },
      {
        id: "training-scheduled",
        label: "Team training scheduled",
        description: "Staff knows how to manage the site post-launch",
        helpText: "Empower your team to make updates. Training prevents dependence on developers."
      }
    ]
  }
];

export const technicalAssessmentChecklist: ChecklistCategory[] = [
  {
    id: "data-quality",
    title: "Data Quality",
    items: [
      {
        id: "duplicate-prevention",
        label: "We have a clear process to prevent duplicate records.",
      },
      {
        id: "required-fields",
        label: "Required fields are enforced for key records such as leads, contacts, and opportunities.",
      },
      {
        id: "data-cleanup",
        label: "We regularly review and clean up outdated or incorrect data.",
      }
    ]
  },
  {
    id: "crm-pipeline",
    title: "CRM & Pipeline",
    items: [
      {
        id: "pipeline-stages",
        label: "Our pipeline stages clearly match how deals move in real life.",
      },
      {
        id: "next-steps",
        label: "Every active opportunity has a defined next step in the CRM.",
      },
      {
        id: "crm-completeness",
        label: "No major parts of the sales process live outside the CRM.",
      }
    ]
  },
  {
    id: "automation-integrations",
    title: "Automation & Integrations",
    items: [
      {
        id: "task-automation",
        label: "Repetitive tasks such as follow-ups or reminders are automated.",
      },
      {
        id: "tool-integration",
        label: "Our core tools (CRM, marketing, scheduling, payments) are reliably integrated.",
      },
      {
        id: "data-sync",
        label: "Changes in one system are reflected in others without manual re-entry.",
      }
    ]
  },
  {
    id: "measurement-analytics",
    title: "Measurement & Analytics",
    items: [
      {
        id: "conversion-tracking",
        label: "We track conversion rates at each major stage of the funnel.",
      },
      {
        id: "consistent-tracking",
        label: "Our tracking (UTMs, pixels, events) is consistent across campaigns.",
      },
      {
        id: "dashboard-review",
        label: "Leadership reviews performance dashboards on a regular cadence.",
      }
    ]
  },
  {
    id: "compliance-risk",
    title: "Compliance & Risk",
    items: [
      {
        id: "access-control",
        label: "Access to systems is permission-based and revoked when people leave.",
      },
      {
        id: "regulatory-compliance",
        label: "Customer or patient data is stored in line with our regulatory obligations.",
      },
      {
        id: "data-ownership",
        label: "We know where sensitive data lives and who is responsible for it.",
      }
    ]
  },
  {
    id: "operating-discipline",
    title: "Operating Discipline",
    items: [
      {
        id: "system-owners",
        label: "Owners are assigned to core systems and processes.",
      },
      {
        id: "review-cadence",
        label: "There is a weekly slot where we review pipeline and system health.",
      },
      {
        id: "root-cause-fixes",
        label: "When a process breaks, we fix the root cause instead of patching it once.",
      }
    ]
  }
];

// Export consolidated checklists array
export const checklists = [
  {
    id: 'website-readiness',
    title: 'Website Readiness Checklist',
    description: 'Ensure you have everything ready for a successful website launch',
    categories: websiteReadinessChecklist
  },
  {
    id: 'technical-maturity',
    title: 'Technical Maturity Assessment',
    description: 'Assess your Salesforce and revenue systems across 6 key dimensions: Data Quality, CRM & Pipeline, Automation & Integrations, Measurement & Analytics, Compliance & Risk, and Operating Discipline.',
    categories: technicalAssessmentChecklist
  }
];
