<script lang="ts">
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import '../app.css';
	let { children } = $props();

	let showMenu = $state(false);
	const toggleShowMenu = () => {
		showMenu = !showMenu;
	};
</script>

<header class="mb-2 p-3">
	<nav>
		<div class="flex flex-nowrap items-center justify-between">
			<div>
				<a href="/">
					<strong>PVC</strong> Prayer
				</a>
			</div>
			<div class="flex justify-end max-sm:hidden">
				<ul>
					<li>
						<a href="/login">Admin</a>
					</li>
				</ul>
			</div>
			<div class="relative inline-block min-sm:hidden">
				<button onclick={toggleShowMenu}>
					{#if showMenu}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-6"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
						</svg>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					{/if}
					<span class="sr-only">Open Menu</span>
				</button>
				<div
					class={`${showMenu ? 'block' : 'hidden'} absolute -right-0 z-1 min-w-40 rounded-md bg-white shadow-md`}
				>
					<ul>
						<li class="p-1 px-2">
							<a href="/login">Admin</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</header>

<main class="p-3 pt-0">
	{@render children()}
</main>

<SvelteToast
	options={{
		duration: 20000
	}}
/>
