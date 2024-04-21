import { api } from '$lib/server/supabase';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	logout: async () => {
		await api.logout();
		redirect(303, '/');
	}
};
