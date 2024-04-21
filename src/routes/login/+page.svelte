<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<div class="u-center">
	<div class="card p-2 max-w-xs">
		<h1>Login</h1>
		<form method="post" action="?/login" use:enhance>
			<div class="input-control">
				<label>
					Email (required)
					<input id="email" name="email" type="email" required autocomplete="email" />
				</label>
			</div>
			<div class="input-control">
				<label>
					Password (required)
					<input
						id="password"
						name="password"
						type="password"
						required
						autocomplete="current-password"
					/>
				</label>
			</div>
			<div class="u-pull-right">
				<button type="submit" class="btn-info">Login</button>
			</div>
		</form>
	</div>
</div>
