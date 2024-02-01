import { env } from '$env/dynamic/private';
import type { Database } from '$lib/types/supabase';
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient<Database>(env.SUPABASE_URL, env.SUPABASE_API);
