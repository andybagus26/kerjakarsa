'use client'

import { useState } from 'react'
import { 
  Search, Sliders, X, MapPin, Star, ShieldCheck, 
  Wallet, Calendar, Clock, ChevronLeft, CheckCircle2,
  QrCode, Copy, Building2
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { WorkerCard } from '@/components/worker-card'
import { FilterSidebar, type FilterState } from '@/components/filter-sidebar'
import { MobileFilterModal } from '@/components/mobile-filter-modal'

interface Worker {
  id: string;
  name: string;
  avatar: string;
  distance: string;
  rating: number;
  reviews: number;
  verified: boolean;
  estimatedWage: string;
  specialty: string;
  location: string;
  about: string;
  skills: string[];
}

const mockWorkers: Worker[] = [
  {
    id: '1',
    name: 'Budi Santoso',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    distance: '2.5 km dari lokasi Anda',
    rating: 4.9,
    reviews: 124,
    verified: true,
    estimatedWage: 'Rp 250.000',
    specialty: 'Tukang Bangunan Berpengalaman',
    location: 'Surabaya Barat',
    about: 'Berpengalaman lebih dari 10 tahun dalam konstruksi rumah tinggal dan renovasi gedung komersial. Mengerjakan dengan rapi, presisi, dan tepat waktu.',
    skills: ['Pemasangan Bata', 'Keramik', 'Pengecatan', 'Baja Ringan']
  },
  {
    id: '2',
    name: 'Siti Rahayu',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    distance: '1.8 km dari lokasi Anda',
    rating: 5.0,
    reviews: 89,
    verified: true,
    estimatedWage: 'Rp 180.000',
    specialty: 'Pembersih Profesional & Perawatan',
    location: 'Gresik Kota',
    about: 'Menyediakan jasa deep cleaning untuk rumah, apartemen, dan kantor. Menggunakan bahan pembersih ramah lingkungan dan alat modern.',
    skills: ['Deep Cleaning', 'Sanitasi', 'Setrika', 'Organisasi Ruangan']
  },
  {
    id: '3',
    name: 'Ahmad Wijaya',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    distance: '3.2 km dari lokasi Anda',
    rating: 4.8,
    reviews: 156,
    verified: true,
    estimatedWage: 'Rp 320.000',
    specialty: 'Teknisi Listrik Terlisensi',
    location: 'Surabaya Timur',
    about: 'Teknisi listrik tersertifikasi. Mampu menangani instalasi baru, perbaikan korsleting, hingga perakitan panel listrik pintar untuk smart home.',
    skills: ['Instalasi Kabel', 'Troubleshooting', 'Panel Listrik', 'Smart Home']
  }
]

// Siklus State: 'closed' -> 'detail' -> 'checkout' -> 'payment' -> 'success'
type ModalView = 'detail' | 'checkout' | 'payment' | 'success' | 'closed';
type PaymentMethod = 'qris' | 'va-bca' | 'va-mandiri';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('Tukang Bangunan')
  const [showMobileFilter, setShowMobileFilter] = useState(false)
  const [filters, setFilters] = useState<FilterState>({
    radius: 10,
    minPrice: 50000,
    maxPrice: 500000,
    activeNow: false,
  })

  // State Modal & Pemesanan
  const [selectedWorker, setSelectedWorker] = useState<Worker | null>(null)
  const [modalView, setModalView] = useState<ModalView>('closed')
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('qris')
  const [orderId, setOrderId] = useState('')

  const handleFiltersChange = (newFilters: FilterState) => setFilters(newFilters)

  const openWorkerDetail = (worker: Worker) => {
    setSelectedWorker(worker)
    setModalView('detail')
  }

  const proceedToPayment = () => {
    // Generate dummy order ID layaknya sistem produksi
    setOrderId(`KRJ-${Math.floor(Math.random() * 90000) + 10000}`)
    setModalView('payment')
  }

  const handleCopyVA = () => {
    // Simulasi copy clipboard
    alert('Nomor Virtual Account disalin!')
  }

  const closeModal = () => {
    setModalView('closed')
    setTimeout(() => {
      setSelectedWorker(null)
      setPaymentMethod('qris') // Reset
    }, 300)
  }

  return (
    <main className="bg-stone-50 min-h-screen relative">
      <Navbar />

      {/* --- MOBILE SEARCH BAR --- */}
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
          >
            <Sliders className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* --- DESKTOP LAYOUT --- */}
      <div className="hidden md:grid md:grid-cols-[16rem_1fr] gap-6 p-8 max-w-7xl mx-auto">
        <div className="sticky top-24 h-fit">
          <FilterSidebar onFiltersChange={handleFiltersChange} />
        </div>

        <div className="space-y-6">
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

          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-stone-900">Hasil untuk &quot;{searchQuery}&quot;</h2>
            <p className="text-sm text-stone-600">{mockWorkers.length} pekerja tersedia</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockWorkers.map((worker) => (
              <div 
                key={worker.id} 
                onClick={() => openWorkerDetail(worker)}
                className="cursor-pointer transition-transform hover:scale-[1.02] active:scale-95"
              >
                <WorkerCard {...worker} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- MOBILE LAYOUT --- */}
      <div className="md:hidden p-4 pb-12">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-stone-900 mb-1">Hasil untuk &quot;{searchQuery}&quot;</h2>
          <p className="text-sm text-stone-600">{mockWorkers.length} pekerja tersedia</p>
        </div>

        <div className="space-y-4">
          {mockWorkers.map((worker) => (
            <div 
              key={worker.id} 
              onClick={() => openWorkerDetail(worker)}
              className="cursor-pointer active:scale-95 transition-transform"
            >
              <WorkerCard {...worker} />
            </div>
          ))}
        </div>
      </div>

      <MobileFilterModal
        isOpen={showMobileFilter}
        onClose={() => setShowMobileFilter(false)}
        onApply={handleFiltersChange}
      />

      {/* === MODAL / BOTTOM SHEET OVERLAY === */}
      {modalView !== 'closed' && selectedWorker && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-stone-900/40 backdrop-blur-sm p-0 md:p-4 transition-all">
          
          {/* Modal Container */}
          <div className="bg-white w-full md:w-[500px] h-[85vh] md:h-auto md:max-h-[90vh] rounded-t-3xl md:rounded-3xl flex flex-col overflow-hidden shadow-2xl animate-in slide-in-from-bottom-8 md:slide-in-from-bottom-0 md:zoom-in-95 fade-in duration-300">
            
            {/* Header Modal Dinamis */}
            <div className="flex items-center justify-between p-4 border-b border-stone-100 bg-white z-10 sticky top-0">
              {modalView === 'detail' && <h3 className="font-bold text-lg text-stone-900">Detail Jasa</h3>}
              
              {modalView === 'checkout' && (
                <div className="flex items-center gap-2">
                  <button onClick={() => setModalView('detail')} className="p-1 hover:bg-stone-100 rounded-full transition-colors">
                    <ChevronLeft className="w-6 h-6 text-stone-600" />
                  </button>
                  <h3 className="font-bold text-lg text-stone-900">Form Pesanan</h3>
                </div>
              )}

              {modalView === 'payment' && (
                <div className="flex items-center gap-2">
                  <button onClick={() => setModalView('checkout')} className="p-1 hover:bg-stone-100 rounded-full transition-colors">
                    <ChevronLeft className="w-6 h-6 text-stone-600" />
                  </button>
                  <h3 className="font-bold text-lg text-stone-900">Pembayaran (Midtrans)</h3>
                </div>
              )}
              
              {modalView === 'success' && <h3 className="font-bold text-lg text-stone-900 mx-auto">Pesanan Berhasil</h3>}
              
              {modalView !== 'success' && (
                <button onClick={closeModal} className="p-2 bg-stone-100 hover:bg-stone-200 text-stone-500 rounded-full transition-colors">
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Area Konten Scrollable */}
            <div className="flex-1 overflow-y-auto bg-stone-50">
              
              {/* --- TAHAP 1: DETAIL PEKERJA --- */}
              {modalView === 'detail' && (
                <div className="flex flex-col">
                  <div className="bg-white p-6 border-b border-stone-200">
                    <div className="flex gap-4 items-start">
                      <img 
                        src={selectedWorker.avatar} 
                        alt={selectedWorker.name} 
                        className="w-20 h-20 rounded-2xl object-cover shadow-sm border border-stone-100"
                      />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h2 className="text-xl font-bold text-stone-900">{selectedWorker.name}</h2>
                          {selectedWorker.verified && <ShieldCheck className="w-5 h-5 text-teal-600" />}
                        </div>
                        <p className="text-teal-700 font-medium text-sm mb-2">{selectedWorker.specialty}</p>
                        <div className="flex items-center gap-4 text-sm text-stone-600">
                          <span className="flex items-center gap-1 font-semibold text-stone-800">
                            <Star className="w-4 h-4 fill-amber-500 text-amber-500" /> {selectedWorker.rating} 
                            <span className="text-stone-500 font-normal">({selectedWorker.reviews})</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-6">
                    <section>
                      <h4 className="font-bold text-stone-900 mb-2">Tentang Pekerja</h4>
                      <p className="text-stone-600 text-sm leading-relaxed">{selectedWorker.about}</p>
                    </section>
                    <section>
                      <h4 className="font-bold text-stone-900 mb-3">Area & Upah Dasar</h4>
                      <div className="flex flex-col gap-3 bg-white p-4 rounded-2xl border border-stone-200">
                        <div className="flex items-center gap-3 text-sm text-stone-700">
                          <div className="p-2 bg-stone-100 rounded-lg"><MapPin className="w-4 h-4 text-stone-500" /></div>
                          <span>Berbasis di <span className="font-semibold">{selectedWorker.location}</span></span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-stone-700">
                          <div className="p-2 bg-teal-50 rounded-lg"><Wallet className="w-4 h-4 text-teal-700" /></div>
                          <span>Estimasi Upah <span className="font-bold text-teal-700">{selectedWorker.estimatedWage}</span> / hari</span>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              )}

              {/* --- TAHAP 2: FORM CHECKOUT --- */}
              {modalView === 'checkout' && (
                <div className="p-6 space-y-6">
                  <div className="bg-teal-700 text-white p-4 rounded-2xl flex items-center justify-between shadow-md">
                    <div>
                      <p className="text-teal-100 text-xs mb-1">Menyewa Jasa</p>
                      <p className="font-bold">{selectedWorker.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-teal-100 text-xs mb-1">Total Tagihan</p>
                      <p className="font-bold">{selectedWorker.estimatedWage}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-stone-900 mb-1.5">Waktu Pengerjaan</label>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                          <input type="date" className="w-full pl-9 pr-3 py-2.5 bg-white border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-teal-700 outline-none" />
                        </div>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                          <input type="time" className="w-full pl-9 pr-3 py-2.5 bg-white border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-teal-700 outline-none" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-stone-900 mb-1.5">Alamat Lokasi Kerja</label>
                      <textarea rows={2} placeholder="Contoh: Jl. Diponegoro No. 10..." className="w-full p-3 bg-white border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-teal-700 outline-none resize-none" />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-stone-900 mb-1.5">Catatan (Opsional)</label>
                      <textarea rows={2} placeholder="Deskripsikan tugas..." className="w-full p-3 bg-white border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-teal-700 outline-none resize-none" />
                    </div>
                  </div>
                </div>
              )}

              {/* --- TAHAP 3: UI PAYMENT (MIDTRANS SNAP SIMULATION) --- */}
              {modalView === 'payment' && (
                <div className="p-6 space-y-6">
                  {/* Total Bill Box */}
                  <div className="bg-white p-5 rounded-2xl border border-stone-200 text-center shadow-sm">
                    <p className="text-sm text-stone-500 mb-1">Total Pembayaran</p>
                    <p className="text-3xl font-bold text-stone-900">{selectedWorker.estimatedWage}</p>
                    <p className="text-xs font-mono text-stone-400 mt-2">Order ID: {orderId}</p>
                  </div>

                  {/* Payment Options */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-stone-900 text-sm mb-4">Pilih Metode Pembayaran</h4>
                    
                    {/* QRIS */}
                    <label className={`block border rounded-2xl p-4 cursor-pointer transition-all ${paymentMethod === 'qris' ? 'border-teal-700 bg-teal-50/50 ring-1 ring-teal-700' : 'border-stone-200 bg-white hover:border-teal-300'}`}>
                      <div className="flex items-center gap-3">
                        <input type="radio" checked={paymentMethod === 'qris'} onChange={() => setPaymentMethod('qris')} className="text-teal-700 focus:ring-teal-700 w-4 h-4" />
                        <QrCode className="w-6 h-6 text-pink-600" />
                        <div className="flex-1">
                          <p className="font-bold text-stone-900 text-sm">QRIS (Bayar Instan)</p>
                          <p className="text-xs text-stone-500">Gopay, OVO, DANA, ShopeePay</p>
                        </div>
                      </div>
                      
                      {paymentMethod === 'qris' && (
                        <div className="mt-4 pt-4 border-t border-stone-200/60 flex flex-col items-center animate-in fade-in zoom-in-95 duration-200">
                          <div className="w-48 h-48 bg-white rounded-xl flex items-center justify-center border-2 border-dashed border-stone-300 shadow-inner">
                            <QrCode className="w-32 h-32 text-stone-300" />
                          </div>
                          <p className="text-xs text-stone-500 mt-3 text-center px-4">
                            Scan QR Code ini menggunakan aplikasi e-Wallet atau Mobile Banking Anda.
                          </p>
                        </div>
                      )}
                    </label>

                    {/* VA BCA */}
                    <label className={`block border rounded-2xl p-4 cursor-pointer transition-all ${paymentMethod === 'va-bca' ? 'border-teal-700 bg-teal-50/50 ring-1 ring-teal-700' : 'border-stone-200 bg-white hover:border-teal-300'}`}>
                      <div className="flex items-center gap-3">
                        <input type="radio" checked={paymentMethod === 'va-bca'} onChange={() => setPaymentMethod('va-bca')} className="text-teal-700 focus:ring-teal-700 w-4 h-4" />
                        <Building2 className="w-6 h-6 text-blue-800" />
                        <div className="flex-1">
                          <p className="font-bold text-stone-900 text-sm">BCA Virtual Account</p>
                          <p className="text-xs text-stone-500">Konfirmasi otomatis</p>
                        </div>
                      </div>

                      {paymentMethod === 'va-bca' && (
                        <div className="mt-4 pt-4 border-t border-stone-200/60 flex items-center justify-between animate-in fade-in duration-200">
                          <div>
                            <p className="text-xs text-stone-500 mb-1">Nomor Virtual Account</p>
                            <p className="font-mono font-bold text-lg text-stone-900 tracking-wider">7001 2345 6789</p>
                          </div>
                          <button onClick={handleCopyVA} className="p-2.5 bg-white border border-stone-200 hover:bg-stone-50 rounded-xl transition-colors text-stone-600 shadow-sm">
                            <Copy className="w-5 h-5" />
                          </button>
                        </div>
                      )}
                    </label>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-xs text-stone-500 mt-8 mb-4">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Pembayaran dienkripsi aman oleh <strong>Midtrans</strong></span>
                  </div>
                </div>
              )}

              {/* --- TAHAP 4: SUCCESS STATE --- */}
              {modalView === 'success' && (
                <div className="flex flex-col items-center justify-center p-8 h-full min-h-[50vh] text-center animate-in zoom-in-95 duration-300">
                  <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-teal-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-2">Pembayaran Diterima!</h3>
                  <p className="text-stone-600 text-sm mb-8">
                    Dana Anda diamankan dalam sistem <strong>Escrow</strong>. Menunggu <strong>{selectedWorker.name}</strong> untuk tiba di lokasi.
                  </p>
                  <button onClick={closeModal} className="w-full py-3.5 bg-stone-900 text-white rounded-2xl font-bold hover:bg-stone-800 transition-colors">
                    Kembali ke Pencarian
                  </button>
                </div>
              )}
            </div>

            {/* --- BOTTOM FIXED ACTION BAR --- */}
            {modalView !== 'success' && (
              <div className="p-4 bg-white border-t border-stone-200 sticky bottom-0">
                {modalView === 'detail' && (
                  <button onClick={() => setModalView('checkout')} className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl font-bold shadow-sm transition-colors">
                    Pesan Jasa Ini
                  </button>
                )}
                {modalView === 'checkout' && (
                  <button onClick={proceedToPayment} className="w-full py-3.5 bg-teal-700 hover:bg-teal-800 text-white rounded-2xl font-bold shadow-sm transition-colors flex items-center justify-center gap-2">
                    Lanjut ke Pembayaran
                  </button>
                )}
                {modalView === 'payment' && (
                  <button onClick={() => setModalView('success')} className="w-full py-3.5 bg-teal-700 hover:bg-teal-800 text-white rounded-2xl font-bold shadow-sm transition-colors flex items-center justify-center gap-2">
                    <Wallet className="w-5 h-5" /> Simulasikan Bayar Selesai
                  </button>
                )}
              </div>
            )}
            
          </div>
        </div>
      )}
    </main>
  )
}