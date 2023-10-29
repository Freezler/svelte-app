<script>
	import { onMount } from 'svelte';
  
	let avatarUrl = '';
	let isLoading = true;
  
	onMount(async () => {
	  const response = await fetch('https://source.unsplash.com/360x360/?FACES');
	  avatarUrl = response.url;
	  isLoading = false;
	});
  </script>
  
  <main class="flex h-screen w-screen animate-slow-fade-in flex-col items-center justify-center bg-gradient-to-tr from-astral-900 via-gray-900 to-astral-900">
	{#if isLoading}
	  <p class="text-3xl animate-pulse bg">Loading...</p>
	{:else if avatarUrl !== ''}
	  <div class="flex h-48 w-48 flex-col rounded-full border-2 border-purplethree-400 bg-cover bg-center" style="background-image: url({avatarUrl})"></div>
	{/if}
  
	<button on:click={() => window.location.reload()} class="mt-8 rounded-md border-2 border-purpleone-700 bg-purpleone-100 p-3 text-rosetwo-400 opacity-80 shadow-sm shadow-purpleone-500">Refresh Avatar</button>
  </main>
