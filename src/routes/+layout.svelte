<script lang="ts">
	import { Toaster } from 'svelte-hot-french-toast';
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
		<ul></ul>
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
