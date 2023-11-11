<script>
  import '../app.css';
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';
</script>

<html lang="en" class="select-none">
  <head>
    <!-- Add any necessary head content here -->
  </head>
  <body class="anflex flex-col h-full overflow-scroll">
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />
  </body>
</html>