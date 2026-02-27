import React from 'react'

const techStack = {
  'AI & LLM': ['LangChain', 'OpenAI API', 'LlamaIndex', 'Hugging Face', 'Ollama'],
  'ML & Data': ['Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter'],
  'Frontend': ['React.js', 'JavaScript', 'HTML / CSS'],
  'Backend & Infra': ['Node.js', 'FastAPI', 'Docker', 'PostgreSQL', 'ChromaDB'],
}

const experience = [
  {
    org: 'CodePath',
    role: 'Applied AI Engineering Fellow',
    period: 'Feb 2026 – Present',
    bullets: [
      'Intensive curriculum covering LLM integration, RAG pipelines, prompt engineering, and AI agent design with LangChain and the OpenAI API.',
      'Building and deploying end-to-end AI applications with a focus on responsible AI and production-ready system design.',
    ],
  },
  {
    org: 'Madison Square Garden Entertainment',
    role: 'Front-End Engineer Intern',
    period: 'Jun 2022 – Aug 2022',
    bullets: [
      'Built and optimized data-driven React components, improving user interaction tracking, responsiveness, and load performance.',
      'Refactored legacy code into reusable components and integrated RESTful APIs for real-time content delivery.',
      'Collaborated with senior engineers in an Agile/Scrum environment — sprint planning, code reviews, and daily stand-ups.',
    ],
  },
]

const About = () => {
  return (
    <section className="page-section">
      <div className="hero-content">
        <div className="hero-flex">
          {/* Left: Bio + Education + Experience + Activities */}
          <div>
            <h1 className="hero-title">
              About <span style={{ color: '#3b82f6' }}>Me</span>
            </h1>

            <p className="hero-subtitle">
              I'm an AI/ML engineer and frontend developer passionate about
              building intelligent, user-first applications. I earned my B.S. in
              Computer Science from Fordham University and am currently pursuing
              an M.S. in Machine Learning at Stevens Institute of Technology.
            </p>

            {/* Education */}
            <div style={{ marginTop: '2rem' }}>
              <h3>Education</h3>
              <ul className="section-list">
                <li>
                  🎓 <strong>Stevens Institute of Technology</strong> — M.S. in
                  Machine Learning (Expected Spring 2027) · GPA: 3.35
                </li>
                <li>
                  📚 <strong>Fordham University</strong> — B.S. in Computer
                  Science (May 2024)
                </li>
              </ul>
            </div>

            {/* Experience */}
            <div style={{ marginTop: '2rem' }}>
              <h3>Experience</h3>
              {experience.map((job, i) => (
                <div key={i} className="experience-block">
                  <div className="experience-header">
                    <span className="experience-org">{job.org}</span>
                    <span className="experience-period">{job.period}</span>
                  </div>
                  <div className="experience-role">{job.role}</div>
                  <ul className="experience-bullets">
                    {job.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Activities */}
            <div style={{ marginTop: '2rem' }}>
              <h3>Activities</h3>
              <ul className="section-list">
                <li>🧠 Member of the Fordham Computer Science Society</li>
              </ul>
            </div>
          </div>

          {/* Right: Tech Stack */}
          <div style={{ marginTop: '2.5rem' }}>
            <h3>My Tech Stack</h3>
            <div>
              {Object.entries(techStack).map(([category, tools], index) => (
                <div key={index} className="tech-block">
                  <h4 className="tech-category-heading">{category}</h4>
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
