<script>
	import { onDestroy, onMount } from 'svelte';
	import ScrollBlob from '../../components/scrollBlob.svelte';
	onMount(() => console.log('Mounted projects page'));
	onDestroy(() => console.log('Unmounted projects page'));
</script>
	
	<div id="container" class=" mb-8 relative   w-[100%]  font-sans h-[100vh] ">
		<h1 class="text-red-200 animate-slow-slide-down text-3xl sm:text-5xl md:text-6xl xl:8xl">randy</h1>
		<ScrollBlob />
	</div>

