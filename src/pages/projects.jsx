import React from 'react'

const projects = [
  {
    title: 'RAG-Powered Knowledge Assistant',
    description:
      'End-to-end Retrieval-Augmented Generation system that ingests PDF documents, chunks and embeds content into a ChromaDB vector store, and serves context-aware answers via a FastAPI endpoint. Containerized with Docker and deployed on Render with a Streamlit frontend.',
    tech: ['Python', 'LangChain', 'ChromaDB', 'Ollama', 'Streamlit', 'Docker'],
    github: 'https://github.com/ichowdhury10/-rag-knowledge-assistant',
    demo: '',
  },
  {
    title: 'Autonomous Research Agent',
    description:
      'Multi-step AI agent capable of web search, summarization, and structured report generation using LangChain\'s agent framework. Features a ReAct-style reasoning loop with memory persistence across sessions. Evaluated across a custom benchmark of 50 research queries.',
    tech: ['Python', 'LangChain', 'OpenAI API', 'SerpAPI'],
    github: '',
    demo: '',
  },
  {
    title: 'LinkHub Forum App',
    description:
      'Full-stack community forum with user authentication, post creation, threaded commenting, and upvoting. React frontend with a RESTful Node.js/Express backend connected to PostgreSQL. Deployed via Vercel with CI/CD through GitHub Actions.',
    tech: ['React.js', 'Node.js', 'PostgreSQL', 'Express', 'REST API'],
    github: 'https://github.com/ichowdhury10/Codepath-Final-Project',
    demo: '',
  },
  {
    title: 'Airbnb NYC Analysis',
    description:
      'Exploratory data analysis of 48,000+ NYC Airbnb listings uncovering pricing patterns, neighborhood trends, and host behavior. Includes statistical summaries, correlation analysis, and a suite of visualizations.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    github: 'https://github.com/ichowdhury10/airbnb-nyc-analysis',
    demo: '',
  },
]

const Projects = () => {
  return (
    <section className="page-section">
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
