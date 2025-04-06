import { Star } from 'lucide-react'

const StarRating = ({ rating }) => {
  // Convert rating to a number between 0 and 5
  const safeRating = Math.max(0, Math.min(5, Number(rating) || 0))
  
  // Render stars with partial filling
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((position) => {
        // Calculate how filled this star should be (0-1)
        const fillAmount = Math.max(0, Math.min(1, safeRating - (position - 1)))
        
        return (
          <div key={position} className="relative w-4 h-4 mr-0.5">
            {/* Empty star base */}
            <Star
              className="w-4 h-4 text-gray-300 absolute"
              fill="none"
            />
            
            {/* Partially filled star overlay */}
            {fillAmount > 0 && (
              <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${fillAmount * 100}%` }}>
                <Star
                  className="w-4 h-4 text-yellow-500"
                  fill="#f59e0b"
                />
              </div>
            )}
          </div>
        )
      })}
      <span className="ml-1 text-sm text-gray-600">{safeRating.toFixed(1)}</span>
    </div>
  )
}

export default StarRating