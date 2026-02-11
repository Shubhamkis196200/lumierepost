import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: string;
  publishedTime?: string;
  author?: string;
  section?: string;
}

export default function SEO({ title, description, url, image, type = 'website', publishedTime, author, section }: SEOProps) {
  const siteName = 'LumierePost';
  const fullTitle = `${title} | ${siteName}`;
  const defaultImage = 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&h=630&fit=crop';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {author && <meta property="article:author" content={author} />}
      {section && <meta property="article:section" content={section} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
}

export function ArticleJsonLd({ title, description, url, image, datePublished, authorName, section }: {
  title: string; description: string; url: string; image: string;
  datePublished: string; authorName: string; section: string;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: title,
    description,
    image,
    url,
    datePublished,
    dateModified: datePublished,
    author: { '@type': 'Person', name: authorName },
    publisher: {
      '@type': 'Organization',
      name: 'LumierePost',
      logo: { '@type': 'ImageObject', url: 'https://lumierepost.netlify.app/logo.png' },
    },
    articleSection: section,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}

export function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LumierePost',
    url: 'https://lumierepost.netlify.app',
    logo: 'https://lumierepost.netlify.app/logo.png',
    description: 'Independent arts and culture criticism for the modern age.',
    sameAs: [],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
