import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, ChevronDown, ChevronUp } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [activeQuestion, setActiveQuestion] = useState(null)

  // Social media profiles - replace these URLs with your actual social media profile URLs
  const socialLinks = {
    facebook: "https://facebook.com/musicmasters",
    instagram: "https://instagram.com/musicmasters",
    twitter: "https://twitter.com/musicmasters",
    youtube: "https://youtube.com/c/musicmasters" // This URL is correct, the issue might be elsewhere
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    alert('Thank you for your message! We will get back to you soon.')
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  const toggleQuestion = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null)
    } else {
      setActiveQuestion(index)
    }
  }

  const faqData = [
    {
      question: "What services do you offer?",
      answer: "We offer a wide range of music education programs including private lessons, group classes, workshops, and performance opportunities for students of all ages and skill levels."
    },
    {
      question: "Do you offer trial lessons?",
      answer: "Yes, we offer a free 30-minute trial lesson for new students to meet our teachers and get a feel for our teaching style before committing to regular lessons."
    },
    {
      question: "What instruments do you teach?",
      answer: "We teach piano, guitar, violin, drums, voice, flute, saxophone, and many other instruments. Please contact us if you're interested in an instrument not listed here."
    },
    {
      question: "What are your payment options?",
      answer: "We accept cash, credit cards, and online payments. We offer monthly payment plans as well as discounts for quarterly or annual payments."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We require at least 24 hours notice for lesson cancellations. Lessons cancelled with less than 24 hours notice may be charged the full lesson fee."
    }
  ]

  // Function to scroll to contact section
  const scrollToContact = () => {
    document.getElementById('contact-info').scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        {/* Modified heading size for larger screens */}
        <h1 className="text-4xl font-bold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl xl:text-5xl">Contact Us</h1>
        <p className="mt-5 max-w-3xl mx-auto text-xl text-gray-500">
          Have questions about our programs or want to schedule a free trial lesson? Get in touch with us today!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Box - Contact Information (Swapped) */}
        <motion.div
          id="contact-info" // Added ID for scroll target
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
        >
          <div className="p-6 flex-grow">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Our Location</h3>
                  <p className="mt-1 text-gray-600">123 Music Avenue, Hyderabad, Telangana 500032</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <p className="mt-1 text-gray-600">(+91) 123 456 7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-600">info@musicmasters.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                  <div className="mt-1 text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                    <p>Saturday: 10:00 AM - 6:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                  {/* Facebook - Updated with proper link and hover effects */}
                  <a 
                    href={socialLinks.facebook}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-indigo-600 transition-colors duration-300"
                    aria-label="Visit our Facebook page"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  
                  {/* Instagram - Updated with proper link and hover effects */}
                  <a 
                    href={socialLinks.instagram}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-indigo-600 transition-colors duration-300"
                    aria-label="Visit our Instagram page"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  
                  {/* Twitter - Updated with proper link and hover effects */}
                  <a 
                    href={socialLinks.twitter}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-indigo-600 transition-colors duration-300"
                    aria-label="Visit our Twitter page"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  
                  {/* YouTube - Fixed with proper link and hover effects */}
                  <a 
                    href="https://youtube.com/c/musicmasters"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-indigo-600 transition-colors duration-300"
                    aria-label="Visit our YouTube channel"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent event bubbling
                      window.open(socialLinks.youtube, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Box - Contact Form (Swapped) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
        >
          <div className="p-6 flex-grow">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
      
      {/* Map Section with Heading - Added a heading above the map */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Find Us</h2>
          <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
            Visit our music school in the heart of Hyderabad. We're conveniently located and easy to find.
          </p>
        </div>
        
        <div className="overflow-hidden rounded-lg shadow-lg">
          <div className="aspect-w-16 aspect-h-9 w-full">
            <div className="w-full h-64 bg-indigo-100 relative overflow-hidden">
              {/* Using the specific location.jpg image from your assets folder */}
              <img 
                src="/src/assets/images/location.jpg" 
                alt="Map showing our location in Hyderabad" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to our most commonly asked questions. If you can't find what you're looking for, please don't hesitate to contact us.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {activeQuestion === index ? (
                  <ChevronUp className="h-5 w-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-indigo-600" />
                )}
              </button>
              {activeQuestion === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Our team is always ready to help you with any questions or concerns you might have.
          </p>
          <motion.button
            onClick={scrollToContact}
            className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us Today
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact