<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import Loader from '../components/Loader.svelte';
	import { fade } from 'svelte/transition';
</script>

<html
  transition:fade={{ delay: 2, duration:200 }}
	lang="en"
	class="h-full select-none overflow-scroll scroll-smooth bg-[oklch(12.5%_0.057_322.41)] text-white"
>
	<head>
		<!-- Add any necessary head content here -->
	</head>
	<body class="flex h-full flex-col overflow-scroll">
		<header>
			<Navbar />
		</header>
		<main class="flex h-[100%] flex-col">
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
