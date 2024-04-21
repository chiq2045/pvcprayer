import { api } from '$lib/server/supabase';
import { type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	new: async ({ request }) => {
		const data = await request.formData();
		const result = await api.insertPrayer(data);
		return {
			success: !result.error,
			message: result.error ? result.error.message : 'Prayer Request submitted'
		};
	}
};
