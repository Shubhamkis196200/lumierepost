import { useParams, Link } from 'react-router-dom';
import { getArticlesByCategory, categories, categoryColors, type Category } from '../data/articles';
import { ArticleCard } from '../components/ArticleCards';
import SEO from '../components/SEO';

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const cat = categories.find(c => c.toLowerCase() === category?.toLowerCase()) as Category | undefined;

  if (!cat) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="font-display text-4xl font-bold mb-4">Category Not Found</h1>
        <Link to="/" className="font-ui text-magenta hover:underline">Return home</Link>
      </div>
    );
  }

  const catArticles = getArticlesByCategory(cat);

  return (
    <>
      <SEO
        title={cat}
        description={`${cat} coverage from LumierePost — thoughtful criticism and cultural commentary.`}
        url={`https://lumierepost.netlify.app/category/${cat.toLowerCase()}`}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <nav className="font-ui text-xs text-warm-gray mb-4">
            <Link to="/" className="hover:text-magenta">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-rich-black">{cat}</span>
          </nav>
          <h1 className="font-display text-4xl sm:text-5xl font-bold" style={{ color: categoryColors[cat] }}>
            {cat}
          </h1>
          <div className="h-1 w-16 mt-4 rounded" style={{ backgroundColor: categoryColors[cat] }} />
        </div>

        {catArticles.length === 0 ? (
          <p className="font-body text-warm-gray text-lg">No articles in this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catArticles.map(article => (
              <ArticleCard key={article.id} article={article} size="large" />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
