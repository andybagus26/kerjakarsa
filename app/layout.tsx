import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KerjaKarsa - Ekosistem Kolaborasi & Pemberdayaan Pekerja Informal',
  description: 'Platform digital terintegrasi untuk memberdayakan pekerja informal dan menggerakkan ekonomi digital Indonesia',
  icons: {
    icon: [
      { url: '/logo-icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/logo-icon.svg',
    apple: '/logo-icon.svg',
  },
  openGraph: {
    title: 'KerjaKarsa - Ekosistem Kolaborasi & Pemberdayaan Pekerja Informal',
    description: 'Platform digital terintegrasi untuk memberdayakan pekerja informal dan menggerakkan ekonomi digital Indonesia',
    url: 'https://kerjakarsa-ebon.vercel.app',
    siteName: 'KerjaKarsa',
    images: [
      {
        url: 'https://kerjakarsa-ebon.vercel.app/logo-icon.svg',
        width: 1200,
        height: 630,
        alt: 'KerjaKarsa Logo',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KerjaKarsa - Ekosistem Kolaborasi & Pemberdayaan Pekerja Informal',
    description: 'Platform digital terintegrasi untuk memberdayakan pekerja informal dan menggerakkan ekonomi digital Indonesia',
    images: ['https://kerjakarsa-ebon.vercel.app/logo-icon.svg'],
  },
}
export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0f766e' },
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
      <head>
        <link rel="icon" href="/logo-icon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/logo-icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo-icon.svg" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          crossOrigin=""
        />
      </head>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
