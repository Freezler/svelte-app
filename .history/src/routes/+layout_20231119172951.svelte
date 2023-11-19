<script>
  import '../app.css';
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';
  import { onMount } from 'svelte';
  onMount(() => {
    document.body.nodeName.add('overflow-hidden');
  })
</script>

<html lang="en" class="select-none scroll-smooth" >
  <head>
    <!-- Add any necessary head content here -->
  </head>
  <body class=" flex flex-col h-full overflow-scroll" >
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />
  </body>
</html>