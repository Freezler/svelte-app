<script>
    import { onDestroy, onMount } from 'svelte';
    import Cards from '../../components/Cards.svelte';
    import { fade } from 'svelte/transition';
</script>
<main class=" bg-[oklch(12.5%_0.057_322.41)] min-h-[100%] bg-cover bg-center bg-no-repeat   ">
    <div class="info h-[1500px] md:h-[100vh] ">
        <Cards />
    </div>

</main>
<style>
    .info:nth-child(1){
        transition: fadeIn 1s ease-in-out both;
        animation: fadeIn 1s ease-in-out both;
    }
    .info:hover{
        transition: fadeOut 1s;
        animation: fadeOut 1s;


    }



</style>