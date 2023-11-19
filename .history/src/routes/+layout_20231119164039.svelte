<script>
  import '../app.css';
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';
  import Loader from './Loader.svelte';
  let isLoading = true;
</script>


<html lang="en" class="select-none scroll-smooth bg-black">
  <div class="border-b-[1px] border-purpleone-600 flex flex-col items-center justify-top  w-full">
    {#if isLoading}
    <div class="shadow-[3px_3px_15px_3px_rgba(22,22,22,0.7)] flex h-screen bg-cover bg-center drop-shadow-[2px_2px_12px_hsla(255,100%,59%,0.9)] w-[100%] min-w-[100%] max-w-[100%] animate-pulse items-center justify-center  ">
      <p class="pt-8 animate-pulse text-md text-purpleone-100"><Loader />Loading</p>
    </div>
    {:else if isLoading !== 'true'}
   <head>
    <!-- Add any necessary head content here -->
  </head>
  <body class="flex flex-col h-full overflow-scroll">
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />
  </body>
    {/if}


</html>