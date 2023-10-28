<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>
<html lang="en" class="">
<div
	class="z-10 h-screen  flex select-none overflow-hidden  xl:max-w-5xl xl:px-0"
>
	<div class="flex w-full h-screen flex-col xxl:w-[100%] xxl:px-0 xxxl:bg-cover">
		
		<Navbar />
		<main>
			<slot />
		</main>
		<Footer />
	</div>
</div>
</html>
