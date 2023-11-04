<script>
	import { sendEmail } from '$lib/index.js';
	import Avatar from 'svelte-avatar';
	function handleContactButtonClick() {
		// Call the sendEmail function here
		sendEmail();
	}
</script>

<section
	class="mt-[50%] xs:mt-[10%] w-full md:w-[60%] mx-auto flex h-[200px] flex-col items-center justify-center bg-slate-400 bg-opacity-30 bg-cover text-center"
	id="home"
>
	<div class="flex flex-col">
		<div class="flex flex-col items-center justify-center"><Avatar name="Randy de vries" src="https://source.unsplash.com/1080x1080/?svelte" size="100px" />
		</div>
		<div>
		<h1>nieuwe poging</h1>
		<p>responsieve hero sectie!!</p>
	</div>
		<div class="[&>*]:border-purplethree-600  [&>*]:py-[2px] [&>*]:px-[6px] [&>*]:border-[1px] [&>*]:drop-shadow-[-1px_3px_4px_goldenrod] [&>*]:rounded-[12px] text-[12px]">
			<button>over mij</button>
			<button>contact</button>
		</div>
	</div>
</section>

<style>
</style>
