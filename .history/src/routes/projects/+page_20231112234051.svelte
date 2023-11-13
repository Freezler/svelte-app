<script>
	import { onDestroy, onMount } from 'svelte';
	import ScrollBlob from '../../components/scrollBlob.svelte';
	onMount(() => console.log('Mounted projects page'));
	onDestroy(() => console.log('Unmounted projects page'));
</script>
	
	<div id="container" class=" mb-8 absolute t w-[100vw]  font-sans h-[100vh] ">
		<ScrollBlob />
	</div>

