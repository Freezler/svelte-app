<script>
	import { onDestroy, onMount } from 'svelte';
	import Hero from '../components/Hero.svelte';


	onMount(() => console.log('Mounted home page'));
	onDestroy(() => console.log('Unmounted home page'));
</script>

<main class="an -z-10">
	
	<div
		class="-z-50 h-screen w-screen overflow-hidden bg-gradient-to-b from-bluethree-900 via-bluetwo-900 to-bluetwo-300 bg-no-repeat transition-opacity duration-300"
	>
	<Hero /></div>
</main>

<style>
	
</style>
