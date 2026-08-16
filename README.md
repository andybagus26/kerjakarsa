# 🚀 KerjaKarsa — Platform Ekosistem Kolaborasi & Pemberdayaan Pekerja Informal Digital

> **Live Demo Vercel**: [https://kerjakarsa-ebon.vercel.app](https://kerjakarsa-ebon.vercel.app)  
> **Karya Kompetisi Gemastik XIX (2026)**  
> **Kategori**: Pengembangan Perangkat Lunak (PPL) / Software Development  

![Vercel Live](https://img.shields.io/badge/Vercel-Live_Demo-000000?style=for-the-badge&logo=vercel)
![Next.js 16](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js)
![React 19](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Leaflet.js](https://img.shields.io/badge/Leaflet.js-OpenStreetMap-199900?style=for-the-badge&logo=leaflet)
![Web Speech API](https://img.shields.io/badge/Web_Speech_API-Native_Browser_AI-FF6F00?style=for-the-badge)

---

## 📌 Latar Belakang & Permasalahan

Sektor pekerja informal di Indonesia (seperti tukang perbaikan rumah, teknisi AC, pekerja kebersihan, dan penyedia jasa harian) mencakup puluhan juta tenaga kerja. Namun, mereka menghadapi dua kendala utama:
1. **Kesulitan Pemasaran & Profil Tertulis**: Pekerja sering kesulitan menyusun deskripsi keahlian atau CV tertulis.
2. **Keamanan Transaksi & Kepastian Lokasi**: Pencari jasa sering ragu akibat maraknya penipuan uang muka (DP) dan ketiadaan pelacakan lokasi waktu tiba pekerja secara *real-time*.

**KerjaKarsa** hadir sebagai solusi web terintegrasi yang memberdayakan pekerja informal melalui teknologi *voice-to-text*, pelacakan lokasi berbasis peta interaktif, serta garansi transaksi Escrow.

---

## 🌟 Fitur-Fitur Utama & Implementasi Teknis

### 1. 🛡️ Safe Escrow Wallet (Sistem Rekening Bersama & Simulasi Gateway)
- **Keamanan Transaksi**: Dana pencari jasa ditahan secara aman pada sistem Escrow sebelum pekerjaan selesai.
- **Simulasi Pembayaran Midtrans Snap**: Alur checkout interaktif dengan simulasi metode pembayaran bank & e-wallet.
- **Pencairan Transparan & Resi Resmi**: Dana baru dilepaskan ke dompet mitra pekerja setelah pencari jasa mengonfirmasi penyelesaian tugas, lengkap dengan resi bukti pencairan dan ID Transaksi unik.

### 2. 🗺️ Leaflet.js Interactive Live GPS Tracking
- **Peta Real-Time (OpenStreetMap)**: Memantau pergerakan posisi pekerja yang sedang dalam perjalanan menuju lokasi pelanggan.
- **Marker & Route Polyline**: Menampilkan marker lokasi pekerja (efek *pulsing GPS*), posisi rumah pelanggan, serta rute perjalanan dinamis.
- **Auto-Resize & Full-Bleed Tile**: Layar peta responsif tanpa *blank space*.

### 3. 🎙️ Web Speech API Voice Profile Generator (Natural Voice AI)
- **Input Suara Inklusif (`id-ID`)**: Memanfaatkan browser native `webkitSpeechRecognition` / `SpeechRecognition` untuk mengonversi ucapan Bahasa Indonesia pekerja menjadi teks secara *real-time*.
- **Ekstraksi Tag Keahlian**: Mengurai kata kunci dari ucapan pekerja untuk menyusun bio profesional dan tag keahlian (`❄️ Servis AC`, `⚡ Listrik`, `🔧 Perbaikan`, `📍 Surabaya`).
- **Mode Demo Voice Simulation**: Menyediakan fallback sampel suara bawaan untuk pengujian instan tanpa mikrofon fisik.

### 4. 📊 AI Predictive Demand Heatmap
- **Visualisasi Geospasial Kepadatan Pesanan**: Memvisualisasikan lingkaran zona ramai pesanan (*Circle Overlays*) pada wilayah Surabaya & sekitarnya menggunakan Leaflet.js overlays.
- **Analisis Potensi Peluang**: Menyajikan data tren pesanan aktif untuk membantu pekerja menentukan lokasi mangkal strategis.

### 5. 📋 Dynamic Task Checklist & Progress Tracking
- **Manajemen Progres Proyek**: Pelanggan & pekerja dapat mengelola daftar tugas pengerjaan secara interaktif.
- **Visual Progress Bar**: Persentase kemajuan pengerjaan bergerak secara dinamis sesuai penyelesaian item tugas.

### 6. 🔄 Dual-Role Interface (Klien & Mitra Pekerja)
- **Navigasi 2-Sisi**: Perpindahan cepat antara **Dashboard Pencari Jasa (Klien)** dan **Dashboard Mitra Pekerja (Worker)**.
- **Navigasi Lengkap**: Rute pesanan masuk (`/worker-orders`), pencarian jasa (`/search`), dan manajemen status kerja mitra.

---

## 🔍 Matriks Teknologi & Arsitektur Sistem

| Komponen Sistem | Teknologi yang Digunakan | Catatan Implementasi |
| :--- | :--- | :--- |
| **Frontend Framework** | Next.js 16.3 (App Router), React 19 | Performa tinggi, Server & Client Components |
| **Styling & UI** | Tailwind CSS v4, Lucide React Icons | Responsive design, modern SaaS aesthetic |
| **Mapping & GIS** | Leaflet.js, React-Leaflet, OpenStreetMap | Visualisasi peta live tracking & demand heatmap |
| **Voice Processing** | Web Speech API (`id-ID`) | Pemrosesan suara native peramban tanpa dependensi luar |
| **State & Data Management** | React Client State (`useState`, `useEffect`) | Arsitektur prototype mandiri yang cepat untuk pengujian demo |
| **Payment Gateway UI** | Custom Midtrans Snap Modal Simulation | Simulasi alur pembayaran Escrow lengkap dengan resi |

---

## 💻 Panduan Menjalankan Proyek secara Lokal

### 1. Prasyarat
- **Node.js**: versi 18.x atau lebih baru
- **Package Manager**: `npm` / `pnpm` / `yarn`

### 2. Kloning & Masuk ke Direktori Proyek
```bash
git clone https://github.com/andybagus26/kerjakarsa.git
cd kerjakarsa
```

### 3. Instalasi Dependensi
```bash
npm install
```

### 4. Jalankan Development Server
```bash
npm run dev
```

Akses aplikasi pada peramban web:  
👉 **`http://localhost:3000`**

---

## 🗺️ Peta Rute Navigasi Aplikasi

| Halaman | Rute URL | Deskripsi Utama |
| :--- | :--- | :--- |
| **Landing Page** | `/` | Banner utama, pencarian cepat, kriteria unggulan, dan ulasan. |
| **Cari & Order Jasa** | `/search` | Katalog pekerja, modal detail mitra, form order, & pembayaran Escrow. |
| **Dashboard Klien** | `/dashboard` | Tracking live GPS Leaflet, Escrow Wallet, dan Task Checklist. |
| **Dashboard Worker** | `/worker-dashboard` | Toggle Siap Kerja, Voice Profile Generator, & AI Demand Heatmap. |
| **Pesanan Masuk Worker** | `/worker-orders` | Daftar pesanan aktif & konfirmasi penerimaan pekerjaan. |

---

## 🎬 Panduan & Bahan Pembuatan Video Demonstrasi Gemastik XIX

Untuk keperluan penyusunan **Video Presentasi & Pitching Produk Gemastik XIX (Durasi Maksimal 3-5 Menit)**, berikut rincian bahan video (*scene-by-scene breakdown*), aset media, serta prompt AI Generatif yang diperlukan:

### 📸 1. Rincian Aset & Prompt AI Generatif Video
| Scene | Durasi Target | Kebutuhan Bahan / Visual Video | Prompt Generasi AI (Runway Gen-3 / Sora / Midjourney v6) |
| :--- | :--- | :--- | :--- |
| **01. Intro & Problem** | `00:00 - 00:30` | Animasi 3D Pixar pekerja informal Indonesia (Tukang AC & Listrik) mengalami kendala pemasaran. | `3D Pixar style animation of an Indonesian AC technician holding a wrench, sitting thoughtfully at a desk, cinematic soft warm lighting, ultra detailed, 8k --ar 16:9` |
| **02. Voice AI Profile** | `00:30 - 01:15` | Screen recording demo Web Speech API & ekstraksi bio otomatis oleh Google Gemini AI (`gemini-2.5-flash`). | `Close-up shot of a modern smartphone UI showing glowing voice soundwave visualizer with teal gradient background, futuristic tech interface` |
| **03. Escrow & Midtrans** | `01:15 - 02:00` | Screen recording alur pembayaran Midtrans Snap Gateway & penahanan dana di Escrow Wallet. | `3D isometric render of a glowing digital golden padlock protecting money wallet, green teal color scheme, clean modern fintech aesthetics` |
| **04. GIS & AI Heatmap** | `02:00 - 02:45` | Screen recording visual peta OpenStreetMap Leaflet.js & zona prediksi pemesanan *heatmap* Surabaya. | `3D interactive map overlay showing glowing red and orange heat demand circles over city buildings, high tech spatial analytics visualization` |
| **05. Closing & Call to Action** | `02:45 - 03:00` | Animasi Logo 3D KerjaKarsa dengan badge *Cepat, Aman, Terpercaya*. | `Elegant 3D glassmorphic badge logo with golden letter K emblem, floating smoothly in clean studio background with soft shadow` |

---

### 🎙️ 2. Perlengkapan & Software Editing yang Direkomendasikan
- **Screen Recording**: OBS Studio / Loom (Resolusi minimum 1080p 60fps pada browser resolution 1440x900).
- **Voiceover Narrator**: Bahasa Indonesia formal-persuasif dengan microfon kondenser/lavalier.
- **Backsound Audio**: Uplifting Corporate Tech Track (BPM 110-120, Volume 15-20% saat voiceover).
- **Video Editor**: CapCut Desktop / Premiere Pro / DaVinci Resolve.

---

## 👥 Tim Pengembang Gemastik XIX

- **Nama Tim**: Tim KerjaKarsa  
- **Kategori**: Software Development (Pengembangan Perangkat Lunak)  
- **Institusi**: Indonesia  

---
*© 2026 KerjaKarsa — Membangun Ekosistem Pekerja Informal Digital Indonesia.*
