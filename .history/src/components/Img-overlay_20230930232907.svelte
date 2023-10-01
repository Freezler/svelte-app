<script>
	import HeroButton from './HeroButton.svelte';
</script>

<section
	class="transparent absolute h-screen w-full select-none items-center justify-center overflow-hidden bg-gradient-to-b hsla(11, 25%, 50%, 0.9) via-hsla(15, 0%, 100%, 0.9) to-hsla(15, 0%, 100%, 0.9) bg-cover bg-center bg-no-repeat "
>
	<div class="relative bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
		<div class="flex h-full items-center">
			<div class="bg-bluetwo-90 h-full w-screen bg-opacity-50 text-center">
				<div class="relative flex h-full w-full flex-col items-center justify-center shadow-[3px_3px_6px_#ff3d00]">
					<h1
						class="w-[100%] -skew-y-2 transform animate-fast-slide-up -space-x-4 font-display text-[clamp(5rem,8vw,4rem)] font-bold tracking-tight text-astral-700 md:transform-none"
					>
						{#each 'RANDY' as char}
							<span class="uppercase text-shadow-[-3px_-3px_6px_#dfe2ff]">
								{char}
							</span>
						{/each}
					</h1>
					<p
						class="text-[clamp(0.8rem,2vw,1.5rem)] w-[50%] line-clamp-4 items-center justify-center text-greenone-100 font-mono md:text-200"
					>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eligendi
						repudiandae veritatis ea, voluptates id.
					</p>
					<HeroButton />
				</div>
			</div>
		</div>
	</div>
</section>
