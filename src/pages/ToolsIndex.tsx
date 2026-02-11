import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { toolsByCategory } from '../data/toolRegistry'

export default function ToolsIndex() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO title="All Tools" description="Browse 50+ interactive culture & entertainment tools" />
      <h1 className="text-4xl font-bold mb-3">All Tools</h1>
      <p className="text-lg text-warm-gray mb-10">
        Explore our complete collection of {Object.values(toolsByCategory).flat().length}+ interactive tools for movies, music, books, TV, and more.
      </p>
      
      {Object.entries(toolsByCategory).map(([category, tools]) => (
        <section key={category} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-purple">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map(tool => (
              <Link key={tool.path} to={`/tools/${tool.path}`}
                className="bg-white rounded-xl p-6 card-shadow card-hover">
                <h3 className="text-lg font-semibold text-purple mb-2">{tool.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
