<script>
	import { onDestroy, onMount } from 'svelte';
  
	let avatarUrl = '';
  
	onMount(async () => {
	  const response = await fetch('https://source.unsplash.com/360x360/?FACES');
	  avatarUrl = response.url;
	});
  
	onDestroy(() => console.log('Unmounted Campfire page'));
  </script>
  
  <main class="animate-slow-fade-in time-delay-100 flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-tr from-astral-900 via-gray-900 to-astral-900">
	{#if avatarUrl !== ''}
	  <div class="flex flex-col w-48 h-48 bg-cover bg-center border-2 border-purplethree-400 rounded-full" style="background-image: url({avatarUrl})"></div>
	{/if}
	<!-- button to refresh page -->
	<button on:click={() => window.location.reload()} class="mt-2  ">Refresh Avatar</button>
  </main>