import { NextResponse } from 'next/server'
import { fetchWorkersData, isSupabaseConfigured } from '@/lib/supabase'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const search = searchParams.get('search')?.toLowerCase()

    let workers = await fetchWorkersData()

    if (category && category !== 'Semua') {
      workers = workers.filter(
        (w) => w.category.toLowerCase() === category.toLowerCase()
      )
    }

    if (search) {
      workers = workers.filter(
        (w) =>
          w.name.toLowerCase().includes(search) ||
          w.service_title.toLowerCase().includes(search) ||
          w.skills.some((s) => s.toLowerCase().includes(search))
      )
    }

    return NextResponse.json({
      success: true,
      source: isSupabaseConfigured() ? 'Supabase PostgreSQL' : 'Persistent Storage API',
      count: workers.length,
      data: workers,
    })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Internal Server Error' },
      { status: 500 }
    )
  }
}
