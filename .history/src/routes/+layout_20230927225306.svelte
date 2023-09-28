<script>
  import "../app.css";
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  import ImgOverlay from "../components/Img-overlay.svelte";
</script>

<div class="  min-h-full bg-gradient-to-tl from-black via-neutral-800 to-slate-900">
  <Navbar />
  
  <slot />
  

<Footer />  
</div>