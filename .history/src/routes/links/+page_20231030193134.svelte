<script>
	import { onDestroy, onMount } from 'svelte';
	onMount(() => console.log('Mounted Links page'));
	onDestroy(() => console.log('Unmounted Links page'));
	import ScrollBlob from '../../components/scrollBlob.svelte';
</script>
<main class="flex flex-col w-screen h-screen bg-gradient-to-tr from-astral-900 via-gray-900 to-astral-900">
<div class="flex flex-col items-start justify-center">
<ScrollBlob/>
</div>
</main>
</main>