import { Link } from 'react-router-dom';
import { categories, categoryColors, type Category } from '../data/articles';

export default function Header() {
  return (
    <header className="bg-rich-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex items-center justify-between py-3 border-b border-white/10 text-xs font-ui tracking-wider uppercase">
          <span className="text-warm-gray">Culture • Film • Music • Art</span>
          <div className="flex items-center gap-6">
            <Link to="/about" className="text-warm-gray hover:text-white transition-colors">About</Link>
            <a href="#newsletter" className="text-gold hover:text-gold-dark transition-colors font-medium">Subscribe</a>
          </div>
        </div>

        {/* Logo */}
        <div className="py-6 text-center">
          <Link to="/">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Lumière<span className="text-magenta">Post</span>
            </h1>
            <p className="font-ui text-xs tracking-[0.3em] uppercase text-warm-gray mt-2">Arts • Culture • Criticism</p>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex items-center justify-center gap-1 pb-4 overflow-x-auto">
          {categories.map((cat: Category) => (
            <Link
              key={cat}
              to={`/category/${cat.toLowerCase()}`}
              className="px-4 py-2 text-sm font-ui font-medium tracking-wide uppercase text-warm-gray hover:text-white transition-colors whitespace-nowrap"
              style={{ borderBottom: `2px solid transparent` }}
              onMouseEnter={e => (e.currentTarget.style.borderBottomColor = categoryColors[cat])}
              onMouseLeave={e => (e.currentTarget.style.borderBottomColor = 'transparent')}
            >
              {cat}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
