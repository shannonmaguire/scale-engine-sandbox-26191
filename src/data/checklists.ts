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

export const aeQualificationChecklist: ChecklistCategory[] = [
  {
    id: "technical-fit",
    title: "Technical Fit",
    description: "Assess the technical requirements and complexity",
    items: [
      {
        id: "sf-instance",
        label: "Active Salesforce instance (not trial)",
        helpText: "Production or sandbox with real data and customizations"
      },
      {
        id: "integration-needs",
        label: "Integration requirements identified",
        helpText: "Clear list of systems that need to connect to Salesforce"
      },
      {
        id: "data-volume",
        label: "Data volume documented (records, objects)",
        helpText: "Understanding data scale helps scope migration and performance work"
      },
      {
        id: "custom-objects",
        label: "Custom objects and fields mapped",
        helpText: "Customizations drive complexity and cost"
      }
    ]
  },
  {
    id: "budget-authority",
    title: "Budget & Authority",
    description: "Verify financial readiness and decision-making power",
    items: [
      {
        id: "budget-allocated",
        label: "Budget allocated (not just 'exploring')",
        helpText: "Money set aside = serious intent"
      },
      {
        id: "decision-maker",
        label: "Direct access to decision maker",
        helpText: "Avoid multi-layer approval processes"
      },
      {
        id: "timeline-pressure",
        label: "Defined timeline or deadline",
        helpText: "Urgency drives action. No timeline = no urgency"
      }
    ]
  },
  {
    id: "pain-points",
    title: "Pain Points",
    description: "Identify deal-blocking issues and urgency",
    items: [
      {
        id: "blocking-issue",
        label: "Deal-blocking technical issue identified",
        helpText: "Something broken or missing that prevents them from closing deals"
      },
      {
        id: "current-workaround",
        label: "Current workaround is painful",
        helpText: "Manual processes, lost revenue, compliance risk"
      },
      {
        id: "executive-visibility",
        label: "Problem has executive visibility",
        helpText: "Leadership awareness = budget and urgency"
      }
    ]
  },
  {
    id: "opportunity",
    title: "Opportunity Size",
    description: "Assess deal value and expansion potential",
    items: [
      {
        id: "deal-value",
        label: "Project value >$15K",
        helpText: "Below this threshold, profitability is challenging"
      },
      {
        id: "expansion-potential",
        label: "Clear expansion opportunities identified",
        helpText: "One project leads to ongoing partnership"
      },
      {
        id: "referral-potential",
        label: "Referral or case study potential",
        helpText: "Client willing to advocate and share their story"
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
        id: "duplicate-records",
        label: "We have a way to prevent duplicate records",
        helpText: "Example: System stops you from creating two contacts with the same email address"
      },
      {
        id: "data-completeness",
        label: "Important information is required (not optional)",
        helpText: "Example: You can't save a new customer without entering their phone number or email"
      },
      {
        id: "data-standards",
        label: "Team follows consistent data entry guidelines",
        helpText: "Example: Everyone enters phone numbers the same way (555-123-4567) instead of random formats"
      },
      {
        id: "data-cleanup",
        label: "We regularly clean up old or incorrect data",
        helpText: "Example: Monthly check to update or remove outdated customer information"
      },
      {
        id: "picklist-management",
        label: "Dropdown options are organized and up-to-date",
        helpText: "Example: Industry dropdowns don't have 50 random options that mean the same thing"
      },
      {
        id: "record-ownership",
        label: "Clear ownership of who manages each customer/record",
        helpText: "Example: Everyone knows which sales rep owns which accounts"
      },
      {
        id: "historical-data",
        label: "Old data is saved and easy to find when needed",
        helpText: "Example: You can still look up customer interactions from last year"
      }
    ]
  },
  {
    id: "automation",
    title: "Automation",
    items: [
      {
        id: "workflow-documented",
        label: "We've written down how our main processes work",
        helpText: "Example: You have a document explaining step-by-step how you handle new customer inquiries"
      },
      {
        id: "workflow-rules",
        label: "The system handles routine tasks automatically",
        helpText: "Example: When a deal closes, the system automatically creates renewal reminders"
      },
      {
        id: "process-builder",
        label: "Multi-step processes run without manual work",
        helpText: "Example: New customer gets added → welcome email sent → task created for onboarding → manager notified"
      },
      {
        id: "approval-processes",
        label: "Approvals happen through the system (not email)",
        helpText: "Example: Discount requests automatically go to the right manager for approval"
      },
      {
        id: "email-alerts",
        label: "System sends email notifications automatically",
        helpText: "Example: Sales rep gets emailed when their lead fills out a form"
      },
      {
        id: "scheduled-jobs",
        label: "System runs regular maintenance automatically",
        helpText: "Example: Reports are generated and sent every Monday morning without you doing anything"
      },
      {
        id: "flow-optimization",
        label: "Automations work smoothly even with lots of data",
        helpText: "Example: Bulk uploads and mass updates don't crash or slow down the system"
      }
    ]
  },
  {
    id: "integrations",
    title: "System Connections",
    items: [
      {
        id: "integration-map",
        label: "We have a list of all our connected systems",
        helpText: "Example: You know what connects to what (email tool → CRM → accounting software)"
      },
      {
        id: "api-monitoring",
        label: "We check that connections are working properly",
        helpText: "Example: You get notified if data stops flowing between your website and CRM"
      },
      {
        id: "error-handling",
        label: "We know when syncing fails between systems",
        helpText: "Example: Alert pops up if customer info doesn't transfer from your forms to the database"
      },
      {
        id: "data-sync",
        label: "Data stays consistent across different systems",
        helpText: "Example: Customer's email is the same in your CRM, email tool, and billing system"
      },
      {
        id: "middleware",
        label: "We use connection tools (like Zapier) when needed",
        helpText: "Example: Using Zapier to automatically add new customers from one app to another"
      },
      {
        id: "api-versioning",
        label: "We have a plan for when systems get updated",
        helpText: "Example: You know what to do when Salesforce releases a new version"
      }
    ]
  },
  {
    id: "security",
    title: "Security & Privacy",
    items: [
      {
        id: "role-hierarchy",
        label: "Access levels match company structure",
        helpText: "Example: Sales reps see their accounts, managers see their team's accounts, executives see everything"
      },
      {
        id: "permission-sets",
        label: "We control what each person can do in the system",
        helpText: "Example: Some people can only view data, others can edit, and only admins can delete"
      },
      {
        id: "sharing-rules",
        label: "We've documented who can access what",
        helpText: "Example: You have clear rules about which teams can see customer pricing"
      },
      {
        id: "field-security",
        label: "Sensitive information has restricted access",
        helpText: "Example: Only certain people can view salary info or customer credit card data"
      },
      {
        id: "audit-trail",
        label: "We can see who changed what and when",
        helpText: "Example: You can look up who updated a customer's address last Tuesday"
      },
      {
        id: "compliance-checks",
        label: "We follow required privacy regulations",
        helpText: "Example: You handle customer data according to GDPR or HIPAA requirements"
      },
      {
        id: "security-review",
        label: "We regularly review who has access to what",
        helpText: "Example: Quarterly check to remove access for people who left or changed roles"
      }
    ]
  },
  {
    id: "reporting",
    title: "Reports & Insights",
    items: [
      {
        id: "dashboard-adoption",
        label: "Leadership actually uses the reports",
        helpText: "Example: Your managers check dashboards weekly to make decisions, not just for show"
      },
      {
        id: "kpi-tracking",
        label: "We track our most important metrics",
        helpText: "Example: You monitor monthly revenue, conversion rates, or customer satisfaction scores"
      },
      {
        id: "report-folder",
        label: "Reports are organized and easy to find",
        helpText: "Example: Sales reports in one folder, marketing in another—not a messy pile"
      },
      {
        id: "scheduled-reports",
        label: "Reports are sent automatically on schedule",
        helpText: "Example: Sales team gets their weekly pipeline report emailed every Monday morning"
      },
      {
        id: "forecast-accuracy",
        label: "Our sales forecasts are usually accurate",
        helpText: "Example: When you predict closing $100K this month, you actually close close to that"
      },
      {
        id: "custom-reports",
        label: "We can create reports for specific questions",
        helpText: "Example: You can quickly answer 'Which customers bought X product in the last 6 months?'"
      },
      {
        id: "einstein-analytics",
        label: "We use advanced analytics tools",
        helpText: "Example: Using Einstein Analytics, Tableau, or similar for deep data analysis"
      }
    ]
  },
  {
    id: "adoption",
    title: "Team Usage",
    description: "Does your team actually use the system?",
    items: [
      {
        id: "login-frequency",
        label: "Most of the team logs in daily",
        helpText: "Example: At least 70% of your team uses the system every workday"
      },
      {
        id: "training-program",
        label: "We train new team members on the system",
        helpText: "Example: New hires get a walkthrough during their first week"
      },
      {
        id: "help-resources",
        label: "Team has access to help guides",
        helpText: "Example: Written instructions or videos people can reference when stuck"
      },
      {
        id: "super-users",
        label: "We have go-to people who know the system well",
        helpText: "Example: A few team members are experts others can ask for help"
      },
      {
        id: "feedback-loop",
        label: "We regularly ask the team for improvement ideas",
        helpText: "Example: Quarterly surveys or meetings to gather feedback on what's working or not"
      },
      {
        id: "satisfaction-score",
        label: "We measure if the team likes using the system",
        helpText: "Example: You track whether people find it helpful or frustrating"
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
    id: 'ae-qualification',
    title: 'AE Qualification Checklist',
    description: 'Qualify prospects for technical fit and deal potential',
    categories: aeQualificationChecklist
  },
  {
    id: 'technical-maturity',
    title: 'Technical Maturity Assessment',
    description: 'Evaluate your Salesforce and revenue systems maturity across 6 key dimensions',
    categories: technicalAssessmentChecklist
  }
];
