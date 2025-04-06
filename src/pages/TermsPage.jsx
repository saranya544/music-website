import { useEffect } from 'react'
import TermsAndConditions from '../components/TermsAndConditions'

const TermsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Terms and Conditions | MusicMasters'
  }, [])

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">Terms and Conditions</h1>
      <TermsAndConditions />
    </div>
  )
}

export default TermsPage