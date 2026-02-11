import SEO from '../components/SEO'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO title="About" description="Learn more about LumierePost" />
      <h1 className="text-4xl font-bold mb-6">About LumierePost</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-warm-gray leading-relaxed mb-6">
          LumierePost is your premier destination for culture & entertainment tools, insights, and analysis. 
          We believe that understanding and engaging with art, film, music, literature, and popular culture 
          should be accessible, interactive, and fun.
        </p>
        <h2 className="text-2xl font-bold text-purple mt-8 mb-4">Our Mission</h2>
        <p className="text-warm-gray leading-relaxed mb-6">
          We provide 50+ free interactive tools that help you explore, analyze, and enjoy culture in new ways. 
          From calculating how long it takes to binge-watch your favorite series to estimating box office performance, 
          our tools make entertainment more engaging.
        </p>
        <h2 className="text-2xl font-bold text-purple mt-8 mb-4">What We Offer</h2>
        <ul className="space-y-3 text-warm-gray">
          <li className="flex items-start gap-3">
            <span className="text-gold text-xl">✓</span>
            <span><strong>50+ Interactive Tools</strong> — Real calculators, generators, and analyzers for movies, music, books, TV, and more</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gold text-xl">✓</span>
            <span><strong>Editorial Insights</strong> — In-depth articles covering trends, analysis, and commentary</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gold text-xl">✓</span>
            <span><strong>Always Free</strong> — All tools and content are completely free to use</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gold text-xl">✓</span>
            <span><strong>No Registration</strong> — Jump right in and start using our tools immediately</span>
          </li>
        </ul>
        <h2 className="text-2xl font-bold text-purple mt-8 mb-4">Categories</h2>
        <div className="grid grid-cols-2 gap-4">
          {['Movies', 'Music', 'Books', 'TV', 'Art', 'Streaming', 'Celebrity', 'General'].map(cat => (
            <div key={cat} className="bg-cream rounded-lg p-4">
              <div className="font-semibold text-purple">{cat}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
