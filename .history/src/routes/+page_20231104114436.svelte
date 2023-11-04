<script>
	import { onDestroy, onMount } from 'svelte';
	import Hero from '../components/Hero.svelte';
	import Avatar from 'svelte-avatar';

	onMount(() => console.log('Mounted home page'));
	onDestroy(() => console.log('Unmounted home page'));
</script>

<main class="an -z-10">
	
	<div
		class="-z-50 h-screen w-screen overflow-hidden bg-gradient-to-tr from-blueone-300 via-gray-300 to-blueone-900 bg-no-repeat transition-opacity duration-300"
	>
	<Hero /><Avatar</div>
</main>

<style>
	
</style>
