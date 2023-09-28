<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import ImgOverlay from '../components/Img-overlay.svelte';
</script>

<div
	class=" h-[100%] bg-cover bg-center bg-no-repeat"
>
	<Navbar />

	<slot />

	<Footer />
</div>
