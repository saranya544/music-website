import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CentersPage from './pages/CentersPage'
import BookingPage from './pages/BookingPage'
import InstructorBookingPage from './components/InstructorBookingPage'
import AboutUs from './components/AboutUs'
import Favourites from './components/Favourites'
import Services from './components/Services'
import Contact from './components/Contact'
import JourneyPage from './components/JourneyPage'
import InstrumentsPage from './components/InstrumentsPage'
import AllCentersPage from './components/AllCentersPage' // Add this import
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'
import './App.css'

function App() {
  // Scroll to top when navigating to a new page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/journey" element={<JourneyPage />} />
            <Route path="/instruments" element={<InstrumentsPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/centers/:instrument" element={<CentersPage />} />
            <Route path="/centers/all" element={<AllCentersPage />} /> {/* Add the new route */}
            <Route path="/booking/:centerId" element={<BookingPage />} />
            <Route path="/instructor-booking/:instructorId" element={<InstructorBookingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App