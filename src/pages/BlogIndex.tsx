import SEO from '../components/SEO'

export default function BlogIndex() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO title="Blog" description="Culture & entertainment articles and insights" />
      <h1 className="text-4xl font-bold mb-3">Blog</h1>
      <p className="text-lg text-warm-gray mb-10">
        In-depth articles covering the latest in culture & entertainment.
      </p>
      <div className="text-center text-warm-gray py-20">
        Coming soon: In-depth articles on movies, music, books, TV, and more.
      </div>
    </div>
  )
}
