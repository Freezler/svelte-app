<script>
    import { onDestroy, onMount } from 'svelte';
    import MapContact from '../components/MapContact.svelte';
    import Cards from '../components/Cards.svelte';


    onMount(() => console.log('Mounted home page'));
    onDestroy(() => console.log('Unmounted home page'));
</script>

<main class="scroll-smooth flex flex-col w-[100%] h-[screen] items-center justify-center bg-gradient-to-b from-astral-200 via-gray-200 to-astral-400 bg-cover pb-[200px] ">
    <div class="scroll-smooth relative grid grid-cols-1 h-screen w-screen overflow-scroll  bg-cover bg-center bg-no-repeat pt-[150px] md:pt-20 xl:pt-20">
		<MapContact />
		<Cards />
		
	</div>
    
</main>

