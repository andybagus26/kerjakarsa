'use client'

import { DollarSign, TrendingUp } from 'lucide-react'

export function EarningsWidget() {
  const todayEarnings = 350000
  const dailyTarget = 500000
  const progress = (todayEarnings / dailyTarget) * 100

  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-sm font-medium text-stone-600 mb-2">Pendapatan Hari Ini</h3>
          <p className="text-4xl font-bold text-teal-700">
            Rp {(todayEarnings / 1000).toFixed(0)}K
          </p>
        </div>
        <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center">
          <DollarSign className="w-6 h-6 text-teal-700" />
        </div>
      </div>

      {/* Target Progress */}
      <div className="mb-6 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-stone-600">Target Harian</span>
          <span className="font-medium text-stone-900">
            {progress.toFixed(0)}% · Rp {(dailyTarget / 1000).toFixed(0)}K
          </span>
        </div>
        <div className="w-full h-3 bg-stone-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-500 rounded-full"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>

      {/* Info Text */}
      <p className="text-xs text-stone-600 mb-4">
        {progress < 100
          ? `Targetkan Rp ${((dailyTarget - todayEarnings) / 1000).toFixed(0)}K lagi`
          : 'Target tercapai! Bagus sekali'}
      </p>

      {/* Withdraw Button - Large for Accessibility */}
      <button className="w-full px-4 py-4 border-2 border-teal-700 text-teal-700 font-bold rounded-2xl hover:bg-teal-50 transition-colors text-base min-h-12">
        Tarik Dana
      </button>

      {/* Mini Stats */}
      <div className="mt-4 flex items-center gap-2 text-xs text-stone-600">
        <TrendingUp className="w-4 h-4 text-green-600" />
        <span>+15% dari rata-rata minggu lalu</span>
      </div>
    </div>
  )
}
