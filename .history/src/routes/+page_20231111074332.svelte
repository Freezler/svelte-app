<script>
    import { onDestroy, onMount } from 'svelte';
    import MapContact from '../components/MapContact.svelte';
    import Cards from '../components/Cards.svelte';


    onMount(() => console.log('Mounted home page'));
    onDestroy(() => console.log('Unmounted home page'));
</script>

<main class=" flex flex-col w-[100%] items-center justify-start font-sans  ">
    <div class="grid grid-cols-1  h-screen w-screen overflow-scroll bg-gradient-to-b from-gray-900 via-gray-900 to-astral-950 bg-cover bg-center bg-no-repeat pt-[100px] md:pt-20 xl:pt-20">
		<MapContact />
		<Cards />
		
	</div>
    
</main>

