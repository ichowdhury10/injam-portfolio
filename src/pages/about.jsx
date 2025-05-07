import React from 'react'

const techStack = {
  Frontend: ['React.js', 'JavaScript', 'Tailwind CSS'],
  Backend: ['Node.js', 'PostgreSQL', 'MySQL'],
  'Machine Learning': ['Python', 'Scikit-Learn', 'Pandas', 'TensorFlow.js'],
}

const About = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-flex">
          {/* Left: Bio + Education + Activities */}
          <div>
            <h1 className="hero-title">
              About <span style={{ color: '#3b82f6' }}>Me</span>
            </h1>

            <p className="hero-subtitle">
              I'm a front-end developer with a passion for intuitive UI design,
              AI integration, and crafting seamless digital experiences. I
              earned my B.S. in Computer Science at Fordham University and am
              currently pursuing an M.S. in Machine Learning at Stevens
              Institute of Technology.
            </p>

            {/* Education */}
            <div style={{ marginTop: '2rem' }}>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Education
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 text-sm leading-7">
                <li>
                  🎓 <strong>Fordham University</strong> — B.S. in Computer
                  Science (Class of 2024)
                </li>
                <li>
                  📚 <strong>Stevens Institute of Technology</strong> — M.S. in
                  Machine Learning (Fall 2025)
                </li>
              </ul>
            </div>

            {/* Activities */}
            <div style={{ marginTop: '2rem' }}>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Activities
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 text-sm leading-7">
                <li>💻 CodePath Intermediate Web Development Participant</li>
                <li>🧠 Member of the Fordham Computer Science Society</li>
              </ul>
            </div>
          </div>

          {/* Right: Tech Stack */}
          <div style={{ marginTop: '2.5rem' }}>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              My Tech Stack
            </h3>
            <div className="grid gap-8">
              {Object.entries(techStack).map(([category, tools], index) => (
                <div key={index} className="tech-block">
                  <h4 className="font-semibold text-blue-600 text-lg mt-10 mb-4">
                    {category}
                  </h4>
                  <div className="tech-grid">
                    {tools.map((tech, i) => (
                      <div key={i} className="tech-grid-item">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
