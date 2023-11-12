<script>
    import { onDestroy, onMount } from 'svelte';
    import Cards from '../components/Cards.svelte';
	import Header from '../components/Header.svelte';


    onMount(() => console.log('Mounted home page'));
    onDestroy(() => console.log('Unmounted home page'));
</script>

<main class="scroll-smooth flex gap-4 flex-col w-[100%] h-screen items-center overflow-scroll justify-center bg-gradient-to-b from-astral-200 via-gray-200 to-astral-400 bg-cover ">
    <div class="scroll-smooth relative grid grid-cols-1 h-[100%] w-screen overflow-scroll  bg-cover bg-center bg-no-repeat pt-[220px] sm:pt-[130px] md:pt-[70px] lg:pt-[80px] xl:pt-40 xxl:pt-40">
		<Header />
        <!-- <div class="container  w-[100%]  ">
            <div class="flex flex-col mt-32  py-44 items-center justify-center text-center w-screen h-full bg-gradient-to-b from-astral-900 via-gray-900 to-astral-900 bg-opacity-10"><p class="w-[70%] text-white">
                Hi and Welcome to my website! scroll down for a small introduction in to the world of web development.
            </p></div>
        </div> -->
		<Cards />
		
	</div>
    
</main>

