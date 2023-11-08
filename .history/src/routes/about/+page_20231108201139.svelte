<script>
	const name = 'Randy';
	import { onDestroy, onMount } from 'svelte';
	import Campfire from '../../components/Campfire.svelte';
	onMount(() => console.log('Mounted Campfire page'));
	onDestroy(() => console.log('Unmounted Campfire page'));
</script>

<main class="flex flex-col  h-full justify-start items-center  bg-gradient-to-tr from-astral-200 via-gray-300 to-astral-500 bg-cover">
 <Campfire />
</main>
