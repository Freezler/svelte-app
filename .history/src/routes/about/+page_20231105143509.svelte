<script>
	const name = 'Randy';
	import { onDestroy, onMount } from 'svelte';
	import Campfire from '../../components/Campfire.svelte';
	onMount(() => console.log('Mounted Campfire page'));
	onDestroy(() => console.log('Unmounted Campfire page'));
</script>

<main class="flex flex-col h- left-0 right-0 justify-center items-center  bg-gradient-to-tr from-astral-900 via-gray-900 to-astral-900">
 <Campfire />
</main>
