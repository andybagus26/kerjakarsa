'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Home, Briefcase, MessageSquare, User } from 'lucide-react'

export function WorkerBottomNav() {
  const [active, setActive] = useState('dashboard')

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, href: '/worker-dashboard' },
    { id: 'orders', label: 'Pesanan', icon: Briefcase, href: '/worker-orders' },
    { id: 'messages', label: 'Pesan', icon: MessageSquare, href: '/worker-messages' },
    { id: 'profile', label: 'Profil', icon: User, href: '/worker-profile' },
  ]

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-stone-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setActive(item.id)}
              className={`flex flex-col items-center justify-center gap-1 py-4 px-4 min-h-20 transition-colors ${
                active === item.id
                  ? 'text-teal-700'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
