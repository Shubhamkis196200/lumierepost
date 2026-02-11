import { Link } from 'react-router-dom';
import { categories } from '../data/articles';

export default function Footer() {
  return (
    <footer className="bg-rich-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/">
              <h2 className="font-display text-3xl font-bold">Lumière<span className="text-magenta">Post</span></h2>
            </Link>
            <p className="font-body text-warm-gray mt-4 text-sm leading-relaxed">
              Independent arts and culture criticism. Thoughtful, rigorous, and uncompromising since 2026.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-ui text-xs tracking-[0.2em] uppercase text-gold mb-4 font-semibold">Sections</h3>
            <ul className="space-y-2">
              {categories.map(cat => (
                <li key={cat}>
                  <Link to={`/category/${cat.toLowerCase()}`} className="font-ui text-sm text-warm-gray hover:text-white transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-ui text-xs tracking-[0.2em] uppercase text-gold mb-4 font-semibold">About</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="font-ui text-sm text-warm-gray hover:text-white transition-colors">Our Mission</Link></li>
              <li><a href="#newsletter" className="font-ui text-sm text-warm-gray hover:text-white transition-colors">Newsletter</a></li>
              <li><a href="/rss.xml" className="font-ui text-sm text-warm-gray hover:text-white transition-colors">RSS Feed</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-ui text-xs tracking-[0.2em] uppercase text-gold mb-4 font-semibold">Stay Informed</h3>
            <p className="font-ui text-sm text-warm-gray mb-4">Weekly dispatches from the frontlines of culture.</p>
            <form onSubmit={e => e.preventDefault()} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-white/10 border border-white/20 rounded px-3 py-2 text-sm font-ui text-white placeholder-warm-gray focus:outline-none focus:border-magenta transition-colors"
              />
              <button className="bg-magenta hover:bg-magenta-dark text-white font-ui text-sm font-medium py-2 px-4 rounded transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-ui text-xs text-warm-gray">© 2026 LumierePost. All rights reserved.</p>
          <p className="font-ui text-xs text-warm-gray">Independent arts criticism for the modern age.</p>
        </div>
      </div>
    </footer>
  );
}
