'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Home, Briefcase, MessageSquare, User, LogOut } from 'lucide-react'

export function WorkerSidebar() {
  const [active, setActive] = useState('dashboard')

  const navItems = [
    { id: 'dashboard', label: 'Dashboard Pekerja', icon: Home, href: '/worker-dashboard' },
    { id: 'orders', label: 'Pesanan Masuk', icon: Briefcase, href: '/worker-orders' },
    { id: 'messages', label: 'Pesan Klien', icon: MessageSquare, href: '/worker-messages' },
    { id: 'profile', label: 'Profil Saya', icon: User, href: '/worker-profile' },
  ]

  return (
    <aside className="hidden md:flex w-64 bg-white rounded-2xl border border-stone-200/80 shadow-xs flex-col h-[calc(100vh-100px)] sticky top-24 ml-6 shrink-0">
      <div className="p-4 border-b border-stone-100 flex items-center gap-3">
        <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center text-amber-800 font-bold text-xs">
          WORKER
        </div>
        <div>
          <h3 className="text-xs font-bold text-stone-900">Portal Mitra Pekerja</h3>
          <p className="text-[10px] text-stone-500 font-medium">Mode Pekerja Aktif</p>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1.5">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = active === item.id
          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setActive(item.id)}
              className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-semibold transition-all ${
                isActive
                  ? 'bg-teal-50 text-teal-800 border-l-4 border-teal-700 shadow-2xs'
                  : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
              }`}
            >
              <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-teal-700' : 'text-stone-500'}`} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Logout Button */}
      <div className="p-3 border-t border-stone-100">
        <button className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-stone-600 hover:bg-red-50 hover:text-red-600 transition-all text-xs font-semibold">
          <LogOut className="w-4 h-4 text-stone-400 group-hover:text-red-500" />
          <span>Keluar Sesi</span>
        </button>
      </div>
    </aside>
  )
}
