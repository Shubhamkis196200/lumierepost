#!/bin/bash
cd /home/ubuntu/.openclaw/workspace/website-farm/sites/lumierepost/src/tools

# Helper function to write a tool
write_tool() {
  local dir=$1 file=$2 title=$3 desc=$4 cat=$5 body=$6
  mkdir -p "$dir"
  cat > "$dir/$file.tsx" << 'TOOLEOF'
import { useState } from 'react'
import ToolLayout from '../../components/ToolLayout'
TOOLEOF
  echo "" >> "$dir/$file.tsx"
  echo "export default function $file() {" >> "$dir/$file.tsx"
  echo "$body" >> "$dir/$file.tsx"
  echo "}" >> "$dir/$file.tsx"
}

# Tool 1: Movie Runtime Calculator
cat > movies/MovieRuntimeCalc.tsx << 'EOF'
import { useState } from 'react'
import ToolLayout from '../../components/ToolLayout'

export default function MovieRuntimeCalc() {
  const [movies, setMovies] = useState([{ title: '', runtime: 120 }])
  const addMovie = () => setMovies([...movies, { title: '', runtime: 120 }])
  const removeMovie = (i: number) => setMovies(movies.filter((_, idx) => idx !== i))
  const updateMovie = (i: number, field: string, val: string | number) => {
    const m = [...movies]; (m[i] as any)[field] = val; setMovies(m)
  }
  const totalMin = movies.reduce((s, m) => s + m.runtime, 0)
  const hours = Math.floor(totalMin / 60)
  const mins = totalMin % 60

  return (
    <ToolLayout title="Movie Marathon Calculator" description="Plan your movie marathon — calculate total runtime, breaks, and schedule." category="Movies">
      <div className="space-y-4">
        {movies.map((m, i) => (
          <div key={i} className="flex gap-3 items-end">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Movie {i + 1}</label>
              <input type="text" placeholder="Movie title" value={m.title} onChange={e => updateMovie(i, 'title', e.target.value)}
                className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold" />
            </div>
            <div className="w-32">
              <label className="block text-sm font-medium mb-1">Minutes</label>
              <input type="number" min={1} value={m.runtime} onChange={e => updateMovie(i, 'runtime', +e.target.value)}
                className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold" />
            </div>
            {movies.length > 1 && <button onClick={() => removeMovie(i)} className="text-red-400 hover:text-red-600 pb-2">✕</button>}
          </div>
        ))}
        <button onClick={addMovie} className="text-gold-dark hover:text-gold font-medium text-sm">+ Add Movie</button>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          <div className="bg-cream rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-purple">{movies.length}</div>
            <div className="text-sm text-warm-gray">Movies</div>
          </div>
          <div className="bg-cream rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-purple">{hours}h {mins}m</div>
            <div className="text-sm text-warm-gray">Total Runtime</div>
          </div>
          <div className="bg-cream rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-purple">{hours}h {mins + (movies.length - 1) * 15}m</div>
            <div className="text-sm text-warm-gray">With 15-min Breaks</div>
          </div>
          <div className="bg-cream rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-purple">{Math.round(totalMin / movies.length)}m</div>
            <div className="text-sm text-warm-gray">Avg Runtime</div>
          </div>
        </div>
      </div>
    </ToolLayout>
  )
}
EOF

# Tool 2: Rating Converter
cat > movies/RatingConverter.tsx << 'EOF'
import { useState } from 'react'
import ToolLayout from '../../components/ToolLayout'

