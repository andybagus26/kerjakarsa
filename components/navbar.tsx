'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Menu, X, User, Briefcase, ShieldCheck, ArrowRight } from 'lucide-react'

export function Navbar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')
  const [role, setRole] = useState<'client' | 'worker'>('client')

  const openAuth = (mode: 'login' | 'register', defaultRole: 'client' | 'worker' = 'client') => {
    setAuthMode(mode)
    setRole(defaultRole)
    setIsAuthOpen(true)
    setIsOpen(false)
  }

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsAuthOpen(false)
    if (role === 'client') {
      router.push('/dashboard')
    } else {
      router.push('/worker-dashboard')
    }
  }

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
              href="/search"
              className="block px-4 py-2 text-stone-700 hover:bg-stone-50 rounded-lg transition-colors font-medium"
            >
              Cari Jasa
            </Link>
            <Link
              href="/dashboard"
              className="block px-4 py-2 text-stone-700 hover:bg-stone-50 rounded-lg transition-colors font-medium"
            >
              Dashboard Klien
            </Link>
            <Link
              href="/worker-dashboard"
              className="block px-4 py-2 text-stone-700 hover:bg-stone-50 rounded-lg transition-colors font-medium"
            >
              Dashboard Worker
            </Link>
            <div className="pt-3 border-t border-stone-200 space-y-2">
              <button
                onClick={() => openAuth('login', 'client')}
                className="w-full px-4 py-2.5 text-teal-700 border border-teal-700 rounded-full hover:bg-teal-50 transition-colors font-semibold text-sm"
              >
                Masuk
              </button>
              <button
                onClick={() => openAuth('register', 'worker')}
                className="w-full px-4 py-2.5 bg-amber-500 text-stone-900 rounded-full hover:bg-amber-600 transition-colors font-semibold text-sm shadow-sm"
              >
                Daftar Mitra Pekerja
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
            <Link href="/search" className="text-sm font-medium text-stone-700 hover:text-teal-700 transition-colors">
              Cari Jasa
            </Link>
            <Link href="/dashboard" className="text-sm font-medium text-stone-700 hover:text-teal-700 transition-colors">
              Dashboard Klien
            </Link>
            <Link href="/worker-dashboard" className="text-sm font-medium text-stone-700 hover:text-teal-700 transition-colors">
              Dashboard Pekerja
            </Link>
          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => openAuth('login', 'client')}
              className="px-4 py-2 text-sm font-semibold text-teal-700 border border-teal-700 rounded-full hover:bg-teal-50 transition-colors flex items-center gap-1.5"
            >
              <User className="w-4 h-4" />
              Masuk
            </button>
            <button
              onClick={() => openAuth('register', 'worker')}
              className="px-4 py-2 text-sm font-semibold text-stone-900 bg-amber-500 rounded-full hover:bg-amber-600 transition-colors shadow-sm flex items-center gap-1.5"
            >
              <Briefcase className="w-4 h-4" />
              Daftar Mitra
            </button>
          </div>
        </div>
      </nav>

      {/* === MODAL AUTENTIKASI / ROLE SWITCHER === */}
      {isAuthOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-stone-200 animate-in zoom-in-95 duration-200">
            {/* Header Modal */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100">
              <h3 className="font-bold text-xl text-stone-900">
                {authMode === 'login' ? 'Masuk ke KerjaKarsa' : 'Daftar Akun Baru'}
              </h3>
              <button
                onClick={() => setIsAuthOpen(false)}
                className="p-2 text-stone-400 hover:text-stone-600 hover:bg-stone-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Role Selection Toggle */}
              <div>
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                  Pilih Peran Akun
                </label>
                <div className="grid grid-cols-2 gap-3 p-1.5 bg-stone-100 rounded-2xl">
                  <button
                    type="button"
                    onClick={() => setRole('client')}
                    className={`flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm transition-all ${
                      role === 'client'
                        ? 'bg-white text-teal-700 shadow-sm'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    <User className="w-4 h-4" />
                    Pencari Jasa
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('worker')}
                    className={`flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm transition-all ${
                      role === 'worker'
                        ? 'bg-teal-700 text-white shadow-sm'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    <Briefcase className="w-4 h-4" />
                    Mitra Pekerja
                  </button>
                </div>
              </div>

              {/* Form Input Demo */}
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Email / Nomor HP
                  </label>
                  <input
                    type="text"
                    required
                    defaultValue={role === 'client' ? 'klien.demo@kerjakarsa.id' : 'worker.demo@kerjakarsa.id'}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Kata Sandi
                  </label>
                  <input
                    type="password"
                    required
                    defaultValue="******"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-700"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className={`w-full py-3.5 rounded-2xl font-bold text-white shadow-md flex items-center justify-center gap-2 transition-colors ${
                    role === 'client' ? 'bg-amber-500 hover:bg-amber-600 text-stone-900' : 'bg-teal-700 hover:bg-teal-800'
                  }`}
                >
                  <span>
                    {authMode === 'login'
                      ? `Masuk sebagai ${role === 'client' ? 'Pencari Jasa' : 'Mitra Pekerja'}`
                      : `Daftar Akun ${role === 'client' ? 'Pencari Jasa' : 'Mitra Pekerja'}`}
                  </span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              {/* Switch Mode Footer */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-stone-500">
                  {authMode === 'login' ? 'Belum punya akun?' : 'Sudah memiliki akun?'}
                </span>
                <button
                  type="button"
                  onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
                  className="font-bold text-teal-700 hover:underline"
                >
                  {authMode === 'login' ? 'Daftar Sekarang' : 'Masuk di Sini'}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-xs text-stone-400">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Simulasi Mode Demo Gemastik 2026</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

