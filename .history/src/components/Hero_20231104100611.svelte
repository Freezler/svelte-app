<script>
	import { sendEmail } from '$lib/index.js';

	function handleContactButtonClick() {
		// Call the sendEmail function here
		sendEmail();
	}
</script>

<section class="flex m-4 h-[200px] text-center  bg-cover bg-slate-400 bg-opacity-30" id="home">
	<div class="flex flex-col items-center justify-center">
		<h1>A new site</h1>
		<p>with a nice simple hero</p>
	</div>
</section>

<style>
</style>
