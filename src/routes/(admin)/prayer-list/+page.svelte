<script lang="ts">
	export let data;
	const { prayers } = data;
</script>

<h1>Prayer List</h1>
<ul class="no-bullets">
	{#each prayers as prayer}
		<li>
			<div class="tile u-shadow-sm p-2">
				<div class="tile__container">
					<div class="tile__title">
						{prayer.name ? prayer.name : "Anonymous"}
					</div>
					<div class="tile__subtitle">
						{prayer.prayer_request}
					</div>
				</div>
			</div>
		</li>
	{/each}
</ul>
