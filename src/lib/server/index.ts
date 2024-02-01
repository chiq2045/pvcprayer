import { supabase } from './supabase';

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
