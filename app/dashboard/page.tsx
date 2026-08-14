'use client'

import { Navbar } from '@/components/navbar'
import { BottomNav } from '@/components/bottom-nav'
import { DashboardSidebar } from '@/components/dashboard-sidebar'
import { OrderStatusTracker } from '@/components/order-status-tracker'
import { TaskChecklist } from '@/components/task-checklist'
import { EscrowPaymentWidget } from '@/components/escrow-payment-widget'
import { LiveMapTracking } from '@/components/live-map-tracking'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <Navbar />

      {/* Desktop Layout */}
      <div className="hidden md:flex pt-20 pb-6">
        <DashboardSidebar />

        {/* Main Content Area */}
        <div className="flex-1 px-6 md:px-8 max-w-7xl">
          {/* Role Identity Banner */}
          <div className="mb-6 bg-gradient-to-r from-amber-50 to-amber-100/60 border border-amber-200/80 p-5 rounded-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded-2xl flex items-center justify-center text-stone-900 font-bold shadow-sm">
                👤
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-bold text-stone-900 text-base">Dashboard Pencari Jasa (Klien)</h2>
                  <span className="bg-amber-200 text-amber-900 text-xs font-extrabold px-2.5 py-0.5 rounded-full">KLIEN</span>
                </div>
                <p className="text-xs text-stone-600 mt-0.5">
                  Fokus Fitur Klien: <strong>Rekening Escrow</strong>, <strong>Tracking Pekerja Live</strong>, &amp; <strong>Checklist Tugas</strong>.
                </p>
              </div>
            </div>
            <Link
              href="/worker-dashboard"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-2xl text-xs font-bold transition-all shadow-sm flex-shrink-0"
            >
              <span>Tukar ke Mode Pekerja</span>
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Link
                href="/search"
                className="p-2 hover:bg-stone-100 rounded-lg transition-colors text-stone-700"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-3xl font-bold text-stone-900">Pesanan Aktif</h1>
            </div>
            <p className="text-sm text-stone-600 pl-11">Kelola pesanan Anda secara real-time</p>
          </div>

          {/* 2-Column Layout */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Left Column */}
            <div className="space-y-6">
              <OrderStatusTracker />
              <TaskChecklist />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <EscrowPaymentWidget />
              <LiveMapTracking />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden pb-24 pt-16">
        <div className="px-4 space-y-4">
          {/* Header */}
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-stone-900">Pesanan Aktif</h1>
            <p className="text-sm text-stone-600 mt-1">Kelola pesanan Anda secara real-time</p>
          </div>

          {/* Stacked Cards */}
          <OrderStatusTracker />
          <TaskChecklist />
          <EscrowPaymentWidget />
          <LiveMapTracking />
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  )
}
