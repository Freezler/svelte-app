<script>
	import { onDestroy, onMount } from 'svelte';
	import Campfire from '../../components/Campfire.svelte';
	onMount(() => console.log('Mounted projects page'));
	onDestroy(() => console.log('Unmounted projects page'));
</script>

<main class="animate-slow-fade-in">
	<h1>welkom</h1>
	<Campfire />

</main>
