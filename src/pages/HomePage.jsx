import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import InstrumentCard from '../components/InstrumentCard'
import guitar from '../assets/images/guitar.jpg'

// Dummy data for instruments (in a real app, this would come from an API)
const instruments = [
  {
    id: 'guitar',
    name: 'Guitar',
    image: guitar,
    description: 'Learn to play acoustic or electric guitar with personalized lessons from expert instructors.'
  },
  {
    id: 'piano',
    name: 'Piano',
    image: '/src/assets/images/piano.jpg',
    description: 'Master the piano with comprehensive lessons covering classical, jazz, and contemporary styles.'
  },
  {
    id: 'violin',
    name: 'Violin',
    image: '/src/assets/images/violin.jpg',
    description: 'Discover the beauty of violin playing with structured lessons for beginners to advanced players.'
  },
  {
    id: 'drums',
    name: 'Drums',
    image: '/src/assets/images/drums.jpg',
    description: 'Learn rhythm and percussion through our expert drum lessons for all skill levels.'
  },
  {
    id: 'flute',
    name: 'Flute',
    image: '/src/assets/images/flute.jpg',
    description: 'Develop your wind instrument skills with professional flute lessons for all ages.'
  }
]

// New: Success stats
const successStats = [
  { value: '5,000+', label: 'Students Taught' },
  { value: '97%', label: 'Student Satisfaction' },
  { value: '450+', label: 'Public Performances' },
  { value: '25+', label: 'Award-Winning Instructors' }
]



const HomePage = () => {
  // Reference to the instruments section
  const instrumentsRef = useRef(null)
  
  // State to track favorite instruments
  const [favorites, setFavorites] = useState(() => {
    // Initialize favorites from localStorage if available
    const savedFavorites = localStorage.getItem('favoriteInstruments')
    return savedFavorites ? JSON.parse(savedFavorites) : []
  })

  
  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('favoriteInstruments', JSON.stringify(favorites))
  }, [favorites])
  
  // Function to toggle favorite status
  const toggleFavorite = (instrumentId) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(instrumentId)) {
        return prevFavorites.filter(id => id !== instrumentId)
      } else {
        return [...prevFavorites, instrumentId]
      }
    })
  }
  
  // Function to scroll to instruments section
  const scrollToInstruments = () => {
    instrumentsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }





 // New: Animation variants for stats
 const counterVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const statVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
}






  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Hero Banner with Image - Responsive for all screen sizes */}
      <motion.div 
        className="relative rounded-xl overflow-hidden mb-16 shadow-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* For small screens: simplified vertical layout (image -> text -> button) */}
        <div className="md:hidden flex flex-col bg-gradient-to-b from-indigo-700 to-indigo-500">
          {/* Image at the top */}
          <div className="w-full h-64">
            <img 
              src="/src/assets/images/musicians.jpg" 
              alt="Musicians performing" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Text content and button below the image */}
          <motion.div className="p-6 text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <p className="text-lg mb-6 text-indigo-100">
              Discover the joy of creating music with expert guidance from passionate instructors. Whether you're a beginner or looking to refine your skills, your musical journey starts here.
            </p>
            <div className="flex justify-center">
              <motion.button 
                className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-indigo-50 transition duration-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                onClick={scrollToInstruments}
              >
                Start Learning
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* For medium to large screens: horizontal layout */}
        <div className="hidden md:flex md:flex-row h-96">
          {/* Left side text content */}
          <div className="md:w-1/2 bg-gradient-to-r from-indigo-700 to-indigo-500 p-8 md:p-12 flex flex-col justify-center text-white z-10">
            <motion.h1 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'white' }}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Music Transforms Lives
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-6 text-indigo-100"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Discover the joy of creating music with expert guidance from passionate instructors. Whether you're a beginner or looking to refine your skills, your musical journey starts here.
            </motion.p>
            <motion.button
              className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-indigo-50 transition duration-300 w-fit"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.1 }}
              onClick={scrollToInstruments}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Learning
            </motion.button>
          </div>
          
          {/* Right side image */}
          <div className="md:w-1/2 h-full">
            <img 
              src="/src/assets/images/musicians.jpg" 
              alt="Musicians performing" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>






