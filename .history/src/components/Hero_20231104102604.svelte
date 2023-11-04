<script>
	import { sendEmail } from '$lib/index.js';

	function handleContactButtonClick() {
		// Call the sendEmail function here
		sendEmail();
	}
</script>

<section
	class="mt-[15%] w-full lg: w-[100%] flex h-[200px] flex-col items-center justify-center bg-slate-400 bg-opacity-30 bg-cover text-center"
	id="home"
>
	<div class="">
		<h1>nieuwe pogine</h1>
		<p>responsieve hero sectie!!</p>
		<div class="[&>*]:border-purplethree-600  [&>*]:py-[2px] [&>*]:px-[6px] [&>*]:border-[1px] [&>*]:drop-shadow-[-1px_3px_4px_goldenrod] [&>*]:rounded-[12px] text-[12px]">
			<button>over mij</button>
			<button>contact</button>
		</div>
	</div>
</section>

<style>
</style>
