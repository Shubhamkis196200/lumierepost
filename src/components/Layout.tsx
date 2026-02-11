import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-light-gray">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center text-white font-bold text-sm">L</div>
            <span className="font-serif text-xl font-bold text-purple">LumierePost</span>
          </Link>
          <div className="flex items-center gap-8">
            {[{l:'Home',p:'/'},{l:'Tools',p:'/tools'},{l:'Blog',p:'/blog'},{l:'About',p:'/about'}].map(l => (
              <Link key={l.p} to={l.p} className="text-sm font-medium text-charcoal hover:text-gold-dark">{l.l}</Link>
            ))}
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-purple text-white/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-sm">© {new Date().getFullYear()} LumierePost. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
