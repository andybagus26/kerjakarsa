import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { WorkerSidebar } from '@/components/worker-sidebar'
import { WorkerBottomNav } from '@/components/worker-bottom-nav'
import { StatusWorkToggle } from '@/components/status-work-toggle'
import { AIPredictiveHeatmap } from '@/components/ai-predictive-heatmap'
import { EarningsWidget } from '@/components/earnings-widget'
import { SmartProfileGenerator } from '@/components/smart-profile-generator'
import { RecentReviews } from '@/components/recent-reviews'

export const metadata = {
  title: 'Worker Dashboard - KerjaKarsa',
  description: 'Manage your work status, earnings, and client reviews',
}

export default function WorkerDashboard() {
  return (
    <main className="bg-stone-50 min-h-screen pb-24 md:pb-0 md:ml-64">
      {/* Navbar */}
      <Navbar />

      {/* Worker Sidebar (Desktop) */}
      <WorkerSidebar />

      {/* Main Content */}
      <div className="px-4 md:px-8 py-6 md:py-8 max-w-7xl">
        {/* Role Identity Banner */}
        <div className="mb-6 bg-gradient-to-r from-teal-50 to-teal-100/60 border border-teal-200/80 p-5 rounded-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-700 rounded-2xl flex items-center justify-center text-white font-bold shadow-sm">
              🧰
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-stone-900 text-base">Dashboard Mitra Pekerja (Worker)</h2>
                <span className="bg-teal-200 text-teal-900 text-xs font-extrabold px-2.5 py-0.5 rounded-full">WORKER</span>
              </div>
              <p className="text-xs text-stone-600 mt-0.5">
                Fokus Fitur Pekerja: <strong>Toggle Siap Kerja</strong>, <strong>AI Predictive Heatmap</strong>, <strong>Voice Profile</strong>, &amp; <strong>Ringkasan Pendapatan</strong>.
              </p>
            </div>
          </div>
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-stone-900 rounded-2xl text-xs font-bold transition-all shadow-sm flex-shrink-0"
          >
            <span>Tukar ke Mode Klien</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900">
            Dashboard Kerja
          </h1>
          <p className="text-stone-600 mt-2">
            Pantau status kerja, penghasilan, dan ulasan klien Anda
          </p>
        </div>

        {/* Status Work Toggle - Full Width */}
        <StatusWorkToggle />

        {/* AI Predictive Heatmap - Full Width */}
        <AIPredictiveHeatmap />

        {/* Sub-Grid: Earnings, Profile Generator, Reviews (md:grid-cols-3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Earnings Widget */}
          <EarningsWidget />

          {/* Smart Profile Generator */}
          <SmartProfileGenerator />

          {/* Recent Reviews */}
          <RecentReviews />
        </div>
      </div>

      {/* Worker Bottom Navigation (Mobile) */}
      <WorkerBottomNav />
    </main>
  )
}
