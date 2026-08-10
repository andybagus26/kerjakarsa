'use client'

import { Home, Package, MessageSquare, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
  { id: 'home', label: 'Beranda', icon: Home, href: '/' },
  { id: 'orders', label: 'Pesanan', icon: Package, href: '/dashboard' },
  { id: 'messages', label: 'Pesan', icon: MessageSquare, href: '#' },
  { id: 'profile', label: 'Profil', icon: User, href: '#' },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-stone-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-around h-16">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = pathname === tab.href
          return (
            <Link
              key={tab.id}
              href={tab.href}
              className={`flex flex-col items-center justify-center gap-1 h-full flex-1 transition-colors ${
                isActive ? 'text-teal-700' : 'text-stone-500 hover:text-stone-700'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{tab.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
