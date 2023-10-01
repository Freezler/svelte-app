<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div
	class="z-10 h-screen w-screen max-w-3xl select-none overflow-hidden  sm:px-6 xl:max-w-5xl xl:px-0"
>
	<div class="flex w-screen h-screen flex-col justify-between">
		<Navbar />
		<main>
			<slot />
		</main>
		<Footer />
	</div>
</div>
