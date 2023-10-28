<script>
	import { onDestroy, onMount } from 'svelte';
	import 

	onMount(() => console.log('Mounted Color Cards page'));
	onDestroy(() => console.log('Unmounted Color Cards page'));
</script>

<main>
	<ColorCards />
</main>
