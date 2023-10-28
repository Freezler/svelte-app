<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div
	class="z-10 h-screen  flex select-none overflow-hidden  xl:max-w-5xl xl:px-0"
>
	<div class="flex w-screen h-full flex-col ">
		
		<Navbar />
		<main>
			<slot />
		</main>
		<Footer />
	</div>
</div>
