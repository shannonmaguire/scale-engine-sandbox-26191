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
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
  };
  faqSchema?: Array<{
    question: string;
    answer: string;
  }>;
  serviceSchema?: {
    name: string;
    description: string;
    provider: string;
    areaServed?: string[];
    offers?: {
      price: string;
      priceCurrency: string;
      description?: string;
    };
  };
}

const SEOHead = ({
  title = 'CWT Studio | Backend Revenue Systems & Infrastructure',
  description = 'Install backend revenue systems that scale. Assessment, Sprint, and Fractional Ops for legal, compliance, cybersecurity, and B2B SaaS.',
  keywords = [
    'cwtstudio.com',
    'studio',
    'backend revenue systems',
    'revenue infrastructure',
    'business automation services',
    'Salesforce implementation',
    'Salesforce optimization',
    'revenue operations',
    'high-trust industries'
  ],
  ogImage = 'https://cwtstudio.com/og-image.jpg',
  canonicalUrl,
  noindex = false,
  type = 'website',
  article,
  faqSchema,
  serviceSchema
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
      email: 'hello@cwtstudio.com',
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
      name: 'CWT Studio',
      url: 'https://cwtstudio.com'
    },
    areaServed: serviceSchema.areaServed || ['United States', 'Canada'],
    serviceType: 'Backend Revenue Systems',
    ...(serviceSchema.offers && {
      offers: {
        '@type': 'Offer',
        price: serviceSchema.offers.price,
        priceCurrency: serviceSchema.offers.priceCurrency,
        description: serviceSchema.offers.description
      }
    })
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
      {type === 'article' && article && (
        <>
          {article.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
          {article.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
          {article.author && <meta property="article:author" content={article.author} />}
          {article.section && <meta property="article:section" content={article.section} />}
        </>
      )}

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
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
      {faqStructuredData && (
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
      )}
      {serviceStructuredData && (
        <script type="application/ld+json">{JSON.stringify(serviceStructuredData)}</script>
      )}
    </Helmet>
  );
};

export default SEOHead;
