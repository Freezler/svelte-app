<script>
	import { onDestroy, onMount } from 'svelte';
	import ImgOverlay from '../components/Img-overlay.svelte';
	
	
	onMount(() => console.log('Mounted home page'));
	onDestroy(() => console.log('Unmounted home page'));
</script>

<main class="w-screen h">
	<slot />
</main>
<!-- <ImgOverlay /> -->

