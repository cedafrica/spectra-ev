import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavLayout from '@/layout/nav-layout'
import Home from './pages/home'
import AboutUs from './pages/about-us'
import Services from './pages/services'
import Project from './pages/our-project'
import Partnership from './pages/partnership'
import NewsLayout from './layout/news-layout'
import News from './pages/news'

function App() {
  return (

    <Routes>
      <Route element={<NavLayout />}>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<AboutUs />}
        />
        <Route
          path="/services"
          element={<Services />}
        />
        <Route
          path="/projects"
          element={<Project />}
        />
        <Route
          path="/partnership"
          element={<Partnership />}
        />
        <Route
          element={<NewsLayout />}>
          <Route path="*" element={<News />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
