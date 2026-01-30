import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
  ogImage?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  type?: 'website' | 'article' | 'service';
  includeOrganizationSchema?: boolean;
  personSchema?: {
    name: string;
    jobTitle: string;
    description: string;
    url?: string;
    sameAs?: string[];
    image?: string;
  };
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    isNewsArticle?: boolean;
  };
  faqSchema?: Array<{
    question: string;
    answer: string;
  }>;
  serviceSchema?: {
    name: string;
    description: string;
    provider?: string;
    areaServed?: string[];
    offers?: Array<{
      name: string;
      description: string;
    }>;
  };
  caseStudySchema?: Array<{
    name: string;
    description: string;
    industry: string;
    result: string;
  }>;
}

const SEOHead = ({
  title = 'CWT Studio | Systems Architecture',
  description = 'Revenue systems break. We find where—then install enforcement. For legal, healthcare, compliance, and SaaS teams.',
  keywords = [
    'cwtstudio.com',
    'systems architecture',
    'revenue systems audit',
    'Salesforce implementation',
    'Salesforce optimization',
    'revenue operations',
    'high-trust industries'
  ],
  ogImage = 'https://cwtstudio.com/og-image.jpg',
  canonicalUrl,
  noindex = false,
  type = 'website',
  includeOrganizationSchema = false,
  personSchema,
  article,
  faqSchema,
  serviceSchema,
  caseStudySchema
}: SEOHeadProps) => {
  const location = useLocation();
  const baseUrl = 'https://cwtstudio.com';
  const fullUrl = canonicalUrl
    ? canonicalUrl.startsWith('http')
      ? canonicalUrl
      : `${baseUrl}${canonicalUrl}`
    : `${baseUrl}${location.pathname}${location.search}`;

  const resolvedKeywords = Array.isArray(keywords)
    ? keywords
    : keywords.split(',').map((value) => value.trim()).filter(Boolean);

  const mergedKeywords = Array.from(
    new Set([
      'cwtstudio.com',
      'studio',
      'backend revenue systems',
      'revenue infrastructure',
      'business automation',
      'Salesforce optimization',
      'revenue operations',
      'high-trust industries',
      ...resolvedKeywords
    ])
  ).join(', ');

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'CWT Studio',
    alternateName: 'Coalescent Web Tech',
    description,
    url: fullUrl,
    logo: `${baseUrl}/favicon.ico`,
    image: ogImage,
    priceRange: '$$$',
    areaServed: ['United States', 'Canada'],
    serviceType: [
      'Backend Revenue Systems',
      'Revenue Infrastructure',
      'Salesforce Optimization',
      'Revenue Operations Consulting',
      'System Installation'
    ],
    knowsAbout: [
      'backend revenue systems',
      'Salesforce optimization',
      'revenue infrastructure',
      'high-trust industries',
      'system installation'
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@thecwtstudio.com',
      contactType: 'Sales',
      availableLanguage: ['English']
    },
    sameAs: ['https://www.linkedin.com/company/cwt-studio']
  };

  // Add BreadcrumbList schema
  const breadcrumbSchema = location.pathname !== '/' ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: title.split('|')[0].trim(),
        item: fullUrl
      }
    ]
  } : null;

  // Organization Schema
  const organizationStructuredData = includeOrganizationSchema ? {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CWT Studio',
    legalName: 'Creator Wealth Tools LLC',
    url: 'https://cwtstudio.com',
    logo: 'https://cwtstudio.com/og-image.jpg',
    foundingDate: '2018',
    founder: {
      '@type': 'Person',
      name: 'Shannon Maguire',
      jobTitle: 'Founder & Revenue Systems Architect'
    },
    description: 'Revenue systems architecture and operations consulting. Fixed-scope implementations, 90-day cycles, documented handoffs.',
    areaServed: 'Worldwide',
    knowsAbout: [
      'Revenue Operations',
      'Salesforce Implementation',
      'Business Automation',
      'Technical Architecture',
      'Systems Integration',
      'Web Development'
    ],
    sameAs: [
      'https://www.linkedin.com/company/cwt-studio'
    ]
  } : null;

  // Person Schema
  const personStructuredData = personSchema ? {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personSchema.name,
    jobTitle: personSchema.jobTitle,
    description: personSchema.description,
    url: personSchema.url || 'https://cwtstudio.com/about',
    worksFor: {
      '@type': 'Organization',
      name: 'CWT Studio'
    },
    ...(personSchema.image && { image: personSchema.image }),
    ...(personSchema.sameAs && { sameAs: personSchema.sameAs })
  } : null;

  // FAQ Schema
  const faqStructuredData = faqSchema ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqSchema.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  } : null;

  // Service Schema
  const serviceStructuredData = serviceSchema ? {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceSchema.name,
    description: serviceSchema.description,
    provider: {
      '@type': 'Organization',
      name: serviceSchema.provider || 'CWT Studio',
      url: 'https://cwtstudio.com'
    },
    areaServed: serviceSchema.areaServed || ['United States', 'Canada'],
    serviceType: 'Backend Revenue Systems',
    ...(serviceSchema.offers && {
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        offerCount: serviceSchema.offers.length.toString(),
        offers: serviceSchema.offers.map(offer => ({
          '@type': 'Offer',
          name: offer.name,
          description: offer.description
        }))
      }
    })
  } : null;

  // Case Study Schema (ItemList of Articles)
  const caseStudyStructuredData = caseStudySchema ? {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'CWT Studio Case Studies',
    description: 'Real results from revenue system implementations',
    itemListElement: caseStudySchema.map((study, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Article',
        headline: study.name,
        description: study.description,
        about: {
          '@type': 'Thing',
          name: study.industry
        },
        abstract: study.result,
        author: {
          '@type': 'Organization',
          name: 'CWT Studio'
        }
      }
    }))
  } : null;

  // NewsArticle Schema for blog posts (better for Google Discover)
  const newsArticleStructuredData = (type === 'article' && article?.isNewsArticle) ? {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: title,
    description: description,
    image: ogImage,
    datePublished: article.publishedTime,
    dateModified: article.modifiedTime || article.publishedTime,
    author: {
      '@type': 'Person',
      name: article.author || 'Shannon Maguire',
      url: 'https://cwtstudio.com/about'
    },
    publisher: {
      '@type': 'Organization',
      name: 'CWT Studio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cwtstudio.com/og-image.jpg'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullUrl
    },
    articleSection: article.section
  } : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={mergedKeywords} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'} />
      <meta name="author" content="CWT Studio" />
      <meta name="theme-color" content="#681038" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="CWT Studio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Article-specific meta tags */}
      {type === 'article' && article?.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
      {type === 'article' && article?.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
      {type === 'article' && article?.author && <meta property="article:author" content={article.author} />}
      {type === 'article' && article?.section && <meta property="article:section" content={article.section} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@cwtstudio" />
      <meta name="twitter:creator" content="@cwtstudio" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      {organizationStructuredData && (
        <script type="application/ld+json">{JSON.stringify(organizationStructuredData)}</script>
      )}
      {personStructuredData && (
        <script type="application/ld+json">{JSON.stringify(personStructuredData)}</script>
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
      {faqStructuredData && (
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
      )}
      {serviceStructuredData && (
        <script type="application/ld+json">{JSON.stringify(serviceStructuredData)}</script>
      )}
      {caseStudyStructuredData && (
        <script type="application/ld+json">{JSON.stringify(caseStudyStructuredData)}</script>
      )}
      {newsArticleStructuredData && (
        <script type="application/ld+json">{JSON.stringify(newsArticleStructuredData)}</script>
      )}
    </Helmet>
  );
};

export default SEOHead;
