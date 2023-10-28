<script>
	const name = 'Randy';
	import { onDestroy, onMount } from 'svelte';
	import Campfire from '../../components/Campfire.svelte';
	onMount(() => console.log('Mounted Campfire page'));
	onDestroy(() => console.log('Unmounted Campfire page'));
</script>

<main class="m-0 p-0 w-screen h-screen bg-gradient-to-tr from-astral-900 via-gray-900 to-astral-900">
 <Campfire />
</main>
