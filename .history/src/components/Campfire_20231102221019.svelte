<script>
	import { onMount, afterUpdate } from 'svelte';
  
	let avatarUrl = '';
	let isLoading = true;
  
	const reloadAvatar = async () => {
		isLoading = true;
		const response = await fetch('https://source.unsplash.com/1080x1080/?experimental?random');
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

<main class="mt-[10%] grid grid-cols-1 place-items-center justify-center min-h-screen  h-screen w-screen animate-slow-fade-in flex-col  gap-4 bg-gradient-to-tr from-astral-900 via-gray-900 to-astral-900">
	{#if isLoading}
	<div class=" border-purplethree-400  min-w-[80%] w-[60%] max-w-[60%] min-h-[100%] h-[60%] max-h-[70%] img-shadow-[3px_3px_5px_rgba(22,22,22,0.7)]  animate-pulse border-2 rounded-[8px] flex items-center justify-center">
		<p class="text-xl text-purpleone-100 animate-pulse">Loading...</p>
	</div>
		{:else if avatarUrl !== ''}
		
		<div class="flex shadow-[2px_2px_12px_[rgba(22,22,22,0.7]] drop-shadow-[2px_2px_12px_hsla(234,100%,59%,0.9)]] drop-shadow-[2px_2px_12px_hsla(255,100%,59%,0.9)]  min-w-[80%] w-[60%] max-w-[60%] min-h-[100%] h-[60%] max-h-[60%] flex-col rounded-[4px] border-[1px] border-bluetwo-600 bg-cover bg-center avatar-image"></div>
	{/if}

	<button on:click={reloadAvatar} class="w-[100px] mx-auto rounded-[8px] border-2 border-purpleone-700 bg-purpleone-900 bg-opacity-40 p-3 text-rosetwo-200 opacity-80 drop-shadow-[3px_3px_5px_rgba(22,22,22,0.7)]">Next..</button>
</main>