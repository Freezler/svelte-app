<script>
	import Cards from "../../components/Cards.svelte";

					
	import { onDestroy, onMount } from 'svelte';
	onMount(() => console.log('Mounted Blogs page'));
	onDestroy(() => console.log('Unmounted Blogs page'));
	let email =	'r.l.devries@live.nl'
</script>

<main class="relz-10 w-screen h-screen flex items-center justify-center">
	<Cards />
	<div class="grid grid-cols-3 object-cover bg-cover bg-center bg-no-repeat z- 50">
	  <!-- Primary Color Divs -->
	  <div class="bg-primary-100 square-md mx-auto my-2 h-40">bg-primary-100</div>
	  <div class="bg-primary-200 square-md mx-auto my-2 h-40">bg-primary-200</div>
	  <div class="bg-primary-300 square-md mx-auto my-2 h-40">bg-primary-300</div>
	  <div class="bg-primary-400 square-md mx-auto my-2 h-40">bg-primary-400</div>
	  <div class="bg-primary-500 square-md mx-auto my-2 h-40">bg-primary-500</div>
	  <div class="bg-primary-600 square-md mx-auto my-2 h-40">bg-primary-600</div>
	  <div class="bg-primary-700 square-md mx-auto my-2 h-40">bg-primary-700</div>
	  <div class="bg-primary-800 square-md mx-auto my-2 h-40">bg-primary-800</div>
	  <div class="bg-primary-900 square-md mx-auto my-2 h-40">bg-primary-900</div>
  
	  <!-- Secondary Color Divs -->
	  <div class="bg-secondary-100 square-md mx-auto my-2 h-40">bg-secondary-100</div>
	  <div class="bg-secondary-200 square-md mx-auto my-2 h-40">bg-secondary-200</div>
	  <div class="bg-secondary-300 square-md mx-auto my-2 h-40">bg-secondary-300</div>
	  <div class="bg-secondary-400 square-md mx-auto my-2 h-40">bg-secondary-400</div>
	  <div class="bg-secondary-500 square-md mx-auto my-2 h-40">bg-secondary-500</div>
	  <div class="bg-secondary-600 square-md mx-auto my-2 h-40">bg-secondary-600</div>
	  <div class="bg-secondary-700 square-md mx-auto my-2 h-40">bg-secondary-700</div>
	  <div class="bg-secondary-800 square-md mx-auto my-2 h-40">bg-secondary-800</div>
	  <div class="bg-secondary-900 square-md mx-auto my-2 h-40">bg-secondary-900</div>
  
	  <!-- Tertiary Color Divs -->
	  
	  <div class="bg-tertiary-100 square-md mx-auto my-2 h-40">bg-tertiary-100</div>
	  <div class="bg-tertiary-200 square-md mx-auto my-2 h-40">bg-tertiary-200</div>
	  <div class="bg-tertiary-300 square-md mx-auto my-2 h-40">bg-tertiary-300</div>
	  <div class="bg-tertiary-400 square-md mx-auto my-2 h-40">bg-tertiary-400</div>
	  <div class="bg-tertiary-500 square-md mx-auto my-2 h-40">bg-tertiary-500</div>
	  <div class="bg-tertiary-600 square-md mx-auto my-2 h-40">bg-tertiary-600</div>
	  <div class="bg-tertiary-700 square-md mx-auto my-2 h-40">bg-tertiary-700</div>
	  <div class="bg-tertiary-800 square-md mx-auto my-2 h-40">bg-tertiary-800</div>
	  <div class="bg-tertiary-900 square-md mx-auto my-2 h-40">bg-tertiary-900</div>
  
	</div>
  </main>