{/* Success Stats Section */}
<motion.div
  className="mb-16"
  variants={counterVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-8"> Our Success Stats</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
    {successStats.map((stat, index) => (
      <motion.div
        key={index}
        variants={statVariants}
        className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">{stat.value}</h3>
        <p className="text-gray-600">{stat.label}</p>
      </motion.div>
    ))}
  </div>
</motion.div>










{/* Music Testimonial Carousel Section */}
<div className="my-20">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-900 mb-3">What Our Musicians Say</h2>
    <div className="w-16 h-1 bg-indigo-500 mx-auto mb-4"></div>
    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
      Discover how music creates powerful connections and transforms lives across our vibrant community.
    </p>
  </div>

  {/* Testimonial Carousel - without arrows */}
  <div className="max-w-6xl mx-auto px-4">
    <div className="relative py-10">
      <div className="flex overflow-hidden">
        {/* Single testimonial slide */}
        <div className="flex-none w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-indigo-100 p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">David Reynolds</h4>
                  <p className="text-gray-500 text-sm">Local Composer • Symphony No.3</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600">"Music is more than notes on a page – it's a language that transcends barriers. Working with local musicians has brought my compositions to life in ways I never imagined possible."</p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-indigo-100 p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Maya Chen</h4>
                  <p className="text-gray-500 text-sm">Music Therapist • Healing Notes</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600">"I've witnessed music heal emotional wounds where traditional therapy couldn't reach. The power of rhythm and melody to reconnect people with themselves is nothing short of miraculous."</p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-indigo-100 p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Marcus Bell</h4>
                  <p className="text-gray-500 text-sm">Festival Director • Urban Beat</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600">"Music brings communities together like nothing else. Our festival started with just 50 locals and now draws thousands, all united by the universal language of rhythm and sound."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>










     {/* New Section: Our Music Programs */}
<motion.div
  className="my-16 bg-gray-50 p-8 rounded-xl shadow-sm"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.7 }}
>
  <div className="flex flex-col md:flex-row gap-8">
    <div className="md:w-1/2">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-indigo-400 pb-2">Our Music Programs</h2>
      <p className="text-lg text-gray-700 mb-6">
        We offer comprehensive music education for all ages and skill levels. Our programs blend theory, technique, and performance to develop well-rounded musicians.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-2">
            <div className="bg-indigo-100 rounded-full p-2 mr-3">
              <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
              </svg>
            </div>
            <span className="font-medium">Individual lessons</span>
          </div>
          <p className="text-sm text-gray-600 pl-10">Over 15 different instruments</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-2">
            <div className="bg-indigo-100 rounded-full p-2 mr-3">
              <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <span className="font-medium">Group ensembles</span>
          </div>
          <p className="text-sm text-gray-600 pl-10">Collaborative learning</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-2">
            <div className="bg-indigo-100 rounded-full p-2 mr-3">
              <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <span className="font-medium">Theory & composition</span>
          </div>
          <p className="text-sm text-gray-600 pl-10">Workshops and classes</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-2">
            <div className="bg-indigo-100 rounded-full p-2 mr-3">
              <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <span className="font-medium">Seasonal recitals</span>
          </div>
          <p className="text-sm text-gray-600 pl-10">Community performances</p>
        </div>
      </div>
    </div>
    <div className="md:w-1/2">
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <svg className="h-6 w-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
          </svg>
          Student Achievements
        </h3>
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-start">
              <svg className="h-8 w-8 text-indigo-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
              <div>
                <p className="italic text-gray-600">"Within six months of joining the jazz ensemble, I developed the confidence to improvise solos and even performed at the city's summer festival. The supportive community here made all the difference."</p>
                <div className="flex items-center mt-3">
                  <div className="bg-indigo-100 rounded-full h-8 w-8 flex items-center justify-center text-indigo-600 font-bold">MT</div>
                  <p className="text-gray-500 ml-2 text-sm">Michael T., Saxophone Student</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-start">
              <svg className="h-8 w-8 text-indigo-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
              <div>
                <p className="italic text-gray-600">"The music theory classes opened up a whole new world for me. I'm now composing my own pieces and have even had one selected for the school orchestra's spring concert."</p>
                <div className="flex items-center mt-3">
                  <div className="bg-indigo-100 rounded-full h-8 w-8 flex items-center justify-center text-indigo-600 font-bold">SL</div>
                  <p className="text-gray-500 ml-2 text-sm">Sarah L., Piano & Composition Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</motion.div>







      
      {/* New Section: Why Music Matters - Redesigned */}
