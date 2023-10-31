<script>
	import { onDestroy, onMount } from 'svelte';
	import HeroButton from '../components/HeroButton.svelte';

	onMount(() => console.log('Mounted home page'));
	onDestroy(() => console.log('Unmounted home page'));
</script>

<main class="-z-10">
	<slot />
	<div
		class="-z-50 h-screen w-screen overflow-hidden bg-gradient-to-tr from-black via-gray-900 to-orange--300 bg-no-repeat">
		<div class="flex h-screen items-center justify-center">
			<div class="mx-auto flex h-full w-full flex-col">
				<h1
					class=" animate-slow-fade-in text-skew-y-1 drop-shadow-[3px_3px_5px_rgba(22,22,22,0.7)]md:transform-none mb-[5%] mt-[4%] w-[100%] transform  -space-x-3 text-center font-sans text-[clamp(4rem,12vw,10rem)] font-[800]">
					{#each `RANDY` as char}
						<span

						class="font-sand animate-fade-in -translate-y-[0px] font-bold"
						style="
							background-image: url('https://media.giphy.com/media/eAxaiTPPlHsPYElltk/giphy-downsized-large.gif');
							background-size: cover;
							color: transparent;
							-moz-background-clip: text;
							-webkit-background-clip: text;
							background-position: center;
							text-transform: uppercase;
							font-size: 6.6rem;
							margin: 4px 0;
						"
					>							
							{char}
						</span>
					{/each}
				</h1>

				<div
					class=" box-shadow-[4px_4px_5px_rgba(2,12,34,0.3)] mx-auto flex w-[80%] items-center justify-center rounded border-[1px] border-bluethree-900 bg-greytwo-100/10 bg-cover bg-center bg-no-repeat px-5 py-24 text-center backdrop-blur-xl">
					<p
						class="pb-[2rem] mx-4 line-clamp-3 w-full items-center justify-center text-center font-sans text-[clamp(0.75rem,2vw,1.5rem)] font-thin text-white">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Praesentium incidunt vitae, modi est qui officia
						recusandae, sit quaerat omnis fugit accusamus ex ut et
						dolorem, vero voluptates assumenda quia quam?
					</p>
					<HeroButton />
				</div>
			</div>
		</div>
	</div>
</main>
<!-- <ImgOverlay /> -->
