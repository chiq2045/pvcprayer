<script lang="ts">
	import toast from 'svelte-hot-french-toast';
	import { applyAction, enhance } from '$app/forms';
</script>

<div class="centered-form">
	<form
		method="post"
		action="?/create"
		use:enhance={() => {
			return async ({ result, update }) => {
				switch (result.type) {
					case 'success':
						toast.success('Your Prayer Request has been submitted');
						update();
						break;
					case 'failure':
					case 'error':
						toast.error('Something went wrong. Your Prayer Request was not submitted');
						break;
					default:
						update();
						applyAction(result);
				}
			};
		}}
	>
		<h1>Prayer Form</h1>
		<details>
			<!-- svelte-ignore a11y-no-redundant-roles -->
			<summary role="button" class="secondary">More information about the Prayer Form</summary>
			<p>
				Submit a prayer request by filling in the form below. Enter your name and email address if
				you would like us to follow up on your requested prayer.
			</p>
			<p>
				<em>We only use your information to contact you with respect to your requested prayers</em>
			</p>
			<p>For anonymous prayers, leave contact information (Name and Email) blank.</p>
		</details>
		<label>
			Name (optional)
			<input type="text" name="name" autocomplete="name" />
		</label>
		<label>
			Email (optional)
			<input type="email" name="email" autocomplete="email" />
		</label>
		<label>
			Prayer Requres (required)
			<textarea name="prayer_request" required></textarea>
		</label>
		<button type="submit">Submit</button>
	</form>
</div>

<style>
	.centered-form {
		max-width: 510px;
		margin: auto;
	}
</style>
