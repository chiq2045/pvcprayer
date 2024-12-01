// place files you want to import through the `$lib` alias in this folder.

import { env } from '$env/dynamic/private';
import { init } from '@instantdb/core';

const db = init({
	appId: env.INSTANT_APP_ID
});

export const authUrl = db.auth.createAuthorizationURL({
	clientName: 'PVCPrayer',
	redirectURL: window.location.href
});
