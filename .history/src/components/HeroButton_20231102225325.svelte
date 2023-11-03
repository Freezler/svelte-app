<script>
	import { sendEmail } from '$lib/index.js';

	function handleContactButtonClick() {
		// Call the sendEmail function here
		sendEmail();
	}
</script>

<div class="flex flex-col items-center justify-center absolute z-10 min-h-[100%] mx-auto text-center text-[clamp(0.6rem,1.3vw,1.5rem)]">
	<div class="relative">
		<button class="absolute min-w-[6rem] max-w-[10rem] select-none px-5 py-2 font-bold text-purpleone-100 rounded-[8px] border-[2px] border-bluethree-500 bg-transparent transition-transform duration-150 ease-in-out animate-slow-slide-in hover:border-purpleone-100 hover:bg-bluethree-500 active:scale-[97%] active:drop-shadow-[2px_1px_8px_hsla(225,100%,100%,0.3)]" data-te-ripple-init data-te-ripple-color="light" href="#0" on:click={handleContactButtonClick}>
			CONTACT
		</button>
	</div>

	<a class="absolute right-4 min-w-[6rem] max-w-[10rem] px-5 py-2 font-bold text-purpleone-100 rounded-[8px] border-[2px] border-primary-100 bg-bluethree-500 transition-transform duration-300 ease-in-out animate-slow-slide-up hover:border-bluethree-500 hover:bg-transparent active:animate-pulse text-[clamp(0.6rem,1.3vw,1.5rem)]" data-te-ripple-init data-te-ripple-color="dark" href="/about">
		INFO
	</a>
</div>