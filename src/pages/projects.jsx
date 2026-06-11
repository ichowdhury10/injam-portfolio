import React from 'react'

const projects = [
  {
    title: 'RAG Knowledge Assistant — Stevens Unofficial Guide',
    purpose: 'Ask plain-language questions about Stevens CS professors, grounded in real student reviews.',
    description:
      'Student knowledge about professors lives on Rate My Professors and Reddit — fragmented and hard to search. This system ingests 12 professor review documents into ChromaDB, retrieves the most relevant passages via semantic search, and generates grounded answers with source citations. Built a FastAPI backend with SSE streaming and a Next.js 14 frontend with a real-time source drawer — fully containerized with Docker.',
    tech: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'Groq', 'Next.js', 'TypeScript', 'Docker'],
    github: 'https://github.com/ichowdhury10/rag-knowledge-assistant-Stevens-',
    demo: '',
    status: 'Complete',
  },
  {
    title: 'Autonomous Research Agent',
    purpose: 'Automate multi-step research tasks that would take a human hours.',
    description:
      'Manual research workflows require context-switching between search, reading, and synthesis. This agent automates the entire loop: it issues web searches, reads and summarizes sources, and produces a structured report — all in one run. Built on LangChain\'s ReAct framework with memory persistence across sessions, evaluated against a custom benchmark of 50 research queries to validate output quality.',
    tech: ['Python', 'LangChain', 'OpenAI API', 'SerpAPI'],
    github: '',
    demo: '',
    status: 'In Progress',
  },
  {
    title: 'LinkHub Forum App',
    purpose: 'A full-stack community platform built to production standards.',
    description:
      'Built to demonstrate end-to-end full-stack engineering — not a tutorial clone. Features user authentication, post creation, Markdown formatting with live preview, threaded commenting, and upvoting. React frontend backed by Supabase (PostgreSQL + Auth), with Row Level Security enforcing authorization at the database level. Deployed on Vercel.',
    tech: ['React.js', 'Supabase', 'PostgreSQL', 'Vite', 'React Router'],
    github: 'https://github.com/ichowdhury10/Codepath-Final-Project',
    demo: '',
    status: 'Deployed',
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
              <div className="project-card-header">
                <h3>{project.title}</h3>
                {project.status && (
                  <span className={`project-status-badge ${project.status === 'In Progress' ? 'badge-progress' : project.status === 'Deployed' || project.status === 'Deployed on Render' ? 'badge-deployed' : 'badge-complete'}`}>
                    {project.status}
                  </span>
                )}
              </div>
              <p className="project-purpose">{project.purpose}</p>
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
