import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Home() {
  return (
    <div>
      <SEO />
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple via-purple-light to-gold py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6">LumierePost</h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Your premier destination for culture & entertainment tools, insights, and analysis
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/tools" className="bg-white text-purple px-8 py-4 rounded-xl font-semibold hover:bg-cream transition-colors">
              Explore Tools
            </Link>
            <Link to="/blog" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
              Read Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Explore by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Movies', 'Music', 'Books', 'TV', 'Art', 'Streaming', 'Celebrity', 'General'].map(cat => (
            <Link key={cat} to="/tools" 
              className="bg-white card-shadow rounded-2xl p-6 text-center card-hover">
              <div className="text-4xl mb-3">
                {cat === 'Movies' ? '🎬' : cat === 'Music' ? '🎵' : cat === 'Books' ? '📚' : 
                 cat === 'TV' ? '📺' : cat === 'Art' ? '🎨' : cat === 'Streaming' ? '📡' :
                 cat === 'Celebrity' ? '⭐' : '🌟'}
              </div>
              <h3 className="font-semibold text-purple">{cat}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Tools */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Binge Watch Calculator', desc: 'Calculate how long it takes to watch an entire series', path: 'binge-calculator' },
              { title: 'Movie Recommendation Engine', desc: 'Get personalized movie recommendations', path: 'movie-recommender' },
              { title: 'Reading Speed Calculator', desc: 'Find out how long a book will take to read', path: 'reading-speed-calculator' },
              { title: 'Rating Converter', desc: 'Convert between IMDb, Rotten Tomatoes, and Metacritic', path: 'rating-converter' },
              { title: 'Box Office Estimator', desc: 'Predict box office performance', path: 'box-office-estimator' },
              { title: 'Reading List Generator', desc: 'Generate a personalized reading list', path: 'reading-list-generator' },
            ].map(tool => (
              <Link key={tool.path} to={`/tools/${tool.path}`}
                className="bg-white rounded-2xl p-6 card-shadow card-hover">
                <h3 className="text-xl font-semibold text-purple mb-2">{tool.title}</h3>
                <p className="text-warm-gray text-sm">{tool.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/tools" className="gold-gradient text-white px-8 py-4 rounded-xl font-semibold inline-block hover:opacity-90 transition-opacity">
              View All Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '50+', label: 'Interactive Tools' },
            { value: '8', label: 'Categories' },
            { value: 'Free', label: 'All Tools' },
            { value: '24/7', label: 'Available' },
          ].map(stat => (
            <div key={stat.label}>
              <div className="text-4xl font-bold text-gold mb-2">{stat.value}</div>
              <div className="text-warm-gray">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
