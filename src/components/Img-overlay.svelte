<script>
	import { sendEmail } from '$lib/index.js';

	let show = false;
</script>

<section
	class="select-none items-center justify-center -translate-y-16 z-5 transparent relative w-full overflow-hidden bg-cover bg-no-repeat bg-[70%] h-[550px] bg-[url('https://source.unsplash.com/random/?svelte,macbook')]"
>
	<div class="relative top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
		<div class="flex h-full items-center justify-center">
			<div class="bg-black bg-opacity-50 px-8 w-screen h-full text-center text-white">
				<h1
					class="tracking-tight drop-shadow-[1px_1px_3px_rgba(0,255,255,0.9)] mt-[45%] sxs:mt-[60%] xs:mt-[40%] sm:mt-[35%] md:mt-[25%] lg:mt-[18%] xl:mt-[12%] sxs:text-4xl xs:text-5xl sm:text-7xl font-bold md:text-7xl lg:text-8xl xl:text-9xl from-[hsla(288,51%,90%,0.8)] via-[]hsla(288,51%,90%,0.7)] to-blue-700 bg-gradient-to-r bg-clip-text text-transparent"
				>
					Randy de Vries
				</h1>
				<p
					class=" w-full -translate-x-28 translate-y-0 sxs:ml-44 xs:ml-52 sxs:text-xs xs:text-sm sm:font-base md:font-base lg:font-base xl:font-sans sm:text-sm md:text-base font-semibold font-[sans-serif] from-orange-300 via-cyan-300 to-yellow-300 bg-gradient-to-r bg-clip-text text-transparent"
				>
					Svelte | Tailwind | javaScript
				</p>
				<div class=" mt-8 sm:mt-32">
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
			</div>
		</div>
	</div>
</section>
