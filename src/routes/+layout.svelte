<header>
	<nav>
		<h1 class="logo">PVC Prayer</h1>
		<ul class="nav-items">
			<li class="nav-item"><button class="nav-button">Login</button></li>
		</ul>
	</nav>
</header>

<main class="main">
	<slot />
</main>

<style>
	header {
		min-height: 48px;
		box-shadow: 0px 2px 8px;
		margin: 1rem - 100%;
		margin: 1rem calc(50% - 50vw);
		margin-top: 0;
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
	}
	nav ul {
		list-style-type: none;
		padding: 0px;
	}
	main {
		max-width: var(--breakpoint-sm);
		margin: auto;
	}
</style>
