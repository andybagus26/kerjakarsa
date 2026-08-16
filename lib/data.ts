export interface Worker {
  id: string
  name: string
  avatar: string
  distance: string
  rating: number
  reviews: number
  verified: boolean
  estimatedWage: string
  specialty: string
  category: string
  location: string
  about: string
  skills: string[]
  lat: number
  lng: number
  pricePerHour: number
  reviewsCount: number
  isAvailable: boolean
  bio: string
}

export const mockWorkers: Worker[] = [
  {
    id: '1',
    name: 'Budi Santoso',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    distance: '2.5 km dari lokasi Anda',
    rating: 4.9,
    reviews: 124,
    reviewsCount: 124,
    verified: true,
    estimatedWage: 'Rp 250.000',
    specialty: 'Tukang Bangunan Berpengalaman',
    category: 'Perbaikan',
    location: 'Surabaya Barat',
    about: 'Berpengalaman lebih dari 10 tahun dalam konstruksi rumah tinggal, perbaikan tembok, lantai, dan renovasi gedung komersial.',
    skills: ['Pemasangan Bata', 'Keramik', 'Pengecatan', 'Baja Ringan', 'Tukang Bangunan'],
    lat: -7.2891,
    lng: 112.6756,
    pricePerHour: 45000,
    isAvailable: true,
    bio: 'Berpengalaman lebih dari 10 tahun dalam konstruksi rumah tinggal dan perbaikan tembok.',
  },
  {
    id: '2',
    name: 'Siti Rahayu',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    distance: '1.8 km dari lokasi Anda',
    rating: 4.8,
    reviews: 98,
    reviewsCount: 98,
    verified: true,
    estimatedWage: 'Rp 180.000',
    specialty: 'Jasa Asisten Rumah Tangga & Pembersihan',
    category: 'Pembersihan',
    location: 'Surabaya Pusat',
    about: 'Menyediakan layanan kebersihan harian, cuci setrika, serta perawatan rumah tinggal profesional.',
    skills: ['Deep Cleaning', 'Cuci Setrika', 'Perawatan Kos', 'Pembersihan ART'],
    lat: -7.2575,
    lng: 112.7521,
    pricePerHour: 35000,
    isAvailable: true,
    bio: 'Layanan kebersihan harian profesional dan terpercaya.',
  },
  {
    id: '3',
    name: 'Ahmad Fauzi',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    distance: '3.2 km dari lokasi Anda',
    rating: 4.95,
    reviews: 156,
    reviewsCount: 156,
    verified: true,
    estimatedWage: 'Rp 300.000',
    specialty: 'Teknisi Listrik & Instalasi AC',
    category: 'Kelistrikan',
    location: 'Surabaya Selatan',
    about: 'Spesialis perbaikan korsleting listrik, pasang baru panel, serta perawatan AC split skala rumah & kantor.',
    skills: ['Servis AC', 'Instalasi Listrik', 'Pompa Air', 'Perbaikan Panel'],
    lat: -7.3105,
    lng: 112.7352,
    pricePerHour: 50000,
    isAvailable: true,
    bio: 'Spesialis perbaikan AC & listrik berpengalaman 8 tahun.',
  },
]
