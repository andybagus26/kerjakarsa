'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export function PwaBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 md:hidden bg-teal-50 border-b border-teal-200 px-4 py-3 flex items-center justify-between gap-2">
      <p className="text-sm font-medium text-teal-900 flex-1">Instal KerjaKarsa App</p>
      <div className="flex items-center gap-2">
        <button className="text-xs font-semibold bg-teal-700 text-white px-3 py-1.5 rounded-full hover:bg-teal-800 transition-colors whitespace-nowrap shadow-sm">
          Instal
        </button>
        <button
          onClick={() => setIsVisible(false)}
          className="inline-flex items-center justify-center w-7 h-7 text-teal-700 hover:bg-teal-100 rounded-lg transition-colors"
          aria-label="Close banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
