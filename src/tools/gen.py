tools = [
    ('movies', 'RatingConverter', 'Rating Converter', 'Convert ratings between IMDb, Rotten Tomatoes, and Metacritic'),
    ('movies', 'BoxOfficeEstimator', 'Box Office Estimator', 'Estimate box office potential'),
    ('movies', 'ScreenplayEstimator', 'Screenplay Page Estimator', 'Estimate screenplay page count'),
    ('movies', 'MovieRecommender', 'Movie Recommendation Engine', 'Get personalized movie recommendations'),
    ('tv', 'BingeCalculator', 'Binge Watch Calculator', 'Calculate binge-watch time'),
    ('books', 'ReadingSpeedCalc', 'Reading Speed Calculator', 'Calculate reading time'),
    ('books', 'ReadingListGenerator', 'Reading List Generator', 'Generate personalized reading lists'),
]

template = '''import {{ useState }} from 'react'
import ToolLayout from '../../components/ToolLayout'

export default function {name}() {{
  const [value, setValue] = useState(0)

  return (
    <ToolLayout title="{title}" description="{desc}" category="{cat}">
      <div className="space-y-6">
        <input type="number" value={{value}} onChange={{e => setValue(+e.target.value)}}
          className="w-full border border-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold" />
        <div className="bg-cream rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-purple">{{value}}</div>
        </div>
      </div>
    </ToolLayout>
  )
}}
'''

for folder, name, title, desc in tools:
    cat = folder.capitalize()
    content = template.format(name=name, title=title, desc=desc, cat=cat)
    with open(f'{folder}/{name}.tsx', 'w') as f:
        f.write(content)
    print(f'✓ {name}')

print('Done!')
