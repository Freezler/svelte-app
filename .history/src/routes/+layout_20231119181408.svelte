<script>
  import '../app.css';
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';
  import Loader from '../components/Loader.svelte';
  import { onMount } from 'svelte';

  let isContentLoaded = false;

  onMount(() => {
    window.addEventListener('documentLoaded', () => {
      requestAnimationFrame(() => {
        isContentLoaded = true;
      });
    });
  });
</script>

<html lang="en" class="bg-[oklch(2.5%_0.057_322.41)] text-white select-none scroll-smooth">
  <head>
    <!-- Add any necessary head content here -->
  </head>
  <body>
    {#if !isContentLoaded}
      <main class="flex flex-col h-screen overflow-scroll">
        <Navbar />
        <Loader />
      </main>
    {:else}
      <main class="flex flex-col h-screen overflow-scroll">
        <Navbar />
        <slot />
      </main>
    {/if}
    <Footer />
  </body>
</html>