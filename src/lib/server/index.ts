import { env } from '$env/dynamic/private';
import { id, init_experimental } from '@instantdb/admin';
import schema from '../../../instant.schema';
import { init } from '@instantdb/core';

const db = init_experimental({
	appId: env.INSTANT_APP_ID,
	adminToken: env.INSTANT_APP_ADMIN_TOKEN,
	schema
});

export const api = {
	createPrayer: async (data: FormData) => {
		const createdDate = new Date();
		const name = data.get('name') as string | undefined;
		const email = data.get('email') as string | undefined;
		const prayerRequest = data.get('prayer_request') as string | undefined;
		return await db.transact([
			db.tx.prayers[id()].update({
				name,
				email,
				answered: false,
				inserted_at: createdDate.toISOString(),
				prayer_request: prayerRequest
			})
		]);
	}
};
