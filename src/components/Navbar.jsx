const Navbar = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold text-gray-800">Injam Chowdhury</h1>
      <div className="space-x-4 font-medium text-sm text-gray-700">
        <a href="/" className="hover:text-blue-500">
          Home
        </a>
        <a href="/about" className="hover:text-blue-500">
          About
        </a>
        <a href="/projects" className="hover:text-blue-500">
          Projects
        </a>
        <a href="/contact" className="hover:text-blue-500">
          Contact
        </a>
      </div>
    </div>
  )
}

export default Navbar
