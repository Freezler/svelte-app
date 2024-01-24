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
	class="h-[100svh] w-[100%] select-none overflow-scroll scroll-smooth bg-{} text-white"
>
	<head>
		<!-- Add any necessary head content here -->
	</head>
	<body class="flex h-[100svh] max-w-[1440px] flex-col justify-between items-center overflow-scroll">
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
	box-sizing: border-box;
	margin: 0;
	padding: 0;
    
	

  }
</style>
