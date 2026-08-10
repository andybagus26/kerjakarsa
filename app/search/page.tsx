'use client'

import { useState } from 'react'
import { Search, Sliders } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { WorkerCard } from '@/components/worker-card'
import { FilterSidebar, type FilterState } from '@/components/filter-sidebar'
import { MobileFilterModal } from '@/components/mobile-filter-modal'

// Mock data for demonstration
const mockWorkers = [
  {
    id: '1',
    name: 'Budi Santoso',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    distance: '2.5 km dari lokasi Anda',
    rating: 4.9,
    reviews: 124,
    verified: true,
    estimatedWage: 'Rp 250K',
    specialty: 'Tukang Bangunan Berpengalaman',
  },
  {
    id: '2',
    name: 'Siti Rahayu',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    distance: '1.8 km dari lokasi Anda',
    rating: 5.0,
    reviews: 89,
    verified: true,
    estimatedWage: 'Rp 180K',
    specialty: 'Pembersih Profesional & Perawatan',
  },
  {
    id: '3',
    name: 'Ahmad Wijaya',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    distance: '3.2 km dari lokasi Anda',
    rating: 4.8,
    reviews: 156,
    verified: true,
    estimatedWage: 'Rp 320K',
    specialty: 'Teknisi Listrik Terlisensi',
  },
  {
    id: '4',
    name: 'Dewi Kusuma',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    distance: '2.1 km dari lokasi Anda',
    rating: 4.7,
    reviews: 97,
    verified: true,
    estimatedWage: 'Rp 200K',
    specialty: 'Desainer Interior & Dekorasi',
  },
  {
    id: '5',
    name: 'Rudi Hermawan',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    distance: '4.5 km dari lokasi Anda',
    rating: 4.6,
    reviews: 73,
    verified: true,
    estimatedWage: 'Rp 280K',
    specialty: 'Montir Mobil Berpengalaman',
  },
  {
    id: '6',
    name: 'Fitri Handayani',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    distance: '2.8 km dari lokasi Anda',
    rating: 4.9,
    reviews: 142,
    verified: true,
    estimatedWage: 'Rp 220K',
    specialty: 'Jasa Antar & Logistik Cepat',
  },
  {
    id: '7',
    name: 'Yanto Supriyo',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    distance: '1.5 km dari lokasi Anda',
    rating: 4.8,
    reviews: 118,
    verified: true,
    estimatedWage: 'Rp 150K',
    specialty: 'Tukang Ledeng Profesional',
  },
  {
    id: '8',
    name: 'Linda Setiawan',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    distance: '3.0 km dari lokasi Anda',
    rating: 4.7,
    reviews: 85,
    verified: true,
    estimatedWage: 'Rp 190K',
    specialty: 'Kelas Yoga & Fitness Trainer',
  },
  {
    id: '9',
    name: 'Bambang Sutrisno',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    distance: '2.3 km dari lokasi Anda',
    rating: 4.9,
    reviews: 134,
    verified: true,
    estimatedWage: 'Rp 350K',
    specialty: 'Arsitek & Perencana Ruang',
  },
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('Tukang Bangunan')
  const [showMobileFilter, setShowMobileFilter] = useState(false)
  const [filters, setFilters] = useState<FilterState>({
    radius: 10,
    minPrice: 50000,
    maxPrice: 500000,
    activeNow: false,
  })

  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters)
  }

  return (
    <main className="bg-stone-50 min-h-screen">
      <Navbar />

      {/* Mobile Search Bar */}
      <div className="md:hidden sticky top-16 z-30 bg-white border-b border-stone-200 p-4">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari jasa atau tukang..."
              className="w-full pl-10 pr-4 py-2.5 border border-stone-200 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-teal-700 text-sm"
            />
          </div>
          <button
            onClick={() => setShowMobileFilter(true)}
            className="px-3 py-2.5 border border-teal-700 text-teal-700 rounded-full hover:bg-teal-50 transition-colors"
            aria-label="Open filters"
          >
            <Sliders className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-[16rem_1fr] gap-6 p-8 max-w-7xl mx-auto">
        {/* Desktop Sidebar */}
        <div className="sticky top-24 h-fit">
          <FilterSidebar onFiltersChange={handleFiltersChange} />
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Desktop Search Bar & Header */}
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari jasa atau tukang..."
                className="w-full pl-12 pr-6 py-3 border border-stone-200 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-teal-700"
              />
            </div>
          </div>

          {/* Results Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-stone-900">
              Hasil untuk &quot;{searchQuery}&quot;
            </h2>
            <p className="text-sm text-stone-600">{mockWorkers.length} pekerja tersedia</p>
          </div>

          {/* Worker Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockWorkers.map((worker) => (
              <WorkerCard key={worker.id} {...worker} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden p-4 pb-12">
        {/* Mobile Header */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-stone-900 mb-1">
            Hasil untuk &quot;{searchQuery}&quot;
          </h2>
          <p className="text-sm text-stone-600">{mockWorkers.length} pekerja tersedia</p>
        </div>

        {/* Mobile Worker Grid - 1 Column */}
        <div className="space-y-4">
          {mockWorkers.map((worker) => (
            <WorkerCard key={worker.id} {...worker} />
          ))}
        </div>
      </div>

      {/* Mobile Filter Modal */}
      <MobileFilterModal
        isOpen={showMobileFilter}
        onClose={() => setShowMobileFilter(false)}
        onApply={handleFiltersChange}
      />
    </main>
  )
}
