'use client'

import { useEffect, useRef, useState } from 'react'
import { MapPin, Phone, Navigation, Loader2 } from 'lucide-react'

export function LiveMapTracking() {
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

      // Surabaya Center Coordinates
      const userLat = -7.2575
      const userLng = 112.7521
      const workerLat = -7.2525
      const workerLng = 112.7551

      const map = L.map(mapContainerRef.current, {
        center: [userLat, userLng],
        zoom: 14,
        scrollWheelZoom: true,
        zoomControl: false,
      })

      L.control.zoom({ position: 'bottomright' }).addTo(map)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map)

      // Custom Worker Icon
      const workerIcon = L.divIcon({
        className: 'leaflet-worker-marker',
        html: `
          <div style="position: relative; display: flex; align-items: center; justify-content: center;">
            <div style="position: absolute; width: 48px; height: 48px; background-color: rgba(15, 118, 110, 0.3); border-radius: 9999px; animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
            <div style="width: 40px; height: 40px; background-color: #0f766e; color: white; border-radius: 9999px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3); border: 2px solid white; font-size: 18px; font-weight: bold;">
              🚚
            </div>
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
      })

      // Custom User Icon
      const userIcon = L.divIcon({
        className: 'leaflet-user-marker',
        html: `
          <div style="width: 34px; height: 34px; background-color: #f59e0b; color: white; border-radius: 9999px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2); border: 2px solid white; font-size: 16px;">
            🏠
          </div>
        `,
        iconSize: [34, 34],
        iconAnchor: [17, 17],
      })

      // Add Worker Marker
      L.marker([workerLat, workerLng], { icon: workerIcon })
        .addTo(map)
        .bindPopup('<div style="text-align: center;"><strong>Budi (Mitra Pekerja)</strong><br/><span style="color: #0f766e; font-size: 12px;">Sedang jalan menuju lokasi Anda</span></div>')
        .openPopup()

      // Add User Marker
      L.marker([userLat, userLng], { icon: userIcon })
        .addTo(map)
        .bindPopup('<strong>Lokasi Anda</strong><br/>Jl. Pemuda No. 12')

      // Add Route Polyline
      L.polyline(
        [
          [workerLat, workerLng],
          [-7.255, 112.7535],
          [userLat, userLng],
        ],
        {
          color: '#0f766e',
          weight: 4,
          dashArray: '6, 8',
        }
      ).addTo(map)

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
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
      {/* Interactive Map Header */}
      <div className="p-4 border-b border-stone-100 flex items-center justify-between bg-stone-50/50">
        <div className="flex items-center gap-2">
          <Navigation className="w-4 h-4 text-teal-700 animate-pulse" />
          <h3 className="font-bold text-stone-900 text-sm">Peta Tracking Live (Leaflet.js)</h3>
        </div>
        <span className="text-[11px] font-bold bg-teal-100 text-teal-800 px-2.5 py-0.5 rounded-full">
          GPS Active
        </span>
      </div>

      {/* Interactive Map Container */}
      <div className="relative w-full h-72 md:h-80 z-0 overflow-hidden bg-stone-100">
        {isLoading && (
          <div className="absolute inset-0 bg-stone-100 z-10 flex flex-col items-center justify-center text-stone-500 animate-pulse">
            <Loader2 className="w-6 h-6 text-teal-700 animate-spin mb-2" />
            <span className="text-xs font-semibold">Memuat Peta Live GPS...</span>
          </div>
        )}
        <div 
          ref={mapContainerRef} 
          className="w-full h-full" 
          style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} 
        />
      </div>

      {/* Info Footer */}
      <div className="p-6 border-t border-stone-200 space-y-4 bg-white">
        {/* ETA */}
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <MapPin className="w-5 h-5 text-teal-700 mt-1" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-stone-900">Estimasi Waktu Tiba</p>
            <p className="text-xs text-stone-500 mt-1">15 menit lagi (Jarak 1.8 km)</p>
          </div>
        </div>

        {/* Contact */}
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <Phone className="w-5 h-5 text-teal-700 mt-1" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-stone-900">Hubungi Pekerja</p>
            <a
              href="tel:+6281234567890"
              className="text-sm text-teal-700 font-medium hover:text-teal-800 transition-colors mt-1 block"
            >
              +62 812 3456 7890 (Budi Santoso)
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

