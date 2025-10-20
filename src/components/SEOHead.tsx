import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
  ogImage?: string;
  canonicalUrl?: string;
  noindex?: boolean;
}

const SEOHead = ({
  title = 'CWT Studio | Business Automation & Salesforce Specialists',
  description = 'CWT Studio delivers business automation, Salesforce optimization, and custom software to help operators scale with confidence.',
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
  noindex = false
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

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={mergedKeywords} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="author" content="CWT Studio" />
      <meta name="theme-color" content="#681038" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="CWT Studio" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@cwtstudio" />

      <link rel="canonical" href={fullUrl} />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
    </Helmet>
  );
};

export default SEOHead;
