<script>
	import { onDestroy, onMount } from 'svelte';
	import MapContact from '../components/MapContact.svelte';


	onMount(() => console.log('Mounted home page'));
	onDestroy(() => console.log('Unmounted home page'));
</script>

<main class="flex flex-col w-screen h-screen -z-10">
	
	<div
		class="-z-50 h-screen w-screen overflow-hidden bg-gradient-to-b from-bluethree-900 via-bluetwo-900 to-bluetwo-300 bg-cover bg-center bg-no-repeat transition-opacity duration-300"
		>
		<MapContact />
		<C
	</div>
</main>

<style>
	
</style>
