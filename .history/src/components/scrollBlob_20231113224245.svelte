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
		<div
			class=" slide flex h-[100%] w-[100%] hover:w-[500%] translate-x-[0]  overflow-hidden transition duration-[2300ms] ease-in-out  "
		>
			<div class="image h-[100vh]   w-[100vw] transform overflow-hidden transition duration-[1300ms] ">
				<img
					src={item.image}
					class="h-[100vh]  w-[100vw] object-cover  object-center transition duration-[1300ms]ease-in-out" "
					alt=""
				/>
				<div
					class=" overlay absolute transform	 inset-0 flex h-full max-w-[screen] items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-700 ease-in-out"
				>
					<div
						class=" content text-center transform font-display text-white text-shadow-[3px_3px_5px_rgba(132,212,2,0.9)] flex flex-1 flex-col items-center gap-4 transition duration-500 ease-in-out"
					>
						<h1
							class="title border-b-[1px] border-blueone-100 font-display text-3xl font-[700] text-white"
							data-title={item.city}
						>
							{item.city}
						</h1>
						<div
							class="emblem relative z-50 h-[100px] sm:h-[50px] w-[100px] sm:w-[50px] scale-125 items-center justify-around opacity-100 transition-all duration-700 ease-in-out"
						>
							<img src={item.emblem} alt="" srcset="" />
						</div>
						<ul
							class="city-info opacity-1 duration-900 flex translate-y-[16vh] transform flex-col gap-2 bg-greyone-900 bg-opacity-70 font-display transition-opacity ease-in"
						>
							<li class="country">{item.country}</li>
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