export default function RatingConverter() {
  const [source, setSource] = useState<'imdb' | 'rt' | 'meta'>('imdb')
  const [value, setValue] = useState(7.5)

  const convert = () => {
    if (source === 'imdb') {
      return { imdb: value, rt: Math.round(value * 10 + (value > 7 ? 5 : -5)), meta: Math.round(value * 10 + (value > 6 ? 3 : -8)) }
    } else if (source === 'rt') {
      return { imdb: Math.round((value / 10 * 0.9 + 0.5) * 10) / 10, rt: value, meta: Math.round(value * 0.85 + 5) }
    } else {
      return { imdb: Math.round((value / 10 * 0.95 + 0.3) * 10) / 10, rt: Math.round(value * 1.1 - 3), meta: value }
    }
  }
  const result = convert()

  return (
    <ToolLayout title="Rating Converter" description="Convert ratings between IMDb, Rotten Tomatoes, and Metacritic scales." category="Movies">
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Source Platform</label>
            <select value={source} onChange={e => setSource(e.target.value as any)}
              className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold">
              <option value="imdb">IMDb (0-10)</option>
              <option value="rt">Rotten Tomatoes (0-100%)</option>
              <option value="meta">Metacritic (0-100)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Rating</label>
            <input type="number" step={source === 'imdb' ? 0.1 : 1} min={0} max={source === 'imdb' ? 10 : 100}
              value={value} onChange={e => setValue(+e.target.value)}
              className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-yellow-50 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-yellow-700">{result.imdb}/10</div>
            <div className="text-sm text-warm-gray mt-1">IMDb</div>
          </div>
          <div className="bg-red-50 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-red-600">{Math.min(100, Math.max(0, result.rt))}%</div>
            <div className="text-sm text-warm-gray mt-1">Rotten Tomatoes</div>
          </div>
          <div className="bg-green-50 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-green-700">{Math.min(100, Math.max(0, result.meta))}</div>
            <div className="text-sm text-warm-gray mt-1">Metacritic</div>
          </div>
        </div>
      </div>
    </ToolLayout>
  )
}
EOF

# Tool 3: Box Office Estimator
cat > movies/BoxOfficeEstimator.tsx << 'EOF'
import { useState } from 'react'
import ToolLayout from '../../components/ToolLayout'

