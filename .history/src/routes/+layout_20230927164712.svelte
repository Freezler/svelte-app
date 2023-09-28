<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="min-h-screen text-bg-gradient-to-tl from-black via-neutral-800 to-slate-900">
	<Navbar />
	<slot />
	<div class="p-4">
		<p class="bg-offBlackBg">
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde nostrum vero
		</p>
	</div>
</div>
<Footer />
