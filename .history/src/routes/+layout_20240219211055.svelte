<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import Loader from '../components/Loader.svelte';
	import { fade } from 'svelte/transition';
</script>

<html
  transition:fade={{ delay: 1.5, duration:200 }}
	lang="en"
	class="h-screen select-none overflow-scroll scroll-smooth bg-[oklch(12.5%_0.057_322.41)] text-white"
>
	<head>
		<!-- Add any necessary head content here -->
	</head>
	<body class="flex h-screen  flex-col justify-between items-center overflow-scroll">
		<header>
			<Navbar />
		</header>
		<main class="flex h-screen flex-col">
			<slot />
		</main>
		<footer>
			<Footer />
		</footer>
	</body>
</html>
<style>
  * {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
    
	

  }
</style>
