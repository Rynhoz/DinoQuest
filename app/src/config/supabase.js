import { createClient } from '@supabase/supabase-js';

// En desarrollo podemos usar variables vacías si no hay .env (para UI testing)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://mock.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'mock-key';

export const supabase = createClient(supabaseUrl, supabaseKey);
