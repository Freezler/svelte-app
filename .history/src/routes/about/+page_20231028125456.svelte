<script>
	const name = 'Randy';
	import { onDestroy, onMount } from 'svelte';
	onMount(() => console.log('Mounted Campfire page'));
	onDestroy(() => console.log('Unmounted about page'));
</script>


