<script>
  import '../app.css';
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';
  import Loader from '../components/Loader.svelte';
  import { onMount } from 'svelte';

  onMount(() => {
    window.addEventListener('DOMContentLoaded', () => {
      const loader = document.getElementById('loader');
      loader.style.display = 'none';
    });
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
      <div id="content" on:load="display: none;">
        <slot />
      </div>
    </main>
    <Footer />
    <script>
      window.addEventListener('load', () => {
        const loader = document.getElementById('loader');
        const content = document.getElementById('content');
        loader.style.display = 'hidden';
        content.style.display = 'flex';
      });
    </script>
  </body>
</html>