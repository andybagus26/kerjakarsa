'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { WorkerSidebar } from '@/components/worker-sidebar'
import { WorkerBottomNav } from '@/components/worker-bottom-nav'
import { MessageSquare, Send, Phone, User, CheckCheck, Clock, Search } from 'lucide-react'

interface Message {
  id: string
  sender: 'client' | 'worker'
  text: string
  time: string
}

interface ChatSession {
  id: string
  clientName: string
  clientAvatar: string
  lastMessage: string
  time: string
  unread: number
  service: string
  messages: Message[]
}

export default function WorkerMessagesPage() {
  const [sessions, setSessions] = useState<ChatSession[]>([
    {
      id: '1',
      clientName: 'Siti Rahmawati',
      clientAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      lastMessage: 'Halo Pak Budi, bisa datang jam 2 siang untuk cek AC?',
      time: '13:42',
      unread: 1,
      service: 'Servis AC Split',
      messages: [
        { id: 'm1', sender: 'client', text: 'Halo Pak Budi, lokasi Tegalsari bisa dijangkau?', time: '13:40' },
        { id: 'm2', sender: 'worker', text: 'Siap Bu Siti, lokasi masuk jangkauan saya (2.4 km).', time: '13:41' },
        { id: 'm3', sender: 'client', text: 'Halo Pak Budi, bisa datang jam 2 siang untuk cek AC?', time: '13:42' },
      ],
    },
    {
      id: '2',
      clientName: 'Budi Kurniawan',
      clientAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      lastMessage: 'Baik Pak, pembayaran Escrow sudah saya transfer.',
      time: 'Kemarin',
      unread: 0,
      service: 'Instalasi Stop Kontak',
      messages: [
        { id: 'm1', sender: 'worker', text: 'Selamat siang Pak Budi, pekerjaan instalasi panel listrik siap dikerjakan besok jam 10.', time: 'Kemarin 15:20' },
        { id: 'm2', sender: 'client', text: 'Baik Pak, pembayaran Escrow sudah saya transfer.', time: 'Kemarin 15:25' },
      ],
    },
  ])

  const [activeSessionId, setActiveSessionId] = useState<string>('1')
  const [inputText, setInputText] = useState('')

  const activeSession = sessions.find((s) => s.id === activeSessionId) || sessions[0]

  const handleSendMessage = () => {
    if (!inputText.trim()) return

    const newMessage: Message = {
      id: `m-${Date.now()}`,
      sender: 'worker',
      text: inputText,
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    }

    setSessions((prev) =>
      prev.map((s) =>
        s.id === activeSessionId
          ? {
              ...s,
              lastMessage: inputText,
              time: 'Baru saja',
              messages: [...s.messages, newMessage],
            }
          : s
      )
    )

    setInputText('')
  }

  return (
    <div className="bg-stone-50 min-h-screen">
      <Navbar />

      {/* Desktop Layout */}
      <div className="hidden md:flex pt-20 pb-6">
        <WorkerSidebar />

        <div className="flex-1 px-6 md:px-8 max-w-6xl">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3">
              <span className="p-2.5 bg-teal-100 text-teal-800 rounded-2xl font-bold text-sm">
                💬
              </span>
              <div>
                <h1 className="text-2xl font-extrabold text-stone-900">Pesan Klien</h1>
                <p className="text-sm text-stone-600">Obrolan langsung &amp; koordinasi dengan pelanggan Anda</p>
              </div>
            </div>
          </div>

          {/* Messaging Window */}
          <div className="bg-white rounded-3xl border border-stone-200 shadow-sm grid grid-cols-12 overflow-hidden h-[620px]">
            {/* Session List Column (4/12) */}
            <div className="col-span-4 border-r border-stone-100 flex flex-col">
              <div className="p-4 border-b border-stone-100">
                <div className="relative">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Cari obrolan klien..."
                    className="w-full pl-9 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs font-semibold text-stone-900 focus:outline-none focus:ring-2 focus:ring-teal-700"
                  />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto divide-y divide-stone-50">
                {sessions.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveSessionId(s.id)}
                    className={`w-full p-4 text-left flex items-start gap-3 transition-colors ${
                      s.id === activeSessionId ? 'bg-teal-50/70 border-l-4 border-teal-700' : 'hover:bg-stone-50'
                    }`}
                  >
                    <img src={s.clientAvatar} alt={s.clientName} className="w-10 h-10 rounded-xl object-cover shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-stone-900 text-sm truncate">{s.clientName}</h4>
                        <span className="text-[10px] text-stone-600 font-semibold">{s.time}</span>
                      </div>
                      <p className="text-xs text-teal-800 font-bold truncate mt-0.5">{s.service}</p>
                      <p className="text-xs text-stone-600 truncate mt-1">{s.lastMessage}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Room Column (8/12) */}
            <div className="col-span-8 flex flex-col h-full bg-stone-50/30">
              {/* Chat Header */}
              <div className="p-4 bg-white border-b border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={activeSession.clientAvatar} alt={activeSession.clientName} className="w-10 h-10 rounded-xl object-cover" />
                  <div>
                    <h3 className="font-bold text-stone-900 text-sm">{activeSession.clientName}</h3>
                    <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Online • {activeSession.service}
                    </span>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-3 py-1.5 border border-stone-200 rounded-xl text-xs font-bold text-stone-700 hover:bg-stone-50">
                  <Phone className="w-3.5 h-3.5 text-teal-700" />
                  Panggil
                </button>
              </div>

              {/* Chat Messages Body */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3">
                {activeSession.messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex ${m.sender === 'worker' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-md px-4 py-2.5 rounded-2xl text-xs font-medium shadow-2xs ${
                        m.sender === 'worker'
                          ? 'bg-teal-700 text-white rounded-br-none'
                          : 'bg-white border border-stone-200 text-stone-900 rounded-bl-none'
                      }`}
                    >
                      <p>{m.text}</p>
                      <span className={`text-[9px] block text-right mt-1 font-semibold ${m.sender === 'worker' ? 'text-teal-200' : 'text-stone-400'}`}>
                        {m.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input Box */}
              <div className="p-3 bg-white border-t border-stone-100 flex items-center gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ketik pesan balasan..."
                  className="flex-1 px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs font-semibold text-stone-900 focus:outline-none focus:ring-2 focus:ring-teal-700"
                />
                <button
                  onClick={handleSendMessage}
                  className="p-2.5 bg-amber-500 hover:bg-amber-600 text-stone-900 rounded-xl transition-colors shadow-2xs"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden p-4 space-y-4 pb-24">
        <h1 className="text-xl font-bold text-stone-900">Pesan Klien</h1>
        <div className="space-y-3">
          {sessions.map((s) => (
            <div key={s.id} className="bg-white p-4 rounded-2xl border border-stone-200 space-y-2 shadow-xs">
              <div className="flex items-center gap-3">
                <img src={s.clientAvatar} alt={s.clientName} className="w-9 h-9 rounded-xl object-cover" />
                <div>
                  <h4 className="font-bold text-stone-900 text-xs">{s.clientName}</h4>
                  <span className="text-[10px] text-teal-800 font-bold">{s.service}</span>
                </div>
              </div>
              <p className="text-xs text-stone-600 bg-stone-50 p-2.5 rounded-xl">{s.lastMessage}</p>
            </div>
          ))}
        </div>
      </div>

      <WorkerBottomNav />
    </div>
  )
}
