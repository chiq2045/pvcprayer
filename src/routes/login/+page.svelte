<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<header>
	<nav>
		<h1>PVC Prayer</h1>
		<ul>
			<li><a href="/">Prayer Form</a></li>
		</ul>
	</nav>
</header>

<main class="container">
	<section>
		<article>
			<h1>Login</h1>
			<form method="post" action="?/login" use:enhance>
				<label for="email">Email (required)</label>
				<input id="email" name="email" type="email" required />
				<label for="password">Password (required)</label>
				<input id="password" name="password" type="password" required />
				<div class="actions">
					<button type="submit">Login</button>
				</div>
			</form>
		</article>
	</section>
</main>

<style>
	header {
		min-height: 64px;
		box-shadow: 0px 2px 4px slategray;
	}
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: nowrap;
		margin-left: 1rem;
		margin-right: 1rem;
	}
	nav h1 {
		font-size: x-large;
		margin: 0;
	}
	section {
		max-width: 480px;
		margin-left: auto;
		margin-right: auto;
	}
</style>
