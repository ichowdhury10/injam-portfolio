import React from 'react'

const projects = [
  {
    title: 'Stevens Professor Q&A — RAG Knowledge System',
    purpose: 'Ask plain-language questions about Stevens CS professors, grounded in real student reviews.',
    description:
      'Student knowledge about professors is scattered across Rate My Professors and Reddit — hard to search and impossible to verify. This system ingests 12 professor review documents into ChromaDB, retrieves the most relevant passages via semantic search, and uses a generative AI model to produce grounded answers with source citations. Built a FastAPI backend with SSE token streaming and a Next.js 14 frontend with a real-time source drawer.',
    tech: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'Groq', 'Next.js', 'TypeScript', 'Docker'],
    github: 'https://github.com/ichowdhury10/rag-knowledge-assistant-Stevens-',
    demo: '',
    status: 'Complete',
  },
  {
    title: 'Autonomous Research Agent',
    purpose: 'Automate multi-step research workflows with an LLM-powered agent.',
    description:
      'Research workflows require constant context-switching between searching, reading, and writing. This agent runs the full loop autonomously: issuing web searches, reading and summarizing sources, and producing a structured report in one pass. Built on LangChain\'s ReAct framework with memory persistence across sessions.',
    tech: ['Python', 'LangChain', 'OpenAI API', 'SerpAPI'],
    github: '',
    demo: '',
    status: 'In Progress',
  },
  {
    title: 'LinkHub Forum App',
    purpose: 'A full-stack community platform with authentication, threading, and live preview.',
    description:
      'Full-stack forum application with user authentication, post creation, Markdown formatting with live preview, threaded commenting, and upvoting. React frontend backed by Supabase (PostgreSQL + Auth), with Row Level Security enforcing authorization at the database layer. Deployed on Vercel.',
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
