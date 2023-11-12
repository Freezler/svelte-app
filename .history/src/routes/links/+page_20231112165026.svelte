<script>
	onMount(() => console.log('Mounted Links page'));
	onDestroy(() => console.log('Unmounted Links page'));
	import { onDestroy, onMount } from 'svelte';
	import CijferlijstInput from '../../components/CijferlijstInput.svelte';
	import Accordion from '../../components/Accordion.svelte';
	
</script>

<main
	class=" z-100 grid grid-cols-1 h-screen scroll-smooth plw-screen flex-col bg-gradient-to-b from-astral-900 via-gray-900 to-astral-900 overflow-scroll pb-24"
>	
<div class="grid grid-cols-1 place-content-centerx	text-center w-[100%] items-center justify-center font-sans h-screen ">
	<h1 class="animate-slow-slide-down text-3xl sm:text-5xl md:text-6xl xl:8xl text-purpleone-300  ">Perpetual Learning!</h1>
	<p class="animate-slow-slide-up text-xs sm:text-[16px] md:text-xl xl:2xl text-white border-b-[1px]  border-purpleone-300 text-purpleone600">For this project i'm using the following languages and frameworks:</p>
	<Accordion />
</div>
<div class="flex flex-col w-[100%] items-center justify-center">
	 <h3 class="text-3xl sm:text-5xl md:text-6xl xl:8xl text-purpleone-300 pb-[40px]">CijferLijst check</h3>
		<CijferlijstInput />
	</div>
</main>
