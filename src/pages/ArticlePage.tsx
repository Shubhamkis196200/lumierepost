import { useParams, Link } from 'react-router-dom';
import { getArticleBySlug, articles, categoryColors } from '../data/articles';
import SEO, { ArticleJsonLd } from '../components/SEO';
import { ArticleCard } from '../components/ArticleCards';

function ShareButton({ icon, label, onClick }: { icon: string; label: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-cream-dark hover:bg-light-gray transition-colors font-ui text-xs text-warm-gray" title={label}>
      <span>{icon}</span>
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || '');

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="font-display text-4xl font-bold mb-4">Article Not Found</h1>
        <Link to="/" className="font-ui text-magenta hover:underline">Return home</Link>
      </div>
    );
  }

  const relatedArticles = articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  const url = `https://lumierepost.netlify.app/article/${article.slug}`;

  // Process content: handle <pullquote> tags
  const processContent = (content: string) => {
    const parts = content.split(/(<pullquote>.*?<\/pullquote>)/gs);
    return parts.map((part, i) => {
      const pqMatch = part.match(/<pullquote>(.*?)<\/pullquote>/s);
      if (pqMatch) {
        return <blockquote key={i} className="pull-quote">{pqMatch[1]}</blockquote>;
      }
      // Split into paragraphs
      return part.split('\n\n').filter(p => p.trim()).map((para, j) => {
        if (j === 0 && i === 0) {
          return <p key={`${i}-${j}`} className="drop-cap">{para.trim()}</p>;
        }
        if (para.trim().startsWith('**') && para.trim().endsWith('**')) {
          return <h2 key={`${i}-${j}`}>{para.trim().replace(/\*\*/g, '')}</h2>;
        }
        return <p key={`${i}-${j}`}>{para.trim()}</p>;
      });
    });
  };

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
        url={url}
        image={article.heroImage}
        type="article"
        publishedTime={article.date}
        author={article.author.name}
        section={article.category}
      />
      <ArticleJsonLd
        title={article.title}
        description={article.excerpt}
        url={url}
        image={article.heroImage}
        datePublished={article.date}
        authorName={article.author.name}
        section={article.category}
      />

      <article className="animate-fade-in-up">
        {/* Hero */}
        <div className="relative">
          <div className="aspect-[21/9] max-h-[500px]">
            <img src={article.heroImage} alt={article.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>

        {/* Article header */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-24 relative z-10">
          <div className="bg-cream rounded-t-xl pt-10 px-4 sm:px-8">
            {/* Breadcrumbs */}
            <nav className="font-ui text-xs text-warm-gray mb-4">
              <Link to="/" className="hover:text-magenta">Home</Link>
              <span className="mx-2">›</span>
              <Link to={`/category/${article.category.toLowerCase()}`} className="hover:text-magenta">{article.category}</Link>
              <span className="mx-2">›</span>
              <span className="text-rich-black">{article.title.substring(0, 40)}…</span>
            </nav>

            <span
              className="inline-block px-3 py-1 text-xs font-ui font-semibold tracking-wider uppercase text-white rounded-full mb-4"
              style={{ backgroundColor: categoryColors[article.category] }}
            >
              {article.category}
            </span>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              {article.title}
            </h1>
            <p className="font-display text-xl text-warm-gray italic leading-relaxed mb-6">
              {article.subtitle}
            </p>

            {/* Author & meta */}
            <div className="flex items-center gap-4 pb-6 border-b border-light-gray">
              <img src={article.author.avatar} alt={article.author.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p className="font-ui text-sm font-semibold">{article.author.name}</p>
                <p className="font-ui text-xs text-warm-gray">{article.author.role}</p>
              </div>
              <div className="ml-auto text-right">
                <p className="font-ui text-xs text-warm-gray">{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p className="font-ui text-xs text-warm-gray">{article.readTime}</p>
              </div>
            </div>

            {/* Share */}
            <div className="flex items-center gap-2 py-4 border-b border-light-gray">
              <span className="font-ui text-xs text-warm-gray mr-2">Share</span>
              <ShareButton icon="𝕏" label="Twitter" onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(article.title)}`)} />
              <ShareButton icon="f" label="Facebook" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`)} />
              <ShareButton icon="✉" label="Email" onClick={() => window.open(`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(url)}`)} />
              <ShareButton icon="🔗" label="Copy" onClick={() => navigator.clipboard.writeText(url)} />
            </div>
          </div>
        </div>

        {/* Article body */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-cream px-4 sm:px-8 pb-12">
            <div className="article-body pt-8">
              {processContent(article.content)}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-light-gray">
              {article.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-cream-dark rounded-full font-ui text-xs text-warm-gray">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Author bio */}
            <div className="mt-8 p-6 bg-cream-dark rounded-xl flex gap-4 items-start">
              <img src={article.author.avatar} alt={article.author.name} className="w-16 h-16 rounded-full object-cover flex-shrink-0" />
              <div>
                <p className="font-ui text-sm font-semibold">{article.author.name}</p>
                <p className="font-ui text-xs text-magenta mb-2">{article.author.role}</p>
                <p className="font-body text-sm text-warm-gray leading-relaxed">{article.author.bio}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related articles */}
        {relatedArticles.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-display text-2xl font-bold">Related Articles</h2>
              <div className="flex-1 h-px bg-light-gray" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map(a => (
                <ArticleCard key={a.id} article={a} size="medium" />
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
