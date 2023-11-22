<script>
    import { onDestroy, onMount } from 'svelte';
    import Cards from '../../components/Cards.svelte';
    import { fade } from 'svelte/transition';
</script>
<main class="bg-[oklch(12.5%_0.057_322.41)] min-h-[100%] bg-cover bg-center bg-no-repeat  w-[100%] ">
    <div class="info h-[1500px] md:h-[100vh] ">
        <Cards />
    </div>
   
</main>
<style>
    .info{
        transition: all;
    animation: forwards 1s;
    animation-name: fadeIn;

    }
    @keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    
    
    }
    }

</style>