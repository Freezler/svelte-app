<script>
	
	import { onDestroy, onMount } from 'svelte';
	import HeroButton from '../components/HeroButton.svelte';

	onMount(() => console.log('Mounted home page'));
	onDestroy(() => console.log('Unmounted home page'));
</script>

<main class="-z-10">
	<slot />
	<div
		class="-z-50 h-screen w-screen overflow-hidden bg-gradient-to-tr from-blueone-300 via-gray-3Í00 to-blueone-900 bg-no-repeat">
		<div class="flex h-screen items-center justify-center">
			<div class="mx-auto flex h-full w-full flex-col">
				<h1
					class="text-shadow-[3px_3px_70px_rgba(202,12,175,0.5)] text-transparent bg-cover uppercase animate-fast-fade-in  drop-shadow-[3px_3px_3px_rgba(122,40,22,0.7)] md:transform-none   w-[100%] transform  text-center font-display text-[clamp(5.2rem,12vw,12rem)] font-[200]">
					{#each `RANDY` as char}
						<span

						class="font-sans animate-fade-in -translate-y-[0px]  bg-clip-text"
						style="
							background-image: url('https://source.unsplash.com/340x340/?blob?random');
						
							
						
						
							
							
							
						"
					>							
							{char}
						</span>
					{/each}
				</h1>

				<div
					class="filter drop-shadow-[3px_5px_9px_rgba(20,22,2,0.9)] bg-gradient-to-tr from-blueone-400 via-cyan-900 to-bluetwo-900 bg-600 text-shadow-[4px_4px_5px_rgba(2,12,34,0.6)] mx-auto flex md:w-[90%] min-w-[90%] min-h-[30%] max-h-[100%] items-center justify-center rounded border-[1px] border-bluethree-300 bg-cover bg-center bg-no-repeat p-4 text-center">
					<p
						class="leading-relaxed mx-8 xs:mt-18 max-h-[1200px] h-[132px] xl:h-[150px] xxl:h-[100px] w-[80%] items-center justify-center text-center font-sans text-[clamp(0.9rem,2vw,1.5rem)] font-thin text-white">
						 Welkom op mijn privépagina waar ik mijn persoonlijke progressie deel. Hier kan ik mijn kennis bijhouden en mijn "skills" laten zien. Dit is mijn eigen ruimte om mijn prestaties te volgen en te reflecteren. Voel je vrij om mee te kijken op mijn reis naar succes.
					</p>
					<HeroButton />
				</div>
			</div>
		</div>
	</div>
</main>
<!-- <ImgOverlay /> -->
