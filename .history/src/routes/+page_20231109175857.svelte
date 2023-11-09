<script>
    import { onDestroy, onMount } from 'svelte';
    import MapContact from '../components/MapContact.svelte';
    import Cards from '../components/Cards.svelte';


    onMount(() => console.log('Mounted home page'));
    onDestroy(() => console.log('Unmounted home page'));
</script>

<main class=" pt-8 w-[100%] min-w-[100%] max-w-[100%] min-h-[100vh] h-screen o ">
    <div class="grid grid-cols-1  h-full w-screen overflow-scroll bg-gradient-to-b from-gray-100 to-astral-200 bg-cover bg-center bg-no-repeat">
		<MapContact />
		<Cards />
		
	</div>
    
</main>

