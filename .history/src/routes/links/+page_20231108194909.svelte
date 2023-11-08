<script>
	import { onDestroy, onMount } from 'svelte';
	onMount(() => console.log('Mounted Links page'));
	onDestroy(() => console.log('Unmounted Links page'));
	import ScrollBlob from '../../components/scrollBlob.svelte';
	import Accordion from '../../components/Accordion.svelte';
</script>

<main
	class="z-100 flex h-screen scroll-smooth justify-center items-top w-screen flex-col bg-gradient-to-b from-astral-900 via-gray-900 to-astral-900 overflow-scroll pb-24"
>	
<div class="flex flex-col items-center justify-center font-mono">
	<h1 class="text-5xl text-purpleone-600">Skills</h1>
	<p class="text-xs text-white underline-[">De volgende technologieën zijn gebruikt in dit project:</p>
</div>
		<Accordion />
		
</main>
