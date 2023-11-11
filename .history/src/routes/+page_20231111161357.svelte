<script>
    import { onDestroy, onMount } from 'svelte';
    import MapContact from '../components/MapContact.svelte';
    import Cards from '../components/Cards.svelte';


    onMount(() => console.log('Mounted home page'));
    onDestroy(() => console.log('Unmounted home page'));
</script>

		<h1 class="-space-y-1 animate-fast-fade-in mt-[40px] mx-4 text-[clamp(2rem,5vw,8rem)] font-bold font-mono text-shadow-[2px_1px_1px_hsla(255,100%,29%,0.9)] -skew-y-3">Randy de Vries</h1>
        <main class="scroll-smooth flex flex-col w-[100%] items-center justify-center bg-gradient-to-b from-astral-200 via-gray-200 to-astral-400  ">
    <div class="scroll-smooth relative grid grid-cols-1 h-screen w-screen overflow-scroll  bg-cover bg-center bg-no-repeat pt-[150px] md:pt-20 xl:pt-20">
		<MapContact />
		<Cards />
		
	</div>
    
</main>

