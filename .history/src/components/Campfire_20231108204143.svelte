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
	<div class="pt-8 animate-slow-fade-inimg-shadow-[2px_2px_12px_[rgba(22,22,22,0.7] text-center drop-shadow-[2px_2px_12px_hsla(234,100%,59%,0.9)]] avatar-image flex h-[screen] w-[100%] min-w-[100%] max-w-[100%] flex-col border-[1px] border-bluetwo-600 bg-cover bg-center drop-shadow-[2px_2px_12px_hsla(255,100%,59%,0.9)]">
	  <h1 class="mb-12 drop-shadow-lg text-shadow-[3px_3px_5px_rgba(22,22,22,0.9)] text-bluetwo-200 text-8xl grid place-items-top h-screen uppercase font-bold ">randy</h1>
	  <Hero />
	  <p class="text-shadow-[3px_3px_5px_rgba(22,22,22,0.9)] drop-shadow-xl text-purpleone-100 text-sm text-center grid place-items-center h-full w-[100%] px-[10%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quaerat dolore rem obcaecati omnis deserunt.</p>
	  <button  class="translate-y-[-0%] mx-auto w-[80px] min-w-[80px] max-w-[80%] hover:shadow-[3px_3px_5px_rgba(22,22,22,0.7)] rounded-[8px] border-2 border-purpleone-700 bg-purpleone-300 bg-opacity-60 py-2 px-3 text-center text-rosetwo-100 opacity-90 drop-shadow-[3px_3px_5px_rgba(22,22,22,0.7)]">
		CLICK
	  </button>
	</div><script>
	  import { sendEmail } from '$lib/index.js';
	  import Avatar from 'svelte-avatar';
	  
	  let showContent = false;
	  setTimeout(() => {
		showContent = true;
	  }, 100); // Adjust the delay as needed
	</script>
	
	<section class="animate-slow-fade-in grid align-middle place-items-center w-full md:w-[60%] mx-auto h-[240px] bg-slate-400 bg-opacity-30 bg-contain bg-no-repeat text-center">
	  {#if showContent}
		<div class="flex flex-col relative gap-8">
		  <div class="translate-y-[20%] animate-slow-fade-in flex flex-col items-center justify-center">
			<Avatar bgColor="hsla(234,100%,59%,0.3)" textColor="white" name="Randy de vries" src="https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Twinkle&skinColor=Pale" size="calc(32vh - 40px)" />
		  </div>
		  <div class="flex flex-col items-center justify-center">
			<h3 class="font-[500] text-xl text-red-300"><span class="text-purpleone-100 font-display">hi I'am,</span>RANDY</h3>
			<p class="text-purpleone-100 text-shadow-[3px_3px_5px_rgba(22,22,22,0.9)] w-[80%] text-center">Welcome to my web project made with Svelte & TailwindCSS</p>
		  </div>
		  <div class="font-[500] mb-16">
			<button class="text-[12px] bg-purpleone-200 py-1 px-2 rounded-md hover:text-white hover:bg-black" type="button">
			  INFO
			</button>
			<button class="text-[12px] bg-purpleone-200 py-1 px-2 rounded-md hover:text-white hover:bg-black" on:click={handleContactButtonClick} type="button">
			  CONTACT
			</button>
		  </div>
		</div>
	  {/if}
	</section>
	
	<style>
	  .animate-slow-fade-in {
		opacity: 0;
		transition: opacity 0.5s ease-in-out;
	  }
	
	  .animate-slow-fade-in.show {
		opacity: 1;
	  }
	</style>
	
	<script>
	  import { onMount } from 'svelte';
	
	  let section;
	
	  onMount(() => {
		setTimeout(() => {
		  section.classList.add('show');
		}, 0);
	  });
	</script>

  </div>
</main>
