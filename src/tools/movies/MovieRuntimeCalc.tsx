import { useState } from 'react'
import ToolLayout from '../../components/ToolLayout'

export default function MovieRuntimeCalc() {
  const [movies, setMovies] = useState([{ title: '', runtime: 120 }])
  const addMovie = () => setMovies([...movies, { title: '', runtime: 120 }])
  const removeMovie = (i: number) => setMovies(movies.filter((_, idx) => idx !== i))
  const updateMovie = (i: number, field: 'title' | 'runtime', val: string | number) => {
    const m = [...movies]
    if (field === 'title') {
      m[i].title = val as string
    } else {
      m[i].runtime = val as number
    }
    setMovies(m)
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
          {[
            { label: 'Movies', value: movies.length },
            { label: 'Total Runtime', value: `${hours}h ${mins}m` },
            { label: 'With 15-min Breaks', value: `${hours}h ${mins + (movies.length - 1) * 15}m` },
            { label: 'Avg Runtime', value: `${Math.round(totalMin / movies.length)}m` },
          ].map(item => (
            <div key={item.label} className="bg-cream rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-purple">{item.value}</div>
              <div className="text-sm text-warm-gray mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </ToolLayout>
  )
}
