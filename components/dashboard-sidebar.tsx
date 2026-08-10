'use client'

import { Home, Package, MessageSquare, User, LogOut } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { id: 'home', label: 'Beranda', icon: Home, href: '/' },
  { id: 'orders', label: 'Pesanan Aktif', icon: Package, href: '/dashboard' },
  { id: 'messages', label: 'Pesan', icon: MessageSquare, href: '#' },
  { id: 'profile', label: 'Profil', icon: User, href: '#' },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden md:flex w-64 bg-white rounded-r-3xl border-r border-stone-200 shadow-sm flex-col h-[calc(100vh-80px)] sticky top-20">
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                isActive
                  ? 'bg-teal-50 text-teal-700 font-semibold'
                  : 'text-stone-700 hover:bg-stone-50'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Logout Button */}
      <div className="px-4 py-4 border-t border-stone-200">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-stone-700 hover:bg-stone-50 transition-all">
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Keluar</span>
        </button>
      </div>
    </aside>
  )
}
