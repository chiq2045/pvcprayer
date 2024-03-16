import { api } from '$lib/server/supabase';
import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	redirect(303, '/login');
};

export const actions: Actions = {
	logout: async () => {
		await api.logout();
		redirect(303, '/login');
	}
};
