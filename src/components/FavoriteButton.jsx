import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const FavoriteButton = ({ itemId, itemType }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  useEffect(() => {
    // Check if item is already favorited
    const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
    setIsFavorite(favorites[itemType]?.includes(itemId) || false);
  }, [itemId, itemType]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
    
    if (!favorites[itemType]) {
      favorites[itemType] = [];
    }
    
    if (isFavorite) {
      favorites[itemType] = favorites[itemType].filter(id => id !== itemId);
    } else {
      favorites[itemType].push(itemId);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('favoritesUpdated'));
  };
  
  return (
    <motion.button
      onClick={toggleFavorite}
      whileTap={{ scale: 0.9 }}
      className="p-2 rounded-full focus:outline-none absolute top-2 right-2 bg-white bg-opacity-80"
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <Heart 
        fill={isFavorite ? "#ef4444" : "none"}
        className={`h-6 w-6 ${isFavorite ? 'text-red-500' : 'text-gray-500'}`}
      />
    </motion.button>
  );
};

export default FavoriteButton;