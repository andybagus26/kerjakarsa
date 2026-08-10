'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Home, Briefcase, MessageSquare, User, LogOut } from 'lucide-react'

export function WorkerSidebar() {
  const [active, setActive] = useState('dashboard')

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, href: '/worker-dashboard' },
    { id: 'orders', label: 'Pesanan', icon: Briefcase, href: '/worker-orders' },
    { id: 'messages', label: 'Pesan', icon: MessageSquare, href: '/worker-messages' },
    { id: 'profile', label: 'Profil', icon: User, href: '/worker-profile' },
  ]

  return (
    <aside className="hidden md:flex fixed left-0 top-0 w-64 h-screen flex-col bg-white rounded-r-3xl border-r border-stone-200 shadow-sm pt-20">
      <nav className="flex-1 px-6 py-8 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = active === item.id
          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setActive(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                isActive
                  ? 'bg-teal-50 text-teal-700 font-medium'
                  : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Logout Button */}
      <div className="px-6 py-6 border-t border-stone-200">
        <button className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-2xl transition-all font-medium">
          <LogOut className="w-5 h-5" />
          <span className="text-sm">Keluar</span>
        </button>
      </div>
    </aside>
  )
}
