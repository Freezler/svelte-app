<script>
  import '../app.css';
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';
  import Loader from '../components/Loader.svelte';
</script>




<head>
    <!-- Add any necessary head content here -->
  </head>
 {#if document. == ''}
  <body class="flex flex-col h-full overflow-scroll">
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />
  </body>
{:else}
  <Loader />
{/if}