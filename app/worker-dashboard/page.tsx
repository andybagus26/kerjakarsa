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
