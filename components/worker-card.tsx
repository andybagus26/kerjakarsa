import { Star, CheckCircle } from 'lucide-react'

interface WorkerCardProps {
  id: string
  name: string
  avatar: string
  distance: string
  rating: number
  reviews: number
  verified: boolean
  estimatedWage: string
  specialty: string
}

export function WorkerCard({
  id,
  name,
  avatar,
  distance,
  rating,
  reviews,
  verified,
  estimatedWage,
  specialty,
}: WorkerCardProps) {
  return (
    <div className="group bg-white rounded-3xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Avatar Container */}
      <div className="relative pt-6 px-6 pb-4">
        <div className="relative inline-block">
          <img
            src={avatar}
            alt={name}
            className="w-24 h-24 rounded-2xl object-cover border-2 border-stone-100"
          />
          {verified && (
            <div className="absolute -bottom-1 -right-1 bg-teal-600 rounded-full p-1 border-2 border-white shadow-sm">
              <CheckCircle className="w-5 h-5 text-white fill-teal-600" />
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 flex-1 flex flex-col">
        {/* Name and Distance */}
        <div className="mb-3">
          <h3 className="text-lg font-bold text-teal-700 leading-tight">{name}</h3>
          <p className="text-sm text-stone-500 mt-1">{distance}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${
                  i < Math.floor(rating)
                    ? 'fill-amber-500 text-amber-500'
                    : 'text-stone-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-stone-900">{rating.toFixed(1)}</span>
          <span className="text-xs text-stone-500">({reviews})</span>
        </div>

        {/* Specialty */}
        <p className="text-sm text-stone-600 mb-4 flex-1">{specialty}</p>

        {/* Wage Badge */}
        <div className="mb-4 inline-flex">
          <div className="bg-amber-50 text-amber-700 rounded-full px-3 py-1.5 text-xs font-semibold">
            Estimasi: {estimatedWage}
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full bg-teal-700 text-white font-semibold rounded-2xl py-3 hover:bg-teal-800 transition-colors shadow-sm">
          Pesan Sekarang
        </button>
      </div>
    </div>
  )
}
