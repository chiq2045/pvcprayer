<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<header>
	<nav>
		<h1>PVC Prayer</h1>
		<ul>
			<li><a href="/admin/dashboard">My Prayers</a></li>
			<li><a href="/admin/list">Prayer List</a></li>
			<li>
				<form action="/admin?/logout" method="post" use:enhance>
					<button role="link" type="submit" class="logout-button">Logout</button>
				</form>
			</li>
		</ul>
	</nav>
</header>

<main class="container">
	<slot />
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
	.logout-button {
		border: 0;
	}
</style>
