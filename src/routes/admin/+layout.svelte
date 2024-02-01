<script lang="ts">
</script>

<header>
	<nav>
		<h1 class="logo">PVC Prayer</h1>
		<!-- <ul class="nav-items"> -->
		<!-- 	<li class="nav-item"><a href="/admin"></a></li> -->
		<!-- </ul> -->
	</nav>
</header>

<main class="main">
	<slot />
</main>

<style>
	header {
		min-height: 4rem;
		box-shadow: 0px 3px 15px;
		margin: 1rem - 100%;
		margin: 1rem calc(50% - 50vw);
		margin-top: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-bottom: 3rem;
	}
	nav {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		align-items: center;
		padding-left: 2rem;
		padding-right: 2rem;
	}
	nav h1 {
		margin: 0px;
		font-size: x-large;
	}
	/*
	nav ul {
		list-style-type: none;
		padding: 0px;
		margin: 0;
	}
	*/
	main {
		max-width: var(--breakpoint-lg);
		margin: auto;
	}
</style>
