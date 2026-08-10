'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="md:hidden sticky top-0 z-50 bg-white border-b border-stone-200 shadow-sm">
        <div className="px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-teal-700">
            KerjaKarsa
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center w-10 h-10 hover:bg-stone-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-stone-700" /> : <Menu className="w-6 h-6 text-stone-700" />}
          </button>
        </div>

        {/* Mobile Menu Items */}
        {isOpen && (
          <div className="border-t border-stone-200 px-4 py-3 space-y-2">
            <Link
              href="/"
              className="block px-4 py-2 text-stone-700 hover:bg-stone-50 rounded-lg transition-colors font-medium"
            >
              Beranda
            </Link>
            <Link
              href="#categories"
              className="block px-4 py-2 text-stone-700 hover:bg-stone-50 rounded-lg transition-colors font-medium"
            >
              Kategori Jasa
            </Link>
            <Link
              href="#how"
              className="block px-4 py-2 text-stone-700 hover:bg-stone-50 rounded-lg transition-colors font-medium"
            >
              Cara Kerja
            </Link>
            <div className="pt-3 border-t border-stone-200 space-y-2">
              <button className="w-full px-4 py-2 text-teal-700 border border-teal-700 rounded-full hover:bg-teal-50 transition-colors font-medium text-sm">
                Masuk
              </button>
              <button className="w-full px-4 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors font-medium text-sm shadow-sm">
                Daftar
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Desktop Navbar */}
      <nav className="hidden md:block sticky top-0 z-50 bg-white border-b border-stone-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-teal-700">
            KerjaKarsa
          </Link>

          {/* Center Links */}
          <div className="flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-stone-700 hover:text-teal-700 transition-colors">
              Beranda
            </Link>
            <Link href="#categories" className="text-sm font-medium text-stone-700 hover:text-teal-700 transition-colors">
              Kategori Jasa
            </Link>
            <Link href="#how" className="text-sm font-medium text-stone-700 hover:text-teal-700 transition-colors">
              Cara Kerja
            </Link>
          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-3">
            <button className="px-5 py-2 text-sm font-medium text-teal-700 border border-teal-700 rounded-full hover:bg-teal-50 transition-colors">
              Masuk
            </button>
            <button className="px-5 py-2 text-sm font-medium text-white bg-amber-500 rounded-full hover:bg-amber-600 transition-colors shadow-sm">
              Daftar
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
