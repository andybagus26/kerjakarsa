'use client'

import { useEffect, useState } from 'react'
import { supabase, isSupabaseConfigured } from '@/lib/supabase'

export function useRealtimeStatus(initialIsActive: boolean = true) {
  const [isActive, setIsActive] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('kerjakarsa_worker_status')
      if (saved !== null) return saved === 'true'
    }
    return initialIsActive
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('kerjakarsa_worker_status', String(isActive))
    }

    if (!isSupabaseConfigured()) return

    // Supabase Realtime Subscription Channel
    const channel = supabase
      .channel('public:workers')
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'workers' },
        (payload) => {
          if (payload.new && payload.new.status) {
            setIsActive(payload.new.status === 'AVAILABLE')
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [isActive])

  const updateStatus = async (nextState: boolean) => {
    setIsActive(nextState)
    if (typeof window !== 'undefined') {
      localStorage.setItem('kerjakarsa_worker_status', String(nextState))
    }

    if (isSupabaseConfigured()) {
      try {
        await supabase
          .from('workers')
          .update({ status: nextState ? 'AVAILABLE' : 'OFF' })
          .eq('id', 'worker-1')
      } catch (err) {
        console.warn('Realtime Supabase status update fallback:', err)
      }
    }
  }

  return { isActive, updateStatus }
}
