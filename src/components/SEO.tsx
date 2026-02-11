import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  type?: string
}

export default function SEO({ title, description, type = 'website' }: SEOProps) {
  const siteName = 'LumierePost'
  const baseUrl = 'https://lumierepost.netlify.app'
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} — Culture & Entertainment Tools & Insights`
  const desc = description || 'Your premier destination for culture & entertainment tools, calculators, and editorial insights covering movies, music, books, TV, and art.'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={baseUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': type === 'article' ? 'Article' : 'WebSite',
          name: fullTitle,
          description: desc,
          url: baseUrl,
        })}
      </script>
    </Helmet>
  )
}
