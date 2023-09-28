<script>
	import HeroButton from './HeroButton.svelte';
</script>

<section
	class="absolute select-none items-center justify-center z-5 transparent w-full overflow-hidden bg-center bg-cover bg-no-repeat h-[100%] bg-[url('./assets/svelte.jpg')]"
>
	<div class="relative top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
		<div class="flex h-full items-center">
			<div class="bg-bluetwo-950 bg-opacity-50 w-screen h-full text-center">
				<div class="flex flex-col items-center justify-center w-full h-full">
					<h1
						class="tracking-tight w-[100%] font-sans font-semithin -skew-y-2 -space-x-4 md:transform-none absolute text-blueone-500 text-[clamp(5rem,8vw,4rem)] top-[17rem] left-1/2 transform -translate-x-1/2 -translate-y-[9rem]"
					>
						<span class="text-shadow-[-3px_-3px_10px_purple]">R</span>
						<span class="text-shadow-[-3px_-3px_10px_purple]">A</span>
						<span class="text-shadow-[-2px_-2px_10px_purple]">N</span>
						<span class="text-shadow-[-2px_-1px_10px_purple]">D</span>
						<span class="text-shadow-[-1px_-1px_10px_purple]">Y</span>
					</h1>
					<p class="text-[clamp(0.8rem,2vw,1.5rem)]line-clamp-4 justify-center items-center">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eligendi repudiandae veritatis ea, voluptates id.
					</p>
					<HeroButton />
				</div>
			</div>
		</div>
	</div>
</section>
