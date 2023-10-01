<script>
	import { sendEmail } from '$lib/index.js';
</script>

<div
	class="gap-2 absolute flex items-center text-center justify-center w-3/4  text-[clamp(0.7rem,3vw,2rem)] transform scale-100"  
>
	<button
		on:click={sendEmail}
		class=" bg-transparent border-bluethree-500  hover:border-purpleone-100 border-[2px] hover:bg-bluethree-500 text-purpleone-100 font-bold py-2 px-5 rounded-[8px] transition duration-300 ease-in-out w-[6rem]"
		data-te-ripple-init
		data-te-ripple-color="light"
		href="#0"
	>
		CONTACT
	</button>

	<a
		class="onclick:animate-wave trans bg-bluethree-500  border-primary-100 border-[2px] hover:border-bluethree-500 hover:bg-transparent text-purpleone-100 font-bold py-2 px-2 rounded-[8px] transition duration-300 ease-in-out w-[6rem]"
		on
		data-te-ripple-init
		data-te-ripple-color="light"
		href="/about"
	>
		INFO
	</a>
</div>
