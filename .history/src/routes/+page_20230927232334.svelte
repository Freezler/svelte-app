<script>
	import { onDestroy, onMount } from 'svelte';
	import ImgOverlay from '../components/Img-overlay.svelte';
	import Cards from '../components/Cards.svelte';
	import ScrollBlob from '../components/scrollBlob.svelte';
	onMount(() => console.log('Mounted home page'));
	onDestroy(() => console.log('Unmounted home page'));
</script>


<main class="mx-auto mt-10 w-full max-w-sm rounded-md border border-gray-300 p-4 translate-y-72">
<ImgOverlay />
</main>
