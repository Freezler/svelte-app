<script>
	import { onDestroy, onMount } from 'svelte';
	import Colo

	onMount(() => console.log('Mounted Color Cards page'));
	onDestroy(() => console.log('Unmounted Color Cards page'));
</script>

<main class="flex flex-col w-screen h-screen bg-gradient-to-tr from-astral-900 via-gray-900 to-astral-900">
	
	<ColorCards />
</main>	
