// src/components/CenterCard.jsx
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Clock } from 'lucide-react'
import StarRating from './StarRating'
import FavoriteButton from './FavoriteButton'

const CenterCard = ({ center }) => {
  const { id, name, address, rating, image, priceRange, coursesDuration } = center
  
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden relative"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48">
        <img 
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <FavoriteButton itemId={id} itemType="centers" />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <StarRating rating={rating} />
        </div>
        
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{address}</span>
        </div>
        
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-1" />
          <span>{coursesDuration.join(', ')}</span>
        </div>
        
        <div className="mt-2 text-sm text-gray-500">
          <span className="font-medium">Price Range:</span> {priceRange}
        </div>
        
        <Link 
          to={`/booking/${id}`}
          className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-indigo-800 bg-indigo-100 hover:bg-indigo-200 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Book Now
        </Link>
      </div>
    </motion.div>
  )
}

export default CenterCard