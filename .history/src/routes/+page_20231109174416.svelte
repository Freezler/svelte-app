<script>
    import { onDestroy, onMount } from 'svelte';
    import MapContact from '../components/MapContact.svelte';
    import Cards from '../components/Cards.svelte';


    onMount(() => console.log('Mounted home page'));
    onDestroy(() => console.log('Unmounted home page'));
</script>

<main class="grid pt-8 w-50px h-full  ">
    <div class="flex flex-col  -z-50 h-full w-screen overflow-scroll bg-gradient-to-b from-gray-100 to-astral-200 bg-cover bg-center bg-no-repeat">
		<MapContact />
		<Cards />
		
	</div>
    
</main>

