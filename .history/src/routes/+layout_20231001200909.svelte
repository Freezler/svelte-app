<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	
</script>

<div
	class=" h-full w-screen z-10 select-none overflow-hidden"
>
	<Navbar />

	<slot />

	<Footer />
</div>
