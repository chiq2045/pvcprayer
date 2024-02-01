<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<h1>Prayer Form</h1>
<details>
	<summary>More information about the Prayer Form</summary>
	<p>
		Submit a prayer request by filling in the form below. Enter your name and email address if you
		would like us to follow up on your requested prayer.
	</p>
	<p><em>We only use your information to contact you with respect to your requested prayers</em></p>
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

<style>
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
