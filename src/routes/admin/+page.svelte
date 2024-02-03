<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<main>
	<article>
		<h1>Login</h1>
		<form method="post" use:enhance>
			<label for="email">Email</label>
			<input id="email" name="email" type="email" />
			<label for="password">Password</label>
			<input id="password" name="password" type="password" />
			<div class="actions">
				<button type="submit">Login</button>
			</div>
		</form>
	</article>
</main>
