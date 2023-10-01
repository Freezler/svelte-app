<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="z-10 h-screen w-full select-none overflow-hidden will-change-auto  max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
	<div class="flex h-screen flex-col justify-between">
	<Navbar />
	<main>
		<slot />
	</main>
	<Footer />
</div>
</div>
