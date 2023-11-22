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
	class="h-[100%] w-[100%] select-none overflow-scroll scroll-smooth bg-[oklch(12.5%_0.057_322.41)] text-white"
>
	<head>
		<!-- Add any necessary head content here -->
	</head>
	<body class="flex h-full flex-col overflow-scroll">
		<header>
			<Navbar />
		</header>
		<main class="flex h-[100vh] flex-col">
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
    overflow: scroll;
    scroll-behavior: smooth; 
	scroll-snap-type: y mandatory;
	scroll-snap-stop: always;
	scroll-padding-top: 100px;
	scroll-padding-bottom: 100px;
	

  }
</style>
