<script>
	import { sendEmail } from '$lib/index.js';

	function handleContactButtonClick() {
		// Call the sendEmail function here
		sendEmail();
	}
</script>

<div class="mx-auto md:hidden relative mt-40 xs:mt-24 sm:mt-36 md:mt-6 xl:mt-48 min-h-[100%] z-10 flex items-center justify-center gap-2 text-center text-[clamp(0.6rem,1.3vw,1.5rem)]">
	<div class="relative">
		<button
			class="left-4 absolute animate-slow-slide-in min-w-[6rem] max-w-[10rem] select-none rounded-[8px] border-[2px] border-bluethree-500 bg-transparent px-5 py-2 font-bold text-purpleone-100 drop-shadow-[2px_1px_5px_hsla(225,100%,100%,0.3)] transition-transform duration-150 ease-in-out hover:border-purpleone-100 hover:bg-bluethree-500 active:scale-[97%] active:drop-shadow-[2px_1px_8px_hsla(225,100%,100%,0.3)]"
			data-te-ripple-init
			data-te-ripple-color="light"
			href="#0"
			on:click={handleContactButtonClick}
		>
			CONTACT
		</button>
	</div>

	<a
		class="text-center text-[clamp(0.6rem,1.3vw,1.5rem)] xs:flex border-primary-100 right-4 relativ min-w-[6rem] max-w-[10rem] animate-slow-slide-up rounded-[8px] border-[2px] bg-bluethree-500 px-5 py-2 font-bold text-purpleone-100 transition duration-300 ease-in-out hover:border-bluethree-500 hover:bg-transparent active:animate-pulse"
		data-te-ripple-init
		data-te-ripple-color="dark"
		href="/about"
	>
		INFO
	</a>
</div>