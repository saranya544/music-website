import { useState, useEffect } from 'react';
import { Heart, Music, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const [favoriteInstruments, setFavoriteInstruments] = useState([]);
  const [favoriteCenters, setFavoriteCenters] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sample data - replace with your actual data imports
  const allInstruments = [
    {
      id: 'guitar',
      name: 'Guitar',
      image: '/src/assets/images/guitar.jpg',
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
  ];
  

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
    ],
    // Add other instruments' centers as needed
  };

  const loadFavorites = () => {
    try {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
      
      // Get favorite instruments
      const instrumentIds = favorites.instruments || [];
      const instruments = allInstruments.filter(i => instrumentIds.includes(i.id));
      setFavoriteInstruments(instruments);

      // Get favorite centers
      const centerIds = favorites.centers || [];
      const allCenters = Object.values(centersByInstrument).flat();
      const centers = allCenters.filter(c => centerIds.includes(c.id));
      setFavoriteCenters(centers);
    } catch (error) {
      console.error("Error loading favorites:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFavorites();
    window.addEventListener('favoritesUpdated', loadFavorites);
    return () => window.removeEventListener('favoritesUpdated', loadFavorites);
  }, []);

  const removeFavorite = (type, id) => {
    try {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
      
      if (favorites[type]) {
        favorites[type] = favorites[type].filter(itemId => itemId !== id);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        
        if (type === 'instruments') {
          setFavoriteInstruments(prev => prev.filter(i => i.id !== id));
        } else {
          setFavoriteCenters(prev => prev.filter(c => c.id !== id));
        }
        
        window.dispatchEvent(new CustomEvent('favoritesUpdated'));
      }
    } catch (error) {
      console.error("Error removing favorite:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">Your Favorites</h1>
        <p className="text-gray-600">Saved instruments and centers</p>
      </div>

      {favoriteInstruments.length === 0 && favoriteCenters.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <h2 className="text-lg font-semibold mb-2">No favorites yet</h2>
          <Link 
            to="/" 
            className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Browse Instruments
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Instruments Section */}
          {favoriteInstruments.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <Music className="h-5 w-5 text-indigo-600 mr-2" />
                Instruments
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteInstruments.map(instrument => (
                  <div 
                    key={instrument.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden relative hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="h-48 w-full overflow-hidden">
                      <img 
                        src={instrument.image}
                        alt={instrument.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-lg">{instrument.name}</h3>
                      <p className="text-gray-600 mt-2 line-clamp-2">{instrument.description}</p>
                    </div>
                    <button
                      onClick={() => removeFavorite('instruments', instrument.id)}
                      className="absolute top-3 right-3 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
                    >
                      <Heart className="h-5 w-5 text-red-500 fill-current" />
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Centers Section */}
          {favoriteCenters.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <Star className="h-5 w-5 text-indigo-600 mr-2" />
                Centers
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteCenters.map(center => (
                  <div 
                    key={center.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden relative hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="h-48 w-full overflow-hidden">
                      <img 
                        src={center.image}
                        alt={center.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-lg">{center.name}</h3>
                        <div className="flex items-center bg-indigo-100 px-2 py-1 rounded">
                          <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                          <span className="text-sm font-medium">{center.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mt-2 text-sm truncate">
                        {center.address}
                      </p>
                      <p className="text-gray-600 mt-1 text-sm font-medium">
                        {center.priceRange}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFavorite('centers', center.id)}
                      className="absolute top-3 right-3 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition"
                    >
                      <Heart className="h-5 w-5 text-red-500 fill-current" />
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
};

export default Favorites;