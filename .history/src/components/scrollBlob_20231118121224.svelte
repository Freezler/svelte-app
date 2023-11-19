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
</script>

<div
	id="container"
	class="relative flex h-[92vh] w-[100vw] overflow-hidden"
	transition:fade={{ delay: 250, duration: 300 }}
	
>
	{#each info as item}
		<!-- Slide Container -->
		<div
			class="slide cubic-bezier-[1.615, 1.31, 1.855, 1] grid h-[100vh] w-[100vw] transform grid-cols-1 grid-rows-1 place-content-center justify-items-center overflow-hidden active:scale-100 transition-all  duration-[3000ms] ease-in-out hover:w-[100vw] "
		>
			<!-- image Container -->

			<div  class=" image h-[100vh] w-[100vw]  transform overflow-hidden">
				<img
					src={item.image}
					class="relative h-[100%] w-[100%] object-cover object-center hover:scale-125"
					alt=""
					loading="lazy"
				/>
				<!-- Overlay Container -->
				<div
					class="overlay  absolute inset-1 flex w-[100vw] transform items-center justify-center"
				>
					<!-- Content Container -->
					<div
						class=" content flex flex-1 -translate-x-[30px] transform flex-col items-center justify-center text-center font-display text-white  shadow-2xl	 transition-opacity duration-[1300] ease-in-out text-shadow-[3px_3px_5px_hsla(0,0%,0%,0.4)]"
					>
						<h1
							class="title border-b-[1px] border-blueone-100 font-sans text-[clamp(1.5rem,5vw,5rem)] font-[700] text-white "
							data-title={item.city}
						>
							{item.city}
						</h1>
						<!-- Emblem Container -->
						<div
							class="emblem relative z-150 w-[content]   items-center justify-center "
						>
							<svg class="w-[100px] object-contain py-8" viewBox="0 0 100 100">
								<image xlink:href={item.emblem} width="100" height="100" />
							</svg>
						</div>
						<!-- City information Container -->
						<ul
							class="city-info opacity-100 z-100 m-8 flex transform flex-col gap-4  px-2 py-4 font-display transition-[-translate_y_0px] duration-[300ms] ease-in-out"
						>
							<li class="country">{item.country}</li>
							<li class="founded">Founded: {item.founded}</li>
							<li class="population">Population: {item.population}</li>
						</ul>
					</div>
					<div class="btn-close" >
						<button type="submit" class="btn-close"></button>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		border: 2px solid red;
	}

	.slide:hover .overlay {
		opacity: 1;
	}

	.content {
		transform: translateX(0);
		transition-duration: 2200ms; ;
		transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1);
		background-color: oklab(1% 20% 0 / 0.4);
	}

	.slide:hover .content {
		transform: translateX(0);
		scale: 1.1;
		opacity: 1;
	}

	.emblem {
		transform: translateX(100px);
		transition: transform 500ms ease-in-out;
	}

	.slide:hover .emblem {
		transform: translateX(0);
		scale: 1.6;

		
	}
	
</style>
