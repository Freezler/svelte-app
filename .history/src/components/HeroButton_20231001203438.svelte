<script>
	import { sendEmail } from '$lib/index.js';
</script>

<div
	class="absolute z-50 mt-12 flex transform items-center justify-center gap-4 text-center text-[clamp(0.7rem,1.3vw,1.5rem)] "
>
	<button
		data-te-ripple-init
		data-te-ripple-color="light"
		href="#0"
	>
		CONTACT
	</button>

	<a
		class="border-primary-100 relative min-w-[6rem] max-w-[10rem] animate-fast-slide-up rounded-[8px] border-[2px] bg-bluethree-500 px-5 py-2 font-bold text-purpleone-100 transition duration-300 ease-in-out hover:border-bluethree-500 hover:bg-transparent active:animate-btnPulse"
		data-te-ripple-init
		data-te-ripple-color="dark"
		href="/about"
	>
		INFO
	</a>
</div>
