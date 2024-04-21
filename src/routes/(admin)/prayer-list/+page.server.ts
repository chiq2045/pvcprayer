import type { ServerLoad } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { api } from '$lib/server/supabase';

export const load: PageServerLoad = async () => {
	const data = await api.getPrayers();
	return {
		prayers: data.data ?? []
	};
};
