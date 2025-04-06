import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const JourneyPage = () => {
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

  // Steps in the musical journey
  const journeySteps = [
    {
      title: "Discover Your Instrument",
      description: "Find the perfect instrument that resonates with your musical interests and aspirations.",
      icon: "🎸"
    },
    {
      title: "Meet Your Instructor",
      description: "Get matched with an expert instructor who understands your learning style and goals.",
      icon: "👨‍🏫"
    },
    {
      title: "Create Your Learning Plan",
      description: "Work with your instructor to develop a personalized curriculum tailored to your skill level.",
      icon: "📝"
    },
    {
      title: "Practice & Progress",
      description: "Build skills through regular practice and track your improvement over time.",
      icon: "📈"
    },
    {
      title: "Perform & Share",
      description: "Showcase your talents through performances and connect with other musicians.",
      icon: "🎭"
    }
  ];
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Home Button */}
      <div className="flex justify-start mb-6">
        <Link to="/">
          <motion.button
            className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">←</span> Back to Home
          </motion.button>
        </Link>
      </div>
      
      {/* Hero section */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Your Musical Journey Starts Here</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Embark on a transformative experience guided by expert instructors who are passionate about helping you achieve your musical dreams.
        </p>
      </motion.div>
      
      {/* Journey steps */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {journeySteps.map((step, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Featured instructors section */}
      <motion.div
        className="bg-gray-50 p-8 rounded-xl mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Featured Instructors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
              <img src="./src/assets/images/sarah.jpg" alt="Sarah Johnson" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold">Sarah Johnson</h3>
            <p className="text-indigo-600 mb-2">Piano Instructor</p>
            <p className="text-gray-600">Classical pianist with over 15 years of teaching experience.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
              <img src="./src/assets/images/david.jpg" alt="David Williams" className="w-full h-full object-cover" /> 
            </div>
            <h3 className="text-xl font-semibold">David Williams</h3>
            <p className="text-indigo-600 mb-2">Drum Instructor</p>
            <p className="text-gray-600">Professional drummer specializing in rock and jazz styles.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
              <img src="./src/assets/images/emily.jpg" alt="Emily Chen" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold">Emily Chen</h3>
            <p className="text-indigo-600 mb-2">Violin Instructor</p>
            <p className="text-gray-600">Concert violinist with a passion for teaching students of all ages.</p>
          </div>
        </div>
      </motion.div>
      
      {/* Call to action */}
      <motion.div
        className="bg-indigo-600 p-10 rounded-xl text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4" style={{ color: 'white' }}>Ready to Begin?</h2>
        <p className="text-xl mb-8 text-indigo-100">
          Choose your instrument and find an instructor in your area today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/instruments">
            <motion.button
              className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-indigo-50 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Instruments
            </motion.button>
          </Link>
          <Link to="/centers/all">
            <motion.button
              className="bg-indigo-800 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Find Centers Near Me
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default JourneyPage;