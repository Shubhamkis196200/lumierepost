# LumierePost

**An elegant arts, culture, and entertainment publication**

Live site: **https://lumierepost.netlify.app**

---

## Overview

LumierePost is an independent culture and entertainment news website — think Pitchfork meets Vulture meets The New Yorker. Built with React 18, TypeScript, and Tailwind CSS, featuring 15 long-form articles across 7 categories with real, substantive culture criticism.

## Design Philosophy

- **Rich Black (#111111) header** — commanding, editorial presence
- **Warm Cream (#FFF9F0) body** — elegant, reading-optimized background
- **Magenta (#E91E63) accents** — bold, artistic highlight color
- **Gold (#FFB300) secondary** — warmth and prestige

### Typography
- **Playfair Display** — Headlines (serif, editorial)
- **Lora** — Article body (serif, high readability)
- **Inter** — UI elements (sans-serif, modern)

Design inspiration: Criterion Collection + The New Yorker + Pitchfork

## Features

### Content
- **15 full articles** (1000-1500 words each) with real culture criticism
- **7 categories**: Film, Music, Art, Books, Theater, Fashion, Television
- Topics include:
  - Best films of 2026
  - Jazz resurgence in streaming era
  - AI art controversy at museums
  - Nobel Prize literature predictions
  - Broadway's boldest new season
  - Sustainable fashion revolution
  - Peak TV: what survived
  - Independent film renaissance
  - Top album releases 2026
  - Venice Architecture Biennale
  - Photography in the iPhone era
  - Dance companies pushing boundaries
  - Podcast golden age analysis
  - Gaming as legitimate art
  - Street art going mainstream

### Design Elements
- **Drop caps** on first paragraph
- **Pull quotes** styled with magenta accent
- **Hero images** with gradient overlays
- **Category color coding** for visual organization
- **Generous whitespace** for readability
- **Author bios** with avatars
- **Share buttons** for social media
- **Related articles** suggestions
- **Newsletter signup** with elegant forms

### Technical Features
- ⚡ **React 18** + **Vite** for blazing fast development
- 📱 **Fully responsive** design
- ♿ **Semantic HTML** and ARIA labels
- 🎨 **Tailwind CSS** with custom design system
- 🔍 **SEO optimized**:
  - JSON-LD structured data (NewsArticle + Organization)
  - sitemap.xml
  - robots.txt
  - RSS feed
  - Open Graph tags
  - Twitter Card meta
  - Canonical URLs
  - Breadcrumb navigation

## Pages

- **Homepage**: Large hero feature + Editor's Picks + category sections + "This Week" sidebar
- **Article pages**: Hero image, drop cap, pull quotes, author bio, share buttons, related articles
- **Category pages**: Filtered article listings by category
- **About page**: Editorial mission and values

## Tech Stack

- **React 18.3** — UI framework
- **TypeScript** — Type safety
- **Vite 7** — Build tool
- **Tailwind CSS** — Styling (via @tailwindcss/vite)
- **React Router 6** — Client-side routing
- **React Helmet Async** — SEO meta tags

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Generate sitemap and RSS
npx tsx generate-seo.ts
```

## Deployment

- **GitHub**: https://github.com/Shubhamkis196200/lumierepost
- **Netlify**: https://lumierepost.netlify.app
- **Auto-deploy**: Configured via netlify.toml

## Project Structure

```
lumierepost/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ArticleCards.tsx
│   │   └── SEO.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── ArticlePage.tsx
│   │   ├── CategoryPage.tsx
│   │   └── AboutPage.tsx
│   ├── data/
│   │   └── articles.ts (15 full articles)
│   ├── index.css (custom design system)
│   └── App.tsx
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── rss.xml
│   └── _redirects (SPA routing)
├── generate-seo.ts (sitemap/RSS generator)
└── netlify.toml
```

## Quality Standards

This project was built with a **10/10 or nothing** mentality:

✅ Real, substantive long-form articles (not lorem ipsum)  
✅ Elegant, editorial design worthy of a premium publication  
✅ Fully functional routing, SEO, and social sharing  
✅ Professional color palette and typography  
✅ Responsive design from mobile to desktop  
✅ Clean, maintainable TypeScript codebase  
✅ Production-ready deployment  

## License

MIT

---

**LumierePost** — *Independent arts and culture criticism for the modern age.*
