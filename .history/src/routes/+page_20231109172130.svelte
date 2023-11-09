<script>
    import { onDestroy, onMount } from 'svelte';
    import MapContact from '../components/MapContact.svelte';
    import Cards from '../components/Cards.svelte';


    onMount(() => console.log('Mounted home page'));
    onDestroy(() => console.log('Unmounted home page'));
</script>

<main class="flex flex-col w-screen h-full -z-10">
    
    <div class="  -z-50 h-full w-full overflow-scroll bg-gradient-to-b from-gray-100 to-astral-200 bg-cover bg-center bg-repeat">
        <MapContact />
        <div class="flex flex-1 overflow-scroll">
            <Cards />
        </div>
    </div>
</main>

