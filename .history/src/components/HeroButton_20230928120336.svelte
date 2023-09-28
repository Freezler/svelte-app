<script>
	import { sendEmail } from '$lib/index.js';
</script>

<div class="absolute flex items-center justify-center w-full top-1/2 left-1/2 transform scale-180 -translate-x-1/2 -translate-y-1/2">
	<button
		on:click={sendEmail}
		class="bg-transparent border-cyan-400 border-2 hover:bg-cyan-400 text-white font-bold py-2 px-4 w-[1/2] rounded-[12px] transition duration-300 ease-in-out"
		data-te-ripple-init
		data-te-ripple-color="light"
		href="#0"
	>
		Mail mij!
	</button>

	<a
		class="bg-cyan-400 border-primary-100 border-2 hover:bg-transparent text-white font-bold py-2 px-4 w-[1/2] rounded-[16px] transition duration-300 ease-in-out"
		data-te-ripple-init
		data-te-ripple-color="light"
		href="/about"
	>
		Over mij
	</a>
</div>
