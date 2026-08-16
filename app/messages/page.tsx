'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { DashboardSidebar } from '@/components/dashboard-sidebar'
import { MessageSquare, Send, Phone, Search, ShieldCheck } from 'lucide-react'

export default function ClientMessagesPage() {
  const [messages, setMessages] = useState([
    { id: 'm1', sender: 'worker', text: 'Halo Pak, saya Budi Santoso teknisi perbaikan AC. Ada yang bisa dibantu?', time: '14:00' },
    { id: 'm2', sender: 'client', text: 'Halo Pak Budi, AC kamar utama kurang dingin, freon sepertinya perlu dicek.', time: '14:02' },
    { id: 'm3', sender: 'worker', text: 'Siap Pak, lokasi Surabaya Selatan jam 3 sore ini saya meluncur.', time: '14:05' },
  ])

  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return
    setMessages((prev) => [
      ...prev,
      {
        id: `m-${Date.now()}`,
        sender: 'client',
        text: input,
        time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      },
    ])
    setInput('')
  }

  return (
    <div className="bg-stone-50 min-h-screen">
      <Navbar />

      <div className="hidden md:flex pt-20 pb-6">
        <DashboardSidebar />

        <div className="flex-1 px-6 md:px-8 max-w-6xl">
          <div className="mb-6">
            <h1 className="text-2xl font-extrabold text-stone-900">Pesan Jasa</h1>
            <p className="text-sm text-stone-600">Obrolan langsung dengan mitra pekerja yang Anda sewa</p>
          </div>

          <div className="bg-white rounded-3xl border border-stone-200 shadow-sm grid grid-cols-12 overflow-hidden h-[600px]">
            {/* Left list */}
            <div className="col-span-4 border-r border-stone-100 p-4 space-y-3">
              <div className="relative">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari pesan..."
                  className="w-full pl-9 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-teal-700"
                />
              </div>

              <div className="bg-teal-50/70 p-3.5 rounded-2xl border-l-4 border-teal-700 space-y-1 cursor-pointer">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-stone-900 text-xs">Budi Santoso</h4>
                  <span className="text-[10px] text-stone-500 font-semibold">14:05</span>
                </div>
                <p className="text-[11px] text-teal-800 font-bold">Servis AC &amp; Kelistrikan</p>
                <p className="text-xs text-stone-600 truncate">Siap Pak, lokasi Surabaya Selatan jam 3 sore...</p>
              </div>
            </div>

            {/* Right Chat Area */}
            <div className="col-span-8 flex flex-col h-full bg-stone-50/30">
              <div className="p-4 bg-white border-b border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-700 text-white font-bold flex items-center justify-center text-sm">
                    BS
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 text-sm">Budi Santoso</h3>
                    <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Mitra Terverifikasi • Servis AC
                    </span>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-3 py-1.5 border border-stone-200 rounded-xl text-xs font-bold text-stone-700 hover:bg-stone-50">
                  <Phone className="w-3.5 h-3.5 text-teal-700" /> Hubungi
                </button>
              </div>

              <div className="flex-1 p-4 overflow-y-auto space-y-3">
                {messages.map((m) => (
                  <div key={m.id} className={`flex ${m.sender === 'client' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-md px-4 py-2.5 rounded-2xl text-xs font-medium ${
                        m.sender === 'client'
                          ? 'bg-teal-700 text-white rounded-br-none'
                          : 'bg-white border border-stone-200 text-stone-900 rounded-bl-none'
                      }`}
                    >
                      <p>{m.text}</p>
                      <span className={`text-[9px] block text-right mt-1 font-semibold ${m.sender === 'client' ? 'text-teal-200' : 'text-stone-400'}`}>
                        {m.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-white border-t border-stone-100 flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ketik pesan..."
                  className="flex-1 px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs font-semibold text-stone-900 focus:outline-none focus:ring-2 focus:ring-teal-700"
                />
                <button onClick={handleSend} className="p-2.5 bg-amber-500 hover:bg-amber-600 text-stone-900 rounded-xl">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
