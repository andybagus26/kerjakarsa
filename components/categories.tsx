'use client'

import { Wrench, Sparkles, Truck, Home, Zap, Palette, Droplet, Lock } from 'lucide-react'

const categories = [
  { icon: Wrench, label: 'Perbaikan' },
  { icon: Sparkles, label: 'Pembersihan' },
  { icon: Truck, label: 'Pengiriman' },
  { icon: Home, label: 'Renovasi' },
  { icon: Zap, label: 'Kelistrikan' },
  { icon: Palette, label: 'Cat & Dekorasi' },
  { icon: Droplet, label: 'Plumbing' },
  { icon: Lock, label: 'Keamanan' },
]

export function Categories() {
  return (
    <section id="categories" className="py-12 md:py-24 bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3">
            Jelajahi Layanan Kami
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Pilih dari berbagai kategori jasa yang tersedia
          </p>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-3 w-max">
            {categories.map((category, idx) => {
              const Icon = category.icon
              return (
                <button
                  key={idx}
                  className="flex flex-col items-center gap-2 p-4 min-w-24 bg-white rounded-2xl border border-stone-200 hover:border-teal-700 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center group-hover:bg-teal-700 transition-colors">
                    <Icon className="w-6 h-6 text-teal-700 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs font-medium text-stone-700 text-center line-clamp-2 group-hover:text-teal-700 transition-colors">
                    {category.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Desktop Bento Grid - 4 Columns */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          {categories.map((category, idx) => {
            const Icon = category.icon
            return (
              <button
                key={idx}
                className="flex flex-col items-center justify-center gap-4 p-8 bg-white border border-stone-200 rounded-2xl hover:border-teal-700 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center group-hover:bg-teal-700 transition-colors">
                  <Icon className="w-8 h-8 text-teal-700 group-hover:text-white transition-colors" />
                </div>
                <span className="text-base font-semibold text-stone-900 group-hover:text-teal-700 transition-colors text-center">
                  {category.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
