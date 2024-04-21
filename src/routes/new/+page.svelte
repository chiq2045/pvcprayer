<script lang="ts">
	import { enhance } from '$app/forms';
	import toast from 'svelte-french-toast';
	export let form: { success: boolean; message: string } | null;

	$: if (form && form.success) {
		toast.success(form.message);
	}
	$: if (form && !form.success) {
		toast.error(form.message);
	}
</script>

<div class="u-center">
	<div class="card p-2 max-w-xs">
		<h1>Prayer Form</h1>
		<div class="card p-2 bg-blue-100">
			<details>
				<!-- svelte-ignore a11y-no-redundant-roles -->
				<summary role="button">
					<span class="fa fa-info" />
					More information about the Prayer Form
				</summary>
				<p>
					Submit a prayer request by filling in the form below. Enter your name and email address if
					you would like us to follow up on your requested prayer.
				</p>
				<p>
					<em>
						We only use your information to contact you with respect to your requested prayers
					</em>
				</p>
				<p>For anonymous prayers, leave contact information (Name and Email) blank.</p>
			</details>
		</div>
		<form method="post" action="?/new" use:enhance id="new-prayer-form">
			<div class="input-control">
				<label class="m-0">
					Name (optional)
					<input type="text" name="name" autocomplete="off" />
				</label>
			</div>
			<div class="input-control">
				<label class="m-0">
					Email (optional)
					<input type="email" name="email" autocomplete="off" />
				</label>
			</div>
			<div class="input-control">
				<label class="m-0">
					Prayer Request (required)
					<textarea name="prayer_request" required />
				</label>
			</div>
			<div class="u-pull-right">
				<button type="submit" class="btn-info">Submit</button>
			</div>
		</form>
	</div>
</div>
