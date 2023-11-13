<script>
	import { onDestroy, onMount } from 'svelte';
	import ScrollBlob from '../../components/scrollBlob.svelte';
	onMount(() => console.log('Mounted projects page'));
	onDestroy(() => console.log('Unmounted projects page'));
</script>
	
	<div id="container" class=" mb-8 relative   w-[100]  font-sans h-[100vh] ">
		<ScrollBlob />
	</div>

