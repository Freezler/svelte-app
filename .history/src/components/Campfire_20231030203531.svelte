<script>
	import { onMount, afterUpdate } from 'svelte';
  
	let avatarUrl = '';
	let isLoading = true;
  
	const reloadAvatar = async () => {
		isLoading = true;
		const response = await fetch('https://source.unsplash.com/360x360/?FACES');
		avatarUrl = response.url;
		isLoading = false;
	}
  
	onMount(reloadAvatar);
  
	afterUpdate(() => {
		if (isLoading) return; // Only reload avatar after initial load
		const image = document.querySelector('.avatar-image');
		image.style.backgroundImage = `url(${avatarUrl})`;
	});
</script>

<main class="flex h-screen w-screen animate-slow-fade-in flex-col items-center justify-center bg-gradient-to-tr from-astral-900 via-gray-900 to-astral-900">
	{#if isLoading}
	<div class="h-">
		<p class="text-3xl text-purpleone-100 animate-pulse">Loading...</p>
	</div>
		{:else if avatarUrl !== ''}
		<div class="flex h-48 w-48 flex-col rounded-full border-2 border-purplethree-400 bg-cover bg-center avatar-image" style="background-image: url({avatarUrl})"></div>
	{/if}

	<button on:click={reloadAvatar} class="mt-8 rounded-md border-2 border-purpleone-700 bg-purpleone-900 p-3 text-rosetwo-200 opacity-80 shadow-sm shadow-purpleone-500">Refresh Avatar</button>
</main>