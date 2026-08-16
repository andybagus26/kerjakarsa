'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { DashboardSidebar } from '@/components/dashboard-sidebar'
import { User, ShieldCheck, MapPin, Edit3, Save, CheckCircle2, Wallet } from 'lucide-react'

export default function ClientProfilePage() {
  const [name, setName] = useState('Pencari Jasa KerjaKarsa')
  const [phone, setPhone] = useState('0812-3456-7890')
  const [email, setEmail] = useState('klien@kerjakarsa.id')
  const [address, setAddress] = useState('Jl. Raya Darmo No. 42, Surabaya Pusat')

  return (
    <div className="bg-stone-50 min-h-screen">
      <Navbar />

      <div className="hidden md:flex pt-20 pb-6">
        <DashboardSidebar />

        <div className="flex-1 px-6 md:px-8 max-w-4xl space-y-6">
          <div className="bg-white rounded-3xl border border-stone-200/80 p-6 shadow-xs flex items-center gap-5">
            <div className="w-20 h-20 bg-amber-500 text-stone-900 rounded-3xl flex items-center justify-center font-extrabold text-2xl shadow-sm">
              PJ
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-extrabold text-stone-900">{name}</h1>
                <span className="bg-amber-100 text-amber-900 text-xs font-extrabold px-2.5 py-0.5 rounded-full">
                  AKUN KLIEN
                </span>
              </div>
              <p className="text-xs text-stone-500 flex items-center gap-1.5 mt-1">
                <MapPin className="w-3.5 h-3.5 text-stone-400" /> {address}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-stone-200/80 p-6 shadow-xs space-y-5">
            <h3 className="font-bold text-stone-900 text-base border-b border-stone-100 pb-3">Informasi Akun Klien</h3>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-bold text-stone-700 mb-1">Nama Lengkap</label>
                <p className="font-bold text-stone-900 bg-stone-50 p-3 rounded-xl">{name}</p>
              </div>
              <div>
                <label className="block font-bold text-stone-700 mb-1">Nomor Telepon</label>
                <p className="font-bold text-stone-900 bg-stone-50 p-3 rounded-xl">{phone}</p>
              </div>
              <div>
                <label className="block font-bold text-stone-700 mb-1">Alamat Email</label>
                <p className="font-bold text-stone-900 bg-stone-50 p-3 rounded-xl">{email}</p>
              </div>
              <div>
                <label className="block font-bold text-stone-700 mb-1">Alamat Utama Pengiriman Jasa</label>
                <p className="font-bold text-stone-900 bg-stone-50 p-3 rounded-xl">{address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
