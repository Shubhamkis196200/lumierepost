import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Newsletter } from '../components/ArticleCards';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        description="LumierePost is an independent publication dedicated to arts, culture, and entertainment criticism of the highest standard."
        url="https://lumierepost.netlify.app/about"
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <nav className="font-ui text-xs text-warm-gray mb-8">
          <Link to="/" className="hover:text-magenta">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-rich-black">About</span>
        </nav>

        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">About Lumière<span className="text-magenta">Post</span></h1>

        <div className="h-1 w-16 bg-magenta rounded mb-12" />

        <div className="article-body max-w-3xl">
          <p className="drop-cap">
            LumierePost was founded in 2026 with a simple conviction: that arts and culture criticism matters — not as a luxury or an afterthought, but as an essential practice of democratic life. In a world saturated with content and starved of context, we believe the role of the critic has never been more vital.
          </p>

          <p>
            We cover film, music, visual art, literature, theater, fashion, and television with the rigor, depth, and independence that these art forms deserve. Our critics are practitioners as well as observers — filmmakers, musicians, novelists, curators — who bring insider knowledge and outsider perspective to everything they write.
          </p>

          <h2>Our Editorial Mission</h2>

          <p>
            We reject the false choice between accessibility and sophistication. Great criticism should be both — engaging enough to draw in the curious reader and substantive enough to reward the expert. Every piece we publish aspires to this standard.
          </p>

          <p>
            We are independent. We accept no advertising from the industries we cover. Our critics are free to write what they believe, without commercial pressure or institutional constraint. This independence is not a luxury — it is the foundation of everything we do.
          </p>

          <h2>What We Believe</h2>

          <p>
            We believe that art is not entertainment, though it can be entertaining. We believe that criticism is not opinion, though it is always personal. We believe that culture is not content, though it is increasingly delivered as such. And we believe that the conversation between art and its audience — mediated by criticism — is one of the most important conversations a society can have.
          </p>

          <p>
            We believe in the power of long-form writing to illuminate, challenge, and transform. In an era of hot takes and algorithmic recommendation, we choose depth over speed, nuance over certainty, and understanding over engagement.
          </p>

          <h2>Join Us</h2>

          <p>
            LumierePost is free to read. We are supported by our readers through voluntary subscriptions and by foundations committed to independent journalism. If you value what we do, consider subscribing to our weekly newsletter — it's the best way to stay connected with our work and support our mission.
          </p>
        </div>

        <div className="mt-16">
          <Newsletter />
        </div>
      </main>
    </>
  );
}
