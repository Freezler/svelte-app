<script>
	const name = 'Randy';
	import { onDestroy, onMount } from 'svelte';
	import Campfire from '../../components/Campfire.svelte';
	onMount(() => console.log('Mounted Campfire page'));
	onDestroy(() => console.log('Unmounted Campfire page'));
</script>

<main class=" w-screen h-screen bg">
 <Campfire />
</main>
