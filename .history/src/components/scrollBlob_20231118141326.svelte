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
	class="relative flex h-[100vh] w-[100vw] overflow-hidden"
	transition:fade={{ delay: 100, duration: 200 }}
	
>
	{#each info as item}
		<!-- Slide Container -->
		<div
			class="slide  grid h-[100vh] w-[100vw]  grid-cols-1 grid-rows-1 place-content-center justify-items-center overflow-hidden  transition-all duration-[1400ms] cubic-bezier(0.075, 0.82, 0.165, 1) hover:w-[1500%] "
		>
			<!-- image Container -->

			<div  class=" image h-[100vh] w-[100vw]  transform overflow-hidden">
				<img
					src={item.image}
					class="relative h-[100vh] w-[100vw]  hover:scale-[1.5] transition-all duration-[15400ms] infinite cubic-bezier(1.375, 0.482, 0.765, 1)"
					alt=""
					loading="lazy"
				/>
				<!-- Overlay Container -->
				<div
					class="overlay absolute  top-[25%] inset-0     items-center justify-center"
				>
					<!-- Content Container -->
					<div
						class="relative content flex flex-1 opacity-0  gap-8 flex-col items-center justify-between text-left font-display text-white  shadow-2xl transition-all duration-[1900ms] ease-in-out text-shadow-[3px_3px_5px_hsla(0,0%,0%,0.9)]"
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
							<svg class="w-[100px] object-cover py-0" viewBox="0 0 100 100">
								<image xlink:href={item.emblem} width="100" height="100" />
							</svg>
						</div>
						<!-- City information Container -->
						<ul
							class="city-info opacity-1 z-100 flex transform  flex-1 flex-row   font-display transition-all duration-[3000ms] ease-in-out"
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
		height: 380px;	
		transition: all 1200ms ease-in-out;
	}

	.content {
		transition: all;
		transition-duration: 2000ms;
		transition-timing-function: ease-in-out;
		background-color: oklab(1% 20% 20% / 0.2);
		
		
	}

	.slide:hover .content {
		transform: translateX(50%) translateY(0);
		transition: all 1200ms ease-in-out;
		
		opacity: 1;
	}
	.slide .content {
		transform: translateX(-100%) translateY(0);
		transition: all 1200ms ease-in-out;
		
		opacity: 1;
	}

	.emblem {
		transform:  scale(0.5) opacity(0) rotate(0) skew(0) rotate3d, 1, 12, 120deg;
		transition: transform 2000ms ease-in-out;
	}

	.slide:hover .emblem {
		transform: translateX(0);
		scale: 1.2;

	}
	
</style>
