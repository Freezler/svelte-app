<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="min-h-screen text-vi">
	<Navbar />
	<slot />

<Footer />
</div>
