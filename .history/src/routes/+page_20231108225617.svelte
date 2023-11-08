<script>
	import { onDestroy, onMount } from 'svelte';
	import MapContact from '../components/MapContact.svelte';
	import Cards from '../components/Cards.svelte';


	onMount(() => console.log('Mounted home page'));
	onDestroy(() => console.log('Unmounted home page'));
</script>

<main class="flex flex-col w-screen h-full -z-10">
	
	<div
		class="flex	flex-col items-center justify-center -z-50 h-screen w-screen overflow-scroll bg-gradient-to-b from-gray-900 to-astral-200 bg-cover bg-center bg-no-repeat "
		>
		<MapContact />
		<div class="flex flex-col items-center justify-center mt-4">
		<Cards />
	</div>
	</div>
</main>

<style>
	
</style>
