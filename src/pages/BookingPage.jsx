// src/pages/BookingPage.jsx
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronLeft, MapPin } from 'lucide-react'
import BookingForm from '../components/BookingForm'
import StarRating from '../components/StarRating'  // Import the StarRating component

// Dummy data for all centers (in a real app, this would come from an API)
const allCenters = [
  // Guitar Centers
  {
    id: 'guitar-center-1',
    name: 'Guitar Masters Academy',
    address: '123 Music Street, Melody City',
    rating: 4.8,
    image: '/src/assets/images/guitar-center1.jpg',
    priceRange: '$30-$50 per hour',
    coursesDuration: ['10 days', '1 month', '3 months'],
    instrument: 'guitar',
    description: 'Guitar Masters Academy provides expert instruction for all skill levels, from beginners to advanced players. Our professional instructors have decades of combined experience in various guitar styles including classical, rock, jazz, and more.'
  },
  {
    id: 'guitar-center-2',
    name: 'String Theory Studio',
    address: '456 Harmony Road, Tempo Town',
    rating: 4.5,
    image: '/src/assets/images/guitar-center2.jpg',
    priceRange: '$25-$45 per hour',
    coursesDuration: ['2 weeks', '6 weeks', '12 weeks'],
    instrument: 'guitar',
    description: 'String Theory Studio offers personalized guitar lessons with a focus on technique and music theory. Our curriculum is designed to help students develop a strong foundation while exploring their musical interests.'
  },
  // {
  //   id: 'guitar-center-3',
  //   name: 'Acoustic Dreams',
  //   address: '789 Rhythm Avenue, Chord City',
  //   rating: 4.2,
  //   image: '/src/assets/images/guitar-center3.jpg',
  //   priceRange: '$20-$40 per hour',
  //   coursesDuration: ['1 month', '3 months'],
  //   instrument: 'guitar',
  //   description: 'Acoustic Dreams delivers tailored guitar instruction that balances technical mastery and music theory with personalized guidance to help students discover their unique musical voice.'
  // },
  // Piano Centers
  {
    id: 'piano-center-1',
    name: 'Piano Perfection',
    address: '234 Keyboard Lane, Note Valley',
    rating: 4.9,
    image: '/src/assets/images/piano-center1.jpg',
    priceRange: '$35-$55 per hour',
    coursesDuration: ['2 weeks', '1 month', '3 months'],
    instrument: 'piano',
    description: 'Piano Perfection offers comprehensive piano instruction from certified teachers with advanced degrees in music. Our state-of-the-art facility features premium grand pianos and digital keyboards for practice and performance.'
  },
  {
    id: 'piano-center-2',
    name: 'Classical Keys',
    address: '567 Sonata Street, Symphony City',
    rating: 4.7,
    image: '/src/assets/images/piano-center2.jpg',
    priceRange: '$30-$50 per hour',
    coursesDuration: ['10days','6 weeks' ,'12 weeks'],
    instrument: 'piano',
    description: 'Classical Keys provides expert piano education from master musicians in a premium environment featuring concert-quality instruments for students at all levels.'
  },
  // violin centers
  {
    id: 'violin-center-1',
    name: 'Violin Virtuosos',
    address: '345 String Boulevard, Concerto Town',
    rating: 4.6,
    image: '/src/assets/images/violin-center1.jpg',
    priceRange: '$40-$60 per hour',
    coursesDuration: ['2 weeks' ,'1 month','3 months'],
    instrument: 'violin',
    description: 'At Violin Virtuosos, our renowned instructors guide students through comprehensive violin mastery using exceptional instruments, personalized curriculum, and performance opportunities designed to elevate musicians from beginners to accomplished performers.'
  },
  {
    id: 'violin-center-2',
    name: 'Stradivarius Studio',
    address: '678 Bow Street, Orchestra City',
    rating: 4.4,
    image: '/src/assets/images/violin-center2.jpg',
    priceRange: '$35-$55 per hour',
    coursesDuration: ['1 month','2 months','6 months'],
    instrument: 'violin',
    description: 'Stradivarius Studio offers transformative violin education through expert instructors, premium instruments, and tailored instruction that nurtures musical growth from first bow to concert performance.'
  },
  // drum centers
  {
    id: 'drums-center-1',
    name: 'Rhythm Nation',
    address: '456 Beat Street, Percussion City',
    rating: 4.7,
    image: '/src/assets/images/drums-center1.jpg',
    priceRange: '$25-$45 per hour',
    coursesDuration: ['2 weeks','1 month','3 months'],
    instrument: 'drums',
    description: 'Rhythm Nation develops percussive talent through expert drum instruction, professional equipment, and personalized coaching that guides students from basic beats to complex rhythmic mastery in a supportive, performance-oriented environment.'
  },
  {
    id: 'drums-center-2',
    name: 'Drumming Dynamics',
    address: '789 Tempo Road, Rhythm Town',
    rating: 4.3,
    image: '/src/assets/images/drums-center2.jpg',
    priceRange: '$20-$40 per hour',
    coursesDuration: ['10days','6 weeks' ,'12 weeks'],
    instrument: 'drums',
    description: 'Drumming Dynamics delivers expert percussion training with premium equipment and personalized instruction that builds rhythmic mastery from foundational beats to performance-ready skills.'
  },
  //flute centers
  {
    id: 'flute-center-1',
    name: 'Flute Fantasia',
    address: '567 Woodwind Way, Melody Valley',
    rating: 4.5,
    image: '/src/assets/images/flute-center1.jpg',
    priceRange: '$30-$50 per hour',
    coursesDuration: ['2 weeks','1 month','3 months'],
    instrument: 'flute',
    description: 'Flute Fantasia cultivates melodic excellence through expert instruction, premium instruments, and personalized coaching that guides students from basic techniques to performance-ready artistry in a supportive musical environment.'
  },
  {
    id: 'flute-center-2',
    name: 'Breezy Notes Studio',
    address: '890 Airy Avenue, Wind City',
    rating: 4.2,
    image: '/src/assets/images/flute-center2.jpg',
    priceRange: '$25-$45 per hour',
    coursesDuration: ['10days','6 weeks' ,'12 weeks'],
    instrument: 'flute',
    description: 'Breezy Notes Studio offers transformative flute education with master instructors, professional instruments, and tailored learning paths that develop breath control, tone production, and technical proficiency from beginner to accomplished performer.'
  },
]

