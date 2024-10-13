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

<div class="container">
	<section>
		{#each plans as plan}
			<div class="card">
				<div class="flex">
					<h2>{plan.name}</h2>
					<img
						src="https://static.rdc.moveaws.com/images/finance/spot-badge-cash-reward.svg"
						width="48"
						height="48"
						alt=""
					/>
				</div>
				<div class="content">
					{#each plan.features as feature}
						<p>{feature}</p>
					{/each}
				</div>
				<div class="action">try it out</div>
			</div>
		{/each}
	</section>
</div>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr));
		gap: 1rem;
		grid-template-rows: auto 1fr auto;

		max-width: 1280px;
		margin: 4rem auto 0;
	}

	.card {
		display: grid;
		border: 1px solid #cacaca;
		border-radius: 6px;
		padding: 16px;
		grid-template-rows: subgrid;
		grid-row: span 3;
		gap: 5px;
	}

	.flex {
		display: flex;
		gap: 8px;
		border-bottom: 1px solid #cacaca;
	}

	.flex h2 {
		margin-bottom: 10px;
		font-size: 18px;
	}

	img {
		margin-left: auto;
	}

	.content {
		font-size: 15px;
		line-height: 22px;
		margin-bottom: 1.5rem;
	}

	.action {
		font-size: 18px;
		font-weight: 700;
		text-decoration: underline;
		margin-top: 1rem;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		padding: 10px;
		background-color: rgba(187, 184, 184, 0.9);
		gap: 20px;
	}

	.container {
		padding: 1rem;
		margin-top: 1rem;
	}

	* {
		box-sizing: border-box;
	}

	body,
	html {
		height: 100vh;
	}

	body {
		font-family: system-ui, sans-serif;
		margin: 0 auto;
	}
</style>
