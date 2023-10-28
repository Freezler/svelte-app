<script>
	import { onDestroy, onMount } from 'svelte';
	import ImgOverlay from '../components/Img-overlay.svelte';
	import HeroButton from '../components/HeroButton.svelte';
	
	onMount(() => console.log('Mounted home page'));
	onDestroy(() => console.log('Unmounted home page'));
</script>

<main class="-z-10 w[110%] h-screen bg-gradient-to-tr from-astral-900 via-gray-900 to-astral-900">
	<slot />
	<div
class="xxxl: marbottom-0 left-0 right-0 top-0 -z-10 h-screen w-screen overflow-hidden bg-gradient-to-tr bg-cover bg-center bg-no-repeat from-astral-900 via-gray-900 to-astral-900"
>
		<div class="flex h-screen items-center justify-center ">
			<div class="mx-auto mb-[0%] flex h-full w-full flex-col">
				<h1
					class="text-skew-y-1 mb-[4rem] mt-[20%] w-[100%] transform animate-slow-fade-in -space-x-3 text-center font-sans text-[clamp(4rem,12vw,10rem)] font-[800] drop-shadow-[3px_3px_5px_rgba(22,22,22,0.7)]
							 md:transform-none"
				>
					{#each `RANDY` as char}
						<span
							class=" bg-gradient-to-br from-purpleone-900 via-bluetwo-300 to-rosetwo-900 bg-clip-text bg-no-repeat uppercase text-transparent"
						>
							{char}
						</span>
					{/each}
				</h1>

				<div
					class=" mx-auto flex w-[80%] items-center justify-center rounded border-[1px] border-bluethree-900 bg-greytwo-100/10 bg-cover bg-center bg-no-repeat px-5 py-24 text-center box-shadow-[4px_4px_5px_rgba(2,12,34,0.3)] backdrop-blur-xl"
				>
					<p
						class=" line-clamp-5 w-full mx-8 items-center justify-center text-center font-display text-[clamp(0.75rem,2vw,1.5rem)] font-thin text-white"
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
						incidunt vitae, modi est qui officia recusandae, sit quaerat omnis fugit
						accusamus ex ut et dolorem, vero voluptates assumenda quia quam?
					</p>
				</div>
			</div>
			
		</div>
	</div>
	<HeroButton />
</main>
<!-- <ImgOverlay /> -->

