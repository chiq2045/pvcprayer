import { api } from '$lib/server/supabase';
import type { Handle } from '@sveltejs/kit';

function redirect(location: string, body?: string) {
	return new Response(body, {
		status: 303,
		headers: { location }
	});
}

const unprotectedRoutes = ['/', '/login'];

export const handle: Handle = async ({ event, resolve }) => {
	// Handlie incoming request
	const session = await api.getSession();
	if (!session.data.session && !unprotectedRoutes.includes(event.url.pathname)) {
		return redirect('/login', 'User not authenticated');
	}

	if (session.data.session && event.url.pathname === '/login') {
		return redirect('/admin/', 'User authenticated');
	}

	event.locals.session = session.data.session;
	event.locals.error = session.error;

	// Resolve event
	const response = await resolve(event);

	// Return response
	return response;
};
