<script>
	import { sendEmail } from '$lib/index.js';
	function handleContactButtonClick() {
		// Call the sendEmail function here
		sendEmail();
	}
</script>

<section
	class="mx-auto mt-[50%] flex h-[200px] w-full flex-col items-center justify-center bg-slate-400 bg-opacity-30 bg-cover text-center xs:mt-[10%] md:w-[60%]"
	id="home"
>
	<div class="">
		<Avatar />
		<h1>nieuwe poging</h1>
		<p>responsieve hero sectie!!</p>
		<div
			class="text-[12px] [&>*]:rounded-[12px] [&>*]:border-[1px] [&>*]:border-purplethree-600 [&>*]:px-[6px] [&>*]:py-[2px] [&>*]:drop-shadow-[-1px_3px_4px_goldenrod]"
		>
			<button>over mij</button>
			<button>contact</button>
		</div>
	</div>
</section>

<style>
</style>
