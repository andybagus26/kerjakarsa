'use client'

import { CheckCircle2, Circle } from 'lucide-react'

const steps = [
  { id: 1, label: 'Menunggu', description: 'Menunggu pekerja menerima' },
  { id: 2, label: 'Di Perjalanan', description: 'Pekerja dalam perjalanan' },
  { id: 3, label: 'Sedang Bekerja', description: 'Pekerja sedang melakukan pekerjaan' },
  { id: 4, label: 'Selesai', description: 'Pekerjaan telah selesai' },
]

const currentStep = 3

export function OrderStatusTracker() {
  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6">
      <h3 className="text-lg font-semibold text-stone-900 mb-6">Status Pesanan</h3>

      {/* Desktop Horizontal Timeline */}
      <div className="hidden sm:block">
        <div className="flex items-center gap-2">
          {steps.map((step, idx) => (
            <div key={step.id} className="flex-1">
              {/* Step Circle */}
              <div className="flex justify-center mb-3">
                <div
                  className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    step.id < currentStep
                      ? 'bg-teal-700 text-white'
                      : step.id === currentStep
                        ? 'bg-amber-500 text-white ring-4 ring-amber-200'
                        : 'bg-stone-200 text-stone-400'
                  }`}
                >
                  {step.id < currentStep ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    <Circle className="w-5 h-5" />
                  )}
                </div>
              </div>

              {/* Label */}
              <div className="text-center">
                <p
                  className={`text-xs font-semibold ${
                    step.id <= currentStep ? 'text-stone-900' : 'text-stone-500'
                  }`}
                >
                  {step.label}
                </p>
              </div>

              {/* Connector Line */}
              {idx < steps.length - 1 && (
                <div
                  className={`h-1 mx-1 mt-2 rounded-full ${
                    step.id < currentStep ? 'bg-teal-700' : 'bg-stone-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Vertical Timeline */}
      <div className="sm:hidden space-y-4">
        {steps.map((step) => (
          <div key={step.id} className="flex gap-4">
            {/* Circle */}
            <div className="flex-shrink-0">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  step.id < currentStep
                    ? 'bg-teal-700 text-white'
                    : step.id === currentStep
                      ? 'bg-amber-500 text-white ring-4 ring-amber-200'
                      : 'bg-stone-200 text-stone-400'
                }`}
              >
                {step.id < currentStep ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : (
                  <Circle className="w-5 h-5" />
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 pt-1">
              <p
                className={`text-sm font-semibold ${
                  step.id <= currentStep ? 'text-stone-900' : 'text-stone-500'
                }`}
              >
                {step.label}
              </p>
              <p className="text-xs text-stone-500 mt-1">{step.description}</p>
            </div>

            {/* Connector for mobile */}
            {step.id < steps.length && (
              <div
                className={`absolute left-5 top-[calc(100%+16px)] w-0.5 h-6 ${
                  step.id < currentStep ? 'bg-teal-700' : 'bg-stone-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
