<script>
	import { onDestroy, onMount } from 'svelte';
	import ColorCards from '../../components/Co.svelte';

	onMount(() => console.log('Mounted Color Cards page'));
	onDestroy(() => console.log('Unmounted Color Cards page'));
</script>

<Campfire />