import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Router>
      {/* Sticky Header */}
      <header className="site-header">
        <div className="site-container">
          <h1 className="site-title">
            <NavLink to="/" end>Injam Chowdhury</NavLink>
          </h1>
          <nav className={`site-nav${menuOpen ? ' site-nav--open' : ''}`}>
            <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
            <NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          </nav>
          <button
            className="nav-toggle"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <footer className="site-footer">
        <div className="site-container">
          <p>© {new Date().getFullYear()} Injam Chowdhury</p>
          <div className="footer-links">
            <a href="https://github.com/ichowdhury10" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/injam-chowdhury" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </Router>
  )
}

export default App