const BookingPage = () => {
  const { centerId } = useParams()
  const [center, setCenter] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      const foundCenter = allCenters.find(c => c.id === centerId)
      setCenter(foundCenter || null)
      setLoading(false)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [centerId])
  
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex justify-center items-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading center details...</p>
        </div>
      </div>
    )
  }
  
  if (!center) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500 text-lg">
            Center not found. The center you're looking for may no longer be available.
          </p>
          <Link to="/" className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Browse All Instruments
          </Link>
        </div>
      </div>
    )
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to={`/centers/${center.instrument}`} className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
        <ChevronLeft className="h-5 w-5 mr-1" />
        Back to Centers
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Center Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="h-64 relative">
              <img 
                src={center.image} 
                alt={center.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h1 className="text-2xl font-bold text-gray-900">{center.name}</h1>
                {/* Replace the Star component with StarRating component */}
                <StarRating rating={center.rating} />
              </div>
              
              <div className="mt-2 flex items-center text-gray-500">
                <MapPin className="h-5 w-5 mr-1" />
                <span>{center.address}</span>
              </div>
              
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">Price Range</h3>
                <p className="text-gray-600">{center.priceRange}</p>
              </div>
              
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">About</h3>
                <p className="text-gray-600">{center.description}</p>
              </div>
              
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">Course Durations</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {center.coursesDuration.map((duration) => (
                    <span 
                      key={duration} 
                      className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                    >
                      {duration}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Booking Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <BookingForm 
            centerId={center.id} 
            centerName={center.name} 
            courseDurations={center.coursesDuration} 
          />
        </motion.div>
      </div>
    </div>
  )
}

export default BookingPage