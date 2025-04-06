import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const InstructorBookingPage = () => {
  const { instructorId } = useParams();
  const navigate = useNavigate();
  const [instructor, setInstructor] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    instrument: '',
    level: 'Beginner',
    preferredDay: '',
    preferredTime: '',
    message: '',
  });
  const [showNotification, setShowNotification] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch instructor data from your API
    // Here we're simulating that with a timeout and hardcoded data
    const timeout = setTimeout(() => {
      const instructorData = {
        'sarah-johnson': {
          id: 'sarah-johnson',
          name: 'Sarah Johnson',
          instrument: 'Piano',
          experience: '15+ Years',
          description: 'Classical pianist with expertise in teaching all skill levels.',
          image: '/src/assets/images/sarah.jpg',
          address: '123 Music Avenue, Suite 101, Harmony City',
          availability: ['Monday', 'Wednesday', 'Friday'],
        },
        'michael-rodriguez': {
          id: 'michael-rodriguez',
          name: 'Michael Rodriguez',
          instrument: 'Guitar',
          experience: '12+ Years',
          description: 'Specializes in rock, jazz and classical guitar techniques.',
          image: '/src/assets/images/michael.jpg',
          address: '456 Melody Street, Studio 5B, Rhythm Town',
          availability: ['Tuesday', 'Thursday', 'Saturday'],
        },
        'emily-chen': {
          id: 'emily-chen',
          name: 'Emily Chen',
          instrument: 'Violin',
          experience: '18+ Years',
          description: 'Trained at Juilliard with experience teaching all ages.',
          image: '/src/assets/images/emily.jpg',
          address: '789 Symphony Road, Building D, String City',
          availability: ['Monday', 'Tuesday', 'Thursday'],
        },
        'david-williams': {
          id: 'david-williams',
          name: 'David Williams',
          instrument: 'Drums',
          experience: '10+ Years',
          description: 'Professional drummer with expertise in various styles.',
          image: '/src/assets/images/david.jpg',
          address: '321 Percussion Plaza, Unit 7, Beat Valley',
          availability: ['Wednesday', 'Friday', 'Saturday'],
        },
        'natalie-patel': {
          id: 'natalie-patel',
          name: 'Natalie Patel',
          instrument: 'flute',
          experience: '14+ Years',
          description: 'Vocal coach trained in multiple genres and techniques.',
          image: '/src/assets/images/patel.jpg',
          address: '555 Aria Lane, Studio 12C, Song Harbor',
          availability: ['Monday', 'Wednesday', 'Saturday'],
        },
      };
      
      setInstructor(instructorData[instructorId]);
      setFormData(prev => ({
        ...prev,
        instrument: instructorData[instructorId]?.instrument || '',
      }));
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timeout);
  }, [instructorId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setShowNotification(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        instrument: instructor?.instrument || '',
        level: 'Beginner',
        preferredDay: '',
        preferredTime: '',
        message: '',
      });
      
      // Hide notification after 5 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    }, 1000);
  };

  const handleGoBack = () => {
    navigate('/'); // You can replace '/' with the specific path you want to go back to
  };

  if (isLoading && !instructor) {
    return (
      <div className="container mx-auto py-24 px-4">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      </div>
    );
  }

  if (!instructor) {
    return (
      <div className="container mx-auto py-24 px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600">Instructor Not Found</h2>
          <p className="mt-4">We couldn't find the instructor you're looking for.</p>
          <button 
            onClick={() => navigate('/')} 
            className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-24 px-4 mb-24">
      {showNotification && (
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-lg"
        >
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm">Thank you for booking! Your request has been sent. We'll contact you shortly to confirm your lesson with {instructor.name}.</p>
            </div>
          </div>
        </motion.div>
      )}

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Instructor Info */}
          <div className="w-full md:w-1/3 mt-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-6 sticky top-32"
            >
              <div className="flex flex-col items-center">
                <div className="h-40 w-40 rounded-full overflow-hidden border-4 border-indigo-100 mb-4">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">{instructor.name}</h1>
                <p className="text-indigo-600 font-medium">{instructor.instrument} • {instructor.experience}</p>
                
                <div className="mt-4 text-gray-700 text-center">
                  <p>{instructor.description}</p>
                </div>
                
                <div className="mt-6 w-full">
                  <h3 className="font-semibold text-gray-900 mb-2">Teaching Location:</h3>
                  <p className="text-gray-700">{instructor.address}</p>
                </div>
                
                <div className="mt-4 w-full">
                  <h3 className="font-semibold text-gray-900 mb-2">Available Days:</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {instructor.availability.map(day => (
                      <span key={day} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                        {day}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Booking Form */}
          <div className="w-full md:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Book a Lesson with {instructor.name}</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="instrument" className="block text-sm font-medium text-gray-700 mb-1">Instrument</label>
                      <input
                        type="text"
                        id="instrument"
                        name="instrument"
                        value={formData.instrument}
                        onChange={handleChange}
                        readOnly
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
                      <select
                        id="level"
                        name="level"
                        value={formData.level}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Professional">Professional</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="preferredDay" className="block text-sm font-medium text-gray-700 mb-1">Preferred Day</label>
                      <select
                        id="preferredDay"
                        name="preferredDay"
                        value={formData.preferredDay}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Select a day</option>
                        {instructor.availability.map(day => (
                          <option key={day} value={day}>{day}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Select a time</option>
                        <option value="Morning (9am-12pm)">Morning (9am-12pm)</option>
                        <option value="Afternoon (12pm-5pm)">Afternoon (12pm-5pm)</option>
                        <option value="Evening (5pm-8pm)">Evening (5pm-8pm)</option>
                      </select>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Tell us about your goals, any previous experience, or specific areas you'd like to focus on..."
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex flex-col md:flex-row gap-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full md:w-auto px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isLoading ? (
                        <>
                          <span className="inline-block animate-spin mr-2">↻</span>
                          Submitting...
                        </>
                      ) : (
                        'Book Your Lesson Now'
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={handleGoBack}
                      className="w-full md:w-auto px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                    >
                      Go Back
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorBookingPage;