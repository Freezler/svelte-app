<script>
	import HeroButton from './HeroButton.svelte';
</script>

<section
	class="absolute select-none items-center justify-center z-5 transparent w-full overflow-hidden bg-center bg-cover bg-no-repeat h-[100%] bg-[url('https://source.unsplash.com/random/?svelte,macbook')]"
>
	<div class="frelative top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
		<div class="flex h-full items-center">
			<div class="bg-secondary-900 bg-opacity-50 px-8 w-screen h-full text-center">
				<div class="flex flex-col items-center w-full">
					<h1
						class="tracking-tighter w-[100%]  font-sans font-semithin -skew-y-2 -space-x-4 md:transform-none absolute text-tertiary-200 text-[clamp(5rem,8vw,4rem)] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[9rem]"
					>
						<span class="text-shadow-[0_4px_1px_goldenrod]">R</span>
						<span class="text-shadow-[0_4px_1px_goldenrod]">A</span>
						<span class="text-shadow-[0_4px_1px_purple]">N</span>
						<span class="text-shadow-[0_4px_1px_purple]">D</span>
						<span class="text-shadow-[0_4px_1px_purple]">Y</span>
					</h1>
					<HeroButton />
				</div>
			</div>
		</div>
	</div>
</section>
