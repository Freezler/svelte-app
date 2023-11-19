<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import Loader from '../components/Loader.svelte';
</script>


{#if  == ''}
	<body class="flex h-full flex-col overflow-scroll">
		<Loader />
	</body>
{:else}
	<body class="flex h-full flex-col overflow-scroll">
		<Navbar />
		<main>
			<slot />
		</main>
		<Footer />
	</body>
{/if}
