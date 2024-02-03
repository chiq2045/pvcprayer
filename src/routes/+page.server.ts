import { api } from '$lib/supabase';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		await api.insertPrayer(data);
	}
};
