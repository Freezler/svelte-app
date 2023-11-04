<script>
  import { afterUpdate, onMount } from 'svelte';

  let avatarUrl = '';
  let isLoading = true;

  const reloadAvatar = async () => {
	isLoading = true;
	const response = await fetch('https://source.unsplash.com/1080x1080/?experimental?random');
	avatarUrl = response.url;
	isLoading = false;
  };

  onMount(reloadAvatar);

  afterUpdate(() => {
	if (isLoading) return; // Only reload avatar after initial load
	const image = document.querySelector('.avatar-image');
	image.style.backgroundImage = `url(${avatarUrl})`;
  });
</script>

<main class="translate-y-6 flex justify-start items-center mx-auto h-screen min-h-screen w-screen animate-slow-fade-in flex-col sm:justify-center gap-2 bg-gradient-to-tr from-astral-900 via-gray-900 to-astral-900">
  <div class="flex flex-col items-center sm:justify-start justify-center gap-2 w-full">
	{#if isLoading}
	<div class="img-shadow-[3px_3px_5px_rgba(22,22,22,0.7)] flex h-[200px] sm:h-[300px] max-h-[100%] min-h-screen w-[100%] min-w-[80%] max-w-[60%] animate-pulse items-center justify-center rounded-[8px] border-[1px] border-purplethree-400">
	  <p class="animate-pulse text-xl text-purpleone-100">Loading...</p>
	</div>
	{:else if avatarUrl !== ''}
	<div class="img-shadow-[2px_2px_12px_[rgba(22,22,22,0.7] text-center drop-shadow-[2px_2px_12px_hsla(234,100%,59%,0.9)]] avatar-image flex h-[200px] sm:h-[300px] max-h-[100%] min-h-screen w-[60%] min-w-[80%] max-w-[60%] flex-col rounded-[8px] border-[1px] border-bluetwo-600 bg-cover bg-center drop-shadow-[2px_2px_12px_hsla(255,100%,59%,0.9)]">
	  <h1 class="text-purpleone-200 text-6xl grid place-items-center h-full">randy</h1>
	  <p class="text-purpleone-100 text-sm text-center grid place-items-center h-full w-[10%] px-[10%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quaerat dolore rem obcaecati omnis deserunt.</p>
	</div>
	{/if}

	<button on:click={reloadAvatar} class="img-shadow-[3px_3px_5px_rgba(22,22,22,0.7)] rounded-[8px] border-2 border-purpleone-700 bg-purpleone-300 bg-opacity-60 py-2 px-3 text-center text-rosetwo-200 opacity-80 drop-shadow-[3px_3px_5px_rgba(22,22,22,0.7)]">
	  CLICK
	</button>
  </div>
</main>