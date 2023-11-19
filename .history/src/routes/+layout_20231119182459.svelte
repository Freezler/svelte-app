<script>
  import '../app.css';
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';
  import Loader from '../components/Loader.svelte';
  import { fade } from 'svelte/transition';
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

<html lang="en" class="bg-gradient-to-br from-astral-950 via-gray-950 to-purpleone-950 bg-astra l-950 text-white select-none scroll-smooth">
  <head>
    <!-- Add any necessary head content here -->
  </head>
  <body>
    <main on:transitionend={() => (isContentLoaded = true)} class="flex flex-col h-screen overflow-scroll">
      <Navbar />
      <div id="loader" style="display: flex;">
        <Loader />
      </div>
      <div id="content" style="display: none;">
        {#if !isContentLoaded}
          
        {:else}
          <slot />
        {/if}
      </div>
    </main>
    <Footer />
  </body>
</html>