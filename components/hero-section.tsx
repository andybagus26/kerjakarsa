'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Mic, Star, Wallet } from 'lucide-react'

export function HeroSection() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    } else {
      router.push('/search')
    }
  }

  return (
    <section className="pt-6 md:pt-24 pb-12 md:pb-24 bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Mobile: Stacked Layout */}
        <div className="md:hidden space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight text-balance">
              Temukan Jasa <span className="text-teal-700">Terbaik</span> di Dekat Anda
            </h1>
            <p className="text-lg text-stone-600">
              Hubungkan diri dengan profesional berpengalaman. Mudah, cepat, dan terpercaya.
            </p>
          </div>

          {/* Mobile Voice Search */}
          <form onSubmit={handleSearch} className="space-y-3">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari jasa atau tukang (misal: Servis AC)..."
                className="w-full px-4 py-3 rounded-2xl border border-stone-300 bg-white text-stone-900 font-semibold placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent text-base shadow-2xs"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 hover:bg-amber-100 rounded-lg transition-colors"
                aria-label="Voice search"
              >
                <Mic className="w-5 h-5 text-amber-500" />
              </button>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-amber-500 text-white font-semibold rounded-2xl hover:bg-amber-600 transition-colors shadow-sm"
            >
              Mulai Cari
            </button>
          </form>
        </div>

        {/* Desktop: Split Layout 60/40 */}
        <div className="hidden md:grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content - 60% */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-stone-900 leading-tight text-balance">
                Temukan Jasa <span className="text-teal-700">Terbaik</span> di Dekat Anda
              </h1>
              <p className="text-lg text-stone-600 max-w-lg">
                Hubungkan diri dengan profesional berpengalaman untuk semua kebutuhan Anda. Mudah, cepat, dan terpercaya.
              </p>
            </div>

            {/* Desktop Voice Search */}
            <form onSubmit={handleSearch} className="flex gap-3 pt-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari jasa atau tukang (misal: Servis AC)..."
                  className="w-full px-6 py-4 rounded-full border border-stone-300 bg-white text-stone-900 font-semibold placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent text-base shadow-xs"
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-amber-100 rounded-lg transition-colors"
                  aria-label="Voice search"
                >
                  <Mic className="w-6 h-6 text-amber-500" />
                </button>
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-amber-500 text-white font-semibold rounded-full hover:bg-amber-600 transition-colors shadow-sm whitespace-nowrap"
              >
                Mulai Cari
              </button>
            </form>
          </div>

          {/* Right Visual - Professional Vector SVG Illustration */}
          <div className="relative flex items-center justify-center">
            <img
              src="/hero-illustration.svg"
              alt="KerjaKarsa Ecosystem Illustration"
              className="w-full max-w-lg h-auto drop-shadow-md rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}