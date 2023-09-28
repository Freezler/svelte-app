<script>
	import { sendEmail } from '$lib/index.js';
</script>

<div class="flex justify-center items-center">
	<button
		on:click={sendEmail}
		class="bg-transparent border-cyan-400 border-2 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded-[16px] transition duration-300 ease-in-out"
		data-te-ripple-init
		data-te-ripple-color="light"
		href="#0"
	>
		Mail mij!
	</button>

	<a
		class="bg-cyan-400 border-cyan-400 border-2 hover:bg-transparent text-white font-bold py-[10px] px-4 rounded-[16px] transition duration-300 ease-in-out"
		data-te-ripple-init
		data-te-ripple-color="light"
		href="/about"
	>
		Over mij
	</a>
</div>
