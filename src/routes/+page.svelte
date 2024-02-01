<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<header>
	<nav>
		<h1 class="logo">PVC Prayer</h1>
		<ul class="nav-items">
			<li class="nav-item"><a href="/admin">Admin</a></li>
		</ul>
	</nav>
</header>

<main class="main">
	<h1>Prayer Form</h1>
	<details>
		<summary>More information about the Prayer Form</summary>
		<p>
			Submit a prayer request by filling in the form below. Enter your name and email address if you
			would like us to follow up on your requested prayer.
		</p>
		<p>
			<em>We only use your information to contact you with respect to your requested prayers</em>
		</p>
		<p>For anonymous prayers, leave the contact information blank.</p>
	</details>
	<form method="post" use:enhance>
		<label>
			Name (optional)
			<input type="text" name="name" autocomplete="off" />
		</label>
		<label>
			Email (optional)
			<input type="email" name="email" autocomplete="off" />
		</label>
		<label>
			Prayer Request (required)
			<textarea name="prayer_request" required />
		</label>
		<div class="actions">
			<button type="submit">Submit</button>
		</div>
	</form>
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
	nav ul {
		list-style-type: none;
		padding: 0px;
		margin: 0;
	}
	main {
		max-width: var(--breakpoint-sm);
		margin: auto;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.actions {
		display: flex;
		justify-content: flex-end;
	}
</style>
