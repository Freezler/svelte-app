<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div
	class="z-10 h-screen w-full max-w-3xl select-none overflow-hidden px-4 will-change-auto sm:px-6 xl:max-w-5xl xl:px-0"
>
	<div class="flex h-screen flex-col justify-between">
		<Navbar />
		<main>
			<slot />
		</main>
		<Footer />
	</div>
</div>
