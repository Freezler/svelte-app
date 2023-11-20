<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import Loader from '../components/Loader.svelte';
	import { fade } from 'svelte/transition';
</script>

<html
	lang="en"
	class=" select-none scroll-smooth bg-[oklch(12.5%_0.057_322.41)] text-white"
>
	<head>
		<!-- Add any necessary head content here -->
	</head>
	<body>
		<header>
			<Navbar />
		</header>
		<main class="flex h-screen flex-col overflow-scroll">
			<slot />
		</main>
		<footer>
			<Footer />
		</footer>
	</body>
</html>
<style>
  * {
    scroll-behavior: smooth;  
  }
</style>
