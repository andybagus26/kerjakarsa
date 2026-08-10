'use client'

import { useState, useEffect } from 'react'
import { X, CheckCircle } from 'lucide-react'

const notifications = [
  { name: 'Budi', action: 'menyelesaikan jasa', location: 'Jakarta Selatan', time: 'baru saja' },
  { name: 'Siti', action: 'menerima proyek', location: 'Bandung', time: '5 menit yang lalu' },
  { name: 'Ahmad', action: 'mendapat rating 5 bintang', location: 'Surabaya', time: '10 menit yang lalu' },
  { name: 'Dewi', action: 'melayani pelanggan baru', location: 'Medan', time: '15 menit yang lalu' },
]

export function SocialProofTicker() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!isVisible) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % notifications.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isVisible])

  if (!isVisible) return null

  const notification = notifications[currentIndex]

  return (
    <div className="fixed bottom-6 left-4 right-4 md:left-6 md:right-6 md:bottom-8 z-40 max-w-sm md:max-w-md">
      <div className="bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/40 overflow-hidden">
        {/* Progress Bar */}
        <div className="h-0.5 bg-stone-200/30">
          <div className="h-full bg-gradient-to-r from-teal-700 to-amber-500" style={{ animation: 'slideRight 5s ease-in-out infinite', width: '100%' }} />
        </div>

        {/* Content */}
        <div className="px-6 py-4 flex items-center gap-3">
          <div className="flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-stone-900 leading-snug">
              <span className="font-semibold">{notification.name}</span>
              {' '}baru saja menyelesaikan jasa di{' '}
              <span className="font-semibold">{notification.location}</span>
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 text-stone-400 hover:text-stone-600 transition-colors p-1"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-1.5 pb-3 px-4">
          {notifications.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`rounded-full transition-all ${
                idx === currentIndex ? 'bg-teal-700 w-2.5 h-2' : 'bg-stone-300 w-1.5 h-1.5'
              }`}
              aria-label={`Go to notification ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideRight {
          0% { width: 0; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  )
}
