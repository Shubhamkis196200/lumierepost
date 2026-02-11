export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: Category;
  author: Author;
  date: string;
  readTime: string;
  heroImage: string;
  excerpt: string;
  content: string;
  tags: string[];
  featured?: boolean;
  editorsPick?: boolean;
}

export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export type Category = 'Film' | 'Music' | 'Art' | 'Books' | 'Theater' | 'Fashion' | 'Television';

export const categories: Category[] = ['Film', 'Music', 'Art', 'Books', 'Theater', 'Fashion', 'Television'];

export const categoryColors: Record<Category, string> = {
  Film: '#E91E63',
  Music: '#FFB300',
  Art: '#7B1FA2',
  Books: '#2E7D32',
  Theater: '#D84315',
  Fashion: '#00838F',
  Television: '#1565C0',
};

const authors: Author[] = [
  { name: 'Margaux Delacroix', role: 'Senior Film Critic', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop', bio: 'Margaux Delacroix has covered cinema for over a decade, contributing to Cahiers du Cinéma and Film Comment.' },
  { name: 'Elijah Okonkwo', role: 'Music Editor', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop', bio: 'Elijah Okonkwo is a music journalist whose writing spans jazz, hip-hop, and experimental electronics.' },
  { name: 'Saoirse Chen', role: 'Arts Correspondent', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop', bio: 'Saoirse Chen reports on visual arts and technology. Former curator at ICA London.' },
  { name: 'Théo Marchand', role: 'Literary Critic', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop', bio: 'Théo Marchand is a novelist and literary critic based in Montreal.' },
  { name: 'Priya Nair', role: 'Theater Editor', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop', bio: 'Priya Nair covers theater and live performance. Former dramaturge with MFA from Yale.' },
  { name: 'Cassandra Voss', role: 'Fashion Writer', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop', bio: 'Cassandra Voss writes about fashion as cultural text. Previously at Vogue and i-D.' },
  { name: 'Dominic Hale', role: 'Television Critic', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop', bio: 'Dominic Hale explores how television shapes our cultural anxieties.' },
];

const pullquote = (text: string) => `<pullquote>${text}</pullquote>`;

export const articles: Article[] = [
  {
    id: '1',
    slug: 'best-films-2026-so-far',
    title: 'The Best Films of 2026 So Far',
    subtitle: "From intimate chamber pieces to sweeping epics, this year's cinema has been extraordinary",
    category: 'Film',
    author: authors[0],
    date: '2026-02-08',
    readTime: '12 min read',
    heroImage: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1400&h=700&fit=crop',
    excerpt: 'Halfway through a remarkable year for cinema, we survey the landscape of a medium in full creative bloom.',
    tags: ['film', 'reviews', '2026'],
    featured: true,
    editorsPick: true,
    content: `The first months of 2026 have delivered a cinematic bounty so rich that it feels almost greedy to ask for more. What we have witnessed is a medium rediscovering its capacity for wonder.

Let us begin with Anya Zhao's "The Weight of Water," a film so delicate and devastating that to watch it is to feel your assumptions about cinema gently dismantled. Zhao announces herself as a major voice with this feature debut.

${pullquote("What Zhao achieves is pure cinematic poetry — images that accumulate meaning the way a tide pool accumulates water.")}

Marcus Webb's "Neon Cathedral" is the maximalist counterpart — a two-and-a-half-hour plunge into near-future Lagos that functions as heist thriller, love story, and tech capitalism indictment.

Sofia Moreno's "All the Light We Cannot Hear" traces a decade-long love affair in rural Argentina with documentary authenticity. The film's long takes demand patience that is richly rewarded.

Frederick Wiseman delivers "The Commons," a four-hour meditation on a Vermont library. At 96, his eye remains sharp, finding in daily rhythms a microcosm of democratic life.

Park Chan-wook returns with "The Invitation," peeling back social propriety with surgical precision. Studio Ghibli's "The Clockmaker's Garden" proves Miyazaki has lost none of his capacity for wonder.

American independent cinema continues its renaissance. Riley Johnson's "Checkout" transforms a grocery store into existential comedy. Jordan Peele's "The Reflection" is his most unsettling work yet.

As we look ahead, the landscape appears impossibly promising. But let us sit with what we have been given — a first quarter so rich it renews faith in cinema itself.`
  },
  {
    id: '2',
    slug: 'jazz-resurgence-streaming-era',
    title: 'The Resurgence of Jazz in the Streaming Era',
    subtitle: "How algorithms are introducing a new generation to America's most sophisticated art form",
    category: 'Music',
    author: authors[1],
    date: '2026-02-05',
    readTime: '11 min read',
    heroImage: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=1400&h=700&fit=crop',
    excerpt: 'Jazz was supposed to be dying. Instead, streaming platforms have catalyzed a renaissance.',
    tags: ['music', 'jazz', 'streaming'],
    editorsPick: true,
    content: `Jazz has been dying since the 1950s, supposedly. And yet here we are in 2026, and jazz has never sounded more vital. The obituary was premature.

The catalyst is, of all things, the algorithm. Streaming platforms have paradoxically become jazz's most effective evangelists. Spotify's "Jazz in the Background" has 12 million followers.

${pullquote("Streaming platforms, those engines of homogenization, have paradoxically become jazz's most effective evangelists.")}

Consider Imani Rousseau, the 28-year-old saxophonist whose debut "Meridian" was one of 2025's most acclaimed releases. Her music defies categorization — Sun Ra meets Solange.

"Fusion implies these things were ever separate," she told me. "I grew up listening to Coltrane and Radiohead in the same playlist."

The economic picture has shifted too. Blue Note reports its under-35 audience has grown 40 percent. New jazz clubs have opened from Detroit to Denver.

Jazz is once again functioning as political commentary. Christian Scott aTunde Adjuah's "Axiom" trilogy addresses climate change with music simultaneously rooted and futuristic.

The relationship between jazz and hip-hop has become defining. Kendrick Lamar's collaborations have bridged communities. Producers like Madlib continue mining the archive.

What streaming has given jazz is a new context where improvisation and complexity are experienced not as barriers but as invitations to richer listening.`
  },
  {
    id: '3',
    slug: 'ai-art-controversy-museums',
    title: 'The AI Art Controversy Engulfing Major Museums',
    subtitle: 'As institutions grapple with artificial intelligence, the definition of art hangs in balance',
    category: 'Art',
    author: authors[2],
    date: '2026-02-03',
    readTime: '13 min read',
    heroImage: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1400&h=700&fit=crop',
    excerpt: 'From MoMA to the Tate, institutions are forced to answer: can a machine make art?',
    tags: ['art', 'AI', 'museums'],
    editorsPick: true,
    content: `The protest signs outside MoMA were beautifully designed. "ART REQUIRES A SOUL," read one. Inside, the object of fury hung: "Convergence IV" by Synthesis, created using AI trained on ten thousand years of art history.

The acquisition detonated like a cultural hand grenade. Within hours, 15,000 signatures denounced it as "a fundamental betrayal."

${pullquote("The question is no longer whether AI can create moving images — it can. The question is whether that matters.")}

MoMA's response was firm: "We have always recognized new forms of creative expression. The question is which AI works merit inclusion."

The Tate's "Machine Visions" drew record attendance and record hostility. At Venice Biennale, AI works prompted artist walkouts.

Arguments against aren't trivial. When we stand before a Rothko, we encounter residue of human consciousness. A machine cannot offer this.

There's also the labor question. "Every AI image is stolen labor," argues Molly Crabapple. "Museums launder that theft through prestige."

Proponents counter that every technology faced resistance. The brush doesn't make the painting, neither does the AI.

What we're witnessing is not death but bifurcation — mass computational photography versus intentional artistic practice. Understanding what each offers may be the defining visual literacy challenge of our age.`
  },
  {
    id: '4',
    slug: 'nobel-prize-literature-predictions-2026',
    title: 'Nobel Prize in Literature 2026: Who Will Stockholm Choose?',
    subtitle: 'We examine the frontrunners and the politics behind the prize',
    category: 'Books',
    author: authors[3],
    date: '2026-02-01',
    readTime: '10 min read',
    heroImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1400&h=700&fit=crop',
    excerpt: "The Nobel Prize remains literature's most prestigious and debated award.",
    tags: ['books', 'nobel', 'literature'],
    content: `Every October, the Swedish Academy performs the most consequential act of literary criticism on earth. The Nobel Prize is both recognition and declaration.

Maryse Condé, 89, has long been considered overdue. Her novels constitute extraordinary range and depth. The Academy missed Borges and Nabokov — lending urgency to her candidacy.

${pullquote("The Nobel is both recognition of past achievement and declaration about the future — a deeply political exercise.")}

Ngugi wa Thiong'o's decision to write in Gikuyu was cultural decolonization. His significance extends beyond literature to questions of cultural survival.

László Krasznahorkai's hypnotic prose has earned Kafka comparisons. Writing in Hungarian might work in his favor — the Academy draws attention to less-read languages.

From Asia, Can Xue's experimental fiction has gained international readership. Her resistance to easy interpretation is precisely what the Academy favors.

My prediction: 2026 will see the prize go to a writer addressing existential challenges — climate, technology, democratic crisis. The Academy has always been responsive to its moment.

The envelope opens in October. Until then, we read and argue — which is what literature is for.`
  },
  {
    id: '5',
    slug: 'broadway-boldest-new-season',
    title: "Broadway's Boldest New Season in a Decade",
    subtitle: 'Risk-taking and diverse voices converge in an extraordinary moment',
    category: 'Theater',
    author: authors[4],
    date: '2026-01-28',
    readTime: '11 min read',
    heroImage: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=1400&h=700&fit=crop',
    excerpt: 'After years of playing it safe, Broadway is taking extraordinary creative risks.',
    tags: ['theater', 'broadway', 'performing arts'],
    content: `Something remarkable is happening on Broadway. For the first time in a generation, it's genuinely unpredictable.

Of fourteen new productions this season, ten are world premieres. Box office receipts are the highest in history.

${pullquote("Of fourteen productions, ten are premieres — inverting the revival-heavy seasons of the pre-pandemic era.")}

"Migrations" by Jocelyn Bioh and Michael R. Jackson tells interconnected immigrant stories across a century. Its score blends West African highlife, Dominican merengue, Chinese opera, and Broadway balladry.

Suzan-Lori Parks's "The Salvage" draws rapturous response. The production, directed by Lila Neugebauer with Audra McDonald, reminds you why people brave crowds for live theater.

Annie Baker makes her Broadway debut with "The Appointment," a two-hander that reveals itself as profound investigation of empathy's limits.

What accounts for this burst? Post-pandemic audiences hunger for irreplaceable live experiences. Producers have emerged willing to take chances. A diverse generation has reached power.

The lights are on, curtains rising, and what's happening feels like it matters — not just commercially, but culturally.`
  },
  {
    id: '6',
    slug: 'sustainable-fashion-revolution',
    title: 'The Sustainable Fashion Revolution Has Finally Arrived',
    subtitle: 'After years of greenwashing, the industry undergoes genuine transformation',
    category: 'Fashion',
    author: authors[5],
    date: '2026-01-25',
    readTime: '12 min read',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1400&h=700&fit=crop',
    excerpt: "The fashion industry is finally confronting its environmental crisis from the bottom up.",
    tags: ['fashion', 'sustainability', 'design'],
    content: `For decades, fashion's sustainability followed a pattern: eco-collections, applause, then back to producing vast quantities the planet cannot sustain.

The numbers are damning. 92 million tons of waste annually. 10 percent of global emissions. The average garment worn just seven times.

${pullquote("The average garment is worn seven times. Fast fashion has accelerated this to grotesque extremes.")}

Yet surveying 2026, I'm cautiously optimistic. Something has shifted in actual practices, not just rhetoric.

Hermès introduced "Sylvania," mycelium-derived material rivaling leather in durability, surpassing it environmentally. Several luxury brands have adopted it.

Renewcell's Circulose turns old cotton into new fiber — a genuine recycling breakthrough.

The resale market reached $350 billion in 2025 — larger than fast fashion for the first time. This represents fundamental change in how a generation relates to clothing.

EU regulations impose binding environmental requirements. The industry once fought these, now welcomes them as leveling the playing field.

The best sustainable fashion today isn't "sustainable fashion" — it's simply fashion, made responsibly. When I see Marine Serre or Bode, I see beauty and innovation with sustainability embedded in process, not worn as badge.`
  },
  {
    id: '7',
    slug: 'peak-tv-what-survived',
    title: "Peak TV Is Over. Here's What Survived.",
    subtitle: 'The great contraction has left a leaner, meaner — and arguably better — landscape',
    category: 'Television',
    author: authors[6],
    date: '2026-01-22',
    readTime: '11 min read',
    heroImage: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=1400&h=700&fit=crop',
    excerpt: 'After excess, the streaming wars produced Darwinian winnowing. What remains may be better than ever.',
    tags: ['television', 'streaming', 'culture'],
    content: `The numbers tell a stark story. In 2022: 599 original series. In 2025: 312. A 50 percent contraction in three years.

Yet as someone watching 4-6 hours daily (professional obligation), current television isn't crisis but correction.

${pullquote("Current television is not crisis but correction — one desperately needed.")}

Peak TV wasn't golden. For every "Succession," dozens of vacant series existed because platforms needed content.

The contraction creates conditions for better television. Fewer shows get more investment, deeper creative development.

"Leviathan" at HBO is a slow-burn Supreme Court study that would've struggled for attention in 2022. Now it's a phenomenon.

Apple's "The Weight," six episodes set in rural Japan, exemplifies new economy: shorter, focused, formally ambitious.

"Greenhouse" on FX uses workplace sitcom to explore climate anxiety with formal inventiveness suggesting much more to say.

International series have filled the gap. Korean "The Architect," French "Seuil," Nigerian "First Light" found global audiences.

The best television of 2026 is as good as anything the medium has produced, benefiting from clarity that comes with scarcity. The golden age wasn't 599 shows. It might be now.`
  },
  {
    id: '8',
    slug: 'independent-film-renaissance',
    title: 'The Independent Film Renaissance Nobody Predicted',
    subtitle: "Micro-budget filmmaking is producing America's most exciting cinema",
    category: 'Film',
    author: authors[0],
    date: '2026-01-20',
    readTime: '10 min read',
    heroImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1400&h=700&fit=crop',
    excerpt: 'While studios chase franchises, independents create vital cinema on shoestring budgets.',
    tags: ['film', 'independent', 'cinema'],
    content: `The most important American film of 2025 cost $47,000. Shot in 18 days on consumer camera. Non-professional cast. No distributor.

"The Clearing" by Daniela Reyes won the Spirit Award, earned 98% on Rotten Tomatoes, grossed $12 million.

${pullquote("A generation is producing work of startling originality on budgets that wouldn't cover studio catering.")}

This renaissance has been coming. Technology has decoupled filmmaking from industry. A filmmaker can produce broadcast quality for under $50,000.

I attended Sundance and saw a dozen films made for less than a car. Several were among the best I saw all year.

Platforms like MUBI and Criterion created audiences. Letterboxd created word-of-mouth networks turning obscure films into talking points overnight.

The aesthetic range is remarkable. Reyes's naturalistic work draws on neorealism. Sky Hopinka blends documentary, animation, Indigenous language preservation.

Festivals adapted. Sundance now shares the field with BlackStar, NewFest, Slamdance. Virtual components make events accessible worldwide.

In basements and borrowed apartments, on streets and back roads, a generation is making cinema that matters — personal, political, intimate, expansive. They're proving the essential ingredient isn't money but vision.`
  },
  {
    id: '9',
    slug: 'album-reviews-top-releases-2026',
    title: 'The Albums That Are Defining 2026',
    subtitle: "From electronic experimentalism to folk revival, the year's best records",
    category: 'Music',
    author: authors[1],
    date: '2026-01-18',
    readTime: '13 min read',
    heroImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1400&h=700&fit=crop',
    excerpt: 'January 2026 has obliterated conventions with a remarkably strong crop of albums.',
    tags: ['music', 'albums', 'reviews'],
    content: `January is usually a wasteland. January 2026 obliterated this with fury.

Imani Rousseau's "Meridian" is the most exciting jazz album in years. "Tessellation" establishes her method: soprano sax over electronic pulses before rhythm section locks into a groove owing as much to Dilla as Blakey.

${pullquote("Rousseau's debut is the most exciting jazz album in years — refusing every category while remaining rooted in tradition.")}

Elena Miras's "Terracotta" is her most fully realized work. Drawing on fado, ambient electronics, art-song tradition. "Saudade Machine" is the year's best single track.

The Weathervanes' "Exit Velocity" channels post-punk through midwestern sensibility. Mara Chen writes with uncommon specificity about real places and real anxieties.

Kaytranada's "TIMELESS" is at once more refined and adventurous. Every sound placed with jeweler's precision.

Adrianne Lenker's "Bright Passage" was recorded in a weekend in a Catskills cabin. Deliberately lo-fi, yet songs are among the most beautiful Lenker has written.

These albums share urgency — made not because markets demanded but because creators had something to say.`
  },
  {
    id: '10',
    slug: 'architecture-biennale-preview-2026',
    title: 'Venice Architecture Biennale 2026: A Preview',
    subtitle: 'The exhibition turns its gaze to climate, community, and the future of shelter',
    category: 'Art',
    author: authors[2],
    date: '2026-01-15',
    readTime: '10 min read',
    heroImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1400&h=700&fit=crop',
    excerpt: 'Under "Sheltering Futures," this year\'s Biennale promises to be the most urgent edition in history.',
    tags: ['architecture', 'Venice', 'design'],
    content: `Alejandra Aravena's theme "Sheltering Futures" is simple and radical. It asks architects to consider shelter's most fundamental function in a world where it's increasingly imperiled.

${pullquote("Aravena asks architects to consider shelter in a world where that function is increasingly imperiled.")}

Opening in May, the Biennale will feature 60+ national pavilions plus central exhibition balancing visionary with practical.

The Nordic Pavilion presents "After Ice" — exploring Arctic loss for Scandinavian and Indigenous communities using augmented reality.

The US Pavilion focuses on housing justice. "Unbuilding" examines urban renewal's legacy while showcasing community-led initiatives.

Japan's SANAA presents "Breathing Walls" — building envelopes responding to environmental conditions in real time.

The central exhibition's "Enough" section asks: what if the answer is not more building, but less? Features adaptive reuse, making existing structures more efficient rather than replacing them.

For the first time, the Arsenale dedicates space to student work, recognizing the next generation.

"The Biennale is not a solution," Aravena told me. "It is a conversation. But it's a conversation the world urgently needs."`
  },
  {
    id: '11',
    slug: 'photography-iphone-era',
    title: 'Photography in the iPhone Era: Death or Transformation?',
    subtitle: 'How computational photography is reshaping what we see and believe',
    category: 'Art',
    author: authors[2],
    date: '2026-01-12',
    readTime: '11 min read',
    heroImage: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1400&h=700&fit=crop',
    excerpt: 'The smartphone has made everyone a photographer. But as computation determines our photos, fundamental questions demand answers.',
    tags: ['photography', 'technology', 'art'],
    content: `Humanity produces 1.8 billion photographs daily. Most on smartphones whose cameras have evolved into the most sophisticated imaging systems most will own.

The iPhone 17 Pro contains computational capabilities that would have been unimaginable a decade ago: real-time HDR, AI noise reduction, automatic scene detection.

${pullquote("This is not photography as Cartier-Bresson understood it. It uses photography's language while operating on different principles.")}

Traditional photography was indexical — the photograph bore direct relationship to light entering the lens. This was the source of photography's cultural authority.

Computational photography disrupts this. Modern smartphones capture not one image but dozens, composited and processed by AI. The final image is less recording than construction.

Consider night photography. An iPhone 17 Pro nighttime photo is remarkably clear — far more than human eyes perceive. The camera shows an enhanced, idealized version assembled from multiple exposures.

Wolfgang Tillmans recently exhibited works juxtaposing darkroom prints with AI-enhanced smartphone images. The differences are subtle but telling: smartphone images are smoother, more conventionally beautiful. Darkroom prints are grainier, more unpredictable, more alive.

What we're witnessing is not death but bifurcation — mass computational photography serving communicative functions versus intentional artistic practice valuing subjective vision over algorithmic optimization.`
  },
  {
    id: '12',
    slug: 'dance-companies-pushing-boundaries',
    title: 'The Dance Companies Pushing Every Boundary',
    subtitle: 'Contemporary dance is having its most radical moment',
    category: 'Theater',
    author: authors[4],
    date: '2026-01-10',
    readTime: '10 min read',
    heroImage: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=1400&h=700&fit=crop',
    excerpt: 'From Batsheva to Crystal Pite, dance is experiencing a creative explosion.',
    tags: ['dance', 'performance', 'theater'],
    content: `There's a moment in Crystal Pite's "Assembly" when seventeen dancers move in such precise unison the audience holds its breath. In those thirty seconds, individual bodies disappear. Pure movement remains.

${pullquote("Contemporary dance is at a creative peak rivaling any in history — work of such ambition that critics run out of superlatives.")}

The collapse of rigid genre boundaries has freed choreographers to draw on unprecedented influences. Globalization has created cross-pollination producing hybrid forms of remarkable vitality.

Batsheva under Ohad Naharin remains the gold standard. "Gaga" movement language has influenced an entire generation.

Crystal Pite has established herself as perhaps the most important choreographer of her generation. "Assembly" is her most ambitious: two hours exploring collective human behavior.

In Germany, Tanztheater Wuppertal under Boris Charmatz continues Pina Bausch's legacy while pushing into new territory.

Anne Teresa De Keersmaeker's "Exit Above," made with Arca, is radical departure — sensory overload dissolving boundaries between performer and audience.

Technology is reshaping the landscape. Chunky Move's "Spectra" uses AI to generate environments responding to dancers' movements in real time.

What unites these practices is commitment to the body as meaning-making site. In an era of screens, this commitment feels political — insistence on physical presence's irreducible reality.`
  },
  {
    id: '13',
    slug: 'podcast-golden-age-analysis',
    title: 'Are We Living Through the Golden Age of Podcasting?',
    subtitle: 'The medium has matured, money has arrived, and creative ambition is higher than ever',
    category: 'Television',
    author: authors[6],
    date: '2026-01-08',
    readTime: '10 min read',
    heroImage: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1400&h=700&fit=crop',
    excerpt: 'From journalism to fiction, podcasting has evolved from niche hobby into cultural force.',
    tags: ['podcasts', 'media', 'audio'],
    content: `"Serial" in 2014 inaugurated modern podcasting. Twelve years later, the landscape has matured into something pioneers couldn't imagine.

Four million active podcasts worldwide. $4 billion in advertising. 60 percent of Americans have listened in the past month.

${pullquote("Podcasting has become not just content delivery but distinctive art form with its own aesthetic traditions and critical standards.")}

"The Turning" used binaural recording to create sonic environments so vivid listeners reported feeling physically present. "Blindspot: The Road to 9/11" uncovered new evidence rivaling print journalism.

In non-fiction, podcasts have become essential for intellectual discourse. Shows like "Ezra Klein" and "99% Invisible" create audiences for ideas that would struggle elsewhere.

Fiction podcasting has emerged as creatively exciting. "Welcome to Night Vale" and Qcode productions deliver experiences as compelling as television — often more imaginative.

The business is complicated. The boom has given way to retrenchment. Spotify's exclusive era proved unprofitable, shifting strategy.

Yet creative energy remains undeniable. Democratization of production continues producing new voices at rates capital-intensive media can't match.

What concerns me is trajectory toward consolidation, algorithmic recommendation, video-first content threatening what makes podcasting distinctive: intimacy, accessibility, privileging voice over spectacle.`
  },
  {
    id: '14',
    slug: 'gaming-legitimate-art-form',
    title: 'Gaming Has Become a Legitimate Art Form. Now What?',
    subtitle: 'As video games achieve artistic recognition, the medium grapples with contradictions',
    category: 'Art',
    author: authors[2],
    date: '2026-01-05',
    readTime: '12 min read',
    heroImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1400&h=700&fit=crop',
    excerpt: 'Whether games constitute art has been answered. The more interesting question is just beginning.',
    tags: ['gaming', 'art', 'culture'],
    content: `Roger Ebert in 2010 said video games could never be art. That struggle is, for all practical purposes, over.

MoMA has games in its collection. The Smithsonian hosted major exhibitions. BAFTA gives games their own ceremony.

${pullquote("The question is no longer whether games can be art. The question is what unique capabilities and responsibilities that status entails.")}

Games that drove this shift use interactivity's unique grammar to create experiences no other art form can provide. "The Last of Us," "Journey," "Disco Elysium," "Hades" produce experiences as profound as any novel or film.

"Elegy" from Cardboard Computer is a meditation on grief unfolding through exploration of vast, shifting landscape. Playing it, I felt how interactivity transforms receiving narrative.

This is what makes games genuinely new — not spectacle or storytelling, but unique phenomenology of agency.

Game criticism has developed theoretical frameworks for serious evaluation. Kill Screen, Heterotopias, Game Studies create spaces for rigorous criticism.

But the medium that produced "Elegy" also produced exploitative microtransactions, addictive reward loops, brutal working conditions. This contradiction feels acute.

As gaming matures, these contradictions need confronting. The art world's embrace cannot be unconditional — it requires the same critical scrutiny applied to any cultural form.`
  },
  {
    id: '15',
    slug: 'street-art-going-mainstream',
    title: 'Street Art Has Gone Mainstream. Is That a Problem?',
    subtitle: 'From Banksy to billion-dollar murals, the tension between rebellion and institution',
    category: 'Art',
    author: authors[2],
    date: '2026-01-02',
    readTime: '11 min read',
    heroImage: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=1400&h=700&fit=crop',
    excerpt: 'Street art was born as defiance against institutional culture. Now it is the institution.',
    tags: ['street art', 'art', 'culture'],
    content: `The mural covers a five-story Bushwick building. It's beautiful. It's also, according to the owner, worth $2 million — as property enhancement.

Studies show buildings with commissioned murals see 10-20 percent value increases. Street art is very good business.

${pullquote("Expression that originated as defiance against commodification has become a tool for gentrification and a billion-dollar market segment.")}

The mainstreaming has been gradual but 2026 feels like a tipping point. Banksy's "Love is in the Bin" resold for $31 million. KAWS collaborated with Dior. Miami's Wynwood Walls hosted Art Basel's largest satellite event.

For many, this is validation. "We spent decades being told we weren't real artists," says Shepard Fairey. "Now museums collect our work."

But for others, it's betrayal. "Street art was never supposed to be comfortable," argues DarkMatter. "The moment it becomes sanctioned, it ceases to be street art. It becomes decoration."

The form emerged from illegal graffiti cultures. The illegality wasn't incidental — it was constitutive.

The transition to "street art" expanded and diluted the form. It created distinction between "good" and "bad" unauthorized art that often mapped onto class and race lines.

The market's absorption followed a familiar pattern. Galleries, auctions, museum exhibitions, brand collaborations, tours. At each stage, work moved from origins toward institutional mainstream.

Yet the unauthorized tradition persists. Artists still go out at night, claiming space without permission, accepting arrest risk as part of practice.

Perhaps resolution lies in holding these positions in productive tension. As long as there are artists willing to risk arrest, the rebellious spirit will endure — however many millions the domesticated versions fetch.`
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}

export function getArticlesByCategory(category: Category): Article[] {
  return articles.filter(a => a.category === category);
}

export function getFeaturedArticle(): Article {
  return articles.find(a => a.featured) || articles[0];
}

export function getEditorsPickArticles(): Article[] {
  return articles.filter(a => a.editorsPick);
}
