<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	
</script>

<div
	class=" h-full w-full z-10 select-none overflow-hidden focus:select-none wil"
>
	<Navbar />

	<slot />

	<Footer />
</div>
