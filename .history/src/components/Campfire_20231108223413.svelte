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
	<div class="bobbin h-screen pt-[42px] sm:pt-[62px] md:pt-[100px] xl:pt-[125px] animate-slow-fade-in bg-shadow-[2px_2px_12px_[rgba(22,22,22,0.7] text-center drop-shadow-[2px_2px_12px_hsla(234,100%,59%,0.9)]] avatar-image flex  w-[100%] min-w-[100%] max-w-[100%] flex-col border-[1px] border-bluetwo-600 bg-cover bg-center drop-shadow-[2px_2px_12px_hsla(255,100%,59%,0.9)]">
	  <Hero />
	  
	</div>
	{/if}

  </div>
</main>
<style>
	@media screen and (max-height: 268px) {
		.bobbin {
		  
			padding-top: 2rem;
		}
			
	}
</style>
