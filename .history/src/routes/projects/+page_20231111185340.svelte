<script>
	import { onDestroy, onMount } from 'svelte';
	import Campfire from '../../components/Campfire.svelte';
	onMount(() => console.log('Mounted projects page'));
	onDestroy(() => console.log('Unmounted projects page'));
</script>

<main class="animate-slow-fade-in z-900 flex h-screen scroll-smooth justify-center items-center w-screen flex-col bg-gradient-to-b from-astral-900 via-gray-900 to-astral-900 overflow-scroll">
	
	<div>
		<h1>randy</h1>
	</div>
	<Campfire />

</main>
