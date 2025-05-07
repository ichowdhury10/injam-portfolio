const ProjectCard = ({ title, description, tech, link }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-3">{description}</p>
      <p className="text-sm text-gray-500 italic mb-4">Tech used: {tech}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          View on GitHub →
        </a>
      )}
    </div>
  )
}

export default ProjectCard
