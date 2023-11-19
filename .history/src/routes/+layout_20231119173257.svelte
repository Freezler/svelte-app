<script>
  import '../app.css';
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';
  import { onMount } from 'svelte';
  
</script>

<html lang="en" class="select-none scroll-smooth" >
  <head>
    <!-- Add any necessary head content here -->
  </head>
  <body class=" flex flex-col h-full overflow-scroll" >
    <Navbar />
    <main class="{() => console.log('loadstart')}>
      <slot />
    </main>
    <Footer />
  </body>
</html>