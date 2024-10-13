<script>
    import { onDestroy, onMount } from 'svelte';
    import Cards from '../../components/Cards.svelte';
    import { fade } from 'svelte/transition';
</script>
<main class="">
    <div class="info h-[1500px] md:h-[100vh] ">
        <Cards />
    </div>

</main>
<style>
    .info:nth-child(1){
        transition: fadeIn 1s ease-in-out both;
    }


    @keyframes fadeOut {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;


    }}
    @keyframes fadeIn {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;


    }
    }


</style>