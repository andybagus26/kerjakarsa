import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { mockWorkers } from '@/lib/data'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key'

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { persistSession: false },
})

export const isSupabaseConfigured = (): boolean => {
  return (
    !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co' &&
    !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
}

// Fallback Store untuk data persisten di browser / local state jika Supabase belum terhubung
export interface PersistentWorker {
  id: string
  name: string
  category: string
  service_title: string
  hourly_rate: number
  daily_rate: number
  rating: number
  review_count: number
  location_name: string
  latitude: number
  longitude: number
  status: 'AVAILABLE' | 'BUSY' | 'OFF'
  bio: string
  skills: string[]
  is_verified: boolean
}

export async function fetchWorkersData(): Promise<PersistentWorker[]> {
  if (isSupabaseConfigured()) {
    try {
      const { data, error } = await supabase.from('workers').select('*')
      if (!error && data && data.length > 0) {
        return data as PersistentWorker[]
      }
    } catch (err) {
      console.warn('Supabase fetch failed, falling back to local dataset:', err)
    }
  }

  // Fallback map dari mockWorkers
  return mockWorkers.map((w) => ({
    id: String(w.id),
    name: w.name,
    category: w.category,
    service_title: w.title,
    hourly_rate: w.pricePerHour,
    daily_rate: w.pricePerHour * 6,
    rating: w.rating,
    review_count: w.reviewsCount,
    location_name: w.location,
    latitude: w.lat,
    longitude: w.lng,
    status: w.isAvailable ? 'AVAILABLE' : 'OFF',
    bio: w.bio,
    skills: w.skills,
    is_verified: true,
  }))
}
