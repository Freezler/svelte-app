<script>
	import HeroButton from './HeroButton.svelte';
</script>

<section
	class="absolute select-none items-center justify-center -translate-y-16 z-5 transparent w-full overflow-hidden bg-center bg-cover bg-no-repeat h-[80%] bg-[url('https://source.unsplash.com/random/?svelte,macbook')]"
>
	<div class="frelative top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
		<div class="flex h-full items-center">
			<div class="bg-secondary-900 bg-opacity-50 px-8 w-screen h-full text-center">
				<div class=" font-display font-semibold">
					<h1
						class="font-mono font-semithin scale-75 -skew-y-2 md:transform-none absolute text-tertiary-200 text-7xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[9rem] border-indigo-500 border-2 px-3 py-1"
					>
						<span class="text-shadow() border-indigo-500">R</span>
						<span class="text-shadow border-indigo-500">A</span>
						<span class="text-shadow border-indigo-500">N</span>
						<span class="text-shadow border-indigo-500">D</span>
						<span class="text-shadow border-indigo-500">Y</span>
					</h1>
					<HeroButton />
				</div>
			</div>
		</div>
	</div>
</section>
