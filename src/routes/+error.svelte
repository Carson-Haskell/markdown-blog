<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="error">
	<h1>{$page.status}: {$page.error?.message}</h1>
</div>

<style>
	.error {
		height: 50vh;
		display: flex;
		place-content: center;
	}
</style>
