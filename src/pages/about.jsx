import React from 'react'

const techStack = {
  'AI & LLM': ['LangChain', 'OpenAI API', 'Groq', 'LlamaIndex', 'Hugging Face', 'Ollama'],
  'ML & Data': ['PyTorch', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter'],
  'Frontend': ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML / CSS'],
  'Backend & Infra': ['Node.js', 'FastAPI', 'Docker', 'PostgreSQL', 'ChromaDB'],
  'Cloud & DevOps': ['AWS', 'Vercel', 'Render', 'GitHub Actions'],
}

const experience = [
  {
    org: 'CodePath',
    role: 'Applied AI Engineering Fellow',
    period: 'Feb 2026 – May 2026',
    bullets: [
      'Completed an intensive fellowship covering generative AI application development, RAG pipelines, prompt engineering, and AI agent design using LangChain and the OpenAI API.',
      'Built and deployed end-to-end AI systems with an emphasis on production-ready architecture and responsible AI practices.',
      'Enrolled in Applications of AI Engineering — Summer 2026',
    ],
  },
  {
    org: 'Madison Square Garden Entertainment',
    role: 'Front-End Engineer Intern',
    period: 'June 2023 – Aug 2023',
    bullets: [
      'Built and optimized data-driven React components, improving user interaction tracking, responsiveness, and load performance.',
      'Refactored legacy code into reusable components and integrated RESTful APIs for real-time content delivery.',
      'Collaborated with senior engineers in an Agile/Scrum environment across sprint planning, code reviews, and daily stand-ups.',
    ],
  },
]

const About = () => {
  return (
    <section className="page-section">
      <div className="hero-content">
        <div className="hero-flex">
          {/* Left: Bio + Education + Experience + Certifications */}
          <div>
            <h1 className="hero-title">
              About <span style={{ color: '#3b82f6' }}>Me</span>
            </h1>

            <p className="hero-subtitle">
              I'm an AI/ML engineer and full-stack developer focused on building
              intelligent, production-ready applications. I hold a B.S. in Computer
              Science from Fordham University and am completing an M.S. in Machine
              Learning at Stevens Institute of Technology. My work sits at the
              intersection of generative AI, retrieval systems, and clean user
              experience — from RAG pipelines and LLM-powered agents to the
              full-stack applications that bring them to life.
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

            {/* Licenses & Certifications */}
            <div style={{ marginTop: '2rem' }}>
              <h3>Licenses &amp; Certifications</h3>
              <ul className="section-list">
                <li>
                  <strong>Python for Data Science, AI &amp; Development</strong>
                  <br />
                  IBM · Coursera &nbsp;·&nbsp; Issued May 2024
                  <br />
                  <span style={{ fontSize: '0.85em', opacity: 0.7 }}>Python, NumPy, Pandas</span>
                </li>
                <li>
                  <strong>Data Science Math Skills</strong>
                  <br />
                  Duke University · Coursera &nbsp;·&nbsp; Issued May 2024
                  <br />
                  <span style={{ fontSize: '0.85em', opacity: 0.7 }}>Statistics</span>
                </li>
                <li>
                  <strong>Generative AI with AWS Bedrock</strong>
                  <br />
                  Amazon Web Services · Coursera &nbsp;·&nbsp; In Progress
                  <br />
                  <span style={{ fontSize: '0.85em', opacity: 0.7 }}>AWS, Generative AI</span>
                </li>
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
