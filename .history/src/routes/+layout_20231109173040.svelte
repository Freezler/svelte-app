<script>
  import '../app.css';
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';
</script>

<style>
  @keyframes fadeAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>

<html lang="en" class="scroll-smooth select-none">
  <head>
    <!-- Add any necessary head content here -->
  </head>
  <body class="z-10 flex flex-col h-full select-none overflow-scroll transition-opacity">
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />
  </body>
</html>