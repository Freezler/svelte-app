<script>
	import { sendEmail } from '$lib/index.js';

	function handleContactButtonClick() {
		// Call the sendEmail function here
		sendEmail();
	}
</script>

<section class="m-4 h-[200px] text-center ali bg-cover bg-slate-400 bg-opacity-30" id="home">
	<div class="title-text">
		<h1>A new site</h1>
		<p>with a nice simple hero</p>
	</div>
</section>

<style>
	
	.title-text {
		padding-top: 1rem;
		font-family: 'Inter', 'San Francisco', sans-serif;
	}
	h1 {
		padding-top: 1rem;
		margin-bottom: 0.5rem;
	}
	p {
		margin: 0;
	}
</style>
