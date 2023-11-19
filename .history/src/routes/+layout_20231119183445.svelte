<script>
  import '../app.css';
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';
  import Loader from '../components/Loader.svelte';
  import { fade } from 'svelte/transition';

  window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');
    loader.style.display = 'none';
    content.style.display = 'flex';
  });
</script>

<html lang="en" class="bg-gradient-to-br from-astral-950 via-gray-950 to-purpleone-950 bg-astra l-950 text-white select-none scroll-smooth">
  <head>
    <!-- Add any necessary head content here -->
  </head>
  <body>
    <main class="flex flex-col h-screen overflow-scroll">
      <Navbar />
      <div id="loader" class="text-center text-white" style="display: flex;">
        <Loader />
      </div>
      <div id="content" class="flex" on:transition:end={fade}>
        <h1 class="relative z-500 text-3xl sm:text-5xl md:text-6xl xl:8xl text-purpleone-300"> weer Loading...</h1>
        <slot />
      </div>
    </main>
    <Footer />
  </body>
</html>