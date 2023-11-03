<script>
	import { onDestroy, onMount } from 'svelte';
	import HeroButton from '../components/HeroButton.svelte';

	onMount(() => console.log('Mounted home page'));
	onDestroy(() => console.log('Unmounted home page'));

	function handleContactButtonClick() {
		// Add your logic here
	}
</script>

<main>
	<div class="max-w-screen h-screen overflow-hidden bg-gradient-to-tr from-blueone-300 via-gray-300 to-blueone-900 bg-no-repeat">
		<div class="flex items-center justify-center">
			<div class="mx-auto">
				<h1 class="bg-[text-shadow-[8px_8px_15px_rgba(12,54,175,0.4)] border-[1px] border-bluethree-300 drop-shadow-[3px_3px_13px_[rgba(202,12,175,0.1)] w-[100%] transform bg-gradient-to-tr from-blueone-300 via-gray-300 bg-cover bg-clip-text text-center font-display text-[clamp(4.2rem,12vw,12rem)] font-[900] uppercase text-transparent md:transform-none">
					{#each `RANDY` as char}
						<span class="animate-fade-in bg-[url('https://source.unsplash.com/340x340/?flowers,dark')] bg-clip-text bg-center bg-no-repeat font-[700]">
							{char}
						</span>
					{/each}
				</h1>

				<div class="p-16 mx-auto grid grid-cols-1 grid-rows-2 place-items-center max-h-[50] min-h-[30%] min-w-[90%] rounded border-[1