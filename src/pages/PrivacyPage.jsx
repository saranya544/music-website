import { useEffect } from 'react'
import PrivacyPolicy from '../components/PrivacyPolicy'

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Privacy Policy | MusicMasters'
  }, [])

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">Privacy Policy</h1>
      <PrivacyPolicy />
    </div>
  )
}

export default PrivacyPage