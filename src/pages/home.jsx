import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import avatar from '../assets/PortfolioHS.png'
import '../index.css'

const Home = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-flex">
          {/* Left: Text Content */}
          <div>
            <h1 className="hero-title">
              Hi There, <br />
              I'm <span style={{ color: '#3b82f6' }}>Injam Chowdhury</span>
            </h1>

            <p className="hero-subtitle">
              Frontend Developer & M.S. student in Machine Learning at Stevens
              Institute of Technology. I craft AI-powered, user-first websites
              with modern tools.
            </p>

            <div className="hero-buttons">
              <a href="/projects">View My Projects ↓</a>
              <div className="hero-buttons mt-6 flex flex-col gap-3">
                <a href="/" className="hero-nav-btn">
                  Home
                </a>
                <a href="/about" className="hero-nav-btn">
                  About
                </a>
                <a href="/contact" className="hero-nav-btn">
                  Contact
                </a>
              </div>
            </div>

            <div className="hero-icons">
              <a
                href="https://github.com/ichowdhury10"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/injam-chowdhury"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a href="mailto:ichowdhury10@fordham.edu">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Right: Avatar */}
          <div className="text-center">
            <img
              src={avatar}
              alt="Injam Avatar"
              className="hero-avatar mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
