'use client'

import { useEffect, useRef, useState } from 'react'
import { TrendingUp, Layers, Loader2 } from 'lucide-react'

export function AIPredictiveHeatmap() {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return

    let isMounted = true
    let timer: NodeJS.Timeout

    import('leaflet').then((leafletModule) => {
      if (!isMounted || !mapContainerRef.current) return
      const L = leafletModule.default

      // Surabaya Center
      const centerLat = -7.2600
      const centerLng = 112.7500

      const map = L.map(mapContainerRef.current, {
        center: [centerLat, centerLng],
        zoom: 13,
        scrollWheelZoom: true,
        zoomControl: false,
      })

      L.control.zoom({ position: 'bottomright' }).addTo(map)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map)

      // Fetch Dynamic AI Heatmap Zones from /api/ai/predictive-heatmap
      fetch('/api/ai/predictive-heatmap')
        .then((res) => res.json())
        .then((json) => {
          if (!isMounted) return
          const apiZones = json.zones || []
          
          apiZones.forEach((z: any) => {
            const coords: [number, number] = [z.lat, z.lng]
            const color = z.riskLevel === 'HIGH' ? '#ef4444' : z.riskLevel === 'MEDIUM' ? '#f97316' : '#eab308'
            const orders = z.ordersCount || Math.floor(z.intensity / 3) || 12

            const circle = L.circle(coords, {
              color: color,
              fillColor: color,
              fillOpacity: 0.35,
              radius: z.radius_meters || 1400,
            }).addTo(map)

            circle.bindPopup(`
              <div style="padding: 4px;">
                <h4 style="font-weight: bold; margin-bottom: 4px; color: #1c1917;">${z.name}</h4>
                <p style="font-size: 12px; color: #444; margin-bottom: 6px;">${z.description || 'Prediksi zona ramai pesanan AI'}</p>
                <span style="background-color: ${color}; color: white; padding: 2px 8px; border-radius: 9999px; font-size: 11px; font-weight: bold;">
                  ${orders} Pesanan Aktif (${z.peakHour || '13:00 WIB'})
                </span>
              </div>
            `)
          })
        })
        .catch((err) => {
          console.warn('Fallback heatmap render:', err)
          const fallbackZones = [
            { name: 'Zona Surabaya Barat (Tinggi)', coords: [-7.2750, 112.7250] as [number, number], radius: 1200, color: '#ef4444', orders: 14, desc: 'Tinggi permintaan tukang & perbaikan rumah' },
            { name: 'Zona Gubeng & Tim (Sangat Tinggi)', coords: [-7.2650, 112.7550] as [number, number], radius: 1500, color: '#f97316', orders: 22, desc: 'Tinggi permintaan pembersihan & servis AC' },
          ]
          fallbackZones.forEach((zone) => {
            L.circle(zone.coords, { color: zone.color, fillColor: zone.color, fillOpacity: 0.35, radius: zone.radius }).addTo(map)
          })
        })

      mapInstanceRef.current = map

      // Multi-phase size invalidation to ensure full-bleed map tile rendering
      map.invalidateSize()
      const t1 = setTimeout(() => map.invalidateSize(), 100)
      const t2 = setTimeout(() => {
        map.invalidateSize()
        if (isMounted) setIsLoading(false)
      }, 300)

      // ResizeObserver to handle container size changes
      const observer = new ResizeObserver(() => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.invalidateSize()
        }
      })

      if (mapContainerRef.current) {
        observer.observe(mapContainerRef.current)
      }
    })

    return () => {
      isMounted = false
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden mb-6">
      {/* Header */}
      <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between bg-stone-50/50">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-teal-700" />
          <div>
            <h3 className="font-bold text-stone-900 text-base">Zona Ramai Pesanan (Leaflet.js AI Heatmap)</h3>
            <p className="text-xs text-stone-600">AI memprediksi zona dengan pesanan terbanyak di sekitar Anda</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-700 bg-white px-3 py-1.5 rounded-full border border-stone-200 shadow-sm">
          <Layers className="w-4 h-4 text-orange-500" />
          <span>Interactive Map</span>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative w-full h-80 md:h-96 z-0 overflow-hidden bg-stone-100">
        {isLoading && (
          <div className="absolute inset-0 bg-stone-100 z-10 flex flex-col items-center justify-center text-stone-500 animate-pulse">
            <Loader2 className="w-6 h-6 text-teal-700 animate-spin mb-2" />
            <span className="text-xs font-semibold">Memuat Peta AI Heatmap...</span>
          </div>
        )}
        <div 
          ref={mapContainerRef} 
          className="w-full h-full" 
          style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} 
        />
      </div>

      {/* Footer Stats */}
      <div className="px-6 py-4 grid grid-cols-3 gap-4 border-t border-stone-200 bg-stone-50">
        <div className="text-center">
          <p className="text-2xl font-bold text-teal-700">44</p>
          <p className="text-xs text-stone-600 mt-1">Total Pesanan Area</p>
        </div>
        <div className="text-center border-l border-r border-stone-200">
          <p className="text-2xl font-bold text-orange-500">3</p>
          <p className="text-xs text-stone-600 mt-1">Zona Kepadatan Tinggi</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-amber-500">+42%</p>
          <p className="text-xs text-stone-600 mt-1">Peluang vs Kemarin</p>
        </div>
      </div>
    </div>
  )
}

