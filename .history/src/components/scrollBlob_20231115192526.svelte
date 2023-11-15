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
</script>

<div
	id="container"
	class="relative flex h-[100vh] w-[100vw] overflow-hidden"
	data-sveltekit-prefetch
	data-sveltekit-noscroll
	data-sveltekit-preload-data
>
	{#each info as item}
		<!-- Slide Container -->
		<div
			class="[&>*:nth-child(odd)]:animate-pulse slide grid h-[100%] w-[100%] translate-x-[0] transform grid-cols-1 grid-rows-1 place-content-center justify-items-center overflow-hidden transition duration-[1600ms] ease-in-out hover:w-[800%] hover:scale-[1.6]"
		>
			<!-- image Container -->

			<div class="image h-[100vh] w-[100vw] transform overflow-hidden">
				<img
					src={item.image}
					class="h-[100vh]  object-fit object-center transition duration-[2300ms] ease-in-out hover:scale-125"
					alt=""
				/>
				<!-- Overlay Container -->
				<div
					class=" overlay absolute inset-20 flex h-[100vh] w-[100%] -translate-x-[33%] transform items-center justify-center bg-greyone-300 bg-opacity-30 opacity-0"
				>
					<!-- Content Container -->
					<div
						class=" content flex flex-1 translate-x-[0] transform flex-col items-center justify-center gap-4 text-center font-display text-white transition-all duration-[2300] ease-in-out text-shadow-[3px_3px_5px_hsla(0,0%,0%,0.9)]"
					>
						<h1
							class="title border-b-[1px] border-blueone-100 font-display text-3xl font-[700] text-white transition-all"
							data-title={item.city}
						>
							{item.city}
						</h1>
						<!-- Emblem Container -->
						<div class="emblem relative z-50 w-[content] transform items-center justify-center opacity-100 transition duration-[4200ms] ease-in-out">
							<svg class="w-[100px] object-cover" viewBox="0 0 100 100">
							  <image xlink:href={item.emblem} width="100" height="100" />
							</svg>
						  </div>
						<!-- City information Container -->
						<ul
							class="city-info opacity-1 z-100 m-4 flex translate-y-[0] transform flex-col gap-2 border-[1px] border-purple-600 bg-greyone-950 bg-opacity-30 px-2 py-4 font-display transition duration-[4300ms] ease-in-out"
						>
							<li class="country  ">{item.country}</li>
							<li class="founded">Founded: {item.founded}</li>
							<li class="population">Population: {item.population}</li>
						</ul>
					</div>
					<div class="btn-close"></div>
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
	}

	.slide:hover .overlay {
		opacity: 1;
	}

	.content {
		transform: translateX(-100%);
		transition: transform 500ms ease-in-out;
		background-color: oklab(1% 20% 0 / 0.4);
	}

	.slide:hover .content {
		transform: translateX(0);
	}

	.emblem {
		transform: translateX(100%);
		transition: transform 500ms ease-in-out;
	}

	.slide:hover .emblem {
		transform: translateX(0);
	}
</style>
