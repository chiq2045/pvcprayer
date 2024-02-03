import { env } from '$env/dynamic/private';
import type { Database } from '$lib/types/supabase';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient<Database>(env.SUPABASE_URL, env.SUPABASE_API);

export const api = {
  insertPrayer: async (data: FormData) => {
    const name = data.get('name') as string | undefined;
    const email = data.get('email') as string | undefined;
    const prayerRequest = data.get('prayer_request') as string | undefined;
    await supabase.from('prayers').insert([
      {
        name: name as string | undefined,
        email: email as string | undefined,
        prayer_request: prayerRequest as string
      }
    ]);
  }
};
