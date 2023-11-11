<script>
    import { onDestroy, onMount } from 'svelte';
    import MapContact from '../components/Header.svelte';
    import Cards from '../components/Cards.svelte';
	import Header from '../components/Header.svelte';


    onMount(() => console.log('Mounted home page'));
    onDestroy(() => console.log('Unmounted home page'));
</script>

<main class="scroll-smooth flex flex-col w-[100%] h-[100%] items-center justify-center bg-gradient-to-b from-astral-200 via-gray-200 to-astral-400 bg-cover ">
    <div class="scroll-smooth relative grid grid-cols-1 h-[100%] w-screen overflow-scroll  bg-cover bg-center bg-no-repeat pt-[150px] md:pt-20 xl:pt-20">
		<Header />
		<Cards />
		
	</div>
    
</main>

