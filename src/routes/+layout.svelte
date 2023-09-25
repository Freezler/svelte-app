<script>
  import "../app.css";
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<div class="  min-h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600">
  <Navbar />
  <slot />
  <Footer />
</div>