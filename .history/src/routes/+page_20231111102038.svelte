<script>
    import { onDestroy, onMount } from 'svelte';
    import MapContact from '../components/MapContact.svelte';
    import Cards from '../components/Cards.svelte';


    onMount(() => console.log('Mounted home page'));
    onDestroy(() => console.log('Unmounted home page'));
</script>

<main class="scroll-smooth flex flex-col w-[100%] items-center justify-c e font-sans  ">
    <div class=" relative grid grid-cols-1 bg-gradient-to-tr from-astral-400 via-purpleone-450 to-bluethree-450 h-screen w-screen overflow-scroll  bg-cover bg-center bg-no-repeat pt-[150px] md:pt-20 xl:pt-20">
		<MapContact />
		<Cards />
		
	</div>
    
</main>

