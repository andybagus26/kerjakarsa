'use client'

import { useState } from 'react'
import { CheckCircle2, Circle } from 'lucide-react'

export function StatusWorkToggle() {
  const [isActive, setIsActive] = useState(true)

  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6 mb-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-stone-900">Status Kerja</h2>
          <p className="text-sm text-stone-600">
            {isActive ? 'Anda siap menerima pesanan' : 'Anda sedang istirahat'}
          </p>
        </div>

        {/* Large Toggle Switch */}
        <button
          onClick={() => setIsActive(!isActive)}
          className={`relative inline-flex h-16 w-28 items-center rounded-full transition-all ${
            isActive ? 'bg-amber-500' : 'bg-stone-300'
          }`}
          aria-label="Toggle work status"
        >
          <span
            className={`inline-block h-14 w-14 transform rounded-full bg-white shadow-lg transition-transform flex items-center justify-center ${
              isActive ? 'translate-x-1' : '-translate-x-1'
            }`}
          >
            {isActive ? (
              <CheckCircle2 className="w-8 h-8 text-amber-500" />
            ) : (
              <Circle className="w-8 h-8 text-stone-400" />
            )}
          </span>
        </button>
      </div>

      {/* Status Indicator */}
      <div className="mt-4 flex items-center gap-2 text-sm font-medium">
        <div
          className={`w-3 h-3 rounded-full ${
            isActive ? 'bg-amber-500' : 'bg-stone-400'
          }`}
        />
        <span className={isActive ? 'text-amber-600' : 'text-stone-600'}>
          {isActive ? 'Aktif • Siap Kerja' : 'Istirahat'}
        </span>
      </div>
    </div>
  )
}
