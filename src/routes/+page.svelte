<script lang="ts">
	import { enhance } from '$app/forms';
	import toast from 'svelte-french-toast';
	// import { toast } from '@zerodevx/svelte-toast';
	export let form: { success: boolean; message: string } | null;

	$: if (form && form.success) {
		toast.success(form.message);
	}
	$: if (form && !form.success) {
		toast.error(form.message);
	}
</script>

<header>
	<nav>
		<h1>PVC Prayer</h1>
		<ul>
			<li><a href="/login">Login as Admin</a></li>
		</ul>
	</nav>
</header>

<main class="container">
	<article>
		<h1>Prayer Form</h1>
		<details>
			<!-- svelte-ignore a11y-no-redundant-roles -->
			<summary role="button" class="secondary">
				<span class="fa fa-info" />
				More information about the Prayer Form
			</summary>
			<p>
				Submit a prayer request by filling in the form below. Enter your name and email address if
				you would like us to follow up on your requested prayer.
			</p>
			<p>
				<em>We only use your information to contact you with respect to your requested prayers</em>
			</p>
			<p>For anonymous prayers, leave contact information (Name and Email) blank.</p>
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
	</article>
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
	article {
		max-width: var(--breakpoint-sm);
		margin-left: auto;
		margin-right: auto;
	}
</style>
