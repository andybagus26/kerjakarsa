'use client'

import { MapPin, Phone } from 'lucide-react'

export function LiveMapTracking() {
  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
      {/* Map Container */}
      <div className="relative w-full bg-gradient-to-br from-stone-100 to-stone-50 aspect-video flex items-center justify-center overflow-hidden">
        {/* Subtle Map Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-stone-400" />
          </svg>
        </div>

        {/* Marker Pin */}
        <div className="relative z-10">
          <div className="flex flex-col items-center gap-2">
            {/* Pulsing Background Circle */}
            <div className="absolute w-16 h-16 bg-teal-500 rounded-full opacity-20 animate-pulse" />

            {/* Main Marker */}
            <div className="relative">
              <div className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>

              {/* Pulse Ring */}
              <div className="absolute inset-0 w-12 h-12 rounded-full border-2 border-teal-400 animate-pulse" />
            </div>

            {/* Worker Info */}
            <div className="text-center mt-4">
              <p className="text-sm font-semibold text-stone-900">Budi (Pekerja)</p>
              <p className="text-xs text-stone-500">Sedang menuju ke rumah Anda</p>
            </div>
          </div>
        </div>
      </div>

      {/* Info Footer */}
      <div className="p-6 border-t border-stone-200 space-y-4">
        {/* ETA */}
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <MapPin className="w-5 h-5 text-teal-700 mt-1" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-stone-900">Estimasi Waktu Tiba</p>
            <p className="text-xs text-stone-500 mt-1">15 menit lagi</p>
          </div>
        </div>

        {/* Contact */}
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <Phone className="w-5 h-5 text-teal-700 mt-1" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-stone-900">Hubungi Pekerja</p>
            <button className="text-sm text-teal-700 font-medium hover:text-teal-800 transition-colors mt-1">
              +62 812 3456 7890
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
