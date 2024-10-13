<script>
	// Define your plans as an array of objects
	const plans = [
		{
			price: 'HTML',
			image: 'https://images.unsplash.com/photo-1669023414166-a4cc7c0fe1f5?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			name: 'hyperText markup language',
			features: [
				'When: Created in 1993',
				'Who: Tim Berners-Lee',
				'What: HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications.'
			]
		},
		{
			price: 'CSS',
			image: 'https://images.unsplash.com/photo-1669023414166-a4cc7c0fe1f5?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			name: 'cascading style sheet',
			features: [
				'When: Created in 1996',
				'Who: Håkon Wium Lie, Bert Bos',
				'What: CSS is a style sheet language used for describing the presentation of a document written in HTML or XML.'
			]
		},
		{
			price: 'JavaScript',
			image: 'https://images.unsplash.com/photo-1669023414166-a4cc7c0fe1f5?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
				</div>
				<img src={plan.image} class="object-fit h-[100px]" loading="lazy" alt="tech used" />
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
		grid-template-rows: 1fr 2fr  auto;
		max-width: 1280px;
		margin: 4rem auto 0;
	}

	.card {
		display: grid;
		border: 1px solid #cacaca;
		border-radius: 6px;
		padding: 16px;
		grid-template-rows: subgrid;
		grid-row: span 4;
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
		display: content;

		object-fit: cover;
		object-position: 50% 50%;
		width: 100%;
		height: 100%;
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

</style>
