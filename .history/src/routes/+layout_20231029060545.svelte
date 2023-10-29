<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<html lang="en" class="scroll-smooth">
	<div
		class="z-10 flex flex-col h-screen select-none overflow-hidden xl:max-w-5xl xl:px-0">
		<div
			class="flex h-screen w-full flex-col">
			<Navbar />
			<main>
				<slot />
			</main>
			<Footer />
		</div>
	</div>
</html>
