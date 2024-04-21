<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<div class="u-center">
	<div class="card p-2 max-w-xs">
		<h1>Logout</h1>
		<form method="post" action="?/logout" use:enhance>
			<p>Do you really want to logout?</p>
			<div class="u-center">
				<button type="submit" class="btn-info">Logout</button>
			</div>
		</form>
	</div>
</div>
