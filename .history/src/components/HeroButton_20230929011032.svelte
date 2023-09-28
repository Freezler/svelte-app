<script>
	import { sendEmail } from '$lib/index.js';
</script>

<div
	class="gap-2 absolute flex items-center justify-center w-full top-2/4 left-1/2 transform scale-85 -translate-x-1/2 translate-y-24"
>
	<button
		on:click={sendEmail}
		class=" bg-transparent border-[#638cce] border-[1px] hover:[#638cce] text-tertiary-400 font-bold py-2 px-4 rounded-[8px] transition duration-300 ease-in-out w-1/3"
		data-te-ripple-init
		data-te-ripple-color="light"
		href="#0"
	>
		CONTACT
	</button>

	<a
		class=" bg-bluethree-500 border-primary-100 border-[1px] hover:bg-transparent text-purpleone-100 font-bold py-2 px-4 rounded-[8px] transition duration-300 ease-in-out w-1/3"
		data-te-ripple-init
		data-te-ripple-color="light"
		href="/about"
	>
		INFO
	</a>
</div>
