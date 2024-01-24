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
		const response = await fetch('httphs://source.unsplash.com/2169x2169/?beautiful');
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
	class="mx-auto flex h-[100svh]  w-[100vw] animate-slow-fade-in flex-col items-center justify-center overflow-hidden bg-purpleone-950 "
>
	<div class="justify-top flex w-[100vh] flex-col items-center border-b-[1px] bg-black">
		{#if isLoading}
			<div
				class="flex h-screen w-[100%] min-w-[100%] max-w-[100%] animate-pulse items-center justify-center bg-cover bg-center shadow-[3px_3px_15px_3px_rgba(22,22,22,0.7)] drop-shadow-[2px_2px_12px_hsla(155,100%,59%,0.7)]"
			>
				<p class="text-sm animate-[pulse_0.5s_ease-in-out_infinite] font-type pt-8 text-purplethree-100 drop-shadow-[2px_2px_12px_hsla(155,100%,59%,0.3)]"><Loader />Loading</p>
			</div>
		{:else if avatarUrl !== ''}
			<div
				class="  drop-shadow-[2px_2px_12px_hsla(54,50%,99%,0.5)]] avatar-image flex h-screen w-[1] min-w-[100%] max-w-[1440] scale-100 flex-col items-center justify-center  bg-cover bg-center text-center md:scale-[1]"
			>
				<Hero />
				<Header />
			</div>
		{/if}
	</div>
</main>
<style>




</style>