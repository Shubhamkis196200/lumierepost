import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ToolsIndex from './pages/ToolsIndex'
import BlogIndex from './pages/BlogIndex'
import About from './pages/About'
import { toolRoutes } from './data/toolRegistry'
import { blogRoutes } from './data/blogRegistry'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tools" element={<ToolsIndex />} />
        <Route path="blog" element={<BlogIndex />} />
        <Route path="about" element={<About />} />
        {toolRoutes.map(t => (
          <Route key={t.path} path={`tools/${t.path}`} element={<t.component />} />
        ))}
        {blogRoutes.map(b => (
          <Route key={b.path} path={`blog/${b.path}`} element={<b.component />} />
        ))}
      </Route>
    </Routes>
  )
}
