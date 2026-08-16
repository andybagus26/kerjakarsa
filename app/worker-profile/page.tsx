'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { WorkerSidebar } from '@/components/worker-sidebar'
import { WorkerBottomNav } from '@/components/worker-bottom-nav'
import { User, Star, ShieldCheck, MapPin, Edit3, Save, CheckCircle2, Award, Phone, Mail } from 'lucide-react'

export default function WorkerProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState('Budi Santoso')
  const [specialty, setSpecialty] = useState('Spesialis Listrik & Perbaikan AC')
  const [bio, setBio] = useState('Teknisi profesional berpengalaman 8 tahun melayani perbaikan AC split, kulkas, dan instalasi listrik rumah tangga di area Surabaya & sekitarnya.')
  const [savedToast, setSavedToast] = useState(false)

  const handleSave = () => {
    setIsEditing(false)
    setSavedToast(true)
    setTimeout(() => setSavedToast(false), 3000)
  }

  return (
    <div className="bg-stone-50 min-h-screen">
      <Navbar />

      {/* Desktop Layout */}
      <div className="hidden md:flex pt-20 pb-6">
        <WorkerSidebar />

        <div className="flex-1 px-6 md:px-8 max-w-5xl space-y-6">
          {/* Toast Notification */}
          {savedToast && (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-4 rounded-2xl flex items-center justify-between text-xs font-bold shadow-xs">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Profil Mitra Pekerja berhasil diperbarui!
              </span>
            </div>
          )}

          {/* Profile Card Header */}
          <div className="bg-white rounded-3xl border border-stone-200/80 p-6 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 bg-teal-700 text-white rounded-3xl flex items-center justify-center font-extrabold text-2xl shadow-sm shrink-0">
                BS
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-extrabold text-stone-900">{name}</h1>
                  <span className="bg-teal-100 text-teal-800 text-xs font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> VERIFIED MITRA
                  </span>
                </div>
                <p className="text-sm font-semibold text-stone-700 mt-1">{specialty}</p>
                <p className="text-xs text-stone-500 flex items-center gap-1.5 mt-1.5">
                  <MapPin className="w-3.5 h-3.5 text-stone-400" />
                  Surabaya Barat • Terdaftar sejak Jan 2024
                </p>
              </div>
            </div>

            <button
              onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-stone-900 rounded-2xl text-xs font-extrabold transition-all shadow-xs flex items-center gap-2 shrink-0"
            >
              {isEditing ? (
                <>
                  <Save className="w-4 h-4" />
                  Simpan Perubahan
                </>
              ) : (
                <>
                  <Edit3 className="w-4 h-4" />
                  Edit Profil Saya
                </>
              )}
            </button>
          </div>

          {/* Profile Details Form & Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Information (2/3) */}
            <div className="md:col-span-2 bg-white rounded-3xl border border-stone-200/80 p-6 shadow-xs space-y-5">
              <h3 className="font-bold text-stone-900 text-base border-b border-stone-100 pb-3">Informasi Deskripsi Profil</h3>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1.5">Nama Lengkap Mitra</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs font-bold text-stone-900 focus:ring-2 focus:ring-teal-700"
                  />
                ) : (
                  <p className="text-xs font-bold text-stone-900 bg-stone-50 p-3 rounded-xl">{name}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1.5">Judul Spesialisasi Jasa</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs font-bold text-stone-900 focus:ring-2 focus:ring-teal-700"
                  />
                ) : (
                  <p className="text-xs font-bold text-stone-900 bg-stone-50 p-3 rounded-xl">{specialty}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1.5">Bio Ringkasan Pengalaman (AI Generated)</label>
                {isEditing ? (
                  <textarea
                    rows={4}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs font-semibold text-stone-900 focus:ring-2 focus:ring-teal-700"
                  />
                ) : (
                  <p className="text-xs font-medium text-stone-700 bg-stone-50 p-3 rounded-xl leading-relaxed">{bio}</p>
                )}
              </div>

              {/* Tag Keahlian */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-2">Tag Keahlian Utama</label>
                <div className="flex flex-wrap gap-2">
                  {['❄️ Servis AC', '⚡ Perbaikan Listrik', '🔌 Panel Listrik', '🔧 Pompa Air', '📍 Area Surabaya'].map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-teal-50 text-teal-800 rounded-xl text-xs font-bold border border-teal-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Badges Side Column (1/3) */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl border border-stone-200/80 p-6 shadow-xs space-y-4">
                <h3 className="font-bold text-stone-900 text-sm border-b border-stone-100 pb-2">Reputasi &amp; Rating</h3>

                <div className="flex items-center justify-between bg-amber-50/70 p-3.5 rounded-2xl border border-amber-100">
                  <div>
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">Rating Mitra</span>
                    <p className="text-xl font-extrabold text-stone-900 flex items-center gap-1 mt-0.5">
                      <Star className="w-5 h-5 fill-amber-500 text-amber-500" /> 4.98
                    </p>
                  </div>
                  <span className="text-xs text-stone-600 font-bold">128 Ulasan</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between text-stone-600">
                    <span>Tingkat Penyelesaian:</span>
                    <span className="font-bold text-emerald-700">99.2%</span>
                  </div>
                  <div className="flex items-center justify-between text-stone-600">
                    <span>Waktu Respons Rata-rata:</span>
                    <span className="font-bold text-teal-800">~8 Menit</span>
                  </div>
                  <div className="flex items-center justify-between text-stone-600">
                    <span>Status Verifikasi KTP:</span>
                    <span className="font-bold text-emerald-700">Terverifikasi ✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden p-4 space-y-4 pb-24">
        <h1 className="text-xl font-bold text-stone-900">Profil Saya</h1>
        <div className="bg-white p-4 rounded-2xl border border-stone-200 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-teal-700 text-white rounded-2xl flex items-center justify-center font-bold text-lg">
              BS
            </div>
            <div>
              <h3 className="font-bold text-stone-900 text-sm">{name}</h3>
              <p className="text-xs text-stone-600">{specialty}</p>
            </div>
          </div>
          <p className="text-xs text-stone-700 bg-stone-50 p-3 rounded-xl">{bio}</p>
        </div>
      </div>

      <WorkerBottomNav />
    </div>
  )
}
