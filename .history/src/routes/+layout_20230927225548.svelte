<script>
  import "../app.css";
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  import ImgOverlay from "../components/Img-overlay.svelte";
</script>

<div class="bg-gradient-to-tl from-black via-neutral-800 to-slate-900 bg-cover bg-[url('https://source.unsplash.com/random/?svelte,macbook')] bg-no-repeat">
  <Navbar />
  
  <slot />
  

<Footer />  
</div>