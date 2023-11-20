<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import Loader from '../components/Loader.svelte';
	import { fade } from 'svelte/transition';
</script>

<html
	lang="en"
	class="bg-astra l-950 select-none scroll-smooth bg-gradient-to-br from-astral-950 via-gray-950 to-purpleone-950 text-white"
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
