<script>
	import { sendEmail } from '$lib/index.js';
</script>

<div
	class="gap-2 absolute flex items-center justify-around w-1/2 border-2 border-red-500 top-2/4 left-1/2 transform scale-80 -translate-x-1/2 translate-y-24"
>
	<button
		on:click={sendEmail}
		class=" bg-transparent border-bluethree-950 border-[2px] hover:bg-bluehree-500 text-purple-100 font-bold py-2 px-4 rounded-[8px] transition duration-300 ease-in-out w-32"
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
