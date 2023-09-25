<script>
	import { onDestroy, onMount } from 'svelte';
	import ImgOverlay from '../components/Img-overlay.svelte';
	import Cards from '../components/Cards.svelte';
	onMount(() => console.log('Mounted home page'));
	onDestroy(() => console.log('Unmounted home page'));
</script>

<main class="flex flex-col  wrap m-0 p-0">
	<ImgOverlay />
	<Cards />
</main>
