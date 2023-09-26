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
					class="tracking-tight drop-shadow-[1px_-2px_1px#EF7FFF] mt-[45%] sxs:mt-[8%] xs:mt-[40%] sm:mt-[35%] md:mt-[25%] lg:mt-[18%] xl:mt-[12%]  sxs:text-5xl xs:text-5xl sm:text-7xl font-bold md:text-7xl lg:text-8xl xl:text-9xl from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent"
				>
					Randy de Vries
				</h1>
				<p
					class=" w-full -translate-x-28 translate-y-0 sxs:ml-44  xs:ml-52 xs:text-xs sm:text-sm md:text-base font-semibold font-[sans-serif] from-orange-300 via-cyan-300 to-yellow-300 bg-gradient-to-r bg-clip-text text-transparent"
				>
					Svelte | Tailwind | javaScript
				</p>
				<div class=" mt-8 sm:mt-20">
					<a
						on:click={sendEmail}
						class="  drop-shadow-[1px_1px_3px_rgba(0,255,255,0.9)] inline-block rounded-full border-2 border-cyan-300 w-36 px-[8px] py-[16px] text-md font-semibold uppercase leading-normal hover:text-[#EF7FFF] transition duration-550 ease-in-out hover:border-neutral-100 hover:bg-cyan-600 hover:bg-opacity-10 text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
						data-te-ripple-init
						data-te-ripple-color="light"
						href="#0">Mail mij!</a
					>
					<a
						class="  drop-shadow-[1px_1px_3px_rgba(0,255,255,0.9)] inline-block rounded-full border-2 border-cyan-300 w-36 px-[8px] py-[16px] text-md font-semibold uppercase leading-normal text-[#4de2ef] transition duration-550 ease-in-out hover:border-neutral-100 hover:bg-cyan-600 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
						data-te-ripple-init
						data-te-ripple-color="light"
						href="/about"
						role="button">Over mij</a
					>
				</div>
			</div>
		</div>
	</div>
</section>
