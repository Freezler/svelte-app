<script>
	import Cards from "../../components/Cards.svelte";
	import { onDestroy, onMount } from 'svelte';

	onMount(() => console.log('Mounted Blogs page'));
	onDestroy(() => console.log('Unmounted Blogs page'));

	let email = 'r.l.devries@live.nl';
</script>

<main class="relative z-10 w-screen h-screen flex items-center justify-center">
	<Cards />

	<div class="absolute top-0  bottom-0  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center justify-center">
		<!-- Primary Color Divs -->
		<h1 class="text-primary-600 font-display font-3xl">Kleuren pallet voor mijn project in ontwikkeling!</h1>
		<div class="bg-primary-100 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-primary-100</div>
		<div class="bg-primary-200 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-primary-200</div>
		<div class="bg-primary-300 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-primary-300</div>
		<div class="bg-primary-400 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-primary-400</div>
		<div class="bg-primary-500 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-primary-500</div>
		<div class="bg-primary-600 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-primary-600</div>
		<div class="bg-primary-700 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-primary-700</div>
		<div class="bg-primary-800 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-primary-800</div>
		<div class="bg-primary-900 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-primary-900</div>
		<div class="bg-primary-1000 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-primary-1000</div>
		<div class="bg-primary-1100 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-primary-1100</div>

		<!-- Secondary Color Divs -->
		<div class="bg-secondary-100 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-secondary-100</div>
		<div class="bg-secondary-200 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-secondary-200</div>
		<div class="bg-secondary-300 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-secondary-300</div>
		<div class="bg-secondary-400 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-secondary-400</div>
		<div class="bg-secondary-500 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-secondary-500</div>
		<div class="bg-secondary-600 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-secondary-600</div>
		<div class="bg-secondary-700 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-secondary-700</div>
		<div class="bg-secondary-800 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-secondary-800</div>
		<div class="bg-secondary-900 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-secondary-900</div>
		<div class="bg-secondary-1000 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-secondary-1000</div>
		<div class="bg-secondary-1100 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-secondary-1100</div>

		<!-- Tertiary Color Divs -->
		<div class="bg-tertiary-100 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-tertiary-100</div>
		<div class="bg-tertiary-200 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-tertiary-200</div>
		<div class="bg-tertiary-300 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-tertiary-300</div>
		<div class="bg-tertiary-400 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-tertiary-400</div>
		<div class="bg-tertiary-500 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-tertiary-500</div>
		<div class="bg-tertiary-600 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-tertiary-600</div>
		<div class="bg-tertiary-700 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-tertiary-700</div>
		<div class="bg-tertiary-800 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-tertiary-800</div>
		<div class="bg-tertiary-900 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-tertiary-900</div>
		<div class="bg-tertiary-1000 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-tertiary-1000</div>
		<div class="bg-tertiary-1100 square-md w-60 h-40 rounded-xl flex items-center justify-center">bg-tertiary-1100</div>
	</div>
</main>
