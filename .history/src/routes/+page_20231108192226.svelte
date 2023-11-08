<script>
	import { onDestroy, onMount } from 'svelte';

	onMount(() => console.log('Mounted home page'));
	onDestroy(() => console.log('Unmounted home page'));
</script>

<main class="-z-10 flex h-screen w-screen flex-col">
	<div
		class="-z-50 h-screen w-screen overflow-hidden bg-gradient-to-b from-bluethree-900 via-bluetwo-900 to-bluetwo-300 bg-no-repeat transition-opacity duration-300"
	>
		<MapContact />
	</div>
</main>

<style>
</style>
