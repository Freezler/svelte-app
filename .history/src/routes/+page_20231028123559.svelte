<script>
	import { onDestroy, onMount } from 'svelte';
	import ImgOverlay from '../components/Img-overlay.svelte';
	
	
	onMount(() => console.log('Mounted home page'));
	onDestroy(() => console.log('Unmounted home page'));
</script>

<main class="-z-10w-screen h-screen bg-gradient-to-tr from-astral-900 via-gray-900 to-astral-900">
	<slot />
</main>
<!-- <ImgOverlay /> -->

