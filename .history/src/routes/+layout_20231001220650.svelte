<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="z-10 h-screen w-full select-none overflow-hidden will-change-auto focus:select-none">
	<Navbar />
	<main>
		<slot />
	</main>
	<Footer />
</div>
