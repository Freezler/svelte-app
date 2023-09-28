<script>
	import { onDestroy, onMount } from 'svelte';
	onMount(() => console.log('Mounted Cards page'));
	onDestroy(() => console.log('Unmounted projects page'));
</script>