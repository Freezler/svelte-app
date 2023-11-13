<script>
	import { onDestroy, onMount } from 'svelte';
	import ScrollBlob from '../../components/scrollBlob.svelte';
	onMount(() => console.log('Mounted projects page'));
	onDestroy(() => console.log('Unmounted projects page'));
</script>
<main class="flex flex-row w-[100vw]  h-[100vh]">
	<ScrollBlob />
	<slot />
</main>
