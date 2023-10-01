<script>
	import { sendEmail } from '$lib/index.js';
</script>

<div
	class="gap-2 absolute flex items-center justify-center w-1/2  text-[clamp(1.5rem,3vw,2rem)] transform scale-100  "
>
	<button
		on:click={sendEmail}
		class=" bg-transparent border-bluethree-500  hover:border-purpleone-100 border-[2px] hover:bg-bluethree-500 text-purpleone-100 font-bold py-2 px-4 rounded-[8px] transition duration-300 ease-in-out w-32"
		data-te-ripple-init
		data-te-ripple-color="light"
		href="#0"
	>
		CONTACT
	</button>

	<a
		class=" bg-bluethree-500 border-primary-100 border-[2px] hover:bg-transparent text-purpleone-100 font-bold py-2 px-4 rounded-[8px] transition duration-300 ease-in-out w-32"
		data-te-ripple-init
		data-te-ripple-color="light"
		href="/about"
	>
		INFO
	</a>
</div>
