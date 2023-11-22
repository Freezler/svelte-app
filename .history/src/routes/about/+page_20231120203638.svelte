<script>
    import { onDestroy, onMount } from 'svelte';
    import Cards from '../../components/Cards.svelte';
</script>
<main class="bg-[oklch(12.5%_0.057_322.41)] min-h-[100%] bg-cover bg-center bg-no-repeat  w-[100%] ">
    <div class="info h-[1500px] md:h-[100vh] ">
        <Cards />
    </div>
   
</main>
<style>
    .info{

    background: rgba(0, 0, 255, 0.2)  ;  
    transition: all fade 9s ease-in-out;
    
    }
</style>