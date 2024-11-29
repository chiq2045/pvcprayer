import { api } from '$lib/server';
import type { ActionResult, Actions } from '@sveltejs/kit';

export const actions: Actions = {
	create: async ({ request }) => {
		const data = await request.formData();
		const result = await api.createPrayer(data);

		const actionResult: ActionResult = result['tx-id']
			? {
					type: 'success',
					data: result,
					status: 200
				}
			: {
					type: 'failure',
					data: result,
					status: 200
				};
		console.log(result, actionResult);
		return actionResult;
	}
};
