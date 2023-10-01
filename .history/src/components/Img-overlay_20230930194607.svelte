<script>
	import HeroButton from './HeroButton.svelte';
</script>

<section
	class="absolute select-none items-center justify-center  transparent w-full overflow-hidden bg-center bg-cover bg-no-repeat h-screen bg-gradient-to-tr from-astral-950 via-astral-800 to-astral-700"
>
	<div class=" relative top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
		<div class="flex h-full items-center">
			<div class="bg-bluetwo-90 bg-opacity-50 w-screen h-full text-center">
				<div class="flex flex-col items-center justify-center relative w-full h-full">
					<h1
						class=" animate-fast-slide-up tracking-tight w-[100%] font-display font-bold -skew-y-2 -space-x-4 md:transform-none  text-astral-300 text-[clamp(5rem,8vw,4rem)] top-0 transform"
					>
					{#each 'RANDY' as char}
						<span class="uppercase text-shadow-[-3px_-3px_6px_#dfe2ff] ">{ char }</span>
						{/each}
					</h1>
					<p class="text-red-200 text-[clamp(0.8rem,2vw,1.5rem)]line-clamp-4 justify-center items-center">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eligendi repudiandae veritatis ea, voluptates id.
					</p>
					<HeroButton />
				</div>
			</div>
		</div>
	</div>
</section>
