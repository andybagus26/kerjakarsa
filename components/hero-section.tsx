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

          {/* Right Visual - 40% Bento Cards */}
          <div className="relative h-96">
            {/* Rating Card - Top Right */}
            <div className="absolute top-0 right-0 bg-white rounded-2xl p-4 shadow-sm border border-stone-200 w-48 z-10">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <span className="text-sm font-bold text-stone-900">5.0</span>
              </div>
              <p className="text-xs text-stone-600">Budi - Tukang Bangunan</p>
            </div>

            {/* Wage Card - Bottom Left */}
            <div className="absolute bottom-0 left-0 bg-white rounded-2xl p-4 shadow-sm border border-stone-200 w-48 z-10">
              <div className="flex items-center gap-2 mb-2">
                <Wallet size={20} className="text-teal-700" />
                <span className="font-bold text-stone-900">Rp 250.000</span>
              </div>
              <p className="text-xs text-stone-600">Upah harian rata-rata</p>
            </div>

            {/* Center Professional UI Canvas */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full relative rounded-3xl shadow-md border border-stone-200 bg-white p-6 flex flex-col justify-between">
                {/* Header Card Badges */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>1,420 Pekerja Online Hari Ini</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-extrabold">
                    AI Verified Profile
                  </div>
                </div>

                {/* Main Featured Worker Profile Banner */}
                <div className="relative z-10 bg-stone-50 rounded-2xl p-4 border border-stone-200 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-teal-700 flex items-center justify-center text-white font-extrabold text-xl shadow-xs shrink-0">
                    BS
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-stone-900 truncate">Budi Santoso</h4>
                      <span className="px-2 py-0.5 rounded bg-teal-100 text-teal-800 text-[10px] font-bold">TERVERIFIKASI</span>
                    </div>
                    <p className="text-xs text-stone-600 font-medium">Spesialis Listrik & Instalasi AC</p>
                    <div className="flex items-center gap-3 mt-1.5 text-[11px] text-stone-600">
                      <span className="flex items-center gap-1 font-semibold text-amber-600">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> 4.98 (128 ulasan)
                      </span>
                      <span>•</span>
                      <span>Jakarta Selatan</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Stats Grid */}
                <div className="relative z-10 grid grid-cols-2 gap-3">
                  <div className="bg-teal-50/70 rounded-xl p-3 border border-teal-100 text-teal-900">
                    <p className="text-[10px] text-teal-700 font-bold uppercase tracking-wider">Sistem Pembayaran</p>
                    <p className="text-xs font-extrabold text-teal-900 flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-teal-600"></span> Escrow Garansi 100%
                    </p>
                  </div>
                  <div className="bg-amber-50/70 rounded-xl p-3 border border-amber-100 text-amber-900">
                    <p className="text-[10px] text-amber-700 font-bold uppercase tracking-wider">Estimasi Tiba</p>
                    <p className="text-xs font-extrabold text-amber-900 mt-0.5">⚡ ~15 Menit di Lokasi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}