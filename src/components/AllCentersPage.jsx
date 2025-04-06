// src/components/AllCentersPage.jsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronLeft } from 'lucide-react'

// Reusing the same dummy data from CentersPage
const centersByInstrument = {
  guitar: [
    {
      id: 'guitar-center-1',
      name: 'Guitar Masters Academy',
      address: '123 Music Street, Melody City',
      rating: 4.8,
      image: '/src/assets/images/guitar-center1.jpg',
      priceRange: '$30-$50 per hour',
      coursesDuration: ['10 days', '1 month', '3 months']
    },
    {
      id: 'guitar-center-2',
      name: 'String Theory Studio',
      address: '456 Harmony Road, Tempo Town',
      rating: 4.5,
      image: '/src/assets/images/guitar-center2.jpg',
      priceRange: '$25-$45 per hour',
      coursesDuration: ['2 weeks', '6 weeks', '12 weeks']
    },
    {
      id: 'guitar-center-3',
      name: 'Acoustic Dreams',
      address: '789 Rhythm Avenue, Chord City',
      rating: 4.2,
      image: '/src/assets/images/guitar-center3.jpg',
      priceRange: '$20-$40 per hour',
      coursesDuration: ['1 month', '3 months']
    }
  ],
  piano: [
    {
      id: 'piano-center-1',
      name: 'Piano Perfection',
      address: '234 Keyboard Lane, Note Valley',
      rating: 4.9,
      image: '/src/assets/images/piano-center1.jpg',
      priceRange: '$35-$55 per hour',
      coursesDuration: ['2 weeks', '1 month', '3 months']
    },
    {
      id: 'piano-center-2',
      name: 'Classical Keys',
      address: '567 Sonata Street, Symphony City',
      rating: 4.7,
      image: '/src/assets/images/piano-center2.jpg',
      priceRange: '$30-$50 per hour',
      coursesDuration: ['10 days', '6 weeks', '12 weeks']
    }
  ],
  violin: [
    {
      id: 'violin-center-1',
      name: 'Violin Virtuosos',
      address: '345 String Boulevard, Concerto Town',
      rating: 4.6,
      image: '/src/assets/images/violin-center1.jpg',
      priceRange: '$40-$60 per hour',
      coursesDuration: ['2 weeks', '1 month', '3 months']
    },
    {
      id: 'violin-center-2',
      name: 'Stradivarius Studio',
      address: '678 Bow Street, Orchestra City',
      rating: 4.4,
      image: '/src/assets/images/violin-center2.jpg',
      priceRange: '$35-$55 per hour',
      coursesDuration: ['1 month', '2 months', '6 months']
    }
  ],
  drums: [
    {
      id: 'drums-center-1',
      name: 'Rhythm Nation',
      address: '456 Beat Street, Percussion City',
      rating: 4.7,
      image: '/src/assets/images/drums-center1.jpg',
      priceRange: '$25-$45 per hour',
      coursesDuration: ['2 weeks', '1 month', '3 months']
    },
    {
      id: 'drums-center-2',
      name: 'Drumming Dynamics',
      address: '789 Tempo Road, Rhythm Town',
      rating: 4.3,
      image: '/src/assets/images/drums-center2.jpg',
      priceRange: '$20-$40 per hour',
      coursesDuration: ['10 days', '6 weeks', '12 weeks']
    }
  ],
  flute: [
    {
      id: 'flute-center-1',
      name: 'Flute Fantasia',
      address: '567 Woodwind Way, Melody Valley',
      rating: 4.5,
      image: '/src/assets/images/flute-center1.jpg',
      priceRange: '$30-$50 per hour',
      coursesDuration: ['2 weeks', '1 month', '3 months']
    },
    {
      id: 'flute-center-2',
      name: 'Breezy Notes Studio',
      address: '890 Airy Avenue, Wind City',
      rating: 4.2,
      image: '/src/assets/images/flute-center2.jpg',
      priceRange: '$25-$45 per hour',
      coursesDuration: ['10 days', '6 weeks', '12 weeks']
    }
  ]
}

// Map of instrument IDs to their display names
const instrumentNames = {
  guitar: 'Guitar',
  piano: 'Piano',
  violin: 'Violin',
  drums: 'Drums',
  flute: 'Flute'
}

const AllCentersPage = () => {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [])
  
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
  
  const CenterCard = ({ center }) => (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="h-48 bg-gray-200">
        <img 
          src={center.image} 
          alt={center.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{center.name}</h3>
        <p className="text-gray-600 mb-4">{center.address}</p>
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${i < Math.floor(center.rating) ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-gray-600">{center.rating.toFixed(1)}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-2"><span className="font-medium">Price:</span> {center.priceRange}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {center.coursesDuration.map((duration, idx) => (
            <span key={idx} className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
              {duration}
            </span>
          ))}
        </div>
        <Link to={`/booking/${center.id}`}>
          <button className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
            View Details
          </button>
        </Link>
      </div>
    </motion.div>
  )
  
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex justify-center items-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading centers...</p>
        </div>
      </div>
    )
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/journey" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
        <ChevronLeft className="h-5 w-5 mr-1" />
        Back to our Journey 
      </Link>
      
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900">
          All Music Teaching Centers
        </h1>
        <p className="mt-3 text-lg text-gray-500">
          Browse our comprehensive selection of music teaching centers by instrument
        </p>
      </motion.div>
      
      {/* Render centers grouped by instrument */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-16"
      >
        {Object.keys(centersByInstrument).map((instrumentKey) => (
          <motion.div key={instrumentKey} variants={itemVariants} className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{instrumentNames[instrumentKey]} Centers</h2>
              <Link to={`/centers/${instrumentKey}`} className="text-indigo-600 hover:text-indigo-800">
                View all {instrumentNames[instrumentKey]} centers
              </Link>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {centersByInstrument[instrumentKey].map((center) => (
                <CenterCard key={center.id} center={center} />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default AllCentersPage