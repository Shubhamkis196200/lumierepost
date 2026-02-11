import { Link } from 'react-router-dom';
import { type Article, categoryColors } from '../data/articles';

export function HeroCard({ article }: { article: Article }) {
  return (
    <Link to={`/article/${article.slug}`} className="group block relative overflow-hidden rounded-lg">
      <div className="aspect-[16/9] lg:aspect-[21/9]">
        <img
          src={article.heroImage}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
        <span
          className="inline-block px-3 py-1 text-xs font-ui font-semibold tracking-wider uppercase text-white rounded-full mb-4"
          style={{ backgroundColor: categoryColors[article.category] }}
        >
          {article.category}
        </span>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-tight mb-3 group-hover:text-gold transition-colors">
          {article.title}
        </h2>
        <p className="font-body text-white/80 text-sm sm:text-base lg:text-lg max-w-3xl leading-relaxed line-clamp-2">
          {article.subtitle}
        </p>
        <div className="flex items-center gap-4 mt-4">
          <img src={article.author.avatar} alt={article.author.name} className="w-8 h-8 rounded-full object-cover" />
          <span className="font-ui text-sm text-white/70">{article.author.name}</span>
          <span className="font-ui text-sm text-white/50">·</span>
          <span className="font-ui text-sm text-white/50">{article.readTime}</span>
        </div>
      </div>
    </Link>
  );
}

export function ArticleCard({ article, size = 'medium' }: { article: Article; size?: 'small' | 'medium' | 'large' }) {
  return (
    <Link to={`/article/${article.slug}`} className="group block">
      {size !== 'small' && (
        <div className={`overflow-hidden rounded-lg mb-4 ${size === 'large' ? 'aspect-[16/10]' : 'aspect-[16/9]'}`}>
          <img
            src={article.heroImage}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className={size === 'small' ? 'flex gap-4' : ''}>
        {size === 'small' && (
          <img src={article.heroImage} alt={article.title} className="w-20 h-20 rounded object-cover flex-shrink-0" />
        )}
        <div>
          <span
            className="inline-block text-xs font-ui font-semibold tracking-wider uppercase mb-2"
            style={{ color: categoryColors[article.category] }}
          >
            {article.category}
          </span>
          <h3 className={`font-display font-bold leading-snug group-hover:text-magenta transition-colors ${
            size === 'large' ? 'text-2xl' : size === 'small' ? 'text-sm' : 'text-lg'
          }`}>
            {article.title}
          </h3>
          {size !== 'small' && (
            <p className="font-body text-warm-gray text-sm mt-2 line-clamp-2">{article.subtitle}</p>
          )}
          <div className="flex items-center gap-2 mt-2">
            <span className="font-ui text-xs text-warm-gray">{article.author.name}</span>
            <span className="font-ui text-xs text-light-gray">·</span>
            <span className="font-ui text-xs text-warm-gray">{article.readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function Newsletter() {
  return (
    <section id="newsletter" className="bg-rich-black rounded-xl p-8 sm:p-12 text-center">
      <div className="max-w-xl mx-auto">
        <span className="font-ui text-xs tracking-[0.3em] uppercase text-gold font-semibold">Newsletter</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
          The Weekly Lumière
        </h2>
        <p className="font-body text-warm-gray mb-8 leading-relaxed">
          Every Friday, our editors curate the week's essential culture — the films, albums, exhibitions, and ideas that matter most. Delivered to your inbox with the care and discernment you expect from LumierePost.
        </p>
        <form onSubmit={e => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm font-ui text-white placeholder-warm-gray focus:outline-none focus:border-magenta transition-colors"
          />
          <button className="bg-magenta hover:bg-magenta-dark text-white font-ui text-sm font-semibold py-3 px-6 rounded-lg transition-colors whitespace-nowrap">
            Subscribe Free
          </button>
        </form>
        <p className="font-ui text-xs text-warm-gray mt-4">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
