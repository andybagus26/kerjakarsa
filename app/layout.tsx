import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kerjakarsa - Kolaborasi dan Ekosistem Kreatif Digital',
  description: 'Platform digital terintegrasi untuk memberdayakan pekerja kreatif dan menggerakkan ekonomi digital Indonesia',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  // Konfigurasi OpenGraph agar saat di-share ke WhatsApp/Sosmed judul, deskripsi, dan logonya ikut tampil
  openGraph: {
    title: 'Kerjakarsa - Kolaborasi dan Ekosistem Kreatif Digital',
    description: 'Platform digital terintegrasi untuk memberdayakan pekerja kreatif dan menggerakkan ekonomi digital Indonesia',
    url: 'https://kerjakarsa.vercel.app', // Sesuaikan dengan domain deployment kamu nantinya
    siteName: 'Kerjakarsa',
    images: [
      {
        url: 'https://kerjakarsa.vercel.app/icon.png', // Harus URL absolut/lengkap agar terbaca oleh WhatsApp
        width: 1200,
        height: 630,
        alt: 'Kerjakarsa App Logo',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kerjakarsa - Kolaborasi dan Ekosistem Kreatif Digital',
    description: 'Platform digital terintegrasi untuk memberdayakan pekerja kreatif dan menggerakkan ekonomi digital Indonesia',
    images: ['https://kerjakarsa.vercel.app/icon.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0d6b74' },
  ],
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="bg-stone-50">
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
