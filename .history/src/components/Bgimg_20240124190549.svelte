<script>
	import { afterUpdate, onMount } from 'svelte';
	import Loader from './Loader.svelte';
	import Hero from './Hero.svelte';
	import { fade } from 'svelte/transition';
	import Header from './Header.svelte';
	let avatarUrl = '';
	let isLoading = true;

	const reloadAvatar = async () => {
		isLoading = true;
		const response = await fetch('https://source.unsplash.com/14x2169/?tech,programming');
		avatarUrl = response.url;
		isLoading = false;
	};

	onMount(() => {
		reloadAvatar();
	});

	afterUpdate(() => {
		if (isLoading) return; // Only reload avatar after initial load
		const image = document.querySelector('.avatar-image');
		image.style.backgroundImage = `url(${avatarUrl})`;
		image.style.backgroundSize = 'cover';
		image.style.backgroundPosition = 'top center';
		
	

		image.style.opacity = '1';
		image.style.filter = 'blur(0px)';
		image.style.transform = 'scale(1)';
		image.style.transition = 'opacity 0.3s ease-in-out, filter 0.3s ease-in-out, transform 0.s ease-in-out';
	});

	function handleClick() {
		document.querySelector('.avatar-image').style.backgroundImage = `url(${avatarUrl})`;
	}
	
</script>

<main
	on:transition={fade}
	class="mx-auto flex h-[100svh] w-screen animate-slow-fade-in flex-col items-center justify-center overflow-hidden bg-stone-950 "
>
	<div class="justify-top flex w-[100%] flex-col items-center ">
		{#if isLoading}
			<div
				class="flex h-screen w-[100%] min-w-[100%] animate-pulse items-center justify-center bg-cover bg-center shadow-[3px_3px_15px_3px_rgba(22,22,22,0.7)] 
			bg-transparent drop-shadow-[5px_5px_15px_hsla(175,100%,9%,0.8)]"
			>
				<p class="text-xl animate-[pulse_2s_ease_infinite] font-type pt-8 text-purplethree-00 drop-shadow-[2px_2px_12px_hsla(155,100%,159%,0.9)]"><Loader />Loading</p>
			</div>
		{:else if avatarUrl !== ''}
			<div
				class="  drop-shadow-[2px_2px_12px_hsla(154,90%,9%,0.9)]] avatar-image flex h-screen w-screen  flex-col items-center justify-center  bg-cover bg-center text-center "
			>
				<Hero />
				<Header />
			</div>
		{/if}
	</div>
</main>
<style>




</style>