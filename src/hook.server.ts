import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// Handlie incoming request

	// Resolve event
	const response = await resolve(event);

	// Return response
	return response;
};
