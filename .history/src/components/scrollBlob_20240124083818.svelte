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

	import { onMount } from 'svelte';
	let show = false;
	onMount(() => {
		show = true;
	});
</script>

{#if show}
	<div
		id="container"
		class="relative flex h-[100%] w-[100%] overflow-hidden transition duration-[600ms]
		"
	>
		{#each info as item}
			<!-- Slide Container -->
			<div
				class="slide cubic-bezier(0.075, 0.82, 0.165, 1) flex h-[100vh] w-[100vw] flex-col items-center justify-center overflow-hidden transition-all duration-[1600ms] hover:w-[2200px]"
			>
				<!-- image Container -->

				<div
					class=" image loading-lazy flex h-[100vh] w-[100vw] transform flex-col items-center overflow-hidden transition duration-[2400ms] ease-in-out"
				>
					<img
						src={item.image}
						class=" h-[100vh] w-[100vw] transform object-fill object-left-bottom transition duration-[2400ms] md:object-cover lg:object-left"
						alt=""
						loading="lazy"
					/>
					<!-- Overlay Container -->
					<div class="overlay absolute inset-0 flex transform items-center">
						<!-- Content Container -->
						<div
							class="b-4 content z-100 box-shadow-2xl flex flex-1 transform flex-col items-center justify-center text-center font-display text-white shadow-2xl transition duration-[1900ms] ease-in-out text-shadow-[3px_3px_5px_hsla(230,45%,10%,0.9)]"
						>
							<h1
								class="title opacity-1 font-mono text-[clamp(1.2rem,5vw,4rem)] font-[900] text-white
							"
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
							<ul class="city-info opacity-1 z-100 flex flex-col font-mono">
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
		transition:
			transform 600ms cubic-bezier(0.445, 0.05, 0.55, 0.95),
			width 600ms cubic-bezier(0.445, 0.05, 0.55, 0.95),
			opacity 600ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
		background-color: oklab(1% 20% 20% / 0.5);
	}

	.slide:hover .content {
		transform: translate(0) translateY(0);
		transition: all 600ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
		width: 800px;
		opacity: 1;
	}
	.slide .content {
		transform: translateX(-100%);
		width: 100vw;
		opacity: 0;
		transition: all 900ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
	}

	.emblem {
		transform: translateX(100%);
		opacity: 0;
		transition: all 2400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
	}

	.slide:hover .emblem {
		transform: translateX(0);
		opacity: 1;
		position: relative;
	}

	.slide .image:hover {
		object-fit: center;
		object-position: -50% -50%;
		height: 100vh;
		width: 100vw;
		transition: 2400ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
	}

	.slide:hover .overlay {
		opacity: 1;
		/* Update the width to 75% of the viewport width */
		transition: 2900ms cubic-bezier(cubic-bezier(0.83, 0.61, 0.28, 0.36));
	}
	.image {
		height: 100vh;
		width: 100vw;
		transition:
			object-fit 2400ms cubic-bezier(0.455, 0.03, 0.515, 0.955),
			object-position 2400ms cubic-bezier(0.455, 0.03, 0.515, 0.955),
			height 2400ms cubic-bezier(0.455, 0.03, 0.515, 0.955),
			width 2400ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
	}

	.image:hover {
		object-fit: center;
		object-position: -50% -50%;
		height: 100vh;
		width: calc(100vw + 200px);
		transition: 2400ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
	}
</style>
