export const api = {
	createPrayer: async (data: FormData) => {
		const name = data.get('name') as string | undefined;
		const email = data.get('email') as string | undefined;
		const prayerRequest = data.get('prayer_request') as string | undefined;

		return { name, email, prayerRequest };
	}
};
