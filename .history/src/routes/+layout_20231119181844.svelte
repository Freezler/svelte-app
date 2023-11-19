<script>
  import { load } from 'svelte';
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';
  import Loader from '../components/Loader.svelte';

  let isContentLoaded = false;

  load(() => {
    isContentLoaded = true;
  });
</script>

<style>
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>

<main>
  <Navbar />

  {#if !isContentLoaded}
    <div class="loader">
      <Loader />
    </div>
  {:else}
    <slot />
  {/if}

  <Footer />
</main>