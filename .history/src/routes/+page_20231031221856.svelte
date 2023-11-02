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
					class="bg-[text-shadow-[8px_8px_15px_rgba(12,54,175,0.4)] shadow-[3px_3px_13px_[rgba(202,12,175,0.1)] w-[100%] transform animate-fast-fade-in bg-gradient-to-tr from-blueone-300 via-gray-300 bg-cover bg-clip-text text-center font-display text-[clamp(4.2rem,12vw,12rem)] font-[900] uppercase text-transparent md:transform-none"
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
					class="bg-600 mx-auto pb-8 flex max-h-[100%] min-h-[30%] min-w-[90%] items-center justify-center rounded border-[1px] border-bluethree-300 bg-gradient-to-tr from-bluethree-900/20 via-bluetwo-900/20 to-bluetwo-900/20 bg-cover bg-center bg-no-repeat p-4 text-center drop-shadow-[3px_5px_9px_rgba(20,22,2,0.9)] filter text-shadow-[4px_4px_5px_rgba(2,12,34,0.6)] md:w-[80%]"
				>
					<p
						class="xs:m-12 sm:m-20 mx-8 h-[110%] max-h-[1200px] w-[80%] items-center justify-center text-center font-sans text-[clamp(0.9rem,2vw,1.5rem)] font-thin leading-relaxed text-white xl:h-[150px] xxl:h-[100px]"
					>
						Welkom op mijn privépagina waar ik mijn persoonlijke progressie deel. Hier
						kan ik mijn kennis bijhouden en mijn "skills" laten zien. Dit is mijn eigen
						ruimte om mijn prestaties te volgen en te reflecteren. Voel je vrij om mee
						te kijken op mijn website.
					</p>
					<HeroButton />
				</div>
			</div>
		</div>
	</div>
</main>
<!-- <ImgOverlay /> -->
