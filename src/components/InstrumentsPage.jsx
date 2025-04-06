import React from 'react';
import { motion } from 'framer-motion';

// Dummy data for instruments (in a real app, this would come from an API)
const instruments = [
  {
    id: 'guitar',
    name: 'Guitar',
    image: '/src/assets/images/guitar.jpg',
    description: 'Learn to play acoustic or electric guitar with personalized lessons from expert instructors.',
    longDescription: 'The guitar is a string instrument with a rich history spanning centuries. Whether you\'re interested in acoustic or electric, classical or contemporary styles, our expert instructors will guide you through proper technique, music theory, and playing songs you love. Suitable for all ages and skill levels.'
  },
  {
    id: 'piano',
    name: 'Piano',
    image: '/src/assets/images/piano.jpg',
    description: 'Master the piano with comprehensive lessons covering classical, jazz, and contemporary styles.',
    longDescription: 'The piano is a versatile instrument that forms the foundation of music theory and composition. Our piano curriculum covers proper hand positioning, sight-reading, chord progressions, and performance techniques. From beginners learning basic scales to advanced students mastering complex pieces, our instructors provide personalized guidance for your musical journey.'
  },
  {
    id: 'violin',
    name: 'Violin',
    image: '/src/assets/images/violin.jpg',
    description: 'Discover the beauty of violin playing with structured lessons for beginners to advanced players.',
    longDescription: 'The violin is known for its expressive tone and elegant presence in classical music. Our violin lessons focus on proper posture, bow technique, intonation, and music reading skills. Students will progress from basic melodies to advanced repertoire, with opportunities to perform in ensembles and recitals.'
  },
  {
    id: 'drums',
    name: 'Drums',
    image: '/src/assets/images/drums.jpg',
    description: 'Learn rhythm and percussion through our expert drum lessons for all skill levels.',
    longDescription: 'Drums are the heartbeat of any band or ensemble. Our drum instruction covers proper stick technique, reading rhythm notation, coordination exercises, and playing various musical styles. Students will develop timing, groove, and musical expression while learning to play their favorite songs.'
  },
  {
    id: 'flute',
    name: 'Flute',
    image: '/src/assets/images/flute.jpg',
    description: 'Develop your wind instrument skills with professional flute lessons for all ages.',
    longDescription: 'The flute is a beautiful woodwind instrument with a bright, clear tone. Our flute lessons focus on proper breathing techniques, embouchure development, finger coordination, and tonal control. Students progress from simple melodies to advanced repertoire spanning classical, jazz, and world music traditions.'
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const InstrumentsPage = () => {
  // Function to handle navigation back to home page
  const navigateToHome = () => {
    // In a real application, you would use React Router's navigate or history
    // For example with React Router: navigate('/') or history.push('/')
    window.location.href = '/'; // Simple redirection for demo purposes
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Back to Home Button */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button 
          onClick={navigateToHome}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md flex items-center transition-colors duration-300"
        >
          <span className="mr-2">←</span>
          Back to Home
        </button>
      </motion.div>
      
      {/* Header */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Explore Instruments</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the perfect instrument for your musical journey. Each instrument offers unique sounds, techniques, and musical traditions to explore.
        </p>
      </motion.div>
      
      {/* Instruments grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {instruments.map((instrument) => (
          <motion.div
            key={instrument.id}
            variants={itemVariants}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
          >
            <div className="md:w-1/3 h-64 md:h-auto">
              <img 
                src={instrument.image} 
                alt={instrument.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{instrument.name}</h2>
              <p className="text-gray-700 mb-4">{instrument.description}</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-600">{instrument.longDescription}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default InstrumentsPage;