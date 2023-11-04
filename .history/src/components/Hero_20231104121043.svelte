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
	<div class="flex flex-col gap-0">
		<div class="flex flex-col items-center justify-cen "><Avatar bgColor="hsla(234,100%,59%,0.3)" textColor="white" name="Randy de vries" src="src/assets/svelte.jpg" size="150px" />
		</div>
		<div>
		<h1>nieuwe poging</h1>
		<p>responsieve hero sectie!!</p>
	</div>
		<div class="[&>*]:border-blueone-400  [&>*]:py-[2px] [&>*]:px-[6px] [&>*]:border-[1px]  [&>*]:rounded-[12px] text-[12px]">
			<button class="hover:bg-cyan-600">over mij</button>
			<button class="hover:bg-cyan-600">contact</button>
		</div>
	</div>
</section>

<style>
</style>
