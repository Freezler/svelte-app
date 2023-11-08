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
	<h1 class="text-3xl sm:text-5xl md:text-6xl xl:8xl text-purpleone-600">Perpetual Learning!</h1>
	<p class="text-xs sm:text-sm md:text-md xl:1xl text-white border-b-[1px] space-y-16 border-purpleone-300 text-purpleone600">For this project i'm using the following languages and frameworks:</p>
</div>
		<Accordion />
		
</main>
