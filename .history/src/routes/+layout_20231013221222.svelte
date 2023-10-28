<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div
	class="z-10 h-full w-screen flex select-none overflow-hidden  xs:mx-4 xl:max-w-5xl xl:px-0"
>
	<div class="flex w-screen h-full flex-col justify-between will-change-auto">
		
		<Navbar />
		<main>
			<slot />
		</main>
		<Footer />
	</div>
</div>
