<script>
	import { sendEmail } from '$lib/index.js';
	import { Button } from 'flowbite-svelte';

	function handleContactButtonClick() {
		// Call the sendEmail function here
		sendEmail();
	}
</script>

<section class="flex flex-col items-center justify-center m-8 h-[200px] text-center  bg-cover bg-slate-400 bg-opacity-30" id="home">
	<div class="">
		<h1>A new site</h1>
		<p>with a nice simple hero</p>
		<button>Contact</button>
	</div>
</section>

<style>
</style>
