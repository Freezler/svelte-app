<script>
  import '../app.css';
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';
  import Loader from '../components/Loader.svelte';
  import { onMount } from 'svelte';

  let isContentLoaded = false;

  onMount(() => {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    window.addEventListener('load', () => {
      loader.style.display = 'none';
      content.style.display = 'flex';
    });

    setTimeout(() => {
      loader.style.display = 'none';
      content.style.display = 'flex';
      isContentLoaded = true;
    }, 3000);
  });
</script>

<html lang="en" class="bg-[oklch(2.5%_0.057_322.41)] text-white select-none scroll-smooth">
  <head>
    <!-- Add any necessary head content here -->
  </head>
  <body>
    <main class="flex flex-col h-screen overflow-scroll">
      <Navbar />
      <div id="loader" style="display: block;">
        <Loader />
      </div>
      <div id="content" style="display: none;">
        {#if !isContentLoaded}
          <p class="text-3xl text-white">Loading content...</p>
        {:else}
          <slot />
        {/if}
      </div>
    </main>
    <Footer />
  </body>
</html>