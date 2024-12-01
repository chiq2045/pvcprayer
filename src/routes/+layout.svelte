<script lang="ts">
	import { Toaster } from 'svelte-hot-french-toast';
	import { env } from '$env/dynamic/public';
	import { init } from '@instantdb/core';
	import { browser } from '$app/environment';

	let loginUrl = '/';

	const db = init({
		appId: env.PUBLIC_INSTANT_APP_ID ?? ''
	});

	if (browser) {
		loginUrl = db.auth.createAuthorizationURL({
			clientName: 'PVC Prayer',
			redirectURL: `${window.location.href}/admin`
		});
	}
</script>

<header class="container">
	<nav>
		<ul>
			<li>
				<strong>
					<a href="/">PVC Prayer</a>
				</strong>
			</li>
		</ul>
		<ul>
			<li>
				<a href={loginUrl}>Admin</a>
			</li>
			<li>
				<a href="/" on:click={() => db.auth.signOut()}>Logout</a>
			</li>
		</ul>
	</nav>
</header>

<main class="container">
	<slot />
</main>

<Toaster
	position="top-end"
	toastOptions={{
		duration: Infinity
	}}
/>
