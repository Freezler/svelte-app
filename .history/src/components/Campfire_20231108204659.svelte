<script>
  import { afterUpdate, onMount } from 'svelte';
	import Loader from './Loader.svelte';
	import Hero from './Hero.svelte';

  let avatarUrl = '';
  let isLoading = true;

  const reloadAvatar = async () => {
	isLoading = true;
	const response = await fetch('https://source.unsplash.com/1440x1200/?alps?forest');
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

<main class="flex items-center mx-auto  h-[screen] w-screen animate-slow-fade-in flex-col bg-gradient-to-tr from-astral-900 via-gray-900 to-astral-900">
  <div class="flex flex-col items-center sm:justify-start justify-center gap-4 w-full">
	{#if isLoading}
	<div class="img-shadow-[3px_3px_5px_rgba(22,22,22,0.7)] flex h-screen bg-cover bg-center drop-shadow-[2px_2px_12px_hsla(255,100%,59%,0.9)] w-[100%] min-w-[100%] max-w-[100%] animate-pulse items-center justify-center  ">
	  <p class="pt-8 animate-pulse text-md text-purpleone-100"><Loader />Loading</p>
	  
	</div>
	{:else if avatarUrl !== ''}
	<div class="pt-2 animate-slow-fade-inimg-shadow-[2px_2px_12px_[rgba(22,22,22,0.7] text-center drop-shadow-[2px_2px_12px_hsla(234,100%,59%,0.9)]] avatar-image flex h-[screen] w-[100%] min-w-[100%] max-w-[100%] flex-col border-[1px] border-bluetwo-600 bg-cover bg-center drop-shadow-[2px_2px_12px_hsla(255,100%,59%,0.9)]">
	  <h1 class="mb-20 drop-shadow-lg text-shadow-[3px_3px_5px_rgba(22,22,22,0.9)] text-bluetwo-200 text-4xl sm:text-5xl md:text-6xl xl:8xl grid place-items-top h-screen uppercase font-bold ">randy de vries</h1>
	  <Hero />
	  <p class="text-shadow-[3px_3px_5px_rgba(22,22,22,0.9)] drop-shadow-xl text-purpleone-100 text-sm text-center grid place-items-center h-full w-[100%] px-[10%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quaerat dolore rem obcaecati omnis deserunt.</p>
	</div>
	{/if}

  </div>
</main>
