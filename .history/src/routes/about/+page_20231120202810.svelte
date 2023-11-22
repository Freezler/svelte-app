<script>
    import { onDestroy, onMount } from 'svelte';
    import Cards from '../../components/Cards.svelte';
</script>
<main class="bg-[oklch(12.5%_0.057_322.41)] min-h-[100%] bg-cover bg-center bg-no-repeat  w-[100%] ">
    <div class="h-[1500px] md:h-[100vh] ">
        <Cards />
    </div>
   
</main>
<style>
    div {
        
   
    overflow: scroll;
    scroll-behavior: smooth; 
	scroll-snap-type: y mandatory;
	scroll-snap-stop: always;
	scroll-padding-top: 100px;
	scroll-padding-bottom: 100px;
    }
</style>