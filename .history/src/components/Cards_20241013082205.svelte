<script>
	// Define your plans as an array of objects
	const plans = [
		{
			price: 'HTML',
			name: 'hyperText markup language',
			features: [
				'When: Created in 1993',
				'Who: Tim Berners-Lee',
				'What: HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications.'
			]
		},
		{
			price: 'CSS',
			name: 'cascading style sheet',
			features: [
				'When: Created in 1996',
				'Who: Håkon Wium Lie, Bert Bos',
				'What: CSS is a style sheet language used for describing the presentation of a document written in HTML or XML.'
			]
		},
		{
			price: 'JavaScript',
			name: 'JS (JavaScript)',
			features: [
				'When: Created in 1995',
				'Who: Brendan Eich',
				'What: JavaScript is a high-level, interpreted programming language that enables interactive web pages and web applications.'
			]
		}
	];
</script>

<div
	class="2xl:mt-[0px] relative mx-auto flex h-[100vh] w-full flex-col items-center justify-center text-center antialiased xs:mt-[25px] sm:mt-[20px] md:mt-[66px] lg:mt-[2px] xl:mt-[6px]"
>
	<div
		class="2xl:mt-[280px] mx-auto mt-[8px] grid h-full grid-cols-1 gap-16 overflow-visible rounded-[4px] pb-[100px] pt-[10px] antialiased xs:w-[400px] sm:mt-[80px] sm:w-[400px] sm:grid-cols-1 md:mt-[264px] md:w-[90%] md:grid-cols-3 lg:mt-[260px] lg:w-[80%] lg:grid-cols-3 xl:mt-[284px] xl:grid-cols-3"
	>
		{#each plans as plan (plan.price)}
			<div
				class="content cards text-outline-[hsla(199,41%,15%,1)] place-self-top relative max-h-[720px] min-w-[260px] rounded-sm border-[1px] object-cover text-center shadow-[1px_1px_6px_1px_hsla(223,91%,23%,0.5)] drop-shadow-[3px_3px_5px_hsla(149,91%,23%,1)] text-shadow-[2px_2px_5px_hsla(199,70%,15%,0.9)] md:h-[420px] md:-translate-y-[150px]"
				style="display: subgrid; grid-template-rows: 1fr 2fr 1fr; grid-template-columns: 1fr;"
			>
				<div class=" mb-0 rounded-sm py-0 antialiased bg-blend-lighten">
					<h3
						class=" font-sans text-4xl font-bold text-white text-shadow-[4px_2px_16px_hsla(265,60%,55%,0.9)]"
					>
						<span class="currency"></span>{plan.price}
					</h3>
				</div>
				<div
					class="line-clamp-3 grid gap-2 bg-purpleone-200 bg-opacity-50 antialiased h-full bg-blend-darken text-shadow-[3px_3px_6px_black]"
				>
					<h4
						class="mx-auto  w-[80%]  pt-2 font-bold text-white"
					>
						{plan.name}
					</h4>
					<ul
						class="list-group text-purpleone-450  w-full px-[2rem] text-center md:px-[1rem]"
					>
						{#each plan.features as feature (feature)}
							<li class="list-group-item font-display text-sm text-white">
								{feature}
							</li>
						{/each}
					</ul>
					<button
						type="button"
						url="https://www.google.com/"
						class="bottom- mx-auto w-[180px] h-[72px] rounded-[6px] border-[2px] bg-purpleone-600 px-0 font-bold uppercase text-astral-100 hover:border-purpleone-700 hover:bg-blueone-100 hover:text-purpleone-700 hover:transition-all active:scale-[97%] active:border-[0px_200px_0px] sm:bottom-[18px] md:w-[200px]"
						>More Info</button
					>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.cards:nth-of-type(1) {
		background-image: url('https://images.unsplash.com/photo-1699885960867-56d5f5262d38?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
		background-position: center;
		background-size: cover;

	}

	.cards:nth-of-type(2) {
		background-image: url('https://images.unsplash.com/photo-1524666643752-b381eb00effb?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
		background-position: center;
		background-size: cover;
	}
	.cards:nth-of-type(3) {
		background-image: url('https://images.unsplash.com/photo-1660054373740-b8fc241e35f4?q=80&w=2805&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
		background-position: center;
		background-size: cover;
	}
</style>
