<script>
	import { onDestroy, onMount } from 'svelte';
	import ColorCard from '../../components/ColorCards.svelte';

	onMount(() => console.log('Mounted Color Cards page'));
	onDestroy(() => console.log('Unmounted Color Cards page'));
</script>

<main class="scroll-p-8 flex flex-col w-screen h-screen  bg-cover bg-center bg-no-repeat p-0 m-0 place-items-center justify-items-center scroll-invisible bg-[oklch(12.5%_0.057_322.41)]">
	<div class="z-100 absolute top-0  bg-cover bg-center bg-no-repeat w-[100%] h-[100%]">	</div> 
	<ColorCard />
</main>	
