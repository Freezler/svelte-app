<script>
	import { sendEmail } from '$lib/index.js';

	function handleContactButtonClick() {
		// Call the sendEmail function here
		sendEmail();
	}
</script>

<section class="h-[200px]" id="home">
	<div class="title-text">
		<h1>A new site</h1>
		<p>with a nice simple hero</p>
	</div>
</section>

<style>
	.banner {
		height: 200px;
		text-align: center;
		background: linear-gradient(90deg, #45bbdb 0%, #b11cbe 100%);
		background-size: cover;
	}
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
