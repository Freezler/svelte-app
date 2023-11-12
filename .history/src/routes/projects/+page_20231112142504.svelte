<script>
	import { onDestroy, onMount } from 'svelte';
	import 
	onMount(() => console.log('Mounted projects page'));
	onDestroy(() => console.log('Unmounted projects page'));
</script>

<main class=" z-900 flex h-screen scroll-smooth justify-center items-center w-screen flex-col bg-gradient-to-b from-astral-900 via-gray-900 to-astral-900 overflow-scroll">
	
	<div class=" mb-8 flex flex-col w-[100%] items-center justify-center font-sans h-screen ">
		<h1 class="text-red-200 animate-slow-slide-down text-3xl sm:text-5xl md:text-6xl xl:8xl">randy</h1>
	</div>
	<Campfire />

</main>
