import React, { useEffect } from 'react';
import { Music, Clock, Users, Award, Calendar, BookOpen } from 'lucide-react';

const Services = () => {
  // Handle scrolling to the section when the page loads with a hash
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // Get the element with the ID matching the hash
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      
      // If element exists, scroll to it with a small delay to ensure the page is fully loaded
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg max-w-2xl mx-auto">We offer a wide range of music education services through our partner centers to help you discover and develop your musical talents.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Individual Lessons */}
        <div id="individual-lessons" className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <div className="mb-4 rounded-full bg-indigo-100 p-3">
            <Music className="h-8 w-8 text-indigo-500" />
          </div>
          <h2 className="text-xl font-bold mb-3">Individual Lessons</h2>
          <p className="mb-4">One-on-one instruction tailored to your skill level, goals, and learning pace. Personal attention from experienced instructors.</p>
          <ul className="text-left w-full space-y-2">
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600">•</span>
              <span>Personalized curriculum</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600">•</span>
              <span>Flexible scheduling options</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600">•</span>
              <span>Progress tracking</span>
            </li>
          </ul>
        </div>
        
        {/* Group Classes */}
        <div id="group-classes" className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <div className="mb-4 rounded-full bg-indigo-100 p-3">
            <Users className="h-8 w-8 text-indigo-500" />
          </div>
          <h2 className="text-xl font-bold mb-3">Group Classes</h2>
          <p className="mb-4">Learn alongside others in a collaborative environment. Great for beginners and those who enjoy social learning.</p>
          <ul className="text-left w-full space-y-2">
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600">•</span>
              <span>Affordable pricing</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600">•</span>
              <span>Social learning environment</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600">•</span>
              <span>Ensemble opportunities</span>
            </li>
          </ul>
        </div>
        
        {/* Intensive Workshops */}
        <div id="intensive-workshops" className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <div className="mb-4 rounded-full bg-indigo-100 p-3">
            <Clock className="h-8 w-8 text-indigo-500" />
          </div>
          <h2 className="text-xl font-bold mb-3">Intensive Workshops</h2>
          <p className="mb-4">Short-term, focused programs designed to build specific skills quickly. Perfect for dedicated learners.</p>
          <ul className="text-left w-full space-y-2">
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600">•</span>
              <span>Rapid skill development</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600">•</span>
              <span>Expert instructors</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600">•</span>
              <span>Certificate of completion</span>
            </li>
          </ul>
        </div>
        
        {/* Certification Programs */}
        <div id="certification-programs" className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <div className="mb-4 rounded-full bg-indigo-100 p-3">
            <Award className="h-8 w-8 text-indigo-500" />
          </div>
          <h2 className="text-xl font-bold mb-3">Certification Programs</h2>
          <p className="mb-4">Structured programs with formal assessment and recognized certification upon completion.</p>
          <ul className="text-left w-full space-y-2">
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600">•</span>
              <span>Industry-recognized certifications</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600">•</span>
              <span>Comprehensive curriculum</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600">•</span>
              <span>Performance assessments</span>
            </li>
          </ul>
        </div>
        
        {/* Online Lessons */}
        <div id="online-lessons" className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <div className="mb-4 rounded-full bg-indigo-100 p-3">
            <Calendar className="h-8 w-8 text-indigo-500" />
          </div>
          <h2 className="text-xl font-bold mb-3">Online Lessons</h2>
          <p className="mb-4">Remote learning options that bring quality music education to your home. Convenient and flexible.</p>
          <ul className="text-left w-full space-y-2">
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600">•</span>
              <span>Learn from anywhere</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600">•</span>
              <span>Flexible scheduling</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600">•</span>
              <span>Digital learning materials</span>
            </li>
          </ul>
        </div>
        
        {/* Music Theory Classes */}
        <div id="music-theory" className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <div className="mb-4 rounded-full bg-indigo-100 p-3">
            <BookOpen className="h-8 w-8 text-indigo-500" />
          </div>
          <h2 className="text-xl font-bold mb-3">Music Theory Classes</h2>
          <p className="mb-4">Develop a deeper understanding of music with classes focused on theory, composition, and ear training.</p>
          <ul className="text-left w-full space-y-2">
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600">•</span>
              <span>Composition techniques</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600">•</span>
              <span>Ear training exercises</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-indigo-600">•</span>
              <span>Music analysis</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Add Summer Camps section since it was mentioned in the footer */}
      <div id="summer-camps" className="mt-12 bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
        <div className="mb-4 rounded-full bg-indigo-100 p-3">
          <Calendar className="h-8 w-8 text-indigo-500" />
        </div>
        <h2 className="text-xl font-bold mb-3">Summer Camps</h2>
        <p className="mb-4">Immersive music experiences during summer break. Perfect for children and teens to develop their musical abilities while having fun.</p>
        <ul className="text-left w-full space-y-2">
          <li className="flex items-start">
            <span className="mr-2 text-indigo-600">•</span>
            <span>Week-long programs</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-indigo-600">•</span>
            <span>Ensemble performances</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-indigo-600">•</span>
            <span>Multi-instrument exposure</span>
          </li>
        </ul>
      </div>
      
      <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-indigo-600 text-white w-10 h-10 flex items-center justify-center font-bold text-lg mb-4">1</div>
            <h3 className="text-lg font-semibold mb-2">Browse Instruments</h3>
            <p>Explore our range of musical instruments and find the one you want to learn.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-indigo-600 text-white w-10 h-10 flex items-center justify-center font-bold text-lg mb-4">2</div>
            <h3 className="text-lg font-semibold mb-2">Choose a Center</h3>
            <p>Compare ratings and reviews to find the perfect teaching center for your needs.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-indigo-600 text-white w-10 h-10 flex items-center justify-center font-bold text-lg mb-4">3</div>
            <h3 className="text-lg font-semibold mb-2">Book Your Class</h3>
            <p>Select your preferred schedule and complete the booking process.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;