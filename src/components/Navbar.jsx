import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/cognifyz-1.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-blue-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Cognifyz Logo" 
              className="h-16 w-auto transition-opacity hover:opacity-90"
            />
          </Link>

          {/* Desktop Navigation with shadow effects */}
          <div className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              className="text-gray-800 hover:text-blue-800 px-3 py-3 text-[15px] font-medium transition-all rounded-lg hover:bg-blue-200 hover:shadow-sm"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-blue-800 px-3 py-3 text-[15px] font-medium transition-all rounded-lg hover:bg-blue-200 hover:shadow-sm"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-gray-800 hover:text-blue-800 px-3 py-3 text-[15px] font-medium transition-all rounded-lg hover:bg-blue-200 hover:shadow-sm"
            >
              Services
            </Link>
            <Link
              to="/internship"
              className="text-gray-800 hover:text-blue-800 px-3 py-3 text-[15px] font-medium transition-all rounded-lg hover:bg-blue-200 hover:shadow-sm"
            >
              Internships
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-blue-800 px-3 py-3 text-[15px] font-medium transition-all rounded-lg hover:bg-blue-200 hover:shadow-sm"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-blue-200 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-sm"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with shadow */}
      {isOpen && (
        <div className="md:hidden bg-blue-100 shadow-lg">
          <div className="px-2 pt-2 pb-4 space-y-2">
            <Link 
              to="/" 
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-800 hover:bg-blue-200 hover:text-blue-800 mx-2 hover:shadow-sm"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-800 hover:bg-blue-200 hover:text-blue-800 mx-2 hover:shadow-sm"
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-800 hover:bg-blue-200 hover:text-blue-800 mx-2 hover:shadow-sm"
            >
              Services
            </Link>
            <Link 
              to="/internship" 
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-800 hover:bg-blue-200 hover:text-blue-800 mx-2 hover:shadow-sm"
            >
              Internships
            </Link>
            <Link 
              to="/contact" 
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-800 hover:bg-blue-200 hover:text-blue-800 mx-2 hover:shadow-sm"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar;