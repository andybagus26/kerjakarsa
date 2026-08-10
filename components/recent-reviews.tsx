'use client'

import { Star, MessageCircle } from 'lucide-react'

interface Review {
  id: string
  clientName: string
  rating: number
  text: string
  date: string
  avatar: string
}

const reviews: Review[] = [
  {
    id: '1',
    clientName: 'Ibu Rini',
    rating: 5,
    text: 'Sangat rapi dan cepat! Piring bersih berkilau.',
    date: '2 jam lalu',
    avatar: '👩',
  },
  {
    id: '2',
    clientName: 'Pak Ahmad',
    rating: 5,
    text: 'Profesional, tepat waktu, dan hasil memuaskan.',
    date: '5 jam lalu',
    avatar: '👨',
  },
  {
    id: '3',
    clientName: 'Siti Nurhaliza',
    rating: 5,
    text: 'Terjangkau dan berkualitas. Akan panggil lagi!',
    date: '1 hari lalu',
    avatar: '👩‍🦱',
  },
]

export function RecentReviews() {
  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-bold text-stone-900">Ulasan Terbaru</h3>
          <p className="text-xs text-stone-600 mt-1">Rating rata-rata: 4.9 ⭐</p>
        </div>
        <div className="bg-amber-50 rounded-2xl p-3">
          <Star className="w-5 h-5 text-amber-500" />
        </div>
      </div>

      {/* Reviews Feed */}
      <div className="space-y-4">
        {reviews.map((review, idx) => (
          <div
            key={review.id}
            className={`pb-4 ${idx !== reviews.length - 1 ? 'border-b border-stone-200' : ''}`}
          >
            {/* Review Header */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-lg flex-shrink-0">
                {review.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <p className="font-semibold text-stone-900 text-sm">
                    {review.clientName}
                  </p>
                  <p className="text-xs text-stone-500 flex-shrink-0">
                    {review.date}
                  </p>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-stone-700 leading-snug">
                  {review.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <button className="w-full mt-6 px-4 py-3 border border-stone-200 text-stone-700 font-medium rounded-2xl hover:bg-stone-50 transition-colors flex items-center justify-center gap-2 text-sm min-h-11">
        <MessageCircle className="w-4 h-4" />
        Lihat Semua Ulasan
      </button>
    </div>
  )
}
