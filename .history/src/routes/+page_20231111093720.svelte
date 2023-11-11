<script>
    import { onDestroy, onMount } from 'svelte';
    import MapContact from '../components/MapContact.svelte';
    import Cards from '../components/Cards.svelte';


    onMount(() => console.log('Mounted home page'));
    onDestroy(() => console.log('Unmounted home page'));
</script>

<main class=" flex flex-col w-[100%] items-center justify-start font-sans  ">
    <div class="grid grid-cols-1 bg-gradient-to-tr from-astral-950 via-purpleone-950 to-bluethree-950 h-screen w-screen overflow-scroll  bg-cover bg-center bg-no-repeat pt-[100px] md:pt-20 xl:pt-20">
		<MapContact />
		<Cards />
		
	</div>
    
</main>

