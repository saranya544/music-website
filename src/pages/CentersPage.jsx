// src/pages/CentersPage.jsx
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronLeft } from 'lucide-react'
import CenterCard from '../components/CenterCard'
import guitarc1 from '../assets/images/guitar-center1.jpg'
import guitarc2 from '../assets/images/guitar-center2.jpg'
import guitarc3 from '../assets/images/guitar-center3.jpg'
import pianoc1 from '../assets/images/piano-center1.jpg'
import pianoc2 from '../assets/images/piano-center2.jpg'
import violinc1 from '../assets/images/violin-center1.jpg'
import vioc2 from '../assets/images/violin-center2.jpg'
import drumsc1 from '../assets/images/drums-center1.jpg'
import drumsc2 from '../assets/images/drums-center2.jpg'
import flutec1 from '../assets/images/flute-center1.jpg'
import flutec2 from '../assets/images/flute-center2.jpg'


// Dummy data for teaching centers (in a real app, this would come from an API)
const centersByInstrument = {
  guitar: [
    {
      id: 'guitar-center-1',
      name: 'Guitar Masters Academy',
      address: '123 Music Street, Melody City',
      rating: 4.8,
      image: guitarc1,
      priceRange: '$30-$50 per hour',
      coursesDuration: ['10 days', '1 month', '3 months']
    },
    {
      id: 'guitar-center-2',
      name: 'String Theory Studio',
      address: '456 Harmony Road, Tempo Town',
      rating: 4.5,
      image: guitarc2,
      priceRange: '$25-$45 per hour',
      coursesDuration: ['2 weeks', '6 weeks', '12 weeks']
    },
    {
      id: 'guitar-center-3',
      name: 'Acoustic Dreams',
      address: '789 Rhythm Avenue, Chord City',
      rating: 4.2,
      image: guitarc3,
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
      image: pianoc1,
      priceRange: '$35-$55 per hour',
      coursesDuration: ['2 weeks', '1 month', '3 months']
    },
    {
      id: 'piano-center-2',
      name: 'Classical Keys',
      address: '567 Sonata Street, Symphony City',
      rating: 4.7,
      image: pianoc2,
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
      image: violinc1,
      priceRange: '$40-$60 per hour',
      coursesDuration: ['2 weeks', '1 month', '3 months']
    },
    {
      id: 'violin-center-2',
      name: 'Stradivarius Studio',
      address: '678 Bow Street, Orchestra City',
      rating: vioc2,
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
      image: drumsc1,
      priceRange: '$25-$45 per hour',
      coursesDuration: ['2 weeks', '1 month', '3 months']
    },
    {
      id: 'drums-center-2',
      name: 'Drumming Dynamics',
      address: '789 Tempo Road, Rhythm Town',
      rating: 4.3,
      image: drumsc2,
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
      image: flutec1,
      priceRange: '$30-$50 per hour',
      coursesDuration: ['2 weeks', '1 month', '3 months']
    },
    {
      id: 'flute-center-2',
      name: 'Breezy Notes Studio',
      address: '890 Airy Avenue, Wind City',
      rating: 4.2,
      image: flutec2,
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

const CentersPage = () => {
  const { instrument } = useParams()
  const [centers, setCenters] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setCenters(centersByInstrument[instrument] || [])
      setLoading(false)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [instrument])
  
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
      <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
        <ChevronLeft className="h-5 w-5 mr-1" />
        Back to Instruments
      </Link>
      
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900">
          {instrumentNames[instrument] || 'Instrument'} Teaching Centers
        </h1>
        <p className="mt-3 text-lg text-gray-500">
          Choose from our selection of top-rated {instrumentNames[instrument] || 'music'} teaching centers
        </p>
      </motion.div>
      
      {centers.length > 0 ? (
        <motion.div 
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {centers.map((center) => (
            <motion.div key={center.id} variants={itemVariants}>
              <CenterCard center={center} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500 text-lg">
            No teaching centers found for this instrument. Please try another instrument.
          </p>
          <Link to="/" className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
            Browse All Instruments
          </Link>
        </div>
      )}
    </div>
  )
}

export default CentersPage