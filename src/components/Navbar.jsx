import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Music, Heart } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const [activePath, setActivePath] = useState('/')

  useEffect(() => {
    setActivePath(location.pathname)
  }, [location])

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Music className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-indigo-600">MusicMasters</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className={`inline-flex items-center px-1 pt-1 border-b-2 ${activePath === '/' ? 'border-indigo-500' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} text-sm font-medium`}>
                Home
              </Link>
              <Link to="/about" className={`inline-flex items-center px-1 pt-1 border-b-2 ${activePath === '/about' ? 'border-indigo-500' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} text-sm font-medium`}>
                About Us
              </Link>
              <Link to="/services" className={`inline-flex items-center px-1 pt-1 border-b-2 ${activePath === '/services' ? 'border-indigo-500' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} text-sm font-medium`}>
                Services
              </Link>
              <Link to="/contact" className={`inline-flex items-center px-1 pt-1 border-b-2 ${activePath === '/contact' ? 'border-indigo-500' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} text-sm font-medium`}>
                Contact
              </Link>
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link to="/favourites" className="p-2 rounded-full text-gray-400 hover:text-red-500 focus:outline-none">
              <Heart className="h-6 w-6" />
            </Link>
          </div>
          
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/" className={`block pl-3 pr-4 py-2 border-l-4 ${activePath === '/' ? 'border-indigo-500 text-indigo-700 bg-indigo-50' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'} text-base font-medium`}>
              Home
            </Link>
            <Link to="/about" className={`block pl-3 pr-4 py-2 border-l-4 ${activePath === '/about' ? 'border-indigo-500 text-indigo-700 bg-indigo-50' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'} text-base font-medium`}>
              About Us
            </Link>
            <Link to="/services" className={`block pl-3 pr-4 py-2 border-l-4 ${activePath === '/services' ? 'border-indigo-500 text-indigo-700 bg-indigo-50' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'} text-base font-medium`}>
              Services
            </Link>
            <Link to="/contact" className={`block pl-3 pr-4 py-2 border-l-4 ${activePath === '/contact' ? 'border-indigo-500 text-indigo-700 bg-indigo-50' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'} text-base font-medium`}>
              Contact
            </Link>
            <Link to="/favourites" className={`block pl-3 pr-4 py-2 border-l-4 ${activePath === '/favourites' ? 'border-indigo-500 text-indigo-700 bg-indigo-50' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'} text-base font-medium`}>
              Favourites
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar