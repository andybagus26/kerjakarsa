'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export interface FilterState {
  radius: number
  minPrice: number
  maxPrice: number
  activeNow: boolean
}

interface FilterSidebarProps {
  onFiltersChange: (filters: FilterState) => void
}

export function FilterSidebar({ onFiltersChange }: FilterSidebarProps) {
  const [radius, setRadius] = useState(10)
  const [minPrice, setMinPrice] = useState(50000)
  const [maxPrice, setMaxPrice] = useState(500000)
  const [activeNow, setActiveNow] = useState(false)

  const handleRadiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    setRadius(value)
    onFiltersChange({ radius: value, minPrice, maxPrice, activeNow })
  }

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    setMinPrice(value)
    onFiltersChange({ radius, minPrice: value, maxPrice, activeNow })
  }

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    setMaxPrice(value)
    onFiltersChange({ radius, minPrice, maxPrice: value, activeNow })
  }

  const handleActiveNowChange = () => {
    const newValue = !activeNow
    setActiveNow(newValue)
    onFiltersChange({ radius, minPrice, maxPrice, activeNow: newValue })
  }

  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6">
      <h3 className="text-lg font-bold text-stone-900 mb-6">Filter</h3>

      {/* Radius Slider */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-stone-700 mb-3">
          Jarak: <span className="text-teal-700">{radius} km</span>
        </label>
        <input
          type="range"
          min="1"
          max="50"
          value={radius}
          onChange={handleRadiusChange}
          className="w-full h-2 bg-stone-200 rounded-full appearance-none cursor-pointer accent-teal-700"
        />
        <div className="flex justify-between text-xs text-stone-500 mt-2">
          <span>1 km</span>
          <span>50 km</span>
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-stone-700 mb-3">
          Harga Harian
        </label>
        <div className="space-y-3">
          <div>
            <label className="text-xs text-stone-600 mb-1 block">Minimum</label>
            <input
              type="number"
              value={minPrice}
              onChange={handleMinPriceChange}
              className="w-full px-3 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-700"
            />
            <p className="text-xs text-stone-500 mt-1">Rp {minPrice.toLocaleString('id-ID')}</p>
          </div>
          <div>
            <label className="text-xs text-stone-600 mb-1 block">Maximum</label>
            <input
              type="number"
              value={maxPrice}
              onChange={handleMaxPriceChange}
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
            onChange={handleActiveNowChange}
            className="w-5 h-5 rounded-lg border-2 border-stone-300 cursor-pointer accent-teal-700"
          />
          <span className="text-sm font-medium text-stone-700 group-hover:text-teal-700 transition-colors">
            Aktif Sekarang
          </span>
        </label>
      </div>
    </div>
  )
}

// FIX: Added the missing MobileFilterModal component
export interface MobileFilterModalProps {
  isOpen: boolean
  onClose: () => void
  onApply: (filters: FilterState) => void
}

export function MobileFilterModal({ isOpen, onClose, onApply }: MobileFilterModalProps) {
  const [radius, setRadius] = useState(10)
  const [minPrice, setMinPrice] = useState(50000)
  const [maxPrice, setMaxPrice] = useState(500000)
  const [activeNow, setActiveNow] = useState(false)

  if (!isOpen) return null

  const handleApply = () => {
    onApply({ radius, minPrice, maxPrice, activeNow })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-stone-900/40 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl p-6 shadow-2xl animate-in slide-in-from-bottom-8 sm:zoom-in-95 fade-in duration-200">
        <div className="flex items-center justify-between mb-6 sticky top-0 bg-white z-10 pb-2">
          <h3 className="text-xl font-bold text-stone-900">Filter Pencarian</h3>
          <button 
            onClick={onClose} 
            className="p-2 bg-stone-100 hover:bg-stone-200 text-stone-500 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Radius Slider */}
        <div className="mb-8">
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
        <div className="mb-8">
          <label className="block text-sm font-semibold text-stone-700 mb-3">
            Harga Harian
          </label>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-stone-600 mb-1 block">Minimum</label>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-700"
              />
              <p className="text-xs text-stone-500 mt-1">Rp {minPrice.toLocaleString('id-ID')}</p>
            </div>
            <div>
              <label className="text-xs text-stone-600 mb-1 block">Maximum</label>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-700"
              />
              <p className="text-xs text-stone-500 mt-1">Rp {maxPrice.toLocaleString('id-ID')}</p>
            </div>
          </div>
        </div>

        {/* Active Now Toggle */}
        <div className="pt-6 border-t border-stone-200 mb-8">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={activeNow}
              onChange={() => setActiveNow(!activeNow)}
              className="w-6 h-6 rounded-lg border-2 border-stone-300 cursor-pointer accent-teal-700"
            />
            <span className="text-base font-medium text-stone-700 group-hover:text-teal-700 transition-colors">
              Aktif Sekarang
            </span>
          </label>
        </div>

        {/* Action Button */}
        <button 
          onClick={handleApply}
          className="w-full py-4 bg-teal-700 hover:bg-teal-800 text-white rounded-2xl font-bold shadow-sm transition-colors text-base"
        >
          Terapkan Filter
        </button>
      </div>
    </div>
  )
}