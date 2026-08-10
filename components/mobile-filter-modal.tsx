'use client'

import { X } from 'lucide-react'
import { useState } from 'react'

interface MobileFilterModalProps {
  isOpen: boolean
  onClose: () => void
  onApply: (filters: FilterState) => void
}

export interface FilterState {
  radius: number
  minPrice: number
  maxPrice: number
  activeNow: boolean
}

export function MobileFilterModal({ isOpen, onClose, onApply }: MobileFilterModalProps) {
  const [radius, setRadius] = useState(10)
  const [minPrice, setMinPrice] = useState(50000)
  const [maxPrice, setMaxPrice] = useState(500000)
  const [activeNow, setActiveNow] = useState(false)

  const handleApply = () => {
    onApply({ radius, minPrice, maxPrice, activeNow })
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/30"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-stone-200 bg-white rounded-t-3xl">
          <h2 className="text-lg font-bold text-stone-900">Filter</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-stone-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-stone-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Radius Slider */}
          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-3">
              Jarak: <span className="text-teal-700">{radius} km</span>
            </label>
            <input
              type="range"
              min="1"
              max="50"
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              className="w-full h-2 bg-stone-200 rounded-full appearance-none cursor-pointer accent-teal-700"
            />
            <div className="flex justify-between text-xs text-stone-500 mt-2">
              <span>1 km</span>
              <span>50 km</span>
            </div>
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-3">
              Harga Harian
            </label>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-stone-600 mb-1 block">Minimum</label>
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-700"
                />
                <p className="text-xs text-stone-500 mt-1">Rp {minPrice.toLocaleString('id-ID')}</p>
              </div>
              <div>
                <label className="text-xs text-stone-600 mb-1 block">Maximum</label>
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-700"
                />
                <p className="text-xs text-stone-500 mt-1">Rp {maxPrice.toLocaleString('id-ID')}</p>
              </div>
            </div>
          </div>

          {/* Active Now Toggle */}
          <div className="pt-6 border-t border-stone-200">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={activeNow}
                onChange={(e) => setActiveNow(e.target.checked)}
                className="w-5 h-5 rounded-lg border-2 border-stone-300 cursor-pointer accent-teal-700"
              />
              <span className="text-sm font-medium text-stone-700 group-hover:text-teal-700 transition-colors">
                Aktif Sekarang
              </span>
            </label>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 p-6 border-t border-stone-200 bg-white space-y-3">
          <button
            onClick={handleApply}
            className="w-full bg-teal-700 text-white font-semibold rounded-2xl py-3 hover:bg-teal-800 transition-colors shadow-sm"
          >
            Terapkan Filter
          </button>
          <button
            onClick={onClose}
            className="w-full border border-stone-300 text-stone-700 font-semibold rounded-2xl py-3 hover:bg-stone-50 transition-colors"
          >
            Batal
          </button>
        </div>
      </div>
    </>
  )
}
