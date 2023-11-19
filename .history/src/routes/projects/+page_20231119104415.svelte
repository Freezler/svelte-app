<script>
	import { onDestroy, onMount } from 'svelte';
	import ScrollBlob from '../../components/scrollBlob.svelte';
	import
	onMount(() => console.log('Mounted projects page'));
	onDestroy(() => console.log('Unmounted projects page'));
</script>
<main  transition:fade={{ delay: 2, duration:500 }}
class="w-screen h-screen">
	<ScrollBlob />
	<slot />
</main>
