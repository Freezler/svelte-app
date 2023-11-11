<script>
    import { onDestroy, onMount } from 'svelte';
    import MapContact from '../components/Header.svelte';
    import Cards from '../components/Cards.svelte';
	import Header from '../components/Header.svelte';


    onMount(() => console.log('Mounted home page'));
    onDestroy(() => console.log('Unmounted home page'));
</script>

<main class="scroll-smooth flex flex-col w-[100%] h-screen items-center overflow-scroll justify-center bg-gradient-to-b from-astral-200 via-gray-200 to-astral-400 bg-cover ">
    <div class="scroll-smooth relative grid grid-cols-1 h-[100%] w-screen overflow-scroll  bg-cover bg-center bg-no-repeat sm:pt-[20px] md:pt-[40px] lg:pt-40 xl:pt-40 xxl:pt-40">
		<Header />
        <div class="container pb-2 mt-40 ">
            <div class="flex flex-col items-center justify-center w-screen h-[5rem] bg-red-700">ha</div>
        </div>
		<Cards />
		
	</div>
    
</main>

