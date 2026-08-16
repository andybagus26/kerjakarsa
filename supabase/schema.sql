-- =======================================================
-- KERJAKARSA GEMASTIK XIX - SUPABASE POSTGRESQL & POSTGIS SCHEMA
-- =======================================================

-- Aktifkan ekstensi PostGIS untuk perhitungan geografis spasial
CREATE EXTENSION IF NOT EXISTS postgis;

-- 1. TABEL MITRA PEKERJA (WORKERS)
CREATE TABLE IF NOT EXISTS public.workers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    service_title VARCHAR(255) NOT NULL,
    hourly_rate NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
    daily_rate NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
    rating NUMERIC(3, 2) DEFAULT 4.90,
    review_count INTEGER DEFAULT 0,
    location_name VARCHAR(255) NOT NULL,
    location_point GEOGRAPHY(POINT, 4326),
    latitude DOUBLE PRECISION,
    longitude DOUBLE PRECISION,
    status VARCHAR(50) DEFAULT 'AVAILABLE', -- AVAILABLE, BUSY, OFF
    bio TEXT,
    skills TEXT[],
    is_verified BOOLEAN DEFAULT TRUE,
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Index spasial untuk pencarian jarak terdekat (KNN GIS Query)
CREATE INDEX IF NOT EXISTS idx_workers_location ON public.workers USING GIST (location_point);

-- 2. TABEL PESANAN & ESCROW WALLET (ORDERS)
CREATE TABLE IF NOT EXISTS public.orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_number VARCHAR(50) UNIQUE NOT NULL,
    client_name VARCHAR(255) NOT NULL,
    client_phone VARCHAR(50),
    worker_id UUID REFERENCES public.workers(id) ON DELETE SET NULL,
    worker_name VARCHAR(255) NOT NULL,
    service_name VARCHAR(255) NOT NULL,
    amount NUMERIC(12, 2) NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'PENDING_PAYMENT', -- PENDING_PAYMENT, ESCROW_LOCKED, IN_PROGRESS, COMPLETED, CANCELLED
    midtrans_transaction_id VARCHAR(255),
    midtrans_snap_token VARCHAR(255),
    payment_method VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. TABEL DEMAND HEATMAP (AI PREDICTIVE ZONES)
CREATE TABLE IF NOT EXISTS public.demand_heatmaps (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    zone_name VARCHAR(255) NOT NULL,
    latitude DOUBLE PRECISION NOT NULL,
    longitude DOUBLE PRECISION NOT NULL,
    radius_meters INTEGER DEFAULT 1500,
    order_intensity INTEGER DEFAULT 10,
    risk_level VARCHAR(50) DEFAULT 'HIGH', -- HIGH, MEDIUM, LOW
    ai_predicted_peak VARCHAR(100),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable Supabase Realtime pada tabel workers & orders
ALTER PUBLICATION supabase_realtime ADD TABLE public.workers;
ALTER PUBLICATION supabase_realtime ADD TABLE public.orders;

-- SEED DATA AWAL MITRA PEKERJA
INSERT INTO public.workers (name, category, service_title, hourly_rate, daily_rate, rating, review_count, location_name, latitude, longitude, status, skills, bio) VALUES
('Budi Santoso', 'Kelistrikan', 'Spesialis Listrik & Perbaikan AC', 45000, 250000, 4.98, 128, 'Jakarta Selatan', -6.2615, 106.8106, 'AVAILABLE', ARRAY['Servis AC', 'Instalasi Listrik', 'Pompa Air'], 'Teknisi profesional berpengalaman 8 tahun dalam instalasi listrik dan AC.'),
('Siti Rahmawati', 'Pembersihan', 'Layanan ART & Deep Cleaning', 35000, 180000, 4.95, 94, 'Surabaya Pusat', -7.2575, 112.7521, 'AVAILABLE', ARRAY['Deep Cleaning', 'Cuci Sofa', 'ART Harian'], 'Penyedia jasa kebersihan rumah tangga terpercaya dengan standar kerapihan tinggi.'),
('Ahmad Fauzi', 'Perbaikan', 'Tukang Bangunan & Keramik', 50000, 280000, 4.92, 112, 'Surabaya Barat', -7.2891, 112.6756, 'AVAILABLE', ARRAY['Tukang Bangunan', 'Pasang Keramik', 'Pengecatan'], 'Tukang bangunan serba bisa untuk renovasi kecil hingga skala besar.');
