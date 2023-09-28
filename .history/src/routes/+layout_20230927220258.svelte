<script>
  import "../app.css";
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<div class="  min-h-screen bg-gradient-to-tl from-black via-neutral-800 to-slate-900">
  <Navbar />
  <slot />
  
</div>
<Footer />  