<script>
  import '../app.css';
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';
  import { onMount } from 'svelte';
  
</script>

<html lang="en" class="select-none scroll-smooth" on:load="{() => console.log('Loaded')} on:unload={() => console.log('Unloaded')} >
  <head>
    <!-- Add any necessary head content here -->
  </head>
  <body class=" flex flex-col h-full overflow-scroll" >
    <Navbar />
    <main">
      <slot />
    </main>
    <Footer />
  </body>
</html>