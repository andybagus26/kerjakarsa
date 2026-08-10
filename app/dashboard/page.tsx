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
