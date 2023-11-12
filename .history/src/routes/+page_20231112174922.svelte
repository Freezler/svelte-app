<script>
    import { onDestroy, onMount } from 'svelte';
    import Cards from '../components/Cards.svelte';
	import Header from '../components/Header.svelte';


    onMount(() => console.log('Mounted home page'));
    onDestroy(() => console.log('Unmounted home page'));
</script>

<main class="scroll-smooth flex gap-4 flex-col w-[100%] h-screen items-center overflow-scroll justify-center bg-gradient-to-b from-astral-950 via-gray-950 to-greyone-950 bg-cover ">
    <div class="scroll-smooth relative grid grid-cols-1 h-[100%] w-screen overflow-scroll  bg-cover bg-center bg-no-repeat pt-[220px] sm:pt-[130px] md:pt-[70px] lg:pt-[70px] xl:pt-[80px] xxl:pt-40">
		<Header />
        
        <div class="grid grid-cols-1 w-screen h-[200px] translate-y-[50px]">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            class="   mx-auto translate-y-[50px] animate-bounce"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="white"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
<path stroke="none" d="M0 0h24v24H0z" fill="none" class="bg-redone-900"/>
<path d="M6 9l6 6l6 -6" />
<path stroke="none" d="M10 9h24v24H0z" fill="none" />
<path d="M6 9l6 6l6 -6" />
            
            
        </svg>
            <div class=" antialiased grid grid-cols-1 place-content-start justify-items-center text-center"><p class="w-[66%] font-mono text-blueone-100 text-sm sm:text-xl  mt-[0px] xs:mt-[100px] md:mt-[162px] lg:md:text-2xl lg:text-3xl xl:text-4xl xxl:text-5xl">
                Hi and Welcome to my website! scroll down for a small introduction in to the world of web development.
            </p></div>
        </div>
		<Cards />
		
	</div>
    
</main>

