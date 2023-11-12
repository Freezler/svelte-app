<script>
    import { onDestroy, onMount } from 'svelte';
    import Cards from '../components/Cards.svelte';
	import Header from '../components/Header.svelte';


    onMount(() => console.log('Mounted home page'));
    onDestroy(() => console.log('Unmounted home page'));
</script>

<main class="scroll-smooth flex gap-4 flex-col w-[100%] h-screen items-center overflow-scroll justify-center bg-gradient-to-b from-astral-950 via-gray-950 to-greyo bg-cover ">
    <div class="scroll-smooth relative grid grid-cols-1 h-[100%] w-screen overflow-scroll  bg-cover bg-center bg-no-repeat pt-[220px] sm:pt-[130px] md:pt-[70px] lg:pt-[70px] xl:pt-[80px] xxl:pt-40">
		<Header />
        <div class="grid grid-cols-1 w-screen h-[200px] translate-y-[50px]">
            <div class="grid grid-cols-1 place-content-start justify-items-center text-center"><p class="w-[66%] font-mono text-blueone-950 text-sm sm:text-xl  mt-[0px] xs:mt-[100px] md:mt-[162px] lg:md:text-2xl lg:text-3xl xl:text-4xl xxl:text-5xl">
                Hi and Welcome to my website! scroll down for a small introduction in to the world of web development.
            </p></div>
        </div>
		<Cards />
		
	</div>
    
</main>

