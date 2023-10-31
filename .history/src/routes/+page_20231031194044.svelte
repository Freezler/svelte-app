<script>
	
	import { onDestroy, onMount } from 'svelte';
	import HeroButton from '../components/HeroButton.svelte';

	onMount(() => console.log('Mounted home page'));
	onDestroy(() => console.log('Unmounted home page'));
</script>

<main class="-z-10">
	<slot />
	<div
		class="-z-50 h-screen w-screen overflow-hidden bg-gradient-to-tr from-black via-gray-900 to-blueone-900 bg-no-repeat">
		<div class="flex h-screen items-center justify-center">
			<div class="mx-auto flex h-full w-full flex-col">
				<h1
					class="text-shadow-[3px_3px_70px_rgba(2,12,175,0.5)] transpa uppercase animate-slow-fade-in  drop-shadow-[3px_3px_5px_rgba(22,22,22,0.7)] md:transform-none mb-[5%] mt-[5%] w-[100%] transform  -space-x-3 text-center font-display text-[clamp(5.2rem,12vw,12rem)] font-[800]">
					{#each `RANDY` as char}
						<span

						class="font-sand animate-fade-in -translate-y-[0px] font-bold bg-clip-text"
						style="
							background-image: url('https://source.unsplash.com/1080x1080/?random?art');
							background-size: cover;
							
						
						
							
							
							margin: 4px 0;
						"
					>							
							{char}
						</span>
					{/each}
				</h1>

				<div
					class=" box-shadow-[4px_4px_5px_rgba(2,12,34,0.3)] mx-auto flex w-[90%] min-w-[80%] min-h-[30%] max-h-[100%] items-center justify-center rounded border-[1px] border-bluethree-900 bg-greytwo-100/10 bg-cover bg-center bg-no-repeat px-5 py-16 text-center backdrop-blur-xl">
					<p
						class="leading-relaxed mx-4 h-[100%] max-h-[1000px] md:180px lg:200px xl:h-[200px] w-[80%] items-center justify-center text-center font-sans text-[clamp(0.70rem,2vw,1.5rem)] font-thin text-white">
						 Welkom op mijn privépagina waar ik mijn persoonlijke progressie deel. Hier kan ik mijn kennis bijhouden en mijn "skills" laten zien. Dit is mijn eigen ruimte om mijn prestaties te volgen en te reflecteren. Voel je vrij om mee te kijken op mijn reis naar succes.
					</p>
					<HeroButton />
				</div>
			</div>
		</div>
	</div>
</main>
<!-- <ImgOverlay /> -->
