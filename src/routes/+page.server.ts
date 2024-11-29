import { api } from '$lib/server';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	create: async ({ request }) => {
		const data = await request.formData();
		const result = await api.createPrayer(data);

		console.log(result);
	}
};
