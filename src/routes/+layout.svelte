<script lang="ts">
	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/buttons';

	import Header from './header.svelte';
	import Footer from './footer.svelte';
	import Transition from './transition.svelte';

	import '../app.css';

	export let data;
</script>

<div class="layout">
	<Header />

	<main>
		<Transition url={data.url}>
			<slot />
		</Transition>
	</main>

	<Footer />
</div>

<style>
	.layout {
		min-height: 100%;
		max-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);
	}

	main {
		padding-block: var(--size-9);
	}
</style>
