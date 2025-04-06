// src/components/InstrumentCard.jsx
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import FavoriteButton from './FavoriteButton'

const InstrumentCard = ({ instrument }) => {
  const { id, name, image, description } = instrument
  
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
        <FavoriteButton itemId={id} itemType="instruments" />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="mt-1 text-gray-600 text-sm line-clamp-2">{description}</p>
        <Link 
          to={`/centers/${id}`}
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Find Centers
        </Link>
      </div>
    </motion.div>
  )
}

export default InstrumentCard