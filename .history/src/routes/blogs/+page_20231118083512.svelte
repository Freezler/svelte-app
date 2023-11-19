<script>
	import { onDestroy, onMount } from 'svelte';
	import ColorCard from '../../components/ColorCards.svelte';

	onMount(() => console.log('Mounted Color Cards page'));
	onDestroy(() => console.log('Unmounted Color Cards page'));
</script>

<main class="flex flex-col w-screen h-screen bg-[hsla()] bg-cover bg-center bg-no-repeat p-0 m-0 place-items-center justify-items-center scroll-invisible ">
	<div class="z-100 absolute top-0 bg-[url('/assets/uni.jpg')] bg-contain bg-center bg-no-repeat w-[100%] h-[100%]">jsjs	</div> 
	<ColorCard />
</main>	