export default function BoxOfficeEstimator() {
  const [budget, setBudget] = useState(100)
  const [genre, setGenre] = useState('action')
  const [sequel, setSequel] = useState(false)
  const [season, setSeason] = useState('summer')

  const genreMult: Record<string, number> = { action: 2.8, comedy: 2.2, horror: 3.5, drama: 1.8, animation: 3.0, scifi: 2.5, romance: 1.9, thriller: 2.3 }
  const seasonMult: Record<string, number> = { summer: 1.3, holiday: 1.4, spring: 0.9, fall: 1.0 }
  const base = budget * (genreMult[genre] || 2.5) * (seasonMult[season] || 1.0) * (sequel ? 1.3 : 1.0)
  const domestic = Math.round(base)
  const worldwide = Math.round(base * 2.4)
  const profitable = worldwide > budget * 2.5

  return (
    <ToolLayout title="Box Office Estimator" description="Estimate a movie's box office potential based on budget, genre, and release timing." category="Movies">
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Production Budget ($M)</label>
            <input type="number" min={1} value={budget} onChange={e => setBudget(+e.target.value)}
              className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Genre</label>
            <select value={genre} onChange={e => setGenre(e.target.value)}
              className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold">
              {Object.keys(genreMult).map(g => <option key={g} value={g}>{g.charAt(0).toUpperCase() + g.slice(1)}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Release Season</label>
            <select value={season} onChange={e => setSeason(e.target.value)}
              className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold">
              <option value="summer">Summer</option><option value="holiday">Holiday</option>
              <option value="spring">Spring</option><option value="fall">Fall</option>
            </select>
          </div>
          <div className="flex items-center gap-3 pt-6">
            <input type="checkbox" checked={sequel} onChange={e => setSequel(e.target.checked)} className="w-5 h-5 accent-gold" />
            <label className="text-sm font-medium">Sequel/Franchise</label>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="bg-cream rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-purple">${domestic}M</div>
            <div className="text-sm text-warm-gray">Est. Domestic</div>
          </div>
          <div className="bg-cream rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-purple">${worldwide}M</div>
            <div className="text-sm text-warm-gray">Est. Worldwide</div>
          </div>
          <div className={`rounded-xl p-4 text-center ${profitable ? 'bg-green-50' : 'bg-red-50'}`}>
            <div className={`text-2xl font-bold ${profitable ? 'text-green-700' : 'text-red-600'}`}>{profitable ? '✓ Profit' : '✗ Loss'}</div>
            <div className="text-sm text-warm-gray">ROI: {((worldwide / budget - 1) * 100).toFixed(0)}%</div>
          </div>
        </div>
      </div>
    </ToolLayout>
  )
}
EOF

# Tool 4: Screenplay Page Estimator
cat > movies/ScreenplayEstimator.tsx << 'EOF'
import { useState } from 'react'
import ToolLayout from '../../components/ToolLayout'

export default function ScreenplayEstimator() {
  const [text, setText] = useState('')
  const words = text.trim() ? text.trim().split(/\s+/).length : 0
  const pages = Math.ceil(words / 250)
  const runtime = pages // 1 page ≈ 1 minute
  const dialogueLines = text.split('\n').filter(l => l.trim().length > 0 && l.trim().length < 60).length
  const actionLines = text.split('\n').filter(l => l.trim().length >= 60).length

  return (
    <ToolLayout title="Screenplay Page Estimator" description="Estimate screenplay page count, runtime, and analyze dialogue vs action." category="Movies">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1">Paste Screenplay Text</label>
          <textarea rows={10} value={text} onChange={e => setText(e.target.value)} placeholder="Paste screenplay text here..."
            className="w-full border border-light-gray rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold font-mono text-sm" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Word Count', value: words.toLocaleString() },
            { label: 'Est. Pages', value: pages },
            { label: 'Est. Runtime', value: `${runtime} min` },
            { label: 'Dialogue Lines', value: dialogueLines },
          ].map(item => (
            <div key={item.label} className="bg-cream rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-purple">{item.value}</div>
              <div className="text-sm text-warm-gray mt-1">{item.label}</div>
            </div>
          ))}
        </div>
        {words > 0 && (
          <div className="bg-cream rounded-xl p-4">
            <div className="text-sm font-medium mb-2">Dialogue vs Action Ratio</div>
            <div className="w-full bg-light-gray rounded-full h-4 overflow-hidden">
              <div className="bg-gold h-full rounded-full" style={{ width: `${dialogueLines / Math.max(1, dialogueLines + actionLines) * 100}%` }} />
            </div>
            <div className="flex justify-between text-xs text-warm-gray mt-1">
              <span>Dialogue: {dialogueLines}</span>
              <span>Action: {actionLines}</span>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  )
}
EOF

# Tool 5: Movie Recommendation Engine
cat > movies/MovieRecommender.tsx << 'EOF'
import { useState } from 'react'
import ToolLayout from '../../components/ToolLayout'

const movieDB = [
  { title: 'The Shawshank Redemption', genre: ['drama'], mood: 'hopeful', decade: '1990s', rating: 9.3 },
  { title: 'Inception', genre: ['scifi', 'thriller'], mood: 'mind-bending', decade: '2010s', rating: 8.8 },
  { title: 'The Grand Budapest Hotel', genre: ['comedy', 'drama'], mood: 'whimsical', decade: '2010s', rating: 8.1 },
  { title: 'Parasite', genre: ['thriller', 'drama'], mood: 'intense', decade: '2010s', rating: 8.5 },
  { title: 'Spirited Away', genre: ['animation', 'fantasy'], mood: 'whimsical', decade: '2000s', rating: 8.6 },
  { title: 'The Dark Knight', genre: ['action', 'thriller'], mood: 'intense', decade: '2000s', rating: 9.0 },
  { title: 'Pulp Fiction', genre: ['crime', 'drama'], mood: 'edgy', decade: '1990s', rating: 8.9 },
  { title: 'Amélie', genre: ['comedy', 'romance'], mood: 'whimsical', decade: '2000s', rating: 8.3 },
  { title: 'Mad Max: Fury Road', genre: ['action', 'scifi'], mood: 'intense', decade: '2010s', rating: 8.1 },
  { title: 'The Godfather', genre: ['crime', 'drama'], mood: 'intense', decade: '1970s', rating: 9.2 },
  { title: 'Eternal Sunshine of the Spotless Mind', genre: ['romance', 'scifi'], mood: 'melancholic', decade: '2000s', rating: 8.3 },
  { title: 'Interstellar', genre: ['scifi', 'drama'], mood: 'mind-bending', decade: '2010s', rating: 8.6 },
  { title: 'La La Land', genre: ['romance', 'musical'], mood: 'hopeful', decade: '2010s', rating: 8.0 },
  { title: 'Get Out', genre: ['horror', 'thriller'], mood: 'edgy', decade: '2010s', rating: 7.7 },
  { title: 'Moonlight', genre: ['drama'], mood: 'melancholic', decade: '2010s', rating: 7.4 },
  { title: 'Blade Runner 2049', genre: ['scifi', 'thriller'], mood: 'melancholic', decade: '2010s', rating: 8.0 },
  { title: 'The Princess Bride', genre: ['comedy', 'fantasy', 'romance'], mood: 'whimsical', decade: '1980s', rating: 8.1 },
  { title: 'Jaws', genre: ['thriller', 'horror'], mood: 'intense', decade: '1970s', rating: 8.0 },
  { title: 'Everything Everywhere All at Once', genre: ['scifi', 'comedy', 'action'], mood: 'mind-bending', decade: '2020s', rating: 7.8 },
  { title: 'Whiplash', genre: ['drama', 'musical'], mood: 'intense', decade: '2010s', rating: 8.5 },
]

export default function MovieRecommender() {
  const [genre, setGenre] = useState('any')
  const [mood, setMood] = useState('any')
  const [decade, setDecade] = useState('any')
  const [results, setResults] = useState<typeof movieDB>([])

  const recommend = () => {
    let filtered = movieDB.filter(m => {
      if (genre !== 'any' && !m.genre.includes(genre)) return false
      if (mood !== 'any' && m.mood !== mood) return false
      if (decade !== 'any' && m.decade !== decade) return false
      return true
    })
    if (filtered.length === 0) filtered = movieDB.sort(() => Math.random() - 0.5).slice(0, 3)
    setResults(filtered.sort((a, b) => b.rating - a.rating).slice(0, 5))
  }

  return (
    <ToolLayout title="Movie Recommendation Engine" description="Get personalized movie recommendations based on your mood, genre, and era preferences." category="Movies">
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Genre</label>
            <select value={genre} onChange={e => setGenre(e.target.value)} className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold">
              <option value="any">Any Genre</option>
              {['action','comedy','drama','horror','romance','scifi','thriller','animation','fantasy','crime','musical'].map(g => (
                <option key={g} value={g}>{g.charAt(0).toUpperCase() + g.slice(1)}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Mood</label>
            <select value={mood} onChange={e => setMood(e.target.value)} className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold">
              <option value="any">Any Mood</option>
              {['hopeful','intense','whimsical','melancholic','edgy','mind-bending'].map(m => (
                <option key={m} value={m}>{m.charAt(0).toUpperCase() + m.slice(1)}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Decade</label>
            <select value={decade} onChange={e => setDecade(e.target.value)} className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold">
              <option value="any">Any Era</option>
              {['1970s','1980s','1990s','2000s','2010s','2020s'].map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>
        <button onClick={recommend} className="gold-gradient text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity">
          Get Recommendations
        </button>
        {results.length > 0 && (
          <div className="space-y-3">
            {results.map((m, i) => (
              <div key={m.title} className="flex items-center gap-4 bg-cream rounded-xl p-4">
                <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center text-white font-bold text-sm">{i + 1}</div>
                <div className="flex-1">
                  <div className="font-semibold text-purple">{m.title}</div>
                  <div className="text-sm text-warm-gray">{m.genre.join(', ')} · {m.mood} · {m.decade}</div>
                </div>
                <div className="text-lg font-bold text-gold-dark">★ {m.rating}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  )
}
EOF

echo "First 5 tools done"
