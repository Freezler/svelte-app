<script>
	import { onDestroy, onMount } from 'svelte';
	import ColorCards from '/Users/randydevries/Code/Svelte/svelte-app/src/components/ColorCards.svelte';

	onMount(() => console.log('Mounted Color Cards page'));
	onDestroy(() => console.log('Unmounted Color Cards page'));
</script>

<main>
	
	<ColorCards />
</main>
