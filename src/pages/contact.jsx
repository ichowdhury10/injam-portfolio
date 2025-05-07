import React from 'react'

const Contact = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-flex">
          {/* Left Side - Text and Buttons */}
          <div>
            <h1 className="hero-title">
              Let’s <span style={{ color: '#3b82f6' }}>Connect</span>
            </h1>
            <p className="hero-subtitle">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your team. Feel free to reach out.
            </p>

            <div className="hero-buttons mt-6">
              <a
                href="mailto:injamch@gmail.com"
                className="hero-nav-btn"
                target="_blank"
                rel="noreferrer"
              >
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/injam-chowdhury"
                className="hero-nav-btn"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/ichowdhury10"
                className="hero-nav-btn"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Right side: You can optionally add a visual, like a contact-themed illustration or avatar */}
          <div></div>
        </div>
      </div>
    </section>
  )
}

export default Contact
