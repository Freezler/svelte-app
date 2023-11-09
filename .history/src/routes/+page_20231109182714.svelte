<script>
    import { onDestroy, onMount } from 'svelte';
    import MapContact from '../components/MapContact.svelte';
    import Cards from '../components/Cards.svelte';


    onMount(() => console.log('Mounted home page'));
    onDestroy(() => console.log('Unmounted home page'));
</script>

<main class="animate-slow-fade-in  w-[100%] min-w-[100%] max-w-[100%] min-h-[100%] h-full  ">
    <div class="animategrid grid-cols-1  h-screen w-screen overflow-scroll bg-gradient-to-b from-gray-900 via-gray-900 to-astral-950 bg-cover bg-center bg-no-repeat md:pt-20 xl:pt-20">
		<MapContact />
		<Cards />
		
	</div>
    
</main>

