<script lang="ts">
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
</style>
