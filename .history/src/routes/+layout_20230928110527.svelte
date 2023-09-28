<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	
</script>

<div
	class=" h-[100%] z-10"
>
	<Navbar />

	<slot />

	<Footer />
</div>
