import { Link } from 'react-router-dom'
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
              AI/ML Engineer & Frontend Developer. M.S. in Machine Learning at
              Stevens Institute of Technology. I build end-to-end AI systems and
              user-first web experiences.
            </p>

            <div className="hero-buttons">
              <Link to="/projects">View My Projects ↓</Link>
              <a
                href="/Injam_Chowdhury_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="hero-btn-outline"
              >
                View Resume
              </a>
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
              <a href="mailto:injamch@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Right: Avatar */}
          <div>
            <img
              src={avatar}
              alt="Injam Avatar"
              className="hero-avatar"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
