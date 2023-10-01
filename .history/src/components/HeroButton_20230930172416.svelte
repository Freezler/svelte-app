<script>
	import { sendEmail } from '$lib/index.js';
</script>

<div
	class="gap-6 absolute flex bottom-48 text-center justify-center w-4/5 text-[clamp(0.7rem,3vw,2rem)] transform scale-100"
>
	<button
		on:click={sendEmail}
		class="outline-none  bg-transparent border-bluethree-500 hover:border-purpleone-100 border-[2px] hover:bg-bluethree-500 text-purpleone-100 font-bold py-2 px-5 rounded-[8px] transform active:scale-97 transition-transform duration-300 ease-in-out w-[6rem]"
		data-te-ripple-init
		data-te-ripple-color="light"
		href="#0"
	>
		CONTACT
	</button>

	<a
		class="bg-bluethree-500 border-primary-100 border-[2px] hover:border-bluethree-500 hover:bg-transparent text-purpleone-100 font-bold py-2 px-2 rounded-[8px] transition duration-300 ease-in-out w-[6rem]"
		data-te-ripple-init
		data-te-ripple-color="light"
		href="/about"
	>
		INFO
	</a>
</div>
