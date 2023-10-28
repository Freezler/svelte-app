<script>
	import { onDestroy, onMount } from 'svelte';
	onMount(() => console.log('Mounted Campfire page'));
	onDestroy(() => console.log('Unmounted Cards page'));
</script>

