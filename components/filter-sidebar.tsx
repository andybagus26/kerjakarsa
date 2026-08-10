'use client'

import { useState } from 'react'

interface FilterSidebarProps {
  onFiltersChange: (filters: FilterState) => void
}

export interface FilterState {
  radius: number
  minPrice: number
  maxPrice: number
  activeNow: boolean
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
