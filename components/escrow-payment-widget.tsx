'use client'

import { Lock } from 'lucide-react'

export function EscrowPaymentWidget() {
  const escrowAmount = 75000
  const formattedAmount = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(escrowAmount)

  return (
    <div className="bg-gradient-to-br from-teal-700 to-teal-800 rounded-3xl border border-teal-600 shadow-md p-6 text-white">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Lock className="w-5 h-5" />
        <h3 className="text-sm font-semibold opacity-90">Dana Aman di Escrow</h3>
      </div>

      {/* Amount Display */}
      <div className="mb-8">
        <p className="text-4xl md:text-5xl font-bold text-white mb-1">{formattedAmount}</p>
        <p className="text-sm text-teal-100">Pembayaran aman sampai pekerjaan selesai</p>
      </div>

      {/* Info Box */}
      <div className="bg-teal-600/50 rounded-2xl p-4 mb-6 backdrop-blur-sm">
        <p className="text-sm text-teal-50">
          Dana Anda disimpan aman. Akan dilepaskan ke pekerja setelah Anda mengkonfirmasi pekerjaan selesai.
        </p>
      </div>

      {/* CTA Button */}
      <button className="w-full bg-amber-500 text-stone-900 font-bold py-4 rounded-2xl hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl text-base sm:text-lg">
        Pekerjaan Selesai & Cairkan Dana
      </button>

      {/* Footer Text */}
      <p className="text-xs text-teal-200 mt-4 text-center">
        Konfirmasi ini tidak bisa dibatalkan setelah ditekan
      </p>
    </div>
  )
}
