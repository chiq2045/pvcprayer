import { env } from '$env/dynamic/private';
import type { Database } from '$lib/types/supabase';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient<Database>(env.SUPABASE_URL, env.SUPABASE_API);

export const api = {
	insertPrayer: async (data: FormData) => {
		const name = data.get('name') as string | undefined;
		const email = data.get('email') as string | undefined;
		const prayerRequest = data.get('prayer_request') as string;
		return await supabase.from('prayers').insert([
			{
				name: name,
				email: email,
				prayer_request: prayerRequest
			}
		]);
	},
	login: async (data: FormData) => {
		const email = data.get('email') as string;
		const password = data.get('password') as string;
		return await supabase.auth.signInWithPassword({
			email,
			password
		});
	},
	logout: async () => {
		return await supabase.auth.signOut();
	},
	getSession: async () => {
		return await supabase.auth.getSession();
	}
};
