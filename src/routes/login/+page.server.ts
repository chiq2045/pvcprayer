import { api } from '$lib/server/supabase';
import { redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	login: async ({ request }) => {
		const data = await request.formData();
		const result = await api.login(data);

		if (result.data.session) {
			throw redirect(303, '/admin/dashboard');
		}
	}
};
