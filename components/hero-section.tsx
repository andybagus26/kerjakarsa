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

          {/* Right Visual - 3D Character Illustration with Informal Job Overlays */}
          <div className="relative w-full max-w-md md:max-w-lg aspect-[976/1024] mx-auto rounded-3xl overflow-hidden shadow-xl border border-stone-200/80 bg-white">
            <Image
              src="/gambarlanding.png"
              alt="Ilustrasi Layanan KerjaKarsa"
              fill
              className="object-contain"
              priority
            />

            {/* Overlay 1: Top-Left Card (Replaces UI/UX Designer -> Teknisi Servis AC) */}
            <div className="absolute top-[20%] left-[23%] bg-white rounded-2xl px-3 py-2 shadow-lg border border-stone-200/90 flex items-center gap-2.5 z-20 min-w-[155px]">
              <div className="w-8 h-8 rounded-xl bg-teal-700 text-white font-extrabold text-xs flex items-center justify-center shadow-xs shrink-0">
                AC
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-extrabold text-stone-900 leading-tight truncate">Teknisi Servis AC</h4>
                <div className="flex items-center gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="fill-amber-500 text-amber-500" />
                  ))}
                  <span className="text-[10px] font-bold text-stone-700 ml-1">5.0</span>
                </div>
              </div>
            </div>

            {/* Overlay 2: Bottom-Left Card (Replaces Web Developer -> Tukang Bangunan) */}
            <div className="absolute top-[38.5%] left-[17%] bg-white rounded-2xl px-3 py-2 shadow-lg border border-stone-200/90 flex items-center gap-2.5 z-20 min-w-[155px]">
              <div className="w-8 h-8 rounded-xl bg-amber-500 text-stone-900 font-extrabold text-xs flex items-center justify-center shadow-xs shrink-0">
                TB
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-extrabold text-stone-900 leading-tight truncate">Tukang Bangunan</h4>
                <div className="flex items-center gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="fill-amber-500 text-amber-500" />
                  ))}
                  <span className="text-[10px] font-bold text-stone-700 ml-1">4.9</span>
                </div>
              </div>
            </div>

            {/* Overlay 3: Right Card (Replaces Content Writer -> Perbaikan Listrik) */}
            <div className="absolute top-[46.5%] right-[3.5%] bg-white rounded-2xl px-3 py-2 shadow-lg border border-stone-200/90 flex items-center gap-2.5 z-20 min-w-[150px]">
              <div className="w-8 h-8 rounded-xl bg-teal-600 text-white font-extrabold text-xs flex items-center justify-center shadow-xs shrink-0">
                PL
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-extrabold text-stone-900 leading-tight truncate">Perbaikan Listrik</h4>
                <div className="flex items-center gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="fill-amber-500 text-amber-500" />
                  ))}
                  <span className="text-[10px] font-bold text-stone-700 ml-1">5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}