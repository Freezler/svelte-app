<script>
	import { sendEmail } from '$lib/index.js';

	function handleContactButtonClick() {
		// Call the sendEmail function here
		sendEmail();
	}
</script>

<section
	class="m-8 flex h-[200px] flex-col items-center justify-center bg-slate-400 bg-opacity-30 bg-cover text-center"
	id="home"
>
	<div class="">
		<h1>A new site</h1>
		<p>with a nice simple hero</p>
		<div class="[&>*]:border-purplethree-600  [&>*]:py-[2px] [&>*]:px-[6px] [&>*]:border-[1px] [&>*]:drop-shadow-[-1px_3px_4px_goldenrod] [&>*]:rounded-[12px] text-xs">
			<button>over mij</button>
			<button>contact</button>
		</div>
	</div>
</section>

<style>
</style>
