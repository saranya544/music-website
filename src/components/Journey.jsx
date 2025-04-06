// components/Journey.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Journey = () => {
  const instruments = [
    { name: 'Piano', image: '/piano.jpg', path: '/centers/piano' },
    { name: 'Guitar', image: '/guitar.jpg', path: '/centers/guitar' },
    { name: 'Violin', image: '/violin.jpg', path: '/centers/violin' },
    { name: 'Drums', image: '/drums.jpg', path: '/centers/drums' },
    { name: 'Voice', image: '/voice.jpg', path: '/centers/voice' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h1 variants={itemVariants} className="text-4xl font-bold text-indigo-600 mb-4">
            Choose Your Instrument
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-gray-700 max-w-3xl mx-auto">
            Select an instrument to begin your musical journey with us
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {instruments.map((instrument) => (
            <motion.div
              key={instrument.name}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src={instrument.image}
                  alt={`${instrument.name} lessons`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{instrument.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <Link to={instrument.path}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700"
                  >
                    Explore {instrument.name} Lessons
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Journey;