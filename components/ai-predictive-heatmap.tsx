'use client'

import { TrendingUp } from 'lucide-react'

export function AIPredictiveHeatmap() {
  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden mb-6">
      {/* Header */}
      <div className="px-6 py-4 border-b border-stone-200 flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-teal-700" />
        <div>
          <h3 className="font-bold text-stone-900">Zona Ramai Pesanan</h3>
          <p className="text-xs text-stone-600">AI memprediksi zona dengan pesanan terbanyak</p>
        </div>
      </div>

      {/* Map Container with Gradient Overlay */}
      <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-stone-100 to-stone-50">
        {/* Map Grid Background */}
        <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d6d3d1" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Heatmap Gradient Circles */}
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-red-500 to-red-400 rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-gradient-to-br from-orange-500 to-red-400 rounded-full opacity-25 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full opacity-15 blur-3xl" />

        {/* Location Markers */}
        <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow-lg" />
          <div className="absolute inset-0 w-4 h-4 bg-red-600 rounded-full animate-ping" />
        </div>

        <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-orange-600 rounded-full border-2 border-white shadow-lg" />
          <div className="absolute inset-0 w-4 h-4 bg-orange-600 rounded-full animate-pulse" />
        </div>

        {/* Info Labels */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-2 rounded-full text-xs font-medium text-stone-900 shadow-sm">
          Pesanan Tinggi
        </div>

        <div className="absolute bottom-4 right-4 text-xs text-stone-600 bg-white/90 backdrop-blur px-3 py-2 rounded-full">
          Update: Baru saja
        </div>
      </div>

      {/* Footer Stats */}
      <div className="px-6 py-4 grid grid-cols-3 gap-4 border-t border-stone-200 bg-stone-50">
        <div className="text-center">
          <p className="text-2xl font-bold text-teal-700">8</p>
          <p className="text-xs text-stone-600 mt-1">Pesanan Aktif</p>
        </div>
        <div className="text-center border-l border-r border-stone-200">
          <p className="text-2xl font-bold text-orange-500">3</p>
          <p className="text-xs text-stone-600 mt-1">Zona Ramai</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-amber-500">+42%</p>
          <p className="text-xs text-stone-600 mt-1">vs Kemarin</p>
        </div>
      </div>
    </div>
  )
}
