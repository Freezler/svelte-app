<script>
	import { onDestroy, onMount } from 'svelte';
	import HeroButton from '../components/HeroButton.svelte';

	onMount(() => console.log('Mounted home page'));
	onDestroy(() => console.log('Unmounted home page'));
</script>

<main class="-z-10">
	<slot />
	<div
		class="-z-50 h-screen w-screen overflow-hidden bg-gradient-to-tr from-blueone-300 via-gray-300 to-blueone-900 bg-no-repeat"
	>
		<div class="flex h-screen items-center justify-center">
			<div class="mx-auto flex h-full w-full flex-col">
				<h1
					class="bg-[text-shadow-[8px_8px_15px_rgba(12,54,175,0.4)] border-[1px] border-bluethree-300 drop-shadow-[3px_3px_13px_[rgba(202,12,175,0.1)] w-[100%] transform animate-fast-fade-in bg-gradient-to-tr from-blueone-300 via-gray-300 bg-cover bg-clip-text text-center font-display text-[clamp(4.2rem,12vw,12rem)] font-[900] uppercase text-transparent md:transform-none"
				>
					{#each `RANDY` as char}
						<span
							class="font-sans animate-fade-in -translate-y-[0px] bg-[url('https://source.unsplash.com/340x340/?flowers,dark')] bg-clip-text bg-center bg-no-repeat font-[700] -sp"
						>
							{char}
						</span>
					{/each}
				</h1>

				<div
					class="p-16 mx-auto grid grid-cols-1 grid-rows-2 place-items-center max-h-[50] min-h-[30%] min-w-[90%] justify-center rounded border-[1px] border-bluethree-300 bg-gradient-to-tr from-bluethree-900/20 via-bluetwo-900/20 to-bluetwo-900/20 bg-cover bg-center bg-no-repeat items-center text-center drop-shadow-[3px_5px_9px_rgba(20,22,2,0.9)] filter text-shadow-[4px_4px_5px_rgba(2,12,34,0.6)] md:w-[80%]"
				>
					<p
						class="xs:m-12 sm:m-20 mx-8 h-[100%] max-h-[1200px] w-[80%] items-center justify-center text-center font-sans text-[clamp(0.9rem,2vw,1.5rem)] font-thin leading-relaxed text-white xl:h-[150px] xxl:h-[100px]"
					>
						Welkom op mijn privépagina waar ik mijn persoonlijke progressie deel. Hier
						kan ik mijn kennis bijhouden en mijn "skills" laten zien. Dit is mijn eigen
						ruimte om mijn prestaties te volgen en te reflecteren. Voel je vrij om mee
						te kijken op mijn website.
					</p>
					<div class="flex flex-col items-center justify-center absolute z-10 min-h-[100%] mx-auto text-center text-[clamp(0.6rem,1.3vw,1.5rem)]">
						<div class="relative">
							<button class="absolute min-w-[6rem] max-w-[10rem] select-none px-5 py-2 font-bold text-purpleone-100 rounded-[8px] border-[2px] border-bluethree-500 bg-transparent transition-transform duration-150 ease-in-out animate-slow-slide-in hover:border-purpleone-100 hover:bg-bluethree-500 active:scale-[97%] active:drop-shadow-[2px_1px_8px_hsla(225,100%,100%,0.3)]" data-te-ripple-init data-te-ripple-color="light" href="#0" on:click={handleContactButtonClick}>
								CONTACT
							</button>
						</div>
					
						<a class="absolute right-4 min-w-[6rem] max-w-[10rem] px-5 py-2 font-bold text-purpleone-100 rounded-[8px] border-[2px] border-primary-100 bg-bluethree-500 transition-transform duration-300 ease-in-out animate-slow-slide-up hover:border-bluethree-500 hover:bg-transparent active:animate-pulse text-[clamp(0.6rem,1.3vw,1.5rem)]" data-te-ripple-init data-te-ripple-color="dark" href="/about">
							INFO
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>