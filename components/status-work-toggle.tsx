'use client'

import { useState } from 'react'
import { Check, Bell } from 'lucide-react'

export function StatusWorkToggle() {
  const [isActive, setIsActive] = useState(true)
  const [showToast, setShowToast] = useState(false)

  const handleToggle = () => {
    const nextState = !isActive
    setIsActive(nextState)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2500)
  }

  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6 mb-6 relative overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-stone-900">Status Kerja Mitra</h2>
          <p className="text-sm text-stone-600">
            {isActive ? 'Anda dalam mode Siap Menerima Pesanan Jasa Baru' : 'Anda sedang dalam mode Istirahat (Off)'}
          </p>
        </div>

        {/* Minimal Modern Toggle Switch */}
        <button
          onClick={handleToggle}
          className={`relative inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full p-1 transition-colors duration-300 ease-in-out focus:outline-none shadow-inner ${
            isActive ? 'bg-amber-500' : 'bg-stone-300'
          }`}
          aria-label="Toggle status kerja"
        >
          <span
            className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
              isActive ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
        </button>
      </div>

      {/* Status Indicator & Toast */}
      <div className="mt-4 flex items-center justify-between text-sm font-medium pt-3 border-t border-stone-100">
        <div className="flex items-center gap-2">
          <div
            className={`w-3 h-3 rounded-full ${
              isActive ? 'bg-amber-500 animate-pulse' : 'bg-stone-400'
            }`}
          />
          <span className={isActive ? 'text-amber-700 font-bold' : 'text-stone-600'}>
            {isActive ? 'Aktif • Siap Kerja' : 'Istirahat • Tidak Menerima Pesanan'}
          </span>
        </div>

        {showToast && (
          <div className="flex items-center gap-1.5 text-xs text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200 animate-in fade-in duration-200">
            <Bell className="w-3.5 h-3.5" />
            <span>Status berhasil diperbarui!</span>
          </div>
        )}
      </div>
    </div>
  )
}

