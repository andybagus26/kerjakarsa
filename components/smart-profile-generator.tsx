'use client'

import { Mic, ArrowRight } from 'lucide-react'

export function SmartProfileGenerator() {
  return (
    <div className="bg-stone-50 rounded-3xl border-2 border-dashed border-stone-300 p-8 flex flex-col items-center justify-center text-center min-h-64 hover:border-teal-300 hover:bg-teal-50/30 transition-all cursor-pointer group">
      {/* Large Microphone Icon */}
      <div className="mb-6 p-6 bg-white rounded-3xl border border-stone-200 group-hover:border-teal-300 transition-all">
        <Mic className="w-16 h-16 text-teal-700 mx-auto group-hover:scale-110 transition-transform" />
      </div>

      {/* Text Content */}
      <h3 className="text-lg font-bold text-stone-900 mb-2">
        Perbarui Profil dengan Suara
      </h3>
      <p className="text-sm text-stone-600 mb-6 max-w-xs">
        Ceritakan keahlian dan layanan Anda. AI kami akan mengubah suara menjadi profil yang menarik.
      </p>

      {/* CTA Button */}
      <button className="bg-teal-700 text-white font-bold rounded-2xl px-6 py-3 flex items-center gap-2 hover:bg-teal-800 transition-colors text-base min-h-12 group-hover:translate-x-1 transition-transform">
        Mulai Rekam
        <ArrowRight className="w-5 h-5" />
      </button>

      {/* Supporting Text */}
      <p className="text-xs text-stone-500 mt-6">
        Tidak ada biaya • Cepat & mudah • 2-3 menit
      </p>
    </div>
  )
}
