import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavLayout from '@/layout/nav-layout'
import Home from './pages/home'
import AboutUs from './pages/about-us'

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
      </Route>
    </Routes>
  )
}

export default App
