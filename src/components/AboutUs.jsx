import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom' // Added this import

const AboutUs = () => {
  const [currentMusicianIndex, setCurrentMusicianIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  
  const musicians = [
    {
      name: "Sarah Johnson",
      instrument: "Piano",
      experience: "15 years",
      description: "Classical pianist with a Master's degree from Juilliard. Sarah specializes in Romantic era compositions and has performed with several symphony orchestras."
    },
    {
      name: "Michael Rodriguez",
      instrument: "Guitar",
      experience: "12 years",
      description: "Versatile guitarist proficient in classical, jazz, and rock styles. Michael has toured internationally and released three solo albums."
    },
    {
      name: "Emily Chen",
      instrument: "Violin",
      experience: "20 years",
      description: "Concert violinist with extensive orchestral experience. Emily is passionate about chamber music and bringing classical repertoire to new audiences."
    },
    {
      name: "David Williams",
      instrument: "Drums",
      experience: "10 years",
      description: "Drummer with expertise in multiple genres including jazz, funk, and rock. David has performed with top artists and teaches advanced rhythm techniques."
    },
    {
      name: "Natalie Patel",
      instrument: "Flute",
      experience: "18 years",
      description: "Accomplished flutist with a background in both classical and contemporary music. Natalie has performed with chamber ensembles across Europe and specializes in baroque flute techniques."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Bangalore",
      rating: 5,
      text: "Learning piano at MusicMasters has been a transformative experience. My instructor is patient, knowledgeable, and adapts lessons to my personal goals. I've made tremendous progress in just 6 months!",
      image: "/src/assets/images/testimonial1.jpg",
      status: "Piano Student"
    },
    {
      name: "Rajesh Kumar",
      location: "Chennai",
      rating: 4,
      text: "Our daughter has been taking violin lessons for a year now. The instructors make learning fun and engaging. She looks forward to her lessons every week and has developed remarkable skills for her age.",
      image: "/src/assets/images/testimonial2.jpg",
      status: "Parent of Violin Student"
    },
    {
      name: "Ananya Patel",
      location: "Mumbai",
      rating: 5,
      text: "The guitar program at MusicMasters is excellent. The facilities are top-notch and the instructors are professional musicians themselves. I've gone from beginner to performing at local venues in just 18 months!",
      image: "/src/assets/images/testimonial3.jpg",
      status: "Guitar Student"
    },
    {
      name: "Vikram Singh",
      location: "Delhi",
      rating: 5,
      text: "As a senior student returning to music after decades, I was worried about finding the right fit. MusicMasters has been welcoming and supportive. My saxophone playing has improved tremendously, and I've even joined their adult ensemble.",
      image: "/src/assets/images/testimonial4.jpg",
      status: "Saxophone Student"
    }
  ];

  // Auto-scroll functionality for testimonials
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(testimonialInterval);
  }, [currentTestimonialIndex]);

  // Auto-scroll functionality for musicians - added to match testimonials
  useEffect(() => {
    const musicianInterval = setInterval(() => {
      nextMusician();
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(musicianInterval);
  }, [currentMusicianIndex]);

  const nextMusician = () => {
    setCurrentMusicianIndex((prevIndex) => 
      prevIndex === musicians.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevMusician = () => {
    setCurrentMusicianIndex((prevIndex) => 
      prevIndex === 0 ? musicians.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Calculate display indices for testimonials (for 3-card carousel)
  const getVisibleTestimonials = () => {
    const totalItems = testimonials.length;
    const indices = [];
    
    // Current item
    indices.push(currentTestimonialIndex);
    
    // Next item (or wrap to beginning)
    const nextIndex = (currentTestimonialIndex + 1) % totalItems;
    indices.push(nextIndex);
    
    // Next + 1 item (or wrap)
    const nextNextIndex = (currentTestimonialIndex + 2) % totalItems;
    indices.push(nextNextIndex);
    
    return indices;
  };

  // Calculate display indices for musicians (for 3-card carousel)
  const getVisibleMusicians = () => {
    const totalItems = musicians.length;
    const indices = [];
    
    // Current item
    indices.push(currentMusicianIndex);
    
    // Next item (or wrap to beginning)
    const nextIndex = (currentMusicianIndex + 1) % totalItems;
    indices.push(nextIndex);
    
    // Next + 1 item (or wrap)
    const nextNextIndex = (currentMusicianIndex + 2) % totalItems;
    indices.push(nextNextIndex);
    
    return indices;
  };

  const visibleTestimonialIndices = getVisibleTestimonials();
  const visibleMusicianIndices = getVisibleMusicians();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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

  // Modified function to render star ratings with different fill states
  const renderStars = (index) => {
    const stars = [];
    
    // Create different fill states based on testimonial index
    if (index === 0) {
      // All filled
      for (let i = 1; i <= 5; i++) {
        stars.push(
          <span key={i} className="text-xl text-yellow-400">★</span>
        );
      }
    } else if (index === 1) {
      // One half-filled star
      for (let i = 1; i <= 5; i++) {
        if (i <= 3) {
          stars.push(<span key={i} className="text-xl text-yellow-400">★</span>);
        } else if (i === 4) {
          stars.push(
            <span key={i} className="text-xl relative">
              <span className="absolute text-yellow-400" style={{ clipPath: 'inset(0 50% 0 0)' }}>★</span>
              <span className="text-gray-300">★</span>
            </span>
          );
        } else {
          stars.push(<span key={i} className="text-xl text-gray-300">★</span>);
        }
      }
    } else if (index === 2) {
      // One 3/4 filled star
      for (let i = 1; i <= 5; i++) {
        if (i <= 4) {
          stars.push(<span key={i} className="text-xl text-yellow-400">★</span>);
        } else if (i === 5) {
          stars.push(
            <span key={i} className="text-xl relative">
              <span className="absolute text-yellow-400" style={{ clipPath: 'inset(0 25% 0 0)' }}>★</span>
              <span className="text-gray-300">★</span>
            </span>
          );
        }
      }
    } else {
      // Last one has one unfilled star
      for (let i = 1; i <= 5; i++) {
        if (i <= 4) {
          stars.push(<span key={i} className="text-xl text-yellow-400">★</span>);
        } else {
          stars.push(<span key={i} className="text-xl text-gray-300">★</span>);
        }
      }
    }
    
    return stars;
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-16"
      >
        <motion.section variants={itemVariants} className="text-center">
          <motion.h1 
            className="text-3xl font-bold text-gray-900 mb-6 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Our Journey
          </motion.h1>
          <motion.p className="mt-5 max-w-3xl mx-auto text-xl text-gray-500">
            Founded in 2010, MusicMasters has grown from a small studio with just two instruments to a 
            comprehensive music academy offering training in over 15 instruments. Our journey began with a passion 
            for music education and a commitment to nurturing talent of all ages.
          </motion.p>
        </motion.section>

        {/* Customer Testimonials Section */}
        <motion.section variants={itemVariants} className="py-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            What Our Students Say
          </h2>
          
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
            Discover the experiences of our satisfied students who have explored various musical journeys with us.
          </p>
          
          <div className="relative">
            {/* Left Arrow (Added) */}
            <motion.button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            {/* Right Arrow */}
            <motion.button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
            
            {/* Testimonial Cards Container */}
            <div className="flex overflow-hidden">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentTestimonialIndex * 33.333}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ 
                      opacity: visibleTestimonialIndices.includes(index) ? 1 : 0.5,
                      scale: visibleTestimonialIndices.includes(index) ? 1 : 0.9
                    }}
                    transition={{ duration: 0.5 }}
                    className={`w-full md:w-1/3 flex-shrink-0 px-3`}
                  >
                    <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col">
                      <div className="mb-4">
                        <div className="flex space-x-1">
                          {renderStars(index)}
                        </div>
                      </div>
                      
                      <blockquote className="text-gray-700 flex-grow">
                        <span className="text-4xl text-indigo-200 font-serif leading-none">"</span>
                        {testimonial.text}
                      </blockquote>
                      
                      <div className="mt-4 flex items-center">
                        <div className="flex-shrink-0">
                          <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                            <span className="text-xl text-indigo-500">{testimonial.name.charAt(0)}</span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">{testimonial.name}</div>
                          <div className="text-gray-500 text-sm">{testimonial.location}</div>
                          <div className="text-xs text-indigo-600">{testimonial.status}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentTestimonialIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${currentTestimonialIndex === index ? 'bg-indigo-600' : 'bg-indigo-200'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="relative rounded-2xl overflow-hidden">
          <div className="relative z-10 p-8 md:p-12 bg-gradient-to-r from-indigo-50 to-blue-50">
            {/* Updated heading size to match "What Our Students Say" */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Why Choose MusicMasters?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mt-6">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Instructors</h3>
                <p className="text-gray-600">
                  Our team consists of professional musicians with advanced degrees and performance experience, 
                  ensuring you learn from the best in the industry.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Learning</h3>
                <p className="text-gray-600">
                  We create customized learning plans based on your goals, skill level, and preferred music style, 
                  ensuring efficient progress and enjoyable sessions.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">State-of-the-Art Facilities</h3>
                <p className="text-gray-600">
                  Our studios are equipped with professional-grade instruments and acoustic treatment, providing 
                  an optimal environment for learning and practicing.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Opportunities</h3>
                <p className="text-gray-600">
                  We organize regular recitals, concerts, and collaborations with local venues, giving students 
                  valuable performance experience from early in their musical journey.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Philosophy</h2>
          <div className="prose prose-indigo max-w-3xl mx-auto">
            <p>
              At MusicMasters, we believe that music education is more than just learning notes and techniques. 
              It's about fostering creativity, building confidence, and developing a lifelong relationship with music.
            </p>
            <p>
              Our teaching methodology balances technical proficiency with creative expression, ensuring that 
              students not only master their instruments but also develop their unique musical voice.
            </p>
            <p>
              We embrace students of all ages and abilities, from complete beginners to advanced musicians looking 
              to refine specific skills. Our inclusive approach ensures everyone feels welcome and valued in our community.
            </p>
          </div>
        </motion.section>


        {/* Meet Our Instructors Section - With actual profile photos */}
<motion.section variants={itemVariants} className="py-8">
  <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Meet Our Instructors</h2>
  
  <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
    Learn from our dedicated team of professional musicians with extensive performance and teaching experience.
  </p>
  
  <div className="relative px-8"> {/* Reduced padding from px-10 */}
    {/* Left Arrow */}
    <motion.button
      onClick={prevMusician}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </motion.button>
    
    {/* Right Arrow */}
    <motion.button
      onClick={nextMusician}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </motion.button>
    
    {/* Instructor Cards Container */}
    <div className="flex overflow-hidden py-6"> {/* Reduced vertical padding from py-8 */}
      <div 
        className="flex transition-transform duration-500" 
        style={{ transform: `translateX(-${currentMusicianIndex * 33.333}%)` }}
      >
        {musicians.map((musician, index) => {
          // Get the correct image path for each instructor
          const getInstructorImage = (name) => {
            // Map instructor names to their image files
            const imageMap = {
              'Sarah Johnson': '/src/assets/images/sarah.jpg',
              'Michael Rodriguez': '/src/assets/images/michael.jpg',
              'Emily Chen': '/src/assets/images/emily.jpg',
              'David Williams': '/src/assets/images/david.jpg',
              'Natalie Patel': '/src/assets/images/patel.jpg',
              // Add other instructors and their image paths here
            };
            
            // Return the image path or a fallback if not found
            return imageMap[name] || `/api/placeholder/240/240?text=${index + 1}`;
          };
          
          // Generate URL-friendly ID for instructor
          const getInstructorId = (name) => {
            return name.toLowerCase().replace(/\s+/g, '-');
          };
          
          // Get instructor ID
          const instructorId = getInstructorId(musician.name);
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: visibleMusicianIndices.includes(index) ? 1 : 0.5,
                scale: visibleMusicianIndices.includes(index) ? 1 : 0.9,
                transition: { duration: 0.5 }
              }}
              className="w-full md:w-1/3 flex-shrink-0 px-4" // Reduced horizontal padding from px-8
            >
              <div className="h-full transform-gpu">
                <motion.div 
                  className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col border-t-4 border-indigo-500 mx-1 relative overflow-visible" // Reduced margin from mx-2 to mx-1
                  whileHover={{
                    scale: 1.06, // Reduced scale from 1.08 for less expansion
                    boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex flex-col items-center mb-4">
                    <div className="h-24 w-24 rounded-full overflow-hidden border-2 border-gray-200">
                      {/* Use actual instructor images */}
                      <img
                        src={getInstructorImage(musician.name)}
                        alt={musician.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-gray-900">{musician.name}</h3>
                    <p className="text-indigo-600 font-medium">
                      {musician.instrument} • {musician.experience}
                    </p>
                  </div>
                  
                  <div className="text-gray-700 flex-grow text-center">
                    {musician.description}
                  </div>
                  
                  <div className="mt-4 text-center">
                    <motion.button
                      onClick={() => {
                        window.location.href = `/instructor-booking/${instructorId}`;
                      }}
                      className="mt-2 px-4 py-2 bg-indigo-100 text-indigo-700 font-medium rounded-md hover:bg-indigo-200 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book a Lesson
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </div>




              {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {musicians.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentMusicianIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${currentMusicianIndex === index ? 'bg-indigo-600' : 'bg-indigo-200'}`}
                aria-label={`Go to instructor ${index + 1}`}
              />
            ))}
          </div>
        </motion.section>



        <motion.section 
          variants={itemVariants}
          className="relative overflow-hidden rounded-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-indigo-300 opacity-90"></div>
          <div className="relative z-10 py-12 px-8 md:px-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6 text-center">Join Our Musical Family</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Whether you're looking to learn your first instrument, prepare for conservatory auditions, or simply 
              rediscover the joy of making music, we're here to guide you every step of the way.
            </p>
            {/* Updated button to use Link component like in HomePage.jsx */}
            <Link to="/centers/all">
  <motion.button 
    className="mt-8 px-6 py-3 bg-indigo-500 text-white font-medium rounded-md hover:bg-indigo-600 shadow-md transition duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Start Your Journey
  </motion.button>
</Link>
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}

export default AboutUs