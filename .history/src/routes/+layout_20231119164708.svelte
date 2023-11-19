<script>
  import '../app.css';
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';
  import Loader from '..components/Loader.svelte';

  let isLoading = true; // Set initial loading state to true

  // Simulate content loading
  setTimeout(() => {
    isLoading = false; // Set loading state to false once content is loaded
    while (isLoading) {
      // Wait for content to load
      isLoading = false;
      
    }
  }, 3000); // Replace this with your actual content loading logic
</script>

<html lang="en" class="select-none scroll-smooth bg-black">
  <div class="justify-top flex w-full flex-col items-center border-b-[1px] border-purpleone-600">
    {#if isLoading}
      <!-- Show loading screen -->
      <div
        class="flex h-screen w-[100%] min-w-[100%] max-w-[100%] animate-pulse items-center justify-center bg-cover bg-center shadow-[3px_3px_15px_3px_rgba(22,22,22,0.7)] drop-shadow-[2px_2px_12px_hsla(255,100%,59%,0.9)]"
      >
        <p class="text-md animate-pulse pt-8 text-purpleone-100"><Loader />Loading</p>
      </div>
    {:else}
      <!-- Show main content -->
      <head>
        <!-- Add any necessary head content here -->
      </head>
      <body class="flex h-full flex-col overflow-scroll">
        <Navbar />
        <main>
          <slot />
        </main>
        <Footer />
      </body>
    {/if}
  </div>
</html>