<script>
	let info = [
		{
			city: 'Venice',
			country: 'Italy',
			population: '260,060',
			founded: '697',
			image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/544318/venice.jpg',
			emblem: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/544318/italian-emblem.svg'
		},
		{
			city: 'Paris',
			country: 'France',
			population: '2.2 Million',
			founded: '~250BC',
			image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/544318/paris.jpg',
			emblem: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/544318/french-emblem.svg'
		},
		{
			city: 'Salzburg',
			country: 'Austria',
			population: '145,871',
			founded: '1622',
			image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/544318/salzburg.jpg',
			emblem: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/544318/austrian-emblem.svg'
		},
		{
			city: 'Prague',
			country: 'Czech Republic',
			population: '1.2 Million',
			founded: '870',
			image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/544318/prague.jpg',
			emblem: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/544318/czech-emblem.svg'
		}
	];
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	let show = false;
	onMount(() => {
		show = true;
	});
</script>

{#if show}
	<div
		id="container"
		class="relative flex h-[100%] w-[100%] overflow-hidden bg-black"
		transition:fade={{ delay: 250, duration:500 }}
	>
		{#each info as item}
			<!-- Slide Container -->
			<div
				class="slide flex h-[100vh] w-[100vw] sm:w-[1000px] hover:w-[2200px]  flex-col  items-center justify-center overflow-hidden transition-all duration-[1600ms] cubic-bezier(0.075, 0.82, 0.165, 1)"
			>
				<!-- image Container -->

				<div
					class=" image flex h-[100vh] w-[100vw] transform flex-col items-center  overflow-hidden "
				>
					<img
						src={item.image}
						class=" h-[100vh] w-[100%] transform  object-fill lg:object-left md:object-cover object-left-bottom transition duration-[2400ms] "
						alt=""
						loading="lazy"
					/>
					<!-- Overlay Container -->
					<div
						class="overlay absolute inset-0 flex transform items-center "
					>
						<!-- Content Container -->
						<div
							class="content z-100 flex flex-1 transform flex-col items-center justify-center text-center font-display text-white  shadow-xl transition duration-[1900ms] ease-in-out text-shadow-[3px_3px_5px_hsla(180,45%,10%,0.9)] "
						>
							<h1
								class="title font-sans text-[clamp(1.2rem,5vw,4rem)] font-[800] text-white"
								data-title={item.city}
							>
								{item.city}
							</h1>
							<!-- Emblem Container -->
							<div class="emblem z-150 items-center justify-center">
								<svg class="w-[100px]" viewBox="0 0 100 100">
									<image xlink:href={item.emblem} width="100" height="100" />
								</svg>
							</div>
							<!-- City information Container -->
							<ul
								class="city-info opacity-1 z-100 flex  flex-col  font-display "
							>
								<li class="country">{item.country}</li>
								<li class="founded">Founded: {item.founded}</li>
								<li class="population">Population: {item.population}</li>
							</ul>
						</div>
						
					</div>
				</div>
			</div>
		{/each}
	</div>
{/if}

<style>
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	.slide:hover .overlay {
		opacity: 0;
		transition: all 300ms ease-in-out;
	}

	.content {
		
		transition-duration: 3000ms;
		transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		background-color: oklab(1% 20% 20% / 0.5);
	}

	.slide:hover .content {
		transform: translate(0) translateY(0);
		transition: all 900ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
		width:800px;
		opacity: 1;
	}
	.slide .content {
		transform: translateX(0) translateY(200%);	;
		transition: all 700ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
		width: 1000px;
		opacity: 0;
	}

	.emblem {
		transform: translateX(0);
		transition: transform 1000ms ease-in-out;
	}

	.slide:hover .emblem {
		transform: translateX(0);
		scale: 1;
		position: relative;
	}

	.slide .image:hover {
		transform: scale3d(1.2, 1.2, 1.2);
		object-fit: cover;
		height: 100vh;
		width: 800px;
		transition: 3700ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
	}

	.slide:hover .overlay {
		opacity: 1;
		/* Update the width to 75% of the viewport width */
		transition: 2000ms cubic-bezier(cubic-bezier(0.83, 0.61, 0.28, 0.36));
		width: 100%;
		height: 100%;
	}
</style>
