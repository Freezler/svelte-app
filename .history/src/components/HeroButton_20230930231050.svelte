<script>
	import { sendEmail } from '$lib/index.js';
</script>

<div
	class="absolute bottom-48 flex w-4/5 scale-100 transform items-center justify-center gap-8 text-center text-[clamp(0.7rem,1.3vw,1.5rem)] focus:select-none"
>
	<button
		class="px-5 min-w-[7rem] max-w-[10rem] transform select-none rounded-[8px] border-[2px] border-bluethree-500 bg-transparent px-2 py-2 font-bold text-purpleone-100 drop-shadow-[2px_1px_5px_hsla(225,100%,100%,0.3)] transition-transform duration-150 cubic-bezier(0.215, 0.61, 0.355, 1) hover:border-purpleone-100 hover:bg-bluethree-500 active:scale-[97%] active:drop-shadow-[2px_1px_8px_hsla(225,100%,100%,0.5)]"
		data-te-ripple-init
		data-te-ripple-color="light"
		href="#0"
	>
		CONTACT
	</button>

	<a
		class="border-primary-100 min-w-[7rem] max-w-[10rem] rounded-[8px] border-[2px] bg-bluethree-500 px-2 py-2 font-bold text-purpleone-100 transition duration-300 ease-in-out hover:border-bluethree-500 hover:bg-transparent active:animate-btnPulse"
		data-te-ripple-init
		data-te-ripple-color="dark"
		href="/about"
	>
		INFO
	</a>
</div>
