import { useState } from 'react'
import ToolLayout from '../../components/ToolLayout'

export default function MovieRecommender() {
  const [value, setValue] = useState(0)

  return (
    <ToolLayout title="Movie Recommendation Engine" description="Get personalized movie recommendations" category="Movies">
      <div className="space-y-6">
        <input type="number" value={value} onChange={e => setValue(+e.target.value)}
          className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold" />
        <div className="bg-cream rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-purple">{value}</div>
        </div>
      </div>
    </ToolLayout>
  )
}
