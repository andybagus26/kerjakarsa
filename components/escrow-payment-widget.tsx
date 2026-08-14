'use client'

import { useState } from 'react'
import { Lock, CheckCircle2, ShieldCheck, X, ArrowRight, Sparkles } from 'lucide-react'

export function EscrowPaymentWidget() {
  const [isReleased, setIsReleased] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const escrowAmount = 75000
  const formattedAmount = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(escrowAmount)

  const handleReleaseFunds = () => {
    setIsReleased(true)
    setShowModal(true)
  }

  return (
    <>
      <div className={`rounded-3xl border shadow-md p-6 text-white transition-all duration-300 ${
        isReleased 
          ? 'bg-gradient-to-br from-emerald-800 to-teal-900 border-emerald-600' 
          : 'bg-gradient-to-br from-teal-700 to-teal-800 border-teal-600'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {isReleased ? <CheckCircle2 className="w-5 h-5 text-emerald-300" /> : <Lock className="w-5 h-5" />}
            <h3 className="text-sm font-semibold opacity-90">
              {isReleased ? 'Pembayaran Selesai' : 'Dana Aman di Escrow'}
            </h3>
          </div>
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${
            isReleased ? 'bg-emerald-500/30 text-emerald-200 border border-emerald-400/40' : 'bg-teal-600 text-teal-100'
          }`}>
            {isReleased ? 'Telah Dicairkan' : 'Dana Ditahan'}
          </span>
        </div>

        {/* Amount Display */}
        <div className="mb-8">
          <p className="text-4xl md:text-5xl font-bold text-white mb-1">{formattedAmount}</p>
          <p className="text-sm text-teal-100">
            {isReleased 
              ? 'Dana berhasil ditransfer ke saldo Mitra Pekerja (Budi Santoso)' 
              : 'Pembayaran aman sampai pekerjaan selesai'}
          </p>
        </div>

        {/* Info Box */}
        <div className="bg-teal-600/40 rounded-2xl p-4 mb-6 backdrop-blur-sm border border-teal-500/30">
          <p className="text-sm text-teal-50">
            {isReleased 
              ? 'Transaksi selesai! Terima kasih telah menggunakan jasa KerjaKarsa.' 
              : 'Dana Anda disimpan aman. Akan dilepaskan ke pekerja setelah Anda mengkonfirmasi pekerjaan selesai.'}
          </p>
        </div>

        {/* CTA Button */}
        {!isReleased ? (
          <button
            onClick={handleReleaseFunds}
            className="w-full bg-amber-500 hover:bg-amber-600 text-stone-900 font-bold py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl text-base sm:text-lg flex items-center justify-center gap-2"
          >
            <span>Pekerjaan Selesai &amp; Cairkan Dana</span>
            <Sparkles className="w-5 h-5" />
          </button>
        ) : (
          <button
            onClick={() => setShowModal(true)}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-stone-900 font-bold py-3.5 rounded-2xl transition-all shadow-md text-sm flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>Lihat Bukti Pencairan Escrow</span>
          </button>
        )}

        {/* Footer Text */}
        <p className="text-xs text-teal-200 mt-4 text-center">
          {isReleased ? 'Nomor Resi Transaksi: ESC-8849201' : 'Konfirmasi ini tidak bisa dibatalkan setelah ditekan'}
        </p>
      </div>

      {/* === MODAL SUKSES PENCAIRAN ESCROW === */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-md rounded-3xl p-6 shadow-2xl border border-stone-200 text-stone-900 text-center animate-in zoom-in-95 duration-200 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-600 rounded-full hover:bg-stone-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-stone-900 mb-1">Dana Berhasil Dicairkan!</h3>
            <p className="text-xs text-stone-500 mb-6">Sistem Escrow KerjaKarsa</p>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 text-left space-y-2 mb-6 text-sm">
              <div className="flex justify-between">
                <span className="text-stone-500">Jumlah Transfer</span>
                <span className="font-bold text-stone-900">{formattedAmount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Penerima Jasa</span>
                <span className="font-semibold text-teal-700">Budi Santoso (Mitra)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Status</span>
                <span className="font-bold text-emerald-600 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> Berhasil
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-stone-200 text-xs">
                <span className="text-stone-400">ID Transaksi</span>
                <span className="font-mono text-stone-600">TX-ESC-8849201</span>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => setShowModal(false)}
                className="w-full py-3.5 bg-teal-700 hover:bg-teal-800 text-white rounded-2xl font-bold shadow-md transition-colors text-sm flex items-center justify-center gap-2"
              >
                <span>Tutup Bukti Transfer</span>
              </button>
              <button
                onClick={() => {
                  setIsReleased(false)
                  setShowModal(false)
                }}
                className="w-full py-2.5 text-xs text-stone-500 hover:text-stone-700 font-medium"
              >
                Reset Status (Mode Demo)
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

