'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/dashboard')
  }, [router])

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center">
      <div className="text-center space-y-2">
        <div className="w-8 h-8 border-4 border-teal-700 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="text-xs font-bold text-stone-600">Mengarahkan ke Dashboard KerjaKarsa...</p>
      </div>
    </div>
  )
}
