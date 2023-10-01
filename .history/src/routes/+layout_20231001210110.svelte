<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	
</script>

<div
	class="w-screen w-full z-10 select-none overflow-hidden focus:select-none will-change-auto"
>
	<Navbar />

	<slot />

	<Footer />
</div>
