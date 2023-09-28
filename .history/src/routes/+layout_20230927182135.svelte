<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="min-h-screen to-slate-900">
	<Navbar />
	<slot />

<Footer />
</div>
