import { articles, getFeaturedArticle, getEditorsPickArticles, categories, getArticlesByCategory, categoryColors } from '../data/articles';
import { HeroCard, ArticleCard, Newsletter } from '../components/ArticleCards';
import { Link } from 'react-router-dom';
import SEO, { OrganizationJsonLd } from '../components/SEO';

export default function HomePage() {
  const featured = getFeaturedArticle();
  const editorsPicks = getEditorsPickArticles().filter(a => a.id !== featured.id);
  const recentArticles = articles.filter(a => !a.featured).slice(0, 5);

  return (
    <>
      <SEO
        title="Home"
        description="LumierePost — Independent arts, culture, and entertainment criticism. Film, music, art, books, theater, fashion, and television."
        url="https://lumierepost.netlify.app"
      />
      <OrganizationJsonLd />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero */}
        <section className="mb-16 animate-fade-in-up">
          <HeroCard article={featured} />
        </section>

        {/* Editor's Picks */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold">Editor's Picks</h2>
            <div className="flex-1 h-px bg-light-gray" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {editorsPicks.map(article => (
              <ArticleCard key={article.id} article={article} size="medium" />
            ))}
          </div>
        </section>

        {/* Main content + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Category sections */}
          <div className="lg:col-span-2 space-y-16">
            {categories.slice(0, 4).map(cat => {
              const catArticles = getArticlesByCategory(cat);
              if (catArticles.length === 0) return null;
              return (
                <section key={cat}>
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="font-display text-xl font-bold" style={{ color: categoryColors[cat] }}>{cat}</h2>
                    <div className="flex-1 h-px bg-light-gray" />
                    <Link to={`/category/${cat.toLowerCase()}`} className="font-ui text-xs tracking-wider uppercase text-warm-gray hover:text-magenta transition-colors">
                      View All →
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {catArticles.slice(0, 2).map(article => (
                      <ArticleCard key={article.id} article={article} size="medium" />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* This Week */}
              <div className="bg-cream-dark rounded-xl p-6">
                <h3 className="font-display text-lg font-bold mb-6 pb-3 border-b-2 border-magenta">This Week</h3>
                <div className="space-y-6">
                  {recentArticles.map((article, i) => (
                    <div key={article.id} className="flex gap-4">
                      <span className="font-display text-3xl font-bold text-light-gray leading-none">{String(i + 1).padStart(2, '0')}</span>
                      <div>
                        <Link to={`/article/${article.slug}`} className="font-display text-sm font-bold leading-snug hover:text-magenta transition-colors block">
                          {article.title}
                        </Link>
                        <span className="font-ui text-xs text-warm-gray mt-1 block">{article.category} · {article.readTime}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mini newsletter */}
              <div className="bg-rich-black rounded-xl p-6 text-center">
                <span className="font-ui text-xs tracking-[0.2em] uppercase text-gold">Newsletter</span>
                <h3 className="font-display text-lg font-bold text-white mt-2 mb-3">The Weekly Lumière</h3>
                <p className="font-ui text-xs text-warm-gray mb-4">Culture criticism, delivered Fridays.</p>
                <form onSubmit={e => e.preventDefault()}>
                  <input type="email" placeholder="your@email.com" className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 text-xs font-ui text-white placeholder-warm-gray focus:outline-none focus:border-magenta mb-2" />
                  <button className="w-full bg-magenta hover:bg-magenta-dark text-white font-ui text-xs font-semibold py-2 rounded transition-colors">Subscribe</button>
                </form>
              </div>
            </div>
          </aside>
        </div>

        {/* Newsletter full */}
        <Newsletter />
      </main>
    </>
  );
}
