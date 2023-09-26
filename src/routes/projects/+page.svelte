<script>
	import { onDestroy, onMount } from 'svelte';
	onMount(() => console.log('Mounted projects page'));
	onDestroy(() => console.log('Unmounted projects page'));
</script>

<main class="h-screen flex flex-col items-center justify-center">
	<div class="flex flex-col  h-[screen] items-center justify-center">
	<h1>Projects Page</h1>
	<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg  animate-slow-fade-in transition duration-300 ease-in-out">
  Klik hier
</button>
</div>
</main>
