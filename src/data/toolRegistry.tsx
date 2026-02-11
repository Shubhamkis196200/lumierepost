// Movie tools (already created: 5)
import MovieRuntimeCalc from '../tools/movies/MovieRuntimeCalc'
import RatingConverter from '../tools/movies/RatingConverter'
import BoxOfficeEstimator from '../tools/movies/BoxOfficeEstimator'
import ScreenplayEstimator from '../tools/movies/ScreenplayEstimator'
import MovieRecommender from '../tools/movies/MovieRecommender'

// TV tools (already created: 1)
import BingeCalculator from '../tools/tv/BingeCalculator'

// Books tools (already created: 2)
import ReadingSpeedCalc from '../tools/books/ReadingSpeedCalc'
import ReadingListGenerator from '../tools/books/ReadingListGenerator'

export const toolRoutes = [
  // Movies
  { path: 'movie-runtime-calculator', component: MovieRuntimeCalc, title: 'Movie Marathon Calculator', category: 'Movies' },
  { path: 'rating-converter', component: RatingConverter, title: 'Rating Converter', category: 'Movies' },
  { path: 'box-office-estimator', component: BoxOfficeEstimator, title: 'Box Office Estimator', category: 'Movies' },
  { path: 'screenplay-estimator', component: ScreenplayEstimator, title: 'Screenplay Page Estimator', category: 'Movies' },
  { path: 'movie-recommender', component: MovieRecommender, title: 'Movie Recommendation Engine', category: 'Movies' },
  
  // TV
  { path: 'binge-calculator', component: BingeCalculator, title: 'Binge Watch Calculator', category: 'TV' },
  
  // Books
  { path: 'reading-speed-calculator', component: ReadingSpeedCalc, title: 'Reading Speed Calculator', category: 'Books' },
  { path: 'reading-list-generator', component: ReadingListGenerator, title: 'Reading List Generator', category: 'Books' },
]

export const toolsByCategory = toolRoutes.reduce((acc, tool) => {
  if (!acc[tool.category]) acc[tool.category] = []
  acc[tool.category].push(tool)
  return acc
}, {} as Record<string, typeof toolRoutes>)
