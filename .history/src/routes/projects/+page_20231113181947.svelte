<script>
	import { onDestroy, onMount } from 'svelte';
	import ScrollBlob from '../../components/scrollBlob.svelte';
	onMount(() => console.log('Mounted projects page'));
	onDestroy(() => console.log('Unmounted projects page'));
</script>
<main class="flex flex-col w-screen h- bg-gradient-to-tr from-astral-900 via-gray-900 to-astral-900">
	<ScrollBlob />
	<slot />
</main>
