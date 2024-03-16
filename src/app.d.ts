// See https://kit.svelte.dev/docs/types#app

import type { AuthError, Session } from '@supabase/supabase-js';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			session: Session | null;
			error: AuthError | null;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
