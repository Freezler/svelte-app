<script>
  import '../app.css';
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';

</script>

<html lang="en" class="select-none scroll-smooth" >
  <head>
    <!-- Add any necessary head content here -->
  </head>
  <body class=" flex flex-col h-full overflow-scroll" on:mou={() => console.log('loaded')}>
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />
  </body>
</html>