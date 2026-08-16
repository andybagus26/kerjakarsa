import Link from 'next/link'
import { PwaBanner } from '@/components/pwa-banner'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { Categories } from '@/components/categories'
import { SocialProofTicker } from '@/components/social-proof-ticker'

export default function Page() {
  return (
    <main className="bg-stone-50 min-h-screen">
      <PwaBanner />
      <Navbar />
      <HeroSection />
      <Categories />
      <SocialProofTicker />

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-teal-400 mb-4">KerjaKarsa</h3>
              <p className="text-stone-400 text-sm">Platform terpercaya menghubungkan Anda dengan profesional terbaik.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-stone-100">Navigasi</h4>
              <ul className="space-y-2 text-sm text-stone-400">
                <li><a href="#" className="hover:text-white transition-colors">Beranda</a></li>
                <li><a href="#categories" className="hover:text-white transition-colors">Kategori Jasa</a></li>
                <li><a href="#how" className="hover:text-white transition-colors">Cara Kerja</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4 text-stone-100">Dukungan</h4>
              <ul className="space-y-2 text-sm text-stone-400">
                <li><a href="#" className="hover:text-white transition-colors">Hubungi Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Syarat &amp; Ketentuan</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-stone-100">Kontak</h4>
              <ul className="space-y-2 text-sm text-stone-400">
                <li>Email: info@kerjakarsa.id</li>
                <li>Telepon: +62 21 1234 5678</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8 text-center text-sm text-stone-400">
            <p>&copy; 2026 KerjaKarsa. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
