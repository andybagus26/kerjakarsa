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
    <aside className="hidden md:flex w-64 bg-white rounded-2xl border border-stone-200/80 shadow-xs flex-col h-[calc(100vh-100px)] sticky top-24 ml-6 shrink-0">
      <div className="p-4 border-b border-stone-100 flex items-center gap-3">
        <div className="px-2.5 py-1 rounded-lg bg-teal-100 text-teal-800 font-extrabold text-xs tracking-wide">
          KLIEN
        </div>
        <div>
          <h3 className="text-xs font-bold text-stone-900">Portal Pencari Jasa</h3>
          <p className="text-[10px] text-stone-500 font-medium">Mode Klien Aktif</p>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1.5">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.id}
              href={item.href}
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
