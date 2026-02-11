import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import SEO from './SEO'

interface ToolLayoutProps {
  title: string
  description: string
  category: string
  children: ReactNode
}

export default function ToolLayout({ title, description, category, children }: ToolLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      <SEO title={title} description={description} />
      <nav className="text-sm text-warm-gray mb-6">
        <Link to="/" className="hover:text-gold-dark">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/tools" className="hover:text-gold-dark">Tools</Link>
        <span className="mx-2">›</span>
        <span className="text-purple">{category}</span>
      </nav>
      <h1 className="text-3xl sm:text-4xl font-bold mb-3">{title}</h1>
      <p className="text-warm-gray text-lg mb-8">{description}</p>
      <div className="bg-white rounded-2xl card-shadow p-6 sm:p-8">
        {children}
      </div>
    </div>
  )
}
