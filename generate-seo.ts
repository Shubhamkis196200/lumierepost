import { writeFileSync } from 'fs';
import { articles } from './src/data/articles';

const BASE_URL = 'https://lumierepost.netlify.app';

// Generate sitemap
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${BASE_URL}/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  ${['Film', 'Music', 'Art', 'Books', 'Theater', 'Fashion', 'Television'].map(cat => `<url>
    <loc>${BASE_URL}/category/${cat.toLowerCase()}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`).join('\n  ')}
  ${articles.map(article => `<url>
    <loc>${BASE_URL}/article/${article.slug}</loc>
    <lastmod>${article.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n  ')}
</urlset>`;

writeFileSync('public/sitemap.xml', sitemap);

// Generate RSS feed
const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>LumierePost</title>
    <link>${BASE_URL}</link>
    <description>Independent arts and culture criticism for the modern age</description>
    <language>en-us</language>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    ${articles.slice(0, 10).map(article => `<item>
      <title>${article.title}</title>
      <link>${BASE_URL}/article/${article.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/article/${article.slug}</guid>
      <description>${article.excerpt}</description>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      <category>${article.category}</category>
      <author>${article.author.name}</author>
    </item>`).join('\n    ')}
  </channel>
</rss>`;

writeFileSync('public/rss.xml', rss);

console.log('✅ Generated sitemap.xml and rss.xml');
