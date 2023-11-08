<script>
	import { onDestroy, onMount } from 'svelte';
	import MapContact from '../components/MapContact.svelte';


	onMount(() => console.log('Mounted home page'));
	onDestroy(() => console.log('Unmounted home page'));
</script>

<main class="flex flex-col w-screen h-screen -z-10">
	
	<div
		class="-z-50 h-screen w-screen overflow-hidden bg-gradient-to-b from-bluethree-900 via-bluetwo-900 to-bluetwo-300 bg-no-repeat transition-opacity duration-300"
		>
		<MapContact />
		<iframe src="https://giphy.com/embed/pOEbLRT4SwD35IELiQ" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/tech-technology-mograph-pOEbLRT4SwD35IELiQ">via GIPHY</a></p>
	</div>
</main>

<style>
	
</style>
