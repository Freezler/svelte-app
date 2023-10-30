<script>
	import { onMount, afterUpdate } from 'svelte';
  
	let avatarUrl = '';
	let isLoading = true;
  
	const reloadAvatar = async () => {
		isLoading = true;
		const response = await fetch('https://source.unsplash.com/1080x1080/?rijksmuseum');
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

<main class="flex h-screen w-screen animate-slow-fade-in flex-col items-center justify-top pt-[10%] gap-8 bg-gradient-to-tr from-astral-900 via-gray-900 to-astral-900">
	{#if isLoading}
	<div class=" border-purplethree-400 h-[45%] w-[60%] animate-pulse border-2 rounded-[8px] flex items-center justify-center">
		<p class="text-xl text-purpleone-100 animate-pulse">Loading...</p>
	</div>
		{:else if avatarUrl !== ''}
		
		<div class="flex h-[45%] min-w-[100%] w-[60%] min-h-[60%] max-h-[] flex-col rounded-[8px] border-2 border-purplethree-400 bg-cover bg-center avatar-image" style="background-image: url({avatarUrl})"></div>
	{/if}

	<button on:click={reloadAvatar} class="w-[100px]  rounded-[8px] border-2 border-purpleone-700 bg-purpleone-900 bg-opacity-40 p-3 text-rosetwo-200 opacity-80 drop-shadow-[3px_3px_5px_rgba(22,22,22,0.7)]">Next..</button>
</main>