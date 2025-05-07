import React from 'react'

const projects = [
  {
    title: 'LinkHub Forum App',
    description:
      'A full-stack forum web app where users can post links, comment, and upvote.',
    tech: ['React.js', 'Tailwind CSS', 'JSON Server'],
    github: 'https://github.com/ichowdhury10/Codepath-Final-Project',
    demo: '',
  },
  {
    title: 'Airbnb NYC Analysis',
    description:
      'Data exploration project analyzing patterns and trends in NYC Airbnb listings using Python.',
    tech: ['Pandas', 'Matplotlib', 'Seaborn'],
    github: 'https://github.com/ichowdhury10/airbnb-nyc-analysis',
    demo: '',
  },
]

const Projects = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          My <span style={{ color: '#3b82f6' }}>Projects</span>
        </h1>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tech-list">
                {project.tech.map((tool, i) => (
                  <li key={i}>{tool}</li>
                ))}
              </ul>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub →
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
