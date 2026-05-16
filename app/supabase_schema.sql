-- ============================================
-- DINOQUEST — ESQUEMA COMPLETO PARA SUPABASE
-- ============================================

-- Extensión para cálculos geográficos
CREATE EXTENSION IF NOT EXISTS postgis;

-- 1. USUARIOS
CREATE TABLE usuarios (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  nombre TEXT NOT NULL DEFAULT 'Explorador',
  nivel INTEGER NOT NULL DEFAULT 1,
  xp_total INTEGER NOT NULL DEFAULT 0,
  perfil_ruta TEXT CHECK (perfil_ruta IN ('mammoth','toxodon','macrauchenia','megaterio')),
  es_demo BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. LUGARES TURÍSTICOS
CREATE TABLE lugares_turisticos (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  nombre TEXT NOT NULL,
  coordenadas GEOGRAPHY(POINT, 4326) NOT NULL,
  lat DOUBLE PRECISION NOT NULL,
  lng DOUBLE PRECISION NOT NULL,
  descripcion TEXT,
  emoji TEXT DEFAULT '📍',
  categoria TEXT CHECK (categoria IN ('vinedo','paisaje','cultural','turistico')),
  dato_curioso TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 3. MISIONES
CREATE TABLE misiones (
  id SERIAL PRIMARY KEY,
  lugar_id INTEGER NOT NULL REFERENCES lugares_turisticos(id),
  nombre TEXT NOT NULL,
  descripcion TEXT,
  emoji TEXT DEFAULT '🎯',
  xp_recompensa INTEGER NOT NULL DEFAULT 50,
  accesorio_id INTEGER,
  orden INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 4. ACCESORIOS
CREATE TABLE accesorios (
  id SERIAL PRIMARY KEY,
  nombre TEXT NOT NULL,
  emoji TEXT NOT NULL,
  tipo TEXT NOT NULL CHECK (tipo IN ('hat','neck','bg','weapon')),
  costo_xp INTEGER NOT NULL DEFAULT 0,
  color TEXT,
  lugar_nombre TEXT,
  descripcion TEXT,
  url_asset TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- FK diferida de misiones → accesorios
ALTER TABLE misiones
  ADD CONSTRAINT fk_misiones_accesorio
  FOREIGN KEY (accesorio_id) REFERENCES accesorios(id);

-- 5. PROGRESO DE MISIONES
CREATE TABLE progreso_misiones (
  id BIGSERIAL PRIMARY KEY,
  usuario_id UUID NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
  mision_id INTEGER NOT NULL REFERENCES misiones(id),
  completada BOOLEAN NOT NULL DEFAULT false,
  lat_claim DOUBLE PRECISION,
  lng_claim DOUBLE PRECISION,
  fecha TIMESTAMPTZ NOT NULL DEFAULT now(),
  validada BOOLEAN NOT NULL DEFAULT false,
  UNIQUE(usuario_id, mision_id)
);

-- 6. INVENTARIO DE MASCOTA
CREATE TABLE inventario_mascota (
  id BIGSERIAL PRIMARY KEY,
  usuario_id UUID NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
  accesorio_id INTEGER NOT NULL REFERENCES accesorios(id),
  equipado BOOLEAN NOT NULL DEFAULT false,
  desbloqueado_en TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(usuario_id, accesorio_id)
);

-- 7. DESCUENTOS
CREATE TABLE descuentos (
  id BIGSERIAL PRIMARY KEY,
  usuario_id UUID NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
  mision_id INTEGER REFERENCES misiones(id),
  codigo TEXT NOT NULL,
  comercio TEXT NOT NULL,
  tipo TEXT,
  porcentaje INTEGER NOT NULL DEFAULT 10,
  usado BOOLEAN NOT NULL DEFAULT false,
  expira_en TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Índices
CREATE INDEX idx_progreso_usuario ON progreso_misiones(usuario_id);
CREATE INDEX idx_inventario_usuario ON inventario_mascota(usuario_id);
CREATE INDEX idx_descuentos_usuario ON descuentos(usuario_id);
CREATE INDEX idx_lugares_coordenadas ON lugares_turisticos USING GIST(coordenadas);

-- ========================================
-- RLS
-- ========================================
ALTER TABLE usuarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE progreso_misiones ENABLE ROW LEVEL SECURITY;
ALTER TABLE inventario_mascota ENABLE ROW LEVEL SECURITY;
ALTER TABLE descuentos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "usuarios_select_own" ON usuarios FOR SELECT USING (auth.uid() = id);
CREATE POLICY "usuarios_update_own" ON usuarios FOR UPDATE USING (auth.uid() = id) WITH CHECK (auth.uid() = id);
CREATE POLICY "progreso_select_own" ON progreso_misiones FOR SELECT USING (auth.uid() = usuario_id);
CREATE POLICY "inventario_select_own" ON inventario_mascota FOR SELECT USING (auth.uid() = usuario_id);
CREATE POLICY "descuentos_select_own" ON descuentos FOR SELECT USING (auth.uid() = usuario_id);

ALTER TABLE lugares_turisticos ENABLE ROW LEVEL SECURITY;
ALTER TABLE misiones ENABLE ROW LEVEL SECURITY;
ALTER TABLE accesorios ENABLE ROW LEVEL SECURITY;

CREATE POLICY "lugares_read_all" ON lugares_turisticos FOR SELECT USING (true);
CREATE POLICY "misiones_read_all" ON misiones FOR SELECT USING (true);
CREATE POLICY "accesorios_read_all" ON accesorios FOR SELECT USING (true);

-- ================================================
-- FUNCIÓN RPC: completar_mision
-- ================================================
CREATE OR REPLACE FUNCTION completar_mision(
  p_mision_id INTEGER,
  p_lat DOUBLE PRECISION,
  p_lng DOUBLE PRECISION
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_user_id UUID := auth.uid();
  v_lugar RECORD;
  v_mision RECORD;
  v_distancia DOUBLE PRECISION;
  v_radio_metros CONSTANT DOUBLE PRECISION := 300;
  v_ya_completada BOOLEAN;
BEGIN
  SELECT m.*, l.lat AS lugar_lat, l.lng AS lugar_lng, l.coordenadas
  INTO v_mision FROM misiones m JOIN lugares_turisticos l ON l.id = m.lugar_id WHERE m.id = p_mision_id;

  IF NOT FOUND THEN RETURN jsonb_build_object('ok', false, 'error', 'Misión no encontrada'); END IF;

  SELECT EXISTS(SELECT 1 FROM progreso_misiones WHERE usuario_id = v_user_id AND mision_id = p_mision_id AND completada = true) INTO v_ya_completada;
  IF v_ya_completada THEN RETURN jsonb_build_object('ok', false, 'error', 'Misión ya completada'); END IF;

  SELECT ST_Distance(v_mision.coordenadas, ST_SetSRID(ST_MakePoint(p_lng, p_lat), 4326)::geography) INTO v_distancia;

  IF v_distancia > v_radio_metros THEN
    RETURN jsonb_build_object('ok', false, 'error', 'Demasiado lejos', 'distancia_m', round(v_distancia::numeric, 0));
  END IF;

  INSERT INTO progreso_misiones (usuario_id, mision_id, completada, lat_claim, lng_claim, validada)
  VALUES (v_user_id, p_mision_id, true, p_lat, p_lng, true)
  ON CONFLICT (usuario_id, mision_id) DO UPDATE SET completada = true, fecha = now(), validada = true, lat_claim = p_lat, lng_claim = p_lng;

  IF v_mision.accesorio_id IS NOT NULL THEN
    INSERT INTO inventario_mascota (usuario_id, accesorio_id, equipado) VALUES (v_user_id, v_mision.accesorio_id, false) ON CONFLICT DO NOTHING;
  END IF;

  UPDATE usuarios SET xp_total = xp_total + v_mision.xp_recompensa, nivel = ((xp_total + v_mision.xp_recompensa) / 100) + 1, updated_at = now() WHERE id = v_user_id;

  RETURN jsonb_build_object('ok', true, 'xp_ganado', v_mision.xp_recompensa, 'accesorio_id', v_mision.accesorio_id, 'distancia_m', round(v_distancia::numeric, 0));
END;
$$;