<motion.div 
  className="mb-16 bg-gradient-to-r from-indigo-00 to-purple-00 py-12 px-6 rounded-xl"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  <div className="text-center mb-10">
    <h2 className="text-4xl font-bold text-indigo-800 mb-4">Why Music Matters</h2>
    <div className="w-24 h-1 bg-indigo-500 mx-auto mb-6"></div>
    <p className="text-lg text-indigo-700 max-w-2xl mx-auto">
      Music education goes beyond learning to play an instrument. It enriches lives, builds cognitive skills, and creates lifelong connections.
    </p>
  </div>
  
  <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
    <div className="flex-1 bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
      <div className="text-indigo-600 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </div>
      <h3 className="text-2xl font-semibold text-indigo-900 mb-3">Boost Creativity</h3>
      <p className="text-gray-700">
        Music education enhances creative thinking, problem-solving skills, and self-expression in ways that benefit all aspects of life.
      </p>
    </div>
    
    <div className="flex-1 bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
      <div className="text-indigo-600 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </div>
      <h3 className="text-2xl font-semibold text-indigo-900 mb-3">Build Community</h3>
      <p className="text-gray-700">
        Music connects people across cultural boundaries, creating lasting friendships and fostering a sense of belonging.
      </p>
    </div>
    
    <div className="flex-1 bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
      <div className="text-indigo-600 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      </div>
      <h3 className="text-2xl font-semibold text-indigo-900 mb-3">Enhance Learning</h3>
      <p className="text-gray-700">
        Studies show that music education improves cognitive development, mathematical ability, and language processing skills.
      </p>
    </div>
  </div>
</motion.div>


      
      {/* Main Content Section */}
      <div className="mt-12" ref={instrumentsRef}>
        <motion.div 
          className="flex items-center justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Choose an Instrument
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {instruments.map((instrument) => (
            <motion.div key={instrument.id} variants={itemVariants}>
              <InstrumentCard 
                instrument={instrument} 
                isFavorite={favorites.includes(instrument.id)}
                onToggleFavorite={() => toggleFavorite(instrument.id)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>



      
      {/* New Section: Our Teaching Philosophy */}
      <motion.div 
        className="my-16 bg-gray-50 p-8 rounded-xl shadow-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Teaching Philosophy</h2>
            <p className="text-lg text-gray-700 mb-4">
              We believe that every student has unique talents and learning styles. Our approach combines technical excellence with creative exploration.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Personalized instruction tailored to your goals</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Balance of technical mastery and creative expression</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Supportive environment that builds confidence</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Regular performance opportunities to showcase progress</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">From Our Students</h3>
            <div className="space-y-4">
              <blockquote className="italic text-gray-600 border-l-4 border-indigo-300 pl-4">
                "The instructors understand that everyone learns differently. They adapted their teaching methods to fit my learning style, which made all the difference in my progress."
                <footer className="text-gray-500 mt-1 not-italic">— Jamie K., Piano Student</footer>
              </blockquote>
              <blockquote className="italic text-gray-600 border-l-4 border-indigo-300 pl-4">
                "I've tried learning guitar three times before, but this was the first approach that actually stuck. The balance of fundamentals and play makes practice something I look forward to."
                <footer className="text-gray-500 mt-1 not-italic">— Alex M., Guitar Student</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Call to Action */}
      <motion.div 
        className="bg-indigo-500 rounded-lg shadow-xl mt-16 p-8 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-white" style={{ color: '#ffffff' }}>
          Ready to Start Your Musical Journey?
        </h2>
        <p className="mt-3 text-lg text-indigo-100 mb-6">
          Browse through our selection of instruments and find expert instruction near you.
        </p>
        <Link to="/journey">
          <motion.button 
            className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-indigo-50 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </Link>
      </motion.div>
    </div>
  )
}

export default HomePage
