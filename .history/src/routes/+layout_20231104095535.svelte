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

<html lang="en" class="scroll-smooth">
  <head>
    <!-- Add any necessary head content here -->
  </head>
  <body class="z-10 flex flex-col h-screen select-none overflow-hidden ">
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />
  </body>
</html>