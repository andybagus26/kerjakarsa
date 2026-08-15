'use client'

import { Navbar } from '@/components/navbar'
import { WorkerSidebar } from '@/components/worker-sidebar'
import { WorkerBottomNav } from '@/components/worker-bottom-nav'
import { CheckCircle2, Clock, MapPin, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react'
import Link from 'next/link'

export default function WorkerOrdersPage() {
  const incomingOrders = [
    {
      id: 'ORD-8921',
      clientName: 'Siti Rahmawati',
      service: 'Servis AC & Perbaikan Freon',
      location: 'Tegalsari, Surabaya (2.4 km)',
      price: 'Rp 250.000',
      time: 'Hari Ini, 14:00 WIB',
      status: 'Menunggu Konfirmasi',
      paymentStatus: 'Escrow Terkunci 100%',
    },
    {
      id: 'ORD-8920',
      clientName: 'Budi Kurniawan',
      service: 'Instalasi Stop Kontak & Panel',
      location: 'Gubeng, Surabaya (4.1 km)',
      price: 'Rp 350.000',
      time: 'Besok, 10:00 WIB',
      status: 'Diterima',
      paymentStatus: 'Escrow Terkunci 100%',
    },
  ]

  return (
    <div className="bg-stone-50 min-h-screen">
      <Navbar />

      {/* Desktop Layout */}
      <div className="hidden md:flex pt-20 pb-6">
        <WorkerSidebar />

        <div className="flex-1 px-6 md:px-8 max-w-5xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3">
              <span className="p-2.5 bg-teal-100 text-teal-800 rounded-2xl font-bold text-sm">
                📋
              </span>
              <div>
                <h1 className="text-2xl font-extrabold text-stone-900">Pesanan Masuk</h1>
                <p className="text-sm text-stone-600">Daftar pesanan jasa aktif dari klien di dekat Anda</p>
              </div>
            </div>
          </div>

          {/* Orders List */}
          <div className="space-y-4">
            {incomingOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-2xl border border-stone-200/80 p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-lg">
                      {order.id}
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {order.paymentStatus}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-stone-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {order.time}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-stone-900 text-base">{order.service}</h3>
                    <p className="text-sm font-semibold text-stone-700 mt-0.5">Pemesan: {order.clientName}</p>
                    <p className="text-xs text-stone-500 flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-stone-400" />
                      {order.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-stone-500">Nilai Upah</p>
                    <p className="text-xl font-extrabold text-teal-800">{order.price}</p>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button className="px-4 py-2 border border-stone-300 text-stone-700 rounded-xl text-xs font-bold hover:bg-stone-50 transition-colors flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5" />
                    Hubungi Klien
                  </button>
                  <button className="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-stone-900 rounded-xl text-xs font-bold transition-colors shadow-2xs flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Terima Pekerjaan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden p-4 space-y-4 pb-24">
        <div className="mb-4">
          <h1 className="text-xl font-bold text-stone-900">Pesanan Masuk</h1>
          <p className="text-xs text-stone-600">Daftar pesanan jasa dari klien di sekitar lokasi Anda</p>
        </div>

        {incomingOrders.map((order) => (
          <div key={order.id} className="bg-white rounded-2xl border border-stone-200 p-4 space-y-3 shadow-xs">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">
                {order.id}
              </span>
              <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                {order.paymentStatus}
              </span>
            </div>
            <div>
              <h3 className="font-bold text-stone-900 text-sm">{order.service}</h3>
              <p className="text-xs text-stone-600">Klien: {order.clientName}</p>
              <p className="text-xs text-stone-500 mt-1">{order.location}</p>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-stone-100">
              <span className="text-base font-extrabold text-teal-800">{order.price}</span>
              <button className="px-4 py-2 bg-amber-500 text-stone-900 text-xs font-bold rounded-xl shadow-xs">
                Terima
              </button>
            </div>
          </div>
        ))}
      </div>

      <WorkerBottomNav />
    </div>
  )
}
