import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'

const App = () => {
  return (
    <Router>
      {/* Sticky Header */}
      <header className="site-header">
        <div className="site-container">
          <h1 className="site-title">
            <a href="/">Injam Chowdhury</a>
          </h1>
          <nav className="site-nav">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
