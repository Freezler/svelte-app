<script>
  import '../app.css';
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';
  import Loader from '../components/Loader.svelte';
  import { fade } from 'svelte/transition';
  

  
 
</script>

<html lang="en" class="bg-gradient-to-br from-astral-950 via-gray-950 to-purpleone-950 bg-astra l-950 text-white select-none scroll-smooth">
  <head>
    <!-- Add any necessary head content here -->
  </head>
  <body>
    <main class="flex flex-col h-screen overflow-scroll">
      <Navbar />
      <div id="loader" class="text-center text-white" style="display: none;">
        <Loader />
      </div>
      <slot
    </main>
    <Footer />
  </body>
</html>