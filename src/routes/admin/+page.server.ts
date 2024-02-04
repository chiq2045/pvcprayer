import { api } from '$lib/server/supabase';
import { type Actions, type ServerLoad } from '@sveltejs/kit';

export const actions: Actions = {
	login: async ({ request }) => {
		const data = await request.formData();
		const result = await api.login(data);
		return {
			success: !result.error,
			message: result.error ? result.error.message : 'Prayer Request submitted'
		};
	}
};
