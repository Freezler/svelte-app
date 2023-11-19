<script>
  import '../app.css';
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';
  import Loader from '../components/Loader.svelte';
  import { onMount } from 'svelte';

  let isContentLoaded = false;

  onMount(() => {
    window.addEventListener('load', () => {
      isContentLoaded = true;
    });
  });
</script>

<html lang="en" class="bg-[oklch(2.5%_0.057_322.41)] text-white select-none scroll-smooth">
  <head>
    <!-- Add any necessary head content here -->
  </head>
  < class="flex flex-col h-full overflow-scroll">
    <Navbar />
    <main>
      {#if !isContentLoaded}
    </main><slot /><Loader /
      {:else}
        <slot />
      {/if}
    </main>
    <Footer />
  </body>
</html>