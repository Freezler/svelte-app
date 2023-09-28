<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="min-h-screen ">
	<Navbar />
	<slot />

<Footer />
</div>
