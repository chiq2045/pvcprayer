<script lang="ts">
	import { Toaster } from 'svelte-french-toast';
	import 'cirrus-ui';
	import { page } from '$app/stores';

	export let data;
</script>

<header class="header u-unselectable header-animated">
	<div class="header-brand">
		<div class="nav-item no-hover">
			<a href="/"><h1 class="title text-lg">PVC Prayer</h1></a>
		</div>
		<div class="nav-item nav-btn" id="header-btn">
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>
	<nav class="header-nav" id="header-menu">
		<div class="nav-left">
			<div class={`nav-item${$page.url.pathname === '/new' ? ' active' : ''}`}>
				<a href="/new">New Prayer</a>
			</div>
		</div>
		<div class="nav-right">
			{#if data.isLoggedIn}
				<div class={`nav-item${$page.url.pathname === '/dashboard' ? ' active' : ''}`}>
					<a href="/dashboard">Dashboard</a>
				</div>
				<div class={`nav-item${$page.url.pathname === '/prayer-list' ? ' active' : ''}`}>
					<a href="/prayer-list">Prayer List</a>
				</div>
				<div class={`nav-item${$page.url.pathname === '/logout' ? ' active' : ''}`}>
					<a href="/logout">Log out</a>
				</div>
			{:else}
				<div class={`nav-item${$page.url.pathname === '/login' ? ' active' : ''}`}>
					<a href="/login">Login as Admin</a>
				</div>
			{/if}
		</div>
	</nav>
</header>

<main>
	<section>
		<div class="content">
			<slot />
		</div>
	</section>
</main>
<Toaster />
