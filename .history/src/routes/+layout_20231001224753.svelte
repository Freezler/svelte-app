<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div
	class="z-10 h-full w-screen max-w-3xl select-none overflow-hidden  sm:px-6 xl:max-w-5xl xl:px-0"
>
	<div class="flex w-screen h-full flex-col justify-between will">
		
		<Navbar />
		<main>
			<slot />
		</main>
		<Footer />
	</div>
</div>
