<script>
    import { onDestroy, onMount } from 'svelte';
    import MapContact from '../components/MapContact.svelte';
    import Cards from '../components/Cards.svelte';


    onMount(() => console.log('Mounted home page'));
    onDestroy(() => console.log('Unmounted home page'));
</script>

<main class="flex flex-col w-screen h-full">
    <div class="flex flex-col h-full w-full overflow-scroll" style="background-image: linear-gradient(to bottom, #FFD700, #FFA500);">
        <MapContact />
        <div class="flex flex-1 overflow-scroll">
            <Cards />
        </div>
    </div>
</main>